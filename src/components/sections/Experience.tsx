import { experience } from '../../data/profile'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 bg-background-secondary py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="03"
          title="Experience"
          description="Internship and early-career development experience with hands-on backend engineering."
        />

        <div className="mt-12 flex flex-col gap-10">
          {experience.map((item, index) => (
            <Reveal key={`${item.company}-${item.role}`} delay={index * 100}>
              <article className="rounded-2xl border border-border bg-surface p-6 shadow-card sm:p-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold tracking-tight text-ink">{item.role}</h3>
                    <p className="text-sm font-medium text-ink-soft">{item.company}</p>
                  </div>
                  <p className="font-mono text-xs text-muted">
                    {item.location} · {item.period}
                  </p>
                </div>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                    >
                      <span
                        className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-ink/30"
                        aria-hidden="true"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}