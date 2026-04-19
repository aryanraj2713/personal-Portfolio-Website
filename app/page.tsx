import HomeShell from '@/components/home-shell'
import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Meeting from '@/components/sections/meeting'
import Work from '@/components/sections/work'
import Education from '@/components/sections/education'
import Projects from '@/components/sections/projects'
import Writing from '@/components/sections/writing'
import Engineering from '@/components/sections/engineering'
import Contact from '@/components/sections/contact'
import Footer from '@/components/sections/footer'

export default function Home() {
  return (
    <HomeShell>
      <main className="max-w-[1120px] mx-auto px-6 pt-14">
        <Hero />
        <About />
        <Meeting />
        <Work />
        <Education />
        <Projects />
        <Writing />
        <Engineering />
        <Contact />
      </main>
      <div className="max-w-[1120px] mx-auto px-6">
        <Footer />
      </div>
    </HomeShell>
  )
}
