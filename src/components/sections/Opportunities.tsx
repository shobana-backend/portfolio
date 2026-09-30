import { MapPin } from 'lucide-react'

import { career } from '../../data/profile'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Opportunities() {
  return (
    <section id="opportunities" className="scroll-mt-16 bg-background-secondary py-20 sm:py-24">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-8 sm:p-10">
            <div
              className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full blur-[100px]"
              style={{ background: 'radial-gradient(circle, rgba(233,234,231,0.7), transparent 70%)' }}
              aria-hidden="true"
            />
            <div className="relative flex flex-col gap-8">
              <SectionHeading align="center" title={career.heading} />
              <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-ink-soft">
                {career.copy}
              </p>

              <div className="flex justify-center">
                <span className="inline-flex items-center rounded-full border border-border bg-background-secondary px-5 py-2 font-mono text-sm text-ink-soft">
                  {career.highlight}
                </span>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {career.roles.map((role) => (
                  <span
                    key={role}
                    className="rounded-md border border-border bg-background px-3 py-1.5 text-xs text-muted"
                  >
                    {role}
                  </span>
                ))}
              </div>

              <p className="flex items-center justify-center gap-2 text-sm text-muted">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {career.location}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}