# KUI 组件库

一个现代化的React UI组件库，提供优雅、简洁的设计体验。

## 特性

- 🎨 优雅美观：提供美观且简洁的设计体验
- 🛠️ 易于定制：支持灵活的主题定制
- 💡 类型友好：使用TypeScript编写，提供完整的类型定义
- 📦 开箱即用：提供丰富的组件，满足各种业务场景

## 安装

```bash
# 使用 npm
npm install @ked3/kui

# 使用 yarn
yarn add @ked3/kui
```

## 快速开始

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '@ked3/kui';
import '@ked3/kui/dist/kui.css';

function App() {
  return (
    <div>
      <Button type="primary">开始使用</Button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

## 本地开发

```bash
# 克隆仓库
git clone <repository-url>

# 安装依赖
npm install

# 启动开发服务器
npm start
```

## 构建

```bash
npm run build
```

## 组件

目前已实现的组件：

- Button 按钮：提供多种按钮类型、尺寸和状态

## 贡献指南

欢迎贡献代码或提出问题。请先阅读贡献指南。

## 许可证

MIT 