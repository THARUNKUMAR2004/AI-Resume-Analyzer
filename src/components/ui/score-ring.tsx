import { cn, formatScore } from "@/lib/utils";

interface ScoreRingProps {
  score: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { dim: 56, stroke: 4, font: "text-sm" },
  md: { dim: 72, stroke: 5, font: "text-lg" },
  lg: { dim: 96, stroke: 6, font: "text-2xl" },
};

function getScoreColor(score: number): string {
  if (score >= 85) return "stroke-emerald-500";
  if (score >= 70) return "stroke-brand-500";
  if (score >= 50) return "stroke-amber-500";
  return "stroke-rose-500";
}

export function ScoreRing({ score, size = "md", className }: ScoreRingProps) {
  const { dim, stroke, font } = sizeMap[size];
  const radius = (dim - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className={cn("relative inline-flex", className)} style={{ width: dim, height: dim }}>
      <svg width={dim} height={dim} className="-rotate-90">
        <circle
          cx={dim / 2}
          cy={dim / 2}
          r={radius}
          fill="none"
          strokeWidth={stroke}
          className="stroke-slate-200 dark:stroke-white/10"
        />
        <circle
          cx={dim / 2}
          cy={dim / 2}
          r={radius}
          fill="none"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className={cn("transition-all duration-700", getScoreColor(score))}
        />
      </svg>
      <span
        className={cn(
          "absolute inset-0 flex items-center justify-center font-semibold tabular-nums",
          font
        )}
      >
        {formatScore(score)}
      </span>
    </div>
  );
}
