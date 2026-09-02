"use client";

import { useState } from "react";
import { Plus, BookOpen, Target, Sparkles, X } from "lucide-react";
import { SkillChip } from "@/components/shared/skill-chip";
import { SKILLS } from "@/lib/constants/skills";

export interface SkillProfilePanelProps {
  canTeach: string[];
  wantsToLearn: string[];
  onAddTeachSkill: (skill: string) => void;
  onAddLearnSkill: (skill: string) => void;
  onRemoveTeachSkill: (skill: string) => void;
  onRemoveLearnSkill: (skill: string) => void;
  className?: string;
}

export function SkillProfilePanel({
  canTeach,
  wantsToLearn,
  onAddTeachSkill,
  onAddLearnSkill,
  onRemoveTeachSkill,
  onRemoveLearnSkill,
  className = "",
}: SkillProfilePanelProps) {
  const [modalMode, setModalMode] = useState<"teach" | "learn" | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSkills = SKILLS.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectSkill = (skillName: string) => {
    if (modalMode === "teach") {
      onAddTeachSkill(skillName);
    } else if (modalMode === "learn") {
      onAddLearnSkill(skillName);
    }
    setModalMode(null);
    setSearchQuery("");
  };

  return (
    <div
      className={`p-6 rounded-3xl bg-white/80 dark:bg-[#16122a]/80 border border-[#BEB3FF]/40 backdrop-blur-md shadow-sm space-y-6 ${className}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-[rgb(15_12_30)] dark:text-white">
            Your Swap Inventory
          </h3>
          <p className="text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
            Matches are calculated based on these skills
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Can Teach Column */}
        <div className="p-4 rounded-2xl bg-[#3788FE]/5 border border-[#3788FE]/20 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#3788FE] uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Skills I Can Teach ({canTeach.length})</span>
            </span>
            <button
              onClick={() => setModalMode("teach")}
              className="text-xs font-bold text-[#3788FE] hover:text-[#2573e8] flex items-center gap-1 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" /> Add
            </button>
          </div>

          <div className="flex flex-wrap gap-1.5 min-h-[32px]">
            {canTeach.length === 0 ? (
              <span className="text-xs text-[rgb(160_155_180)] dark:text-[rgb(110_100_140)] italic">
                No teaching skills added yet
              </span>
            ) : (
              canTeach.map((skill) => (
                <SkillChip
                  key={skill}
                  skill={skill}
                  variant="teach"
                  removable
                  onRemove={() => onRemoveTeachSkill(skill)}
                />
              ))
            )}
          </div>
        </div>

        {/* Wants to Learn Column */}
        <div className="p-4 rounded-2xl bg-[#BEB3FF]/10 border border-[#BEB3FF]/30 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#5446a8] dark:text-[#BEB3FF] uppercase tracking-wider flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5" />
              <span>Skills I Want to Learn ({wantsToLearn.length})</span>
            </span>
            <button
              onClick={() => setModalMode("learn")}
              className="text-xs font-bold text-[#5446a8] dark:text-[#BEB3FF] hover:opacity-80 flex items-center gap-1 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" /> Add
            </button>
          </div>

          <div className="flex flex-wrap gap-1.5 min-h-[32px]">
            {wantsToLearn.length === 0 ? (
              <span className="text-xs text-[rgb(160_155_180)] dark:text-[rgb(110_100_140)] italic">
                No learning skills added yet
              </span>
            ) : (
              wantsToLearn.map((skill) => (
                <SkillChip
                  key={skill}
                  skill={skill}
                  variant="learn"
                  removable
                  onRemove={() => onRemoveLearnSkill(skill)}
                />
              ))
            )}
          </div>
        </div>
      </div>

      {/* Inline Quick Add Modal */}
      {modalMode && (
        <div className="p-4 rounded-2xl bg-[#FFF5F3] dark:bg-[#1f1938] border border-[#BEB3FF]/50 space-y-3 animate-fade-in">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[rgb(15_12_30)] dark:text-white">
              Add Skill to {modalMode === "teach" ? "Teach" : "Learn"}
            </span>
            <button
              onClick={() => setModalMode(null)}
              className="p-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skills (e.g. Python, React, Figma)..."
            className="w-full px-3 py-1.5 text-xs rounded-xl bg-white dark:bg-[#120f23] border border-[#BEB3FF]/40 text-[rgb(15_12_30)] dark:text-white outline-none focus:border-[#3788FE]"
            autoFocus
          />

          <div className="max-h-36 overflow-y-auto flex flex-wrap gap-1.5 pt-1">
            {filteredSkills.slice(0, 15).map((s) => (
              <button
                key={s.id}
                onClick={() => handleSelectSkill(s.name)}
                className="text-xs px-2.5 py-1 rounded-lg bg-white dark:bg-[#16122a] border border-[#BEB3FF]/40 hover:border-[#3788FE] hover:text-[#3788FE] transition-colors text-left"
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

export default SkillProfilePanel;
