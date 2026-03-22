# SereneWing GitHub Pages - AI 总览

> 本文件是项目入口文件，AI 首次对话时应首先阅读此文件。

---

## 🚦 模块总览与进展

| 模块 | 状态 | 最后更新 | 备注 |
|------|------|----------|------|
| `games/` | 🟢 开发中 | 2026-03-22 | 有改动需求 |
| `blog/` | 🟡 规划中 | - | 未启动开发 |

---

## 📁 项目结构

```
serenewing.github.io/
├── AI_GUIDE.md          # 项目总览（本文档）
├── AI_RULE.md           # 通用开发规则
├── index.html           # 网站首页
├── README.md            # 人类可读文档
├── CNAME                # 自定义域名
│
├── games/               # 🎮 游戏项目
│   ├── AI_RULE.md       # 游戏开发规范
│   ├── sun-wukong-heaven/
│   │   ├── AI_RULE.md   # 孙悟空大闹天宫规则
│   │   └── README.md
│   └── journey-to-heaven/
│       ├── AI_RULE.md   # 闯天宫游戏规则
│       └── README.md
│
└── blog/                # 📝 博客项目（规划中）
    ├── AI_RULE.md       # 博客写作规范
    └── ...
```

---

## 🔑 核心规则（Every Change MUST）

1. **文档同步**：任何代码变更后，必须更新对应的 README.md
2. **分层原则**：
   - `AI_GUIDE.md` = 总览与进展
   - `AI_RULE.md` = 开发规则与规范
3. **简洁原则**：GUIDE/RULE 文件只写核心规则，详细说明放 README.md

---

## 📖 阅读指南

### AI 读取策略

1. **首次对话**：读取本文件 → 了解项目总览和模块进展
2. **需要开发某模块**：读取对应目录的 `AI_RULE.md`
3. **需要开发单个项目**：读取单个项目目录的 `AI_RULE.md`

### 当前任务

（本节由 AI 根据用户对话自动更新）

- 2026-03-22：重构 AI_GUIDE 文件系统，从 `AI_GUIDE.md` 改为分层命名

---

## ⚠️ Critical Rules

1. **文档同步**：任何代码变更后，必须更新对应的 README.md
2. **分层规范**：
   - `AI_GUIDE.md` → 总览、指引、进展追踪
   - `AI_RULE.md` → 规则、规范、开发标准
3. **简洁原则**：AI_GUIDE/RULE 只写核心规则，详细说明放 README.md

---

## 🔧 通用检查清单

每次完成代码变更后，验证：
- [ ] README.md 已同步更新
- [ ] 资源路径正确
- [ ] 无损坏链接或缺失资源
- [ ] HTML 语义化和无障碍
- [ ] 进展已更新（适用时）