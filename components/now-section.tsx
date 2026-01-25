"use client"

import React from "react"

import { Music, BookOpen, Target, MapPin, Zap } from "lucide-react"

interface NowItem {
  icon: React.ReactNode
  category: string
  title: string
  description: string
  color: string
}

export function NowSection() {
  const nowItems: NowItem[] = [
    {
      icon: <Zap className="w-6 h-6" />,
      category: "WORKING ON",
      title: "Autonomous AI Trading Engine",
      description: "Building a transformer-based system that trades crypto with institutional-grade risk management.",
      color: "#D02020",
    },
    {
      icon: <Target className="w-6 h-6" />,
      category: "EXPLORING",
      title: "On-Chain AI Agents",
      description: "Researching how to safely execute AI agents with cryptographic verification on smart contracts.",
      color: "#1040C0",
    },
    {
      icon: <Music className="w-6 h-6" />,
      category: "LISTENING TO",
      title: "Lofi Hip-Hop & Synthwave",
      description: "Currently grooving to midnight drives and lo-fi study beats while coding.",
      color: "#F0C020",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      category: "READING",
      title: "The Alignment Problem by Brian Christian",
      description: "Deep dive into AI safety, ethics, and how we ensure AGI systems behave as intended.",
      color: "#121212",
    },
  ]

  return (
    <section className="bg-[#121212] text-white px-4 md:px-8 lg:px-16 py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 border-4 border-[#D02020] opacity-15" />
      <div className="absolute bottom-40 right-10 w-40 h-40 rounded-full border-4 border-[#1040C0] opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 animate-slideInUp">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase mb-4">
            WHAT I'M
            <br />
            <span className="text-[#D02020]">DOING NOW</span>
          </h2>
          <p className="text-base md:text-lg text-[#E0E0E0] font-medium max-w-2xl">
            A snapshot of what's on my plate right now—projects, learning, and vibes. Updated regularly to keep things
            real.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {nowItems.map((item, idx) => (
            <div
              key={item.category}
              className="group"
              style={{
                animation: `slideInUp 0.5s ease-out ${idx * 0.1}s both`,
              }}
            >
              <div className="border-4 border-white bg-transparent p-8 shadow-[4px_4px_0px_0px_white] hover:shadow-[6px_6px_0px_0px_white] hover:-translate-y-2 transition-all duration-200 relative overflow-hidden">
                {/* Left accent bar */}
                <div
                  className="absolute top-0 left-0 bottom-0 w-2"
                  style={{ backgroundColor: item.color }}
                />

                {/* Icon with color background */}
                <div
                  className="w-12 h-12 rounded-none flex items-center justify-center mb-6 shadow-[2px_2px_0px_0px_white]"
                  style={{
                    backgroundColor: item.color,
                    color: item.color === "#F0C020" ? "#121212" : "white",
                  }}
                >
                  {item.icon}
                </div>

                {/* Category label */}
                <div className="text-xs font-black uppercase tracking-widest text-[#E0E0E0] border-b-2 border-white pb-3 mb-4">
                  {item.category}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-black tracking-tight mb-3 text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base leading-relaxed text-[#B0B0B0] font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Last updated */}
        <div className="mt-12 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#666]">
            Last updated • January 25, 2025
          </p>
        </div>
      </div>
    </section>
  )
}
