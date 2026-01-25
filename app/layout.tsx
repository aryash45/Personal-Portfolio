import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const outfit = Outfit({ subsets: ["latin"], weights: [400, 500, 700, 900] })

export const metadata: Metadata = {
  title: "ALEX.DEV — Full-Stack AI & DeFi Engineer",
  description: "Building intelligent systems at the intersection of AI and decentralized finance. Bauhaus geometric design meets brutalist development.",
    generator: 'v0.app',
    viewport: "width=device-width, initial-scale=1, maximum-scale=5"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} font-sans antialiased bg-[#F0F0F0] text-[#121212]`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
