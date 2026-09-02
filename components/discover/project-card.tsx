"use client";

import { Project } from "@/lib/types";
import { SkillChip } from "@/components/shared/skill-chip";
import { DistanceBadge } from "@/components/shared/distance-badge";
import { Users, Clock, ArrowRight, FolderKanban } from "lucide-react";

export interface ProjectCardProps {
  project: Project;
  onJoin?: (projectId: string) => void;
  onViewProject?: (projectId: string) => void;
  className?: string;
}

export function ProjectCard({
  project,
  onJoin,
  onViewProject,
  className = "",
}: ProjectCardProps) {
  const filledSeats = project.seats.filter((s) => s.status === "filled").length;
  const totalSeats = project.seats.length;

  return (
    <div
      className={`p-6 rounded-3xl bg-white/80 dark:bg-[#16122a]/80 border border-[#BEB3FF]/40 backdrop-blur-md shadow-sm hover:shadow-xl hover:border-[#3788FE]/60 transition-all duration-200 space-y-4 ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#3788FE]/10 text-[#3788FE] border border-[#3788FE]/30">
            {project.type}
          </span>
          <h3 className="text-base font-bold text-[rgb(15_12_30)] dark:text-white mt-1.5">
            {project.name}
          </h3>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#BEB3FF]/20 text-[#5446a8] dark:text-[#BEB3FF] text-xs font-bold shrink-0">
          <Users className="w-3.5 h-3.5" />
          <span>
            {filledSeats}/{totalSeats} Seats
          </span>
        </div>
      </div>

      <p className="text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] line-clamp-2 leading-relaxed">
        {project.description}
      </p>

      {/* Required Skills */}
      <div className="space-y-1.5 pt-2 border-t border-[#BEB3FF]/20">
        <span className="text-[10px] font-bold uppercase text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
          Seeking Skills:
        </span>
        <div className="flex flex-wrap gap-1">
          {project.requiredSkills.map((s) => (
            <SkillChip key={s} skill={s} variant="required" size="sm" />
          ))}
        </div>
      </div>

      <div className="pt-2 flex items-center justify-between border-t border-[#BEB3FF]/20">
        <span className="text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
          Radius: {project.location.radiusKm} km
        </span>
        <button
          type="button"
          onClick={() => onJoin?.(project.id)}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#3788FE] hover:bg-[#2573e8] text-white text-xs font-bold shadow-md shadow-[#3788FE]/25 transition-all"
        >
          <span>Apply to Seat</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
