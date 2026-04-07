import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

export type TransitionEffect = 'zoom' | 'cortina' | 'glitch' | 'flip' | 'shimmer' | 'default'

interface TransitionContextType {
  effect: TransitionEffect
  setEffect: (effect: TransitionEffect) => void
  triggerTransition: (effect: TransitionEffect) => void
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined)

export function TransitionProvider({ children }: { children: ReactNode }) {
  const [effect, setEffect] = useState<TransitionEffect>('default')

  const triggerTransition = useCallback((newEffect: TransitionEffect) => {
    setEffect(newEffect)
    // Reset después de la animación (adjustado según la duración máxima de los efectos)
    setTimeout(() => setEffect('default'), 1300)
  }, [])

  return (
    <TransitionContext.Provider value={{ effect, setEffect, triggerTransition }}>
      {children}
    </TransitionContext.Provider>
  )
}

export function useTransition() {
  const context = useContext(TransitionContext)
  if (!context) {
    throw new Error('useTransition debe estar dentro de TransitionProvider')
  }
  return context
}
