import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <Code className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  Simple Blockchain
                </h1>
                <p className="text-sm text-muted-foreground">
                  Educational Blockchain Implementation
                </p>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap gap-2 lg:gap-4">
              <Link
                to="/"
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                activeProps={{ className: "text-foreground bg-accent" }}
              >
                Home
              </Link>
              <Link
                to="/introduction"
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                activeProps={{ className: "text-foreground bg-accent" }}
              >
                Introduction
              </Link>
              <Link
                to="/features"
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                activeProps={{ className: "text-foreground bg-accent" }}
              >
                Features
              </Link>
              <Link
                to="/installation"
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                activeProps={{ className: "text-foreground bg-accent" }}
              >
                Installation
              </Link>
              <Link
                to="/usage"
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                activeProps={{ className: "text-foreground bg-accent" }}
              >
                Usage
              </Link>
              <Link
                to="/contributing"
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                activeProps={{ className: "text-foreground bg-accent" }}
              >
                Contributing
              </Link>
              <Link
                to="/license"
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                activeProps={{ className: "text-foreground bg-accent" }}
              >
                License
              </Link>
            </nav>

            <Badge
              variant="secondary"
              className="hidden sm:inline-flex lg:ml-4"
            >
              v1.0.0
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Contact Section */}
      <div className="border-t bg-card/50 mt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Contact: markovujo01@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
});
