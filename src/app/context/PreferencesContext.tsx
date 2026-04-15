import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react'

export type LanguageCode = 'es' | 'en' | 'zh' | 'ru'
export type ThemeMode = 'dark' | 'light'

interface TextBundle {
  nav: {
    home: string
    services: string
    resume: string
    work: string
    testimonials: string
    contact: string
  }
  buttons: {
    hireMe: string
    downloadCv: string
    openCvNewTab: string
    darkMode: string
    lightMode: string
    showMore: string
    showLess: string
  }
  languageNames: Record<LanguageCode, string>
  home: {
    role: string
    name: string
    introShort: string
    introLong: string
    testimonialsTitle: string
    testimonialsSubtitle: string
  }
  testimonials: {
    title: string
    subtitle: string
    cards: Array<{ name: string; role: string; quote: string }>
  }
}

interface PreferencesContextType {
  language: LanguageCode
  setLanguage: (language: LanguageCode) => void
  theme: ThemeMode
  toggleTheme: () => void
  text: TextBundle
}

const PreferencesContext = createContext<PreferencesContextType | undefined>(undefined)

const translations: Record<LanguageCode, TextBundle> = {
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      resume: 'Currículum',
      work: 'Proyectos',
      testimonials: 'Testimonios',
      contact: 'Contacto',
    },
    buttons: {
      hireMe: 'Contrátame',
      downloadCv: 'Descargar CV',
      openCvNewTab: 'Abrir en nueva pestaña',
      darkMode: 'Oscuro',
      lightMode: 'Claro',
      showMore: 'Mostrar más',
      showLess: 'Mostrar menos',
    },
    languageNames: {
      es: 'Español',
      en: 'English',
      zh: '中文',
      ru: 'Русский',
    },
    home: {
      role: 'Estudiante de Ingeniería de Software',
      name: 'Sebastian\nCoral',
      introShort: 'Soy estudiante de ingeniería de software, me apasiona crear experiencias web limpias, dinámicas y visualmente atractivas.',
      introLong: 'Soy estudiante de ingeniería de software, estudio en la Universidad Cooperativa de Colombia, tengo 25 años y me gusta la programación y los videojuegos como League of Legends, Fortnite y Rocket League. En mis tiempos libres me gusta salir con amigos, viajar, ir a conciertos y escuchar música, especialmente trap argentino.',
      testimonialsTitle: 'Testimonios',
      testimonialsSubtitle: 'Clientes y colegas que recomiendan mi trabajo',
    },
    testimonials: {
      title: 'Testimonios',
      subtitle: 'Clientes y colegas que recomiendan mi trabajo',
      cards: [
        {
          name: 'María Gómez',
          role: 'Directora de producto',
          quote: 'Trabajar con Sebastián fue una experiencia excelente. Entregó un sitio rápido, moderno y con gran atención al detalle.',
        },
        {
          name: 'Lucas Pérez',
          role: 'Desarrollador senior',
          quote: 'Su capacidad para optimizar interfaces y entregar soluciones limpias superó nuestras expectativas.',
        },
        {
          name: 'Ana Torres',
          role: 'CEO startup',
          quote: 'Fue capaz de transformar una idea compleja en una experiencia elegante y fácil de usar.',
        },
        {
          name: 'Diego Ramírez',
          role: 'Gerente de marketing',
          quote: 'Muy profesional y con excelente comunicación. El resultado final fue un sitio que destaca.',
        },
      ],
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      resume: 'Resume',
      work: 'Work',
      testimonials: 'Testimonials',
      contact: 'Contact',
    },
    buttons: {
      hireMe: 'Hire me',
      downloadCv: 'Download CV',
      openCvNewTab: 'Open in new tab',
      darkMode: 'Dark',
      lightMode: 'Light',
      showMore: 'Show more',
      showLess: 'Show less',
    },
    languageNames: {
      es: 'Español',
      en: 'English',
      zh: '中文',
      ru: 'Русский',
    },
    home: {
      role: 'Software Engineering Student',
      name: 'Sebastian\nCoral',
      introShort: 'I am a software engineering student passionate about building clean, dynamic, and visually engaging web experiences.',
      introLong: 'I am a software engineering student at Universidad Cooperativa de Colombia, 25 years old, who enjoys programming and games like League of Legends, Fortnite, and Rocket League. In my free time I like hanging out with friends, traveling, attending concerts, and listening to music.',
      testimonialsTitle: 'Testimonials',
      testimonialsSubtitle: 'Clients and colleagues who recommend my work',
    },
    testimonials: {
      title: 'Testimonials',
      subtitle: 'Clients and colleagues who recommend my work',
      cards: [
        {
          name: 'Maria Gomez',
          role: 'Product Director',
          quote: 'Working with Sebastian was excellent. He delivered a fast, modern site with great attention to detail.',
        },
        {
          name: 'Lucas Perez',
          role: 'Senior Developer',
          quote: 'His ability to optimize interfaces and deliver clean solutions exceeded our expectations.',
        },
        {
          name: 'Anna Torres',
          role: 'Startup CEO',
          quote: 'He turned a complex idea into an elegant, easy-to-use experience.',
        },
        {
          name: 'Diego Ramirez',
          role: 'Marketing Manager',
          quote: 'Very professional and communicative. The final result is a standout site.',
        },
      ],
    },
  },
  zh: {
    nav: {
      home: '首页',
      services: '服务',
      resume: '简历',
      work: '项目',
      testimonials: '评价',
      contact: '联系',
    },
    buttons: {
      hireMe: '雇用我',
      downloadCv: '下载简历',
      openCvNewTab: '新标签页打开',
      darkMode: '暗色',
      lightMode: '亮色',
      showMore: '显示更多',
      showLess: '显示更少',
    },
    languageNames: {
      es: 'Español',
      en: 'English',
      zh: '中文',
      ru: 'Русский',
    },
    home: {
      role: '软件工程学生',
      name: 'Sebastian\nCoral',
      introShort: '我是一名软件工程学生，热衷于构建干净、动态且视觉吸引力强的网络体验。',
      introLong: '我在哥伦比亚合作大学学习软件工程，25岁，喜欢编程和游戏，如英雄联盟、堡垒之夜和火箭联盟。空闲时间我喜欢和朋友一起外出、旅行、参加音乐会和听音乐。',
      testimonialsTitle: '评价',
      testimonialsSubtitle: '推荐我工作的客户与同事',
    },
    testimonials: {
      title: '评价',
      subtitle: '推荐我工作的客户与同事',
      cards: [
        {
          name: '玛丽亚·戈麦斯',
          role: '产品总监',
          quote: '与塞巴斯蒂安合作非常愉快。他交付了一个快速、现代且细节出色的网站。',
        },
        {
          name: '卢卡斯·佩雷斯',
          role: '高级开发者',
          quote: '他优化界面的能力和交付干净解决方案的能力超出了我们的期望。',
        },
        {
          name: '安娜·托雷斯',
          role: '创业公司CEO',
          quote: '他将一个复杂的想法转化为优雅且易于使用的体验。',
        },
        {
          name: '迭戈·拉米雷斯',
          role: '市场经理',
          quote: '非常专业且沟通顺畅。最终结果非常出色。',
        },
      ],
    },
  },
  ru: {
    nav: {
      home: 'Главная',
      services: 'Услуги',
      resume: 'Резюме',
      work: 'Проекты',
      testimonials: 'Отзывы',
      contact: 'Контакт',
    },
    buttons: {
      hireMe: 'Нанять меня',
      downloadCv: 'Скачать резюме',
      openCvNewTab: 'Открыть в новой вкладке',
      darkMode: 'Тёмный',
      lightMode: 'Светлый',
      showMore: 'Показать больше',
      showLess: 'Показать меньше',
    },
    languageNames: {
      es: 'Español',
      en: 'English',
      zh: '中文',
      ru: 'Русский',
    },
    home: {
      role: 'Студент программной инженерии',
      name: 'Sebastian\nCoral',
      introShort: 'Я студент программной инженерии, увлечён созданием чистых, динамичных и визуально привлекательных веб-приложений.',
      introLong: 'Я учусь в Universidad Cooperativa de Colombia, мне 25 лет, мне нравится программирование и игры, такие как League of Legends, Fortnite и Rocket League. В свободное время я люблю гулять с друзьями, путешествовать, ходить на концерты и слушать музыку.',
      testimonialsTitle: 'Отзывы',
      testimonialsSubtitle: 'Клиенты и коллеги, которые рекомендуют мою работу',
    },
    testimonials: {
      title: 'Отзывы',
      subtitle: 'Клиенты и коллеги, которые рекомендуют мою работу',
      cards: [
        {
          name: 'Мария Гомес',
          role: 'Директор продукта',
          quote: 'Работать с Себастьяном было приятно. Он создал быстрый, современный сайт с отличным вниманием к деталям.',
        },
        {
          name: 'Лукас Перес',
          role: 'Старший разработчик',
          quote: 'Его способность оптимизировать интерфейсы и предлагать чистые решения превзошла наши ожидания.',
        },
        {
          name: 'Анна Торрес',
          role: 'Генеральный директор стартапа',
          quote: 'Он превратил сложную идею в элегантный и удобный опыт.',
        },
        {
          name: 'Диего Рамирес',
          role: 'Маркетинг-менеджер',
          quote: 'Очень профессионально и с отличной коммуникацией. Финальный результат выделяется.',
        },
      ],
    },
  },
}

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>('es')
  const [theme, setTheme] = useState<ThemeMode>('dark')

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem('site-language') as LanguageCode | null
    const savedTheme = window.localStorage.getItem('site-theme') as ThemeMode | null

    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    }
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('theme-light', theme === 'light')
    document.body.classList.toggle('theme-dark', theme === 'dark')
    window.localStorage.setItem('site-theme', theme)
  }, [theme])

  useEffect(() => {
    window.localStorage.setItem('site-language', language)
  }, [language])

  const text = useMemo(() => translations[language], [language])

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

  return (
    <PreferencesContext.Provider value={{ language, setLanguage, theme, toggleTheme, text }}>
      {children}
    </PreferencesContext.Provider>
  )
}

export function usePreferences() {
  const context = useContext(PreferencesContext)
  if (!context) {
    throw new Error('usePreferences debe estar dentro de PreferencesProvider')
  }
  return context
}
