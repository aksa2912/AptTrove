"use client";

import { useState } from "react";
import { TeamCandidate, ConnectionStatus } from "@/lib/types";
import { MatchScore } from "@/components/shared/match-score";
import { DistanceBadge } from "@/components/shared/distance-badge";
import { SkillChip } from "@/components/shared/skill-chip";
import { MatchReason } from "@/components/skillswap/match-reason";
import { getInitials } from "@/lib/utils/cn";
import { Send, Clock, UserCheck, Sparkles } from "lucide-react";

export interface TeamMemberCardProps {
  candidate: TeamCandidate;
  onConnect?: (candidateId: string) => void;
  onViewProfile?: (userId: string) => void;
  className?: string;
}

export function TeamMemberCard({
  candidate,
  onConnect,
  onViewProfile,
  className = "",
}: TeamMemberCardProps) {
  const [status, setStatus] = useState<ConnectionStatus>(candidate.connectionStatus || "none");
  const { profile, score, reasons, recommendedRole, skillContribution, filledGaps, availabilityFit, distanceKm } = candidate;

  const handleConnect = () => {
    setStatus("pending_sent");
    onConnect?.(candidate.id);
  };

  return (
    <div
      className={`p-6 rounded-3xl bg-white/85 dark:bg-[#16122a]/85 border border-[#BEB3FF]/40 backdrop-blur-md shadow-sm hover:shadow-xl hover:border-[#3788FE]/60 transition-all duration-200 space-y-5 ${className}`}
    >
      {/* Top Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#3788FE] via-[#BEB3FF] to-[#FFD7E0] p-0.5 shadow-sm shrink-0">
            <div className="w-full h-full bg-[#FFF5F3] dark:bg-[#120f23] rounded-[14px] flex items-center justify-center font-black text-sm text-[#3788FE]">
              {getInitials(profile.name)}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-[rgb(15_12_30)] dark:text-white">
                {profile.name}
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#3788FE]/10 text-[#3788FE] border border-[#3788FE]/30">
                {recommendedRole}
              </span>
            </div>
            <p className="text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
              {profile.branch} · {profile.college}
            </p>
          </div>
        </div>

        <MatchScore score={score.overall} breakdown={score} size="md" />
      </div>

      {/* Skills Brought & Gaps Filled */}
      <div className="space-y-3 p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-[#BEB3FF]/25">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#3788FE] block mb-1.5">
            Aptitudes Brought to Team:
          </span>
          <div className="flex flex-wrap gap-1">
            {skillContribution.map((s) => (
              <SkillChip key={s} skill={s} variant="teach" size="sm" />
            ))}
          </div>
        </div>

        {filledGaps.length > 0 && (
          <div className="pt-2 border-t border-[#BEB3FF]/20">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1.5">
              Fills Missing Team Gaps:
            </span>
            <div className="flex flex-wrap gap-1">
              {filledGaps.map((g) => (
                <span
                  key={g}
                  className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-semibold flex items-center gap-1"
                >
                  <span>✓</span> {g}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Badges Row */}
      <div className="flex flex-wrap items-center gap-2">
        <DistanceBadge distanceKm={distanceKm} size="sm" />
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#BEB3FF]/20 text-[#5446a8] dark:text-[#BEB3FF] border border-[#BEB3FF]/40">
          <Clock className="w-3.5 h-3.5" />
          <span>{availabilityFit.description}</span>
        </span>
      </div>

      {/* Why Recommended? */}
      <MatchReason reasons={reasons} distanceKm={distanceKm} />

      {/* Actions */}
      <div className="pt-2 flex items-center justify-between gap-3 border-t border-[#BEB3FF]/20">
        <button
          type="button"
          onClick={() => onViewProfile?.(profile.id)}
          className="text-xs font-semibold text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] hover:text-[#3788FE] transition-colors cursor-pointer"
        >
          View Profile
        </button>

        {status === "none" && (
          <button
            type="button"
            onClick={handleConnect}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#3788FE] hover:bg-[#2573e8] text-white text-xs font-bold shadow-md shadow-[#3788FE]/25 hover:shadow-lg transition-all cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Invite to Team Seat</span>
          </button>
        )}

        {status === "pending_sent" && (
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#BEB3FF]/30 text-[#5446a8] dark:text-[#BEB3FF] text-xs font-semibold border border-[#BEB3FF]/40">
            <Clock className="w-3.5 h-3.5" />
            <span>Invitation Sent</span>
          </span>
        )}

        {status === "connected" && (
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold border border-emerald-500/30">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Seat Filled</span>
          </span>
        )}
      </div>
    </div>
  );
}

export default TeamMemberCard;
