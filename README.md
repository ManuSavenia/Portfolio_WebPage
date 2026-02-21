# Personal Portfolio Website

A modern, responsive portfolio website showcasing my professional experience, projects, and contact information. 

##  Features

- **Modern Design** - Clean, professional UI with smooth animations and transitions
- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode Support** - Toggle between light and dark themes with next-themes
- **Contact Form** - Integrated form for visitors to reach out to you
- **Project Showcase** - Display my projects with detailed project cards

## Tech Stack

### Core Framework
- **[Next.js 16](https://nextjs.org/)** - React framework with server-side rendering and static generation
- **[React 19](https://react.dev/)** - JavaScript library for building UI components
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & Components
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - React components built with Radix UI
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Consistent icon library

### Form & Data Handling
- **[React Hook Form](https://react-hook-form.com/)** - Performant, flexible form validation
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation

### Additional Tools
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management for Next.js
- **[pnpm](https://pnpm.io/)** - Disk space efficient package manager
- **[ESLint](https://eslint.org/)** - Code quality and consistency tool

## Project Structure

```
Portfolio_WebPage/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   ├── about/
│   │   └── page.tsx             # About page
│   ├── contact/
│   │   └── page.tsx             # Contact page
│   └── experience/
│       └── page.tsx             # Experience/Timeline page
│
├── components/                   # Reusable React components
│   ├── hero-section.tsx         # Landing/hero section
│   ├── navbar.tsx               # Navigation component
│   ├── experience-timeline.tsx   # Career timeline
│   ├── project-card.tsx         # Project showcase card
│   ├── contact-form.tsx         # Contact form component
│   ├── section-bands.tsx        # Section separator
│   ├── theme-provider.tsx       # Theme configuration
│   └── ui/                      # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── form.tsx
│       └── ...                  # Additional UI components
│
├── hooks/                        # Custom React hooks
│   ├── use-toast.ts             # Toast notification hook
│   └── use-mobile.ts            # Mobile detection hook
│
├── lib/                          # Utility functions
│   └── utils.ts                 # Helper functions
│
├── public/                       # Static assets
├── styles/                       # Additional stylesheets
├── next.config.mjs              # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── postcss.config.mjs           # PostCSS configuration
├── components.json              # shadcn/ui configuration
└── package.json                 # Project dependencies
```

## Getting Started

### Prerequisites

- **Node.js** 18.0.0 or higher
- **pnpm** 8.0.0 or higher (recommended) or npm/yarn

### Installation

1. **Clone the repository** (if hosted on GitHub/GitLab)
   ```bash
   git clone <repository-url>
   cd Portfolio_WebPage
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio

## 📝 Available Scripts

- `pnpm dev` - Start the development server with hot reload
- `pnpm build` - Create an optimized production build
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint to check code quality

## Customization Guide

### Updating Content

#### Home Page
- Edit [app/page.tsx](app/page.tsx) to update your landing page content
- Modify [components/hero-section.tsx](components/hero-section.tsx) for the hero section

#### About Page
- Update [app/about/page.tsx](app/about/page.tsx) with your bio and information

#### Experience Page
- Edit [app/experience/page.tsx](app/experience/page.tsx)
- Update the experience data in [components/experience-timeline.tsx](components/experience-timeline.tsx)

#### Projects
- Modify project data in [components/project-card.tsx](components/project-card.tsx)
- Add or remove projects as needed

#### Contact Page
- Update [app/contact/page.tsx](app/contact/page.tsx)
- Configure form submission in [components/contact-form.tsx](components/contact-form.tsx)

### Changing the Theme

The portfolio uses `next-themes` for theme management. To customize colors and styles:

1. Update `tailwind.config.ts` for color schemes
2. Modify `app/globals.css` for global styles
3. The theme toggle is available in the navbar component

### Adding New Components

To add new shadcn/ui components:

```bash
npx shadcn-ui@latest add <component-name>
```

Refer to the [shadcn/ui documentation](https://ui.shadcn.com/) for component usage.

##  Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
   ```bash
   git push origin main
   ```

2. **Import to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect your GitHub repository
   - Configure settings and deploy

3. **Continuous Deployment**
   - Every push to main automatically redeploys your site

### Deploy to Other Platforms

**Netlify:**
- Connect your GitHub/GitLab repository
- Build command: `pnpm build`
- Publish directory: `.next`

**Self-hosted:**
```bash
pnpm build
pnpm start
```

##  Analytics

The portfolio includes Vercel Analytics to track user engagement. View your analytics dashboard on your Vercel project page.

## License

This project is open source and available under the MIT License.
