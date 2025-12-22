 "use client"

import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "./theme-provider"

const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-12 shadow-md rounded-b-2xl bg-background/80 backdrop-blur-xl border-b border-border/40" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 group">
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-foreground transition-all duration-300 drop-shadow-md">
              yubraj panthi
            </span>
          </a>
        </div>
        <div className="flex items-center gap-4 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="hover:bg-accent/10"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" className="-m-2.5" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-10 lg:items-center">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-semibold leading-7 text-muted-foreground hover:text-accent transition-colors relative group py-2 px-2 tracking-wide"
              style={{ letterSpacing: '0.02em' }}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-accent transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
          <a
            href="/yubrajpanthi-cv.pdf"
            download
            className="ml-4 px-5 py-2 rounded-xl font-bold text-base shadow transition-colors border border-accent/30 tracking-wide bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-white hover:from-blue-700 hover:to-pink-600 hover:shadow-lg"
            style={{ boxShadow: '0 4px 20px 0 rgba(80, 63, 205, 0.15)' }}
          >
            Download CV
          </a>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="ml-2 hover:bg-accent/10"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border/50">
          <div className="space-y-1 px-6 pb-6 pt-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-medium leading-7 text-foreground hover:bg-accent/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="/yubrajpanthi-cv.pdf"
              download
              className="block rounded-lg px-3 py-2 mt-2 text-base font-semibold leading-7 text-accent-foreground bg-accent border border-accent/30 shadow hover:bg-accent/90 transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
