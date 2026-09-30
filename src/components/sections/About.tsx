import { GraduationCap } from 'lucide-react'

import { education, profile } from '../../data/profile'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 bg-background-secondary py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading eyebrow="01" title="A little about me" />

        <div className="mt-12 grid gap-10 md:grid-cols-[220px_1fr] md:items-start md:gap-14">
          <Reveal delay={100}>
            <div className="flex justify-center md:justify-start">
              <div
                className="flex h-52 w-52 items-center justify-center rounded-2xl border border-border bg-surface md:h-55 md:w-55"
                aria-label={profile.photo.alt}
                role="img"
              >
                <span className="font-mono text-4xl text-muted">
                  {profile.name.split(' ')[0]}
                </span>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-5">
            {profile.about.map((paragraph, index) => (
              <Reveal key={paragraph} delay={150 + index * 80}>
                <p className="text-base leading-relaxed text-ink-soft">{paragraph}</p>
              </Reveal>
            ))}

            <Reveal delay={400}>
              <div className="mt-2 flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
                <div className="mt-0.5 shrink-0 rounded-lg bg-background-secondary p-2">
                  <GraduationCap className="h-4 w-4 text-ink" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">{education.degree}</p>
                  <p className="text-sm text-muted">{education.institution}</p>
                  <p className="mt-0.5 font-mono text-xs text-muted">
                    {education.period} · {education.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}