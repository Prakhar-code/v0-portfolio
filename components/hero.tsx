"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Code2, Brain, Wrench, Code, Terminal, Cpu, Database, Server, Github, Cloud, Network, Coffee, Headphones, Camera, Wifi, Smartphone } from "lucide-react"
import Link from "next/link"
import { useTypewriter } from "@/hooks/useTypewriter"
import { useState } from "react"

export default function Hero() {
  const texts = ["Full Stack Developer...", "Software Engineer...", "Problem Solver..."]
  const typewriterText = useTypewriter(texts, 150)
  const [animationType, setAnimationType] = useState<'circle' | 'grid'>('grid')

  const getIcon = (text: string) => {
    if (text.includes("Full Stack")) return <Code2 className="h-6 w-6 mr-2" />
    if (text.includes("Software")) return <Brain className="h-6 w-6 mr-2" />
    return <Wrench className="h-6 w-6 mr-2" />
  }

  const techIcons = [
    { icon: <Code className="h-16 w-16" />, color: "text-blue-500" },
    { icon: <Terminal className="h-16 w-16" />, color: "text-green-500" },
    { icon: <Cpu className="h-16 w-16" />, color: "text-purple-500" },
    { icon: <Database className="h-16 w-16" />, color: "text-red-500" },
    { icon: <Server className="h-16 w-16" />, color: "text-yellow-500" },
    { icon: <Github className="h-16 w-16" />, color: "text-gray-500" },
    { icon: <Cloud className="h-16 w-16" />, color: "text-sky-500" },
    { icon: <Network className="h-16 w-16" />, color: "text-indigo-500" },
    { icon: <Coffee className="h-16 w-16" />, color: "text-amber-500" },
    { icon: <Headphones className="h-16 w-16" />, color: "text-pink-500" },
    { icon: <Camera className="h-16 w-16" />, color: "text-emerald-500" },
    { icon: <Wifi className="h-16 w-16" />, color: "text-cyan-500" },
    { icon: <Smartphone className="h-16 w-16" />, color: "text-violet-500" },
  ]

  const handleIconClick = () => {
    setAnimationType(prev => prev === 'circle' ? 'grid' : 'circle')
  }

  return (
    <div className="container mx-auto px-4 min-h-[calc(100vh-4rem)] flex flex-col md:flex-row items-center justify-center md:justify-between hero-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl text-center md:text-left"
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
          <Button asChild size="lg" className="btn-primary">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="hover-card">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </motion.div>

      {/* Animation Section */}
      <div className="hidden md:block relative w-1/2 h-[600px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center rounded-3xl">
          <motion.div
            className={`absolute inset-0 flex items-center justify-center ${
              animationType === 'grid' ? 'grid grid-cols-3 gap-12 p-12' : ''
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {techIcons.map((item, index) => (
              <motion.div
                key={index}
                className={`${item.color} dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] cursor-pointer ${
                  animationType === 'circle' ? 'absolute' : ''
                }`}
                initial={{ scale: 0, opacity: 0 }}
                animate={
                  animationType === 'circle'
                    ? {
                        scale: 1,
                        opacity: 1,
                        x: Math.sin(index * 1.2) * 200,
                        y: Math.cos(index * 1.2) * 200,
                      }
                    : {
                        scale: 1,
                        opacity: 1,
                        x: 0,
                        y: 0,
                      }
                }
                whileHover={{ 
                  scale: 1.2, 
                  rotate: animationType === 'grid' ? 360 : 0,
                  transition: { duration: 0.5, ease: "easeInOut" }
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.1,
                  ease: "easeInOut",
                  ...(animationType === 'circle' && {
                    repeat: Infinity,
                    repeatType: "reverse"
                  })
                }}
                onClick={handleIconClick}
              >
                {item.icon}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
          <Link href="#about">
            <Button variant="ghost" size="icon" aria-label="Scroll down" className="hover-card">
              <ArrowDown className="h-6 w-6" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

