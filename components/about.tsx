export function About() {
  const stats = [
    { label: "YEARS EXP", value: "7+", icon: "circle" },
    { label: "PROJECTS", value: "40+", icon: "square" },
    { label: "TVL SECURED", value: "$2B+", icon: "triangle" },
    { label: "GH STARS", value: "15K+", icon: "circle" },
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
    <section id="about" className="min-h-screen px-4 md:px-8 lg:px-16 py-24 bg-[#F0F0F0] relative">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#D02020] opacity-10" />
      <div className="absolute bottom-40 right-20 w-32 h-32 rounded-full border-4 border-[#1040C0] opacity-15" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
          <div className="animate-slideInUp">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-8 uppercase leading-[0.9]">
              I BUILD
              <br />
              <span className="text-[#D02020]">SYSTEMS THAT</span>
              <br />
              SCALE
            </h2>
            <div className="space-y-6 text-base md:text-lg leading-relaxed font-medium border-l-4 border-[#1040C0] pl-6">
              <p>
                Seven years deep in distributed systems, now focused exclusively on AI infrastructure and DeFi protocols.
                I architect ML pipelines that process billions of data points and smart contracts that secure billions in
                value.
              </p>
              <p>
                Previously led engineering at two YC-backed startups. Now building autonomous trading systems and
                on-chain AI agents.
              </p>
            </div>
          </div>

          <div className="space-y-16 animate-fadeIn">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className="border-4 border-[#121212] p-6 shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] hover:-translate-y-1 transition-all duration-200 bg-white relative overflow-hidden group"
                >
                  {/* Decorative corner shape */}
                  <div
                    className="absolute top-0 right-0 w-8 h-8"
                    style={{
                      backgroundColor: [
                        "#D02020",
                        "#1040C0",
                        "#F0C020",
                        "#121212",
                      ][idx % 4],
                    }}
                  />

                  <div className="text-3xl md:text-4xl font-black tracking-tight">{stat.value}</div>
                  <div className="text-xs font-bold tracking-widest uppercase mt-3 text-[#121212]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Skills Section */}
            <div>
              <h3 className="text-sm font-black tracking-widest uppercase mb-6 border-b-4 border-[#121212] pb-4">
                TECH STACK
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, idx) => (
                  <button
                    key={skill}
                    className="bg-white border-2 border-[#121212] px-4 py-2 font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-[2px_2px_0px_0px_black] hover:shadow-[4px_4px_0px_0px_black] hover:-translate-y-1 active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
                    style={{
                      borderColor: [
                        "#D02020",
                        "#1040C0",
                        "#F0C020",
                      ][idx % 3],
                      borderWidth: "2px",
                    }}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
