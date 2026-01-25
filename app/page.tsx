"use client"

import { useState } from "react"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { TabNavigation } from "@/components/tab-navigation"
import { StatsDashboard } from "@/components/stats-dashboard"
import { NowSection } from "@/components/now-section"
import { Newsletter } from "@/components/newsletter"
import { BookingCTA } from "@/components/booking-cta"

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
      <div className="min-h-[60vh] animate-fadeIn">{renderContent()}</div>

      {/* New Enhancement Sections */}
      <StatsDashboard />
      <NowSection />
      <BookingCTA />
      <Newsletter />
    </main>
  )
}
