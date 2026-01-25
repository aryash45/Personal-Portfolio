import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    number: "01",
    title: "NEURAL TRADE",
    description:
      "Autonomous trading agent using transformer-based price prediction. Processes 50TB+ market data daily with sub-millisecond latency.",
    tags: ["PYTORCH", "RUST", "AWS"],
    github: "https://github.com",
    live: "#",
    color: "#D02020",
  },
  {
    number: "02",
    title: "DEFI SENTINEL",
    description:
      "Real-time smart contract vulnerability detection using ML. Monitors $2B+ TVL across 15 protocols. Zero exploits on watch.",
    tags: ["SOLIDITY", "PYTHON", "GRAPH"],
    github: "https://github.com",
    live: "#",
    color: "#1040C0",
  },
  {
    number: "03",
    title: "CHAIN ORACLE",
    description:
      "Decentralized AI inference network. Enables trustless ML model execution on-chain with cryptographic verification.",
    tags: ["SOLANA", "TYPESCRIPT", "ZK"],
    github: "https://github.com",
    live: "#",
    color: "#F0C020",
  },
  {
    number: "04",
    title: "LLM AGENT FRAMEWORK",
    description:
      "Open-source framework for building autonomous AI agents. 12K+ GitHub stars. Used by Fortune 500 companies.",
    tags: ["LANGCHAIN", "OPENAI", "REACT"],
    github: "https://github.com",
    live: "#",
    color: "#121212",
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-4 md:px-8 lg:px-16 py-24 bg-[#F0C020] relative overflow-hidden"
    >
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-40 h-40 border-4 border-[#121212] opacity-20 transform rotate-45" />
      <div className="absolute bottom-20 left-0 w-32 h-32 rounded-full border-4 border-white opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-12 uppercase leading-[0.9]">
          SELECTED
          <br />
          <span className="text-white bg-[#121212] px-4 py-2 inline-block">WORK</span>
        </h2>

        <div className="space-y-6">
          {projects.map((project, idx) => (
            <div
              key={project.number}
              className="group bg-white border-4 border-[#121212] shadow-[6px_6px_0px_0px_black] hover:shadow-[8px_8px_0px_0px_black] hover:-translate-y-2 transition-all duration-200 overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Number Badge */}
                <div
                  className="lg:w-32 p-8 flex items-center justify-center font-black text-4xl border-b-4 lg:border-b-0 lg:border-r-4 border-[#121212]"
                  style={{ backgroundColor: project.color, color: "white" }}
                >
                  {project.number}
                </div>

                {/* Content */}
                <div className="flex-1 p-8 lg:p-12">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black tracking-tight uppercase mb-4">
                        {project.title}
                      </h3>
                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest hover:opacity-60 transition-opacity"
                        >
                          <Github className="w-5 h-5" />
                          CODE
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest hover:opacity-60 transition-opacity"
                        >
                          <ExternalLink className="w-5 h-5" />
                          LIVE
                        </a>
                      </div>
                    </div>

                    <div className="lg:col-span-1">
                      <p className="text-base leading-relaxed font-medium">{project.description}</p>
                    </div>

                    <div>
                      <div className="font-bold text-xs tracking-widest uppercase mb-4 border-b-2 border-[#121212] pb-2">
                        STACK
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-bold uppercase tracking-wider px-3 py-2 bg-[#E0E0E0] border-2 border-[#121212]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
