import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight, Wallet } from "lucide-react"

export default function MarketplacePage() {
  const projects = [
    {
      id: 1,
      name: "Renaissance Villa",
      description:
        "A luxury villa development project combining classical architecture with modern sustainability features.",
      raised: 12500,
      target: 50000,
      snsName: "renaissanceVilla.hubpal.sui",
      image: "/luxury-villa.png",
    },
    {
      id: 2,
      name: "EcoTech Startup",
      description: "Revolutionary green technology solutions for sustainable urban living and energy efficiency.",
      raised: 8750,
      target: 25000,
      snsName: "ecotech.hubpal.sui",
      image: "/green-technology-startup.png",
    },
    {
      id: 3,
      name: "Digital Art Gallery",
      description: "Immersive NFT gallery space showcasing emerging digital artists from around the world.",
      raised: 18200,
      target: 35000,
      snsName: "artgallery.hubpal.sui",
      image: "/digital-art-gallery-nft.png",
    },
    {
      id: 4,
      name: "Ocean Cleanup Initiative",
      description: "Advanced marine debris collection system using autonomous underwater vehicles.",
      raised: 32000,
      target: 75000,
      snsName: "oceancleanup.hubpal.sui",
      image: "/ocean-cleanup-technology.png",
    },
    {
      id: 5,
      name: "Smart City Platform",
      description: "IoT-powered urban management system for traffic optimization and resource allocation.",
      raised: 45600,
      target: 100000,
      snsName: "smartcity.hubpal.sui",
      image: "/smart-city-iot-platform.png",
    },
    {
      id: 6,
      name: "Medical AI Research",
      description: "AI-driven diagnostic tools for early detection of rare diseases and personalized treatment.",
      raised: 28900,
      target: 60000,
      snsName: "medicalai.hubpal.sui",
      image: "/medical-ai-research-diagnostic.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Left: Back and Forward buttons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Go back</span>
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Go forward</span>
            </Button>
          </div>

          {/* Center: Navigation links */}
          <div className="flex items-center gap-8">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Home
            </Button>
            <Button variant="ghost" className="text-primary font-medium">
              Marketplace
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Create Project
            </Button>
          </div>

          {/* Right: Connect Wallet button */}
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Wallet className="h-4 w-4 mr-2" />
            Connect Wallet
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Build, Fund, and Track Projects on Sui
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Discover innovative projects, support creators, and be part of the future. Our decentralized crowdfunding
            platform connects visionaries with backers through the power of blockchain technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Explore Projects
            </Button>
            <Button size="lg" variant="outline">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">Featured Projects</h2>
            <Button variant="outline">View All</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => {
              const progressPercentage = (project.raised / project.target) * 100

              return (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{progressPercentage.toFixed(1)}%</span>
                      </div>
                      <Progress value={progressPercentage} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span className="font-semibold text-accent">${project.raised.toLocaleString()} SUI</span>
                        <span className="text-muted-foreground">of ${project.target.toLocaleString()} SUI</span>
                      </div>
                    </div>

                    <div className="bg-muted rounded-md p-3">
                      <p className="text-xs text-muted-foreground mb-1">SNS Address</p>
                      <code className="text-sm font-mono text-foreground break-all">{project.snsName}</code>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12 px-4 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2024 Sui Crowdfunding Platform. Built on the Sui blockchain.</p>
        </div>
      </footer>
    </div>
  )
}
