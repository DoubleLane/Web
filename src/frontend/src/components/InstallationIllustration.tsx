import { useEffect, useState } from "react";

export default function InstallationIllustration() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 4);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto my-8 px-4">
      <div className="relative bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl p-8 overflow-hidden">
        <svg
          viewBox="0 0 700 250"
          className="w-full h-auto relative z-10"
          style={{ maxHeight: "300px" }}
        >
          {/* Terminal window */}
          <rect
            x="50"
            y="50"
            width="600"
            height="150"
            rx="8"
            fill="oklch(var(--card))"
            stroke="oklch(var(--border))"
            strokeWidth="2"
          />

          {/* Terminal header */}
          <rect
            x="50"
            y="50"
            width="600"
            height="30"
            rx="8"
            fill="oklch(var(--muted))"
          />
          <circle cx="70" cy="65" r="5" fill="#ff5f56" />
          <circle cx="90" cy="65" r="5" fill="#ffbd2e" />
          <circle cx="110" cy="65" r="5" fill="#27ca3f" />

          {/* Terminal content */}
          <text
            x="70"
            y="105"
            fontSize="12"
            fontFamily="monospace"
            fill="oklch(var(--foreground))"
          >
            $ git clone https://github.com/DoubleLane/SimpleBlockchain.git
          </text>

          {currentStep >= 1 && (
            <text
              x="70"
              y="125"
              fontSize="12"
              fontFamily="monospace"
              fill="oklch(var(--muted-foreground))"
            >
              Cloning into 'Simple Blockchain'...
            </text>
          )}

          {currentStep >= 2 && (
            <>
              <text
                x="70"
                y="145"
                fontSize="12"
                fontFamily="monospace"
                fill="oklch(var(--foreground))"
              >
                $ npm install
              </text>
              <text
                x="70"
                y="165"
                fontSize="12"
                fontFamily="monospace"
                fill="oklch(var(--muted-foreground))"
              >
                Installing dependencies...
              </text>
            </>
          )}

          {currentStep >= 3 && (
            <>
              <text
                x="70"
                y="185"
                fontSize="12"
                fontFamily="monospace"
                fill="oklch(var(--foreground))"
              >
                $ npm start
              </text>
              <text
                x="500"
                y="185"
                fontSize="12"
                fontFamily="monospace"
                fill="oklch(var(--primary))"
              >
                ✓ Ready!
              </text>
            </>
          )}

          {/* Progress indicator */}
          <g className="progress">
            {[0, 1, 2, 3].map((step) => (
              <circle
                key={step}
                cx={150 + step * 100}
                cy={220}
                r="8"
                fill={
                  currentStep >= step
                    ? "oklch(var(--primary))"
                    : "oklch(var(--muted))"
                }
                className="transition-colors duration-500"
              />
            ))}

            {/* Progress line */}
            <line
              x1="150"
              y1="220"
              x2={150 + currentStep * 100}
              y2="220"
              stroke="oklch(var(--primary))"
              strokeWidth="3"
              className="transition-all duration-500"
            />
          </g>

          {/* Animated cursor */}
          {currentStep < 3 && (
            <rect
              x="70"
              y={95 + currentStep * 20}
              width="2"
              height="12"
              fill="oklch(var(--primary))"
            >
              <animate
                attributeName="opacity"
                values="1;0;1"
                dur="1s"
                repeatCount="indefinite"
              />
            </rect>
          )}
        </svg>

        {/* Step labels */}
        <div className="flex justify-center mt-4 space-x-8 text-xs text-muted-foreground">
          <span className={currentStep >= 0 ? "text-primary font-medium" : ""}>
            Clone
          </span>
          <span className={currentStep >= 1 ? "text-primary font-medium" : ""}>
            Install
          </span>
          <span className={currentStep >= 2 ? "text-primary font-medium" : ""}>
            Dependencies
          </span>
          <span className={currentStep >= 3 ? "text-primary font-medium" : ""}>
            Start
          </span>
        </div>
      </div>
    </div>
  );
}
