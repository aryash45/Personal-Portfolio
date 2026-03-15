import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { ProjectsServer } from "@/components/projects-server"
import { Skills } from "@/components/skills"
import { Expertise } from "@/components/expertise"
import { OpenSource } from "@/components/open-source"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <ProjectsServer />
      <Skills />
      <Expertise />
      <OpenSource />
      <Contact />
    </main>
  )
}
