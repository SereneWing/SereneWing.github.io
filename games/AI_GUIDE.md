# Games Module Guide

## Overview

Games module contains interactive HTML5 games with Journey to the West theme.

### Theme

- **Colors**: Dark blue (`#0a0a2e`) + Gold (`#FFD700`)
- **Style**: CSS variables for consistency

---

## 📁 Module Structure

```
games/
├── AI_GUIDE.md                    # This file
├── sun-wukong-heaven/
│   ├── AI_GUIDE.md
│   ├── README.md
│   └── index.html
└── journey-to-heaven/
    ├── AI_GUIDE.md
    ├── README.md
    └── index.html
```

---

## 📊 Project Status

| Project | Status | Last Updated |
|---------|--------|--------------|
| `sun-wukong-heaven/` | 🟢 Active | - |
| `journey-to-heaven/` | 🟢 Active | - |

---

## 🎮 Projects

### sun-wukong-heaven

Sun Wukong flies freely at the Heavenly Gate. Click to interact.

### journey-to-heaven

Navigate through heaven, avoid enemies (托塔李天王, 哪吒), reach the palace.

---

## 🔧 Game Development Rules

### CSS Variables

```css
:root {
    --color-primary: #FFD700;
    --color-bg: #0a0a2e;
    --color-bg-secondary: #1a1a4e;
    --color-text: #ffffff;
    --color-border: #FFD700;
}
```

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Files | kebab-case | `game-template.html` |
| CSS Classes | BEM-like | `game-container__title--active` |
| IDs | camelCase | `gameContainer` |

### HTML Requirements

- Semantic tags: `<main>`, `<nav>`, `<section>`
- Required meta tags:
  ```html
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```
- Chinese content: `lang="zh-CN"`

### JavaScript Standards

- Prefer native JS
- External libraries via CDN only
- Animations: `requestAnimationFrame`
- Minimize global variables

### Resource Limits

- **Images**: Compress, prefer WebP
- **Audio**: Max 5MB per file
- **Initial Load**: Under 2MB

---

## ✅ Verification Checklist

After code changes:

- [ ] README.md updated
- [ ] Resource paths correct
- [ ] CSS uses CSS variables
- [ ] HTML semantic
- [ ] No console errors

---

*Last Updated: 2026-03-22*
