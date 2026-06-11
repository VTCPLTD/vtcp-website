'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ArrowUpRight, Tag } from 'lucide-react'
import { projects } from '@/lib/data'
import { useInView } from 'react-intersection-observer'

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-xs font-mono mb-5">
              Dự án
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight">
              Sản phẩm chúng tôi
              <br />
              <span className="gradient-text-blue">đã xây dựng</span>
            </h2>
          </div>
          <p className="text-slate-400 md:max-w-xs leading-relaxed">
            Mỗi dự án là một câu chuyện riêng – về thách thức, giải pháp và kết quả tạo ra giá trị thực.
          </p>
        </motion.div>

        {/* Featured projects (2-column) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {projects.filter(p => p.featured).map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              featured
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>

        {/* Remaining projects (3-column) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.filter(p => !p.featured).map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i + 2}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}

function ProjectCard({
  project, index, featured = false, onClick,
}: {
  project: typeof projects[0]
  index: number
  featured?: boolean
  onClick: () => void
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative rounded-2xl glass glass-hover cursor-pointer overflow-hidden ${
        featured ? 'aspect-[4/3]' : 'aspect-square'
      }`}
    >
      {/* Project image */}
      <div className="absolute inset-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-cover transition-transform duration-700 ${hovered ? 'scale-110' : 'scale-100'}`}
          sizes="(max-width: 768px) 100vw, 50vw"
          onError={(e) => {
            // Fallback gradient if image fails
            (e.target as HTMLImageElement).style.display = 'none'
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b14]/90 via-[#0a0b14]/40 to-transparent" />
      </div>

      {/* Color accent overlay on hover */}
      <motion.div
        className="absolute inset-0 transition-opacity duration-400"
        style={{ background: `radial-gradient(circle at 50% 80%, ${project.color}20 0%, transparent 70%)` }}
        animate={{ opacity: hovered ? 1 : 0 }}
      />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="inline-block px-2 py-0.5 rounded text-xs text-slate-400 bg-white/[0.08] border border-white/[0.08] mb-2">
              {project.category}
            </span>
            <h3 className="font-display font-semibold text-white text-lg leading-tight mb-2">
              {project.title}
            </h3>
            <motion.p
              animate={{ height: hovered ? 'auto' : 0, opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-slate-300 text-sm leading-relaxed overflow-hidden"
            >
              {project.description}
            </motion.p>
          </div>

          <motion.div
            animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
            className="flex-shrink-0 w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center"
          >
            <ArrowUpRight size={16} className="text-white" />
          </motion.div>
        </div>

        {/* Tags */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          transition={{ duration: 0.25 }}
          className="flex flex-wrap gap-1.5 mt-3"
        >
          {project.tags.map(tag => (
            <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs bg-white/10 text-white/70">
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="w-full max-w-2xl rounded-3xl glass border border-white/[0.1] overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative h-64 bg-surface-2">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1120] to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-black/50 backdrop-blur flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <span className="inline-flex items-center gap-1.5 text-xs text-brand-400 font-mono mb-3">
            <Tag size={11} />
            {project.category}
          </span>
          <h3 className="font-display font-bold text-2xl text-white mb-3">{project.title}</h3>
          <p className="text-slate-300 leading-relaxed mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1.5 rounded-full text-sm bg-brand-500/15 text-brand-300 border border-brand-500/20">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
