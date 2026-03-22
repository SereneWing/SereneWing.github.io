# Skill 07: Add New Skill

## Overview

This skill is used when the task is to add a new skill file to the `ai_skills/` directory.

## Trigger

Task is to create a new skill for handling a new type of task scenario.

## Action

You MAY modify AI_START.md and create new skill files in `ai_skills/` directory.

## Requirements

### Naming Convention
- Skill filename format: `skill-{number}-{short-description}.md`
- Use English only for filenames
- Use sequential numbering starting from 07

### Structure Requirements

Each skill MUST include the following sections:

#### 1. Overview
- Brief description of what this skill does
- One sentence summary

#### 2. Trigger
- Clear condition that activates this skill
- When should an AI agent use this skill
- Be specific to avoid overlap with existing skills

#### 3. Action
- Define what actions are permitted or restricted
- Reference AI_START.md Core Rules (Section 2) for basic constraints
- State whether AI_START.md can be modified

#### 4. TODO List
- Numbered checklist of steps to complete
- Each TODO item should be:
  - Actionable (can be executed)
  - Testable (can be verified)
  - Specific (not vague)
- Include verification steps at the end

### Quality Standards

Refer to [Skill 06: Skill Audit](./skill-06-skill-audit.md) for complete audit criteria, specifically:

- **Trigger Uniqueness** (Section 2.1): Each skill must have a unique trigger condition
- **Action Consistency** (Section 2.2): Actions must not contradict AI_START.md Core Rules
- **Generality Check** (Section 2.3): Use placeholders like `{target}`, `{module}`, `{file}` instead of hardcoded values
- **Completeness Check** (Section 2.4): Must have Overview, Trigger, Action, TODO List
- **Documentation Quality** (Section 2.5): Follow English-only rule and formatting standards

## TODO List

### 7.1 Identify New Skill Requirements
7.1.1 Analyze the task scenario to be handled  
7.1.2 Determine if existing skills cover this scenario  
7.1.3 Define clear trigger condition for the new skill  
7.1.4 Identify any special action rules needed  

### 7.2 Determine Skill Number
7.2.1 List existing skills in `ai_skills/` directory  
7.2.2 Find the next available sequential number  
7.2.3 Choose a descriptive short name  

### 7.3 Create Skill File
7.3.1 Create new file with naming convention  
7.3.2 Include all required sections (Overview, Trigger, Action, TODO List)  
7.3.3 Apply placeholders for generality (rule 2.3)  
7.3.4 Use English-only content (rule 2.1.1)  
7.3.5 Apply proper formatting with two spaces (rule 2.4.1)  

### 7.4 Update AI_START.md
7.4.1 Add new skill entry in Section 3 (SKILL SELECTION)  
7.4.2 Maintain trigger ordering (most specific first)  
7.4.3 Follow existing formatting pattern  

### 7.5 Verify New Skill
7.5.1 Read the new skill file to verify structure  
7.5.2 Check for hardcoded values or non-generic content  
7.5.3 Verify trigger doesn't overlap with existing skills  
7.5.4 Test that TODO items are actionable and complete  
