import { Link, LinkProps } from 'react-router-dom'
import { useTransition, TransitionEffect } from '../context/TransitionContext'
import { ReactNode } from 'react'

interface TransitionLinkProps extends LinkProps {
  children: ReactNode
  effect?: TransitionEffect
}

export default function TransitionLink({ 
  effect = 'default', 
  children, 
  onClick, 
  ...props 
}: TransitionLinkProps) {
  const { triggerTransition } = useTransition()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (effect !== 'default') {
      triggerTransition(effect)
    }
    onClick?.(e)
  }

  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  )
}
