"use client"

import React from "react"

import { Github, Linkedin, Mail, Twitter, ExternalLink } from "lucide-react"

interface SocialLink {
  icon: React.ReactNode
  label: string
  href: string
  color: string
}

export function SocialLinks() {
  const links: SocialLink[] = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com",
      color: "#121212",
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      label: "Twitter",
      href: "https://twitter.com",
      color: "#1040C0",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "#D02020",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      href: "mailto:alex@example.com",
      color: "#F0C020",
    },
  ]

  return (
    <div className="flex gap-4 items-center">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          title={link.label}
        >
          <div
            className="p-4 border-3 border-[#121212] flex items-center justify-center shadow-[3px_3px_0px_0px_black] hover:shadow-[5px_5px_0px_0px_black] hover:-translate-y-1 transition-all duration-200 cursor-pointer"
            style={{
              backgroundColor: link.color,
              color: link.color === "#F0C020" ? "#121212" : "white",
            }}
          >
            {link.icon}
          </div>
          <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs font-bold uppercase tracking-widest text-[#121212] opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            {link.label}
          </span>
        </a>
      ))}
    </div>
  )
}
