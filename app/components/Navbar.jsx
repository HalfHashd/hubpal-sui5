"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${className || ""}`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="p-2">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="p-2">
            <ChevronRight className="h-4 w-4" />
          </Button>
          <div className="ml-2">
            <Link href="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
              HubPal
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <Link
            href="/"
            className={`font-medium transition-colors ${
              isActive("/")
                ? "text-primary border-b-2 border-primary pb-1"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            href="/marketplace"
            className={`font-medium transition-colors ${
              isActive("/marketplace")
                ? "text-primary border-b-2 border-primary pb-1"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Marketplace
          </Link>
          <Link
            href="/create-project"
            className={`font-medium transition-colors ${
              isActive("/create-project")
                ? "text-primary border-b-2 border-primary pb-1"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Create Project
          </Link>
        </div>

        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Connect Wallet</Button>
      </div>
    </nav>
  )
}
