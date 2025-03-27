import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Resume from "@/components/resume"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section id="home" className="pt-16">
        <Hero />
      </section>
      <section id="about" className="py-16">
        <About />
      </section>
      <section id="skills" className="py-16 bg-muted/50">
        <Skills />
      </section>
      <section id="projects" className="py-16">
        <Projects />
      </section>
      <section id="resume" className="py-16 bg-muted/50">
        <Resume />
      </section>
      <section id="contact" className="py-16">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}

