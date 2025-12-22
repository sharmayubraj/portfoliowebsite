"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const projects = [
  {
    title: "Landslide Stabilization Technique in Mugling-Narayanghat Road",
    category: "Article",
    description: "A detailed look at landslide stabilization methods used in a critical Nepali highway.",
    image: "/landslide.jpeg",
    tags: ["Geotechnical", "Landslide", "Nepal"],
    year: "2024",
    link: "https://medium.com/@yubrajpanthi/landslide-stabilization-technique-in-mugling-narayanghat-road-130e65160df0",
  },
  {
    title: "Kathmandu's Traffic Revolution: The ITS Pilot That Could Change Everything",
    category: "Article",
    description: "Exploring the impact of Intelligent Transportation Systems in Kathmandu.",
    image: "/traffic.jpeg",
    tags: ["ITS", "Traffic", "Kathmandu"],
    year: "2024",
    link: "https://medium.com/@yubrajpanthi/kathmandus-traffic-revolution-the-its-pilot-that-could-change-everything-291a6195b977",
  },
  {
    title: "Understanding the Ground Water Availability of Terai Region in Nepal: Availability, Impact of Drought, and Recharge Problems",
    category: "Research Paper",
    description: "Research on groundwater resources, drought impact, and recharge issues in Nepal's Terai region.",
    image: "/placeholder.svg",
    tags: ["Groundwater", "Terai", "Research"],
    year: "2024",
    link: "https://www.researchgate.net/publication/394403748_Understanding_the_Ground_Water_Availability_of_Terai_Region_in_NepalAvailability_Impact_of_Drought_and_Recharge_Problems",
  },
]

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-24 sm:py-32 px-6 lg:px-8 relative">
      <div className="absolute inset-0 -z-10 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:mx-0 mb-16">
          <p className="text-sm font-semibold leading-7 text-accent uppercase tracking-wider">Projects</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Featured Work</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A selection of projects that demonstrate technical excellence and innovative engineering solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="overflow-hidden group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <div className="relative h-64 overflow-hidden bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent transition-opacity duration-300 ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}
                  />
                  <div
                    className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${hoveredIndex === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                  >
                    <Badge variant="secondary" className="bg-accent text-accent-foreground shadow-lg">
                      {project.year}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="border-accent/30 text-accent">
                      {project.category}
                    </Badge>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-muted/50 text-muted-foreground border border-border/50 hover:border-accent/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
