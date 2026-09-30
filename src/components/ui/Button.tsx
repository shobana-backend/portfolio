import type { AnchorHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium tracking-tight transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/40'

const variants = {
  primary:
    'bg-ink text-white shadow-button hover:-translate-y-px hover:bg-ink-soft active:translate-y-0',
  secondary:
    'border border-border-strong bg-surface text-ink hover:border-border hover:bg-background-secondary active:translate-y-0',
}

export default function Button({
  children,
  variant = 'primary',
  className,
  ...rest
}: ButtonProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className ?? ''}`} {...rest}>
      {children}
    </a>
  )
}