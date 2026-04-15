import { Star } from 'lucide-react'
import { usePreferences } from '../context/PreferencesContext'

export default function Testimonials() {
  const { text } = usePreferences()

  return (
    <div className="min-h-screen flex items-center">
      <section className="w-full max-w-6xl mx-auto px-6 py-20">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--accent)' }}>
            {text.testimonials.subtitle}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}>
            {text.testimonials.title}
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {text.testimonials.cards.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[28px] border border-white/10 p-8 backdrop-blur-xl"
              style={{ background: 'rgba(255,255,255,0.05)' }}
            >
              <div className="flex items-center gap-2 mb-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={16} style={{ color: 'var(--accent)' }} />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                “{testimonial.quote}”
              </p>
              <div>
                <p className="font-semibold" style={{ color: 'var(--text)' }}>
                  {testimonial.name}
                </p>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
