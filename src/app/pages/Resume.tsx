import { useState, useEffect } from 'react'

type Tab = 'experience' | 'education' | 'skills' | 'about'

const tabs: { id: Tab; label: string }[] = [
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About me' },
]

const experience = [
  {
    period: '2022 - Present',
    title: 'Full Stack Developer',
    company: 'Tech Solutions Inc.',
  },
  {
    period: '2020 - 2021',
    title: 'Freelance Web Developer',
    company: 'E-commerce Startup',
  },
  {
    period: 'Summer 2021',
    title: 'Front-End Developer Intern',
    company: 'Web Design Studio',
  },
]

const education = [
  {
    period: '2021 - Present',
    title: 'Software Engineering',
    company: 'Universidad Nacional',
  },
  {
    period: '2019 - 2021',
    title: 'Technical Bachiller',
    company: 'Colegio Técnico',
  },
]

const skills = [
  { name: 'React / Next.js', level: 85 },
  { name: 'TypeScript', level: 75 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Node.js', level: 70 },
  { name: 'UI/UX Design', level: 65 },
  { name: 'Git / GitHub', level: 80 },
]

export default function Resume() {
  const [activeTab, setActiveTab] = useState<Tab>('experience')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  const timelineData = activeTab === 'experience' ? experience : education

  return (
    <section
      className="min-h-screen max-w-6xl mx-auto px-6 py-20"
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease' }}
    >
      <div className="grid md:grid-cols-3 gap-12">
        {/* Left column */}
        <div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}
          >
            Why hire me?
          </h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif' }}>
            I bring enthusiasm, a solid foundation in modern web technologies, and a genuine passion for building great digital experiences.
          </p>

          {/* Tabs */}
          <div className="flex flex-col gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="px-5 py-3.5 rounded-xl text-sm font-semibold text-left transition-all duration-200"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  background: activeTab === tab.id ? 'var(--accent)' : 'var(--bg-card)',
                  color: activeTab === tab.id ? '#fff' : 'var(--text)',
                  border: `1px solid ${activeTab === tab.id ? 'var(--accent)' : 'var(--border)'}`,
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="md:col-span-2">
          <h3
            className="text-3xl font-bold mb-2"
            style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}
          >
            {activeTab === 'experience' ? 'My experience' : activeTab === 'education' ? 'My education' : activeTab === 'skills' ? 'My skills' : 'About me'}
          </h3>
          <p className="text-sm mb-8" style={{ color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif' }}>
            Here's a quick overview of my background and capabilities.
          </p>

          {/* Timeline for experience/education */}
          {(activeTab === 'experience' || activeTab === 'education') && (
            <div className="relative pl-6">
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5"
                style={{ background: 'var(--border)' }}
              />
              <div className="flex flex-col gap-8">
                {timelineData.map((item, i) => (
                  <div key={i} className="relative">
                    <div
                      className="absolute -left-[25px] w-4 h-4 rounded-full border-2"
                      style={{
                        background: 'var(--bg)',
                        borderColor: 'var(--accent)',
                        top: '6px',
                      }}
                    />
                    <p
                      className="text-xs font-semibold mb-1 tracking-wide"
                      style={{ color: 'var(--accent)', fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {item.period}
                    </p>
                    <h4
                      className="text-lg font-bold mb-1"
                      style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-sm" style={{ color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif' }}>
                      • {item.company}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills bars */}
          {activeTab === 'skills' && (
            <div className="flex flex-col gap-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium" style={{ color: 'var(--text)', fontFamily: 'DM Sans, sans-serif' }}>
                      {skill.name}
                    </span>
                    <span className="text-sm" style={{ color: 'var(--accent)', fontFamily: 'DM Sans, sans-serif' }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full" style={{ background: 'var(--border)' }}>
                    <div
                      className="h-2 rounded-full transition-all duration-700"
                      style={{
                        width: `${skill.level}%`,
                        background: 'linear-gradient(90deg, var(--accent-dark), var(--accent))',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* About */}
          {activeTab === 'about' && (
            <div className="space-y-4">
              <p style={{ color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif', lineHeight: '1.8' }}>
                I'm Sebastian Coral, a software engineering student passionate about turning ideas into beautiful, functional digital products. I love clean code, thoughtful design, and continuous learning.
              </p>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif', lineHeight: '1.8' }}>
                When I'm not coding, I enjoy exploring new frameworks, contributing to open source, and learning about the intersection of technology and design.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  ['Name', 'Sebastian Coral'],
                  ['Email', 'sebastian@example.com'],
                  ['Location', 'San Francisco, CA'],
                  ['Available', 'Freelance / Part-time'],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--accent)', fontFamily: 'DM Sans, sans-serif' }}>{label}</p>
                    <p className="text-sm font-medium" style={{ color: 'var(--text)', fontFamily: 'DM Sans, sans-serif' }}>{value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
