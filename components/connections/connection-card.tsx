"use client";

import { Connection, StudentProfile } from "@/lib/types";
import { ContactReveal } from "./contact-reveal";
import { getInitials } from "@/lib/utils/cn";
import { Link2, Sparkles, UserCheck } from "lucide-react";
import { SkillChip } from "@/components/shared/skill-chip";

export interface ConnectionCardProps {
  connection: Connection;
  otherUser: StudentProfile;
  className?: string;
}

export function ConnectionCard({
  connection,
  otherUser,
  className = "",
}: ConnectionCardProps) {
  return (
    <div
      className={`p-6 rounded-3xl bg-white/80 dark:bg-[#16122a]/80 border border-[#BEB3FF]/40 backdrop-blur-md shadow-sm space-y-4 ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#3788FE] via-[#BEB3FF] to-[#FFD7E0] p-0.5 shadow-sm">
            <div className="w-full h-full bg-[#FFF5F3] dark:bg-[#120f23] rounded-[14px] flex items-center justify-center font-black text-sm text-[#3788FE]">
              {getInitials(otherUser.name)}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-[rgb(15_12_30)] dark:text-white">
                {otherUser.name}
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300">
                Connected
              </span>
            </div>
            <p className="text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
              {otherUser.branch} · {otherUser.college}
            </p>
          </div>
        </div>

        <div className="w-8 h-8 rounded-xl bg-[#3788FE]/10 text-[#3788FE] flex items-center justify-center">
          <Link2 className="w-4 h-4" />
        </div>
      </div>

      {/* Shared Skills Strip */}
      <div className="space-y-1.5 pt-2 border-t border-[#BEB3FF]/20">
        <span className="text-[10px] font-bold uppercase text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
          Core Aptitudes:
        </span>
        <div className="flex flex-wrap gap-1">
          {otherUser.canTeach.slice(0, 4).map((s) => (
            <SkillChip key={s} skill={s} variant="teach" size="sm" />
          ))}
        </div>
      </div>

      {/* Contact Reveal Box */}
      <ContactReveal
        isRevealed={connection.contactRevealed}
        email={otherUser.email}
      />
    </div>
  );
}

export default ConnectionCard;
