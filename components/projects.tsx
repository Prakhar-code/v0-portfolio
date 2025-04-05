"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

// Sample project data
const projects = [
  {
    id: 1,
    title: "TestGenie",
    description:
      "A VS Code Extension that uses AI to generate comprehensive test cases from OpenAPI/Swagger specifications and provides intelligent suggestions to optimize and enhance API contracts. Features include automated test case generation, contract validation, and recommendations for improving API design patterns.",
    image: "/testgenie.jpg?height=400&width=600",
    tags: ["JavaScript", "FastAPI","Gemini-API", "OpenAPI", "Swagger", "VS Code Extension"],
    github: "https://github.com/Prakhar-code/TestGenie",
  },
  {
    id: 2,
    title: "v-Book",
    description: "A comprehensive cabin booking system designed for corporate environments, enabling employees to efficiently reserve workspace cabins for various purposes. Features include real-time availability tracking, booking management, and an intuitive interface for seamless reservation experiences within the workplace.",
    image: "/v-book.png?height=400&width=600",
    tags: ["React", "FastAPI", "AWS RDS", "JWT-Authentication", "Real-time Updates"],
    github: "https://github.com/Prakhar-code/v-Book",
  },
  {
    id: 3,
    title: "Real-Time Stock Market Data Pipeline",
    description: "An end-to-end real-time data pipeline that collects Indian stock market data using IoT devices, processes it through Kafka streams, and displays it on a live dashboard. Features include IoT device simulation in Python, serverless data processing with AWS Lambda, real-time WebSocket updates, and persistent storage in DynamoDB.",
    image: "/rtda.png?height=400&width=600",
    tags: ["Python", "AWS IoT Core", "Kafka", "DynamoDB", "Lambda", "WebSocket", "API Gateway", "ECS"],
    github: {
      IoT: "https://github.com/Prakhar-code/IoT-Simulation",
      kafka: "https://github.com/Prakhar-code/kafka-infrastructure"
    },
  },
  {
    id: 4,
    title: "WhatUp",
    description: "A real-time chat application with features like instant messaging, file sharing, and user authentication. Users can create accounts, join chat rooms, share media files, and communicate in real-time. The application uses WebSocket for live updates, Cloudinary for media storage, and MongoDB for data persistence.",
    image: "/whatup.png?height=400&width=600",
    tags: ["Node.js", "React", "JavaScript", "MongoDB", "WebSocket", "Cloudinary", "JWT Authentication"],
    github: {
      frontend: "https://github.com/Prakhar-code/Chat-App-Frontend",
      backend: "https://github.com/Prakhar-code/Chat-App-Backend",
    },
  },
  {
    id: 5,
    title: "FinTrack",
    description: "A comprehensive financial platform offering credit card comparison tools, financial calculators, and educational content. Features include personalized credit card recommendations based on credit scores, interactive loan calculators, investment return projectors, and a CMS-powered blog system for financial literacy content. The platform uses data analytics to provide tailored financial insights.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Redis", "TailwindCSS", "Strapi CMS", "Chart.js", "SEO Optimization", "Analytics"],
    github: "https://github.com/Prakhar-code/FinTrack",
  },
  {
    id: 6,
    title: "ShareIT",
    description: "An end-to-end encrypted file sharing platform with zero-knowledge architecture. Features include client-side encryption using AES-256, secure key exchange via RSA, encrypted file chunking for large transfers, and ephemeral sharing links. The platform ensures complete privacy by encrypting files before upload and storing only encrypted data.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Node.js", "React", "TypeScript", "Redis", "AWS S3", "Web Crypto API", "RSA", "AES-256", "End-to-End Encryption"],
    github: "https://github.com/Prakhar-code/ShareIT",
  },
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">My Projects</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project showcases different skills and technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Card className="h-full flex flex-col overflow-hidden">
              <div
                className="relative h-48 w-full overflow-hidden"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500"
                  style={{
                    transform: hoveredId === project.id ? "scale(1.05)" : "scale(1)",
                  }}
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                {project.id === 3 ? (
                  <div className="flex gap-2 w-full">
                    <Button asChild variant="outline" className="flex-1">
                      <a href={typeof project.github === 'object' ? project.github.IoT : project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        IoT-App
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="flex-1">
                      <a href={typeof project.github === 'object' ? project.github.kafka : project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Kafka-Infra
                      </a>
                    </Button>
                  </div>
                ) : project.id === 4 ? (
                  <div className="flex gap-2 w-full">
                    <Button asChild variant="outline" className="flex-1">
                      <a href={typeof project.github === 'object' ? project.github.frontend : project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Frontend
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="flex-1">
                      <a href={typeof project.github === 'object' ? project.github.backend : project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Backend
                      </a>
                    </Button>
                  </div>
                ) : project.id === 5 || project.id === 6 ? (
                  <Button variant="outline" className="w-full" disabled>
                    Under Development
                  </Button>
                ) : (
                  <Button asChild variant="outline" className="w-full">
                    <a href={typeof project.github === 'string' ? project.github : project.github.IoT} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

