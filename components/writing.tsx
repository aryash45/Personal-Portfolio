import { ArrowUpRight } from "lucide-react"

const articles = [
  {
    date: "DEC 2024",
    title: "BUILDING AUTONOMOUS AI AGENTS FOR DEFI",
    description: "A deep dive into creating self-improving trading systems using reinforcement learning.",
    readTime: "12 MIN READ",
    link: "#",
  },
  {
    date: "OCT 2024",
    title: "ZERO-KNOWLEDGE PROOFS FOR ML INFERENCE",
    description: "How to verify AI model outputs on-chain without revealing model weights.",
    readTime: "8 MIN READ",
    link: "#",
  },
  {
    date: "AUG 2024",
    title: "SCALING RUST MICROSERVICES TO 1M RPS",
    description: "Lessons learned building high-frequency trading infrastructure.",
    readTime: "15 MIN READ",
    link: "#",
  },
]

export function Writing() {
  return (
    <section id="writing" className="px-6 md:px-12 lg:px-24 py-24 border-t border-border">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <div className="font-mono text-sm text-muted-foreground mb-8">004 — WRITING</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            TECHNICAL
            <br />
            <span className="text-muted-foreground">ARTICLES</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I write about AI systems, blockchain architecture, and the intersection of both. Deep technical content for
            engineers building the future.
          </p>
        </div>

        <div className="space-y-0">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              className="group block border-t border-border py-8 first:border-t-0 lg:first:border-t"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="font-mono text-xs text-muted-foreground">{article.date}</span>
                <span className="font-mono text-xs text-muted-foreground">{article.readTime}</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-2 flex items-center gap-2">
                {article.title}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </h3>
              <p className="text-muted-foreground text-sm">{article.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
