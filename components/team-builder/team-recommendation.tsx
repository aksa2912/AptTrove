import { TeamCandidate } from "@/lib/types";
import { TeamMemberCard } from "./team-member-card";
import { EmptyState } from "@/components/shared/empty-state";
import { CardSkeleton } from "@/components/shared/loading-skeleton";
import { Users, Sparkles } from "lucide-react";

export interface TeamRecommendationProps {
  candidates: TeamCandidate[];
  isLoading?: boolean;
  onConnect?: (candidateId: string) => void;
  className?: string;
}

export function TeamRecommendation({
  candidates,
  isLoading = false,
  onConnect,
  className = "",
}: TeamRecommendationProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        <CardSkeleton />
        <CardSkeleton />
      </div>
    );
  }

  if (candidates.length === 0) {
    return (
      <EmptyState
        icon={<Users className="w-8 h-8 text-[#a03d58] dark:text-[#FFD7E0]" />}
        title="No team candidates discovered yet"
        description="Fill in your project requirements, target skills, and location radius above to discover matching collaborators."
      />
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-[rgb(15_12_30)] dark:text-white flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#3788FE]" />
          <span>Recommended Candidates ({candidates.length})</span>
        </h3>
        <span className="text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
          Sorted by 4-factor team compatibility
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {candidates.map((candidate) => (
          <TeamMemberCard
            key={candidate.id}
            candidate={candidate}
            onConnect={onConnect}
          />
        ))}
      </div>
    </div>
  );
}

export default TeamRecommendation;
