# Aditya Patil — Portfolio

Personal developer portfolio for Aditya Patil, built with React, TypeScript, Vite, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Resume

The "Download Resume" button looks for a file at `public/Aditya_Patil_Resume.pdf`.
See `RESUME_INSTRUCTIONS.md` at the project root for details — until that file is added, the
button shows a disabled "Resume coming soon" state instead of linking to a 404.

## Structure

```
src/
├── components/   UI components (Navbar, Hero, About, Experience, Skills, Projects, Contact, Footer, ...)
├── data/         Typed content (profile, education, experience, skills, projects, navigation)
├── hooks/        useActiveSection, useResumeAvailability
├── lib/          Small shared utilities
├── types/        Shared TypeScript interfaces
├── App.tsx
├── main.tsx
└── index.css     Design tokens + global styles (Tailwind v4)
```

## Deployment

Configured for Vercel (`vercel.json` rewrites all routes to `index.html` for
client-side routing safety, even though this is currently a single-page site).
