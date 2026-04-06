import { useState, useEffect } from 'react'
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'Portafolio web',
    description: 'Sitio web de portafolio moderno y responsivo construido con React, TypeScript y Tailwind CSS. Incluye animaciones fluidas y diseño limpio.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    image: '/portafolio.png',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    number: '02',
    title: 'Sistema de alertas SAFE PASTO',
    description: 'Aplicación web para gestión de alertas de seguridad ciudadana en Pasto, con panel de administración y visualización de datos en tiempo real.',
    tags: ['TypeScript', 'Java'],
    image: '/safe.png.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/Danielatrres123/Frontend-SafePasto..git',
  },
  {
    number: '03',
    title: 'MusicPlayer',
    description: 'Reproductor de musica estilo Spotify construido con Node.js y React. Permite a los usuarios crear listas de reproducción, buscar canciones y compartir música.',
    tags: ['Node.js', 'React'],
    image: '/reproductor.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/Fiurer7kp/MusicPlayer.git',
  },
]

export default function Work() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const prevProject = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const nextProject = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const currentProject = projects[current]

  return (
    <section
      className="min-h-screen max-w-6xl mx-auto px-6 py-20"
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.6s ease',
      }}
    >
      {/* TÍTULO */}
      <div className="mb-16">
        <p
          className="text-sm tracking-widest uppercase mb-2 font-medium"
          style={{ color: 'var(--accent)' }}
        >
          Mis proyectos
        </p>
        <h2
          className="text-4xl md:text-5xl font-bold"
          style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}
        >
          Trabajos Destacados
        </h2>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* TEXTO DEL PROYECTO */}
        <div>
          <span
            className="text-6xl font-bold block mb-4 leading-none"
            style={{ color: 'var(--accent-light)', fontFamily: 'Syne, sans-serif' }}
          >
            {currentProject.number}
          </span>
          <h3
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}
          >
            {currentProject.title}
          </h3>
          <p
            className="text-sm leading-relaxed mb-6"
            style={{ color: 'var(--text-muted)' }}
          >
            {currentProject.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {currentProject.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{
                  background: 'var(--bg-soft)',
                  color: 'var(--accent)',
                  border: '1px solid var(--accent-light)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a
              href={currentProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
            >
              <ExternalLink size={18} />
            </a>
            <a
              href={currentProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
            >
              <Github size={18} />
            </a>
          </div>
        </div>

        {/* IMAGEN DEL PROYECTO - CENTRADA CORRECTAMENTE */}
        <div className="relative">
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              boxShadow: '0 20px 60px var(--accent-glow)',
              border: '1px solid var(--border)',
              background: 'var(--bg-soft)',
              width: '100%',
              height: '250px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={currentProject.image}
              alt={currentProject.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center',
              }}
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.currentTarget
                target.src = 'https://placehold.co/600x400/1a1a2e/4FC3F7?text=Sin+imagen'
                target.style.objectFit = 'contain'
              }}
            />
          </div>

          {/* BOTONES */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button
              onClick={prevProject}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextProject}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* INDICADORES */}
      <div className="flex justify-center gap-3 mt-10">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className="rounded-full transition-all duration-300"
            style={{
              width: idx === current ? '32px' : '10px',
              height: '10px',
              background: idx === current ? 'var(--accent)' : 'var(--border)',
            }}
          />
        ))}
      </div>
    </section>
  )
}