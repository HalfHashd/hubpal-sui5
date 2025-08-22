"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ChevronRight } from "lucide-react"

interface ProjectCardProps {
  projectName: string
  description: string
  fundsRaised: number
  fundingGoal: number
  suiAddress: string
  onViewProject?: () => void
}

export function ProjectCard({
  projectName,
  description,
  fundsRaised,
  fundingGoal,
  suiAddress,
  onViewProject,
}: ProjectCardProps) {
  const progressPercentage = (fundsRaised / fundingGoal) * 100

  return (
    <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">{projectName}</CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Progress</span>
            <span className="font-medium text-gray-900">{progressPercentage.toFixed(1)}%</span>
          </div>

          <Progress
            value={progressPercentage}
            className="h-3 bg-gray-100 [&>div]:bg-gradient-to-r [&>div]:from-blue-600 [&>div]:to-green-500"
          />

          <div className="flex justify-between text-sm">
            <span className="font-semibold text-green-600">${fundsRaised.toLocaleString()} SUI</span>
            <span className="text-gray-500">of ${fundingGoal.toLocaleString()} SUI</span>
          </div>
        </div>

        <div className="pt-2">
          <p className="text-xs text-gray-500 mb-1">Project Address:</p>
          <code className="text-xs font-mono bg-gray-50 px-2 py-1 rounded border text-gray-700 block">
            {suiAddress}
          </code>
        </div>

        <Button onClick={onViewProject} className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors">
          View Project
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}
