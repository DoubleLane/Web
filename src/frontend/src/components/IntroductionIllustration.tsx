import { useEffect, useState } from "react";

export default function IntroductionIllustration() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto my-8 px-4">
      <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-8 overflow-hidden">
        <svg
          viewBox="0 0 800 300"
          className="w-full h-auto relative z-10"
          style={{ maxHeight: "300px" }}
        >
          {/* Background grid */}
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="oklch(var(--border))"
                strokeWidth="1"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="800" height="300" fill="url(#grid)" />

          {/* Concept blocks */}
          <g className="concept-blocks">
            {/* Data Block */}
            <rect
              x="50"
              y="100"
              width="120"
              height="80"
              rx="12"
              fill={
                activeStep >= 0
                  ? "oklch(var(--primary))"
                  : "oklch(var(--muted))"
              }
              className="transition-all duration-500"
            />
            <text
              x="110"
              y="130"
              textAnchor="middle"
              fill="oklch(var(--primary-foreground))"
              fontSize="12"
              fontWeight="bold"
            >
              DATA
            </text>
            <text
              x="110"
              y="150"
              textAnchor="middle"
              fill="oklch(var(--primary-foreground))"
              fontSize="10"
            >
              Transactions
            </text>

            {/* Hash Block */}
            <rect
              x="220"
              y="100"
              width="120"
              height="80"
              rx="12"
              fill={
                activeStep >= 1
                  ? "oklch(var(--primary))"
                  : "oklch(var(--muted))"
              }
              className="transition-all duration-500"
            />
            <text
              x="280"
              y="130"
              textAnchor="middle"
              fill="oklch(var(--primary-foreground))"
              fontSize="12"
              fontWeight="bold"
            >
              HASH
            </text>
            <text
              x="280"
              y="150"
              textAnchor="middle"
              fill="oklch(var(--primary-foreground))"
              fontSize="10"
            >
              Cryptographic
            </text>

            {/* Chain Block */}
            <rect
              x="390"
              y="100"
              width="120"
              height="80"
              rx="12"
              fill={
                activeStep >= 2
                  ? "oklch(var(--primary))"
                  : "oklch(var(--muted))"
              }
              className="transition-all duration-500"
            />
            <text
              x="450"
              y="130"
              textAnchor="middle"
              fill="oklch(var(--primary-foreground))"
              fontSize="12"
              fontWeight="bold"
            >
              CHAIN
            </text>
            <text
              x="450"
              y="150"
              textAnchor="middle"
              fill="oklch(var(--primary-foreground))"
              fontSize="10"
            >
              Linked Blocks
            </text>

            {/* Network Block */}
            <rect
              x="560"
              y="100"
              width="120"
              height="80"
              rx="12"
              fill={
                activeStep >= 3
                  ? "oklch(var(--primary))"
                  : "oklch(var(--muted))"
              }
              className="transition-all duration-500"
            />
            <text
              x="620"
              y="130"
              textAnchor="middle"
              fill="oklch(var(--primary-foreground))"
              fontSize="12"
              fontWeight="bold"
            >
              NETWORK
            </text>
            <text
              x="620"
              y="150"
              textAnchor="middle"
              fill="oklch(var(--primary-foreground))"
              fontSize="10"
            >
              Distributed
            </text>
          </g>

          {/* Connecting arrows */}
          <g className="arrows">
            <path
              d="M 170 140 L 220 140"
              stroke="oklch(var(--primary))"
              strokeWidth="3"
              fill="none"
              markerEnd="url(#arrowhead)"
              opacity={activeStep >= 1 ? 1 : 0.3}
              className="transition-opacity duration-500"
            />
            <path
              d="M 340 140 L 390 140"
              stroke="oklch(var(--primary))"
              strokeWidth="3"
              fill="none"
              markerEnd="url(#arrowhead)"
              opacity={activeStep >= 2 ? 1 : 0.3}
              className="transition-opacity duration-500"
            />
            <path
              d="M 510 140 L 560 140"
              stroke="oklch(var(--primary))"
              strokeWidth="3"
              fill="none"
              markerEnd="url(#arrowhead)"
              opacity={activeStep >= 3 ? 1 : 0.3}
              className="transition-opacity duration-500"
            />
          </g>

          {/* Arrow marker */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="oklch(var(--primary))" />
            </marker>
          </defs>

          {/* Floating particles */}
          <g className="particles">
            <circle r="3" fill="oklch(var(--accent))" opacity="0.6">
              <animateMotion
                dur="8s"
                repeatCount="indefinite"
                path="M 100,50 Q 400,30 700,70 Q 400,90 100,50"
              />
            </circle>
            <circle r="2" fill="oklch(var(--secondary))" opacity="0.8">
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                begin="2s"
                path="M 150,250 Q 400,230 650,250 Q 400,270 150,250"
              />
            </circle>
          </g>
        </svg>

        {/* Step indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {[0, 1, 2, 3].map((step) => (
            <div
              key={step}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                activeStep >= step ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
