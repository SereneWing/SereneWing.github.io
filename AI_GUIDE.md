# AI Development Guide

## ⚠️ Critical Rules (Must Follow Every Time)

1. **Sync Documentation**: After ANY code change, MUST update the corresponding README.md
2. **Documentation Location**:
   - Root directory: `./AI_GUIDE.md` (this file) + `./README.md`
   - Subdirectories: Only `./README.md` needed
3. **Keep It Simple**: AI_GUIDE.md is concise. Detailed explanations belong in README.md

---

## 🏗️ Project Architecture

### Directory Structure
```
/
├── index.html           # Homepage
├── AI_GUIDE.md          # AI instructions (this file)
├── README.md            # Human-readable documentation
├── CNAME                # Custom domain config
│
└── games/               # Game projects
    └── {game-name}/     # Each game in its own folder
        ├── index.html   # Game entry point
        └── README.md    # Game documentation
```

### Architecture Principles
- Each subdirectory is self-contained and can run independently
- Use relative paths for all internal references
- No cross-directory resource dependencies

---

## 🎨 Style Guidelines

### CSS Variables (Must Use)
```css
:root {
    --color-primary: #FFD700;    /* Primary - Gold */
    --color-bg: #0a0a2e;          /* Background - Deep Blue */
    --color-bg-secondary: #1a1a4e; /* Secondary Background */
    --color-text: #ffffff;        /* Text - White */
    --color-border: #FFD700;      /* Border - Gold */
}
```

### Naming Conventions
- Files: lowercase with hyphens (`game-template.html`)
- CSS Classes: BEM-like (`game-container__title--active`)
- IDs: camelCase (`gameContainer`)

---

## 📐 Development Standards

### HTML
- Use semantic tags (`<main>`, `<nav>`, `<section>`)
- Required meta tags:
  ```html
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```
- Language attribute: `lang="zh-CN"` for Chinese content

### JavaScript
- Prefer native JS, avoid dependencies
- Use CDN for external libraries when needed
- Animations must use `requestAnimationFrame`
- Keep global variables minimal

### Assets
- Images: Compress and optimize (prefer WebP)
- Audio: Max 5MB per file
- Total initial load: Keep under 2MB

---

## 📋 AI Checklist

After completing any code change, MUST verify:
- [ ] Updated corresponding README.md
- [ ] All resource paths are correct
- [ ] CSS follows the style guidelines
- [ ] No broken links or missing resources
- [ ] HTML is valid and semantic

---

## 🎮 Game Development

### For new games:
1. Create directory under `games/`
2. Follow the directory structure template
3. Create README.md with game description
4. Ensure game is playable and documented

### Game entry point:
- Must be `index.html`
- Should include basic instructions
- Clear win/lose conditions
