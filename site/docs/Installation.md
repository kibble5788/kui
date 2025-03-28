# 安装指南

## 环境准备

确保你的开发环境中安装了 Node.js (>= 14.0.0)。

## 安装

你可以使用 npm 或 yarn 来安装 KUI。

### 使用 npm 安装

```bash
npm install @ked3/kui
```

### 使用 yarn 安装

```bash
yarn add @ked3/kui
```

## 快速上手

在项目中引入组件：

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '@ked3/kui';
import '@ked3/kui/dist/kui.css';

function App() {
  return (
    <div>
      <Button type="primary">KUI 按钮</Button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

## 按需加载

如果你使用 babel，可以使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 来按需加载组件，减小打包体积。

```js
// .babelrc 或 babel-loader 配置
{
  "plugins": [
    ["import", { "libraryName": "@ked3/kui", "style": true }]
  ]
}
```

然后你可以这样引入组件：

```jsx
import { Button } from '@ked3/kui';
```

这样就会只引入 Button 组件及其样式，而不是整个库。 