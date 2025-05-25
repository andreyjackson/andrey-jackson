import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">404 - Page Not Found</h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Sorry, the page you are looking for doesn&apost exist or has been moved.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild>
              <Link href="/">Return Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
