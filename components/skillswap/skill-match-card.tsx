"use client";

import { useState } from "react";
import { SkillSwapMatch, ConnectionStatus } from "@/lib/types";
import { SkillChip } from "@/components/shared/skill-chip";
import { MatchScore } from "@/components/shared/match-score";
import { DistanceBadge } from "@/components/shared/distance-badge";
import { AvailabilityBadge } from "./availability-badge";
import { MatchReason } from "./match-reason";
import { getInitials } from "@/lib/utils/cn";
import { UserCheck, Clock, ArrowRight, Sparkles, Send } from "lucide-react";

export interface SkillMatchCardProps {
  match: SkillSwapMatch;
  onConnect?: (matchId: string) => void;
  onViewProfile?: (userId: string) => void;
  className?: string;
}

export function SkillMatchCard({
  match,
  onConnect,
  onViewProfile,
  className = "",
}: SkillMatchCardProps) {
  const [status, setStatus] = useState<ConnectionStatus>(match.connectionStatus || "none");
  const { matchedUser, score, reasons, matchedSkills, availabilityOverlap, distanceKm } = match;

  const handleConnect = () => {
    setStatus("pending_sent");
    onConnect?.(match.id);
  };

  return (
    <div
      className={`p-6 rounded-3xl bg-white/85 dark:bg-[#16122a]/85 border border-[#BEB3FF]/40 backdrop-blur-md shadow-sm hover:shadow-xl hover:border-[#3788FE]/60 transition-all duration-200 space-y-5 ${className}`}
    >
      {/* Top Profile + Score Row */}
      <div className="flex items-start justify-between gap-4">
        {/* User Info */}
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#3788FE] via-[#BEB3FF] to-[#FFD7E0] p-0.5 shadow-sm shrink-0">
            <div className="w-full h-full bg-[#FFF5F3] dark:bg-[#120f23] rounded-[14px] flex items-center justify-center font-black text-sm text-[#3788FE]">
              {getInitials(matchedUser.name)}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-[rgb(15_12_30)] dark:text-white">
                {matchedUser.name}
              </h3>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#BEB3FF]/20 text-[#5446a8] dark:text-[#BEB3FF]">
                {matchedUser.year} Year
              </span>
            </div>
            <p className="text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
              {matchedUser.branch} · {matchedUser.college}
            </p>
          </div>
        </div>

        {/* Match Score */}
        <div className="shrink-0 flex flex-col items-center">
          <MatchScore score={score.overall} breakdown={score} size="md" />
        </div>
      </div>

      {/* Two-Way Complement Skills Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-[#BEB3FF]/25">
        {/* They Teach You */}
        <div className="space-y-1.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#3788FE]">
            They Teach You:
          </span>
          <div className="flex flex-wrap gap-1">
            {matchedSkills.theyTeach.map((s) => (
              <SkillChip key={s} skill={s} variant="teach" size="sm" />
            ))}
          </div>
        </div>

        {/* You Teach Them */}
        <div className="space-y-1.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#5446a8] dark:text-[#BEB3FF]">
            You Teach Them:
          </span>
          <div className="flex flex-wrap gap-1">
            {matchedSkills.youTeach.map((s) => (
              <SkillChip key={s} skill={s} variant="learn" size="sm" />
            ))}
          </div>
        </div>
      </div>

      {/* Badges Row: Distance & Availability */}
      <div className="flex flex-wrap items-center gap-2">
        <DistanceBadge distanceKm={distanceKm} size="sm" />
        <AvailabilityBadge
          description={availabilityOverlap.description}
          hoursPerWeek={availabilityOverlap.hoursPerWeek}
          hasOverlap={true}
        />
      </div>

      {/* Why This Match? Expandable Panel */}
      <MatchReason
        reasons={reasons}
        matchedSkills={matchedSkills}
        availabilityOverlap={availabilityOverlap}
        distanceKm={distanceKm}
      />

      {/* Bottom Action Buttons */}
      <div className="pt-2 flex items-center justify-between gap-3 border-t border-[#BEB3FF]/20">
        <button
          type="button"
          onClick={() => onViewProfile?.(matchedUser.id)}
          className="text-xs font-semibold text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] hover:text-[#3788FE] transition-colors cursor-pointer"
        >
          View Full Identity
        </button>

        {status === "none" && (
          <button
            type="button"
            onClick={handleConnect}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#3788FE] hover:bg-[#2573e8] text-white text-xs font-bold shadow-md shadow-[#3788FE]/25 hover:shadow-lg transition-all cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Send Swap Request</span>
          </button>
        )}

        {status === "pending_sent" && (
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#BEB3FF]/30 text-[#5446a8] dark:text-[#BEB3FF] text-xs font-semibold border border-[#BEB3FF]/40">
            <Clock className="w-3.5 h-3.5" />
            <span>Request Pending</span>
          </span>
        )}

        {status === "connected" && (
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold border border-emerald-500/30">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Connected</span>
          </span>
        )}
      </div>
    </div>
  );
}

export default SkillMatchCard;
