import { Mail } from 'lucide-react'

import { email, github, linkedin, profile } from '../../data/profile'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'

export default function Footer() {
  const links = [
    { label: 'GitHub', href: github.profileUrl, icon: GithubIcon },
    { label: 'LinkedIn', href: linkedin.profileUrl, icon: LinkedinIcon },
    { label: 'Email', href: `mailto:${email}`, icon: Mail },
  ]

  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page flex flex-col items-center gap-4 py-10 text-center">
        <p className="font-mono text-lg font-medium tracking-tight text-ink">{profile.name}</p>
        <p className="text-sm text-muted">{profile.positioning}</p>
        <div className="flex items-center gap-5">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors duration-200 hover:text-ink"
              aria-label={label}
            >
              <Icon className="h-4.5 w-4.5" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="text-xs text-muted">© 2026 {profile.name}</p>
      </div>
    </footer>
  )
}