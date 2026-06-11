import Link from 'next/link'
import { Zap, Facebook, Linkedin, Github, ArrowUpRight } from 'lucide-react'
import { siteConfig } from '@/lib/data'

const footerSections = [
  {
    title: 'Dịch vụ',
    links: [
      { label: 'Phát triển Web', href: '#services' },
      { label: 'Ứng dụng di động', href: '#services' },
      { label: 'Hệ thống doanh nghiệp', href: '#services' },
      { label: 'UI/UX Design', href: '#services' },
      { label: 'Cloud & DevOps', href: '#services' },
    ],
  },
  {
    title: 'Công ty',
    links: [
      { label: 'Về chúng tôi', href: '#about' },
      { label: 'Đội ngũ', href: '#team' },
      { label: 'Dự án', href: '#projects' },
      { label: 'Blog', href: '#' },
      { label: 'Tuyển dụng', href: 'mailto:careers@vtcp.vn' },
    ],
  },
  {
    title: 'Liên hệ',
    links: [
      { label: 'contact@vtcp.vn', href: 'mailto:contact@vtcp.vn' },
      { label: 'TP. Hồ Chí Minh', href: '#' },
      { label: 'Bắt đầu dự án', href: '#contact' },
    ],
  },
]

const socials = [
  { icon: Facebook, href: siteConfig.socials.facebook, label: 'Facebook' },
  { icon: Linkedin, href: siteConfig.socials.linkedin, label: 'LinkedIn' },
  { icon: Github, href: siteConfig.socials.github, label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white border-opacity-5 relative">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                <Zap size={16} className="text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-xl text-white">VTCP</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              Công nghệ đích thực tối ưu cuộc sống. Chúng tôi xây dựng sản phẩm công nghệ giúp doanh nghiệp và con người phát triển.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white transition-all border border-white border-opacity-5"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-medium text-sm mb-5">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white border-opacity-5 max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-slate-600 text-xs">
          {new Date().getFullYear()} VTCP Technology. All rights reserved.
        </p>
        <p className="text-slate-600 text-xs">True Technology. Ultimate Life.</p>
      </div>
    </footer>
  )
}
