const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
const TerserPlugin = require('terser-webpack-plugin');
const distDir = path.resolve(__dirname, '../site/dist');
const publicDir = path.resolve(__dirname, '../site/public');

// 确保目录存在
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 创建index.html文件
const indexHtmlContent = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>KUI 组件库</title>
  <meta name="description" content="一个现代化的React UI组件库，提供优雅、简洁的设计体验">
</head>
<body>
  <div id="root"></div>
  <script src="./bundle.js"></script>
</body>
</html>`;

// 将 index.html 写入到 dist 目录
fs.writeFileSync(path.resolve(distDir, 'index.html'), indexHtmlContent);

console.log('正在构建静态网站...');
webpack({
  mode: 'production',
  entry: './site/index.tsx',
  output: {
    path: distDir,
    filename: 'bundle.js',
    publicPath: './'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
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
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]'
              }
            }
          },
          'less-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]'
              }
            }
          }
        ],
      },
    ],
  },
  plugins: []
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