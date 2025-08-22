import {
  ArrowLeft,
  ChevronRight,
  Building2,
  TrendingUp,
  Clock,
  CheckCircle2,
  PlayCircle,
  BookOpen,
  BarChart3,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export default function RenaissanceVillaDashboard() {
  const milestones = [
    {
      id: 1,
      title: "Land Acquisition",
      snsName: "land.renaissanceVilla.hubpal.sui",
      cost: 15000,
      valueCreated: 30000,
      status: "Completed",
      progress: 100,
      statusColor: "bg-green-500",
    },
    {
      id: 2,
      title: "Foundation & Framing",
      snsName: "foundation.renaissanceVilla.hubpal.sui",
      cost: 15000,
      valueCreated: 30000,
      status: "In Progress",
      progress: 65,
      statusColor: "bg-blue-500",
    },
    {
      id: 3,
      title: "Interior & Finishing",
      snsName: "interior.renaissanceVilla.hubpal.sui",
      cost: 20000,
      valueCreated: 45000,
      status: "Not Started",
      progress: 0,
      statusColor: "bg-gray-400",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                <ArrowLeft className="h-5 w-5 text-slate-600" />
              </Link>
              <div className="flex items-center space-x-2 text-sm text-slate-500">
                <span>Projects</span>
                <ChevronRight className="h-4 w-4" />
                <span className="text-slate-900 font-medium">Renaissance Villa</span>
              </div>
            </div>
            <Button variant="outline" className="text-slate-600 border-slate-300 bg-transparent">
              Share Project
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Project Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <Building2 className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-slate-900">Renaissance Villa</h1>
          </div>
          <p className="text-slate-600 font-mono text-sm bg-slate-100 px-3 py-1 rounded-md inline-block">
            renaissanceVilla.hubpal.sui
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-slate-600">Total Funding Goal</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-slate-900">$50,000</div>
                  <p className="text-xs text-slate-500 mt-1">SUI Network</p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-slate-600">Funds Raised</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">$12,500</div>
                  <div className="flex items-center mt-2">
                    <Progress value={25} className="flex-1 h-2" />
                    <span className="text-xs text-slate-500 ml-2">25%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-slate-600">Estimated Final Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-accent">$175,000</div>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="h-4 w-4 text-accent mr-1" />
                    <span className="text-xs text-accent">250% ROI</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Project Milestones */}
            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-900">Project Milestones</CardTitle>
                <p className="text-sm text-slate-600">Track progress and fund individual project phases</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={milestone.id} className="relative">
                    {/* Timeline connector */}
                    {index < milestones.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-16 bg-slate-200"></div>
                    )}

                    <div className="flex items-start space-x-4">
                      {/* Status indicator */}
                      <div className="flex-shrink-0 mt-1">
                        <div className={`w-3 h-3 rounded-full ${milestone.statusColor}`}></div>
                      </div>

                      {/* Milestone content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-slate-900">
                            {milestone.id}. {milestone.title}
                          </h3>
                          <Badge
                            variant={
                              milestone.status === "Completed"
                                ? "default"
                                : milestone.status === "In Progress"
                                  ? "secondary"
                                  : "outline"
                            }
                            className={
                              milestone.status === "Completed"
                                ? "bg-green-100 text-green-800 border-green-200"
                                : milestone.status === "In Progress"
                                  ? "bg-blue-100 text-blue-800 border-blue-200"
                                  : "bg-slate-100 text-slate-600 border-slate-200"
                            }
                          >
                            {milestone.status === "Completed" && <CheckCircle2 className="h-3 w-3 mr-1" />}
                            {milestone.status === "In Progress" && <PlayCircle className="h-3 w-3 mr-1" />}
                            {milestone.status === "Not Started" && <Clock className="h-3 w-3 mr-1" />}
                            {milestone.status}
                          </Badge>
                        </div>

                        <p className="text-sm text-slate-600 font-mono mb-3 bg-slate-50 px-2 py-1 rounded">
                          {milestone.snsName}
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-xs text-slate-500 mb-1">Cost</p>
                            <p className="text-sm font-semibold text-slate-900">
                              ${milestone.cost.toLocaleString()} SUI
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500 mb-1">Value Created</p>
                            <p className="text-sm font-semibold text-accent">
                              ${milestone.valueCreated.toLocaleString()} SUI
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex-1 mr-4">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs text-slate-500">Funding Progress</span>
                              <span className="text-xs text-slate-600">{milestone.progress}%</span>
                            </div>
                            <Progress value={milestone.progress} className="h-2" />
                          </div>
                          <Button
                            size="sm"
                            disabled={milestone.status === "Completed"}
                            className="bg-primary hover:bg-primary/90"
                          >
                            {milestone.status === "Completed" ? "Funded" : "Fund This Milestone"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-900">Project Tools</CardTitle>
                <p className="text-sm text-slate-600">Manage and analyze your project</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start text-left h-auto p-4 border-slate-200 hover:bg-slate-50 bg-transparent"
                  disabled
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-900">QuickBooks Integration</p>
                      <p className="text-xs text-slate-500">Coming Soon</p>
                    </div>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start text-left h-auto p-4 border-slate-200 hover:bg-slate-50 bg-transparent"
                  disabled
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <BarChart3 className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-900">Revenue Dashboard</p>
                      <p className="text-xs text-slate-500">Coming Soon</p>
                    </div>
                  </div>
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-900">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Total Backers</span>
                  <span className="text-sm font-semibold text-slate-900">47</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Days Remaining</span>
                  <span className="text-sm font-semibold text-slate-900">23</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Completion</span>
                  <span className="text-sm font-semibold text-accent">33%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
