import { ArrowUpRight } from 'lucide-react'

import { projects } from '../../data/profile'
import type { Project } from '../../types'
import { GithubIcon } from '../ui/BrandIcons'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import Tag from '../ui/Tag'

function ProjectCard({ project }: { project: Project }) {
  const isActive = project.status === 'Active'

  return (
    <div className="flex h-full flex-col gap-6 rounded-2xl border border-border bg-surface p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card-hover sm:p-8">
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs text-muted">{project.title.toUpperCase()}</span>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${
              isActive
                ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                : 'border-border bg-background-secondary text-muted'
            }`}
          >
            {isActive ? (
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
            ) : null}
            {project.statusLabel}
          </span>
        </div>
        <h3 className="text-xl font-semibold tracking-tight text-ink">{project.title}</h3>
        <p className="text-sm leading-relaxed text-muted">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>

      <ul className="flex flex-col gap-2">
        {project.features.slice(0, 4).map((feature) => (
          <li key={feature} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-ink/30" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center gap-6 border-t border-border pt-5">
        <a
          href={project.repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-200 hover:text-muted"
        >
          <GithubIcon className="h-4 w-4" aria-hidden="true" />
          View on GitHub
        </a>
        <a
          href={project.repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors duration-200 hover:text-muted"
          aria-label={`View details for ${project.title}`}
        >
          Details
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="04"
          title="Things I've built"
          description="Backend projects exploring API design, service separation, database operations, and backend architecture."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}