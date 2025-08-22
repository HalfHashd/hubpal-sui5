import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, Calendar, Target, TrendingUp } from "lucide-react"

// Mock project data - in a real app, this would come from your database
const projectData = {
  id: "1",
  name: "AquaPure: Smart Water Purification System",
  description:
    "Revolutionary IoT-enabled water purification device that provides real-time water quality monitoring and automated filtration for communities in developing regions.",
  image: "/water-purifier-device.png",
  category: "Environmental Tech",
  creator: "Dr. Sarah Chen",
  createdAt: "2024-01-15",
  fundingGoal: 50000,
  currentFunding: 32500,
  backers: 127,
  daysLeft: 18,
  milestones: [
    {
      title: "Prototype Development",
      description: "Complete initial prototype and testing",
      target: 15000,
      current: 15000,
      status: "completed",
    },
    {
      title: "Manufacturing Setup",
      description: "Establish production line and quality control",
      target: 25000,
      current: 17500,
      status: "in-progress",
    },
    {
      title: "Field Testing",
      description: "Deploy units for real-world testing",
      target: 40000,
      current: 0,
      status: "pending",
    },
    {
      title: "Mass Production",
      description: "Scale up for full production and distribution",
      target: 50000,
      current: 0,
      status: "pending",
    },
  ],
}

export default function ProjectDashboard({ params }: { params: { id: string } }) {
  const fundingPercentage = (projectData.currentFunding / projectData.fundingGoal) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/marketplace" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Marketplace
                </Link>
              </Button>
              <div className="h-6 w-px bg-gray-300" />
              <Link href="/" className="text-xl font-bold text-gray-900">
                HubPal
              </Link>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white font-semibold px-6">
              Connect Wallet
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Header */}
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={projectData.image || "/placeholder.svg"}
                  alt={projectData.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">{projectData.category}</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{projectData.name}</CardTitle>
                    <p className="text-gray-600 text-sm mb-4">
                      by {projectData.creator} • Created {new Date(projectData.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{projectData.description}</p>
              </CardHeader>
            </Card>

            {/* Milestones Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  Project Milestones
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {projectData.milestones.map((milestone, index) => {
                  const progress = milestone.target > 0 ? (milestone.current / milestone.target) * 100 : 0

                  return (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                              milestone.status === "completed"
                                ? "bg-green-500 text-white"
                                : milestone.status === "in-progress"
                                  ? "bg-blue-500 text-white"
                                  : "bg-gray-200 text-gray-600"
                            }`}
                          >
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{milestone.title}</h4>
                            <p className="text-sm text-gray-600">{milestone.description}</p>
                          </div>
                        </div>
                        <Badge
                          variant={
                            milestone.status === "completed"
                              ? "default"
                              : milestone.status === "in-progress"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {milestone.status === "completed"
                            ? "Completed"
                            : milestone.status === "in-progress"
                              ? "In Progress"
                              : "Pending"}
                        </Badge>
                      </div>

                      <div className="ml-11 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">{milestone.current.toLocaleString()} SUI raised</span>
                          <span className="text-gray-600">{milestone.target.toLocaleString()} SUI target</span>
                        </div>
                        <Progress value={progress} className="h-2" />
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Funding Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Funding Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Main funding progress */}
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline">
                    <span className="text-2xl font-bold text-gray-900">
                      {projectData.currentFunding.toLocaleString()} SUI
                    </span>
                    <span className="text-sm text-gray-600">of {projectData.fundingGoal.toLocaleString()} SUI</span>
                  </div>
                  <Progress value={fundingPercentage} className="h-3" />
                  <div className="text-center">
                    <span className="text-lg font-semibold text-blue-600">{Math.round(fundingPercentage)}% funded</span>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Users className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="text-xl font-bold text-blue-600">{projectData.backers}</div>
                    <div className="text-xs text-gray-600">Backers</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Calendar className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="text-xl font-bold text-green-600">{projectData.daysLeft}</div>
                    <div className="text-xs text-gray-600">Days Left</div>
                  </div>
                </div>

                {/* Fund button */}
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white font-semibold py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Fund This Project
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  Project Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Average Contribution</span>
                  <span className="font-semibold">
                    {Math.round(projectData.currentFunding / projectData.backers)} SUI
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Funding Velocity</span>
                  <span className="font-semibold text-green-600">+12% this week</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Success Probability</span>
                  <span className="font-semibold text-blue-600">87%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
