import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CreateProjectModal } from "@/components/create-project-modal"

// Mock data for projects
const projects = [
  {
    id: 1,
    name: "EcoTech Water Purifier",
    description: "Revolutionary water purification system using solar energy and advanced filtration technology.",
    raised: 45000,
    goal: 75000,
    backers: 234,
    daysLeft: 15,
    category: "Technology",
    image: "/water-purifier-device.png",
  },
  {
    id: 2,
    name: "Urban Vertical Farm",
    description: "Sustainable vertical farming solution for urban environments with automated growing systems.",
    raised: 28500,
    goal: 50000,
    backers: 156,
    daysLeft: 22,
    category: "Agriculture",
    image: "/vertical-farm-tower.png",
  },
  {
    id: 3,
    name: "Smart Learning Platform",
    description: "AI-powered educational platform that adapts to individual learning styles and preferences.",
    raised: 67800,
    goal: 100000,
    backers: 445,
    daysLeft: 8,
    category: "Education",
    image: "/ai-learning-interface.png",
  },
  {
    id: 4,
    name: "Renewable Energy Kit",
    description: "Portable renewable energy solution for remote communities and emergency situations.",
    raised: 15200,
    goal: 35000,
    backers: 89,
    daysLeft: 30,
    category: "Energy",
    image: "/placeholder-4dvoo.png",
  },
  {
    id: 5,
    name: "Ocean Cleanup Drone",
    description: "Autonomous drone system designed to collect plastic waste from ocean surfaces.",
    raised: 92000,
    goal: 120000,
    backers: 678,
    daysLeft: 12,
    category: "Environment",
    image: "/placeholder-96ue3.png",
  },
  {
    id: 6,
    name: "Mental Health App",
    description: "Comprehensive mental wellness platform with AI-powered therapy and community support.",
    raised: 38900,
    goal: 60000,
    backers: 312,
    daysLeft: 18,
    category: "Health",
    image: "/placeholder-taw3k.png",
  },
]

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                HubPal
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Home
                </Link>
                <Link href="/marketplace" className="text-blue-600 font-semibold">
                  Marketplace
                </Link>
                <Link href="/create-project" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Create Project
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CreateProjectModal />
              <Button className="bg-green-500 hover:bg-green-600 text-white">Connect Wallet</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Discover Amazing Projects</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Support innovative projects and be part of the future. Every contribution makes a difference.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const progressPercentage = (project.raised / project.goal) * 100

            return (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{project.daysLeft} days left</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2">{project.name}</CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-3">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="pb-3">
                  <div className="space-y-3">
                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <Progress value={progressPercentage} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span className="font-semibold text-green-600">${project.raised.toLocaleString()} raised</span>
                        <span className="text-gray-500">of ${project.goal.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{project.backers} backers</span>
                      <span>{Math.round(progressPercentage)}% funded</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Link href={`/project/${project.id}`}>View Project</Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 bg-transparent"
          >
            Load More Projects
          </Button>
        </div>
      </main>
    </div>
  )
}
