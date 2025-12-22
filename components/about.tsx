"use client"

import { Card } from "@/components/ui/card"
import { Building2, Users, Award, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"



export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-6 lg:px-8 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <p className="text-sm font-semibold leading-7 text-accent uppercase tracking-wider">About Me</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            Future civil engineer with a passion for technology-enabled planning.
 <span className="text-accent"></span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
            
          </p>
        </div>

        {/* stats removed as requested */}
      </div>
    </section>
  )
}
