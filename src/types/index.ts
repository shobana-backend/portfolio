export interface ExperienceItem {
  role: string
  company: string
  location: string
  period: string
  highlights: string[]
}

export interface ProjectStack {
  label: string
  tech: string[]
}

export interface Project {
  title: string
  status: 'Active' | 'Completed'
  statusLabel: string
  description: string
  features: string[]
  tech: string[]
  repositoryUrl: string
}

export interface SkillCategory {
  title: string
  skills: string[]
}

export interface ContactLink {
  label: string
  value: string
  href: string
}