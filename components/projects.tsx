"use client"

import { useState } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Github, ExternalLink, Star } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const categories = ["ALL", "AI", "DEFI", "WEB", "INFRA"]

export interface ProjectData {
  number: string
  title: string
  repo: string
  description: string
  fallbackDescription: string
  tags: string[]
  category: string
  github: string
  live: string
  gradient: string
  accentColor: string
  featured: boolean
  stars: number
  language: string | null
}

// ─── Language dot colours (extends as needed) ───────────────────────────────
const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3572a5",
  Rust: "#dea584",
  Go: "#00add8",
  Solidity: "#aa6746",
  MDX: "#fcb32c",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Move: "#4a90d9",
}

// ─── Tilt hook ────────────────────────────────────────────────────────────────
function useTilt() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 30 })
  const springY = useSpring(y, { stiffness: 300, damping: 30 })
  const rotateX = useTransform(springY, [-0.5, 0.5], ["8deg", "-8deg"])
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-8deg", "8deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const handleMouseLeave = () => { x.set(0); y.set(0) }

  return { rotateX, rotateY, handleMouseMove, handleMouseLeave }
}

// ─── Shared meta badges ───────────────────────────────────────────────────────
function MetaBadges({ stars, language, size = "sm" }: { stars: number; language: string | null; size?: "sm" | "md" }) {
  const textClass = size === "md" ? "text-xs" : "text-[10px]"
  const dotSize   = size === "md" ? "w-2 h-2" : "w-1.5 h-1.5"

  return (
    <div className={`flex items-center gap-3 font-mono ${textClass} text-muted-foreground`}>
      {stars > 0 && (
        <span className="flex items-center gap-1">
          <Star className={`${dotSize} fill-current`} style={{ color: "oklch(0.85 0.18 80)" }} />
          {stars}
        </span>
      )}
      {language && (
        <span className="flex items-center gap-1.5">
          <span
            className={`${dotSize} rounded-full shrink-0`}
            style={{ backgroundColor: LANGUAGE_COLORS[language] ?? "#8b8b8b" }}
          />
          {language}
        </span>
      )}
    </div>
  )
}

// ─── Featured card ────────────────────────────────────────────────────────────
function FeaturedCard({ project }: { project: ProjectData }) {
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt()

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative glass rounded-2xl overflow-hidden glow-hover transition-shadow duration-500 cursor-pointer"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`} />

      <div
        className="absolute -top-4 -right-4 font-bold select-none pointer-events-none"
        style={{
          fontSize: "clamp(6rem, 15vw, 14rem)",
          color: project.accentColor,
          opacity: 0.04,
          lineHeight: 1,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {project.number}
      </div>

      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none gradient-border" />

      <div className="relative p-8 md:p-12 lg:p-14 grid lg:grid-cols-2 gap-10 items-end min-h-[360px]">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="font-mono text-xs text-muted-foreground mb-4 tracking-[0.3em]">
              FEATURED PROJECT
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none mb-6">
              {project.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg max-w-md">
              {project.description}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="flex items-center gap-2 font-mono text-xs hover:text-foreground text-muted-foreground transition-colors"
            >
              <Github className="w-4 h-4" /> CODE
            </a>
            {project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="flex items-center gap-2 font-mono text-xs hover:text-foreground text-muted-foreground transition-colors"
              >
                <ExternalLink className="w-4 h-4" /> LIVE
              </a>
            )}
            <MetaBadges stars={project.stars} language={project.language} size="md" />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 lg:justify-end items-end">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-4 py-2 rounded-full border border-white/15 text-muted-foreground backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// ─── Small project card ───────────────────────────────────────────────────────
function ProjectCard({ project }: { project: ProjectData }) {
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt()

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
      className="group relative glass rounded-xl overflow-hidden glow-hover transition-shadow duration-500 cursor-pointer"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`} />

      <div
        className="absolute -bottom-2 -right-2 font-bold select-none pointer-events-none"
        style={{
          fontSize: "clamp(4rem, 8vw, 7rem)",
          color: project.accentColor,
          opacity: 0.05,
          lineHeight: 1,
        }}
      >
        {project.number}
      </div>

      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none gradient-border" />

      <div className="relative p-7 flex flex-col h-full min-h-[260px]">
        <div className="font-mono text-xs text-muted-foreground mb-4 tracking-[0.2em]">
          {project.number}
        </div>
        <h3 className="text-2xl font-bold tracking-tight mb-3 group-hover:gradient-text transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed flex-1">{project.description}</p>

        <div className="mt-6 flex items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] px-2.5 py-1 rounded-full border border-white/10 text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 2 && (
                <span className="font-mono text-[10px] px-2.5 py-1 rounded-full border border-white/10 text-muted-foreground">
                  +{project.tags.length - 2}
                </span>
              )}
            </div>
            <MetaBadges stars={project.stars} language={project.language} />
          </div>

          <div className="flex gap-4 shrink-0">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            {project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Main export (now accepts data as props from the server component) ────────
export function Projects({ projects }: { projects: ProjectData[] }) {
  const [activeFilter, setActiveFilter] = useState("ALL")

  const filtered =
    activeFilter === "ALL"
      ? projects
      : projects.filter(
          (p) =>
            p.category === activeFilter ||
            p.tags.some((t) => t.toUpperCase() === activeFilter)
        )

  const featured = filtered.find((p) => p.featured)
  const rest = filtered.filter((p) => !p.featured)

  return (
    <section id="projects" className="relative min-h-screen px-6 md:px-12 lg:px-24 py-24 md:py-32">
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
        <div className="flex gap-2 mb-14 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`relative font-mono text-xs tracking-wider px-5 py-2.5 rounded-full border transition-all duration-300 ${
                activeFilter === cat
                  ? "border-[var(--accent-primary)] bg-[var(--accent-primary)]/10 text-foreground"
                  : "border-white/10 text-muted-foreground hover:border-white/20 hover:text-foreground"
              }`}
            >
              {cat}
              {activeFilter === cat && (
                <motion.div
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full border border-[var(--accent-primary)] bg-[var(--accent-primary)]/10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Bento grid */}
      <AnimatePresence mode="popLayout">
        <div className="space-y-4">
          {featured && (
            <motion.div
              key={featured.number}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <FeaturedCard project={featured} />
            </motion.div>
          )}
          {rest.length > 0 && (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
              <AnimatePresence mode="popLayout">
                {rest.map((project) => (
                  <ProjectCard key={project.number} project={project} />
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </AnimatePresence>
    </section>
  )
}
