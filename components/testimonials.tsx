const testimonials = [
  {
    quote:
      "One of the most technically rigorous engineers I've worked with. Alex's ability to bridge AI and blockchain is unmatched.",
    author: "SARAH CHEN",
    role: "CTO @ DEFI PROTOCOL",
  },
  {
    quote:
      "Shipped our entire ML infrastructure in 3 months. The system still runs flawlessly processing billions of predictions daily.",
    author: "MIKE ROSS",
    role: "FOUNDER @ YC STARTUP",
  },
  {
    quote:
      "Alex doesn't just write code—they architect systems that scale. Essential hire for any serious technical team.",
    author: "DAVID KIM",
    role: "VP ENG @ TECH CORP",
  },
]

export function Testimonials() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-border bg-secondary/20">
      <div className="font-mono text-sm text-muted-foreground mb-16">005 — TESTIMONIALS</div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="border-l border-border pl-6">
            <blockquote className="text-lg leading-relaxed mb-8">"{testimonial.quote}"</blockquote>
            <div>
              <div className="font-bold text-sm">{testimonial.author}</div>
              <div className="font-mono text-xs text-muted-foreground mt-1">{testimonial.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
