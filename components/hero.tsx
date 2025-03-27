"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Code2, Brain, Wrench } from "lucide-react"
import Link from "next/link"
import { useTypewriter } from "@/hooks/useTypewriter"

export default function Hero() {
  const texts = ["Full Stack Developer...", "Software Engineer...", "Problem Solver..."]
  const typewriterText = useTypewriter(texts, 150)

  const getIcon = (text: string) => {
    if (text.includes("Full Stack")) return <Code2 className="h-6 w-6 mr-2" />
    if (text.includes("Software")) return <Brain className="h-6 w-6 mr-2" />
    return <Wrench className="h-6 w-6 mr-2" />
  }

  return (
    <div className="container mx-auto px-4 min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-primary">Prakhar Kabra</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground/80 flex items-center">
          {getIcon(typewriterText)}
          {typewriterText}
          <span className="animate-pulse">|</span>
        </h2>
        <p className="text-lg mb-8 text-foreground/70 max-w-2xl">
          I build exceptional and accessible digital experiences for the web. Focused on creating responsive,
          user-friendly applications with modern technologies.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </motion.div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
          <Link href="#about">
            <Button variant="ghost" size="icon" aria-label="Scroll down">
              <ArrowDown className="h-6 w-6" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

