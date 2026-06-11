# VTCP Website — Redesign 2026

Website công ty VTCP được thiết kế lại hoàn toàn với phong cách **Modern Tech / Premium / Dark UI**, lấy cảm hứng từ Linear, Vercel, Stripe.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Inter + Plus Jakarta Sans + JetBrains Mono |
| Deployment | Vercel |

---

## 📁 Cấu trúc thư mục

```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, fonts
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles + CSS variables
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky navbar with scroll effect
│   │   └── Footer.tsx      # Footer with links
│   ├── sections/
│   │   ├── HeroSection.tsx         # Fullscreen hero + mouse tracking
│   │   ├── ServicesSection.tsx     # 3D card services grid
│   │   ├── ProjectsSection.tsx     # Project showcase + modal
│   │   ├── AboutSection.tsx        # Company story + stats
│   │   ├── TechStackSection.tsx    # Marquee tech stack
│   │   ├── TeamSection.tsx         # Team member cards
│   │   ├── TestimonialsSection.tsx # Customer quotes
│   │   ├── FAQSection.tsx          # Accordion FAQ
│   │   └── ContactSection.tsx      # Contact form + info
│   └── ui/
│       └── CustomCursor.tsx        # Custom cursor interaction
└── lib/
    ├── data.ts             # All site content (services, projects, team...)
    └── utils.ts            # Utility functions
```

---

## 🛠️ Cài đặt & chạy local

### Yêu cầu
- Node.js 18+ 
- npm / yarn / pnpm

### Các bước

```bash
# 1. Cài đặt dependencies
npm install

# 2. Chạy development server
npm run dev

# 3. Mở browser
open http://localhost:3000
```

### Build production

```bash
npm run build
npm start
```

---

## 🌐 Deploy lên Vercel

### Cách 1: Vercel CLI (nhanh nhất)

```bash
# Cài Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: vtcp-website
# - In which directory is your code? ./
# - Override settings? No
```

### Cách 2: GitHub + Vercel Dashboard

1. Push code lên GitHub:
```bash
git init
git add .
git commit -m "feat: initial VTCP website redesign"
git remote add origin https://github.com/your-org/vtcp-website.git
git push -u origin main
```

2. Vào [vercel.com](https://vercel.com) → Import Project → chọn repo.

3. Vercel tự detect Next.js, không cần config thêm.

4. Click **Deploy** → Done ✅

### Environment Variables (nếu cần)

Tạo file `.env.local` cho local:
```env
NEXT_PUBLIC_SITE_URL=https://www.vtcp.vn
```

Thêm vào Vercel Dashboard: Settings → Environment Variables.

---

## 🎨 Tính năng thiết kế

### Interactive Awareness
- **Mouse tracking spotlight** – vùng sáng theo cursor trong Hero section
- **3D card tilt** – Service cards nghiêng nhẹ theo vị trí chuột (perspective transform)
- **Magnetic buttons** – CTA buttons hút về phía chuột
- **Custom cursor** – Cursor tùy chỉnh với dot + ring, phản ứng khi hover links
- **Parallax orbs** – Background orbs di chuyển nhẹ theo chuột

### Motion UI
- Framer Motion spring physics cho tất cả interactions
- Scroll-triggered reveal animations với react-intersection-observer
- Marquee infinite scroll cho Tech Stack
- Hero headline word-by-word entrance animation
- Project card image zoom on hover

### Glassmorphism
- Consistent `.glass` utility class
- Backdrop blur effect
- Subtle border with low opacity

---

## 📈 SEO Setup

File `src/app/layout.tsx` đã có:
- ✅ Title template
- ✅ Meta description
- ✅ Open Graph tags
- ✅ Twitter Card
- ✅ Canonical URL
- ✅ robots directive
- ✅ Viewport + theme-color

### Thêm favicon
Đặt các file sau vào `/public/`:
- `favicon.ico`
- `favicon-32x32.png`
- `apple-touch-icon.png`
- `og-image.png` (1200×630px)
- `site.webmanifest`

---

## 🔧 Tùy chỉnh nội dung

Toàn bộ nội dung website nằm trong **`src/lib/data.ts`**:
- `siteConfig` – thông tin liên hệ
- `services` – danh sách dịch vụ
- `projects` – danh sách dự án
- `team` – thành viên đội ngũ
- `testimonials` – nhận xét khách hàng
- `faqs` – câu hỏi thường gặp
- `techStack` – công nghệ sử dụng

---

## 🏗️ Lighthouse Score (Expected)

| Metric | Score |
|--------|-------|
| Performance | 90+ |
| Accessibility | 95+ |
| Best Practices | 95+ |
| SEO | 100 |

---

Built with ❤️ for VTCP — True Technology. Ultimate Life.
