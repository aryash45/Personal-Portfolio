"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Send, CheckCircle } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function Contact() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; message?: string }>({})

  const links = [
    { label: "GITHUB", href: "https://github.com/aryash45" },
    { label: "LINKEDIN", href: "https://www.linkedin.com/in/aryash45/" },
    { label: "TWITTER", href: "https://twitter.com/aryash45" },
  ]

  const validate = () => {
    const newErrors: { email?: string; message?: string } = {}
    if (!email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!message.trim()) {
      newErrors.message = "Message is required"
    } else if (message.trim().length < 10) {
      newErrors.message = "Minimum 10 characters"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail("")
      setMessage("")
    }, 4000)
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen px-6 md:px-12 lg:px-24 py-24 md:py-32"
    >
      {/* Gradient divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--accent-primary), var(--accent-tertiary), transparent)",
        }}
      />

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left: Info */}
        <div>
          <ScrollReveal>
            <div className="font-mono text-xs text-muted-foreground mb-6 tracking-[0.3em]">
              006 — CONTACT
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">
              LET&apos;S BUILD
              <br />
              <span className="gradient-text">TOGETHER</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Open to internship opportunities, freelance projects, and exciting collaborations
              in AI/ML and full-stack development. Let's make something amazing.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="space-y-2">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-4 border-b border-white/5 hover:border-white/20 transition-all duration-300"
                >
                  <span className="font-mono text-sm tracking-wider group-hover:gradient-text transition-all duration-300">
                    {link.label}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Right: Form */}
        <ScrollReveal delay={0.2}>
          <div className="glass rounded-xl p-8 md:p-10 relative glow">
            {/* Gradient border */}
            <div className="absolute inset-0 rounded-xl gradient-border pointer-events-none" />

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1,
                    }}
                  >
                    <CheckCircle
                      className="w-16 h-16 mb-6"
                      style={{ color: "var(--accent-primary)" }}
                    />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">MESSAGE SENT</h3>
                  <p className="text-muted-foreground font-mono text-sm">
                    I&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8 relative z-10"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label className="font-mono text-xs text-muted-foreground block mb-3 tracking-wider">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }))
                      }}
                      className={`w-full bg-transparent border-b py-4 text-lg focus:outline-none transition-colors placeholder:text-muted-foreground/30 ${
                        errors.email
                          ? "border-red-500/50 focus:border-red-500"
                          : "border-white/10 focus:border-[var(--accent-primary)]"
                      }`}
                      placeholder="your@email.com"
                    />
                    <AnimatePresence>
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="text-red-400 text-xs font-mono mt-2"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <label className="font-mono text-xs text-muted-foreground block mb-3 tracking-wider">
                      MESSAGE
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value)
                        if (errors.message)
                          setErrors((prev) => ({ ...prev, message: undefined }))
                      }}
                      rows={5}
                      className={`w-full bg-transparent border-b py-4 text-lg focus:outline-none transition-colors resize-none placeholder:text-muted-foreground/30 ${
                        errors.message
                          ? "border-red-500/50 focus:border-red-500"
                          : "border-white/10 focus:border-[var(--accent-primary)]"
                      }`}
                      placeholder="Tell me about your project..."
                    />
                    <AnimatePresence>
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="text-red-400 text-xs font-mono mt-2"
                        >
                          {errors.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative font-mono text-sm px-8 py-4 rounded-full overflow-hidden flex items-center gap-3 text-white font-medium transition-all duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                    }}
                  >
                    SEND MESSAGE
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    {/* Shimmer */}
                    <div
                      className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, oklch(1 0 0 / 0.2), transparent)",
                        backgroundSize: "200% 100%",
                      }}
                    />
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>

      {/* Footer */}
      <ScrollReveal delay={0.2}>
        <footer className="mt-32 md:mt-48 pt-12 relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Gradient footer divider */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--accent-primary), var(--accent-tertiary), transparent)",
            }}
          />
          <div className="font-mono text-xs text-muted-foreground tracking-wider">
            © 2025 ARYASH GUPTA. ALL RIGHTS RESERVED.
          </div>
          <div className="font-mono text-xs text-muted-foreground tracking-wider">
            BUILT WITH{" "}
            <span className="gradient-text font-medium">
              NEXT.JS + TYPESCRIPT
            </span>
          </div>
        </footer>
      </ScrollReveal>
    </section>
  )
}
