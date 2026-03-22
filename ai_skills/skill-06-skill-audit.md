# Skill 06: Skill Audit

## Overview

This skill is used to audit other skill files for completeness, consistency, and compatibility with AI_START.md principles.

## Trigger

Task is to review, audit, or improve skill files in the `ai_skills/` directory.

## Action

- **Permission**: MAY modify files in `ai_skills/` directory
- Follow Core Rules (Section 2) when making changes

## Audit Criteria

### 2.1 Trigger Uniqueness
2.1.1 Each skill MUST have a unique trigger condition  
2.1.2 No two skills should overlap in their trigger scope  
2.1.3 Use broad vs. specific trigger ordering (most specific first)  

### 2.2 Action Consistency
2.2.1 Each skill MUST define clear action rules  
2.2.2 Action rules MUST NOT contradict AI_START.md Core Rules (Section 2)  
2.2.3 No redundant Action lines in AI_START.md Section 3 (moved to individual skills)  

### 2.3 Generality Check
2.3.1 Skill descriptions MUST be reusable across projects  
2.3.2 No hardcoded file paths, module names, or project-specific content  
2.3.3 Use placeholders like `{target}`, `{module}`, `{file}` where appropriate  

### 2.4 Completeness Check
2.4.1 Each skill MUST have: Overview, Trigger, Action, TODO List  
2.4.2 TODO items should be actionable and testable  
2.4.3 No TODO items that merely restate the trigger  

### 2.5 Documentation Quality
2.5.1 Follow English-only rule for AI file content (AI_START.md 2.1.1)  
2.5.2 Maintain numbered list formatting with two spaces (AI_START.md 2.4.1)  
2.5.3 Use consistent heading hierarchy  

## TODO List

### 3.1 List All Skills
3.1.1 Enumerate all files in `ai_skills/` directory  
3.1.2 Record skill names and current version  

### 3.2 Check Trigger Coverage
3.2.1 Map each skill trigger to possible user tasks  
3.2.2 Identify any gaps in trigger coverage  
3.2.3 Check for trigger overlap between skills  

### 3.3 Verify Action Rules
3.3.1 Extract action rules from each skill  
3.3.2 Cross-reference with AI_START.md Core Rules  
3.3.3 Flag any contradictions or redundancies  

### 3.4 Test Generality
3.4.1 Review each skill for project-specific content  
3.4.2 Suggest abstract replacements for hardcoded values  
3.4.3 Verify skills can work in different project structures  

### 3.5 Report Findings
3.5.1 Compile audit report with findings  
3.5.2 Categorize issues: missing, contradictory, non-generic  
3.5.3 Provide actionable recommendations for each issue  
