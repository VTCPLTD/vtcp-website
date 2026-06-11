'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [isHovering, setIsHovering] = useState(false)

  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 })

  const spotlightX = useTransform(springX, v => `${v}px`)
  const spotlightY = useTransform(springY, v => `${v}px`)

  // Subtle parallax for orbs
  const orb1X = useTransform(springX, [-600, 600], [-30, 30])
  const orb1Y = useTransform(springY, [-400, 400], [-20, 20])
  const orb2X = useTransform(springX, [-600, 600], [20, -20])
  const orb2Y = useTransform(springY, [-400, 400], [15, -15])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [mouseX, mouseY])

  const wordVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    }),
  }

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-grid"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Spotlight following cursor */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${spotlightX} ${spotlightY}, rgba(48,99,255,0.07) 0%, transparent 70%)`,
          opacity: isHovering ? 1 : 0,
        }}
      />

      {/* Ambient glow orbs */}
      <motion.div
        className="glow-orb w-[600px] h-[600px] bg-brand-600/20 top-[-100px] left-[-200px]"
        style={{ x: orb1X, y: orb1Y }}
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
      />
      <motion.div
        className="glow-orb w-[500px] h-[500px] bg-sky-500/15 bottom-[-100px] right-[-100px]"
        style={{ x: orb2X, y: orb2Y }}
        animate={{ scale: [1.06, 1, 1.06] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
      />

      {/* Grid fade at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0a0b14] to-transparent z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-16 md:pt-32 md:pb-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 min-w-0 lg:min-w-[480px]">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-xs font-mono font-medium mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
            True Technology. Ultimate Life.
          </motion.div>

          {/* Headline */}
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-white mb-6">
            <motion.span
              custom={0}
              initial="hidden"
              animate="visible"
              variants={wordVariants}
              className="inline"
            >
              Tech{' '}&{' '}
            </motion.span>
            <motion.span
              custom={1}
              initial="hidden"
              animate="visible"
              variants={wordVariants}
              className="inline gradient-text-blue"
            >
              Life.
            </motion.span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl mb-10 text-balance"
          >
            VTCP cung cấp giải pháp công nghệ toàn diện – từ phát triển phần mềm, 
            ứng dụng di động đến hệ thống quản lý thông minh cho doanh nghiệp.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <MagneticButton>
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-brand-600 hover:bg-brand-500 text-white font-medium rounded-xl shadow-glow-sm hover:shadow-glow-blue transition-all duration-300"
              >
                Bắt đầu dự án
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </MagneticButton>

            <MagneticButton>
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 glass glass-hover text-white font-medium rounded-xl transition-all duration-300"
              >
                <Play size={15} className="text-brand-400" />
                Xem dự án
              </Link>
            </MagneticButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/[0.06]"
          >
            {[
              { value: '50+', label: 'Dự án' },
              { value: '30+', label: 'Khách hàng' },
              { value: '5+', label: 'Năm kinh nghiệm' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="font-display font-bold text-3xl text-white">{stat.value}</div>
                <div className="text-sm text-slate-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 w-full max-w-[360px] sm:max-w-[420px] lg:w-[460px] lg:max-w-none"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  )
}

// Magnetic button wrapper
function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springConfig = { stiffness: 200, damping: 20 }
  const sx = useSpring(x, springConfig)
  const sy = useSpring(y, springConfig)

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * 0.25)
    y.set((e.clientY - cy) * 0.25)
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={() => { x.set(0); y.set(0) }}
    >
      {children}
    </motion.div>
  )
}

// Abstract hero visual
function HeroVisual() {
  return (
    <div className="relative aspect-square">
      {/* Outer ring */}
      <motion.div
        className="absolute inset-0 rounded-3xl border border-white/[0.06]"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />

      {/* Main card */}
      <div className="absolute inset-6 rounded-2xl glass overflow-hidden">
        {/* Header bar */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06]">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          <span className="ml-3 text-xs font-mono text-slate-500">vtcp.vn/solutions</span>
        </div>

        {/* Code lines */}
        <div className="p-5 space-y-2 font-mono text-xs">
          {[
            { indent: 0, color: 'text-brand-400', text: 'const solution = {' },
            { indent: 1, color: 'text-slate-400', text: "  type: 'enterprise'," },
            { indent: 1, color: 'text-slate-400', text: "  quality: 'premium'," },
            { indent: 1, color: 'text-emerald-400', text: "  delivery: 'on-time'," },
            { indent: 0, color: 'text-brand-400', text: '}' },
          ].map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + i * 0.12, duration: 0.4 }}
              className={`${line.color}`}
            >
              {line.text}
            </motion.div>
          ))}
        </div>

        {/* Service pills */}
        <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
          {['Web', 'Mobile', 'Cloud', 'UI/UX'].map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8 + i * 0.1 }}
              className="px-3 py-1 rounded-full text-xs font-medium bg-brand-500/20 text-brand-300 border border-brand-500/20"
            >
              {s}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Floating orbs on visual */}
      <motion.div
        className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl glass flex items-center justify-center text-2xl"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      >
        ⚡
      </motion.div>
      <motion.div
        className="absolute -bottom-4 -left-4 w-14 h-14 rounded-xl glass flex items-center justify-center text-xl"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
      >
        🚀
      </motion.div>
    </div>
  )
}
