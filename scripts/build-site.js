const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

// 确保dist目录存在
const distDir = path.resolve(__dirname, '../dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// 创建public目录和index.html
const publicDir = path.resolve(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// 创建index.html文件
const indexHtmlContent = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>KUI 组件库</title>
  <meta name="description" content="一个现代化的React UI组件库，提供优雅、简洁的设计体验">
  <link rel="stylesheet" href="./index.css">
</head>
<body>
  <div id="root"></div>
  <script src="./index.js"></script>
</body>
</html>`;

fs.writeFileSync(path.resolve(publicDir, 'index.html'), indexHtmlContent);

console.log('正在构建静态网站...');
webpack({
  mode: 'production',
  entry: './site/index.tsx',
  output: {
    path: distDir,
    filename: 'bundle.js',
    publicPath: './'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
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
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    // 复制public目录中的文件到dist目录
    {
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap('CopyPublicPlugin', () => {
          if (fs.existsSync(path.resolve(__dirname, '../public'))) {
            fs.readdirSync(path.resolve(__dirname, '../public')).forEach(file => {
              fs.copyFileSync(
                path.resolve(__dirname, '../public', file),
                path.resolve(distDir, file)
              );
            });
          }
        });
      }
    }
  ]
}, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.error('构建失败:', err || stats.toString({
      chunks: false,
      colors: true,
    }));
    return;
  }
  
  console.log('静态网站构建成功! 输出目录: dist');
  console.log('你可以将dist目录部署到GitHub Pages服务');
}); 