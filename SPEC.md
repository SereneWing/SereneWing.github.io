# 项目规格说明书

## 1. 项目概述

### 1.1 项目名称
SereneWing GitHub Pages

### 1.2 项目类型
个人网站（GitHub Pages）

### 1.3 核心功能
- **游戏模块** (`content/games/`)：西游记主题的交互式HTML5游戏
- **博客模块** (`content/blog/`)：文章和写作内容（计划中）

### 1.4 目标用户
西游记爱好者、休闲游戏玩家

---

## 2. 主题规范

### 2.1 颜色规范

| 颜色 | 色值 | 用途 |
|------|------|------|
| 主色 | `#FFD700` | 金色，用于强调和边框 |
| 背景色 | `#0a0a2e` | 深蓝背景 |
| 次级背景 | `#1a1a4e` | 次级区域背景 |
| 文字色 | `#ffffff` | 白色文字 |
| 边框色 | `#FFD700` | 金色边框 |

### 2.2 CSS变量（必需）

```css
:root {
    --color-primary: #FFD700;       /* 金色 */
    --color-bg: #0a0a2e;           /* 深蓝背景 */
    --color-bg-secondary: #1a1a4e; /* 次级背景 */
    --color-text: #ffffff;         /* 白色文字 */
    --color-border: #FFD700;       /* 金色边框 */
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
├── AI_START.md                    # AI入口点
├── SPEC.md                        # 本文件 - 项目规格说明
├── README.md                      # 人类可读文档
├── index.html                     # 首页（重定向）
├── CNAME                          # 自定义域名
│
├── ai_skills/                     # AI技能目录
│   ├── README.md
│   ├── skill-01-*.md
│   ├── skill-02-*.md
│   └── ...
│
└── content/                       # 内容目录
    ├── index.html                 # 主内容页
    │
    ├── games/                     # 🎮 游戏模块
    │   ├── SPEC.md                # 游戏模块规格
    │   ├── sun-wukong-heaven/
    │   │   ├── SPEC.md            # 详细规格
    │   │   ├── README.md
    │   │   └── index.html
    │   └── journey-to-heaven/
    │       ├── SPEC.md            # 详细规格
    │       ├── README.md
    │       └── index.html
    │
    └── blog/                      # 📝 博客模块
        └── SPEC.md                # 博客模块规格
```

---

## 4. 模块状态

| 模块 | 状态 | 最后更新 | 备注 |
|------|------|----------|------|
| `content/games/` | 🟢 活跃 | 2026-03-22 | 2个游戏开发中 |
| `content/blog/` | 🟡 计划中 | - | 未开始 |

---

## 5. 游戏模块

### 5.1 游戏项目

| 游戏 | 状态 | 描述 |
|------|------|------|
| `sun-wukong-heaven/` | 🟢 活跃 | 孙悟空在南天门自由飞翔 |
| `journey-to-heaven/` | 🟢 活跃 | 穿越天宫，躲避敌人 |

> **规格说明**：详见各子目录的 `SPEC.md`

---

## 6. 开发规范

### 6.1 命名规范

| 类型 | 规范 | 示例 |
|------|------|------|
| 文件 | kebab-case | `game-template.html` |
| CSS类 | BEM-like | `game-container__title--active` |
| ID | camelCase | `gameContainer` |
| 变量/函数 | camelCase | `initGame()`, `scoreValue` |

### 6.2 HTML要求

- 语义标签：`<main>`, `<nav>`, `<section>`, `<article>`
- 必需meta标签：
  ```html
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```

### 6.3 JavaScript标准

- 优先使用原生JS
- 外部库仅通过CDN引入
- 动画使用 `requestAnimationFrame`
- 减少全局变量污染

### 6.4 资源管理

- **图片**：压缩，优先使用WebP
- **音频**：单个文件最大5MB
- **初始加载**：总大小不超过2MB
- 使用相对路径或CDN

---

## 7. SPEC文件规范

### 7.1 层级结构

| 文件 | 用途 |
|------|------|
| `AI_START.md` | AI入口点，快速导航 |
| `SPEC.md` | 项目总规格说明 |
| `{module}/SPEC.md` | 模块规格说明 |
| `{submodule}/SPEC.md` | 详细规格说明 |

### 7.2 编写规则

- **SPEC.md标题使用中文**，内容使用中文
- **SPEC.md定义功能规格**，AI编码时必须遵循
- 若子目录有独立的SPEC.md，父级SPEC.md应引用"详见xxx/SPEC.md"

---

## 8. 验证清单

代码修改后验证：

- [ ] README.md已同步更新
- [ ] SPEC.md已更新（如有功能变化）
- [ ] 所有资源路径正确
- [ ] CSS使用CSS变量（无硬编码颜色）
- [ ] 无断链或缺失资源
- [ ] HTML语义化
- [ ] 中文内容使用 `lang="zh-CN"`
- [ ] 代码遵循命名规范

---

## 9. 核心原则

1. **文档同步**：任何代码变更 → 必须更新README.md
2. **SPEC遵循**：编码时遵循SPEC.md以确保满足需求
3. **简洁性**：AI文件保持简洁，详细说明放在README.md
4. **自包含**：每个模块独立运行（无跨目录引用）
