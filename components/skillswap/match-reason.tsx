"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Sparkles, CheckCircle2, XCircle } from "lucide-react";
import { MatchReason as MatchReasonType } from "@/lib/types";

export interface MatchReasonProps {
  reasons: MatchReasonType[];
  matchedSkills?: {
    theyTeach: string[];
    youTeach: string[];
  };
  availabilityOverlap?: {
    hoursPerWeek: number;
    description: string;
  };
  distanceKm?: number;
  initialExpanded?: boolean;
  className?: string;
}

export function MatchReason({
  reasons,
  matchedSkills,
  availabilityOverlap,
  distanceKm,
  initialExpanded = false,
  className = "",
}: MatchReasonProps) {
  const [expanded, setExpanded] = useState(initialExpanded);

  return (
    <div
      className={`rounded-2xl border border-[#BEB3FF]/30 bg-gradient-to-r from-[#3788FE]/5 via-[#BEB3FF]/5 to-[#FFD7E0]/10 overflow-hidden ${className}`}
    >
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="w-full p-3 flex items-center justify-between text-xs font-bold text-[#3788FE] hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
      >
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Why this match?</span>
        </span>
        {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>

      {expanded && (
        <div className="p-3.5 pt-1 border-t border-[#BEB3FF]/20 space-y-2 text-xs animate-fade-in">
          {reasons.length > 0 ? (
            reasons.map((r, i) => (
              <div key={i} className="flex items-start gap-2">
                {r.positive ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                )}
                <span className="text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] leading-relaxed">
                  {r.description}
                </span>
              </div>
            ))
          ) : (
            <p className="text-[11px] text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
              This candidate matches your skill complementarity and local search radius.
            </p>
          )}

          {availabilityOverlap && (
            <div className="pt-2 border-t border-[#BEB3FF]/20 flex items-center justify-between text-[11px] text-[#3788FE] font-semibold">
              <span>Schedule Overlap:</span>
              <span>{availabilityOverlap.description} ({availabilityOverlap.hoursPerWeek} hrs/week)</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MatchReason;
