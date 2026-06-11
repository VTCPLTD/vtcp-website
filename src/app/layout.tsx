import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'VTCP – True Technology, Ultimate Life',
    template: '%s | VTCP',
  },
  description:
    'VTCP cung cấp giải pháp công nghệ toàn diện – từ phát triển phần mềm, ứng dụng di động, đến hệ thống quản lý thông minh cho doanh nghiệp và tổ chức.',
  keywords: ['VTCP', 'công nghệ', 'phần mềm', 'ứng dụng di động', 'giải pháp công nghệ'],
  authors: [{ name: 'VTCP Technology', url: 'https://www.vtcp.vn' }],
  creator: 'VTCP',
  metadataBase: new URL('https://www.vtcp.vn'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'VTCP – True Technology, Ultimate Life',
    description: 'Giải pháp công nghệ đích thực – phần mềm doanh nghiệp, ứng dụng di động, hệ thống thông minh.',
    url: 'https://www.vtcp.vn',
    siteName: 'VTCP',
    locale: 'vi_VN',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'VTCP' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VTCP – True Technology, Ultimate Life',
    description: 'Giải pháp công nghệ đích thực cho doanh nghiệp và tổ chức.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#0a0b14',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="vi"
      className={`dark ${inter.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
