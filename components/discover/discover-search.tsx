"use client";

import { Search, Sparkles, X } from "lucide-react";

export interface DiscoverSearchProps {
  value: string;
  onChange: (val: string) => void;
  onClear: () => void;
  activeTab: "people" | "projects" | "teams" | "skills";
  onTabChange: (tab: "people" | "projects" | "teams" | "skills") => void;
  className?: string;
}

export function DiscoverSearch({
  value,
  onChange,
  onClear,
  activeTab,
  onTabChange,
  className = "",
}: DiscoverSearchProps) {
  const tabs = [
    { id: "people", label: "People & Builders" },
    { id: "projects", label: "Open Projects" },
    { id: "teams", label: "Hackathon Teams" },
    { id: "skills", label: "Skills Index" },
  ] as const;

  return (
    <div
      className={`p-6 rounded-3xl bg-white/80 dark:bg-[#16122a]/80 border border-[#BEB3FF]/40 backdrop-blur-md shadow-sm space-y-4 ${className}`}
    >
      {/* Search Bar */}
      <div className="relative">
        <Search className="w-5 h-5 text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={`Search ${activeTab} by skill, role, campus, or keyword...`}
          className="w-full pl-12 pr-10 py-3 text-sm rounded-2xl bg-[#FFF5F3] dark:bg-[#120f23] border border-[#BEB3FF]/40 text-[rgb(15_12_30)] dark:text-white outline-none focus:border-[#3788FE] font-medium"
        />
        {value && (
          <button
            type="button"
            onClick={onClear}
            className="p-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10 absolute right-3.5 top-1/2 -translate-y-1/2 text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabChange(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === tab.id
                ? "bg-[#3788FE] text-white shadow-md shadow-[#3788FE]/25"
                : "bg-black/5 dark:bg-white/5 text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] hover:bg-[#BEB3FF]/20"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DiscoverSearch;
