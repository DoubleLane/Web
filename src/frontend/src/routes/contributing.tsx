import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Users, Heart, GitPullRequest } from "lucide-react";
import ContributingIllustration from "../components/ContributingIllustration";

export const Route = createFileRoute("/contributing")({
  component: ContributingPage,
});

function ContributingPage() {
  const guidelines = [
    {
      icon: GitPullRequest,
      title: "Pull Requests",
      description:
        "Submit pull requests with clear descriptions and well-tested code changes.",
    },
    {
      icon: Github,
      title: "Issues",
      description:
        "Open issues for bugs, feature requests, or questions about the project.",
    },
    {
      icon: Users,
      title: "Code Review",
      description:
        "Participate in code reviews to help maintain code quality and share knowledge.",
    },
    {
      icon: Heart,
      title: "Documentation",
      description:
        "Help improve documentation, tutorials, and educational materials.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Contributing
          </h2>
          <p className="text-lg text-muted-foreground">
            Join our community and help make Simple Blockchain even better
          </p>
        </div>

        <ContributingIllustration />

        <Card className="mt-8 mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
                <Users className="h-4 w-4 text-primary" />
              </div>
              <span>Welcome Contributors!</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Contributions are welcome! Whether you're fixing bugs, adding
              features, improving documentation, or helping with educational
              content, your contributions help make Simple Blockchain a better
              learning resource for everyone. Please submit pull requests or
              open issues for any improvements or bugs.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guidelines.map((guideline, index) => (
            <Card key={index} className="transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
                    <guideline.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span>{guideline.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{guideline.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
              How to Contribute
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300 text-sm">
              <li>Fork the repository on GitHub</li>
              <li>Create a new branch for your feature or bug fix</li>
              <li>Make your changes and test thoroughly</li>
              <li>Submit a pull request with a clear description</li>
              <li>Participate in the code review process</li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
