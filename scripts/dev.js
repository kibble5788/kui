const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const path = require('path');

const compiler = webpack({
  mode: 'development',
  entry: './site/index.tsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json']
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
});

const devServer = new WebpackDevServer({
  port: 3000,
  static: {
    directory: path.join(__dirname, '../site/public'),
  },
  open: true,
  hot: true,
}, compiler);

devServer.start().then(() => {
  console.log('开发服务器运行在 http://localhost:3000');
}); 