'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { techStack } from '@/lib/data'

const categoryColors: Record<string, string> = {
  Frontend: '#3063ff',
  Language: '#0ea5e9',
  Backend: '#8b5cf6',
  Database: '#10b981',
  Cache: '#f59e0b',
  Mobile: '#ec4899',
  Cloud: '#38bdf8',
  DevOps: '#f97316',
  Design: '#a855f7',
}

export default function TechStackSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  // Duplicate for infinite scroll
  const doubled = [...techStack, ...techStack]

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-xs font-mono mb-4">
            Công nghệ
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
            Công nghệ chúng tôi sử dụng
          </h2>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0b14] to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0b14] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {doubled.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-xl glass border border-white/[0.07] hover:border-white/[0.15] transition-colors group"
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: categoryColors[tech.category] ?? '#888' }}
              />
              <span className="text-slate-300 group-hover:text-white font-medium text-sm whitespace-nowrap transition-colors">
                {tech.name}
              </span>
              <span className="text-slate-600 text-xs">{tech.category}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
