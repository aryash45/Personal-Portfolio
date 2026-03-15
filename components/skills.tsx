"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "./scroll-reveal"

const skillGroups = [
  {
    domain: "FRONTEND",
    color: "oklch(0.65 0.27 270)",
    colorClass: "border-violet-500/30 bg-violet-500/5",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
  },
  {
    domain: "AI / ML",
    color: "oklch(0.72 0.18 165)",
    colorClass: "border-emerald-500/30 bg-emerald-500/5",
    skills: ["Python", "Gemini API", "LangChain", "FastAPI", "Prompt Engineering", "RAG"],
  },
  {
    domain: "BLOCKCHAIN",
    color: "oklch(0.65 0.22 220)",
    colorClass: "border-blue-500/30 bg-blue-500/5",
    skills: ["Solana", "Move (Aptos)", "Rust", "Solidity", "Aave V3", "DePIN"],
  },
  {
    domain: "INFRASTRUCTURE",
    color: "oklch(0.72 0.22 55)",
    colorClass: "border-amber-500/30 bg-amber-500/5",
    skills: ["Node.js", "Express", "Docker", "Google Cloud Run", "PostgreSQL", "Redis"],
  },
]

// Marquee strip — all skills in a continuous horizontal scroll
const allSkills = skillGroups.flatMap((g) => g.skills.map((s) => ({ skill: s, domain: g.domain, color: g.color })))

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--accent-secondary), var(--accent-primary), transparent)",
        }}
      />

      <div className="px-6 md:px-12 lg:px-24">
        <ScrollReveal>
          <div className="font-mono text-xs text-muted-foreground mb-6 tracking-[0.3em]">
            004 — EXPERTISE STACK
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
            TECH
            <br />
            <span className="gradient-text">ARSENAL</span>
          </h2>
        </ScrollReveal>

        {/* Skill groups grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-20">
          {skillGroups.map((group, i) => (
            <ScrollReveal key={group.domain} delay={i * 0.08}>
              <div className="glass rounded-xl p-6 h-full">
                {/* Domain label with color dot */}
                <div className="flex items-center gap-2 mb-5">
                  <div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: group.color, boxShadow: `0 0 6px ${group.color}` }}
                  />
                  <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
                    {group.domain}
                  </span>
                </div>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.06 + j * 0.04 }}
                      className={`font-mono text-xs px-3 py-1.5 rounded-full border ${group.colorClass} text-foreground/80`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Continuous scroll marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10"
          style={{ background: "linear-gradient(to right, #050505, transparent)" }}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10"
          style={{ background: "linear-gradient(to left, #050505, transparent)" }}
        />

        <div className="flex overflow-hidden select-none py-3">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            className="flex gap-4 shrink-0 whitespace-nowrap"
          >
            {/* Double the list for seamless loop */}
            {[...allSkills, ...allSkills].map((item, i) => (
              <span
                key={i}
                className="font-mono text-xs px-4 py-2 rounded-full border border-white/10 text-muted-foreground shrink-0"
                style={{ "--dot-color": item.color } as React.CSSProperties}
              >
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full mr-2 align-middle opacity-60"
                  style={{ background: item.color }}
                />
                {item.skill}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
