# 介绍

> 这是一个Web通用基础项目模版，包含Vue3、AntDesignVue、Unocss、TypeScript、ESLint、Prettier...

# 项目结构

项目采用规范的目录结构设计，各目录的具体功能如下：

```bash
.
├── README.md                 # 项目说明文档
├── bun.lockb                # bun包管理器的依赖锁定文件
├── components.d.ts          # 组件类型声明文件
├── env.d.ts                 # 环境变量类型声明文件
├── index.html              # 项目入口HTML文件
├── package.json            # 项目配置和依赖管理文件
├── public                  # 静态资源目录
│   └── favicon.ico        # 网站图标
├── src                     # 源代码目录
│   ├── App.vue            # 根组件
│   ├── assets             # 资源文件目录（图片、样式等）
│   ├── components         # 公共组件目录
│   ├── main.ts            # 应用入口文件
│   ├── router             # 路由配置目录
│   │   └── index.ts      # 路由主配置文件
│   ├── service           # API服务目录
│   ├── stores            # 状态管理目录
│   │   └── counter.ts    # 计数器状态示例
│   ├── utils             # 工具函数目录
│   └── views             # 页面视图目录
│       └── MainView.vue  # 主页面视图
├── tsconfig.app.json      # TypeScript应用配置
├── tsconfig.json         # TypeScript主配置
├── tsconfig.node.json    # TypeScript Node环境配置
├── uno.config.ts         # UnoCSS配置文件
└── vite.config.ts        # Vite构建工具配置文件
```

## 目录说明

- `src/`: 项目源代码目录

  - `assets/`: 存放项目资源文件，如图片、样式等
  - `components/`: 存放可复用的Vue组件
  - `router/`: Vue Router路由配置
  - `stores/`: Pinia状态管理配置
  - `service/`: API接口服务
  - `utils/`: 工具函数和通用方法
  - `views/`: 页面级组件

- `public/`: 静态资源目录，存放不需要经过构建工具处理的文件

- 配置文件：
  - `vite.config.ts`: Vite构建工具配置
  - `uno.config.ts`: UnoCSS原子化CSS配置
  - `tsconfig*.json`: TypeScript相关配置
  - `package.json`: 项目依赖和脚本配置

# 如何开始？

## 1. 安装依赖

```bash
bun install
```

## 2. 运行项目

```bash
bun dev
```

## 3. 打包项目

```bash
bun run build
```
