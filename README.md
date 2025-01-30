# Web-TypeScript-Vue3-Starter

这是一个基于 Vue 3 + TypeScript 的 Web 项目模板集合。每个分支都提供了不同的技术栈组合，您可以根据需求选择合适的模板开始您的项目。

## 模板分支

### main
主分支，基础模板。

### default-antd-unocss
- 技术栈：Vue 3 + TypeScript + Ant Design Vue + UnoCSS
- 特点：
  - 使用 Ant Design Vue 作为 UI 组件库
  - 采用 UnoCSS 作为原子化 CSS 引擎
  - 完整的项目结构和最佳实践

### diff-shadcn-tailwind
- 技术栈：Vue 3 + TypeScript + Shadcn Vue + Tailwind CSS
- 特点：
  - 使用 Shadcn Vue 作为无样式组件库
  - 采用 Tailwind CSS 作为 CSS 框架
  - 现代化的 UI 设计系统

### diff-flowbite-tailwind
- 技术栈：Vue 3 + TypeScript + Flowbite + Tailwind CSS
- 特点：
  - 使用 Flowbite 作为 UI 组件库
  - 采用 Tailwind CSS 作为 CSS 框架
  - 轻量级且功能丰富的组件系统

## 使用方法

### 方法一：克隆整个仓库后切换分支

1. 克隆仓库
```bash
git clone https://github.com/yassine-zhang/Web-TypeScript-Vue3-Starter.git
```

2. 切换到需要的模板分支
```bash
git checkout <branch-name>
```

### 方法二：直接克隆指定分支（推荐）

```bash
# Ant Design Vue + UnoCSS 模板
git clone -b default-antd-unocss https://github.com/yassine-zhang/Web-TypeScript-Vue3-Starter.git my-antd-project

# Shadcn Vue + Tailwind CSS 模板
git clone -b diff-shadcn-tailwind https://github.com/yassine-zhang/Web-TypeScript-Vue3-Starter.git my-shadcn-project

# Flowbite + Tailwind CSS 模板
git clone -b diff-flowbite-tailwind https://github.com/yassine-zhang/Web-TypeScript-Vue3-Starter.git my-flowbite-project
```

### 启动项目

1. 安装依赖
```bash
bun install
```

2. 启动开发服务器
```bash
bun dev
```

## 贡献

欢迎提交 Issue 和 Pull Request。

## 许可证

[MIT](LICENSE)
