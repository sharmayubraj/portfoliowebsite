import { Card } from "@/components/ui/card"

const experiences = [
  {
    year: "2020 — Present",
    role: "Senior Structural Engineer",
    company: "Apex Engineering Solutions",
    description:
      "Leading structural design for high-rise commercial buildings and infrastructure projects. Managing cross-functional teams and ensuring compliance with international standards.",
  },
  {
    year: "2016 — 2020",
    role: "Project Engineer",
    company: "Urban Infrastructure Corp",
    description:
      "Designed and supervised bridge construction projects. Collaborated with architects and contractors to deliver projects on time and within budget.",
  },
  {
    year: "2013 — 2016",
    role: "Junior Civil Engineer",
    company: "Metropolitan Design Group",
    description:
      "Assisted in structural analysis and design of residential and commercial buildings. Developed proficiency in AutoCAD, Revit, and SAP2000.",
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

        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-all hover:scale-[1.01]">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="md:w-48 flex-shrink-0">
                    <p className="text-sm font-medium text-muted-foreground">{exp.year}</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{exp.role}</h3>
                    <p className="text-accent font-medium mb-4">{exp.company}</p>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
