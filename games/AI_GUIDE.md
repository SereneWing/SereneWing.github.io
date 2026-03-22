# Games 开发规范

## ⚠️ Critical Rules

1. **文档同步**：每次代码变更后，必须更新对应的 README.md
2. **自包含**：每个游戏文件夹独立运行，无跨目录依赖
3. **简洁原则**：AI_GUIDE.md 简洁，详细说明放 README.md

---

## 🏗️ 目录结构

```
games/
├── AI_GUIDE.md           # 本文件
└── {game-name}/          # 每个游戏独立文件夹
    ├── index.html        # 游戏入口
    └── README.md         # 游戏文档
```

---

## 🎨 样式指南

### CSS 变量（必须使用）

```css
:root {
    --color-primary: #FFD700;       /* 主色 - 金色 */
    --color-bg: #0a0a2e;            /* 背景 - 深蓝 */
    --color-bg-secondary: #1a1a4e;  /* 次背景 */
    --color-text: #ffffff;          /* 文字 - 白色 */
    --color-border: #FFD700;        /* 边框 - 金色 */
}
```

### 命名规范

- 文件：`kebab-case`（如 `game-template.html`）
- CSS 类：BEM-like（如 `game-container__title--active`）
- ID：`camelCase`（如 `gameContainer`）

---

## 📐 开发标准

### HTML

- 使用语义标签（`<main>`、`<nav>`、`<section>`）
- 必须包含的 meta 标签：
  ```html
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```
- 中文内容：`lang="zh-CN"`

### JavaScript

- 优先原生 JS，避免依赖
- 外部库使用 CDN
- 动画使用 `requestAnimationFrame`
- 尽量减少全局变量

### 资源

- 图片：压缩优化（优先 WebP）
- 音频：单个文件最大 5MB
- 首屏总加载：控制在 2MB 以内

---

## 📋 开发检查清单

每次完成代码变更后，验证：
- [ ] README.md 已更新
- [ ] 资源路径正确
- [ ] CSS 使用 CSS 变量
- [ ] 无损坏链接
- [ ] HTML 语义化

---

## 🎮 游戏开发

### 新游戏步骤

1. 在 `games/` 下创建新目录
2. 按上述结构创建文件
3. 创建 README.md 描述游戏
4. 确保游戏可玩且有文档

### 游戏入口

- 必须为 `index.html`
- 应包含基本操作说明
- 明确的胜利/失败条件
