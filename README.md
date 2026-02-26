# Personal Portfolio Website

A modern, responsive portfolio website showcasing my professional experience, projects, and contact information.

## Features

- **Glassmorphism Design** — Translucent cards with `backdrop-blur` over a scroll-reactive sky/night-sky gradient background
- **Scroll-Reactive Background** — Canvas-based gradient that shifts as you scroll (light: horizon white-blue → deep sky blue; dark: navy glow → starry black)
- **Fully Responsive** — Works seamlessly on desktop, tablet, and mobile devices
- **Dark / Light / System Theme** — Toggle between themes via the navbar
- **Bilingual (EN / ES)** — Full English and Spanish translations, including the footer
- **Contact Form** — Integrated form with email API (Resend)
- **Project Showcase** — Detailed project cards with GitHub links
- **Auto-Updated Footer** — "Last updated" date pulled from the latest Git commit at build time

## Tech Stack

### Core Framework
- **[Next.js 16](https://nextjs.org/)** — React framework with server-side rendering and static generation
- **[React 19](https://react.dev/)** — JavaScript library for building UI components
- **[TypeScript](https://www.typescriptlang.org/)** — Type-safe JavaScript

### Styling & Components
- **[Tailwind CSS 4](https://tailwindcss.com/)** — Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** — React components built with Radix UI
- **[Radix UI](https://www.radix-ui.com/)** — Unstyled, accessible component primitives
- **[Lucide React](https://lucide.dev/)** — Consistent icon library

### Form & Data Handling
- **[React Hook Form](https://react-hook-form.com/)** — Performant, flexible form validation
- **[Zod](https://zod.dev/)** — TypeScript-first schema validation
- **[Resend](https://resend.com/)** — Email delivery API

### Additional Tools
- **[next-themes](https://github.com/pacocoursey/next-themes)** — Theme management for Next.js
- **[Vercel Analytics](https://vercel.com/analytics)** — Web analytics
- **[pnpm](https://pnpm.io/)** — Disk space efficient package manager
- **[ESLint](https://eslint.org/)** — Code quality and consistency tool

## Project Structure

```
Portfolio_WebPage/
├── app/                           # Next.js app directory
│   ├── layout.tsx                 # Root layout (SkyBackground + Navbar + Footer)
│   ├── page.tsx                   # Home page
│   ├── globals.css                # Global styles & color tokens (sky/night-sky palettes)
│   ├── about/
│   │   └── page.tsx               # About page (bio, skills, education)
│   ├── contact/
│   │   ├── page.tsx               # Contact page (server)
│   │   └── page-client.tsx        # Contact page (client)
│   ├── experience/
│   │   └── page.tsx               # Experience page (projects + timeline)
│   └── api/
│       └── contact/
│           └── route.ts           # Contact form email API
│
├── components/                    # Reusable React components
│   ├── sky-background.tsx         # Scroll-reactive gradient canvas (fixed layer)
│   ├── hero-section.tsx           # Landing / hero section
│   ├── navbar.tsx                 # Navigation bar (glassmorphism)
│   ├── footer.tsx                 # Footer with bilingual labels + git date
│   ├── section-bands.tsx          # Home page navigation cards
│   ├── experience-timeline.tsx    # Career timeline
│   ├── project-card.tsx           # Project showcase card
│   ├── contact-form.tsx           # Contact form (glassmorphism inputs)
│   ├── theme-provider.tsx         # Theme configuration
│   └── ui/                        # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── form.tsx
│       └── ...                    # Additional UI components
│
├── context/                       # React context providers
│   └── language-context.tsx       # Language selection context (EN / ES)
│
├── hooks/                         # Custom React hooks
│   ├── use-toast.ts               # Toast notification hook
│   └── use-mobile.ts              # Mobile detection hook
│
├── lib/                           # Utilities and content
│   ├── translations.ts            # i18n strings (EN + ES, incl. footer)
│   └── utils.ts                   # Helper functions
│
├── public/                        # Static assets
│   ├── Pictures/
│   │   ├── about/                 # Profile photo, university & school logos
│   │   └── projects/              # Project images
│   └── Cvs/                       # Downloadable CVs (EN + ES)
│
├── styles/                        # Additional stylesheets
├── next.config.mjs                # Next.js configuration
├── tsconfig.json                  # TypeScript configuration
├── postcss.config.mjs             # PostCSS configuration
├── components.json                # shadcn/ui configuration
└── package.json                   # Project dependencies
```

## License

This project is open source and available under the MIT License.
