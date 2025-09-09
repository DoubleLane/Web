import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Play, Zap } from "lucide-react";
import UsageIllustration from "../components/UsageIllustration";

export const Route = createFileRoute("/usage")({
  component: UsagePage,
});

function UsagePage() {
  const examples = [
    {
      title: "Create a New Block",
      description: "Add a new block to the blockchain with transaction data",
      code: `blockchain.addBlock({
  data: "Transaction data here",
  timestamp: Date.now()
});`,
    },
    {
      title: "Validate the Chain",
      description: "Check the integrity of the entire blockchain",
      code: `if (blockchain.isChainValid()) {
  console.log("Blockchain is valid!");
} else {
  console.log("Blockchain has been tampered with!");
}`,
    },
    {
      title: "Mine a Block",
      description: "Use proof of work to mine a new block",
      code: `const newBlock = blockchain.mineBlock(
  transactionData,
  difficulty
);
console.log("Block mined:", newBlock.hash);`,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-foreground mb-4">Usage</h2>
          <p className="text-lg text-muted-foreground">
            Learn how to interact with Simple Blockchain through practical
            examples
          </p>
        </div>

        <UsageIllustration />

        <Card className="mt-8 mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
                <Play className="h-4 w-4 text-primary" />
              </div>
              <span>Getting Started</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Use the provided CLI to interact with the blockchain. Add blocks,
              validate the chain, and experiment with proof of work algorithms.
              The simple interface makes it easy to understand how each
              component works together.
            </p>
            <div className="bg-muted rounded-lg p-4 font-mono text-sm">
              <code>node simpleblockchain.js --help</code>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {examples.map((example, index) => (
            <Card key={index} className="transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
                    <Code className="h-4 w-4 text-primary" />
                  </div>
                  <span>{example.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {example.description}
                </p>
                <div className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre>
                    <code>{example.code}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3">
              <Zap className="h-6 w-6 text-blue-600" />
              <div>
                <h3 className="font-semibold text-blue-800 dark:text-blue-200">
                  Tip
                </h3>
                <p className="text-blue-700 dark:text-blue-300 text-sm mt-1">
                  Start with small examples and gradually increase complexity as
                  you become more familiar with the concepts.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
