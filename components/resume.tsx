"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, FileText } from "lucide-react"

// Sample resume data
const education = [
  {
    id: 1,
    degree: "Bachelor of Computer Science",
    institution: "Medicaps University",
    location: "Indore, India",
    period: "2019 - 2023",
    description:
      "Focused on Programming and Database Management. Participated in various hackathons and coding competitions.",
  },
  {
    id: 2,
    degree: "High School",
    institution: "S.I.C.A",
    location: "Indore, India",
    period: "2011 - 2018",
    description:
      "Completed schooling with focus on science and mathematics, participating in various academic competitions.",
  },
]

const experience = [
  {
    id: 1,
    position: "Trainee Programmer",
    company: "YASH Technologies",
    location: "Indore, India",
    period: "August 2024 - Present",
    description:
      "Developed and maintained multiple web applications. Collaborated with cross-functional teams to deliver high-quality software solutions.",
  },
  {
    id: 2,
    position: "Intern",
    company: "YASH Technologies",
    location: "Indore, India",
    period: "May 2024 - July 2024",
    description:
      "Assisted in the development of responsive websites. Gained hands-on experience with HTML, CSS, JavaScript, and PHP.",
  },
]

export default function Resume() {
  const [activeTab, setActiveTab] = useState("experience")

  // In a real application, this would be a link to your actual resume PDF
  const resumeUrl = "/Prakhar.Kabra_CV.pdf"

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">My Resume</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
        <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
          My professional journey and qualifications. Download my full resume for more details.
        </p>
        <Button asChild className="mb-8">
          <a href={resumeUrl} download="PrakharKabra_Resume.pdf">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </a>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card className="h-full">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-6">
                <FileText className="h-16 w-16 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Resume Preview</h3>
              <p className="text-foreground/70 text-center mb-6">
                View my resume online or download it for offline reference.
              </p>
              <div className="aspect-[8.5/11] bg-muted rounded-md overflow-hidden">
                <iframe
                  src={resumeUrl}
                  className="w-full h-full"
                  title="Resume Preview"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>
            <TabsContent value="experience" className="mt-0">
              <div className="space-y-6">
                {experience.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <h3 className="text-xl font-semibold">{item.position}</h3>
                        <span className="text-sm text-foreground/70 bg-muted px-3 py-1 rounded-full mt-1 md:mt-0">
                          {item.period}
                        </span>
                      </div>
                      <div className="text-foreground/80 mb-4">
                        {item.company} | {item.location}
                      </div>
                      <p className="text-foreground/70">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="education" className="mt-0">
              <div className="space-y-6">
                {education.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <h3 className="text-xl font-semibold">{item.degree}</h3>
                        <span className="text-sm text-foreground/70 bg-muted px-3 py-1 rounded-full mt-1 md:mt-0">
                          {item.period}
                        </span>
                      </div>
                      <div className="text-foreground/80 mb-4">
                        {item.institution} | {item.location}
                      </div>
                      <p className="text-foreground/70">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

