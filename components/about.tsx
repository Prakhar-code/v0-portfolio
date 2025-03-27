import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function About() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">About Me</h2>
        <div className="w-20 h-1 bg-primary mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
            <Image src="/placeholder.svg?height=320&width=320" alt="Profile" fill className="object-cover" priority />
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="mb-4 text-foreground/80">
              I'm a passionate Full Stack Developer with expertise in building modern web applications. With a strong
              foundation in both frontend and backend technologies, I create seamless, responsive, and user-friendly
              digital experiences.
            </p>
            <p className="mb-4 text-foreground/80">
              My journey in web development started 5 years ago, and since then, I've worked on various projects ranging
              from small business websites to complex enterprise applications.
            </p>
            <p className="text-foreground/80">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              enjoying outdoor activities.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold">Name:</h4>
                <p className="text-foreground/80">Prakhar Kabra</p>
              </div>
              <div>
                <h4 className="font-semibold">Email:</h4>
                <p className="text-foreground/80">kabra.prakhar09@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold">Location:</h4>
                <p className="text-foreground/80">Indore, India</p>
              </div>
              <div>
                <h4 className="font-semibold">Availability:</h4>
                <p className="text-foreground/80">Full-time</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

