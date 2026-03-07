"use client"

import { motion } from "framer-motion"
import { GitPullRequest, GitMerge, Star, GitFork, ExternalLink } from "lucide-react"
import { ScrollReveal, StaggerContainer, staggerItem } from "./scroll-reveal"

const contributions = [
  {
    repo: "apache/doris",
    description: "Contributed to Apache Doris, an easy-to-use, high performance and unified analytics database. Worked on enhancing core C++ engine capabilities.",
    stats: { stars: "11K+", forks: "4K+" },
    link: "https://github.com/apache/doris",
    type: "CONTRIBUTOR",
  },
  {
    repo: "Significant-Gravitas/AutoGPT",
    description: "Contributing to the open-source vision for accessible AI. Focused on building robust tools for autonomous AI agents.",
    stats: { stars: "160K+", forks: "40K+" },
    link: "https://github.com/Significant-Gravitas/AutoGPT",
    type: "CONTRIBUTOR",
  },
  {
    repo: "AOSSIE-Org/EduAid",
    description: "Developed an intelligent educational tool that auto-generates short quizzes based on provided content context using robust AI models.",
    stats: { stars: "100+", forks: "80+" },
    link: "https://github.com/AOSSIE-Org/EduAid",
    type: "MAINTAINER / CONTRIBUTOR",
  }
]

export function OpenSource() {
  return (
    <section
      id="opensource"
      className="relative min-h-screen px-6 md:px-12 lg:px-24 py-24 md:py-32 container"
    >
      {/* Gradient divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--accent-tertiary), var(--accent-primary), transparent)",
        }}
      />

      <ScrollReveal>
        <div className="font-mono text-xs text-muted-foreground mb-6 tracking-[0.3em]">
          005 — OPEN SOURCE
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            COMMUNITY
            <br />
            <span className="gradient-text">CONTRIBUTIONS</span>
          </h2>
          
          <div className="flex gap-6 font-mono text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <GitPullRequest className="w-4 h-4 text-[var(--accent-primary)]" />
              <span>15+ PRS</span>
            </div>
            <div className="flex items-center gap-2">
              <GitMerge className="w-4 h-4 text-[var(--accent-secondary)]" />
              <span>MERGED</span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <StaggerContainer className="space-y-6" staggerDelay={0.15}>
        {contributions.map((item, index) => (
          <motion.a
            key={index}
            variants={staggerItem}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative glass rounded-xl p-8 md:p-10 transition-all duration-500 hover:bg-white/[0.03]"
          >
            {/* Left accent border */}
            <div 
              className="absolute left-0 top-6 bottom-6 w-1 rounded-r-md opacity-50 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(to bottom, var(--accent-primary), var(--accent-tertiary))"
              }}
            />

            <div className="grid lg:grid-cols-12 gap-8 items-center pl-4 md:pl-6">
              <div className="lg:col-span-4">
                <div className="font-mono text-xs mb-3 tracking-wider text-[var(--accent-primary)]">
                  {item.type}
                </div>
                <h3 className="text-2xl font-bold tracking-tight flex items-center gap-2 group-hover:gradient-text transition-colors duration-300">
                  {item.repo}
                  <ExternalLink className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-foreground" />
                </h3>
              </div>

              <div className="lg:col-span-5 text-muted-foreground leading-relaxed">
                {item.description}
              </div>

              <div className="lg:col-span-3 flex md:justify-end gap-6">
                <div className="flex items-center gap-2 font-mono text-sm group-hover:text-foreground transition-colors">
                  <Star className="w-4 h-4" />
                  {item.stats.stars}
                </div>
                <div className="flex items-center gap-2 font-mono text-sm group-hover:text-foreground transition-colors">
                  <GitFork className="w-4 h-4" />
                  {item.stats.forks}
                </div>
              </div>
            </div>
          </motion.a>
        ))}
        
        {/* Decorative terminal-style bottom block */}
        <motion.div 
          variants={staggerItem}
          className="mt-12 p-6 glass border border-white/5 rounded-xl font-mono text-sm text-muted-foreground flex items-center gap-4"
        >
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <p>Actively monitoring new issues in <span className="text-[var(--accent-primary)]">AI</span> and <span className="text-[var(--accent-secondary)]">Web3</span> ecosystems.</p>
        </motion.div>
      </StaggerContainer>
    </section>
  )
}
