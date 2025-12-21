"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const projects = [
  {
    title: "Skyline Tower",
    category: "Commercial",
    description:
      "45-story mixed-use high-rise featuring innovative seismic design and sustainable LEED Platinum certification.",
    image: "/modern-commercial-building-structural-design.jpg",
    tags: ["Structural Design", "High-Rise", "LEED"],
    year: "2023",
  },
  {
    title: "Harbor Bridge Expansion",
    category: "Infrastructure",
    description:
      "Major bridge rehabilitation project increasing capacity while preserving historical architectural elements.",
    image: "/modern-bridge-infrastructure-engineering.jpg",
    tags: ["Bridge Design", "Infrastructure", "Rehabilitation"],
    year: "2022",
  },
  {
    title: "Riverside Residences",
    category: "Residential",
    description:
      "Luxury residential complex with advanced foundation systems designed for waterfront construction challenges.",
    image: "/luxury-residential-building-architecture.jpg",
    tags: ["Residential", "Foundation Design", "Luxury"],
    year: "2023",
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
            <Card
              key={index}
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
          ))}
        </div>
      </div>
    </section>
  )
}
