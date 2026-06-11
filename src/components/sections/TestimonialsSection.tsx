'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Quote } from 'lucide-react'
import { testimonials } from '@/lib/data'

export default function TestimonialsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-1/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-xs font-mono mb-5">
            Khách hàng nói gì
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight">
            Được tin tưởng bởi
            <br />
            <span className="gradient-text-blue">những người dùng thực</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="p-8 rounded-2xl glass glass-hover border border-white/[0.07] flex flex-col gap-5"
            >
              <Quote size={24} className="text-brand-400/60" />
              <p className="text-slate-300 leading-relaxed flex-1">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-sm flex-shrink-0"
                  style={{ background: `${t.color}25`, color: t.color, border: `1px solid ${t.color}30` }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role} · {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
