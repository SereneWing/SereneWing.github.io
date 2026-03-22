# Skill 02: Project Full Inspection

## Overview

This skill is used when the task is to perform a comprehensive self-check on the entire project.

## Trigger

Task is to perform comprehensive self-check on the entire project.

## Action

You MUST NOT modify any file content unless inspection reveals issues.

## TODO List

### 2.1 Read All Documentation
2.1.1 Read AI_START.md (entry point)  
2.1.2 Read SPEC.md (root overview)  
2.1.3 Read s/games/SPEC.md  
2.1.4 Read s/blog/SPEC.md  
2.1.5 Read all submodule SPEC.md files  
2.1.6 Read ai_skills/README.md

### 2.2 Verify Core Rules Compliance
2.2.1 Check rule 2.1.1: No Chinese in AI files (AI_START.md, SPEC.md, ai_skills/*.md)  
2.2.2 Check rule 2.1.2: English file names only  
2.2.3 Check rule 2.2.1: README.md synchronization  
2.2.4 Check rule 2.2.3: SPEC.md compliance (AI follows specifications when coding)  
2.2.5 Check rule 2.3.1: Layered structure maintained

### 2.3 Skill System Integrity Check
2.3.1 List all files in ai_skills/ directory  
2.3.2 Compare with Section 3 in AI_START.md (skill list must be complete)  
2.3.3 Check ai_skills/README.md matches actual skill files  
2.3.4 Verify each skill has required sections: Overview, Trigger, Action, TODO List  

### 2.4 Documentation Structure Check
2.4.1 Verify paths in AI_START.md Section 1 match actual directory structure  
2.4.2 Check SPEC.md file structure matches actual project structure  
2.4.3 Verify module SPEC.md files exist for each module  
2.4.4 Check parent SPEC.md files reference child SPEC.md files appropriately

### 2.5 Detailed Inspection
2.5.1 Search for Chinese characters in AI files  
2.5.2 Verify file naming conventions (kebab-case)  
2.5.3 Check README.md is up to date with code  
2.5.4 Verify all module SPEC.md files exist  

### 2.6 SPEC Files Excluded from Inspection

**Note**: SPEC.md files (e.g., SPEC.md in subdirectories) are NOT subject to the standard AI file rules inspection because:

- SPEC files are detailed specifications, not AI guidance files
- SPEC files use English titles and Chinese content for better understanding of project context

The following file types are INCLUDED in the standard inspection:
- AI_START.md
- SPEC.md
- ai_skills/*.md

The following file types are EXCLUDED from the standard inspection:
- SPEC.md (all locations) - Titles in English, content in Chinese
- README.md (documentation, not AI guidance)
- Other content files

### 2.7 Report Findings
2.7.1 List compliant items  
2.7.2 Report any violations found  
2.7.3 If skill integrity issues found, suggest using Skill 07 to add missing skills  
2.7.4 Do NOT make changes unless explicitly directed  
