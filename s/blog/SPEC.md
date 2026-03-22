# Blog Module Guide

## Overview

Blog module for articles and writing content.

### 主题

- **颜色**：深蓝(#0a0a2e) + 金色(#FFD700)
- **风格**：使用CSS变量保持一致性

---

## 文件结构

```
blog/
├── SPEC.md                       # 本文件
└── posts/                        # 文章目录
    └── {year}/
        └── {slug}.md            # 文章文件
```

---

## 模块状态

| 状态 | 备注 |
|--------|-------|
| 计划中 | 未开始 |

---

## 文章规范

### 文件命名

- 格式：`{year}-{month}-{day}-{slug}.md`
- 示例：`2024-03-15-first-post.md`

### Front Matter（必需）

```markdown
---
title: 文章标题
date: 2024-03-15
tags: [标签1, 标签2]
description: 简要描述
---
```

### 内容规范

- 使用标准Markdown
- 代码块：指定语言
- 图片：相对路径或CDN
- 中文内容：使用中文标点

---

## CSS变量

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

## 验证清单

发布前：

- [ ] Front matter完整
- [ ] 标题层级正确（#、##）
- [ ] 无错别字
- [ ] 代码块显示正确
- [ ] 图片路径正确
