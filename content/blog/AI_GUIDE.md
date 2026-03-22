# Blog Module Guide

## Overview

Blog module for articles and writing content.

### Theme

- **Colors**: Dark blue (#0a0a2e) + Gold (#FFD700)
- **Style**: CSS variables for consistency

---

## File Structure

```
blog/
├── AI_GUIDE.md                    # This file
└── posts/                         # Article directory
    └── {year}/
        └── {slug}.md              # Article files
```

---

## Module Status

| Status | Notes |
|--------|-------|
| Planned | Not started |

---

## Article Rules

### File Naming

- Format: `{year}-{month}-{day}-{slug}.md`
- Example: `2024-03-15-first-post.md`

### Front Matter (Required)

```markdown
---
title: Article Title
date: 2024-03-15
tags: [tag1, tag2]
description: Brief description
---
```

### Content Rules

- Use standard Markdown
- Code blocks: specify language
- Images: relative paths or CDN
- Chinese content: Chinese punctuation

---

## CSS Variables

```css
:root {
    --color-primary: #FFD700;
    --color-bg: #0a0a2e;
    --color-bg-secondary: #1a1a4e;
    --color-text: #ffffff;
    --color-border: #FFD700;
}
```

---

## Verification Checklist

Before publishing:

- [ ] Front matter complete
- [ ] Title hierarchy correct (#, ##)
- [ ] No typos
- [ ] Code blocks display correctly
- [ ] Image paths correct

---

*Last Updated: 2026-03-22*
