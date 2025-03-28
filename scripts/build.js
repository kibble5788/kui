const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

// 确保输出目录存在
const dirs = ['lib', 'es'];
dirs.forEach((dir) => {
  if (!fs.existsSync(path.resolve(__dirname, `../${dir}`))) {
    fs.mkdirSync(path.resolve(__dirname, `../${dir}`));
  }
});

// 编译 TypeScript
console.log('正在编译 TypeScript...');
exec('tsc -p tsconfig.json', (err) => {
  if (err) {
    console.error('TypeScript 编译失败:', err);
    return;
  }
  
  console.log('TypeScript 编译成功!');
  
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
      },
      globalObject: 'this',
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
  });
}); 