import { useState } from 'react'
import { Download, Menu, X } from 'lucide-react'

import { navigation, profile, resume } from '../../data/profile'
import { useScrolled } from '../../hooks/useScrolled'
import Button from '../ui/Button'

export default function Header() {
  const scrolled = useScrolled()
  const [menuOpen, setMenuOpen] = useState(false)

  const headerClass = scrolled
    ? 'border-b border-border bg-background/82 backdrop-blur-md'
    : 'border-b border-transparent bg-transparent'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerClass}`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a
          href="#home"
          className="font-mono text-lg font-medium tracking-tight text-ink"
          onClick={() => setMenuOpen(false)}
        >
          {profile.name.charAt(0)}
          <span className="text-muted">.</span>
          <span className="text-muted">{profile.name.split(' ')[1]?.toLowerCase()}</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          <ul className="flex items-center gap-6">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-muted transition-colors duration-200 hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button variant="secondary" href={resume.url} className="!px-4 !py-2">
            <Download className="h-4 w-4" aria-hidden="true" />
            {resume.label}
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink transition-colors hover:bg-background-secondary md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2.5 text-sm text-ink transition-colors hover:bg-background-secondary"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={resume.url}
              className="mt-2 inline-flex items-center gap-2 rounded-lg bg-ink px-3 py-2.5 text-sm font-medium text-white transition-colors hover:bg-ink-soft"
              onClick={() => setMenuOpen(false)}
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              {resume.label}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}