"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { ScrollReveal, StaggerContainer, staggerItem } from "./scroll-reveal"

const experiences = [
  {
    period: "PRESENT",
    role: "FULL-STACK / AI/ML ENGINEER",
    company: "INDEPENDENT",
    description:
      "Developing intelligent systems like Liquidex and EduAid. Focusing on full-stack generative AI applications.",
    link: "https://github.com/aryash45",
  },
  {
    period: "PRESENT",
    role: "OPEN SOURCE CONTRIBUTOR",
    company: "OPEN SOURCE",
    description: "Contributing to high-impact repositories including Apache Doris and Significant-Gravitas/AutoGPT.",
    link: "https://github.com/aryash45",
  },
  {
    period: "PRESENT",
    role: "Member",
    company: "GDG New Delhi",
    description:
      "Engaged with the cloud computing and developer community through workshops, webinars, and hands-on projects.",
    link: "https://www.linkedin.com/in/aryash-gupta",
  },
  {
    period: "2024",
    role: "CS STUDENT",
    company: "K.R. Mangalam University",
    description:
      "Currently pursuing a Bachelor of Technology in Computer Science and Engineering, specializing in Artificial Intelligence and Machine Learning.",
    link: "https://www.krmangalam.edu.in/", 
  },
]

export function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen px-6 md:px-12 lg:px-24 py-24 md:py-32"
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
          002 — EXPERIENCE
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
          WHERE I&apos;VE
          <br />
          <span className="gradient-text">WORKED</span>
        </h2>
      </ScrollReveal>

      <StaggerContainer className="relative" staggerDelay={0.15}>
        {/* Animated vertical line */}
        <div className="absolute left-0 md:left-[calc(16.666%+0.5rem)] top-0 bottom-0 w-px hidden md:block">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
            className="w-full h-full origin-top"
            style={{
              background:
                "linear-gradient(to bottom, var(--accent-primary), var(--accent-tertiary), transparent)",
            }}
          />
        </div>

        {experiences.map((exp, index) => (
          <motion.a
            key={index}
            variants={staggerItem}
            href={exp.link}
            className="group relative block py-8 md:py-10 transition-all duration-300 hover:bg-white/[0.02] -mx-6 md:-mx-12 lg:-mx-24 px-6 md:px-12 lg:px-24"
          >
            <div className="grid md:grid-cols-12 gap-4 md:gap-8 items-start">
              <div className="md:col-span-2 font-mono text-xs text-muted-foreground tracking-wider">
                {exp.period}
              </div>
              <div className="md:col-span-4">
                <h3 className="text-xl font-bold tracking-tight flex items-center gap-2">
                  {exp.role}
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                </h3>
                <div className="font-mono text-sm mt-1" style={{ color: "var(--accent-primary)" }}>
                  {exp.company}
                </div>
              </div>
              <div className="md:col-span-6 text-muted-foreground leading-relaxed">
                {exp.description}
              </div>
            </div>

            {/* Single separator — only between items, not after the last */}
            {index < experiences.length - 1 && (
              <div className="absolute bottom-0 left-6 right-6 md:left-12 md:right-12 lg:left-24 lg:right-24 h-px bg-white/5 group-hover:bg-white/10 transition-colors overflow-hidden">
                <div
                  className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, var(--accent-primary), transparent)",
                  }}
                />
              </div>
            )}
          </motion.a>
        ))}
      </StaggerContainer>
    </section>
  )
}
