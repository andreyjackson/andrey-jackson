import Link from "next/link"
import { Github, Instagram, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="w-full border-t py-6 bg-muted/40">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Andrey Jackson Acioli Alencar. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Button size="icon" variant="ghost" asChild>
            <Link href="https://github.com/andreyjackson" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button size="icon" variant="ghost" asChild>
            <Link href="https://linkedin.com/in/andrey-jackson" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button size="icon" variant="ghost" asChild>
            <Link href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}
