---
title: Building a Grade Management System for My University
excerpt: The story behind building a real academic management system — the technical decisions, database design, and what I learned along the way.
date: "2025-03-20"
readTime: 7 min read
tags:
  - PHP
  - MySQL
  - Project
---

# Building a Grade Management System for My University

When I decided to build a grade management system, I didn't realize it would become one of the most educational projects of my life.

## The Problem

Woldia University's grade tracking was done manually. Students had to visit offices, instructors had no centralized system, and reports took days to compile. I saw an opportunity.

## Technical Decisions

I chose PHP and MySQL for a few reasons:
- I was learning PHP in class at the time
- MySQL is solid for relational academic data
- Free hosting supports PHP natively
- No complex build steps

## Database Design

The schema had to support multiple semesters, courses, enrollments, and grade entries. The key tables:

- `users` (id, role, name, email, password_hash)
- `courses` (id, code, name, credits, instructor_id)
- `enrollments` (student_id, course_id, semester)
- `grades` (enrollment_id, score, letter_grade, gpa_points)

Getting the relationships right took several iterations.

## Role-Based Access Control

Three roles, three very different experiences:
- **Students**: View their own grades and GPA
- **Instructors**: Enter grades for their courses
- **Admins**: Full system access, reports, user management

PHP sessions with role checks on every protected page.

## Lessons Learned

1. Design your database first — changing schema later is painful
2. Sanitize ALL user inputs — SQL injection is real
3. Test with real users early — they'll find edge cases you never imagined
4. Performance matters even on small projects

The system is live at [studentgradesystem.free.nf](https://studentgradesystem.free.nf/).
