import { useEffect, useState } from 'react'
import { Download, Github, Linkedin, Youtube, Twitter } from 'lucide-react'

const stats = [
  { value: '2+', label: 'Años de\nexperiencia' },
  { value: '10+', label: 'Proyectos\ncompletados' },
  { value: '5+', label: 'Tecnologías\ndominadas' },
  { value: '200+', label: 'Commits\nde código' },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
]

export default function Home() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div>
      <section className="min-h-screen max-w-6xl mx-auto px-6 flex flex-col justify-center">
        <div className="grid md:grid-cols-2 gap-12 items-center py-16">

          <div
            className="order-2 md:order-1 transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
          >
            <p className="text-sm font-medium tracking-widest uppercase mb-3"
              style={{ color: 'var(--text-muted)' }}>
              Estudiante de Ingeniería de Software
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-5"
              style={{ fontFamily: 'Syne, sans-serif', color: 'var(--accent)' }}>
              Sebastian<br />Coral
            </h1>

            <p className="text-base leading-relaxed mb-8 max-w-md"
              style={{ color: 'var(--text-muted)' }}>
              Soy estudiante de ingeniería de software con conocimientos básicos de programación y un fuerte interés en el desarrollo de software y la tecnología.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a href="/cv.pdf" download
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border-2 transition-all duration-300 hover:scale-105"
                style={{ borderColor: 'var(--accent)', color: 'var(--text)' }}>
                <Download size={16} style={{ color: 'var(--accent)' }} />
                DESCARGAR CV
              </a>

              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
              style={{ borderTop: '1px solid var(--border)' }}>
              {stats.map((stat) => (
                <div key={stat.value}>
                  <p className="text-4xl font-bold mb-1"
                    style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}>
                    {stat.value}
                  </p>
                  <p className="text-xs leading-snug whitespace-pre-line"
                    style={{ color: 'var(--text-muted)' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="order-1 md:order-2 flex justify-center md:justify-end transition-all duration-700 delay-200"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
          >
            <div style={{ position: 'relative', width: '320px', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', animation: 'spinRing 5s linear infinite', zIndex: 2 }}
                viewBox="0 0 320 320"
              >
                <circle cx="160" cy="160" r="155" fill="none" stroke="#4FC3F7" strokeWidth="3" strokeDasharray="18 10" strokeLinecap="round" />
              </svg>

              <div style={{ position: 'relative', width: '295px', height: '295px', borderRadius: '50%', overflow: 'hidden', zIndex: 3, boxShadow: '0 20px 60px var(--accent-glow)' }}>
                <img src="/profile.jpg"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}