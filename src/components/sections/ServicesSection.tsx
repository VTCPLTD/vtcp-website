'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {
  Monitor, Smartphone, Server, Palette, Cloud, Lightbulb, LucideIcon
} from 'lucide-react'
import { services } from '@/lib/data'
import { useInView } from 'react-intersection-observer'

const iconMap: Record<string, LucideIcon> = {
  Monitor, Smartphone, Server, Palette, Cloud, Lightbulb,
}

export default function ServicesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="services" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-1/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-xs font-mono mb-5">
            Dịch vụ
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5 tracking-tight">
            Giải pháp toàn diện
            <br />
            <span className="gradient-text-blue">cho mọi nhu cầu</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Từ phát triển sản phẩm đến hạ tầng vận hành – chúng tôi mang đến giải pháp 
            công nghệ phù hợp với từng giai đoạn phát triển của doanh nghiệp.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [6, -6]), { stiffness: 200, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-6, 6]), { stiffness: 200, damping: 30 })

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const Icon = iconMap[service.icon] ?? Monitor

  const onMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: '800px' }}
    >
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        onMouseMove={onMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false)
          mouseX.set(0)
          mouseY.set(0)
        }}
        className="relative h-full rounded-2xl glass glass-hover p-7 cursor-default group transition-all duration-300"
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(200px circle at ${hovered ? '50% 50%' : '0% 0%'}, rgba(48,99,255,0.08) 0%, transparent 70%)`,
          }}
        />

        {/* Icon */}
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg`}>
          <Icon size={22} className="text-white" />
        </div>

        {/* Content */}
        <h3 className="font-display font-semibold text-lg text-white mb-2">
          {service.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {service.tags.map(tag => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-xs text-slate-400 bg-white/[0.05] border border-white/[0.07]"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
