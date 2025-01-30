# Web TypeScript Vue3 项目模板

这是一个基于 Vue3 + TypeScript 的现代化 Web 项目模板，集成了当前最流行的技术栈和最佳实践。

## 技术栈

- **核心框架：** Vue 3.4.x (使用组合式 API)
- **开发语言：** TypeScript 5.4.x
- **构建工具：** Vite 5.3.x
- **包管理器：** Bun
- **状态管理：** Pinia 2.1.x (支持数据持久化)
- **UI 框架：**
  - Radix Vue 1.9.x (无障碍性组件库)
  - Tailwind CSS 3.4.x (原子化 CSS 框架)
  - Shadcn Vue (高质量组件集合)
- **图标方案：** Iconify
- **工具库：**
  - Vue Router 4.3.x (路由管理)
  - Axios (HTTP 客户端)
  - Day.js (日期处理)
  - clsx & tailwind-merge (条件类名管理)

## 开发规范

- ESLint (代码质量检查)
- Prettier (代码格式化)
- Husky & lint-staged (Git 提交检查)
- TypeScript 严格模式

## 项目结构

```bash
.
├── README.md
├── bun.lockb
├── components.d.ts        # 组件类型声明
├── components.json        # Shadcn 组件配置
├── env.d.ts              # 环境变量类型声明
├── index.html            # 入口 HTML
├── package.json          # 项目配置
├── public/               # 静态资源
├── src/
│   ├── App.vue          # 根组件
│   ├── assets/          # 资源文件
│   ├── components/      # 公共组件
│   ├── lib/             # 第三方库配置
│   ├── main.ts          # 入口文件
│   ├── router/          # 路由配置
│   ├── service/         # API 服务
│   ├── stores/          # 状态管理
│   ├── utils/           # 工具函数
│   └── views/           # 页面组件
├── tailwind.config.ts    # Tailwind 配置
└── vite.config.ts        # Vite 配置
```

## 特性

1. **现代化开发体验**

   - 基于 Vite 的快速开发服务器
   - 热模块替换 (HMR)
   - TypeScript 类型检查

2. **代码规范**

   - ESLint + Prettier 集成
   - Git 提交前自动格式化
   - TypeScript 严格模式

3. **UI 开发**

   - Tailwind CSS 支持
   - Radix Vue 无障碍组件
   - Iconify 图标系统

4. **状态管理**

   - Pinia 状态管理
   - 支持状态持久化
   - TypeScript 类型支持

5. **开发工具**
   - 路由自动加载
   - API 自动导入
   - 组件自动注册

## 开始使用

### 1. 安装依赖

```bash
bun install
```

### 2. 开发模式

```bash
bun dev
```

### 3. 生产构建

```bash
bun run build
```

### 4. 预览生产构建

```bash
bun run preview
```

## 代码规范

- 使用 ESLint 进行代码检查

```bash
bun run lint
```

- 使用 Prettier 格式化代码

```bash
bun run format
```

## 推荐的 IDE 设置

- VSCode
- 推荐安装的插件：
  - Vue Language Features (Volar)
  - TypeScript Vue Plugin (Volar)
  - Tailwind CSS IntelliSense
  - ESLint
  - Prettier

## 注意事项

1. 确保使用 Node.js 20.x 或更高版本
2. 使用 Bun 作为包管理器
3. 遵循 Vue3 组合式 API 的编写方式
4. 优先使用 Tailwind CSS 进行样式开发
5. API 接口遵循 RESTful 规范
