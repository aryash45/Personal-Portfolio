/** Static visual + metadata config for each portfolio project.
 *  GitHub provides: description, stars, language (fetched at runtime via ISR).
 *  This file provides everything GitHub doesn't know about.
 */

export interface ProjectConfig {
  number: string
  title: string
  /** Bare GitHub repo name, e.g. "Liquidex" */
  repo: string
  /** Shown if GitHub description is empty or the API is unavailable */
  fallbackDescription: string
  tags: string[]
  category: string
  github: string
  live: string
  gradient: string
  accentColor: string
  featured: boolean
}

export const projectConfigs: ProjectConfig[] = [
  {
    number: "01",
    title: "LIQUIDEX",
    repo: "Liquidex",
    fallbackDescription:
      "A full-stack DeFi risk monitor featuring an AI advisory agent. Circumvents third-party APIs by reading live Aave V3 contract state directly.",
    tags: ["NEXT.JS", "EXPRESS", "AAVE V3", "AI"],
    category: "DEFI",
    github: "https://github.com/aryash45/Liquidex",
    live: "#",
    gradient: "from-violet-600/20 via-purple-600/10 to-transparent",
    accentColor: "oklch(0.65 0.27 270)",
    featured: true,
  },
  {
    number: "02",
    title: "DocuCheck",
    repo: "docucheck",
    fallbackDescription:
      "Extracts factual claims from PDF documents and performs automated fact-checking using Gemini AI.",
    tags: ["AI", "NEXT.JS", "PYTHON"],
    category: "AI",
    github: "https://github.com/aryash45/docucheck",
    live: "#",
    gradient: "from-emerald-600/20 via-teal-600/10 to-transparent",
    accentColor: "oklch(0.72 0.18 165)",
    featured: false,
  },
  {
    number: "03",
    title: "DeFi Loan Protocol",
    repo: "Defi-Loan-Protocol",
    fallbackDescription:
      "Fixed-interest loan platform on Aptos blockchain with Move smart contracts and a modern React frontend.",
    tags: ["Move", "Aptos", "React"],
    category: "DEFI",
    github: "https://github.com/aryash45/Defi-Loan-Protocol",
    live: "#",
    gradient: "from-blue-600/20 via-cyan-600/10 to-transparent",
    accentColor: "oklch(0.65 0.22 220)",
    featured: false,
  },
  {
    number: "04",
    title: "BrandMeld",
    repo: "BrandMeld-CloudRunHackathon",
    fallbackDescription:
      "AI Suite on Cloud Run that solves content homogenization — analyze, generate, and audit on-brand voice at scale.",
    tags: ["TypeScript", "Google Cloud", "AI"],
    category: "WEB",
    github: "https://github.com/aryash45/BrandMeld-CloudRunHackathon",
    live: "#",
    gradient: "from-orange-600/20 via-amber-600/10 to-transparent",
    accentColor: "oklch(0.72 0.22 55)",
    featured: false,
  },
  {
    number: "05",
    title: "Veritas Nodes",
    repo: "veritas-nodes",
    fallbackDescription:
      "High-resolution DePIN protocol on Solana transforming citizen-owned devices into verifiable infrastructure auditors.",
    tags: ["Solana", "Rust", "DePIN"],
    category: "DEFI",
    github: "https://github.com/aryash45/veritas-nodes",
    live: "#",
    gradient: "from-rose-600/20 via-pink-600/10 to-transparent",
    accentColor: "oklch(0.65 0.25 10)",
    featured: false,
  },
]
