'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#services', label: 'Dịch vụ' },
  { href: '#projects', label: 'Dự án' },
  { href: '#about', label: 'Về chúng tôi' },
  { href: '#team', label: 'Đội ngũ' },
  { href: '#contact', label: 'Liên hệ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'py-3 bg-[#0a0b14]/80 backdrop-blur-xl border-b border-white/[0.06]'
            : 'py-5'
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-glow-sm group-hover:shadow-glow-blue transition-shadow duration-300">
              <Zap size={16} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="font-display font-bold text-xl text-white tracking-tight">
              VTCP
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#contact"
              className="px-5 py-2.5 text-sm font-medium text-white bg-brand-600 hover:bg-brand-500 rounded-lg transition-colors duration-200 shadow-glow-sm hover:shadow-glow-blue"
            >
              Bắt đầu ngay
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-slate-400 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-[#0f1120]/95 backdrop-blur-xl border-b border-white/[0.06] md:hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-3 text-center text-white bg-brand-600 hover:bg-brand-500 rounded-lg font-medium transition-colors"
              >
                Bắt đầu ngay
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
