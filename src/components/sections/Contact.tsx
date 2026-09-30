import { Download, Mail, Send } from 'lucide-react'

import { email, github, linkedin, resume } from '../../data/profile'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const contactLinks = [
  {
    label: 'Email',
    value: email,
    href: `mailto:${email}`,
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'Shobana S',
    href: linkedin.profileUrl,
    icon: LinkedinIcon,
  },
  {
    label: 'GitHub',
    value: '@shobana246',
    href: github.profileUrl,
    icon: GithubIcon,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="07"
          title="Let's connect"
          description="Open to backend opportunities and conversations about Go, APIs, and backend engineering."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {contactLinks.map(({ label, value, href, icon: Icon }, index) => (
            <Reveal key={label} delay={index * 80}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card-hover"
              >
                <div className="rounded-lg bg-background-secondary p-2.5 text-ink">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="text-sm font-medium text-ink">{label}</p>
                <p className="text-sm break-all text-muted transition-colors duration-200 group-hover:text-ink-soft">
                  {value}
                </p>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button href={`mailto:${email}`}>
              <Send className="h-4 w-4" aria-hidden="true" />
              Email Me
            </Button>
            <Button variant="secondary" href={resume.url}>
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}