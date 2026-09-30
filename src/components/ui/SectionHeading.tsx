import type { ReactNode } from 'react'

import Reveal from './Reveal'

interface SectionHeadingProps {
  eyebrow?: ReactNode
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <Reveal>
      <div className={`flex flex-col ${alignment} gap-3`}>
        {eyebrow ? (
          <span className="font-mono text-sm tracking-tight text-muted">{eyebrow}</span>
        ) : null}
        <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{title}</h2>
        {description ? (
          <p className="max-w-2xl text-base leading-relaxed text-muted">{description}</p>
        ) : null}
      </div>
    </Reveal>
  )
}