import { useEffect, useState } from "react";

export default function FeaturesIllustration() {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const features = [
    { name: "Block Creation", x: 100, y: 80, color: "oklch(var(--chart-1))" },
    { name: "Chain Validation", x: 300, y: 80, color: "oklch(var(--chart-2))" },
    { name: "Proof of Work", x: 500, y: 80, color: "oklch(var(--chart-3))" },
    { name: "Transactions", x: 100, y: 180, color: "oklch(var(--chart-4))" },
    { name: "Educational", x: 300, y: 180, color: "oklch(var(--chart-5))" },
    { name: "Easy to Use", x: 500, y: 180, color: "oklch(var(--primary))" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto my-8 px-4">
      <div className="relative bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/20 dark:to-pink-950/20 rounded-2xl p-8 overflow-hidden">
        <svg
          viewBox="0 0 600 260"
          className="w-full h-auto relative z-10"
          style={{ maxHeight: "300px" }}
        >
          {/* Feature nodes */}
          {features.map((feature, index) => (
            <g key={index}>
              {/* Feature circle */}
              <circle
                cx={feature.x}
                cy={feature.y}
                r={activeFeature === index ? "35" : "25"}
                fill={feature.color}
                opacity={activeFeature === index ? 1 : 0.6}
                className="transition-all duration-500"
              />

              {/* Feature icon (simplified) */}
              <circle
                cx={feature.x}
                cy={feature.y}
                r="8"
                fill="white"
                opacity="0.9"
              />

              {/* Feature label */}
              <text
                x={feature.x}
                y={feature.y + 50}
                textAnchor="middle"
                fontSize="12"
                fontWeight="bold"
                fill="oklch(var(--foreground))"
                opacity={activeFeature === index ? 1 : 0.7}
                className="transition-opacity duration-500"
              >
                {feature.name}
              </text>

              {/* Pulse effect for active feature */}
              {activeFeature === index && (
                <circle
                  cx={feature.x}
                  cy={feature.y}
                  r="25"
                  fill="none"
                  stroke={feature.color}
                  strokeWidth="2"
                  opacity="0.5"
                >
                  <animate
                    attributeName="r"
                    values="25;45;25"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.5;0;0.5"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          ))}

          {/* Connection lines */}
          <g className="connections" opacity="0.3">
            <line
              x1="100"
              y1="80"
              x2="300"
              y2="80"
              stroke="oklch(var(--primary))"
              strokeWidth="2"
            />
            <line
              x1="300"
              y1="80"
              x2="500"
              y2="80"
              stroke="oklch(var(--primary))"
              strokeWidth="2"
            />
            <line
              x1="100"
              y1="180"
              x2="300"
              y2="180"
              stroke="oklch(var(--primary))"
              strokeWidth="2"
            />
            <line
              x1="300"
              y1="180"
              x2="500"
              y2="180"
              stroke="oklch(var(--primary))"
              strokeWidth="2"
            />
            <line
              x1="100"
              y1="80"
              x2="100"
              y2="180"
              stroke="oklch(var(--primary))"
              strokeWidth="2"
            />
            <line
              x1="300"
              y1="80"
              x2="300"
              y2="180"
              stroke="oklch(var(--primary))"
              strokeWidth="2"
            />
            <line
              x1="500"
              y1="80"
              x2="500"
              y2="180"
              stroke="oklch(var(--primary))"
              strokeWidth="2"
            />
          </g>

          {/* Animated data flow */}
          <g className="data-flow">
            <circle r="3" fill="oklch(var(--accent))" opacity="0.8">
              <animateMotion
                dur="4s"
                repeatCount="indefinite"
                path="M 100,80 L 300,80 L 500,80 L 500,180 L 300,180 L 100,180 Z"
              />
            </circle>
          </g>
        </svg>

        {/* Feature indicator */}
        <div className="text-center mt-4">
          <p className="text-sm text-muted-foreground">
            Highlighting:{" "}
            <span className="font-semibold text-foreground">
              {features[activeFeature].name}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
