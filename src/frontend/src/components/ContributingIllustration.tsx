import { useEffect, useState } from "react";

interface Block {
  id: number;
  x: number;
  y: number;
  connected: boolean;
  pulseDelay: number;
}

export default function BlockchainIllustration() {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [connectionProgress, setConnectionProgress] = useState(0);

  useEffect(() => {
    // Initialize blocks
    const initialBlocks: Block[] = [
      { id: 1, x: 50, y: 50, connected: false, pulseDelay: 0 },
      { id: 2, x: 200, y: 50, connected: false, pulseDelay: 0.5 },
      { id: 3, x: 350, y: 50, connected: false, pulseDelay: 1 },
      { id: 4, x: 500, y: 50, connected: false, pulseDelay: 1.5 },
      { id: 5, x: 125, y: 150, connected: false, pulseDelay: 2 },
      { id: 6, x: 275, y: 150, connected: false, pulseDelay: 2.5 },
      { id: 7, x: 425, y: 150, connected: false, pulseDelay: 3 },
    ];
    setBlocks(initialBlocks);

    // Animate connections
    const connectionInterval = setInterval(() => {
      setConnectionProgress((prev) => {
        const next = prev + 0.02;
        return next > 1 ? 0 : next;
      });
    }, 100);

    return () => clearInterval(connectionInterval);
  }, []);

  const getConnectionOpacity = (blockIndex: number) => {
    const threshold = blockIndex * 0.15;
    return Math.max(0, Math.min(1, (connectionProgress - threshold) * 3));
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12 px-4">
      <div className="relative bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8 overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(oklch(var(--border)) 1px, transparent 1px),
              linear-gradient(90deg, oklch(var(--border)) 1px, transparent 1px)
            `,
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        <svg
          viewBox="0 0 600 250"
          className="w-full h-auto relative z-10"
          style={{ maxHeight: "300px" }}
        >
          {/* Connection lines */}
          <g className="connections">
            {/* Horizontal connections */}
            <line
              x1="90"
              y1="50"
              x2="160"
              y2="50"
              stroke="oklch(var(--primary))"
              strokeWidth="3"
              opacity={getConnectionOpacity(0)}
              className="transition-opacity duration-300"
            />
            <line
              x1="240"
              y1="50"
              x2="310"
              y2="50"
              stroke="oklch(var(--primary))"
              strokeWidth="3"
              opacity={getConnectionOpacity(1)}
              className="transition-opacity duration-300"
            />
            <line
              x1="390"
              y1="50"
              x2="460"
              y2="50"
              stroke="oklch(var(--primary))"
              strokeWidth="3"
              opacity={getConnectionOpacity(2)}
              className="transition-opacity duration-300"
            />

            {/* Vertical connections */}
            <line
              x1="125"
              y1="90"
              x2="125"
              y2="110"
              stroke="oklch(var(--primary))"
              strokeWidth="3"
              opacity={getConnectionOpacity(3)}
              className="transition-opacity duration-300"
            />
            <line
              x1="275"
              y1="90"
              x2="275"
              y2="110"
              stroke="oklch(var(--primary))"
              strokeWidth="3"
              opacity={getConnectionOpacity(4)}
              className="transition-opacity duration-300"
            />
            <line
              x1="425"
              y1="90"
              x2="425"
              y2="110"
              stroke="oklch(var(--primary))"
              strokeWidth="3"
              opacity={getConnectionOpacity(5)}
              className="transition-opacity duration-300"
            />

            {/* Bottom horizontal connections */}
            <line
              x1="165"
              y1="150"
              x2="235"
              y2="150"
              stroke="oklch(var(--primary))"
              strokeWidth="3"
              opacity={getConnectionOpacity(6)}
              className="transition-opacity duration-300"
            />
            <line
              x1="315"
              y1="150"
              x2="385"
              y2="150"
              stroke="oklch(var(--primary))"
              strokeWidth="3"
              opacity={getConnectionOpacity(7)}
              className="transition-opacity duration-300"
            />
          </g>

          {/* Blocks */}
          {blocks.map((block, index) => (
            <g key={block.id}>
              {/* Block shadow */}
              <rect
                x={block.x - 18}
                y={block.y - 18}
                width="36"
                height="36"
                rx="8"
                fill="oklch(var(--primary))"
                opacity="0.2"
                transform="translate(2, 2)"
              />

              {/* Main block */}
              <rect
                x={block.x - 18}
                y={block.y - 18}
                width="36"
                height="36"
                rx="8"
                fill="oklch(var(--primary))"
                className="transition-all duration-300"
                style={{
                  animation: `blockPulse 3s ease-in-out infinite ${block.pulseDelay}s`,
                }}
              />

              {/* Block inner pattern */}
              <rect
                x={block.x - 12}
                y={block.y - 12}
                width="24"
                height="24"
                rx="4"
                fill="oklch(var(--primary-foreground))"
                opacity="0.8"
              />

              {/* Block center dot */}
              <circle
                cx={block.x}
                cy={block.y}
                r="3"
                fill="oklch(var(--primary))"
              />

              {/* Block number */}
              <text
                x={block.x}
                y={block.y + 2}
                textAnchor="middle"
                fontSize="10"
                fill="oklch(var(--primary-foreground))"
                fontWeight="bold"
              >
                {block.id}
              </text>
            </g>
          ))}

          {/* Data flow particles */}
          <g className="particles">
            <circle r="2" fill="oklch(var(--accent))" opacity="0.8">
              <animateMotion
                dur="4s"
                repeatCount="indefinite"
                path="M 90,50 L 160,50 L 240,50 L 310,50 L 390,50 L 460,50"
              />
            </circle>
            <circle r="2" fill="oklch(var(--accent))" opacity="0.6">
              <animateMotion
                dur="5s"
                repeatCount="indefinite"
                begin="1s"
                path="M 125,90 L 125,110 L 165,150 L 235,150 L 315,150 L 385,150"
              />
            </circle>
          </g>
        </svg>

        {/* Floating elements */}
        <div className="absolute top-4 right-4 opacity-30">
          <div
            className="w-2 h-2 bg-primary rounded-full animate-ping"
            style={{ animationDelay: "0s" }}
          />
        </div>
        <div className="absolute bottom-4 left-4 opacity-30">
          <div
            className="w-2 h-2 bg-accent rounded-full animate-ping"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="absolute top-1/2 right-8 opacity-30">
          <div
            className="w-2 h-2 bg-secondary rounded-full animate-ping"
            style={{ animationDelay: "2s" }}
          />
        </div>
      </div>
    </div>
  );
}
