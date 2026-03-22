# 通用开发规则

> 本文件包含适用于所有模块的通用开发规则和规范。

---

## 📋 通用规则

### 1. 文档同步规则

**Every Change MUST**：
- 任何代码变更后，必须更新对应的 README.md
- README.md 应包含：功能说明、使用方法、技术实现
- 保持文档与代码一致

### 2. 命名规范

| 类型 | 规范 | 示例 |
|------|------|------|
| 文件名 | kebab-case | `game-template.html` |
| CSS 类 | BEM-like | `game-container__title--active` |
| ID | camelCase | `gameContainer` |
| 变量/函数 | camelCase | `initGame()`, `scoreValue` |

### 3. HTML 标准

- 使用语义标签（`<main>`、`<nav>`、`<section>`、`<article>`）
- 必须包含的 meta 标签：
  ```html
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```
- 中文内容：`lang="zh-CN"`

### 4. CSS 变量（必须使用）

项目统一使用 CSS 变量管理主题：

```css
:root {
    --color-primary: #FFD700;       /* 主色 - 金色 */
    --color-bg: #0a0a2e;            /* 背景 - 深蓝 */
    --color-bg-secondary: #1a1a4e;  /* 次背景 */
    --color-text: #ffffff;          /* 文字 - 白色 */
    --color-border: #FFD700;        /* 边框 - 金色 */
}
```

### 5. JavaScript 标准

- 优先使用原生 JS，避免不必要的依赖
- 外部库使用 CDN
- 动画使用 `requestAnimationFrame`
- 尽量减少全局变量污染
- 保持代码简洁和可维护性

### 6. 资源管理

- **图片**：压缩优化，优先使用 WebP 格式
- **音频**：单个文件最大 5MB
- **首屏加载**：总大小控制在 2MB 以内
- 使用相对路径或 CDN，避免硬编码绝对路径

---

## ✅ 通用检查清单

每次代码变更后，必须验证：

- [ ] README.md 已同步更新
- [ ] 资源路径正确
- [ ] CSS 使用 CSS 变量
- [ ] 无损坏链接或缺失资源
- [ ] HTML 语义化
- [ ] 中文内容使用 `lang="zh-CN"`
- [ ] 代码符合命名规范

---

## 📁 自包含原则

每个子目录应完全自包含：
- 无跨目录的文件引用
- 资源尽量内联或使用 CDN
- 便于独立部署和迁移