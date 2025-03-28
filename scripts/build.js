const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
const TerserPlugin = require('terser-webpack-plugin');

// 清理目录的工具函数
function removeDir(dir) {
  if (fs.existsSync(dir)) {
    try {
      // 使用同步版本的exec，确保删除操作完成后再继续
      const { error, stdout, stderr } = require('child_process').execSync(`rm -rf "${dir}"`, { encoding: 'utf8' });
      console.log(`成功删除目录: ${dir}`);
      
      if (error) {
        console.error(`删除目录时出错: ${error}`);
      }
    } catch (e) {
      console.error(`删除目录异常: ${e.message}`);
    }
  }
}

// 移动文件的工具函数
function moveFiles(sourceDir, targetDir) {
  if (!fs.existsSync(sourceDir)) return;
  
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  
  const files = fs.readdirSync(sourceDir);
  
  files.forEach(file => {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);
    
    if (fs.statSync(sourcePath).isDirectory()) {
      // 如果目标目录已存在，仅移动内容；否则直接移动整个目录
      if (fs.existsSync(targetPath)) {
        moveFiles(sourcePath, targetPath);
      } else {
        // 目标目录不存在，创建并移动内容
        fs.mkdirSync(targetPath, { recursive: true });
        moveFiles(sourcePath, targetPath);
      }
      
      // 递归调用完成后删除目录
      if (fs.existsSync(sourcePath) && fs.readdirSync(sourcePath).length === 0) {
        fs.rmSync(sourcePath, { recursive: true });
      }
    } else {
      // 检查目标文件是否已存在
      if (fs.existsSync(targetPath)) {
        // 如果已存在，检查是否相同
        const sourceContent = fs.readFileSync(sourcePath);
        const targetContent = fs.readFileSync(targetPath);
        
        // 如果内容不同，使用源文件覆盖目标文件
        if (Buffer.compare(sourceContent, targetContent) !== 0) {
          fs.copyFileSync(sourcePath, targetPath);
        }
      } else {
        // 如果不存在，直接复制
        fs.copyFileSync(sourcePath, targetPath);
      }
      
      // 复制完成后删除源文件
      fs.unlinkSync(sourcePath);
    }
  });
}

// 清理输出目录
console.log('清理输出目录...');
const esDir = path.resolve(__dirname, '../es');
if (fs.existsSync(esDir)) {
  removeDir(esDir);
  console.log('已清理es目录');
}

// 确保输出目录存在
const dirs = ['lib', 'es'];
dirs.forEach((dir) => {
  if (!fs.existsSync(path.resolve(__dirname, `../${dir}`))) {
    fs.mkdirSync(path.resolve(__dirname, `../${dir}`));
  }
});

// 添加标志位表示TypeScript编译是否完成
let typescriptCompiled = false;

// 处理编译结果的函数
function processCompileResult() {
  console.log('处理编译结果...');
  
  // 1. 将 es/components 中的内容移动到 es 根目录
  const componentsDir = path.resolve(__dirname, '../es/components');
  const esDir = path.resolve(__dirname, '../es');
  
  if (fs.existsSync(componentsDir)) {
    // 移动文件
    moveFiles(componentsDir, esDir);
    
    // 确保删除原目录及其所有内容
    if (fs.existsSync(componentsDir)) {
      removeDir(componentsDir);
      
      // 再次检查并确认组件目录已被删除
      if (fs.existsSync(componentsDir)) {
        console.error('警告: 无法删除components目录，尝试强制删除');
        try {
          fs.rmdirSync(componentsDir, { recursive: true, force: true });
        } catch (e) {
          console.error(`强制删除失败: ${e.message}`);
        }
      }
    }
    
    console.log('成功将 components 内容移动到 es 根目录');
  }
  
  // 2. 修复导入路径
  console.log('修复导入路径...');
  updateImportPaths(esDir);
  
  console.log('处理完成!');
}

// 修复导入路径的函数
function updateImportPaths(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    
    if (fs.statSync(filePath).isDirectory()) {
      // 递归处理子目录
      updateImportPaths(filePath);
    } else if (file.endsWith('.js') || file.endsWith('.d.ts')) {
      // 处理 JS 和 TS 定义文件
      let content = fs.readFileSync(filePath, 'utf8');
      
      // 替换相对导入路径
      // ../hooks => ../hooks (保持不变，因为hooks已经在根目录)
      // ../../hooks => ../hooks (减少一层目录)
      // ./interface => ./interface (保持不变)
      content = content.replace(/from\s+['"]\.\.\/\.\.\/hooks['"]/g, 'from \'../hooks\'');
      
      fs.writeFileSync(filePath, content);
    }
  });
}

