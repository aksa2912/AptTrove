"use client";

import { useState } from "react";
import { Filter, MapPin, SlidersHorizontal, RotateCcw } from "lucide-react";
import { RADIUS_OPTIONS, RadiusOption } from "@/lib/constants/routes";
import { SKILL_CATEGORIES } from "@/lib/constants/skills";

export interface SkillSwapFiltersProps {
  selectedRadius: RadiusOption;
  onRadiusChange: (radius: RadiusOption) => void;
  sortBy: "score" | "distance" | "time";
  onSortChange: (sort: "score" | "distance" | "time") => void;
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  useLocation: boolean;
  onToggleLocation: (use: boolean) => void;
  onReset: () => void;
  className?: string;
}

export function SkillSwapFilters({
  selectedRadius,
  onRadiusChange,
  sortBy,
  onSortChange,
  selectedCategory,
  onCategoryChange,
  useLocation,
  onToggleLocation,
  onReset,
  className = "",
}: SkillSwapFiltersProps) {
  const [mobileExpanded, setMobileExpanded] = useState(false);

  return (
    <div
      className={`p-4 rounded-3xl bg-white/70 dark:bg-[#16122a]/70 border border-[#BEB3FF]/40 backdrop-blur-md shadow-sm space-y-4 ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-[#3788FE]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[rgb(15_12_30)] dark:text-white">
            Matching Filters
          </span>
        </div>
        <button
          onClick={onReset}
          className="text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] hover:text-[#3788FE] flex items-center gap-1 cursor-pointer"
        >
          <RotateCcw className="w-3 h-3" /> Reset
        </button>
      </div>

      {/* Filter Controls Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Radius Selector */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#FFD7E0]" /> Radius: {selectedRadius} km
          </label>
          <div className="flex gap-1">
            {RADIUS_OPTIONS.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => onRadiusChange(r)}
                className={`flex-1 py-1 rounded-lg text-[11px] font-bold transition-colors ${
                  selectedRadius === r
                    ? "bg-[#3788FE] text-white shadow-sm"
                    : "bg-black/5 dark:bg-white/5 text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] hover:bg-[#BEB3FF]/20"
                }`}
              >
                {r}k
              </button>
            ))}
          </div>
        </div>

        {/* Sort By */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
            Sort Candidates:
          </label>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as any)}
            className="w-full px-3 py-1.5 rounded-xl text-xs bg-white dark:bg-[#120f23] border border-[#BEB3FF]/40 text-[rgb(15_12_30)] dark:text-white outline-none focus:border-[#3788FE]"
          >
            <option value="score">Highest Compatibility</option>
            <option value="distance">Closest Distance</option>
            <option value="time">Most Schedule Overlap</option>
          </select>
        </div>

        {/* Skill Category Filter */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
            Skill Domain:
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-3 py-1.5 rounded-xl text-xs bg-white dark:bg-[#120f23] border border-[#BEB3FF]/40 text-[rgb(15_12_30)] dark:text-white outline-none focus:border-[#3788FE]"
          >
            <option value="all">All Domains</option>
            {SKILL_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Location Toggle */}
        <div className="space-y-1.5 flex flex-col justify-end">
          <button
            type="button"
            onClick={() => onToggleLocation(!useLocation)}
            className={`w-full py-1.5 px-3 rounded-xl text-xs font-semibold border flex items-center justify-center gap-1.5 transition-colors ${
              useLocation
                ? "bg-[#3788FE]/15 border-[#3788FE] text-[#3788FE]"
                : "bg-black/5 dark:bg-white/5 border-[#BEB3FF]/30 text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]"
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>{useLocation ? "Location Enabled" : "Use My Location"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SkillSwapFilters;
