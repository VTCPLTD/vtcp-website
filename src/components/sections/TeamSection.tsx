'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check } from 'lucide-react'
import { team } from '@/lib/data'

export default function TeamSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [copied, setCopied] = useState(false)

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Copy the email to clipboard as a reliable fallback
    navigator.clipboard.writeText('toanpham@vtcp.vn')
    setCopied(true)
    setTimeout(() => setCopied(false), 4000)
  }

  return (
    <section id="team" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-1/30 to-transparent pointer-events-none" />

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
            Đội ngũ
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5 tracking-tight">
            Những con người
            <br />
            <span className="gradient-text-blue">tạo nên VTCP</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Đội ngũ đa dạng, tài năng – đến từ nhiều nơi nhưng cùng chung một mục tiêu: 
            xây dựng công nghệ thực sự tốt.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {team.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>

        {/* Join us CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center p-10 rounded-3xl glass border border-white/[0.07]"
        >
          <h3 className="font-display font-bold text-2xl text-white mb-3">
            Bạn muốn tham gia VTCP?
          </h3>
          <p className="text-slate-400 mb-6 max-w-md mx-auto">
            Chúng tôi luôn tìm kiếm những người tài năng, đam mê công nghệ và muốn tạo ra sản phẩm xuất sắc.
          </p>
          <a
            href="mailto:toanpham@vtcp.vn?subject=%E1%BB%A8ng%20tuy%E1%BB%83n%20v%C3%A0o%20VTCP&body=Xin%20ch%C3%A0o%2C%0A%0AT%C3%B4i%20mu%E1%BB%91n%20%E1%BB%A9ng%20tuy%E1%BB%83n%20v%C3%A0o%20VTCP.%20D%C6%B0%E1%BB%9Bi%20%C4%91%C3%A2y%20l%C3%A0%20th%C3%B4ng%20tin%20c%E1%BB%A7a%20t%C3%B4i%3A%0A%0A..."
            onClick={handleEmailClick}
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-medium rounded-xl transition-colors duration-200 shadow-glow-sm hover:shadow-glow-blue"
          >
            Gửi CV của bạn
          </a>
        </motion.div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-2xl glass border border-emerald-500/30 bg-emerald-500/10 shadow-glow-sm shadow-emerald-500/5 backdrop-blur-md"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Check size={16} />
            </div>
            <div className="text-left">
              <div className="text-white text-sm font-medium">Đã sao chép email!</div>
              <div className="text-slate-400 text-xs mt-0.5">toanpham@vtcp.vn (Đang mở ứng dụng mail...)</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function TeamCard({ member, index }: { member: typeof team[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group cursor-default"
    >
      {/* Avatar */}
      <div className="relative mb-4">
        <motion.div
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="aspect-[3/4] rounded-2xl overflow-hidden relative"
        >
          {/* Fallback with initials (shown only if image is not loaded or failed) */}
          {(!imageLoaded || imageError) && (
            <div 
              className="absolute inset-0 flex items-center justify-center rounded-2xl"
              style={{
                background: `linear-gradient(135deg, ${member.color}15, ${member.color}30)`,
                border: `1px solid ${member.color}30`,
              }}
            >
              <span
                className="font-display font-bold text-3xl"
                style={{ color: member.color }}
              >
                {member.initials}
              </span>
            </div>
          )}

          {/* Real Avatar Image */}
          {member.avatar && !imageError && (
            <Image
              src={member.avatar}
              alt={member.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 16vw, 200px"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          )}
        </motion.div>

        {/* Glow dot */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.5 }}
          className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0a0b14]"
        />
      </div>

      {/* Info */}
      <div>
        <h3 className="font-medium text-white text-sm leading-tight mb-0.5 group-hover:text-white transition-colors">
          {member.name}
        </h3>
        <p className="text-xs text-brand-400 font-medium">{member.role}</p>
        <motion.p
          animate={{ height: hovered ? 'auto' : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-xs text-slate-500 mt-2 leading-relaxed overflow-hidden"
        >
          {member.bio}
        </motion.p>
      </div>
    </motion.div>
  )
}
