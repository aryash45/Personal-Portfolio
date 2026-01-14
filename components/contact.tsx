"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

export function Contact() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const links = [
    { label: "GITHUB", href: "https://github.com" },
    { label: "TWITTER", href: "https://twitter.com" },
    { label: "LINKEDIN", href: "https://linkedin.com" },
  ]

  return (
    <section id="contact" className="min-h-screen px-6 md:px-12 lg:px-24 py-24 border-t border-border">
      <div className="grid lg:grid-cols-2 gap-24">
        <div>
          <div className="font-mono text-sm text-muted-foreground mb-8">003 — CONTACT</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">
            LET'S BUILD
            <br />
            <span className="text-muted-foreground">TOGETHER</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            Open to consulting on AI/ML infrastructure, DeFi protocol design, and full-stack development. Also
            interested in technical advisory roles for early-stage startups.
          </p>

          <div className="space-y-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-border py-4 hover:border-foreground transition-colors"
              >
                <span className="font-mono text-sm">{link.label}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="font-mono text-sm text-muted-foreground block mb-3">EMAIL</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-border py-4 text-lg focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="font-mono text-sm text-muted-foreground block mb-3">MESSAGE</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full bg-transparent border-b border-border py-4 text-lg focus:outline-none focus:border-foreground transition-colors resize-none placeholder:text-muted-foreground/50"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="group font-mono text-sm border border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-colors flex items-center gap-3"
            >
              SEND MESSAGE
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>

      <footer className="mt-48 pt-12 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="font-mono text-sm text-muted-foreground">© 2025 ALEX CHEN. ALL RIGHTS RESERVED.</div>
        <div className="font-mono text-sm text-muted-foreground">BUILT WITH NEXT.JS + TYPESCRIPT</div>
      </footer>
    </section>
  )
}
