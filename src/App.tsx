import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import CurrentFocus from './components/sections/CurrentFocus'
import Experience from './components/sections/Experience'
import GitHubCta from './components/sections/GitHubCta'
import Hero from './components/sections/Hero'
import Opportunities from './components/sections/Opportunities'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import WhatIBuild from './components/sections/WhatIBuild'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <WhatIBuild />
        <Experience />
        <Projects />
        <GitHubCta />
        <Skills />
        <CurrentFocus />
        <Opportunities />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}