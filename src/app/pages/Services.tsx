import { ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'

const services = [
  {
    number: '01',
    title: 'Desarrollo Web',
    description: 'Construcción de aplicaciones web rápidas, responsivas y accesibles utilizando frameworks modernos y buenas prácticas.',
    active: true,
  },
  {
    number: '02',
    title: 'Diseño UI/UX',
    description: 'Creación de interfaces de usuario limpias e intuitivas que generan experiencias agradables en todos los dispositivos.',
    active: true,
  },
  {
    number: '03',
    title: 'Diseño de Logos',
    description: 'Diseño de identidades de marca memorables y logos que comunican tus valores de forma efectiva.',
    active: false,
  },
  {
    number: '04',
    title: 'SEO',
    description: 'Optimización de la presencia web para posicionar mejor en buscadores y atraer tráfico orgánico de calidad.',
    active: false,
  },
]

export default function Services() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      className="min-h-screen max-w-6xl mx-auto px-6 py-20"
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease' }}
    >
      <div className="mb-16">
        <p className="text-sm tracking-widest uppercase mb-2 font-medium"
          style={{ color: 'var(--accent)', fontFamily: 'DM Sans, sans-serif' }}>
          Lo que ofrezco
        </p>
        <h2 className="text-4xl md:text-5xl font-bold"
          style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}>
          Mis Servicios
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, i) => (
          <div
            key={service.number}
            className="group relative p-8 rounded-2xl border transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            style={{
              borderColor: 'var(--border)',
              background: 'var(--bg-card)',
              transitionDelay: `${i * 80}ms`,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 40px var(--accent-glow)'
              ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-light)'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = ''
              ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
            }}
          >
            <div className="flex items-start justify-between mb-6">
              <span className="text-5xl font-bold leading-none"
                style={{ color: 'var(--accent-light)', fontFamily: 'Syne, sans-serif' }}>
                {service.number}
              </span>
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: service.active ? 'var(--accent)' : 'var(--text)', color: '#fff' }}>
                <ArrowUpRight size={20} />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3"
              style={{ fontFamily: 'Syne, sans-serif', color: service.active ? 'var(--accent)' : 'var(--text)' }}>
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed"
              style={{ color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif' }}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
