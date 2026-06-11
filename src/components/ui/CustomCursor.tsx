'use client'

import { useEffect, useRef } from 'react'

const TRAIL_LENGTH = 22

export default function CustomCursor() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const container = containerRef.current
    if (!container) return

    // Create trail dots
    const dots: HTMLDivElement[] = []
    for (let i = 0; i < TRAIL_LENGTH; i++) {
      const dot = document.createElement('div')
      dot.className = 'cursor-trail-dot'
      const progress = i / (TRAIL_LENGTH - 1) // 0 = head, 1 = tail
      const size = Math.round(10 - progress * 7) // 10px → 3px
      const opacity = 1 - progress * 0.85        // 1 → 0.15
      dot.style.cssText = `
        position: fixed;
        pointer-events: none;
        border-radius: 50%;
        z-index: 9999;
        width: ${size}px;
        height: ${size}px;
        opacity: ${opacity};
        transform: translate(-9999px, -9999px);
        will-change: transform;
        transition: width 0.2s ease, height 0.2s ease;
        background: ${
          progress < 0.3
            ? `rgba(48,99,255,${opacity})`
            : progress < 0.6
            ? `rgba(56,189,248,${opacity * 0.9})`
            : `rgba(139,92,246,${opacity * 0.7})`
        };
        mix-blend-mode: screen;
        filter: blur(${progress > 0.5 ? 1 : 0}px);
      `
      container.appendChild(dot)
      dots.push(dot)
    }

    // Main cursor ring
    const ring = document.createElement('div')
    ring.style.cssText = `
      position: fixed;
      pointer-events: none;
      z-index: 9999;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 1.5px solid rgba(48,99,255,0.6);
      will-change: transform;
      transform: translate(-9999px, -9999px);
      transition: width 0.25s ease, height 0.25s ease, border-color 0.25s ease, background 0.25s ease;
      backdrop-filter: blur(0px);
    `
    container.appendChild(ring)

    // Position history for trail
    const history: { x: number; y: number }[] = Array(TRAIL_LENGTH).fill({ x: -9999, y: -9999 })

    let mouseX = -9999
    let mouseY = -9999
    let isHovering = false
    let animId: number

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      // Shift history
      history.unshift({ x: mouseX, y: mouseY })
      history.pop()

      // Update each trail dot
      dots.forEach((dot, i) => {
        const pos = history[i] || history[history.length - 1]
        const size = isHovering
          ? Math.round(14 - (i / (TRAIL_LENGTH - 1)) * 10)
          : Math.round(10 - (i / (TRAIL_LENGTH - 1)) * 7)
        dot.style.width = `${size}px`
        dot.style.height = `${size}px`
        dot.style.transform = `translate(${pos.x - size / 2}px, ${pos.y - size / 2}px)`
      })

      // Update ring (smooth follow)
      const ringSize = isHovering ? 52 : 36
      ring.style.transform = `translate(${mouseX - ringSize / 2}px, ${mouseY - ringSize / 2}px)`

      animId = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      isHovering = true
      ring.style.width = '52px'
      ring.style.height = '52px'
      ring.style.borderColor = 'rgba(48,99,255,0.9)'
      ring.style.background = 'rgba(48,99,255,0.06)'
    }

    const onLeave = () => {
      isHovering = false
      ring.style.width = '36px'
      ring.style.height = '36px'
      ring.style.borderColor = 'rgba(48,99,255,0.6)'
      ring.style.background = 'transparent'
    }

    // Click burst effect
    const onClick = () => {
      ring.style.transform += ' scale(1.8)'
      ring.style.opacity = '0'
      setTimeout(() => {
        ring.style.transition = 'none'
        ring.style.opacity = '1'
        ring.style.transition = 'width 0.25s ease, height 0.25s ease, border-color 0.25s ease, background 0.25s ease'
      }, 200)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('click', onClick)
    animate()

    const updateListeners = () => {
      document.querySelectorAll('a, button, [role="button"], input, textarea, select, label').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    updateListeners()

    // Re-attach on DOM mutations (dynamic content)
    const observer = new MutationObserver(updateListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    // Hide system cursor via body style
    document.body.style.cursor = 'none'
    const style = document.createElement('style')
    style.textContent = '*, *::before, *::after { cursor: none !important; }'
    document.head.appendChild(style)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('click', onClick)
      cancelAnimationFrame(animId)
      observer.disconnect()
      document.body.style.cursor = ''
      style.remove()
      container.innerHTML = ''
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="hidden md:block"
      aria-hidden="true"
    />
  )
}
