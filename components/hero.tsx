"use client"

import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const roles = ["Civil Engineer", "Structural Designer" ]

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 500 : 2000

    if (!isDeleting && displayedText === currentRole) {
      setTimeout(() => setIsDeleting(true), pauseTime)
      return
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false)
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
      return
    }

    const timeout = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? currentRole.substring(0, displayedText.length - 1)
          : currentRole.substring(0, displayedText.length + 1),
      )
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentRoleIndex])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden">
      {/* Main content wrapper for single parent */}
      <div className="w-full">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),transparent)]" />
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="mx-auto max-w-4xl py-32 sm:py-48">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-10 animate-fade-in-up">
            <div className="flex-shrink-0 mb-6 md:mb-0">
              <div className="w-44 h-44 md:w-56 md:h-56 relative rounded-full overflow-hidden border-4 border-accent shadow-xl">
                <Image
                  src="/yubrajbhai.jpeg"
                  alt="Yubraj Panthi profile photo"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground mb-4">
                Yubraj {" "}
                <span className="bg-gradient-to-r from-accent via-blue-500 to-accent bg-clip-text text-transparent animate-gradient">
                  Panthi
                </span>
              </h1>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
                <Sparkles className="h-4 w-4 text-accent" />
                <p className="text-base font-medium text-accent tracking-wider">
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
              <p className="text-lg leading-8 text-muted-foreground max-w-xl mb-8">
                Hello, I’m Yubraj; a civil engineering student passionate about GIS, CAD, and research. I believe in learning deeply, working consistently, and building solutions that matter.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-x-4 mb-12 animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              className="group shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all"
              asChild
            >
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-accent/20 hover:border-accent bg-transparent" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-x-6 animate-fade-in-up animation-delay-600">
            <a
              href="https://www.linkedin.com/in/yubraj-panthi-a2b668315/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors p-2 hover:bg-accent/10 rounded-lg"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:yubrajsharma143@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors p-2 hover:bg-accent/10 rounded-lg"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
