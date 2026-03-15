"use client"

import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { Terminal } from "./terminal"
import { ChevronDown } from "lucide-react"
import MagneticButton from "./magnetic-button"

// Dynamically import the 3D scene — never SSR, keeps Three.js out of the server bundle
const HeroScene = dynamic(
  () => import("./3d/hero-scene").then((m) => m.HeroScene),
  { ssr: false, loading: () => null }
)

export function Hero() {
  // Normalized mouse position (-1 → 1) relative to viewport center
  const mouseX = useRef(0)
  const mouseY = useRef(0)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  // Canvas fade on scroll (0 = fully visible, 1 = gone)
  const [scrollOpacity, setScrollOpacity] = useState(1)

  // Only render canvas on fine-pointer (non-touch) devices
  const [isFinePonter, setIsFinePointer] = useState(false)

  useEffect(() => {
    // Check pointer type once on the client
    setIsFinePointer(window.matchMedia("(pointer: fine)").matches)

    const onMouseMove = (e: MouseEvent) => {
      mouseX.current = (e.clientX / window.innerWidth) * 2 - 1
      mouseY.current = -((e.clientY / window.innerHeight) * 2 - 1)
      setMouse({ x: mouseX.current, y: mouseY.current })
    }

    const onScroll = () => {
      // Fade canvas out over the first 60% of the hero height
      const progress = Math.min(window.scrollY / (window.innerHeight * 0.6), 1)
      setScrollOpacity(1 - progress)
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true })
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Static gradient backdrop — always visible, especially on mobile */}
      <div className="absolute inset-0 gradient-bg" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(oklch(0.95 0 0) 1px, transparent 1px),
                            linear-gradient(90deg, oklch(0.95 0 0) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* 3D Canvas — desktop / fine-pointer only, fades on scroll */}
      {isFinePonter && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: scrollOpacity, transition: "opacity 0.1s linear" }}
        >
          <HeroScene mouseX={mouse.x} mouseY={mouse.y} />
        </div>
      )}

      {/* Fallback ambient orbs for mobile (shown when canvas isn't rendered) */}
      {!isFinePonter && (
        <>
          <div
            className="absolute top-1/4 -left-32 w-96 h-96 rounded-full animate-float opacity-30"
            style={{
              background: "radial-gradient(circle, oklch(0.65 0.27 270 / 0.4), transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full animate-float opacity-20"
            style={{
              background: "radial-gradient(circle, oklch(0.72 0.18 195 / 0.4), transparent 70%)",
              filter: "blur(60px)",
              animationDelay: "3s",
            }}
          />
        </>
      )}

      {/* ─── Page Content ─── */}
      <div className="relative z-10 flex-1 flex flex-col justify-between px-6 md:px-12 lg:px-24 pt-24 md:pt-32 pb-12">
        {/* Top bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-between items-start"
        >
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground">
            PORTFOLIO.2026
          </div>
        </motion.div>

        {/* Main hero content */}
        <div className="flex-1 flex items-center py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            <div>
              <motion.h1
                className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.9] tracking-tighter"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  FULL-STACK
                </motion.span>
                <motion.span
                  className="block gradient-text"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  AI &amp; WEB3
                </motion.span>
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  ENGINEER
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mt-10 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed font-mono"
              >
                Building intelligent systems and immersive web experiences. Chill
                full-stack dev brewing chaotic AI apps and decentralized tech.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="mt-8 flex flex-wrap items-center gap-6"
              >
                <MagneticButton>
                  <a
                    href="#projects"
                    className="group relative inline-flex items-center gap-3 font-mono text-sm px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 interactive"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                    }}
                  >
                    <span className="relative z-10 text-white font-medium">VIEW PROJECTS</span>
                    <span className="relative z-10 text-white group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                    <div
                      className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, oklch(1 0 0 / 0.2), transparent)",
                        backgroundSize: "200% 100%",
                      }}
                    />
                  </a>
                </MagneticButton>

                {/* Status indicator */}
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-glow-pulse" />
                  <span className="font-mono text-xs text-muted-foreground tracking-wider">
                    DEBUGGING WITH CONSOLE.LOG
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Terminal — desktop only */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="hidden lg:block"
            >
              <Terminal />
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex justify-between items-end"
        >
          <div className="font-mono text-xs text-muted-foreground">
            ARYASH GUPTA
            <br />
            NEW DELHI, INDIA
          </div>
          <a
            href="#about"
            className="flex flex-col items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors interactive"
          >
            SCROLL
            <ChevronDown className="w-4 h-4 animate-bounce-subtle" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
