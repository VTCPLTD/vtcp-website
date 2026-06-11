import dynamic from 'next/dynamic'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/ui/CustomCursor'
import HeroSection from '@/components/sections/HeroSection'

// Lazy-load below-the-fold sections to reduce initial bundle size
const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'), { ssr: true })
const ProjectsSection = dynamic(() => import('@/components/sections/ProjectsSection'), { ssr: true })
const AboutSection = dynamic(() => import('@/components/sections/AboutSection'), { ssr: true })
const TechStackSection = dynamic(() => import('@/components/sections/TechStackSection'), { ssr: true })
const TeamSection = dynamic(() => import('@/components/sections/TeamSection'), { ssr: true })
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'), { ssr: true })
const FAQSection = dynamic(() => import('@/components/sections/FAQSection'), { ssr: true })
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'), { ssr: true })

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <TechStackSection />
        <TeamSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
