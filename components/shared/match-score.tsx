import { Sparkles } from "lucide-react";

export interface MatchScoreProps {
  score: number; // 0–100
  breakdown?: {
    skillScore: number;
    timeScore: number;
    locationScore: number;
    teamFitScore: number;
  };
  size?: "sm" | "md" | "lg";
  showBreakdown?: boolean;
  className?: string;
}

export function MatchScore({
  score,
  breakdown,
  size = "md",
  showBreakdown = false,
  className = "",
}: MatchScoreProps) {
  const rounded = Math.round(score);

  // Determine ring dimensions
  const dimensions = {
    sm: { size: 40, strokeWidth: 3.5, fontSize: "text-xs font-bold" },
    md: { size: 56, strokeWidth: 4.5, fontSize: "text-sm font-extrabold" },
    lg: { size: 76, strokeWidth: 6, fontSize: "text-lg font-black" },
  }[size];

  const radius = (dimensions.size - dimensions.strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  // Score color grading
  const getGradient = () => {
    if (score >= 85) return { stroke: "url(#score-high)", textColor: "text-[#3788FE]" };
    if (score >= 65) return { stroke: "url(#score-med)", textColor: "text-emerald-500" };
    return { stroke: "url(#score-low)", textColor: "text-amber-500" };
  };

  const { stroke, textColor } = getGradient();

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <div className="relative inline-flex items-center justify-center">
        <svg
          width={dimensions.size}
          height={dimensions.size}
          className="transform -rotate-90"
        >
          <defs>
            <linearGradient id="score-high" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3788FE" />
              <stop offset="100%" stopColor="#BEB3FF" />
            </linearGradient>
            <linearGradient id="score-med" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#6EE7B7" />
            </linearGradient>
            <linearGradient id="score-low" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#FCD34D" />
            </linearGradient>
          </defs>

          {/* Background circle */}
          <circle
            cx={dimensions.size / 2}
            cy={dimensions.size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={dimensions.strokeWidth}
            className="text-[#BEB3FF]/25 dark:text-white/10 fill-transparent"
          />

          {/* Progress circle */}
          <circle
            cx={dimensions.size / 2}
            cy={dimensions.size / 2}
            r={radius}
            stroke={stroke}
            strokeWidth={dimensions.strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-700 ease-out fill-transparent"
          />
        </svg>

        {/* Inner score text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`${dimensions.fontSize} ${textColor} tracking-tight`}>
            {rounded}%
          </span>
        </div>
      </div>

      {/* Optional breakdown bars */}
      {showBreakdown && breakdown && (
        <div className="w-full space-y-2 mt-2 pt-2 border-t border-[#BEB3FF]/20 text-xs">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#3788FE]" /> Skill
            </span>
            <span className="font-semibold">{Math.round(breakdown.skillScore)}%</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-[#BEB3FF]/20 overflow-hidden">
            <div
              className="h-full bg-[#3788FE] rounded-full"
              style={{ width: `${breakdown.skillScore}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px]">
            <span className="text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#BEB3FF]" /> Time
            </span>
            <span className="font-semibold">{Math.round(breakdown.timeScore)}%</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-[#BEB3FF]/20 overflow-hidden">
            <div
              className="h-full bg-[#BEB3FF] rounded-full"
              style={{ width: `${breakdown.timeScore}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px]">
            <span className="text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#FFD7E0]" /> Location
            </span>
            <span className="font-semibold">{Math.round(breakdown.locationScore)}%</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-[#BEB3FF]/20 overflow-hidden">
            <div
              className="h-full bg-[#FFD7E0] rounded-full"
              style={{ width: `${breakdown.locationScore}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px]">
            <span className="text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400" /> Team Fit
            </span>
            <span className="font-semibold">{Math.round(breakdown.teamFitScore)}%</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-[#BEB3FF]/20 overflow-hidden">
            <div
              className="h-full bg-emerald-400 rounded-full"
              style={{ width: `${breakdown.teamFitScore}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default MatchScore;
