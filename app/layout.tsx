import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { execSync } from 'node:child_process'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/context/language-context'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SkyBackground } from '@/components/sky-background'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Portfolio | Software Engineer',
  description: 'Personal portfolio website showcasing projects, experience, and skills.',
  icons: {
    icon: '/Pictures/user/face1.png',
    apple: '/Pictures/user/face1.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d1117',
}

function formatDate(date: Date) {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function getLastUpdated() {
  try {
    const gitDate = execSync('git log -1 --format=%cI', {
      cwd: process.cwd(),
      stdio: ['ignore', 'pipe', 'ignore'],
    })
      .toString()
      .trim()

    if (!gitDate) {
      return formatDate(new Date())
    }

    return formatDate(new Date(gitDate))
  } catch {
    return formatDate(new Date())
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const lastUpdated = getLastUpdated()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <SkyBackground />
            <Navbar />
            <main>{children}</main>
            <Footer lastUpdated={lastUpdated} />
          </ThemeProvider>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