// 编译 TypeScript
console.log('正在编译 TypeScript...');
exec('npx tsc -p tsconfig.json', (err) => {
  if (err) {
    console.error('TypeScript 编译失败:', err);
    return;
  }
  
  console.log('TypeScript 编译成功!');
  
  // 处理编译结果
  processCompileResult();
  
  // 复制样式文件
  copyStyleFiles();
  
  // 设置编译完成标志
  typescriptCompiled = true;
  
  // 构建 webpack 生产包
  console.log('正在构建生产包...');
  webpack({
    mode: 'production',
    entry: './components/index.ts',
    output: {
      path: path.resolve(__dirname, '../lib'),
      filename: 'index.js',
      library: {
        name: 'kui',
        type: 'umd',
        export: 'default',
      },
      globalObject: 'this',
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          extractComments: false,
        }),
      ],
    },
    externals: {
      react: {
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'react',
        root: 'React',
      },
      'react-dom': {
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
        amd: 'react-dom',
        root: 'ReactDOM',
      },
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(tsx|ts)$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.less$/,
          use: [
            'style-loader',
            'css-loader',
            'less-loader',
          ],
        },
      ],
    },
  }, (err, stats) => {
    if (err || stats.hasErrors()) {
      console.error('构建失败:', err || stats.toString({
        chunks: false,
        colors: true,
      }));
      return;
    }
    
    console.log('构建成功! 输出目录: lib 和 es');
    
    // 再次检查和删除components目录
    const componentsDir = path.resolve(__dirname, '../es/components');
    if (fs.existsSync(componentsDir)) {
      console.log('发现残留的components目录，正在删除...');
      // 使用同步方式直接强制删除
      fs.rmdirSync(componentsDir, { recursive: true, force: true });
    }
    
    // 验证es目录结构
    validateEsDirectory();
  });
});

// 验证es目录结构的函数
function validateEsDirectory() {
  const esDir = path.resolve(__dirname, '../es');
  
  // 在验证前先尝试最后一次强制删除
  const componentsDir = path.join(esDir, 'components');
  if (fs.existsSync(componentsDir)) {
    console.log('最终检查: 发现components目录仍然存在，尝试最后强制删除');
    try {
      fs.rmSync(componentsDir, { recursive: true, force: true });
    } catch (e) {
      console.error(`最终删除失败: ${e.message}`);
    }
  }
  
  // 检查components目录是否已被移除
  if (fs.existsSync(path.join(esDir, 'components'))) {
    console.error('警告: es目录中仍存在components目录，结构调整可能未成功');
  } else {
    console.log('验证通过: components目录已成功扁平化到es根目录');
  }
  
  // 检查index.js文件是否存在
  if (fs.existsSync(path.join(esDir, 'index.js'))) {
    console.log('验证通过: 入口文件index.js已生成');
  } else {
    console.error('警告: 未找到入口文件es/index.js');
  }
  
  // 检查button组件是否存在
  if (fs.existsSync(path.join(esDir, 'button'))) {
    console.log('验证通过: button组件已成功移动到es根目录');
  } else {
    console.error('警告: 未找到button组件目录');
  }

  // 检查style目录是否存在
  if (fs.existsSync(path.join(esDir, 'style'))) {
    console.log('验证通过: style目录已成功复制到es根目录');
  } else {
    console.error('警告: 未找到style目录，正在复制...');
    copyStyleFiles();
  }
}

// 复制样式文件的函数
function copyStyleFiles() {
  console.log('正在复制样式文件...');
  const sourceStyleDir = path.resolve(__dirname, '../components/style');
  const targetStyleDir = path.resolve(__dirname, '../es/style');
  
  // 复制组件根目录下的style文件夹
  if (fs.existsSync(sourceStyleDir)) {
    // 确保目标目录存在
    if (!fs.existsSync(targetStyleDir)) {
      fs.mkdirSync(targetStyleDir, { recursive: true });
    }
    
    // 复制文件
    fs.readdirSync(sourceStyleDir).forEach(file => {
      const sourcePath = path.join(sourceStyleDir, file);
      const targetPath = path.join(targetStyleDir, file);
      
      if (fs.statSync(sourcePath).isDirectory()) {
        // 递归复制子目录
        copyDirRecursive(sourcePath, targetPath);
      } else {
        fs.copyFileSync(sourcePath, targetPath);
      }
    });
    
    console.log('成功复制根style目录');
  }
  
  // 查找并复制组件子目录中的style文件夹
  const componentsDir = path.resolve(__dirname, '../components');
  fs.readdirSync(componentsDir).forEach(component => {
    const componentPath = path.join(componentsDir, component);
    
    // 跳过非目录和style目录本身
    if (!fs.statSync(componentPath).isDirectory() || component === 'style') {
      return;
    }
    
    const componentStyleDir = path.join(componentPath, 'style');
    if (fs.existsSync(componentStyleDir)) {
      const targetComponentDir = path.join(path.resolve(__dirname, '../es'), component);
      const targetComponentStyleDir = path.join(targetComponentDir, 'style');
      
      // 确保目标组件目录存在
      if (!fs.existsSync(targetComponentDir)) {
        fs.mkdirSync(targetComponentDir, { recursive: true });
      }
      
      // 确保目标组件style目录存在
      if (!fs.existsSync(targetComponentStyleDir)) {
        fs.mkdirSync(targetComponentStyleDir, { recursive: true });
      }
      
      // 复制文件
      fs.readdirSync(componentStyleDir).forEach(file => {
        const sourcePath = path.join(componentStyleDir, file);
        const targetPath = path.join(targetComponentStyleDir, file);
        
        if (fs.statSync(sourcePath).isDirectory()) {
          // 递归复制子目录
          copyDirRecursive(sourcePath, targetPath);
        } else {
          fs.copyFileSync(sourcePath, targetPath);
        }
      });
      
      console.log(`成功复制 ${component}/style 目录`);
    }
  });
}

// 递归复制目录的辅助函数
function copyDirRecursive(src, dest) {
  // 创建目标目录
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  // 复制目录内容
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      // 递归复制子目录
      copyDirRecursive(srcPath, destPath);
    } else {
      // 复制文件
      fs.copyFileSync(srcPath, destPath);
    }
  }
} 