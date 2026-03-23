# 项目规格说明书

## 1. 项目概述

### 1.1 项目名称
AI Coding Project

### 1.2 项目类型
Personal website (GitHub Pages)

### 1.3 核心功能
- **游戏模块** (`s/games/`)：西游记主题的交互式HTML5游戏
- **博客模块** (`s/blog/`)：使用Markdown渲染的文章展示
- **在线工具** (`s/tools/`)：实用的在线开发工具
- **百科** (`s/wiki/`)：AI编码知识库

### 1.4 目标用户
AI编程爱好者、前端开发者、学习者

---

## 2. 主题规范 - GitHub 浅色风格

### 2.1 颜色规范

| 颜色 | 色值 | 用途 |
|------|------|------|
| 背景色 | `#ffffff` | 白色主背景 |
| 次级背景 | `#f6f8fa` | 浅灰背景 |
| 边框色 | `#d0d7de` | 灰边框 |
| 文字色 | `#1f2328` | 深灰文字 |
| 次要文字 | `#656d76` | 中灰文字 |
| 链接色 | `#0969da` | 蓝色链接 |
| 强调色 | `#0969da` | 蓝色强调 |

### 2.2 CSS变量（必需）

```css
:root {
    /* Colors */
    --color-canvas-default: #ffffff;
    --color-canvas-subtle: #f6f8fa;
    --color-canvas-inset: #f6f8fa;
    --color-border-default: #d0d7de;
    --color-border-muted: #d8dee4;
    --color-fg-default: #1f2328;
    --color-fg-muted: #656d76;
    --color-fg-subtle: #8c959f;
    --color-accent-fg: #0969da;
    --color-accent-emphasis: #0969da;
    --color-accent-muted: #ddf4ff;
    
    /* Typography */
    --font-sm: 12px;
    --font-md: 14px;
    --font-lg: 16px;
    --font-xl: 20px;
    --font-2xl: 24px;
    --font-mono: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
    
    /* Spacing */
    --space-xs: 4px;
    --space-sm: 8px;
    --space-md: 12px;
    --space-lg: 16px;
    --space-xl: 24px;
    --space-2xl: 32px;
    --space-3xl: 48px;
    
    /* Border Radius */
    --radius-sm: 6px;
    --radius-md: 6px;
    --radius-lg: 8px;
    
    /* Shadows */
    --shadow-sm: 0 1px 0 rgba(31, 35, 40, 0.04);
    --shadow-md: 0 3px 6px rgba(140, 149, 159, 0.15);
}
```

### 2.3 语言规范

- 中文内容使用 `lang="zh-CN"`
- AI文件使用英文（AI_START.md, SPEC.md, ai_skills/*.md）

---

## 3. 文件结构

```
serenewing.github.io/
│
├── AI_START.md                    # AI entry point
├── SPEC.md                        # This file - Project specifications
├── README.md                      # Human-readable documentation
├── index.html                     # Homepage
├── CNAME                          # Custom domain
│
├── css/
│   └── style.css                  # Unified base styles (GitHub style)
│
├── ai_skills/                     # AI skills directory
│   ├── README.md
│   ├── skill-01-*.md
│   └── ...
│
└── s/                            # Content directory
    │
    ├── games/                     # Games module
    │   ├── SPEC.md
    │   ├── README.md
    │   ├── index.html
    │   ├── sun-wukong-heaven/
    │   └── journey-to-heaven/
    │
    ├── blog/                      # Blog module
    │   ├── SPEC.md
    │   ├── README.md
    │   ├── index.html
    │   ├── blog.css
    │   └── 2026/
    │
    ├── tools/                     # Online tools module
    │   ├── SPEC.md
    │   ├── README.md
    │   ├── index.html
    │   ├── json-formatter/
    │   └── encoder/
    │
    └── wiki/                      # Wiki module
        ├── SPEC.md
        ├── README.md
        └── index.html
```

---

## 4. 模块状态

| 模块 | 状态 | 最后更新 | 备注 |
|------|------|----------|------|
| `s/games/` | 🟢 活跃 | 2026-03-22 | 2个游戏开发中 |
| `s/blog/` | 🟢 活跃 | 2026-03-23 | Markdown渲染文章 |
| `s/tools/` | 🟢 活跃 | 2026-03-23 | 2个工具可用 |
| `s/wiki/` | 🟢 活跃 | 2026-03-23 | 5个分类内容完整 |

---

## 5. 游戏模块

> **规格说明**：详见 `s/games/SPEC.md`

---

## 6. 在线工具模块

> **规格说明**：详见 `s/tools/SPEC.md`

### 6.1 工具列表

| 工具 | 状态 | 描述 |
|------|------|------|
| JSON格式化 | 🟢 可用 | JSON解析、验证、格式化 |
| 编解码器 | 🟢 可用 | Base64、URL编码等 |

---

## 7. 博客模块

> **规格说明**：详见 `s/blog/SPEC.md`

### 7.1 技术方案
- 使用 **marked.js** 渲染 Markdown
- 使用 **highlight.js** 代码高亮
- 文章内嵌于 HTML 中

---

## 8. 百科模块

> **规格说明**：详见 `s/wiki/SPEC.md`

---

## 9. 开发规范

### 9.1 命名规范

| 类型 | 规范 | 示例 |
|------|------|------|
| 文件 | kebab-case | `game-template.html` |
| CSS类 | BEM-like | `game-container__title--active` |
| ID | camelCase | `gameContainer` |
| 变量/函数 | camelCase | `initGame()`, `scoreValue` |

### 9.2 HTML要求

- 语义标签：`<main>`, `<nav>`, `<section>`, `<article>`, `<header>`, `<footer>`
- 必需meta标签：
  ```html
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```

### 9.3 统一样式

所有页面必须使用统一的 CSS：
```html
<link rel="stylesheet" href="../../css/style.css">
```

### 9.4 JavaScript标准

- 优先使用原生JS
- 外部库通过CDN引入
- 动画使用 `requestAnimationFrame`
- 减少全局变量污染

### 9.5 资源管理

- **图片**：压缩，优先使用WebP
- **音频**：单个文件最大5MB
- **初始加载**：总大小不超过2MB
- 使用相对路径或CDN

---

## 10. SPEC文件规范

### 10.1 层级结构

| 文件 | 用途 |
|------|------|
| `AI_START.md` | AI入口点，快速导航 |
| `SPEC.md` | 项目总规格说明 |
| `{module}/SPEC.md` | 模块规格说明 |
| `{submodule}/SPEC.md` | 详细规格说明 |

### 10.2 编写规则

- **SPEC.md标题使用中文**，内容使用中文
- **SPEC.md定义功能规格**，AI编码时必须遵循
- 若子目录有独立的SPEC.md，父级SPEC.md应引用"详见xxx/SPEC.md"

---

## 11. 验证清单

代码修改后验证：

- [ ] README.md已同步更新
- [ ] SPEC.md已更新（如有功能变化）
- [ ] 所有资源路径正确
- [ ] CSS使用统一的基础样式
- [ ] 无断链或缺失资源
- [ ] HTML语义化
- [ ] 中文内容使用 `lang="zh-CN"`
- [ ] 代码遵循命名规范

---

## 12. 核心原则

1. **统一风格**：所有页面使用相同的CSS基础样式
2. **文档同步**：任何代码变更 → 必须更新README.md
3. **SPEC遵循**：编码时遵循SPEC.md以确保满足需求
4. **简洁性**：AI文件保持简洁，详细说明放在README.md
5. **自包含**：每个模块独立运行
