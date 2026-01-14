"use client"

import { useState } from "react"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { TabNavigation } from "@/components/tab-navigation"

export default function Home() {
  const [activeTab, setActiveTab] = useState("about")

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <About />
      case "experience":
        return <Experience />
      case "projects":
        return <Projects />
      case "contact":
        return <Contact />
      default:
        return <About />
    }
  }

  return (
    <main>
      <Hero onTabChange={setActiveTab} />
      <div className="px-6 md:px-12 lg:px-24">
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      <div className="min-h-[60vh]">{renderContent()}</div>
    </main>
  )
}
