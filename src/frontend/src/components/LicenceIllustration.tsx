import { useEffect, useState } from "react";

export default function LicenseIllustration() {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 3);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto my-8 px-4">
      <div className="relative bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-amber-950/20 dark:to-yellow-950/20 rounded-2xl p-8 overflow-hidden">
        <svg
          viewBox="0 0 600 240"
          className="w-full h-auto relative z-10"
          style={{ maxHeight: "300px" }}
        >
          {/* MIT License document */}
          <rect
            x="200"
            y="60"
            width="200"
            height="120"
            rx="8"
            fill="oklch(var(--card))"
            stroke="oklch(var(--border))"
            strokeWidth="2"
          />

          {/* Document header */}
          <rect
            x="200"
            y="60"
            width="200"
            height="30"
            rx="8"
            fill="oklch(var(--primary))"
          />
          <text
            x="300"
            y="80"
            textAnchor="middle"
            fontSize="14"
            fontWeight="bold"
            fill="oklch(var(--primary-foreground))"
          >
            MIT LICENSE
          </text>

          {/* Document content lines */}
          <line
            x1="220"
            y1="110"
            x2="380"
            y2="110"
            stroke="oklch(var(--muted-foreground))"
            strokeWidth="2"
            opacity="0.5"
          />
          <line
            x1="220"
            y1="125"
            x2="360"
            y2="125"
            stroke="oklch(var(--muted-foreground))"
            strokeWidth="2"
            opacity="0.5"
          />
          <line
            x1="220"
            y1="140"
            x2="370"
            y2="140"
            stroke="oklch(var(--muted-foreground))"
            strokeWidth="2"
            opacity="0.5"
          />
          <line
            x1="220"
            y1="155"
            x2="340"
            y2="155"
            stroke="oklch(var(--muted-foreground))"
            strokeWidth="2"
            opacity="0.5"
          />

          {/* Permission icons around the document */}
          <g className="permissions">
            {/* Commercial Use */}
            <circle
              cx="100"
              cy="80"
              r={animationPhase === 0 ? "25" : "20"}
              fill="oklch(var(--chart-1))"
              opacity={animationPhase === 0 ? 1 : 0.7}
              className="transition-all duration-500"
            />
            <text
              x="100"
              y="85"
              textAnchor="middle"
              fontSize="10"
              fontWeight="bold"
              fill="white"
            >
              $
            </text>
            <text
              x="100"
              y="110"
              textAnchor="middle"
              fontSize="9"
              fill="oklch(var(--foreground))"
            >
              Commercial
            </text>

            {/* Modification */}
            <circle
              cx="500"
              cy="80"
              r={animationPhase === 1 ? "25" : "20"}
              fill="oklch(var(--chart-2))"
              opacity={animationPhase === 1 ? 1 : 0.7}
              className="transition-all duration-500"
            />
            <text
              x="500"
              y="85"
              textAnchor="middle"
              fontSize="10"
              fontWeight="bold"
              fill="white"
            >
              ✎
            </text>
            <text
              x="500"
              y="110"
              textAnchor="middle"
              fontSize="9"
              fill="oklch(var(--foreground))"
            >
              Modify
            </text>

            {/* Distribution */}
            <circle
              cx="100"
              cy="160"
              r={animationPhase === 2 ? "25" : "20"}
              fill="oklch(var(--chart-3))"
              opacity={animationPhase === 2 ? 1 : 0.7}
              className="transition-all duration-500"
            />
            <text
              x="100"
              y="165"
              textAnchor="middle"
              fontSize="10"
              fontWeight="bold"
              fill="white"
            >
              ↗
            </text>
            <text
              x="100"
              y="190"
              textAnchor="middle"
              fontSize="9"
              fill="oklch(var(--foreground))"
            >
              Distribute
            </text>

            {/* Private Use */}
            <circle
              cx="500"
              cy="160"
              r={animationPhase === 0 ? "25" : "20"}
              fill="oklch(var(--chart-4))"
              opacity={animationPhase === 0 ? 1 : 0.7}
              className="transition-all duration-500"
            />
            <text
              x="500"
              y="165"
              textAnchor="middle"
              fontSize="10"
              fontWeight="bold"
              fill="white"
            >
              🔒
            </text>
            <text
              x="500"
              y="190"
              textAnchor="middle"
              fontSize="9"
              fill="oklch(var(--foreground))"
            >
              Private
            </text>
          </g>

          {/* Connection lines */}
          <g className="connections" opacity="0.3">
            <line
              x1="125"
              y1="80"
              x2="200"
              y2="100"
              stroke="oklch(var(--primary))"
              strokeWidth="2"
            />
            <line
              x1="475"
              y1="80"
              x2="400"
              y2="100"
              stroke="oklch(var(--primary))"
              strokeWidth="2"
            />
            <line
              x1="125"
              y1="160"
              x2="200"
              y2="140"
              stroke="oklch(var(--primary))"
              strokeWidth="2"
            />
            <line
              x1="475"
              y1="160"
              x2="400"
              y2="140"
              stroke="oklch(var(--primary))"
              strokeWidth="2"
            />
          </g>

          {/* Animated particles representing freedom */}
          <g className="freedom-particles">
            {[0, 1, 2, 3, 4].map((i) => (
              <circle key={i} r="2" fill="oklch(var(--accent))" opacity="0.6">
                <animateMotion
                  dur={`${3 + i * 0.5}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.5}s`}
                  path={`M ${100 + i * 100},30 Q 300,10 ${
                    500 - i * 100
                  },30 Q 300,50 ${100 + i * 100},30`}
                />
              </circle>
            ))}
          </g>
        </svg>

        {/* License benefits */}
        <div className="text-center mt-4">
          <p className="text-sm text-muted-foreground">
            Open source freedom:{" "}
            <span className="font-semibold text-foreground">
              Use, Modify, Distribute
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
