import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface LayoutProps {
  children: React.ReactNode
}

const navLinks = [
  { label: 'Inicio', path: '/' },
  { label: 'Servicios', path: '/services' },
  { label: 'Currículum', path: '/resume' },
  { label: 'Proyectos', path: '/work' },
  { label: 'Contacto', path: '/contact' },
]

export default function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      {/* Navbar */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(255,255,255,0.95)' : 'var(--bg)',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}>
            Sebas<span style={{ color: 'var(--accent)' }}>.</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm font-medium transition-colors duration-200 relative group"
                  style={{
                    color: isActive ? 'var(--accent)' : 'var(--text-muted)',
                    fontFamily: 'DM Sans, sans-serif',
                  }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300"
                    style={{
                      width: isActive ? '100%' : '0%',
                      background: 'var(--accent)',
                    }}
                  />
                </Link>
              )
            })}
          </div>

          {/* Contrátame btn */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: 'var(--accent)',
                color: '#fff',
                fontFamily: 'Syne, sans-serif',
                boxShadow: '0 4px 20px var(--accent-glow)',
              }}
            >
              Contrátame
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <span className="block w-6 h-0.5 transition-all duration-300" style={{ background: 'var(--text)', transform: menuOpen ? 'rotate(45deg) translateY(8px)' : '' }} />
            <span className="block w-6 h-0.5 transition-all duration-300" style={{ background: 'var(--text)', opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-6 h-0.5 transition-all duration-300" style={{ background: 'var(--text)', transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : '' }} />
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
            style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium py-2"
                style={{ color: pathname === link.path ? 'var(--accent)' : 'var(--text)' }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-full text-sm font-semibold text-center mt-2"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              Contrátame
            </Link>
          </div>
        )}
      </header>

      {/* Page content */}
      <main className="pt-16">
        {children}
      </main>
    </div>
  )
}
