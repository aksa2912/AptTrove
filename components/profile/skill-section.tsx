"use client";

import { useState } from "react";
import { SkillChip } from "@/components/shared/skill-chip";
import { BookOpen, Target, Plus, X } from "lucide-react";
import { SKILLS } from "@/lib/constants/skills";

export interface SkillSectionProps {
  canTeach: string[];
  wantsToLearn: string[];
  isEditing: boolean;
  onAddTeach: (skill: string) => void;
  onAddLearn: (skill: string) => void;
  onRemoveTeach: (skill: string) => void;
  onRemoveLearn: (skill: string) => void;
  className?: string;
}

export function SkillSection({
  canTeach,
  wantsToLearn,
  isEditing,
  onAddTeach,
  onAddLearn,
  onRemoveTeach,
  onRemoveLearn,
  className = "",
}: SkillSectionProps) {
  const [modalMode, setModalMode] = useState<"teach" | "learn" | null>(null);
  const [search, setSearch] = useState("");

  const filteredSkills = SKILLS.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className={`p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-[#16122a]/80 border border-[#BEB3FF]/40 backdrop-blur-md shadow-sm space-y-6 ${className}`}
    >
      <div>
        <h3 className="text-base font-bold text-[rgb(15_12_30)] dark:text-white">
          Aptitudes & Learning Goals
        </h3>
        <p className="text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
          The foundation of your AptTrove match graph
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Can Teach */}
        <div className="p-5 rounded-2xl bg-[#3788FE]/5 border border-[#3788FE]/20 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#3788FE] flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Skills I Can Teach ({canTeach.length})</span>
            </span>
            {isEditing && (
              <button
                type="button"
                onClick={() => setModalMode("teach")}
                className="text-xs font-bold text-[#3788FE] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" /> Add
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5 min-h-[36px]">
            {canTeach.map((s) => (
              <SkillChip
                key={s}
                skill={s}
                variant="teach"
                removable={isEditing}
                onRemove={() => onRemoveTeach(s)}
              />
            ))}
          </div>
        </div>

        {/* Wants to Learn */}
        <div className="p-5 rounded-2xl bg-[#BEB3FF]/10 border border-[#BEB3FF]/30 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5446a8] dark:text-[#BEB3FF] flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5" />
              <span>Skills I Want to Learn ({wantsToLearn.length})</span>
            </span>
            {isEditing && (
              <button
                type="button"
                onClick={() => setModalMode("learn")}
                className="text-xs font-bold text-[#5446a8] dark:text-[#BEB3FF] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" /> Add
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5 min-h-[36px]">
            {wantsToLearn.map((s) => (
              <SkillChip
                key={s}
                skill={s}
                variant="learn"
                removable={isEditing}
                onRemove={() => onRemoveLearn(s)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Skill Picker Modal if adding */}
      {modalMode && (
        <div className="p-4 rounded-2xl bg-[#FFF5F3] dark:bg-[#1f1938] border border-[#BEB3FF]/50 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[rgb(15_12_30)] dark:text-white">
              Add Skill to {modalMode === "teach" ? "Teach" : "Learn"}
            </span>
            <button onClick={() => setModalMode(null)}>
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search skill taxonomy..."
            className="w-full px-3 py-1.5 text-xs rounded-xl bg-white dark:bg-[#120f23] border border-[#BEB3FF]/40 text-[rgb(15_12_30)] dark:text-white outline-none"
            autoFocus
          />

          <div className="max-h-28 overflow-y-auto flex flex-wrap gap-1">
            {filteredSkills.slice(0, 10).map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  if (modalMode === "teach") onAddTeach(s.name);
                  else onAddLearn(s.name);
                  setModalMode(null);
                  setSearch("");
                }}
                className="text-xs px-2.5 py-1 rounded-lg bg-white dark:bg-[#16122a] border border-[#BEB3FF]/30 hover:border-[#3788FE]"
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SkillSection;
