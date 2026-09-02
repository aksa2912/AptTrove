import { CheckCircle2, XCircle, AlertTriangle, Sparkles } from "lucide-react";

export interface TeamBalanceProps {
  requiredSkills: string[];
  coveredSkills?: string[];
  missingSkills?: string[];
  className?: string;
}

export function TeamBalance({
  requiredSkills,
  coveredSkills = [],
  missingSkills = [],
  className = "",
}: TeamBalanceProps) {
  if (requiredSkills.length === 0) return null;

  const total = requiredSkills.length;
  const coveredCount = coveredSkills.length;
  const coveragePercent = Math.round((coveredCount / total) * 100);

  return (
    <div
      className={`p-6 rounded-3xl bg-white/80 dark:bg-[#16122a]/80 border border-[#BEB3FF]/40 backdrop-blur-md shadow-sm space-y-4 ${className}`}
    >
      <div className="flex items-center justify-between">
        <h4 className="text-xs font-bold uppercase tracking-wider text-[rgb(15_12_30)] dark:text-white flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#3788FE]" />
          <span>Team Skill Coverage Matrix</span>
        </h4>
        <span className="text-xs font-extrabold text-[#3788FE]">
          {coveredCount}/{total} Skills Covered ({coveragePercent}%)
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 rounded-full bg-[#BEB3FF]/20 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#3788FE] to-[#BEB3FF] rounded-full transition-all duration-500"
          style={{ width: `${coveragePercent}%` }}
        />
      </div>

      {/* Skills Coverage Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2">
        {requiredSkills.map((skill) => {
          const isCovered = coveredSkills.includes(skill);
          return (
            <div
              key={skill}
              className={`p-2 rounded-xl text-xs flex items-center justify-between border ${
                isCovered
                  ? "bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/40"
                  : "bg-rose-50 dark:bg-rose-950/20 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-800/40"
              }`}
            >
              <span className="font-semibold truncate">{skill}</span>
              {isCovered ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              ) : (
                <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
              )}
            </div>
          );
        })}
      </div>

      {/* Gap notice if any missing */}
      {missingSkills.length > 0 && (
        <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 flex items-start gap-2 text-xs text-amber-800 dark:text-amber-300">
          <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-amber-500 mt-0.5" />
          <span>
            <strong>Primary Gap:</strong> Your current team formation lacks {missingSkills.slice(0, 2).join(" & ")}. AptTrove will prioritize candidates who bring these aptitudes.
          </span>
        </div>
      )}
    </div>
  );
}

export default TeamBalance;
