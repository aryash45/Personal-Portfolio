"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Send, CheckCircle, Loader2, AlertCircle } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

type FormState = "idle" | "loading" | "success" | "error"

export function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [formState, setFormState] = useState<FormState>("idle")
  const [serverError, setServerError] = useState("")
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})

  const links = [
    { label: "GITHUB", href: "https://github.com/aryash45", aria: "Aryash's GitHub profile" },
    { label: "LINKEDIN", href: "https://www.linkedin.com/in/aryash45/", aria: "Aryash's LinkedIn profile" },
    { label: "TWITTER", href: "https://twitter.com/aryash45", aria: "Aryash's Twitter profile" },
  ]

  const validate = () => {
    const newErrors: typeof errors = {}
    if (!name.trim()) newErrors.name = "Name is required"
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setFormState("loading")
    setServerError("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Failed to send")
      setFormState("success")
      setName("")
      setEmail("")
      setMessage("")
    } catch (err: unknown) {
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
      setFormState("error")
    }
  }

  const resetForm = () => {
    setFormState("idle")
    setServerError("")
  }

  return (
    <section id="contact" className="relative min-h-screen px-6 md:px-12 lg:px-24 py-24 md:py-32">
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
              007 — CONTACT
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
              Open to internship opportunities, freelance projects, and exciting collaborations in
              AI/ML and full-stack development. Let&apos;s make something amazing.
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
                  aria-label={link.aria}
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
            <div className="absolute inset-0 rounded-xl gradient-border pointer-events-none" />

            <AnimatePresence mode="wait">
              {formState === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                  >
                    <CheckCircle
                      className="w-16 h-16 mb-6"
                      style={{ color: "var(--accent-primary)" }}
                    />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">MESSAGE SENT</h3>
                  <p className="text-muted-foreground font-mono text-sm mb-8">
                    I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={resetForm}
                    className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors border border-white/10 px-4 py-2 rounded-full"
                  >
                    SEND ANOTHER
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-7 relative z-10"
                  onSubmit={handleSubmit}
                >
                  {/* Error banner */}
                  <AnimatePresence>
                    {formState === "error" && serverError && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-3 text-red-400 font-mono text-xs p-3 rounded-lg bg-red-500/10 border border-red-500/20"
                      >
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {serverError}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="font-mono text-xs text-muted-foreground block mb-3 tracking-wider"
                    >
                      NAME
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value)
                        if (errors.name) setErrors((p) => ({ ...p, name: undefined }))
                      }}
                      aria-label="Your name"
                      className={`w-full bg-transparent border-b py-3 text-lg focus:outline-none transition-colors placeholder:text-muted-foreground/30 ${
                        errors.name
                          ? "border-red-500/50 focus:border-red-500"
                          : "border-white/10 focus:border-[var(--accent-primary)]"
                      }`}
                      placeholder="John Doe"
                    />
                    <AnimatePresence>
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-red-400 text-xs font-mono mt-2"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="font-mono text-xs text-muted-foreground block mb-3 tracking-wider"
                    >
                      EMAIL
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        if (errors.email) setErrors((p) => ({ ...p, email: undefined }))
                      }}
                      aria-label="Your email address"
                      className={`w-full bg-transparent border-b py-3 text-lg focus:outline-none transition-colors placeholder:text-muted-foreground/30 ${
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
                          exit={{ opacity: 0 }}
                          className="text-red-400 text-xs font-mono mt-2"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Message field */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="font-mono text-xs text-muted-foreground block mb-3 tracking-wider"
                    >
                      MESSAGE
                    </label>
                    <textarea
                      id="contact-message"
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value)
                        if (errors.message) setErrors((p) => ({ ...p, message: undefined }))
                      }}
                      rows={5}
                      aria-label="Your message"
                      className={`w-full bg-transparent border-b py-3 text-lg focus:outline-none transition-colors resize-none placeholder:text-muted-foreground/30 ${
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
                          exit={{ opacity: 0 }}
                          className="text-red-400 text-xs font-mono mt-2"
                        >
                          {errors.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={formState === "loading"}
                    whileHover={formState !== "loading" ? { scale: 1.02 } : {}}
                    whileTap={formState !== "loading" ? { scale: 0.98 } : {}}
                    aria-label="Send contact message"
                    className="group relative font-mono text-sm px-8 py-4 rounded-full overflow-hidden flex items-center gap-3 text-white font-medium transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                    }}
                  >
                    {formState === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> SENDING...
                      </>
                    ) : (
                      <>
                        SEND MESSAGE
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
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
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--accent-primary), var(--accent-tertiary), transparent)",
            }}
          />
          <div className="font-mono text-xs text-muted-foreground tracking-wider">
            © 2026 ARYASH GUPTA. ALL RIGHTS RESERVED.
          </div>
          <div className="font-mono text-xs text-muted-foreground tracking-wider">
            BUILT WITH{" "}
            <span className="gradient-text font-medium">NEXT.JS + TYPESCRIPT</span>
          </div>
        </footer>
      </ScrollReveal>
    </section>
  )
}
