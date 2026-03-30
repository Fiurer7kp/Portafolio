import { useState, useEffect } from 'react'
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'Personal Portfolio',
    description: 'A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations and clean design.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    number: '02',
    title: 'Design Portfolio',
    description: 'A showcase of UI/UX design work including mobile apps, web interfaces, and brand identities.',
    tags: ['Next.js', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    number: '03',
    title: 'E-Commerce App',
    description: 'Full-stack e-commerce platform with product management, cart system, and secure checkout integration.',
    tags: ['Node.js', 'React', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80',
    liveUrl: '#',
    githubUrl: '#',
  },
]

export default function Work() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  const prev = () => setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1))

  const project = projects[current]

  return (
    <section
      className="min-h-screen max-w-6xl mx-auto px-6 py-20"
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease' }}
    >
      {/* Header */}
      <div className="mb-16">
        <p
          className="text-sm tracking-widest uppercase mb-2 font-medium"
          style={{ color: 'var(--accent)', fontFamily: 'DM Sans, sans-serif' }}
        >
          My projects
        </p>
        <h2
          className="text-4xl md:text-5xl font-bold"
          style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}
        >
          Featured Work
        </h2>
      </div>

      {/* Project card */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left — info */}
        <div key={current} style={{ animation: 'fadeInLeft 0.4s ease' }}>
          <span
            className="text-6xl font-bold block mb-4 leading-none"
            style={{ color: 'var(--accent-light)', fontFamily: 'Syne, sans-serif' }}
          >
            {project.number}
          </span>

          <h3
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}
          >
            {project.title}
          </h3>

          <p
            className="text-sm leading-relaxed mb-6"
            style={{ color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif' }}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{
                  background: 'var(--bg-soft)',
                  color: 'var(--accent)',
                  border: '1px solid var(--accent-light)',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
            >
              <ExternalLink size={18} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
            >
              <Github size={18} />
            </a>
          </div>
        </div>

        {/* Right — image */}
        <div className="relative">
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              boxShadow: '0 20px 60px var(--accent-glow)',
              border: '1px solid var(--border)',
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-72 md:h-96 object-cover transition-all duration-500"
            />
          </div>

          {/* Carousel nav */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-10">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? '32px' : '10px',
              height: '10px',
              background: i === current ? 'var(--accent)' : 'var(--border)',
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}
