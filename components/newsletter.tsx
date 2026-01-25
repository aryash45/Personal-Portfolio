"use client"

import React from "react"

import { useState } from "react"
import { Mail, CheckCircle } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
    setTimeout(() => {
      setEmail("")
      setSubscribed(false)
    }, 3000)
  }

  return (
    <section className="bg-[#1040C0] text-white px-4 md:px-8 lg:px-16 py-24 relative overflow-hidden">
      {/* Decorative geometric elements */}
      <div className="absolute top-10 right-20 w-24 h-24 border-4 border-white opacity-20" />
      <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full border-4 border-[#F0C020] opacity-20" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInUp">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-6">
              STAY IN
              <br />
              THE LOOP
            </h3>
            <p className="text-base md:text-lg leading-relaxed font-medium opacity-90">
              Get weekly insights on AI, DeFi, and full-stack development. No spam, no promotions—just ideas that
              matter.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="animate-fadeIn">
            <div className="relative group">
              <div className="absolute -inset-1 bg-[#F0C020] opacity-30 group-hover:opacity-50 transition-opacity duration-200" />
              <div className="relative bg-white text-[#121212] border-4 border-white p-2 flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#1040C0] ml-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent outline-none text-sm md:text-base font-medium placeholder:text-gray-400"
                />
                <button
                  type="submit"
                  className="bg-[#D02020] text-white font-black text-xs uppercase tracking-widest px-6 py-3 hover:bg-[#B01818] transition-colors duration-200"
                >
                  Subscribe
                </button>
              </div>
            </div>

            {subscribed && (
              <div className="mt-4 flex items-center gap-3 text-[#F0C020] animate-slideInUp">
                <CheckCircle className="w-5 h-5" />
                <span className="font-bold text-sm">Check your inbox!</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
