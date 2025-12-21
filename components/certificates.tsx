"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Award, ExternalLink, CheckCircle2 } from "lucide-react"
import { useState } from "react"

const certificates = [
  {
    title: "Professional Engineer (PE) License",
    issuer: "National Council of Examiners for Engineering and Surveying",
    date: "January 2018",
    credential: "PE-12345678",
    verified: true,
  },
  {
    title: "LEED Accredited Professional",
    issuer: "U.S. Green Building Council",
    date: "March 2019",
    credential: "LEED AP BD+C",
    verified: true,
  },
  {
    title: "Project Management Professional (PMP)",
    issuer: "Project Management Institute",
    date: "June 2020",
    credential: "PMP-9876543",
    verified: true,
  },
  {
    title: "Structural Engineering Certification",
    issuer: "Structural Engineering Certification Board",
    date: "September 2017",
    credential: "SE-11223344",
    verified: true,
  },
  {
    title: "Advanced Seismic Design",
    issuer: "American Society of Civil Engineers",
    date: "November 2021",
    credential: "ASCE-SD-2021",
    verified: true,
  },
  {
    title: "BIM & Revit Professional",
    issuer: "Autodesk",
    date: "February 2022",
    credential: "Autodesk Certified Professional",
    verified: true,
  },
]

export function Certificates() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="certificates" className="py-24 sm:py-32 px-6 lg:px-8 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-accent/5 to-background" />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:mx-0 mb-16">
          <p className="text-sm font-semibold leading-7 text-accent uppercase tracking-wider">Certifications</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Professional Credentials
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Industry-recognized certifications demonstrating expertise and commitment to professional development.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="p-6 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-1 group border-border/50 bg-card/50 backdrop-blur-sm relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent transition-opacity duration-300 ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}
              />

              <div className="relative flex items-start gap-4">
                <div className="rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 p-3 flex-shrink-0 shadow-inner">
                  <Award className="h-7 w-7 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors leading-tight">
                      {cert.title}
                    </h3>
                    {cert.verified && <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />}
                  </div>
                  <p className="text-sm text-muted-foreground mb-1 font-medium">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground/80 mb-3">{cert.date}</p>
                  <div className="flex items-center gap-2 mt-4">
                    <Badge variant="outline" className="text-xs font-mono border-accent/30 text-accent bg-accent/5">
                      {cert.credential}
                    </Badge>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
