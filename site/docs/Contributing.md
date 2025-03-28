# 贡献指南

非常感谢你对 KUI 组件库的贡献！以下是一些指导原则，希望能帮助你顺利地为 KUI 做出贡献。

## 开发流程

以下是开发流程的简要概述：

1. Fork 代码库，并克隆到本地
2. 安装依赖
3. 创建特性分支
4. 开发新特性或修复 Bug
5. 运行测试确保代码质量
6. 提交代码
7. 创建 Pull Request

## 环境设置

```bash
# 克隆仓库
git clone <your-forked-repo-url>
cd kui

# 安装依赖
npm install

# 启动开发服务器
npm start
```

## 开发规范

### 代码风格

我们使用 ESLint 和 Prettier 来保持代码风格的一致性。提交代码前，请确保你的代码通过了 lint 检查：

```bash
npm run lint
```

### 提交规范

提交信息应该清晰地描述此次提交的目的。我们使用 [Angular 提交规范](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines)：

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

常用的 type 有：

- **feat**: 新特性
- **fix**: 修复 Bug
- **docs**: 文档变更
- **style**: 代码风格变更（不影响功能）
- **refactor**: 代码重构
- **perf**: 性能优化
- **test**: 测试相关
- **chore**: 构建过程或辅助工具的变动

例如：

```
feat(button): add size prop to Button component

- Add 'small', 'medium', and 'large' sizes
- Update documentation
- Add tests for new feature

Closes #123
```

### 测试

每个组件都应该有对应的测试。我们使用 Jest 和 React Testing Library 进行测试：

```bash
# 运行所有测试
npm test

# 运行特定组件的测试
npm test -- Button
```

## 组件开发指南

开发一个新组件时，请遵循以下步骤：

1. 在 `components` 目录下创建新组件目录
2. 创建组件实现文件（例如 `button.tsx`）
3. 创建组件接口定义文件（例如 `interface.ts`）
4. 创建组件样式文件（例如 `style.less`）
5. 创建测试文件（例如 `button.test.tsx`）
6. 在组件目录下创建 `index.ts` 导出组件
7. 更新 `components/index.ts` 以导出新组件
8. 在文档站点添加新组件的演示和文档

## Pull Request 流程

1. 确保你的代码已经通过了所有测试
2. 更新相关文档
3. 创建 Pull Request 并填写 PR 模板
4. 等待代码审核
5. 根据反馈进行修改
6. 合并 PR

## 发布流程

组件库的发布由维护者负责。如果你是维护者，请遵循以下步骤：

1. 更新 `package.json` 中的版本号
2. 更新 `CHANGELOG.md`
3. 创建发布提交
4. 创建标签
5. 推送到远程仓库
6. 发布到 npm

```bash
npm version [patch|minor|major]
git push origin main --tags
npm publish
```

再次感谢你的贡献！ 