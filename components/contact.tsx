"use client"

import React from "react"

import { useState } from "react"
import { ArrowUpRight, Mail, Github, Linkedin } from "lucide-react"

export function Contact() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const links = [
    { label: "GITHUB", href: "https://github.com", icon: Github },
    { label: "TWITTER", href: "https://twitter.com", icon: Mail },
    { label: "LINKEDIN", href: "https://linkedin.com", icon: Linkedin },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setEmail("")
      setMessage("")
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="min-h-screen px-4 md:px-8 lg:px-16 py-24 bg-[#121212] text-white relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-20 w-40 h-40 border-4 border-[#D02020] opacity-20" />
      <div className="absolute bottom-32 right-10 w-48 h-48 rounded-full border-4 border-[#1040C0] opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Left Column - Contact Info */}
          <div className="animate-slideInUp">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-12 uppercase leading-[0.9]">
              LET'S
              <br />
              <span className="text-[#D02020]">BUILD</span>
              <br />
              TOGETHER
            </h2>
            <p className="text-base md:text-lg leading-relaxed font-medium mb-12 border-l-4 border-[#1040C0] pl-6">
              Open to consulting on AI/ML infrastructure, DeFi protocol design, and full-stack development. Also
              interested in technical advisory roles for early-stage startups.
            </p>

            <div className="space-y-4">
              {links.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 border-b-4 border-[#E0E0E0] py-6 hover:border-[#D02020] transition-colors duration-200"
                  >
                    <Icon className="w-6 h-6 group-hover:scale-125 transition-transform duration-200" />
                    <span className="font-bold text-sm uppercase tracking-widest">{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 ml-auto group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="animate-fadeIn">
            <div className="bg-white text-[#121212] border-4 border-[#121212] p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(208,32,32,0.3)]">
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div>
                  <label className="font-black text-xs uppercase tracking-widest block mb-4">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border-b-4 border-[#121212] py-4 text-lg focus:outline-none focus:border-[#D02020] transition-colors placeholder:text-gray-400 font-medium"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="font-black text-xs uppercase tracking-widest block mb-4">
                    MESSAGE
                  </label>
                  <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    className="w-full bg-transparent border-b-4 border-[#121212] py-4 text-lg focus:outline-none focus:border-[#D02020] transition-colors resize-none placeholder:text-gray-400 font-medium"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D02020] text-white font-black uppercase tracking-widest text-sm px-8 py-4 border-4 border-[#121212] shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all duration-200 flex items-center justify-center gap-3"
                >
                  {submitted ? "SENT! 🚀" : "SEND MESSAGE"}
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </form>

              {submitted && (
                <div className="mt-6 p-4 bg-[#D02020] text-white border-2 border-[#121212] font-bold text-center">
                  Thanks! I'll get back to you soon.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-32 pt-8 border-t-4 border-[#E0E0E0] relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="font-bold text-xs uppercase tracking-widest text-[#E0E0E0]">
            © 2025 ALEX CHEN. ALL RIGHTS RESERVED.
          </div>
          <div className="font-bold text-xs uppercase tracking-widest text-[#E0E0E0]">
            BUILT WITH NEXT.JS + TYPESCRIPT + BAUHAUS
          </div>
        </div>
      </footer>
    </section>
  )
}
