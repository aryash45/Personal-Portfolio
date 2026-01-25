"use client"

import React from "react"

import { BarChart3, Code2, GitBranch, Zap } from "lucide-react"

interface StatItem {
  icon: React.ReactNode
  label: string
  value: string
  description: string
  color: string
}

export function StatsDashboard() {
  const stats: StatItem[] = [
    {
      icon: <Code2 className="w-8 h-8" />,
      label: "Projects Shipped",
      value: "40+",
      description: "Production systems deployed globally",
      color: "#D02020",
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      label: "GitHub Stars",
      value: "15K+",
      description: "Open-source contributions",
      color: "#1040C0",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      label: "TVL Secured",
      value: "$2B+",
      description: "In decentralized protocols",
      color: "#F0C020",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      label: "Years Experience",
      value: "7+",
      description: "Full-stack development expertise",
      color: "#121212",
    },
  ]

  return (
    <section className="bg-[#F0F0F0] px-4 md:px-8 lg:px-16 py-24 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-0 w-40 h-40 border-4 border-[#D02020] opacity-10 transform -rotate-12" />
      <div className="absolute bottom-20 right-0 w-32 h-32 rounded-full border-4 border-[#1040C0] opacity-15" />

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-16 text-center">
          IMPACT BY THE NUMBERS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="group relative"
              style={{
                animation: `slideInUp 0.5s ease-out ${idx * 0.1}s both`,
              }}
            >
              <div
                className="border-4 border-[#121212] bg-white p-8 shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] hover:-translate-y-2 transition-all duration-200 relative overflow-hidden"
              >
                {/* Top colored bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-2"
                  style={{ backgroundColor: stat.color }}
                />

                {/* Icon */}
                <div
                  className="mb-6 p-3 w-fit"
                  style={{
                    backgroundColor: stat.color,
                    color: "white",
                  }}
                >
                  {stat.icon}
                </div>

                {/* Value */}
                <div className="text-4xl md:text-5xl font-black tracking-tight mb-2">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-xs font-black uppercase tracking-widest text-[#121212] mb-3 border-b-2 border-[#121212] pb-3">
                  {stat.label}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
