import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-24 py-12">
      <header className="flex justify-between items-start">
        <div className="font-mono text-sm tracking-widest text-muted-foreground">PORTFOLIO.2025</div>
        <nav className="font-mono text-sm space-x-8 hidden md:block">
          <a href="#about" className="hover:text-muted-foreground transition-colors">
            ABOUT
          </a>
          <a href="#projects" className="hover:text-muted-foreground transition-colors">
            PROJECTS
          </a>
          <a href="#contact" className="hover:text-muted-foreground transition-colors">
            CONTACT
          </a>
        </nav>
      </header>

      <div className="flex-1 flex flex-col justify-center py-24">
        <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-bold leading-[0.9] tracking-tighter text-balance">
          FULL-STACK
          <br />
          <span className="text-muted-foreground">AI & DEFI</span>
          <br />
          ENGINEER
        </h1>
        <div className="mt-12 max-w-xl">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-mono">
            Building intelligent systems at the intersection of machine learning and decentralized finance. Shipping
            code that thinks.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-end">
        <div className="font-mono text-sm text-muted-foreground">
          ALEX CHEN
          <br />
          SAN FRANCISCO, CA
        </div>
        <a href="#about" className="group flex items-center gap-2 font-mono text-sm">
          SCROLL
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  )
}
