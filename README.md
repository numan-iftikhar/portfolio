# Portfolio

A fast, modern portfolio site built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, **framer-motion** and **next-themes** (light/dark mode).

## ✏️ Editing your content

**Everything you need to change lives in one file:**

```
src/content/site.ts
```

Open it and replace the placeholder values — your name, tagline, about text, skills, projects, work experience, and social links. The whole site updates automatically. You shouldn't need to touch the components for normal content edits.

### Adding your resume

Drop a `resume.pdf` into the `public/` folder. The "Resume" button in the nav links to `/resume.pdf` (configurable via `resumeUrl` in `site.ts`). Set `resumeUrl: ""` to hide the button.

### Hiding a section / link

- Set any social link to `""` in `site.ts` to hide its icon.
- Set `availability: ""` to hide the "open to work" pill in the hero.

## 🚀 Running locally

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## 🏗️ Build

```bash
pnpm build
pnpm start
```

## ☁️ Deploying

The easiest path is **Vercel** (makers of Next.js):

1. Push this folder to a GitHub repo.
2. Import it at https://vercel.com/new.
3. Vercel auto-detects Next.js — just click Deploy.

You'll get a free `*.vercel.app` URL, and can add a custom domain later.

## 📁 Structure

```
src/
  app/
    layout.tsx      # fonts, metadata, theme provider
    page.tsx        # composes all sections
    globals.css     # theme tokens (light/dark colors)
  components/        # Nav, Hero, About, Skills, Projects, Experience, Contact, Footer
  content/
    site.ts          # ← ALL YOUR CONTENT GOES HERE
```
