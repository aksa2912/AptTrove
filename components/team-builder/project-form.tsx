"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, Layers, FileText } from "lucide-react";
import { TeamBuilderInput, ProjectType } from "@/lib/types";
import { PROJECT_TYPES } from "@/lib/constants/routes";
import { RequiredSkillsSelector } from "./required-skills-selector";
import { TeamSizeSelector } from "./team-size-selector";
import { LocationSelector } from "./location-selector";

export interface ProjectFormProps {
  value: TeamBuilderInput;
  onChange: (val: TeamBuilderInput) => void;
  onSubmit: () => void;
  isSearching?: boolean;
  className?: string;
}

export function ProjectForm({
  value,
  onChange,
  onSubmit,
  isSearching = false,
  className = "",
}: ProjectFormProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className={`p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-[#16122a]/80 border border-[#BEB3FF]/40 backdrop-blur-md shadow-sm space-y-7 ${className}`}
    >
      {/* 1. Project Title & Type */}
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[rgb(15_12_30)] dark:text-white mb-1.5">
            Project Name
          </label>
          <input
            type="text"
            value={value.projectName}
            onChange={(e) => onChange({ ...value, projectName: e.target.value })}
            placeholder="e.g., AptTrove, EcoTrack AI, HealthPulse..."
            className="w-full px-4 py-2.5 text-sm rounded-xl bg-white dark:bg-[#120f23] border border-[#BEB3FF]/40 text-[rgb(15_12_30)] dark:text-white outline-none focus:border-[#3788FE] font-medium"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[rgb(15_12_30)] dark:text-white mb-2">
            Project Type
          </label>
          <div className="flex flex-wrap gap-1.5">
            {PROJECT_TYPES.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => onChange({ ...value, projectType: type })}
                className={`text-xs px-3 py-1.5 rounded-xl border font-semibold transition-all cursor-pointer ${
                  value.projectType === type
                    ? "bg-[#3788FE] text-white border-[#3788FE] shadow-sm"
                    : "bg-white/70 dark:bg-white/5 border-[#BEB3FF]/30 text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] hover:border-[#3788FE]"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Project Vision / Description */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[rgb(15_12_30)] dark:text-white mb-1.5">
          What are you building?
        </label>
        <textarea
          value={value.projectDescription}
          onChange={(e) => onChange({ ...value, projectDescription: e.target.value })}
          placeholder="Describe your vision, core problem you're solving, tech architecture ideas, and who would be ideal on this team..."
          rows={3}
          className="w-full p-3.5 text-xs rounded-xl bg-white dark:bg-[#120f23] border border-[#BEB3FF]/40 text-[rgb(15_12_30)] dark:text-white outline-none focus:border-[#3788FE] resize-none leading-relaxed"
          required
        />
      </div>

      {/* 3. Required Skills Selector */}
      <RequiredSkillsSelector
        selected={value.requiredSkills}
        onChange={(skills) => onChange({ ...value, requiredSkills: skills })}
      />

      {/* 4. Target Team Size */}
      <TeamSizeSelector
        value={value.teamSize}
        onChange={(size) => onChange({ ...value, teamSize: size })}
      />

      {/* 5. Location & Search Radius */}
      <LocationSelector
        value={value.location}
        onChange={(loc) => onChange({ ...value, location: loc })}
      />

      {/* Submit CTA */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSearching}
          className="w-full py-3.5 px-6 rounded-2xl bg-[#3788FE] hover:bg-[#2573e8] disabled:opacity-50 text-white text-sm font-bold shadow-xl shadow-[#3788FE]/30 hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          {isSearching ? (
            <>
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>Analyzing Local Talent Graph...</span>
            </>
          ) : (
            <>
              <span>Find Matching Collaborators</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

export default ProjectForm;
