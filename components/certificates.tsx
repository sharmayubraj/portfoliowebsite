"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Award, ExternalLink, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import Image from "next/image"



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
        {/* Certificate Images with title and description */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {[
            {
              src: "/1.jpeg",
              title: "Certificate of Event Coordinator at Yathartha Tech Fest",
              // desc: "Awarded for outstanding performance in civil engineering."
            },
            {
              src: "/2.jpeg",
              title: "Nepal first at quiz competition",
              // desc: "Recognized for active participation in technical workshops."
            },
            {
              src: "/4.jpeg",
              title: "Volunteering at YRC Thapathali Campus",
              // desc: "Completed a seminar on advanced structural design."
            },
            {
              src: "/3.jpeg",
              title: "Certificate of Regional winner of International  Competition",
              // desc: "Successfully finished training in project management."
            },
          ].map((img, idx) => (
            <div key={img.src} className="w-64 flex flex-col items-center">
              <div className="w-64 h-44 relative rounded-xl overflow-hidden shadow-md border border-accent/20 bg-background mb-3">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 256px"
                  priority={idx === 0}
                />
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground text-lg mb-1">{img.title}</h4>
                <p className="text-sm text-muted-foreground">{img.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* No card grid, only images remain as certificates */}
      </div>
    </section>
  )
}
