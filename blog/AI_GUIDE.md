# Blog 开发规范

## ⚠️ Critical Rules

1. **文档同步**：每次发布文章后，确保索引和元数据更新
2. **自包含**：每篇文章独立 Markdown 文件
3. **简洁原则**：AI_GUIDE.md 简洁，详细说明放 README.md

---

## 🏗️ 目录结构

```
blog/
├── AI_GUIDE.md           # 本文件
├── README.md             # 博客索引和说明
├── index.html            # 博客首页（可选）
└── posts/                # 文章目录
    └── {year}/
        └── {slug}.md     # 文章 Markdown 文件
```

---

## ✍️ 文章规范

### 文件命名

- 格式：`{年份}-{月份}-{日期}-{slug}.md`
- 示例：`2024-03-15-first-post.md`

### Front Matter（必须包含）

```markdown
---
title: 文章标题
date: 2024-03-15
tags: [标签1, 标签2]
description: 文章简短描述
---
```

### 内容规范

- 使用标准 Markdown
- 代码块标注语言
- 图片使用相对路径或 CDN
- 中文内容使用中文标点

---

## 📋 文章检查清单

发布前验证：
- [ ] Front Matter 完整
- [ ] 标题层级正确（# 主标题，## 二级标题）
- [ ] 无错别字
- [ ] 代码块可正常显示
- [ ] 图片路径正确

---

## 🔧 工具链（可选）

如果使用静态生成器（如 Hugo、Jekyll）：

- 遵循对应工具的配置规范
- 保持 `_config.yml` 或 `hugo.toml` 与本文档一致
- 主题定制参考 `themes/` 目录规范
