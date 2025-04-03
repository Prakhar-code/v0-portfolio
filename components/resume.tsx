"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Eye } from "lucide-react"

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

const achievements = [
  {
    id: 1,
    Event: "API Hackathon",
    location: "Indore, India",
    period: "February 2024",
    description:
      "Secured 2nd Runner Up in the API Hackathon Held by YASH Technologies in Indore",
  },
]

export default function Resume() {
  const resumeUrl = "/Prakhar.Kabra_CV.pdf"

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">My Resume</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
        <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
          My professional journey and qualifications. Download my full resume for more details.
        </p>
        <Button asChild className="mb-8 mx-auto">
          <a href={resumeUrl} download="PrakharKabra_Resume.pdf">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </a>
        </Button>
        <Button asChild className="mb-8 mx-auto ml-4">
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
            <Eye className="mr-2 h-4 w-4" />
            Preview Resume
          </a>
        </Button>
      </div>

      <div className="space-y-12">
        {/* Experience Section */}
        <div>
          <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
            Experience
          </h3>
          <div className="space-y-6 pl-8 border-l-2 border-blue-200">
            {experience.map((item) => (
              <Card key={item.id} className="relative">
                <div className="absolute -left-[9px] top-6 w-4 h-4 bg-blue-200 rounded-full"></div>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h4 className="text-xl font-semibold">{item.position}</h4>
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
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
            Education
          </h3>
          <div className="space-y-6 pl-8 border-l-2 border-blue-200">
            {education.map((item) => (
              <Card key={item.id} className="relative">
                <div className="absolute -left-[9px] top-6 w-4 h-4 bg-blue-200 rounded-full"></div>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h4 className="text-xl font-semibold">{item.degree}</h4>
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
        </div>

        {/* Achievements Section */}
        <div>
          <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
            Achievements
          </h3>
          <div className="space-y-6 pl-8 border-l-2 border-blue-200">
            {achievements.map((item) => (
              <Card key={item.id} className="relative">
                <div className="absolute -left-[9px] top-6 w-4 h-4 bg-blue-200 rounded-full"></div>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h4 className="text-xl font-semibold">{item.Event}</h4>
                    <span className="text-sm text-foreground/70 bg-muted px-3 py-1 rounded-full mt-1 md:mt-0">
                      {item.period}
                    </span>
                  </div>
                  <div className="text-foreground/80 mb-4">
                    {item.location}
                  </div>
                  <p className="text-foreground/70">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

