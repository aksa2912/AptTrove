import { MapPin } from "lucide-react";
import { formatDistance } from "@/lib/utils/cn";

export interface DistanceBadgeProps {
  distanceKm: number;
  showIcon?: boolean;
  size?: "sm" | "md";
  className?: string;
}

export function DistanceBadge({
  distanceKm,
  showIcon = true,
  size = "md",
  className = "",
}: DistanceBadgeProps) {
  const getVariant = () => {
    if (distanceKm <= 10) {
      return "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/40";
    }
    if (distanceKm <= 30) {
      return "bg-[#3788FE]/10 text-[#3788FE] border-[#3788FE]/30";
    }
    return "bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800/40";
  };

  const sizeClasses = {
    sm: "text-[11px] px-2 py-0.5 gap-1",
    md: "text-xs font-semibold px-2.5 py-1 gap-1.5",
  }[size];

  return (
    <span
      className={`inline-flex items-center rounded-full border ${sizeClasses} ${getVariant()} ${className}`}
    >
      {showIcon && <MapPin className="w-3 h-3 shrink-0" />}
      <span>{formatDistance(distanceKm)} away</span>
    </span>
  );
}

export default DistanceBadge;
