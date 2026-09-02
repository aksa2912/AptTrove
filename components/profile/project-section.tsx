import { Project } from "@/lib/types";
import { ProjectCard } from "@/components/discover/project-card";
import { EmptyState } from "@/components/shared/empty-state";
import { FolderKanban } from "lucide-react";

export interface ProjectSectionProps {
  projects?: Project[];
  className?: string;
}

export function ProjectSection({
  projects = [],
  className = "",
}: ProjectSectionProps) {
  return (
    <div
      className={`p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-[#16122a]/80 border border-[#BEB3FF]/40 backdrop-blur-md shadow-sm space-y-4 ${className}`}
    >
      <div>
        <h3 className="text-base font-bold text-[rgb(15_12_30)] dark:text-white">
          Active Projects & Teams
        </h3>
        <p className="text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
          Collaborations you have launched or joined
        </p>
      </div>

      {projects.length === 0 ? (
        <EmptyState
          variant="compact"
          title="No project collaborations listed yet"
          description="Projects you join via AI Team Builder will appear on your identity card."
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectSection;
