---
title: Why I Chose Next.js Over Plain React
excerpt: After building projects in both React and Next.js, here's why I think Next.js is the right choice for most web applications today.
date: "2025-02-10"
readTime: 4 min read
tags:
  - Next.js
  - React
  - Web Dev
---

# Why I Chose Next.js Over Plain React

When I first learned React, I built everything as a client-side SPA. It worked, but I kept running into problems — slow initial loads, SEO issues, complex routing.

Then I discovered Next.js.

## The App Router Changed Everything

Next.js 14's App Router is genuinely different. Server Components mean you can fetch data at the component level without useEffect madness. File-based routing is intuitive. Image and font optimization is built in.

For my portfolio and e-commerce project, Next.js was the clear choice.

## What I Love About It

1. **Server Components** — Data fetching without loading states
2. **File-based routing** — Folders *are* routes
3. **Built-in optimization** — Images, fonts, and code splitting
4. **Vercel deployment** — Push to GitHub, it's live in seconds

## When Plain React Still Makes Sense

Not everything needs Next.js. If you're building a complex SPA with no SEO needs and all data is client-side, React alone is fine. But for most public-facing projects, Next.js wins.
