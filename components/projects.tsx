import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    number: "01",
    title: "NEURAL TRADE",
    description:
      "Autonomous trading agent using transformer-based price prediction. Processes 50TB+ market data daily with sub-millisecond latency.",
    tags: ["PYTORCH", "RUST", "AWS"],
    link: "#",
  },
  {
    number: "02",
    title: "DEFI SENTINEL",
    description:
      "Real-time smart contract vulnerability detection using ML. Monitors $2B+ TVL across 15 protocols. Zero exploits on watch.",
    tags: ["SOLIDITY", "PYTHON", "GRAPH"],
    link: "#",
  },
  {
    number: "03",
    title: "CHAIN ORACLE",
    description:
      "Decentralized AI inference network. Enables trustless ML model execution on-chain with cryptographic verification.",
    tags: ["SOLANA", "TYPESCRIPT", "ZK"],
    link: "#",
  },
  {
    number: "04",
    title: "LLM AGENT FRAMEWORK",
    description:
      "Open-source framework for building autonomous AI agents. 12K+ GitHub stars. Used by Fortune 500 companies.",
    tags: ["LANGCHAIN", "OPENAI", "REACT"],
    link: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 md:px-12 lg:px-24 py-24 border-t border-border">
      <div className="font-mono text-sm text-muted-foreground mb-8">002 — PROJECTS</div>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
        SELECTED
        <br />
        <span className="text-muted-foreground">WORK</span>
      </h2>

      <div className="space-y-0">
        {projects.map((project) => (
          <a
            key={project.number}
            href={project.link}
            className="group block border-t border-border py-12 hover:bg-secondary/30 transition-colors -mx-6 md:-mx-12 lg:-mx-24 px-6 md:px-12 lg:px-24"
          >
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-1 font-mono text-sm text-muted-foreground">{project.number}</div>
              <div className="lg:col-span-4">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-3">
                  {project.title}
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
              </div>
              <div className="lg:col-span-5 text-muted-foreground leading-relaxed">{project.description}</div>
              <div className="lg:col-span-2 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-mono text-xs text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
