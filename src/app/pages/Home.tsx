import { useEffect, useState } from 'react'
import { Download, Github, Linkedin, Youtube, X, ChevronDown, ChevronUp } from 'lucide-react'
import { usePreferences } from '../context/PreferencesContext'

const stats = [
  { value: '2+', label: 'Años de\nexperiencia' },
  { value: '4+', label: 'Proyectos\ncompletados' },
  { value: '5+', label: 'Tecnologías\ndominadas' },
  { value: '200+', label: 'Commits\nde código' },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/Fiurer7kp', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sebastian-coral-34a574401/', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://www.youtube.com/@fiurer_7kp76', label: 'YouTube' },
  { icon: X, href: 'https://x.com/coral_seba60315', label: 'X' },
]

export default function Home() {
  const { text } = usePreferences()
  const [visible, setVisible] = useState(false)
  const [textoExpandido, setTextoExpandido] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  const textoCompleto = text.home.introLong
  const textoResumido = text.home.introShort
  const [firstLine, secondLine] = text.home.name.split('\n')

  return (
    <div className="min-h-screen flex items-center">
      <section className="w-full max-w-6xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center" style={{ position: 'relative', top: '-25px' }}>

          {/* COLUMNA DERECHA EN DESKTOP, PRIMERA EN MÓVIL */}
          <div
            className="order-1 lg:order-2 transition-all duration-700 ease-out"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
          >
            <div className="mx-auto lg:mx-0 lg:mr-24 max-w-[380px] w-full">
              <div className="relative aspect-square w-full flex items-center justify-center">
                <svg
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    animation: 'spinRing 12s linear infinite',
                    zIndex: 2,
                    filter: 'drop-shadow(0 0 8px #4FC3F7)'
                  }}
                  viewBox="0 0 380 380"
                >
                  <defs>
                    <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4FC3F7">
                        <animate attributeName="stop-color" values="#4FC3F7;#00BCD4;#4FC3F7" dur="4s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="50%" stopColor="#00E5FF">
                        <animate attributeName="stop-color" values="#00E5FF;#4FC3F7;#00E5FF" dur="4s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="100%" stopColor="#4FC3F7">
                        <animate attributeName="stop-color" values="#4FC3F7;#00BCD4;#4FC3F7" dur="4s" repeatCount="indefinite" />
                      </stop>
                    </linearGradient>
                    <filter id="neonGlow">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur1" />
                      <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur2" />
                      <feMerge>
                        <feMergeNode in="blur2" />
                        <feMergeNode in="blur1" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <circle
                    cx="190" cy="190" r="175"
                    fill="none"
                    stroke="url(#neonGradient)"
                    strokeWidth="4"
                    strokeDasharray="25 15"
                    strokeLinecap="round"
                    filter="url(#neonGlow)"
                  />
                  <circle
                    cx="190" cy="190" r="165"
                    fill="none"
                    stroke="#4FC3F7"
                    strokeWidth="1.5"
                    strokeOpacity="0.4"
                    strokeDasharray="8 20"
                    strokeLinecap="round"
                  />
                  <circle cx="190" cy="15" r="5" fill="#4FC3F7" filter="url(#neonGlow)" />
                  <circle cx="190" cy="365" r="5" fill="#4FC3F7" filter="url(#neonGlow)" />
                  <circle cx="15" cy="190" r="5" fill="#00E5FF" filter="url(#neonGlow)" />
                  <circle cx="365" cy="190" r="5" fill="#00E5FF" filter="url(#neonGlow)" />
                  <circle cx="80" cy="80" r="3" fill="#4FC3F7" opacity="0.6" />
                  <circle cx="300" cy="300" r="3" fill="#4FC3F7" opacity="0.6" />
                  <circle cx="300" cy="80" r="3" fill="#00E5FF" opacity="0.6" />
                  <circle cx="80" cy="300" r="3" fill="#00E5FF" opacity="0.6" />
                </svg>
                <div style={{
                  position: 'relative',
                  width: '340px',
                  height: '340px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  zIndex: 3,
                  boxShadow: '0 0 40px rgba(79, 195, 247, 0.3), inset 0 0 20px rgba(79, 195, 247, 0.2)',
                  border: '2px solid rgba(79, 195, 247, 0.3)'
                }}>
                  <img
                    src="/profile.jpg"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 25%'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA IZQUIERDA EN DESKTOP, SEGUNDA EN MÓVIL */}
          <div
            className="order-2 lg:order-1 transition-all duration-700 ease-out"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
          >
            <p className="text-sm font-medium tracking-widest uppercase mb-3"
              style={{ color: 'var(--text-muted)' }}>
              {text.home.role}
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-5"
              style={{ fontFamily: 'Syne, sans-serif', color: 'var(--accent)' }}>
              {firstLine}
              <br />
              {secondLine}
            </h1>

            <div className="mb-6">
              <p className="text-base leading-relaxed max-w-xl"
                style={{ color: 'var(--text-muted)' }}>
                {textoExpandido ? textoCompleto : textoResumido}
              </p>

              <button
                onClick={() => setTextoExpandido(!textoExpandido)}
                className="flex items-center gap-2 mt-4 text-sm font-medium transition-all duration-300 hover:gap-3 group"
                style={{ color: 'var(--accent)' }}
              >
                {textoExpandido ? (
                  <>
                    {text.buttons.showLess}
                    <ChevronUp size={16} className="transition-transform group-hover:scale-110" />
                  </>
                ) : (
                  <>
                    {text.buttons.showMore}
                    <ChevronDown size={16} className="transition-transform group-hover:scale-110" />
                  </>
                )}
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-10 justify-start">
              <a href="/cv.pdf" download
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border-2 transition-all duration-300 hover:scale-[1.03]"
                style={{ borderColor: 'var(--accent)', color: 'var(--text)' }}>
                <Download size={16} style={{ color: 'var(--accent)' }} />
                {text.buttons.downloadCv}
              </a>

              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border-2 transition-all duration-300 hover:scale-[1.03]"
                style={{ borderColor: 'var(--accent)', color: 'var(--text)' }}>
                {text.buttons.openCvNewTab}
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

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6"
              style={{ borderTop: '1px solid var(--border)' }}>
              {stats.map((stat) => (
                <div key={stat.value}>
                  <p className="text-3xl md:text-4xl font-bold mb-1"
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

        </div>
      </section>

      <style>{`
        @keyframes spinRing {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        
        @media (max-width: 1024px) {
          .min-h-screen {
            min-height: auto;
            padding: 2rem 0;
          }
        }

        /* MOBILE - Reducir solo el círculo en mobile */
        @media (max-width: 768px) {
          [style*="max-w-[380px]"] {
            max-width: 280px !important;
          }
          
          [style*="340px"] {
            width: 240px !important;
            height: 240px !important;
          }
        }

        @media (max-width: 640px) {
          [style*="max-w-[380px]"] {
            max-width: 240px !important;
          }
          
          [style*="340px"] {
            width: 200px !important;
            height: 200px !important;
          }
        }
      `}</style>
    </div>
  )
}