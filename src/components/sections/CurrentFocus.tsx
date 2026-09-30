import { Check } from 'lucide-react'

import { currentFocus } from '../../data/profile'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function CurrentFocus() {
  return (
    <section id="focus" className="scroll-mt-16 py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="06"
          title="Currently working on"
          description="Areas I'm actively deepening through projects, learning, and hands-on engineering."
        />

        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {currentFocus.map((item, index) => (
            <Reveal key={item} delay={(index % 2) * 60}>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 transition-colors duration-200 hover:border-border-strong">
                <Check className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
                <span className="text-sm text-ink-soft">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}