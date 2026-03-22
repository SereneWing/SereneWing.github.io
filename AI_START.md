# AI_START.md - Entry Point for AI Agents

**READ THIS FILE FIRST before any work**

---

## Overview

When you start working on this project, read this file first. This is the entry point that guides your workflow. The document hierarchy is:

AI_START.md (entry point) -> SPEC.md (root project specifications) -> {module}/SPEC.md (module specifications) -> {submodule}/SPEC.md (detailed specifications)

Follow the numbered sections below in order. Begin with Section 1 (Quick Navigation) to understand the project structure, then Section 2 (Core Rules) to understand the fundamental principles, and finally Section 3 (SKILL SELECTION) to determine which skill to follow based on your task.

---

## 1. Quick Navigation

- SPEC.md : Project specifications, modules, progress
- content/games/SPEC.md : Games module specifications
- content/blog/SPEC.md : Blog module specifications
- README.md : Human-readable documentation
- ai_skills/ : AI skills directory (detailed guidance for each scenario)

---

## 2. Core Rules (Basic Development Principles)

The fundamental principles for this project are organized into four categories:

### 2.1 File Conventions
2.1.1 **English Content**: AI file content (AI_START.md, SPEC.md, ai_skills/*.md) must use English names (excluding quoted content)  
2.1.2 **English Names**: All filenames and file paths must use English names; when creating new files, also use English names (applies to all file types)

### 2.2 Documentation Rules
2.2.1 **Documentation Sync**: Any code change MUST update README.md  
2.2.2 **Concise AI Files**: Detailed content goes in README.md  
2.2.3 **SPEC Files**: SPEC.md files define functional specifications. AI must follow SPEC.md when coding. If a subdirectory has its own SPEC.md, the parent SPEC.md should reference "详见xxx/SPEC.md"

### 2.3 Structure Rules
2.3.1 **Layered Structure**: AI_START -> SPEC.md -> Module SPEC.md -> Submodule SPEC.md  
2.3.2 **Self-Contained**: Each module/project operates independently  

### 2.4 Formatting Rules
2.4.1 **Formatting Requirement**: After numbered list items, add two spaces before line breaks to ensure proper rendering in some markdown editors

### 2.5 Version Control Rules
2.5.1 **No Auto-Commit**: Unless explicitly stated otherwise, do NOT commit changes to GitHub
2.5.2 **Commit Only When Directed**: Only commit after the user explicitly requests it

---

## 3. SKILL SELECTION (First Step)

Based on user requirements, select the corresponding skill to implement. Each skill file is located in `ai_skills/` directory.

### 3.1 Skill 01: AI_START Optimization
- **Trigger**: Task is to improve/modify AI_START.md itself
- **Skill File**: `ai_skills/skill-01-start-optimization.md`

### 3.2 Skill 02: Project Full Inspection
- **Trigger**: Task is to perform comprehensive self-check on the entire project
- **Skill File**: `ai_skills/skill-02-project-inspection.md`

### 3.3 Skill 03: Add New Module or Feature
- **Trigger**: Task is to add a new module or feature to the project
- **Skill File**: `ai_skills/skill-03-add-module.md`

### 3.4 Skill 04: Modify Existing Module or Feature
- **Trigger**: Task is to modify, enhance, or fix an existing module or feature
- **Skill File**: `ai_skills/skill-04-modify-module.md`

### 3.5 Skill 05: All Other Tasks
- **Trigger**: Any other development task not covered above
- **Skill File**: `ai_skills/skill-05-other-tasks.md`

### 3.6 Skill 06: Skill Audit
- **Trigger**: Task is to review, audit, or improve skill files in the `ai_skills/` directory
- **Skill File**: `ai_skills/skill-06-skill-audit.md`

### 3.7 Skill 07: Add New Skill
- **Trigger**: Task is to create a new skill file in the `ai_skills/` directory
- **Skill File**: `ai_skills/skill-07-add-skill.md`
