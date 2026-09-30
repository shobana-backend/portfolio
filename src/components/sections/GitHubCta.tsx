import { ArrowRight } from 'lucide-react'

import { github } from '../../data/profile'
import { GithubIcon } from '../ui/BrandIcons'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

export default function GitHubCta() {
  return (
    <section id="code" className="scroll-mt-16 bg-background-secondary py-16 sm:py-20">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="rounded-xl border border-border bg-surface p-3">
              <GithubIcon className="h-5 w-5 text-ink" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Code &amp; Projects
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-muted">
              Most of my hands-on learning happens through building. Explore my repositories,
              backend projects, and ongoing experiments with Go and backend engineering.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Button href={github.profileUrl} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="h-4 w-4" aria-hidden="true" />
                GitHub Profile
              </Button>
              <Button variant="secondary" href="#projects">
                View Projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}