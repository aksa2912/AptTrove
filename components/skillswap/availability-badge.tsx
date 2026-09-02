import { Clock } from "lucide-react";

export interface AvailabilityBadgeProps {
  description: string;
  hoursPerWeek?: number;
  hasOverlap?: boolean;
  className?: string;
}

export function AvailabilityBadge({
  description,
  hoursPerWeek,
  hasOverlap = true,
  className = "",
}: AvailabilityBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${
        hasOverlap
          ? "bg-[#BEB3FF]/20 text-[#5446a8] dark:text-[#BEB3FF] border-[#BEB3FF]/40"
          : "bg-gray-100 dark:bg-gray-800 text-gray-500 border-gray-200 dark:border-gray-700"
      } ${className}`}
    >
      <Clock className="w-3.5 h-3.5 shrink-0" />
      <span>
        {description}
        {hoursPerWeek ? ` · ${hoursPerWeek}h/wk` : ""}
      </span>
    </span>
  );
}

export default AvailabilityBadge;
