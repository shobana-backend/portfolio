import { ArrowRight, Download, Mail } from 'lucide-react'

import { email, github, linkedin, profile, resume } from '../../data/profile'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import Button from '../ui/Button'

const socials = [
  { label: 'GitHub', href: github.profileUrl, icon: GithubIcon },
  { label: 'LinkedIn', href: linkedin.profileUrl, icon: LinkedinIcon },
  { label: 'Email', href: `mailto:${email}`, icon: Mail },
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="technical-grid pointer-events-none absolute inset-0 sm:opacity-100 opacity-50" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-3/4 -translate-x-1/2 rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(ellipse, rgba(233,234,231,0.6), transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[-10%] top-1/3 h-72 w-72 rounded-full blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(227,229,226,0.5), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="animate-fade-up flex flex-col items-start gap-8">
          <div className="flex flex-col gap-4">
            <p className="font-mono text-sm text-muted">{profile.name} — {profile.role}</p>
            <h1 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              Backend Developer focused on Go, APIs, and scalable systems.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted">{profile.description}</p>
          </div>

          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm text-ink-soft">
            <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button href="#projects">
              View Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button variant="secondary" href={resume.url}>
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </Button>
          </div>

          <div className="flex items-center gap-4 border-t border-border pt-6">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-ink"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}