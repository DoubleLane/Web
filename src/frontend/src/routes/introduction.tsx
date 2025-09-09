import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book } from "lucide-react";
import IntroductionIllustration from "../components/IntroductionIllustration";

export const Route = createFileRoute("/introduction")({
  component: IntroductionPage,
});

function IntroductionPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Introduction
          </h2>
          <p className="text-lg text-muted-foreground">
            Understanding the fundamentals of blockchain technology
          </p>
        </div>

        <IntroductionIllustration />

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
                <Book className="h-4 w-4 text-primary" />
              </div>
              <span>What is Simple Blockchain?</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none text-foreground space-y-4">
              <p>
                Simple Blockchain is a basic blockchain implementation designed
                for educational purposes. It demonstrates core blockchain
                concepts such as blocks, chains, and proof of work in a clear
                and understandable way.
              </p>
              <p>
                This project was created to help students, developers, and
                blockchain enthusiasts learn how blockchain technology works
                from the ground up. By studying and experimenting with Simple
                Blockchain, you'll gain hands-on experience with:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Block structure and data organization</li>
                <li>Cryptographic hashing and security</li>
                <li>Chain validation and integrity</li>
                <li>Proof of work consensus mechanism</li>
                <li>Basic transaction processing</li>
                <li>Distributed ledger concepts</li>
              </ul>
              <p>
                Whether you're completely new to blockchain or looking to deepen
                your understanding, Simple Blockchain provides a solid
                foundation for exploring this revolutionary technology.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
