# Bereket Tesfaye Getie — Developer Portfolio

A premium, animated developer portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features a Decap CMS admin panel for visual content editing without a database.

## ✨ Features

- **Modern Design** — Glassmorphism, amber/gold palette, animated particles
- **Framer Motion** — Scroll-triggered animations, letter reveals, spring physics
- **Interactive Terminal** — Type real commands to explore the portfolio
- **Dark/Light Mode** — Toggleable with next-themes, dark as default
- **Custom Cursor** — Spring-physics cursor with hover effects
- **Decap CMS** — Visual admin panel at `/admin` — edit all content
- **Blog System** — Markdown blog with full reading experience
- **SEO Ready** — Metadata, OpenGraph, Twitter cards
- **Fully Responsive** — Mobile-first, tested across breakpoints
- **TypeScript** — Full type safety throughout

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Syne + JetBrains Mono |
| Theme | next-themes |
| CMS | Decap CMS |
| Blog | Markdown + gray-matter + remark |
| Deploy | Vercel |

## 📁 Project Structure

```
bereket-portfolio/
├── app/
│   ├── blog/                  # Blog listing + post pages
│   ├── globals.css            # CSS variables & design system
│   ├── layout.tsx             # Root layout with fonts + theme
│   ├── page.tsx               # Main portfolio page
│   └── providers.tsx          # Client-side providers
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx           # Animated name + typewriter
│   │   ├── About.tsx          # Story + terminal card + milestones
│   │   ├── Skills.tsx         # Animated skill bars by category
│   │   ├── Projects.tsx       # Project cards with hover overlays
│   │   ├── Timeline.tsx       # Developer journey timeline
│   │   ├── Terminal.tsx       # Interactive CLI terminal
│   │   ├── Certificates.tsx   # FCC certifications
│   │   └── Contact.tsx        # Contact form + social links
│   └── ui/
│       ├── AnimatedBackground.tsx  # Canvas particle system
│       ├── CustomCursor.tsx        # Spring cursor + ring
│       ├── ScrollProgress.tsx      # Top scroll progress bar
│       └── ThemeToggle.tsx         # Dark/light toggle
├── content/
│   ├── blog/                  # Blog posts (.md)
│   ├── projects/              # Project data (.md with frontmatter)
│   └── data/
│       └── about.json         # About/profile data
├── lib/
│   ├── animations.ts          # Framer Motion variants
│   ├── content.ts             # Content loading utilities
│   └── utils.ts               # cn() + helpers
├── public/
│   ├── admin/
│   │   ├── index.html         # Decap CMS admin UI
│   │   └── config.yml         # CMS collection config
│   └── images/                # Static images
├── types/
│   └── index.ts               # TypeScript type definitions
└── tailwind.config.ts         # Extended theme
```

## 🛠️ Getting Started

### 1. Clone and install

```bash
git clone https://github.com/berekettesfayegetie89-ethiopia/bereket-portfolio.git
cd bereket-portfolio
npm install
```

### 2. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the portfolio is running!

### 3. Add your profile photo

Place `profile.jpg` in `/public/images/` and update the Hero component path.

## 📝 Content Editing

### Edit via files (always works)
All content is in `content/` as `.md` files with frontmatter:

- **Projects**: `content/projects/*.md`
- **Blog posts**: `content/blog/*.md`
- **About data**: `content/data/about.json`

### Edit via Admin Panel (visual CMS)

The `/admin` panel uses Decap CMS for visual editing.

**Setup for GitHub backend:**

1. Create a GitHub OAuth App at [github.com/settings/developers](https://github.com/settings/developers)
   - Homepage URL: `https://your-site.vercel.app`
   - Callback URL: `https://your-site.vercel.app/api/auth/callback/github`

2. Deploy to Vercel and add environment variables:
   ```
   GITHUB_CLIENT_ID=your_client_id
   GITHUB_CLIENT_SECRET=your_client_secret
   ```

3. Enable Netlify Identity on your site (or use a GitHub OAuth proxy)

4. Navigate to `https://your-site.vercel.app/admin`

> **Tip**: For local editing, change the backend in `public/admin/config.yml` to `name: git-gateway` and run `npx decap-server` locally.

## 🌐 Deployment (Vercel)

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/berekettesfayegetie89-ethiopia/bereket-portfolio.git
git push -u origin main
```

2. Import on [vercel.com](https://vercel.com):
   - Connect GitHub repo
   - Framework: Next.js (auto-detected)
   - Deploy

3. Your portfolio is live! 🚀

## 🎨 Customization

### Colors
Edit CSS variables in `app/globals.css`:
```css
.dark {
  --accent-gold: #e8a838;   /* Primary accent */
  --accent-green: #34d399;  /* Secondary/terminal accent */
  --bg-primary: #07080f;    /* Background */
}
```

### Fonts
Change fonts in `app/layout.tsx` — uses Google Fonts via next/font.

### Content
Update personal info in `content/data/about.json` and project files in `content/projects/`.

### Social Links
Search for your social URLs in:
- `components/layout/Navbar.tsx`
- `components/layout/Footer.tsx`
- `components/sections/Hero.tsx`
- `components/sections/Contact.tsx`
- `components/sections/Terminal.tsx` (contact command output)

## 📬 Contact Form

The contact form in `Contact.tsx` is currently UI-only. To make it functional, integrate one of:

- **[Formspree](https://formspree.io)** (free tier, no backend needed)
- **[EmailJS](https://www.emailjs.com)** (client-side email)
- **[Resend](https://resend.com)** (with a Next.js API route)

## 📄 Resume

Place your resume PDF at `public/resume-bereket-tesfaye.pdf` — the Download CV button in the Hero section will automatically work.

## 🙏 Credits

Built by **Bereket Tesfaye Getie** — CS student at Woldia University, Ethiopia.

- [Next.js](https://nextjs.org) — Framework
- [Framer Motion](https://www.framer.com/motion) — Animations
- [Tailwind CSS](https://tailwindcss.com) — Styling
- [Lucide React](https://lucide.dev) — Icons
- [Decap CMS](https://decapcms.org) — Content management
- [Vercel](https://vercel.com) — Hosting

---

*Feel free to use this as inspiration for your own portfolio — but make it yours!*
