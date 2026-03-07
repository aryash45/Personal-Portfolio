"use client"

import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Testimonials } from "@/components/testimonials"
import { Writing } from "@/components/writing"
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
      <Projects />
      <Expertise />
      <OpenSource />
      <Contact />
    </main>
  )
}
