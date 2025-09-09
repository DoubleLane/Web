import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileText, Users, Globe } from "lucide-react";
import LicenseIllustration from "../components/LicenseIllustration";

export const Route = createFileRoute("/license")({
  component: LicensePage,
});

function LicensePage() {
  const permissions = [
    {
      icon: Users,
      title: "Commercial Use",
      description:
        "Use Simple Blockchain for commercial purposes and projects.",
    },
    {
      icon: FileText,
      title: "Modification",
      description: "Modify and adapt the code to suit your specific needs.",
    },
    {
      icon: Globe,
      title: "Distribution",
      description: "Distribute copies of the original or modified software.",
    },
    {
      icon: Shield,
      title: "Private Use",
      description: "Use the software for personal and private projects.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-foreground mb-4">License</h2>
          <p className="text-lg text-muted-foreground">
            Open source licensing information for Simple Blockchain
          </p>
        </div>

        <LicenseIllustration />

        <Card className="mt-8 mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
                <Shield className="h-4 w-4 text-primary" />
              </div>
              <span>MIT License</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              This project is licensed under the MIT License. This is a
              permissive license that allows you to use, modify, and distribute
              the software with minimal restrictions. The MIT License is one of
              the most popular open source licenses due to its simplicity and
              flexibility.
            </p>
            <div className="bg-muted rounded-lg p-4 text-sm">
              <p className="font-mono">
                Copyright (c) 2025 Simple Blockchain Project
              </p>
              <p className="mt-2 text-muted-foreground">
                Permission is hereby granted, free of charge, to any person
                obtaining a copy of this software and associated documentation
                files (the "Software"), to deal in the Software without
                restriction, including without limitation the rights to use,
                copy, modify, merge, publish, distribute, sublicense, and/or
                sell copies of the Software.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {permissions.map((permission, index) => (
            <Card key={index} className="transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-md bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                    <permission.icon className="h-4 w-4 text-green-600" />
                  </div>
                  <span>{permission.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {permission.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
              Disclaimer
            </h3>
            <p className="text-yellow-700 dark:text-yellow-300 text-sm">
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
              This educational project is provided for learning purposes and
              should not be used in production environments without proper
              security audits and modifications.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
