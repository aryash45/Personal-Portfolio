"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const categories = ["ALL", "AI", "DEFI", "WEB", "INFRA"]

const projects = [
  {
    number: "01",
    title: "LIQUIDEX",
    description:
      "A full-stack DeFi risk monitor featuring an AI advisory agent. Circumvents third-party APIs by reading live Aave V3 contract state directly.",
    tags: ["NEXT.JS", "EXPRESS", "AAVE V3", "AI"],
    category: "DEFI",
    github: "https://github.com/aryash45/Liquidex",
    live: "#",
  },
  {
    number: "02",
    title: "DocuCheck",
    description:
      "Docucheck is a Python-based tool that extracts factual claims from PDF documents and performs automated fact-checking using a generative AI model (Gemini or compatible).",
    tags: ["AI", "NEXT.JS", "PYTHON"],
    category: "AI",
    github: "https://github.com/aryash45/docucheck",
    live: "#",
  },
  {
    number: "03",
    title: "Defi-Loan-Protocol",
    description:
      "A full-stack decentralized fixed-interest loan platform built on the Aptos blockchain. This monorepo contains the Move smart contract for on-chain logic and a modern React frontend for user interaction",
    tags: ["Move", "Aptos", "React"],
    category: "DEFI",
    github: "https://github.com/aryash45/Defi-Loan-Protocol",
    live: "#",
  },
  {
    number: "04",
    title: "BrandMeld",
    description:
      "The AI Suite built on Cloud Run that solves content homogenization by enabling users and Buisnesses to robustly analyze, generate, and audit their perfectly on-brand voice",
    tags: ["TypeScript", "Google Cloud", "AI"],
    category: "WEB",
    github: "https://github.com/aryash45/BrandMeld-CloudRunHackathon",
    live: "#",
  },
  {
    number: "05",
    title: "VERITAS NODES",
    description:
      "VeritasNodes is a high-resolution, Decentralized Physical Infrastructure Network (DePIN) protocol built on the Solana blockchain. It is designed to bridge the Trust Gap in urban monitoring by transforming regular citizen-owned devices into a fleet of verifiable, immutable infrastructure auditors.",
    tags: ["Solana", "Rust", "DePIN"],
    category: "DEPIN",
    github: "https://github.com/aryash45/veritas-nodes",
    live: "#",
  },
]

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("ALL")

  const filtered =
    activeFilter === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 md:px-12 lg:px-24 py-24 md:py-32"
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
          003 — PROJECTS
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">
          SELECTED
          <br />
          <span className="gradient-text">WORK</span>
        </h2>
      </ScrollReveal>

      {/* Filter tabs */}
      <ScrollReveal delay={0.2}>
        <div className="flex gap-2 mb-16 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-mono text-xs tracking-wider px-5 py-2.5 rounded-full border transition-all duration-300 ${
                activeFilter === cat
                  ? "border-[var(--accent-primary)] bg-[var(--accent-primary)]/10 text-foreground"
                  : "border-white/10 text-muted-foreground hover:border-white/20 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Project cards */}
      <div className="space-y-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.number}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              className="group relative glass rounded-xl p-8 md:p-10 glow-hover transition-all duration-500"
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none gradient-border" />

              <div className="relative grid lg:grid-cols-12 gap-6 md:gap-8 items-start">
                <div className="lg:col-span-1 font-mono text-xs text-muted-foreground">
                  {project.number}
                </div>

                <div className="lg:col-span-4">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-4 mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      CODE
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      LIVE
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 text-muted-foreground leading-relaxed">
                  {project.description}
                </div>

                <div className="lg:col-span-2 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-3 py-1 rounded-full border border-white/10 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
