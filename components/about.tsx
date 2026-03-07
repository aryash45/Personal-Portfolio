"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { ScrollReveal, StaggerContainer, staggerItem } from "./scroll-reveal"

function AnimatedCounter({ target, label }: { target: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  const numericValue = parseInt(target.replace(/[^0-9]/g, ""))
  const suffix = target.replace(/[0-9]/g, "")

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const end = numericValue
    const duration = 2000
    const startTime = Date.now()

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      start = Math.floor(eased * end)
      setCount(start)
      if (progress >= 1) clearInterval(timer)
    }, 30)

    return () => clearInterval(timer)
  }, [isInView, numericValue])

  return (
    <div ref={ref} className="border-l border-white/10 pl-6">
      <div className="text-4xl md:text-5xl font-bold gradient-text">
        {isInView ? `${count}${suffix}` : `0${suffix}`}
      </div>
      <div className="font-mono text-xs text-muted-foreground mt-2 tracking-wider">
        {label}
      </div>
    </div>
  )
}

const stats = [
  { label: "EXPERIENCE", value: "1+" },
  { label: "PROJECTS", value: "5+" },
  { label: "CONTRIBUTIONS", value: "100+" },
  { label: "COMMITS", value: "150+" },
]

const skills = [
  "NEXT.JS",
  "REACT",
  "PYTHON",
  "AI/ML",
  "WEB3",
  "NODE.JS",
  "TYPESCRIPT",
  "RUST",
  "SOLANA",
  "THREE.JS",
  "TAILWIND",
  "C++",
]

export function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen px-6 md:px-12 lg:px-24 py-24 md:py-32"
    >
      {/* Subtle gradient divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--accent-primary), var(--accent-tertiary), transparent)",
        }}
      />

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left column */}
        <div>
          <ScrollReveal>
            <div className="font-mono text-xs text-muted-foreground mb-6 tracking-[0.3em]">
              001 — ABOUT
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">
              I BUILD SYSTEMS
              <br />
              <span className="gradient-text">THAT SCALE</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Computer Science student and full-stack developer focused on AI infrastructure
                and decentralized protocols. I build intelligent applications, immersive user interfaces,
                and scalable end-to-end systems.
              </p>
              <p>
                Currently exploring advanced ML algorithms, Web3/blockchain development (Solana/Aptos),
                and generative AI. Always eager to turn complex problems into elegant code.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Right column */}
        <div className="space-y-16">
          {/* Stats */}
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <AnimatedCounter
                  key={stat.label}
                  target={stat.value}
                  label={stat.label}
                />
              ))}
            </div>
          </ScrollReveal>

          {/* Skills */}
          <div>
            <ScrollReveal delay={0.3}>
              <div className="font-mono text-xs text-muted-foreground mb-6 tracking-[0.3em]">
                STACK
              </div>
            </ScrollReveal>
            <StaggerContainer className="flex flex-wrap gap-3" staggerDelay={0.05}>
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={staggerItem}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px oklch(0.65 0.27 270 / 0.3)",
                  }}
                  className="font-mono text-sm border border-white/10 px-4 py-2 rounded-lg cursor-default transition-colors hover:border-[var(--accent-primary)] hover:bg-white/5"
                >
                  {skill}
                </motion.span>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
