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

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.vtcp.vn/#organization',
      'name': 'CÔNG TY TNHH VTCP',
      'alternateName': 'VTCP',
      'url': 'https://www.vtcp.vn/',
      'logo': {
        '@type': 'ImageObject',
        '@id': 'https://www.vtcp.vn/#logo',
        'url': 'https://www.vtcp.vn/apple-touch-icon.png',
        'caption': 'VTCP Logo',
      },
      'image': {
        '@id': 'https://www.vtcp.vn/#logo',
      },
      'description':
        'CÔNG TY TNHH VTCP chuyên cung cấp giải pháp công nghệ, thiết kế website, phần mềm và chuyển đổi số cho doanh nghiệp.',
      'email': 'contact@vtcp.vn',
      'telephone': '+84703250747',
      'sameAs': [
        'https://facebook.com/phamvinhtoan3010',
        'https://www.linkedin.com/in/phamvinhtoan/',
        'https://github.com/VTCPLTD',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.vtcp.vn/#localbusiness',
      'name': 'CÔNG TY TNHH VTCP',
      'image': ['https://www.vtcp.vn/og-image.png'],
      'telephone': '+84703250747',
      'email': 'contact@vtcp.vn',
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '681/24/9 Âu Cơ',
        'addressLocality': 'Phường Tân Phú',
        'addressRegion': 'TP. Hồ Chí Minh',
        'postalCode': '700000',
        'addressCountry': 'VN',
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '10.7887342',
        'longitude': '106.6392434',
      },
      'hasMap': 'https://maps.google.com/?q=10.7887342,106.6392434',
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          'opens': '08:00',
          'closes': '17:30',
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': 'Saturday',
          'opens': '08:00',
          'closes': '12:00',
        },
      ],
      'sameAs': ['https://maps.google.com/?cid=15142012048529629233'],
      'areaServed': {
        '@type': 'Country',
        'name': 'Việt Nam',
      },
      'foundingLocation': {
        '@type': 'Place',
        'name': 'TP. Hồ Chí Minh',
      },
      'parentOrganization': {
        '@id': 'https://www.vtcp.vn/#organization',
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="vi"
      className={`dark ${inter.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
