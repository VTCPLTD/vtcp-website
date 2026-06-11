'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle2 } from 'lucide-react'

const values = [
  { title: 'Đích thực', desc: 'Công nghệ thực sự giải quyết vấn đề, không phải công nghệ phô trương.' },
  { title: 'Tận tâm', desc: 'Mỗi dự án nhận được sự quan tâm như thể đó là sản phẩm của chúng tôi.' },
  { title: 'Đổi mới', desc: 'Liên tục cập nhật và ứng dụng công nghệ mới nhất một cách có chọn lọc.' },
  { title: 'Minh bạch', desc: 'Giao tiếp rõ ràng, báo cáo trung thực từ ngày đầu đến ngày bàn giao.' },
]

const milestones = [
  { year: '2015', text: 'Thành lập FPO với đội ngũ 5 người đưa ra các giải pháp app/web dành cho trường mầm non' },
  { year: '2021', text: 'Gia nhập VTGROUP Giải quyết các vấn đề chuỗi karaoke ICOOL, các app dành cho xây dựng – bộ công cụ nội bộ cho VTGROUP' },
  { year: '2023', text: 'Thành lập VTCP mở rộng sang phát triển enterprise system cho các doanh nghiệp trong và ngoài nước' },
  { year: '2025', text: 'Vượt mốc 50 dự án, 30 khách hàng trên toàn quốc' },
]

export default function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-600/[0.05] rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-xs font-mono mb-6">
              Về chúng tôi
            </span>

            <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight tracking-tight mb-6">
              Đội ngũ xây dựng
              <br />
              <span className="gradient-text-blue">công nghệ đích thực</span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              VTCP được thành lập với niềm tin rằng công nghệ phải thực sự phục vụ con người, 
              không phải ngược lại. Chúng tôi tập trung vào những gì quan trọng: 
              giải pháp hiệu quả, giao diện đẹp và trải nghiệm người dùng xuất sắc.
            </p>

            <p className="text-slate-400 leading-relaxed mb-10">
              Đội ngũ VTCP đến từ nhiều nơi, nhiều tính cách và văn hóa khác nhau – 
              chính sự đa dạng đó tạo nên sức mạnh tập thể và khả năng giải quyết 
              vấn đề từ nhiều góc nhìn.
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map(v => (
                <div key={v.title} className="flex gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <CheckCircle2 size={18} className="text-brand-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium text-sm mb-1">{v.title}</div>
                    <div className="text-slate-500 text-xs leading-relaxed">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: timeline */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { value: '50+', label: 'Dự án hoàn thành', color: 'from-brand-500 to-brand-700' },
                { value: '30+', label: 'Khách hàng tin tưởng', color: 'from-sky-500 to-brand-600' },
                { value: '5+', label: 'Năm kinh nghiệm', color: 'from-violet-500 to-brand-600' },
                { value: '15+', label: 'Thành viên đội ngũ', color: 'from-teal-500 to-brand-600' },
              ].map(stat => (
                <div key={stat.label} className="p-6 rounded-2xl glass border border-white/[0.07]">
                  <div className={`font-display font-bold text-3xl bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div className="space-y-1">
              <h3 className="text-slate-400 text-sm font-medium mb-5 uppercase tracking-wider">
                Hành trình phát triển
              </h3>
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="flex gap-4 items-start p-4 rounded-xl hover:bg-white/[0.03] transition-colors group"
                >
                  <span className="font-mono text-brand-400 font-semibold text-sm flex-shrink-0 mt-0.5">
                    {m.year}
                  </span>
                  <div className="w-px self-stretch bg-brand-500/20 flex-shrink-0" />
                  <span className="text-slate-300 text-sm group-hover:text-white transition-colors">
                    {m.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
