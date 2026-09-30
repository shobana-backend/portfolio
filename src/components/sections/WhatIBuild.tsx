import { whatIBuild } from '../../data/profile'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function WhatIBuild() {
  return (
    <section id="what-i-build" className="scroll-mt-16 py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading eyebrow="02" title="What I build" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whatIBuild.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card-hover">
                <span className="font-mono text-sm text-muted">{item.index}</span>
                <h3 className="text-lg font-semibold tracking-tight text-ink">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}