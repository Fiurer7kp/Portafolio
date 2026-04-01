import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const contactInfo = [
  { icon: Mail, label: 'Correo', value: 'jhonjhoncoral@gmail.com', href: 'mailto:jhonjhoncoral@gmail.com' },
  { icon: Phone, label: 'Teléfono', value: '+57 3158958710', href: 'tel:+573158958710' },
  { icon: MapPin, label: 'Ubicación', value: 'Colombia, Pasto Nariño', href: '#' },
]

export default function Contact() {
  const [visible, setVisible] = useState(false)
  const [form, setForm] = useState({ name: '', lastName: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', lastName: '', email: '', phone: '', message: '' })
  }

  return (
    <section
      className="min-h-screen max-w-6xl mx-auto px-6 py-20"
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease' }}
    >
      <div className="mb-16">
        <p className="text-sm tracking-widest uppercase mb-2 font-medium"
          style={{ color: 'var(--accent)', fontFamily: 'DM Sans, sans-serif' }}>
          Escríbeme
        </p>
        <h2 className="text-4xl md:text-5xl font-bold"
          style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}>
          Contáctame
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Info de contacto */}
        <div>
          <p className="text-sm leading-relaxed mb-10"
            style={{ color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif', maxWidth: '380px' }}>
            No dudes en escribirme para colaboraciones, proyectos freelance o simplemente para saludar. Siempre estoy abierto a nuevas oportunidades.
          </p>
          <div className="flex flex-col gap-6">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'var(--accent)', color: '#fff' }}>
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide mb-0.5"
                    style={{ color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif' }}>{label}</p>
                  <p className="text-sm font-medium"
                    style={{ color: 'var(--text)', fontFamily: 'DM Sans, sans-serif' }}>{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Formulario */}
        <div className="p-8 rounded-2xl"
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: '0 8px 40px var(--shadow)' }}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {[
              { name: 'name', label: 'Nombre', placeholder: 'Juan' },
              { name: 'lastName', label: 'Apellido', placeholder: 'García' },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-xs font-medium mb-1.5"
                  style={{ color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif' }}>
                  {field.label}
                </label>
                <input type="text" name={field.name}
                  value={form[field.name as keyof typeof form]}
                  onChange={handleChange} placeholder={field.placeholder}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                  style={{ background: 'var(--bg)', border: '1.5px solid var(--border)', color: 'var(--text)', fontFamily: 'DM Sans, sans-serif' }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border)')} />
              </div>
            ))}
          </div>

          {[
            { name: 'email', label: 'Correo electrónico', placeholder: 'juan@ejemplo.com', type: 'email' },
            { name: 'phone', label: 'Teléfono', placeholder: '+57 (300) 123-4567', type: 'tel' },
          ].map((field) => (
            <div key={field.name} className="mb-4">
              <label className="block text-xs font-medium mb-1.5"
                style={{ color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif' }}>
                {field.label}
              </label>
              <input type={field.type} name={field.name}
                value={form[field.name as keyof typeof form]}
                onChange={handleChange} placeholder={field.placeholder}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                style={{ background: 'var(--bg)', border: '1.5px solid var(--border)', color: 'var(--text)', fontFamily: 'DM Sans, sans-serif' }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--border)')} />
            </div>
          ))}

          <div className="mb-6">
            <label className="block text-xs font-medium mb-1.5"
              style={{ color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif' }}>
              Mensaje
            </label>
            <textarea name="message" value={form.message} onChange={handleChange}
              placeholder="Tu mensaje..." rows={5}
              className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
              style={{ background: 'var(--bg)', border: '1.5px solid var(--border)', color: 'var(--text)', fontFamily: 'DM Sans, sans-serif' }}
              onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
              onBlur={(e) => (e.target.style.borderColor = 'var(--border)')} />
          </div>

          <button onClick={handleSubmit}
            className="w-full py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02]"
            style={{ background: sent ? '#22c55e' : 'var(--accent)', color: '#fff', fontFamily: 'Syne, sans-serif', boxShadow: '0 4px 20px var(--accent-glow)' }}>
            <Send size={16} />
            {sent ? '¡Mensaje enviado!' : 'Enviar mensaje'}
          </button>
        </div>
      </div>
    </section>
  )
}
