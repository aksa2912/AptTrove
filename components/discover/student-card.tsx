"use client";

import { StudentProfile } from "@/lib/types";
import { SkillChip } from "@/components/shared/skill-chip";
import { DistanceBadge } from "@/components/shared/distance-badge";
import { getInitials } from "@/lib/utils/cn";
import { Send, MapPin } from "lucide-react";

export interface StudentCardProps {
  profile: StudentProfile;
  onConnect?: (userId: string) => void;
  onViewProfile?: (userId: string) => void;
  className?: string;
}

export function StudentCard({
  profile,
  onConnect,
  onViewProfile,
  className = "",
}: StudentCardProps) {
  return (
    <div
      className={`p-6 rounded-3xl bg-white/80 dark:bg-[#16122a]/80 border border-[#BEB3FF]/40 backdrop-blur-md shadow-sm hover:shadow-xl hover:border-[#3788FE]/60 transition-all duration-200 space-y-4 ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#3788FE] to-[#BEB3FF] p-0.5 shadow-sm">
            <div className="w-full h-full bg-[#FFF5F3] dark:bg-[#120f23] rounded-[14px] flex items-center justify-center font-black text-sm text-[#3788FE]">
              {getInitials(profile.name)}
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold text-[rgb(15_12_30)] dark:text-white">
              {profile.name}
            </h3>
            <p className="text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
              {profile.year} Year · {profile.branch}
            </p>
            <p className="text-[11px] text-[rgb(160_155_180)] dark:text-[rgb(110_100_140)]">
              {profile.college}
            </p>
          </div>
        </div>

        {profile.location.lat && (
          <DistanceBadge distanceKm={12.4} size="sm" />
        )}
      </div>

      <p className="text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] line-clamp-2 leading-relaxed">
        {profile.bio || "Passionate builder looking to collaborate on high-impact projects."}
      </p>

      {/* Skills */}
      <div className="space-y-2 pt-2 border-t border-[#BEB3FF]/20">
        <div>
          <span className="text-[10px] font-bold uppercase text-[#3788FE] block mb-1">
            Can Teach:
          </span>
          <div className="flex flex-wrap gap-1">
            {profile.canTeach.slice(0, 3).map((s) => (
              <SkillChip key={s} skill={s} variant="teach" size="sm" />
            ))}
          </div>
        </div>

        <div>
          <span className="text-[10px] font-bold uppercase text-[#5446a8] dark:text-[#BEB3FF] block mb-1">
            Wants to Learn:
          </span>
          <div className="flex flex-wrap gap-1">
            {profile.wantsToLearn.slice(0, 3).map((s) => (
              <SkillChip key={s} skill={s} variant="learn" size="sm" />
            ))}
          </div>
        </div>
      </div>

      <div className="pt-2 flex items-center justify-between border-t border-[#BEB3FF]/20">
        <button
          type="button"
          onClick={() => onViewProfile?.(profile.id)}
          className="text-xs font-semibold text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] hover:text-[#3788FE] transition-colors"
        >
          View Profile
        </button>
        <button
          type="button"
          onClick={() => onConnect?.(profile.id)}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#3788FE] hover:bg-[#2573e8] text-white text-xs font-bold shadow-md shadow-[#3788FE]/25 transition-all"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Connect</span>
        </button>
      </div>
    </div>
  );
}

export default StudentCard;
