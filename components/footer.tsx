import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram, X } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold mb-6">Portfolio</div>

          <div className="flex space-x-6 mb-8">
            <Link href="https://github.com/Prakhar-code" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6 text-foreground/70 hover:text-foreground transition-colors" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/prakhar-kabra-98a2521ba/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-foreground/70 hover:text-foreground transition-colors" />
            </Link>
            <Link
              href="https://x.com/prakhar_x"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <X className="h-6 w-6 text-foreground/70 hover:text-foreground transition-colors" />
            </Link>
            <Link
              href="https://www.instagram.com/prakhar.kabra09/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6 text-foreground/70 hover:text-foreground transition-colors" />
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-8">
            <Link href="#home" className="text-foreground/70 hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-foreground/70 hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-foreground/70 hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-foreground/70 hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#resume" className="text-foreground/70 hover:text-foreground transition-colors">
              Resume
            </Link>
            <Link href="#contact" className="text-foreground/70 hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

          <div className="text-center text-foreground/60 text-sm">
            <p>&copy; {new Date().getFullYear()} Prakhar Kabra. All rights reserved.</p>
            <p className="mt-1">Built with Next.js, React, and TailwindCSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

