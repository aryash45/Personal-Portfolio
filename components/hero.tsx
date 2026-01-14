"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Terminal } from "./terminal"

interface HeroProps {
  onTabChange?: (tab: string) => void
}

export function Hero({ onTabChange }: HeroProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (tab: string) => {
    setMobileMenuOpen(false)
    onTabChange?.(tab)
  }

  return (
    <section className="min-h-[70vh] flex flex-col justify-between px-6 md:px-12 lg:px-24 py-12">
      <header className="flex justify-between items-start">
        <div className="font-mono text-sm tracking-widest text-muted-foreground">PORTFOLIO.2025</div>

        <button
          className="md:hidden font-mono text-sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <nav className="font-mono text-sm space-x-8 hidden md:block">
          <button onClick={() => handleNavClick("about")} className="hover:text-muted-foreground transition-colors">
            ABOUT
          </button>
          <button
            onClick={() => handleNavClick("experience")}
            className="hover:text-muted-foreground transition-colors"
          >
            EXPERIENCE
          </button>
          <button onClick={() => handleNavClick("projects")} className="hover:text-muted-foreground transition-colors">
            PROJECTS
          </button>
          <button onClick={() => handleNavClick("contact")} className="hover:text-muted-foreground transition-colors">
            CONTACT
          </button>
        </nav>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center md:hidden">
          <button className="absolute top-12 right-6" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
            <X className="w-6 h-6" />
          </button>
          <nav className="font-mono text-2xl space-y-8 text-center">
            <button
              className="block hover:text-muted-foreground transition-colors"
              onClick={() => handleNavClick("about")}
            >
              ABOUT
            </button>
            <button
              className="block hover:text-muted-foreground transition-colors"
              onClick={() => handleNavClick("experience")}
            >
              EXPERIENCE
            </button>
            <button
              className="block hover:text-muted-foreground transition-colors"
              onClick={() => handleNavClick("projects")}
            >
              PROJECTS
            </button>
            <button
              className="block hover:text-muted-foreground transition-colors"
              onClick={() => handleNavClick("contact")}
            >
              CONTACT
            </button>
          </nav>
        </div>
      )}

      <div className="flex-1 flex flex-col justify-center py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold leading-[0.9] tracking-tighter text-balance">
              FULL-STACK
              <br />
              <span className="text-muted-foreground">AI & DEFI</span>
              <br />
              ENGINEER
            </h1>
            <div className="mt-12 max-w-xl">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-mono">
                Building intelligent systems at the intersection of machine learning and decentralized finance. Shipping
                code that thinks.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 animate-pulse" />
              <span className="font-mono text-sm text-muted-foreground">AVAILABLE FOR CONSULTING</span>
            </div>
          </div>

          <div className="hidden lg:block">
            <Terminal />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-end">
        <div className="font-mono text-sm text-muted-foreground">
          ALEX CHEN
          <br />
          SAN FRANCISCO, CA
        </div>
        <button onClick={() => handleNavClick("about")} className="group flex items-center gap-2 font-mono text-sm">
          EXPLORE
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </section>
  )
}
