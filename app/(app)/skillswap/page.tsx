"use client";

import { useState } from "react";
import { SkillSwapHeader } from "@/components/skillswap/skillswap-header";
import { SkillProfilePanel } from "@/components/skillswap/skill-profile-panel";
import { SkillSwapFilters } from "@/components/skillswap/skillswap-filters";
import { SkillMatchCard } from "@/components/skillswap/skill-match-card";
import { AIAssistant } from "@/components/shared/ai-assistant";
import { EmptyState } from "@/components/shared/empty-state";
import { RadiusOption } from "@/lib/constants/routes";
import { SkillSwapMatch } from "@/lib/types";
import { Repeat2, Sparkles } from "lucide-react";

export default function SkillSwapPage() {
  // User skills state (Ready for backend hydration)
  const [canTeach, setCanTeach] = useState<string[]>(["React", "Figma", "Tailwind CSS"]);
  const [wantsToLearn, setWantsToLearn] = useState<string[]>(["Python", "Machine Learning"]);

  // Filter state
  const [radius, setRadius] = useState<RadiusOption>(20);
  const [sortBy, setSortBy] = useState<"score" | "distance" | "time">("score");
  const [category, setCategory] = useState("all");
  const [useLocation, setUseLocation] = useState(true);

  // Matches state — empty by default, ready for backend API response
  // BACKEND: fetch `/api/skillswap/matches?teach=${canTeach}&learn=${wantsToLearn}&radius=${radius}`
  const [matches, setMatches] = useState<SkillSwapMatch[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddTeach = (skill: string) => {
    if (!canTeach.includes(skill)) setCanTeach([...canTeach, skill]);
  };

  const handleAddLearn = (skill: string) => {
    if (!wantsToLearn.includes(skill)) setWantsToLearn([...wantsToLearn, skill]);
  };

  const handleRemoveTeach = (skill: string) => {
    setCanTeach(canTeach.filter((s) => s !== skill));
  };

  const handleRemoveLearn = (skill: string) => {
    setWantsToLearn(wantsToLearn.filter((s) => s !== skill));
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <SkillSwapHeader matchCount={matches.length} skillsInNetwork={canTeach.length + wantsToLearn.length} />

      {/* Main 2-Column or 3-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Skill Profile & Filters (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <SkillProfilePanel
            canTeach={canTeach}
            wantsToLearn={wantsToLearn}
            onAddTeachSkill={handleAddTeach}
            onAddLearnSkill={handleAddLearn}
            onRemoveTeachSkill={handleRemoveTeach}
            onRemoveLearnSkill={handleRemoveLearn}
          />

          <SkillSwapFilters
            selectedRadius={radius}
            onRadiusChange={setRadius}
            sortBy={sortBy}
            onSortChange={setSortBy}
            selectedCategory={category}
            onCategoryChange={setCategory}
            useLocation={useLocation}
            onToggleLocation={setUseLocation}
            onReset={() => {
              setRadius(20);
              setSortBy("score");
              setCategory("all");
            }}
          />
        </div>

        {/* Center/Right: Matches List & AI Assistant (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {matches.length === 0 ? (
            <div className="space-y-6">
              <EmptyState
                icon={<Repeat2 className="w-8 h-8 text-[#3788FE]" />}
                title="No SkillSwap matches found yet"
                description="Add more skills you can teach and skills you want to learn to discover peer students who complement your profile."
                action={{
                  label: "Explore Discover Directory",
                  href: "/discover",
                }}
              />

              {/* Matching Engine Explanation */}
              <div className="p-6 rounded-3xl bg-gradient-to-r from-[#3788FE]/10 via-[#BEB3FF]/15 to-[#FFD7E0]/20 border border-[#BEB3FF]/40 text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] space-y-2">
                <p className="font-bold text-[rgb(15_12_30)] dark:text-white flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#3788FE]" />
                  <span>How SkillSwap Matching Works</span>
                </p>
                <p className="leading-relaxed">
                  When you connect your backend matching engine, AptTrove automatically computes the intersection of your teaching/learning tags against all students within your selected radius ({radius} km).
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {matches.map((match) => (
                <SkillMatchCard key={match.id} match={match} />
              ))}
            </div>
          )}

          {/* Contextual AI Assistant Panel for SkillSwap */}
          <div className="h-[380px]">
            <AIAssistant context="skillswap" placeholder="Ask AI about candidate complementarity or schedule fit..." />
          </div>
        </div>

      </div>
    </div>
  );
}
