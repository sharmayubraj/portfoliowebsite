"use client"

import { Card } from "@/components/ui/card"
import { Building2, Users, Award, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const stats = [
  { id: 1, name: "Projects Completed", value: 50, suffix: "+", icon: Building2 },
  { id: 2, name: "Years Experience", value: 12, suffix: "+", icon: TrendingUp },
  { id: 3, name: "Team Members Led", value: 25, suffix: "+", icon: Users },
  { id: 4, name: "Awards Won", value: 8, suffix: "", icon: Award },
]

function CounterStat({ stat }: { stat: (typeof stats)[0] }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = stat.value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= stat.value) {
        setCount(stat.value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, stat.value])

  return (
    <Card
      ref={ref}
      className="p-6 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm"
    >
      <div className="flex items-center gap-4">
        <div className="rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 p-3 shadow-inner">
          <stat.icon className="h-7 w-7 text-accent" />
        </div>
        <div>
          <p className="text-3xl font-bold text-foreground bg-gradient-to-r from-foreground to-accent bg-clip-text">
            {count}
            {stat.suffix}
          </p>
          <p className="text-sm text-muted-foreground font-medium">{stat.name}</p>
        </div>
      </div>
    </Card>
  )
}

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-6 lg:px-8 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <p className="text-sm font-semibold leading-7 text-accent uppercase tracking-wider">About Me</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            Building the infrastructure of <span className="text-accent">tomorrow</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
            With over a decade of experience in structural engineering and project management, I specialize in designing
            innovative solutions for complex infrastructure challenges. My approach combines technical precision with
            sustainable practices to create lasting impact.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <CounterStat key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
