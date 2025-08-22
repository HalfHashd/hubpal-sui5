import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Shield, Users, Zap, ChevronRight } from "lucide-react"
import Link from "next/link"
import { CreateProjectModal } from "@/components/create-project-modal"

export default function LandingPage() {
  const featuredProjects = [
    {
      id: 1,
      name: "Renaissance Villa",
      description: "Luxury villa development with classical architecture and modern sustainability.",
      raised: 12500,
      target: 50000,
      image: "/luxury-villa.png",
    },
    {
      id: 2,
      name: "EcoTech Startup",
      description: "Revolutionary green technology solutions for sustainable urban living.",
      raised: 8750,
      target: 25000,
      image: "/green-technology-startup.png",
    },
    {
      id: 3,
      name: "Digital Art Gallery",
      description: "Immersive NFT gallery showcasing emerging digital artists worldwide.",
      raised: 18200,
      target: 35000,
      image: "/digital-art-gallery-nft.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-primary">HubPal</h1>
          </div>

          <div className="flex items-center gap-8">
            <Link href="/" className="text-primary font-medium">
              Home
            </Link>
            <Link href="/marketplace" className="text-muted-foreground hover:text-foreground transition-colors">
              Marketplace
            </Link>
            <Link href="/create-project" className="text-muted-foreground hover:text-foreground transition-colors">
              Create Project
            </Link>
          </div>

          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Connect Wallet</Button>
        </div>
      </nav>

      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 leading-tight">
            Build, Fund, and Track Projects on Sui
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
            The decentralized crowdfunding platform that connects visionaries with backers. Launch your project,
            discover innovations, and be part of the blockchain revolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/marketplace">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
                Explore Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <CreateProjectModal>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Start a Project
              </Button>
            </CreateProjectModal>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose HubPal?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built on Sui blockchain for security, transparency, and global accessibility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">Secure & Transparent</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Smart contracts on Sui ensure your funds are protected and all transactions are transparent and
                  verifiable.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl mb-2">Global Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Connect with backers and creators worldwide. Build relationships that extend beyond funding.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">Fast & Efficient</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Lightning-fast transactions and low fees powered by Sui's innovative blockchain technology.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">Discover innovative projects making a difference</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => {
              const progressPercentage = (project.raised / project.target) * 100

              return (
                <Card
                  key={project.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                    <CardDescription className="text-sm">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{progressPercentage.toFixed(1)}%</span>
                      </div>
                      <Progress value={progressPercentage} className="h-3" />
                      <div className="flex justify-between text-sm">
                        <span className="font-semibold text-accent">${project.raised.toLocaleString()} SUI</span>
                        <span className="text-muted-foreground">of ${project.target.toLocaleString()} SUI</span>
                      </div>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      View Project
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center">
            <Link href="/marketplace">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Launch Your Project?</h2>
          <p className="text-xl mb-10 opacity-90 leading-relaxed">
            Join thousands of creators who have successfully funded their dreams on HubPal. Start your journey today and
            turn your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CreateProjectModal>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CreateProjectModal>
            <Link href="/marketplace">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 bg-transparent"
              >
                Explore Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-muted/30 py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">HubPal</h3>
              <p className="text-muted-foreground">
                The future of crowdfunding on Sui blockchain. Secure, transparent, and global.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Platform</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/marketplace" className="hover:text-foreground transition-colors">
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link href="/create-project" className="hover:text-foreground transition-colors">
                    Create Project
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="hover:text-foreground transition-colors">
                    How It Works
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/help" className="hover:text-foreground transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="hover:text-foreground transition-colors">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/terms" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="hover:text-foreground transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center">
            <p className="text-muted-foreground">© 2024 HubPal. Built on the Sui blockchain. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
