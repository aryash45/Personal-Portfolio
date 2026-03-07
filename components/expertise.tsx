"use client"

import { motion } from "framer-motion"
import { Cpu, Globe, Database, Code2, Network, Shield } from "lucide-react"
import { ScrollReveal, StaggerContainer, staggerItem } from "./scroll-reveal"

const expertiseAreas = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "AI & MACHINE LEARNING",
    description: "Architecting and deploying intelligent systems. Experience with LLMs, agentic frameworks (AutoGPT), and predictive modeling for autonomous applications.",
    skills: ["PyTorch", "LangChain", "OpenAI", "Transformers"],
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "FULL-STACK ARCHITECTURE",
    description: "Building scalable, high-performance web applications from the ground up. Deep expertise in modern React ecosystems, serverless APIs, and real-time state management.",
    skills: ["Next.js", "React", "Node.js", "TypeScript"],
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "DISTRIBUTED SYSTEMS",
    description: "Designing resilient backend infrastructure capable of handling large-scale data and high concurrency. Open source contributor to analytics databases.",
    skills: ["Apache Doris", "C++", "Docker", "AWS"],
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "WEB3 & DEFI",
    description: "Developing decentralized protocols and smart contracts. Experience building risk monitors and integrating directly with on-chain state (Aave V3).",
    skills: ["Solana", "Aptos", "Web3.js", "Smart Contracts"],
  },
]

export function Expertise() {
  return (
    <section
      id="expertise"
      className="relative min-h-screen px-6 md:px-12 lg:px-24 py-24 md:py-32 flex flex-col justify-center"
    >
      {/* Gradient divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--accent-secondary), var(--accent-primary), transparent)",
        }}
      />

      <ScrollReveal>
        <div className="font-mono text-xs text-muted-foreground mb-6 tracking-[0.3em]">
          004 — EXPERTISE
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
          TECHNICAL
          <br />
          <span className="gradient-text">CAPABILITIES</span>
        </h2>
      </ScrollReveal>

      <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8" staggerDelay={0.1}>
        {expertiseAreas.map((area, index) => (
          <motion.div
            key={index}
            variants={staggerItem}
            className="group relative glass rounded-xl p-8 md:p-10 glow-hover transition-all duration-500 overflow-hidden"
          >
            {/* Gradient border on hover */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none gradient-border" />
            
            {/* Background ambient glow isolated to hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
              style={{
                background: "radial-gradient(circle at center, var(--accent-primary) 0%, transparent 70%)"
              }}
            />

            <div className="relative z-10 flex flex-col h-full">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "var(--accent-primary)"
                }}
              >
                {area.icon}
              </div>

              <h3 className="text-2xl font-bold tracking-tight mb-4 group-hover:gradient-text transition-all duration-300">
                {area.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                {area.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {area.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="font-mono text-xs px-3 py-1 rounded-full border border-white/10 text-muted-foreground group-hover:border-[var(--accent-secondary)]/30 group-hover:text-foreground transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </StaggerContainer>
    </section>
  )
}
