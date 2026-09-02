"use client";

import { X, Check } from "lucide-react";

export interface SkillChipProps {
  skill: string;
  variant?: "teach" | "learn" | "neutral" | "selected" | "required" | "missing";
  removable?: boolean;
  onRemove?: () => void;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function SkillChip({
  skill,
  variant = "neutral",
  removable = false,
  onRemove,
  onClick,
  size = "md",
  className = "",
}: SkillChipProps) {
  const sizeClasses = {
    sm: "text-xs px-2.5 py-1 gap-1",
    md: "text-xs font-semibold px-3 py-1.5 gap-1.5",
    lg: "text-sm font-semibold px-3.5 py-2 gap-2",
  };

  const variantClasses = {
    // Teaching: Sky blue energetic tone
    teach:
      "bg-[#3788FE]/10 text-[#2573e8] dark:text-[#68a6ff] border border-[#3788FE]/30 hover:bg-[#3788FE]/20",
    // Learning: Soft lavender tone
    learn:
      "bg-[#BEB3FF]/20 text-[#5446a8] dark:text-[#d3cbff] border border-[#BEB3FF]/40 hover:bg-[#BEB3FF]/30",
    // Selected: Primary blue solid
    selected:
      "bg-[#3788FE] text-white border border-[#3788FE] shadow-sm shadow-[#3788FE]/30",
    // Neutral: Clean soft border
    neutral:
      "bg-white/80 dark:bg-white/5 text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] border border-[#BEB3FF]/30 hover:border-[#3788FE]/50 hover:text-[rgb(15_12_30)] dark:hover:text-white",
    // Required: Blush pink tone
    required:
      "bg-[#FFD7E0]/40 text-[#a03d58] dark:text-[#ffc1ce] border border-[#FFD7E0] hover:bg-[#FFD7E0]/60",
    // Missing: Alert blush tone
    missing:
      "bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800/40",
  };

  return (
    <span
      onClick={onClick}
      className={`inline-flex items-center rounded-full transition-all duration-150 select-none ${
        onClick ? "cursor-pointer hover:scale-105 active:scale-95" : ""
      } ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {variant === "selected" && <Check className="w-3 h-3 stroke-[3]" />}
      <span>{skill}</span>
      {removable && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.();
          }}
          className="p-0.5 rounded-full hover:bg-black/10 dark:hover:bg-white/20 transition-colors ml-0.5"
          aria-label={`Remove ${skill}`}
        >
          <X className="w-3 h-3" />
        </button>
      )}
    </span>
  );
}

export default SkillChip;
