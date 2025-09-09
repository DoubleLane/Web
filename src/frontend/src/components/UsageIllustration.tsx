import { useEffect, useState } from "react";

export default function UsageIllustration() {
  const [activeDemo, setActiveDemo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const demos = [
    { title: "Create Block", color: "oklch(var(--chart-1))" },
    { title: "Validate Chain", color: "oklch(var(--chart-2))" },
    { title: "Mine Block", color: "oklch(var(--chart-3))" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto my-8 px-4">
      <div className="relative bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-950/20 dark:to-red-950/20 rounded-2xl p-8 overflow-hidden">
        <svg
          viewBox="0 0 600 280"
          className="w-full h-auto relative z-10"
          style={{ maxHeight: "300px" }}
        >
          {/* Code editor window */}
          <rect
            x="50"
            y="40"
            width="500"
            height="180"
            rx="8"
            fill="oklch(var(--card))"
            stroke="oklch(var(--border))"
            strokeWidth="2"
          />

          {/* Editor header */}
          <rect
            x="50"
            y="40"
            width="500"
            height="25"
            rx="8"
            fill="oklch(var(--muted))"
          />
          <circle cx="65" cy="52" r="3" fill="#ff5f56" />
          <circle cx="78" cy="52" r="3" fill="#ffbd2e" />
          <circle cx="91" cy="52" r="3" fill="#27ca3f" />
          <text
            x="110"
            y="57"
            fontSize="10"
            fill="oklch(var(--muted-foreground))"
          >
            SimpleBlockchain Demo
          </text>

          {/* Code content based on active demo */}
          {activeDemo === 0 && (
            <g className="code-content">
              <text
                x="70"
                y="85"
                fontSize="11"
                fontFamily="monospace"
                fill="oklch(var(--primary))"
              >
                // Creating a new block
              </text>
              <text
                x="70"
                y="105"
                fontSize="11"
                fontFamily="monospace"
                fill="oklch(var(--foreground))"
              >
                blockchain.addBlock({"{"}
              </text>
              <text
                x="90"
                y="125"
                fontSize="11"
                fontFamily="monospace"
                fill="oklch(var(--foreground))"
              >
                data: "Transaction data",
              </text>
              <text
                x="90"
                y="145"
                fontSize="11"
                fontFamily="monospace"
                fill="oklch(var(--foreground))"
              >
                timestamp: Date.now()
              </text>
              <text
                x="70"
                y="165"
                fontSize="11"
                fontFamily="monospace"
                fill="oklch(var(--foreground))"
              >
                {"});"}
              </text>
              <text
                x="70"
                y="185"
                fontSize="11"
                fontFamily="monospace"
                fill="oklch(var(--accent))"
              >
                ✓ Block created successfully
              </text>
            </g>
          )}

          {activeDemo === 1 && (
            <g className="code-content">
              <text
                x="70"
                y="85"
                fontSize="11"
                fontFamily="monospace"
                fill="oklch(var(--primary))"
              >
                // Validating the blockchain
              </text>
              <text
                x="70"
                y="105"
                fontSize="11"
                fontFamily="monospace"
                fill="oklch(var(--foreground))"
              >
                if (blockchain.isChainValid()) {"{"}
              </text>
              <text
                x="90"
                y="125"
                fontSize="11"
                fontFamily="monospace"
                fill="oklch(var(--foreground))"
              >
                console.log("Valid!");
              </text>
              <text
                x="70"
                y="145"
                fontSize="11"
                fontFamily="monospace"
                fill="oklch(var(--foreground))"
              >
                {"} else {"}
              </text>
              <text
                x="90"
                y="165"
                fontSize="11"
                fontFamily="monospace"
                fill="oklch(var(--foreground))"
              >
                console.log("Invalid!");
              </text>
              <text
                x="70"
                y="185"
                fontSize="11"
                fontFamily="monospace"
                fill="oklch(var(--foreground))"
              >
                {"}"}
              </text>
              <text
                x="70"
                y="205"
                fontSize="11"
                fontFamily="monospace"
                fill="oklch(var(--accent))"
              >
                ✓ Blockchain is valid!
              </text>
            </g>
          )}

          {activeDemo === 2 && (
            <g className="code-content">
              <text
                x="70"
                y="85"
                fontSize="11"
                fontFamily="monospace"
                fill="oklch(var(--primary))"
              >
                // Mining a new block
              </text>
              <text
                x="70"
                y="105"
                fontSize="11"
                fontFamily="monospace"
                fill="oklch(var(--foreground))"
              >
                const block = blockchain.mineBlock(
              </text>
              <text
                x="90"
                y="125"
                fontSize="11"
                fontFamily="monospace"
                fill="oklch(var(--foreground))"
              >
                transactionData,
              </text>
              <text
                x="90"
                y="145"
                fontSize="11"
                fontFamily="monospace"
                fill="oklch(var(--foreground))"
              >
                difficulty
              </text>
              <text
                x="70"
                y="165"
                fontSize="11"
                fontFamily="monospace"
                fill="oklch(var(--foreground))"
              >
                );
              </text>
              <text
                x="70"
                y="185"
                fontSize="11"
                fontFamily="monospace"
                fill="oklch(var(--foreground))"
              >
                console.log(block.hash);
              </text>
              <text
                x="70"
                y="205"
                fontSize="11"
                fontFamily="monospace"
                fill="oklch(var(--accent))"
              >
                ✓ Block mined: 0x4a2f...
              </text>
            </g>
          )}

          {/* Animated cursor */}
          <rect
            x="70"
            y={195 + activeDemo * 5}
            width="2"
            height="10"
            fill="oklch(var(--primary))"
          >
            <animate
              attributeName="opacity"
              values="1;0;1"
              dur="1s"
              repeatCount="indefinite"
            />
          </rect>

          {/* Output visualization */}
          <g className="output-viz">
            <rect
              x="400"
              y="100"
              width="120"
              height="60"
              rx="8"
              fill={demos[activeDemo].color}
              opacity="0.2"
            />
            <text
              x="460"
              y="125"
              textAnchor="middle"
              fontSize="10"
              fontWeight="bold"
              fill="oklch(var(--foreground))"
            >
              OUTPUT
            </text>
            <text
              x="460"
              y="145"
              textAnchor="middle"
              fontSize="9"
              fill="oklch(var(--muted-foreground))"
            >
              {demos[activeDemo].title}
            </text>
          </g>
        </svg>

        {/* Demo selector */}
        <div className="flex justify-center mt-4 space-x-4">
          {demos.map((demo, index) => (
            <div
              key={index}
              className={`px-3 py-1 rounded-full text-xs transition-colors ${
                activeDemo === index
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {demo.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
