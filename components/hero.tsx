"use client"

import { useState } from "react"
import { Menu, X, Circle, Square } from "lucide-react"
import { SocialLinks } from "./social-links"

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
    <section className="min-h-screen flex flex-col justify-between px-4 md:px-8 lg:px-16 py-12 bg-[#F0F0F0] relative overflow-hidden">
      {/* Decorative geometric shapes - background */}
      <div className="absolute top-20 right-20 w-32 h-32 border-4 border-[#121212] opacity-10 transform rotate-45" />
      <div className="absolute bottom-40 left-10 w-48 h-48 rounded-full border-4 border-[#1040C0] opacity-20" />

      {/* Header Navigation */}
      <header className="flex justify-between items-start relative z-10">
        <div className="flex items-center gap-3">
          {/* Geometric Logo */}
          <div className="flex gap-2 items-center">
            <div className="w-6 h-6 rounded-full bg-[#D02020]" />
            <div className="w-6 h-6 bg-[#1040C0]" />
            <div className="w-0 h-0 border-l-3 border-r-3 border-b-6 border-l-transparent border-r-transparent border-b-[#F0C020]" />
          </div>
          <span className="font-black text-xl tracking-tight uppercase">ALEX.DEV</span>
        </div>

        <button
          className="md:hidden border-4 border-[#121212] p-2 shadow-[3px_3px_0px_0px_black] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <nav className="hidden md:flex gap-8 items-center text-sm font-bold uppercase tracking-widest">
          <button
            onClick={() => handleNavClick("about")}
            className="border-b-4 border-transparent hover:border-[#D02020] transition-colors duration-200"
          >
            ABOUT
          </button>
          <button
            onClick={() => handleNavClick("experience")}
            className="border-b-4 border-transparent hover:border-[#1040C0] transition-colors duration-200"
          >
            EXPERIENCE
          </button>
          <button
            onClick={() => handleNavClick("projects")}
            className="border-b-4 border-transparent hover:border-[#F0C020] transition-colors duration-200"
          >
            PROJECTS
          </button>
          <button
            onClick={() => handleNavClick("contact")}
            className="bg-[#121212] text-white px-6 py-2 border-4 border-[#121212] shadow-[4px_4px_0px_0px_rgba(240,192,32,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(240,192,32,0.3)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all duration-200"
          >
            CONTACT
          </button>
        </nav>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#F0F0F0] z-40 flex flex-col items-center justify-center md:hidden border-b-4 border-[#121212]">
          <button
            className="absolute top-6 right-4"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-8 h-8" />
          </button>
          <nav className="text-3xl space-y-8 text-center font-black uppercase tracking-tight">
            <button className="block" onClick={() => handleNavClick("about")}>
              ABOUT
            </button>
            <button className="block" onClick={() => handleNavClick("experience")}>
              EXPERIENCE
            </button>
            <button className="block" onClick={() => handleNavClick("projects")}>
              PROJECTS
            </button>
            <button className="block" onClick={() => handleNavClick("contact")}>
              CONTACT
            </button>
          </nav>
        </div>
      )}

      {/* Main Hero Content */}
      <div className="flex-1 flex flex-col justify-center py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-7xl">
          <div className="animate-slideInUp">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tighter uppercase text-balance">
              Full-Stack
              <br />
              <span className="text-[#D02020]">AI & DeFi</span>
              <br />
              Engineer
            </h1>
            <div className="mt-12 max-w-md border-l-4 border-[#1040C0] pl-6">
              <p className="text-base md:text-lg leading-relaxed font-medium">
                Building intelligent systems at the intersection of machine learning and decentralized finance. Shipping
                code that thinks.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="w-3 h-3 bg-[#D02020] animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase">AVAILABLE FOR CONSULTING</span>
            </div>
          </div>

          {/* Geometric Composition - Right Panel */}
          <div className="hidden lg:flex relative h-80 animate-fadeIn">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Circle */}
              <div className="absolute w-40 h-40 rounded-full border-4 border-[#1040C0] top-0 right-0" />
              {/* Rotated Square */}
              <div className="absolute w-32 h-32 border-4 border-[#D02020] transform rotate-45 bottom-10 left-0" />
              {/* Center Square */}
              <div className="absolute w-24 h-24 bg-[#F0C020] border-4 border-[#121212] shadow-[6px_6px_0px_0px_black]" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex justify-between items-center relative z-10 border-t-4 border-[#121212] pt-8 flex-wrap gap-6">
        <div className="text-xs font-bold uppercase tracking-widest">
          <div>ALEX CHEN</div>
          <div>SAN FRANCISCO, CA</div>
        </div>
        <div className="flex items-center gap-6 flex-wrap justify-end">
          <SocialLinks />
          <button
            onClick={() => handleNavClick("about")}
            className="bg-[#D02020] text-white px-6 py-3 border-4 border-[#121212] font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all duration-200"
          >
            EXPLORE WORK
          </button>
        </div>
      </div>
    </section>
  )
}
