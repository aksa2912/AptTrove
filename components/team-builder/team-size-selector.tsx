import { Users, User } from "lucide-react";
import { TEAM_SIZE_OPTIONS } from "@/lib/constants/routes";

export interface TeamSizeSelectorProps {
  value: number;
  onChange: (size: number) => void;
  className?: string;
}

export function TeamSizeSelector({
  value,
  onChange,
  className = "",
}: TeamSizeSelectorProps) {
  return (
    <div className={`space-y-2.5 ${className}`}>
      <div className="flex items-center justify-between">
        <label className="text-xs font-bold uppercase tracking-wider text-[rgb(15_12_30)] dark:text-white flex items-center gap-1.5">
          <Users className="w-3.5 h-3.5 text-[#3788FE]" />
          <span>Target Team Size</span>
        </label>
        <span className="text-[11px] text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
          You count as Seat #1
        </span>
      </div>

      <div className="flex gap-2">
        {TEAM_SIZE_OPTIONS.map((size) => (
          <button
            key={size}
            type="button"
            onClick={() => onChange(size)}
            className={`flex-1 py-2.5 rounded-xl border text-xs font-bold transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
              value === size
                ? "bg-[#3788FE] text-white border-[#3788FE] shadow-md shadow-[#3788FE]/30 scale-105"
                : "bg-white/70 dark:bg-white/5 border-[#BEB3FF]/40 text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] hover:border-[#3788FE]"
            }`}
          >
            <div className="flex items-center -space-x-1">
              {Array.from({ length: Math.min(size, 3) }).map((_, i) => (
                <User key={i} className="w-3 h-3" />
              ))}
              {size > 3 && <span className="text-[9px] font-black">+</span>}
            </div>
            <span>{size} People</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default TeamSizeSelector;
