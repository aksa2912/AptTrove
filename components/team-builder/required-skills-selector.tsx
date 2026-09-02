"use client";

import { useState } from "react";
import { Search, Check, Sparkles } from "lucide-react";
import { SkillChip } from "@/components/shared/skill-chip";
import { SKILLS, SKILL_CATEGORIES } from "@/lib/constants/skills";
import { SkillCategory } from "@/lib/types";

export interface RequiredSkillsSelectorProps {
  selected: string[];
  onChange: (skills: string[]) => void;
  className?: string;
}

export function RequiredSkillsSelector({
  selected,
  onChange,
  className = "",
}: RequiredSkillsSelectorProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredSkills = SKILLS.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "all" || s.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleSkill = (skillName: string) => {
    if (selected.includes(skillName)) {
      onChange(selected.filter((s) => s !== skillName));
    } else {
      if (selected.length < 12) {
        onChange([...selected, skillName]);
      }
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center justify-between">
        <label className="text-xs font-bold uppercase tracking-wider text-[rgb(15_12_30)] dark:text-white">
          Required Team Skills ({selected.length} Selected)
        </label>
        <span className="text-[11px] text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
          Max 12 skills
        </span>
      </div>

      {/* Selected Chips Strip */}
      {selected.length > 0 && (
        <div className="flex flex-wrap gap-1.5 p-3 rounded-2xl bg-white/70 dark:bg-white/5 border border-[#BEB3FF]/30">
          {selected.map((skill) => (
            <SkillChip
              key={skill}
              skill={skill}
              variant="required"
              removable
              onRemove={() => toggleSkill(skill)}
              size="sm"
            />
          ))}
        </div>
      )}

      {/* Category Pills */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={`px-3 py-1 rounded-lg text-xs font-semibold shrink-0 transition-colors ${
            activeCategory === "all"
              ? "bg-[#3788FE] text-white"
              : "bg-black/5 dark:bg-white/5 text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]"
          }`}
        >
          All
        </button>
        {SKILL_CATEGORIES.slice(0, 8).map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1 rounded-lg text-xs font-semibold shrink-0 transition-colors ${
              activeCategory === cat
                ? "bg-[#3788FE] text-white"
                : "bg-black/5 dark:bg-white/5 text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-3.5 h-3.5 text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Filter skills (e.g., Python, Figma, React, PyTorch)..."
          className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-white dark:bg-[#120f23] border border-[#BEB3FF]/40 text-[rgb(15_12_30)] dark:text-white outline-none focus:border-[#3788FE]"
        />
      </div>

      {/* Skill Option Grid */}
      <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto p-1 scrollbar-thin">
        {filteredSkills.map((s) => {
          const isSelected = selected.includes(s.name);
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => toggleSkill(s.name)}
              className={`text-xs px-2.5 py-1 rounded-lg border transition-all flex items-center gap-1 cursor-pointer ${
                isSelected
                  ? "bg-[#3788FE] text-white border-[#3788FE] shadow-sm font-semibold"
                  : "bg-white/70 dark:bg-white/5 border-[#BEB3FF]/30 text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] hover:border-[#3788FE]"
              }`}
            >
              {isSelected && <Check className="w-3 h-3" />}
              <span>{s.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default RequiredSkillsSelector;
