import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Terminal, CheckCircle } from "lucide-react";
import InstallationIllustration from "../components/InstallationIllustration";

export const Route = createFileRoute("/installation")({
  component: InstallationPage,
});

function InstallationPage() {
  const steps = [
    {
      number: 1,
      title: "Clone the repository",
      command: "git clone https://github.com/DoubleLane/SimpleBlockchain.git",
      description: "Download the Simple Blockchain source code from GitHub",
    },
    {
      number: 2,
      title: "Install dependencies",
      command: "npm install",
      description: "Install all required Node.js packages and dependencies",
    },
    {
      number: 3,
      title: "Run the application",
      command: "npm start",
      description:
        "Start the Simple Blockchain application and begin exploring",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Installation
          </h2>
          <p className="text-lg text-muted-foreground">
            Get Simple Blockchain up and running in just a few steps
          </p>
        </div>

        <InstallationIllustration />

        <div className="space-y-6 mt-8">
          {steps.map((step, index) => (
            <Card key={index} className="transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                  <span>{step.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                  <div className="flex items-center space-x-2">
                    <Terminal className="h-4 w-4 text-muted-foreground" />
                    <code>{step.command}</code>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <div>
                <h3 className="font-semibold text-green-800 dark:text-green-200">
                  Prerequisites
                </h3>
                <p className="text-green-700 dark:text-green-300 text-sm mt-1">
                  Make sure you have Node.js (v14 or higher) and npm installed
                  on your system before starting.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
