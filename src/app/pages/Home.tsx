import { useEffect, useState } from 'react'
import { Download, Github, Linkedin, Youtube, Twitter } from 'lucide-react'

const stats = [
  { value: '2+', label: 'Years of\nexperience' },
  { value: '10+', label: 'Projects\ncompleted' },
  { value: '5+', label: 'Technologies\nmastered' },
  { value: '200+', label: 'Code\ncommits' },
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
    <div style={{ background: 'var(--bg)' }}>
      <section className="min-h-[calc(100vh-64px)] max-w-6xl mx-auto px-6 flex flex-col justify-center">
        <div className="grid md:grid-cols-2 gap-12 items-center py-16">

          {/* Left content */}
          <div
            className="order-2 md:order-1 transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
          >
            <p className="text-sm font-medium tracking-widest uppercase mb-3"
              style={{ color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif' }}>
              Software Engineering Student
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-5"
              style={{ fontFamily: 'Syne, sans-serif', color: 'var(--accent)' }}>
              Sebastian<br />Coral
            </h1>
            <p className="text-base leading-relaxed mb-8 max-w-md"
              style={{ color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif' }}>
              I am a software engineering student with basic knowledge of programming and a strong interest in software development and technology.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a href="/cv.pdf" download
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border-2 transition-all duration-300 hover:scale-105"
                style={{ borderColor: 'var(--accent)', color: 'var(--text)', fontFamily: 'Syne, sans-serif' }}>
                <Download size={16} style={{ color: 'var(--accent)' }} />
                DOWNLOAD CV
              </a>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
              {stats.map((stat) => (
                <div key={stat.value}>
                  <p className="text-4xl font-bold mb-1" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}>{stat.value}</p>
                  <p className="text-xs leading-snug whitespace-pre-line" style={{ color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — profile photo with dashed spinning ring */}
          <div
            className="order-1 md:order-2 flex justify-center md:justify-end transition-all duration-700 delay-200"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
          >
            <div style={{ position: 'relative', width: '320px', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

              {/* Dashed spinning ring (SVG) */}
              <svg
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  animation: 'spinRing 5s linear infinite',
                  zIndex: 2,
                }}
                viewBox="0 0 320 320"
              >
                <circle
                  cx="160" cy="160" r="155"
                  fill="none"
                  stroke="#4FC3F7"
                  strokeWidth="3"
                  strokeDasharray="18 10"
                  strokeLinecap="round"
                />
              </svg>

              {/* Photo */}
              <div style={{
                position: 'relative', width: '295px', height: '295px',
                borderRadius: '50%', overflow: 'hidden', zIndex: 3,
                boxShadow: '0 20px 60px var(--accent-glow)',
              }}>
                <img src="/profile.jpg" alt="Sebastian Coral"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' }} />
              </div>
            </div>

            <style>{`
              @keyframes spinRing {
                from { transform: rotate(0deg); }
                to   { transform: rotate(360deg); }
              }
            `}</style>
          </div>

        </div>
      </section>
    </div>
  )
}
