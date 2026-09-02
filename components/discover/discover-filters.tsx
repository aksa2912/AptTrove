"use client";

import { SlidersHorizontal, RotateCcw, MapPin } from "lucide-react";
import { RADIUS_OPTIONS, RadiusOption } from "@/lib/constants/routes";
import { SKILL_CATEGORIES } from "@/lib/constants/skills";

export interface DiscoverFiltersProps {
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  radius: RadiusOption;
  onRadiusChange: (r: RadiusOption) => void;
  yearFilter: string;
  onYearChange: (y: string) => void;
  onReset: () => void;
  className?: string;
}

export function DiscoverFilters({
  selectedCategory,
  onCategoryChange,
  radius,
  onRadiusChange,
  yearFilter,
  onYearChange,
  onReset,
  className = "",
}: DiscoverFiltersProps) {
  return (
    <div
      className={`p-6 rounded-3xl bg-white/80 dark:bg-[#16122a]/80 border border-[#BEB3FF]/40 backdrop-blur-md shadow-sm space-y-5 ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-[#3788FE]" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-[rgb(15_12_30)] dark:text-white">
            Discovery Filters
          </h3>
        </div>
        <button
          onClick={onReset}
          className="text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] hover:text-[#3788FE] flex items-center gap-1 cursor-pointer"
        >
          <RotateCcw className="w-3 h-3" /> Reset
        </button>
      </div>

      {/* Skill Domain */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
          Skill Category
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full px-3.5 py-2 text-xs rounded-xl bg-[#FFF5F3] dark:bg-[#120f23] border border-[#BEB3FF]/40 text-[rgb(15_12_30)] dark:text-white outline-none focus:border-[#3788FE]"
        >
          <option value="all">All Domains</option>
          {SKILL_CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Search Radius */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5 text-[#FFD7E0]" /> Radius ({radius} km)
        </label>
        <div className="flex gap-1">
          {RADIUS_OPTIONS.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => onRadiusChange(r)}
              className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                radius === r
                  ? "bg-[#3788FE] text-white shadow-sm"
                  : "bg-black/5 dark:bg-white/5 text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] hover:bg-[#BEB3FF]/20"
              }`}
            >
              {r}k
            </button>
          ))}
        </div>
      </div>

      {/* Year of Study */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
          Year of Study
        </label>
        <select
          value={yearFilter}
          onChange={(e) => onYearChange(e.target.value)}
          className="w-full px-3.5 py-2 text-xs rounded-xl bg-[#FFF5F3] dark:bg-[#120f23] border border-[#BEB3FF]/40 text-[rgb(15_12_30)] dark:text-white outline-none focus:border-[#3788FE]"
        >
          <option value="all">Any Academic Year</option>
          <option value="1st">1st Year</option>
          <option value="2nd">2nd Year</option>
          <option value="3rd">3rd Year</option>
          <option value="4th">4th Year</option>
          <option value="Alumni">Alumni / Project Builder</option>
        </select>
      </div>
    </div>
  );
}

export default DiscoverFilters;
