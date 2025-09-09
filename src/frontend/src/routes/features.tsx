import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Link, Cpu, Database, Code } from "lucide-react";
import FeaturesIllustration from "../components/FeaturesIllustration";

export const Route = createFileRoute("/features")({
  component: FeaturesPage,
});

function FeaturesPage() {
  const features = [
    {
      icon: Database,
      title: "Block Creation",
      description:
        "Create and manage blockchain blocks with proper data structure and validation.",
    },
    {
      icon: Link,
      title: "Chain Validation",
      description:
        "Ensure blockchain integrity through comprehensive chain validation mechanisms.",
    },
    {
      icon: Cpu,
      title: "Proof of Work",
      description:
        "Implement proof of work consensus algorithm for secure block mining.",
    },
    {
      icon: Shield,
      title: "Simple Transaction System",
      description:
        "Handle basic transactions with cryptographic security and validation.",
    },
    {
      icon: Code,
      title: "Educational Focus",
      description:
        "Clean, well-documented code designed specifically for learning purposes.",
    },
    {
      icon: Zap,
      title: "Easy to Understand",
      description:
        "Simplified implementation that makes complex concepts accessible to beginners.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-foreground mb-4">Features</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive blockchain functionality for educational exploration
          </p>
        </div>

        <FeaturesIllustration />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {features.map((feature, index) => (
            <Card key={index} className="transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span>{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
