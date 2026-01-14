export function About() {
  const stats = [
    { label: "YEARS EXP", value: "7+" },
    { label: "PROJECTS", value: "40+" },
    { label: "TVL SECURED", value: "$2B+" },
  ]

  const skills = [
    "PYTHON",
    "TYPESCRIPT",
    "RUST",
    "SOLIDITY",
    "PYTORCH",
    "LANGCHAIN",
    "REACT",
    "NODE.JS",
    "ETHEREUM",
    "SOLANA",
    "AWS",
    "KUBERNETES",
  ]

  return (
    <section id="about" className="min-h-screen px-6 md:px-12 lg:px-24 py-24 border-t border-border">
      <div className="grid lg:grid-cols-2 gap-24">
        <div>
          <div className="font-mono text-sm text-muted-foreground mb-8">001 — ABOUT</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">
            I BUILD SYSTEMS
            <br />
            <span className="text-muted-foreground">THAT SCALE</span>
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Seven years deep in distributed systems, now focused exclusively on AI infrastructure and DeFi protocols.
              I architect ML pipelines that process billions of data points and smart contracts that secure billions in
              value.
            </p>
            <p>
              Previously led engineering at two YC-backed startups. Now building autonomous trading systems and on-chain
              AI agents.
            </p>
          </div>
        </div>

        <div className="space-y-16">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l border-border pl-6">
                <div className="text-4xl md:text-5xl font-bold">{stat.value}</div>
                <div className="font-mono text-xs text-muted-foreground mt-2">{stat.label}</div>
              </div>
            ))}
          </div>

          <div>
            <div className="font-mono text-sm text-muted-foreground mb-6">STACK</div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-sm border border-border px-4 py-2 hover:bg-foreground hover:text-background transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
