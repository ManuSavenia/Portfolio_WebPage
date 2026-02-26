'use client'

import { useEffect, useRef } from 'react'

export function SkyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let lastScroll = 0
    let currentScroll = 0
    let ticking = false

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const draw = () => {
      if (!ctx || !canvas) return

      const scrollMax = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = scrollMax > 0 ? currentScroll / scrollMax : 0

      const isDark = document.documentElement.classList.contains('dark')

      if (isDark) {
        // Dark: navy horizon glow → deep starry black
        const topR = Math.round(2 + scrollProgress * 1)
        const topG = Math.round(3 + scrollProgress * 2)
        const topB = Math.round(8 + scrollProgress * 5)

        const midR = Math.round(10 + (1 - scrollProgress) * 15)
        const midG = Math.round(15 + (1 - scrollProgress) * 20)
        const midB = Math.round(40 + (1 - scrollProgress) * 40)

        const botR = Math.round(15 + (1 - scrollProgress) * 30)
        const botG = Math.round(25 + (1 - scrollProgress) * 35)
        const botB = Math.round(60 + (1 - scrollProgress) * 50)

        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
        gradient.addColorStop(0, `rgb(${topR}, ${topG}, ${topB})`)
        gradient.addColorStop(0.5, `rgb(${midR}, ${midG}, ${midB})`)
        gradient.addColorStop(1, `rgb(${botR}, ${botG}, ${botB})`)
        ctx.fillStyle = gradient
      } else {
        // Light: horizon white-blue → deep sky blue
        const topR = Math.round(235 - scrollProgress * 40)
        const topG = Math.round(245 - scrollProgress * 30)
        const topB = 255

        const midR = Math.round(180 - scrollProgress * 40)
        const midG = Math.round(210 - scrollProgress * 30)
        const midB = Math.round(245 - scrollProgress * 10)

        const botR = Math.round(120 - scrollProgress * 30)
        const botG = Math.round(170 - scrollProgress * 30)
        const botB = Math.round(230 - scrollProgress * 10)

        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
        gradient.addColorStop(0, `rgb(${topR}, ${topG}, ${topB})`)
        gradient.addColorStop(0.5, `rgb(${midR}, ${midG}, ${midB})`)
        gradient.addColorStop(1, `rgb(${botR}, ${botG}, ${botB})`)
        ctx.fillStyle = gradient
      }

      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    const onScroll = () => {
      lastScroll = window.scrollY
      if (!ticking) {
        ticking = true
        animationId = requestAnimationFrame(() => {
          currentScroll = lastScroll
          draw()
          ticking = false
        })
      }
    }

    // Observe theme changes
    const observer = new MutationObserver(() => {
      draw()
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    resize()
    draw()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', () => {
      resize()
      draw()
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
      observer.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 h-screen w-screen"
      aria-hidden="true"
    />
  )
}
