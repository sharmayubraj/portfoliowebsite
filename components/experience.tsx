import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    year: "2022-2023",
    role: "President",
    company: "Interact club Of Central Butwal",
  },
  {
    year: "2022-2023",
    role: "Vice President",
    company: "NHI STEM",
  },
  {
    year: "2025-2026",
    role: "Executive Member",
    company: "CESS Thapathali Campus",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-6 lg:px-8 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:mx-0 mb-16">
          <p className="text-sm font-semibold leading-7 text-accent">Experience</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Professional Journey</h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="relative border-l-4 border-accent/30 pl-8 space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Timeline Dot */}
                <span className="absolute -left-5 top-2 w-4 h-4 rounded-full bg-accent border-4 border-background group-hover:scale-110 transition-transform shadow-md" />
                <Card className="p-6 md:p-8 bg-card/80 backdrop-blur-md shadow-lg border-accent/10 hover:border-accent/40 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:gap-8 gap-2">
                    <Badge variant="secondary" className="mb-2 md:mb-0 w-fit text-base px-4 py-1 bg-accent/20 text-accent font-semibold">
                      {exp.year}
                    </Badge>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-muted-foreground font-medium mb-1">{exp.company}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
