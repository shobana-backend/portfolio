import { skillCategories } from '../../data/profile'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import Tag from '../ui/Tag'

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 bg-background-secondary py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="05"
          title="Technical Stack"
          description="Skills organized by area, built through projects, internship work, and hands-on development."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={(index % 3) * 80}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-6 shadow-card">
                <h3 className="text-sm font-medium tracking-tight text-ink">{category.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}