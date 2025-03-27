"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { Code2, Database, GitBranch, Globe, Layout, Server, Terminal } from "lucide-react"

const skills = [
  { name: "React", icon: <img src="/react-icon.png" alt="React" className="h-8 w-8" /> },
  { name: "Next.js", icon: <img src="/nextjs-icon.png" alt="Next.js" className="h-8 w-8" /> },
  { name: "TypeScript", icon: <img src="/typescript-programming-language-icon.png" alt="TypeScript" className="h-8 w-8" /> },
  { name: "JavaScript", icon: <img src="/javascript-programming-language-icon.png" alt="JavaScript" className="h-8 w-8" /> },
  { name: "Node.js", icon: <img src="/node-js-icon.png" alt="Node.js" className="h-8 w-8" /> },
  { name: "Express", icon: <img src="/express-js-icon.png" alt="Express" className="h-8 w-8" /> },
  { name: "MongoDB", icon: <img src="/mongodb-icon.png" alt="MongoDB" className="h-8 w-8" /> },
  { name: "PostgreSQL", icon: <img src="/postgresql-icon.png" alt="PostgreSQL" className="h-8 w-8" /> },
  { name: "TailwindCSS", icon: <img src="/tailwind-css-icon.png" alt="TailwindCSS" className="h-8 w-8" /> },
  { name: "HTML5", icon: <img src="/html-icon.png" alt="HTML5" className="h-8 w-8" /> },
  { name: "CSS3", icon: <img src="/css-icon.png" alt="CSS3" className="h-8 w-8" /> },
  { name: "Git", icon: <img src="/git-icon.png" alt="Git" className="h-8 w-8" /> },
]

export default function Skills() {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { current } = carouselRef
      const scrollAmount = direction === "left" ? -current.offsetWidth / 2 : current.offsetWidth / 2
      current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Skills</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Technologies and tools I work with to create exceptional digital experiences.
        </p>
      </div>

      <div className="relative">
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex"
          onClick={() => scroll("left")}
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <div
          ref={carouselRef}
          className="flex overflow-x-auto gap-4 py-8 px-4 scrollbar-hide snap-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-none snap-center"
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center justify-center">
                  <div className="text-primary mb-4">{skill.icon}</div>
                  <h3 className="text-lg font-semibold text-center">{skill.name}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex"
          onClick={() => scroll("right")}
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

