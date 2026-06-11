'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MessageCircle, ExternalLink, Clock, CheckCheck, Zap, Shield, Users } from 'lucide-react'
import { siteConfig } from '@/lib/data'

const contactInfo = [
  { icon: Mail,  label: 'Email',      value: siteConfig.email,   href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: 'Điện thoại', value: siteConfig.phone,   href: `tel:${siteConfig.phone}` },
]

const MESSENGER_URL = 'https://www.facebook.com/messages/t/phamvinhtoan3010'
const FACEBOOK_URL  = 'https://www.facebook.com/phamvinhtoan3010'

// Fake chat bubbles for the visual mockup
const chatBubbles = [
  { from: 'them', text: 'Xin chào! Tôi muốn tư vấn về dự án phần mềm.', time: '10:24' },
  { from: 'me',   text: 'Chào bạn! Vui lòng mô tả chi tiết hơn về dự án nhé 😊', time: '10:25' },
  { from: 'them', text: 'Chúng tôi cần một hệ thống quản lý nội bộ cho 200 nhân viên.', time: '10:26' },
  { from: 'me',   text: 'Rất thú vị! Để tôi sắp xếp một buổi tư vấn miễn phí cho bạn.', time: '10:27' },
]

export default function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-600/[0.08] rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0866FF]/[0.05] rounded-full filter blur-3xl pointer-events-none" />

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
            Liên hệ
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight mb-4">
            Sẵn sàng bắt đầu
            <br />
            <span className="gradient-text-blue">dự án của bạn?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Nhắn tin trực tiếp qua Messenger — chúng tôi phản hồi nhanh nhất có thể.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left – contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map(info => (
              <a
                key={info.label}
                href={info.href}
                className="flex items-start gap-4 p-5 rounded-2xl glass glass-hover group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500/25 transition-colors">
                  <info.icon size={18} className="text-brand-400" />
                </div>
                <div>
                  <div className="text-slate-500 text-xs mb-1">{info.label}</div>
                  <div className="text-white font-medium text-sm">{info.value}</div>
                </div>
              </a>
            ))}

            {/* Response time badge */}
            <div className="flex items-center gap-3 p-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <div>
                <div className="text-emerald-400 text-sm font-medium">Đang hoạt động</div>
                <div className="text-slate-500 text-xs mt-0.5 flex items-center gap-1">
                  <Clock size={11} /> Thường phản hồi trong vài phút
                </div>
              </div>
            </div>

            {/* Service commitment card */}
            <div className="rounded-2xl overflow-hidden border border-white/[0.07]" style={{ background: 'linear-gradient(135deg, rgba(48,99,255,0.06) 0%, rgba(14,165,233,0.04) 100%)' }}>
              <div className="px-5 py-3 border-b border-white/[0.06] flex items-center gap-2">
                <Zap size={13} className="text-brand-400" />
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Cam kết dịch vụ</span>
              </div>
              <div className="p-5 space-y-4">
                {[
                  {
                    icon: Clock,
                    title: 'Giờ làm việc',
                    value: 'T2 – T6 · 8:00 – 18:00',
                    sub: 'Thứ 7 theo lịch hẹn',
                    color: 'text-brand-400',
                    bg: 'bg-brand-500/10',
                  },
                  {
                    icon: Zap,
                    title: 'Phản hồi đầu tiên',
                    value: 'Trong vòng 2 giờ',
                    sub: 'Trong giờ hành chính',
                    color: 'text-amber-400',
                    bg: 'bg-amber-500/10',
                  },
                  {
                    icon: Shield,
                    title: 'Bảo mật thông tin',
                    value: '100% Bảo mật',
                    sub: 'Thông tin của bạn được mã hóa',
                    color: 'text-emerald-400',
                    bg: 'bg-emerald-500/10',
                  },
                  {
                    icon: Users,
                    title: 'Tư vấn miễn phí',
                    value: '30 phút đầu tiên',
                    sub: 'Không ràng buộc hợp đồng',
                    color: 'text-sky-400',
                    bg: 'bg-sky-500/10',
                  },
                ].map(item => (
                  <div key={item.title} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0`}>
                      <item.icon size={14} className={item.color} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-slate-500 text-[11px] leading-none mb-0.5">{item.title}</div>
                      <div className="text-white text-xs font-medium">{item.value}</div>
                    </div>
                    <div className="text-slate-600 text-[10px] text-right leading-tight hidden sm:block">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right – Messenger chat card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl border border-white/[0.08] overflow-hidden" style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)' }}>
              {/* Chat header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.06]" style={{ background: 'rgba(8,102,255,0.12)' }}>
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0866FF] to-[#1877F2] flex items-center justify-center text-white font-bold text-sm">
                    VP
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0a0b14]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-semibold text-sm">Phạm Vinh Toàn</div>
                  <div className="text-emerald-400 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Đang hoạt động
                  </div>
                </div>
                {/* Messenger logo */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{ background: 'rgba(8,102,255,0.25)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#0866FF" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.477 2 2 6.145 2 11.259c0 2.928 1.42 5.54 3.641 7.255v3.486l3.28-1.803C9.912 20.392 10.939 20.517 12 20.517c5.523 0 10-4.145 10-9.258C22 6.145 17.523 2 12 2zm1.057 12.468l-2.545-2.713-4.966 2.713 5.465-5.803 2.607 2.713 4.904-2.713-5.465 5.803z"/>
                  </svg>
                  <span className="text-[#0866FF] text-xs font-medium">Messenger</span>
                </div>
              </div>

              {/* Chat bubbles */}
              <div className="p-5 space-y-4 min-h-[280px]">
                {chatBubbles.map((bubble, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}
                    className={`flex items-end gap-2 ${bubble.from === 'me' ? 'flex-row-reverse' : 'flex-row'}`}
                  >
                    {bubble.from === 'them' && (
                      <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0 text-xs text-slate-400 mb-1">
                        👤
                      </div>
                    )}
                    {bubble.from === 'me' && (
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0866FF] to-[#1877F2] flex items-center justify-center flex-shrink-0 text-xs text-white font-bold mb-1">
                        VP
                      </div>
                    )}
                    <div className={`max-w-[75%] ${bubble.from === 'me' ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
                      <div
                        className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                          bubble.from === 'me'
                            ? 'text-white rounded-br-sm'
                            : 'text-slate-200 bg-white/[0.07] border border-white/[0.06] rounded-bl-sm'
                        }`}
                        style={bubble.from === 'me' ? { background: 'linear-gradient(135deg,#0866FF,#1877F2)' } : {}}
                      >
                        {bubble.text}
                      </div>
                      <div className={`flex items-center gap-1 text-[10px] text-slate-600 ${bubble.from === 'me' ? 'flex-row-reverse' : ''}`}>
                        {bubble.time}
                        {bubble.from === 'me' && <CheckCheck size={11} className="text-[#0866FF]" />}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Typing indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.2, duration: 0.4 }}
                  className="flex items-end gap-2"
                >
                  <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0 text-xs text-slate-400">
                    👤
                  </div>
                  <div className="px-4 py-3 rounded-2xl rounded-bl-sm bg-white/[0.07] border border-white/[0.06] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </motion.div>
              </div>

              {/* CTA */}
              <div className="px-5 pb-5 space-y-3">
                <a
                  href={MESSENGER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="messenger-cta-btn"
                  className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-semibold text-white text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(8,102,255,0.4)] active:scale-[0.98]"
                  style={{ background: 'linear-gradient(135deg, #0866FF 0%, #1877F2 100%)' }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.477 2 2 6.145 2 11.259c0 2.928 1.42 5.54 3.641 7.255v3.486l3.28-1.803C9.912 20.392 10.939 20.517 12 20.517c5.523 0 10-4.145 10-9.258C22 6.145 17.523 2 12 2zm1.057 12.468l-2.545-2.713-4.966 2.713 5.465-5.803 2.607 2.713 4.904-2.713-5.465 5.803z"/>
                  </svg>
                  Nhắn tin qua Messenger
                </a>

                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-2xl text-slate-400 hover:text-white text-sm transition-all duration-200 border border-white/[0.06] hover:border-white/[0.15] hover:bg-white/[0.04]"
                >
                  <ExternalLink size={14} />
                  Xem trang Facebook
                </a>
              </div>
            </div>

            {/* Bottom note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-center text-slate-600 text-xs mt-4 flex items-center justify-center gap-1.5"
            >
              <MessageCircle size={12} />
              Bấm nút để mở Messenger và bắt đầu cuộc trò chuyện ngay
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
