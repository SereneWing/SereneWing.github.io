# Games Module Guide

## 概述

游戏模块包含西游记主题的交互式HTML5游戏。

### 主题

- **颜色**：深蓝(`#0a0a2e`) + 金色(`#FFD700`)
- **风格**：使用CSS变量保持一致性

---

## 📁 模块结构

```
games/
├── SPEC.md                       # 本文件
├── sun-wukong-heaven/
│   ├── SPEC.md                   # 详细规格说明
│   ├── README.md
│   └── index.html
└── journey-to-heaven/
    ├── SPEC.md                   # 详细规格说明
    ├── README.md
    └── index.html
```

> **注意**：详细规格说明请参考各子目录的SPEC.md。

---

## 📊 项目状态

| 项目 | 状态 | 最后更新 |
|---------|--------|--------------|
| `sun-wukong-heaven/` | 🟢 活跃 | - |
| `journey-to-heaven/` | 🟢 活跃 | - |

---

## 🎮 项目

### sun-wukong-heaven

孙悟空在南天门自由飞翔，点击互动。

> **规格说明**：详见 `sun-wukong-heaven/SPEC.md`

### journey-to-heaven

穿越天宫，躲避敌人（托塔李天王、哪吒），到达天宫。

> **规格说明**：详见 `journey-to-heaven/SPEC.md`

---

## 🔧 游戏开发规范

### CSS变量

```css
:root {
    --color-primary: #FFD700;
    --color-bg: #0a0a2e;
    --color-bg-secondary: #1a1a4e;
    --color-text: #ffffff;
    --color-border: #FFD700;
}
```

### 命名规范

| 类型 | 规范 | 示例 |
|------|------------|--------|
| 文件 | kebab-case | `game-template.html` |
| CSS类 | BEM-like | `game-container__title--active` |
| ID | camelCase | `gameContainer` |

### HTML要求

- 语义标签：`<main>`, `<nav>`, `<section>`
- 必需meta标签：
  ```html
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```
- 中文内容：`lang="zh-CN"`

### JavaScript标准

- 优先使用原生JS
- 外部库仅通过CDN引入
- 动画：使用`requestAnimationFrame`
- 减少全局变量

### 资源限制

- **图片**：压缩，优先使用WebP
- **音频**：单个文件最大5MB
- **初始加载**：总大小不超过2MB

---

## ✅ 验证清单

代码修改后：

- [ ] README.md已更新
- [ ] SPEC.md已更新（如果功能有变化）
- [ ] 资源路径正确
- [ ] CSS使用CSS变量
- [ ] HTML语义化
- [ ] 无控制台错误
