import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    period: "2023 — NOW",
    role: "FOUNDER & LEAD ENGINEER",
    company: "NEURAL SYSTEMS",
    description: "Building autonomous AI trading infrastructure. Raised $4M seed.",
    link: "#",
  },
  {
    period: "2021 — 2023",
    role: "SENIOR PROTOCOL ENGINEER",
    company: "DEFI PROTOCOL",
    description: "Led core smart contract development. Secured $800M+ in TVL.",
    link: "#",
  },
  {
    period: "2019 — 2021",
    role: "ML ENGINEER",
    company: "YC STARTUP",
    description: "Built real-time fraud detection system processing 10M+ transactions/day.",
    link: "#",
  },
  {
    period: "2017 — 2019",
    role: "SOFTWARE ENGINEER",
    company: "TECH CORP",
    description: "Full-stack development on distributed systems serving 50M+ users.",
    link: "#",
  },
]

export function Experience() {
  return (
    <section id="experience" className="min-h-screen px-6 md:px-12 lg:px-24 py-24 border-t border-border">
      <div className="font-mono text-sm text-muted-foreground mb-8">002 — EXPERIENCE</div>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
        WHERE I'VE
        <br />
        <span className="text-muted-foreground">WORKED</span>
      </h2>

      <div className="space-y-0">
        {experiences.map((exp, index) => (
          <a
            key={index}
            href={exp.link}
            className="group block border-t border-border py-8 hover:bg-secondary/30 transition-colors -mx-6 md:-mx-12 lg:-mx-24 px-6 md:px-12 lg:px-24"
          >
            <div className="grid md:grid-cols-12 gap-4 md:gap-8 items-start">
              <div className="md:col-span-2 font-mono text-sm text-muted-foreground">{exp.period}</div>
              <div className="md:col-span-4">
                <h3 className="text-xl font-bold tracking-tight flex items-center gap-2">
                  {exp.role}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <div className="font-mono text-sm text-muted-foreground mt-1">{exp.company}</div>
              </div>
              <div className="md:col-span-6 text-muted-foreground">{exp.description}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
