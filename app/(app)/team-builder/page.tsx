"use client";

import { useState } from "react";
import { TeamBuilderHeader } from "@/components/team-builder/team-builder-header";
import { ProjectForm } from "@/components/team-builder/project-form";
import { TeamSeatCard } from "@/components/team-builder/team-seat-card";
import { TeamBalance } from "@/components/team-builder/team-balance";
import { TeamRecommendation } from "@/components/team-builder/team-recommendation";
import { AIAssistant } from "@/components/shared/ai-assistant";
import { TeamBuilderInput, TeamCandidate, TeamSeat } from "@/lib/types";

export default function TeamBuilderPage() {
  const [formInput, setFormInput] = useState<TeamBuilderInput>({
    projectName: "",
    projectDescription: "",
    projectType: "Hackathon",
    requiredSkills: ["React", "Python", "Figma"],
    teamSize: 4,
    workingHours: [
      { day: "Saturday", startTime: "10:00", endTime: "18:00" },
      { day: "Sunday", startTime: "10:00", endTime: "16:00" },
    ],
    location: {
      label: "Campus / Local Area",
      radiusKm: 20,
      useCurrentLocation: true,
    },
  });

  const [isSearching, setIsSearching] = useState(false);

  // Candidates list (Ready for backend response)
  // BACKEND: POST `/api/team-builder/recommend` with formInput payload
  const [candidates, setCandidates] = useState<TeamCandidate[]>([]);

  // Generate dynamic team seats based on teamSize
  const teamSeats: TeamSeat[] = Array.from({ length: formInput.teamSize }).map((_, index) => {
    if (index === 0) {
      return {
        id: "seat-1",
        role: "Founder / Lead",
        requiredSkills: ["Project Vision"],
        status: "filled",
      };
    }
    const skillForSeat = formInput.requiredSkills[index - 1] || "Core Contributor";
    return {
      id: `seat-${index + 1}`,
      role: `${skillForSeat} Specialist`,
      requiredSkills: [skillForSeat],
      status: "open",
    };
  });

  const handleSearch = () => {
    setIsSearching(true);
    // BACKEND: trigger AI matching API
    setTimeout(() => {
      setIsSearching(false);
    }, 600);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <TeamBuilderHeader />

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Project Form & Seat Matrix (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <ProjectForm
            value={formInput}
            onChange={setFormInput}
            onSubmit={handleSearch}
            isSearching={isSearching}
          />

          {/* Seat Availability Visualizer */}
          <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#16122a]/80 border border-[#BEB3FF]/40 backdrop-blur-md shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[rgb(15_12_30)] dark:text-white">
                Team Seat Allocation (1 / {formInput.teamSize} Filled)
              </h3>
              <span className="text-xs font-semibold text-[#3788FE]">
                {formInput.teamSize - 1} Open Seats
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {teamSeats.map((seat, i) => (
                <TeamSeatCard key={seat.id} seat={seat} seatNumber={i + 1} />
              ))}
            </div>
          </div>

          {/* Team Skill Balance */}
          <TeamBalance
            requiredSkills={formInput.requiredSkills}
            coveredSkills={["React"]}
            missingSkills={formInput.requiredSkills.filter((s) => s !== "React")}
          />
        </div>

        {/* Right Column: Recommendations & AI Assistant (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="h-[460px]">
            <AIAssistant
              context="team-builder"
              placeholder="Ask AI who completes your team or where gaps are..."
            />
          </div>

          <TeamRecommendation
            candidates={candidates}
            isLoading={isSearching}
            onConnect={(id) => {
              // BACKEND: connect candidate
            }}
          />
        </div>

      </div>
    </div>
  );
}
