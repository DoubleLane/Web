import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Download, Github } from "lucide-react";
import BlockchainIllustration from "../components/BlockchainIllustration";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section with Descriptive Paragraph */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Simple Blockchain
          </h2>
          <div className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto space-y-4">
            <p>
              Simple Blockchain is an educational blockchain implementation
              designed to demystify the core concepts of blockchain technology
              through hands-on learning. This project serves as a comprehensive
              learning tool for students, developers, and blockchain enthusiasts
              who want to understand how blockchains work from the ground up.
            </p>
            <p>
              Built with simplicity and clarity in mind, Simple Blockchain
              demonstrates essential blockchain concepts including block
              creation, chain validation, proof of work algorithms, and basic
              transaction systems. Whether you're new to blockchain development
              or looking to deepen your understanding of distributed ledger
              technology, this project provides a solid foundation for exploring
              the fascinating world of decentralized systems.
            </p>
          </div>

          {/* Blockchain Illustration */}
          <BlockchainIllustration />

          <div className="mt-8">
            <Button
              size="lg"
              className="mr-4"
              onClick={() => setIsDownloadModalOpen(true)}
            >
              <Download className="mr-2 h-5 w-5" />
              Download
            </Button>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Dive into the world of blockchain development with Simple
                Blockchain. Perfect for students, developers, and anyone curious
                about how blockchains work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  onClick={() =>
                    window.open(
                      "https://github.com/DoubleLane/SimpleBlockchain",
                      "_blank"
                    )
                  }
                >
                  <Github className="mr-2 h-4 w-4" />
                  Simple Blockchain
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    window.open(
                      "https://github.com/DoubleLane/SimpleBlockchainGUI",
                      "_blank"
                    )
                  }
                >
                  <Github className="mr-2 h-4 w-4" />
                  Blockchain GUI
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Download Modal */}
      <Dialog open={isDownloadModalOpen} onOpenChange={setIsDownloadModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Download Simple Blockchain</DialogTitle>
            <DialogDescription>To be implemented soon</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
