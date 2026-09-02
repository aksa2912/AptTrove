"use client";

import { TeamSeat } from "@/lib/types";
import { User, Plus, CheckCircle2, Clock } from "lucide-react";
import { getInitials } from "@/lib/utils/cn";

export interface TeamSeatCardProps {
  seat: TeamSeat;
  seatNumber: number;
  onFill?: (seatId: string) => void;
  onRemove?: (seatId: string) => void;
  className?: string;
}

export function TeamSeatCard({
  seat,
  seatNumber,
  onFill,
  onRemove,
  className = "",
}: TeamSeatCardProps) {
  const isFilled = seat.status === "filled";
  const isReserved = seat.status === "reserved";

  return (
    <div
      className={`p-4 rounded-2xl border transition-all flex flex-col justify-between min-h-[140px] ${
        isFilled
          ? "bg-white/85 dark:bg-[#1f1938]/85 border-[#3788FE]/40 shadow-sm"
          : isReserved
          ? "bg-amber-50/50 dark:bg-amber-950/20 border-amber-300 dark:border-amber-800/40"
          : "bg-white/40 dark:bg-white/5 border-dashed border-[#BEB3FF]/40 hover:border-[#3788FE]/60"
      } ${className}`}
    >
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
            Seat #{seatNumber}
          </span>
          <span
            className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
              isFilled
                ? "bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300"
                : isReserved
                ? "bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300"
                : "bg-[#BEB3FF]/20 text-[#5446a8] dark:text-[#BEB3FF]"
            }`}
          >
            {isFilled ? "Filled ✓" : isReserved ? "Pending" : "Open"}
          </span>
        </div>

        {/* Role & Name */}
        <h4 className="text-xs font-bold text-[rgb(15_12_30)] dark:text-white truncate">
          {seat.role}
        </h4>

        {isFilled && seat.filledByProfile ? (
          <p className="text-[11px] font-semibold text-[#3788FE] truncate mt-0.5">
            {seat.filledByProfile.name}
          </p>
        ) : (
          <p className="text-[11px] text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] mt-0.5">
            {isFilled ? "Assigned" : "Awaiting Candidate"}
          </p>
        )}
      </div>

      {/* Required Skills for this seat */}
      <div className="pt-3 border-t border-black/5 dark:border-white/5">
        <div className="flex flex-wrap gap-1">
          {seat.requiredSkills.map((s) => (
            <span
              key={s}
              className="text-[9px] px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/5 text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] font-medium"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamSeatCard;
