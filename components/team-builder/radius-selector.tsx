import { RADIUS_OPTIONS, RadiusOption } from "@/lib/constants/routes";
import { MapPin } from "lucide-react";

export interface RadiusSelectorProps {
  value: RadiusOption;
  onChange: (radius: RadiusOption) => void;
  className?: string;
}

export function RadiusSelector({
  value,
  onChange,
  className = "",
}: RadiusSelectorProps) {
  return (
    <div className={`space-y-2.5 ${className}`}>
      <div className="flex items-center justify-between">
        <label className="text-xs font-bold uppercase tracking-wider text-[rgb(15_12_30)] dark:text-white flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-[#FFD7E0]" />
          <span>Search Radius</span>
        </label>
        <span className="text-xs font-bold text-[#3788FE]">
          {value} km search zone
        </span>
      </div>

      <div className="flex gap-2">
        {RADIUS_OPTIONS.map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => onChange(r)}
            className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
              value === r
                ? "bg-[#3788FE] text-white border-[#3788FE] shadow-md shadow-[#3788FE]/30 scale-105"
                : "bg-white/70 dark:bg-white/5 border-[#BEB3FF]/40 text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] hover:border-[#3788FE]"
            }`}
          >
            {r} km
          </button>
        ))}
      </div>
    </div>
  );
}

export default RadiusSelector;
