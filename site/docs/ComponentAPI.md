# 组件 API 文档

## Button 按钮

按钮用于开始一个即时操作。

### API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮类型 | `'default' \| 'primary' \| 'danger' \| 'link'` | `'default'` |
| size | 按钮大小 | `'small' \| 'medium' \| 'large'` | `'medium'` |
| disabled | 是否禁用按钮 | `boolean` | `false` |
| htmlType | 设置原生 button 的 type 值 | `'button' \| 'submit' \| 'reset'` | `'button'` |
| onClick | 点击按钮的回调 | `(e: React.MouseEvent) => void` | - |
| className | 自定义className | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
| children | 按钮内容 | `React.ReactNode` | - | 