# AI_GUIDE.md - Project Overview

## Project Summary

**SereneWing GitHub Pages** - A personal website featuring:
- **Games Module** (`games/`): Interactive HTML5 games with Journey to the West theme
- **Blog Module** (`blog/`): Blog section (planned)

### Theme

- **Color Scheme**: Dark blue background (`#0a0a2e`) with gold accents (`#FFD700`)
- **Language**: Chinese content with `lang="zh-CN"`
- **Style**: Consistent across all pages using CSS variables

---

## 📁 File Structure

```
serenewing.github.io/
│
├── AI_START.md                    # Entry point
├── AI_GUIDE.md                    # This file - project overview
├── README.md                      # Human-readable documentation
├── index.html                     # Homepage
├── CNAME                          # Custom domain
│
├── games/                         # 🎮 Games module
│   ├── AI_GUIDE.md                # Games module guide
│   ├── sun-wukong-heaven/
│   │   ├── AI_GUIDE.md
│   │   └── README.md
│   └── journey-to-heaven/
│       ├── AI_GUIDE.md
│       └── README.md
│
└── blog/                          # 📝 Blog module
    └── AI_GUIDE.md                # Blog module guide
```

---

## 📊 Module Status

| Module | Status | Last Updated | Notes |
|--------|--------|--------------|-------|
| `games/` | 🟢 Active | 2026-03-22 | 2 games in development |
| `blog/` | 🟡 Planned | - | Not started |

---

## 🎮 Games Module

### Projects

| Game | Status | Description |
|------|--------|-------------|
| `sun-wukong-heaven/` | 🟢 Active | Sun Wukong flies freely at Heavenly Gate |
| `journey-to-heaven/` | 🟢 Active | Navigate through heaven avoiding enemies |

---

## 🔧 Development Standards

### CSS Variables (Required)

```css
:root {
    --color-primary: #FFD700;       /* Gold */
    --color-bg: #0a0a2e;            /* Dark Blue */
    --color-bg-secondary: #1a1a4e;  /* Secondary */
    --color-text: #ffffff;          /* White */
    --color-border: #FFD700;        /* Gold */
}
```

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Files | kebab-case | `game-template.html` |
| CSS Classes | BEM-like | `game-container__title--active` |
| IDs | camelCase | `gameContainer` |
| Variables/Functions | camelCase | `initGame()`, `scoreValue` |

### HTML Requirements

- Semantic tags: `<main>`, `<nav>`, `<section>`, `<article>`
- Required meta tags:
  ```html
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```
- Chinese content: `lang="zh-CN"`

### JavaScript Standards

- Prefer native JS, avoid unnecessary dependencies
- External libraries via CDN only
- Animations use `requestAnimationFrame`
- Minimize global variable pollution

### Resource Management

- **Images**: Compress, prefer WebP format
- **Audio**: Max 5MB per file
- **Initial Load**: Total under 2MB
- Use relative paths or CDN, avoid hardcoded absolute paths

---

## ✅ Verification Checklist

After any code change, verify:

- [ ] README.md synchronized with code changes
- [ ] All resource paths correct
- [ ] CSS uses CSS variables (no hardcoded colors)
- [ ] No broken links or missing resources
- [ ] HTML is semantic and accessible
- [ ] Chinese content uses `lang="zh-CN"`
- [ ] Code follows naming conventions
- [ ] Progress section updated

---

## 🔑 Core Principles

1. **Documentation Sync**: Any code change → MUST update README.md
2. **Layered Clarity**:
   - `AI_START.md` = Entry point, quick navigation
   - `AI_GUIDE.md` = Overview, standards, progress
3. **Simplicity**: Keep AI files concise; detailed explanations in README.md
4. **Self-Contained**: Each module is independent (no cross-directory references)

---

*Last Updated: 2026-03-22*
