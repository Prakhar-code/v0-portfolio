"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, GitBranch, Globe, Layout, Server, Terminal } from "lucide-react"

const skills = [
  { name: "Python", icon: <img src="/python-icon.png" alt="Python" className="h-8 w-8" /> },
  { name: "FastAPI", icon: <img src="/fastapi-icon.png" alt="fast-api" className="h-8 w-8" /> },
  { name: "React", icon: <img src="/react-icon.png" alt="React" className="h-8 w-8" /> },
  { name: "Next.js", icon: <img src="/nextjs-icon.png" alt="Next.js" className="h-8 w-8" /> },
  { name: "TypeScript", icon: <img src="/typescript-programming-language-icon.png" alt="TypeScript" className="h-8 w-8" /> },
  { name: "JavaScript", icon: <img src="/javascript-programming-language-icon.png" alt="JavaScript" className="h-8 w-8" /> },
  { name: "Node.js", icon: <img src="/node-js-icon.png" alt="Node.js" className="h-8 w-8" /> },
  { name: "Express", icon: (
    <>
      <img src="/express-js-icon.png" alt="Express" className="h-8 w-8 block dark:hidden" />
      <img src="/express-js-white-icon.png" alt="Express" className="h-8 w-8 hidden dark:block" />
    </>
  )},
  { name: "MongoDB", icon: <img src="/mongodb-icon.png" alt="MongoDB" className="h-8 w-8" /> },
  { name: "PostgreSQL", icon: <img src="/postgresql-icon.png" alt="PostgreSQL" className="h-8 w-8" /> },
  { name: "TailwindCSS", icon: <img src="/tailwind-css-icon.png" alt="TailwindCSS" className="h-8 w-8" /> },
  { name: "HTML5", icon: <img src="/html-icon.png" alt="HTML5" className="h-8 w-8" /> },
  { name: "CSS3", icon: <img src="/css-icon.png" alt="CSS3" className="h-8 w-8" /> },
  { name: "Git", icon: <img src="/git-icon.png" alt="Git" className="h-8 w-8" /> },
  { name: "Docker", icon: <img src="/docker-icon.png" alt="Git" className="h-8 w-8" /> },
  { name: "Jenkins", icon: <img src="/jenkins-icon.png" alt="Git" className="h-8 w-8" /> },
  { name: "Kafka", icon: (
    <>
      <img src="/apache-kafka-icon-light.png" alt="Express" className="h-8 w-8 block dark:hidden" />
      <img src="/apache-kafka-icon-dark.png" alt="Express" className="h-8 w-8 hidden dark:block" />
    </>
  )},
  { name: "AWS", icon: ( 
    <>
      <img src="/aws-icon.png" alt="AWS" className="h-8 w-8 block dark:hidden" />
      <img src="/aws-icon-dark.png" alt="AWS" className="h-8 w-8 hidden dark:block" />
    </>
  )},
]

export default function Skills() {
  return (
    <div className="container mx-auto px-4 py-8 skills-section">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Skills</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Technologies and tools I work with to create exceptional digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full hover-card">
              <CardContent className="p-6 flex flex-col items-center justify-center">
                <div className="text-primary mb-4">{skill.icon}</div>
                <h3 className="text-lg font-semibold text-center">{skill.name}</h3>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

