# 主题定制

KUI 提供了灵活的主题定制能力，你可以通过修改 Less 变量来定制组件库的样式。

## 基本使用

KUI 使用 Less 作为样式语言，并定义了一系列全局性变量，定制主题也就是对这些变量的修改。

## 定制方式

### 1. 使用 ConfigProvider 进行全局配置

通过 `ConfigProvider` 组件可以配置全局主题，为组件提供统一的全局化配置：

```jsx
import { ConfigProvider, Button } from '@ked3/kui';

export default () => (
  <ConfigProvider
    theme={{
      primaryColor: '#1890ff',
      successColor: '#52c41a',
      warningColor: '#faad14',
      errorColor: '#f5222d',
    }}
  >
    <Button type="primary">主题按钮</Button>
  </ConfigProvider>
);
```

### 2. 通过 Less 变量覆盖

如果你使用了 webpack 和 less-loader，可以通过配置 less-loader 的 modifyVars 来进行主题定制：

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [{
      test: /\.less$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
      }, {
        loader: 'less-loader',
        options: {
          lessOptions: {
            modifyVars: {
              'primary-color': '#1DA57A',
              'border-radius-base': '2px',
            },
            javascriptEnabled: true,
          },
        },
      }],
    }],
  },
};
```

### 3. 直接引入样式文件（推荐）

在 `src/styles/custom.less` 文件中：

```less
@import '~@ked3/kui/dist/styles/variables.less';

// 修改变量
@primary-color: #1DA57A;
@border-radius-base: 2px;

// 引入组件样式
@import '~@ked3/kui/dist/styles/index.less';
```

然后在项目入口文件中引入该样式文件：

```jsx
import './styles/custom.less';
```

## 主题变量

以下是一些常用的主题变量：

| 变量名 | 说明 | 默认值 |
| --- | --- | --- |
| @primary-color | 主色 | #4e6ef2 |
| @success-color | 成功色 | #52c41a |
| @warning-color | 警告色 | #faad14 |
| @error-color | 错误色 | #f5222d |
| @font-size-base | 主字号 | 14px |
| @heading-color | 标题色 | rgba(0, 0, 0, 0.85) |
| @text-color | 主文本色 | rgba(0, 0, 0, 0.65) |
| @text-color-secondary | 次文本色 | rgba(0, 0, 0, 0.45) |
| @disabled-color | 失效色 | rgba(0, 0, 0, 0.25) |
| @border-radius-base | 组件/浮层圆角 | 4px |
| @border-color-base | 边框色 | #d9d9d9 |
| @box-shadow-base | 浮层阴影 | 0 2px 8px rgba(0, 0, 0, 0.15) | 