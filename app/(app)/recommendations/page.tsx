"use client";

import { useState } from "react";
import { Lightbulb, Sparkles, Repeat2, Users, Compass, ArrowRight } from "lucide-react";
import { EmptyState } from "@/components/shared/empty-state";
import Link from "next/link";
import { ROUTES } from "@/lib/constants/routes";

export default function RecommendationsPage() {
  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#3788FE]/15 via-[#BEB3FF]/20 to-[#FFD7E0]/30 border border-[#BEB3FF]/40 shadow-sm">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 dark:bg-white/10 border border-[#BEB3FF]/40 text-xs font-bold text-[#3788FE]">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>AI Matching Suggestions</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[rgb(15_12_30)] dark:text-white">
            Curated Recommendations
          </h1>
          <p className="text-xs sm:text-sm text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] max-w-xl">
            AptTrove continuously calculates optimal pairings across your skills, working hours, and campus radius.
          </p>
        </div>
      </div>

      {/* 4 Recommendation Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Recommended SkillSwaps */}
        <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#16122a]/80 border border-[#BEB3FF]/40 backdrop-blur-md shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold text-sm text-[rgb(15_12_30)] dark:text-white">
              <Repeat2 className="w-4 h-4 text-[#3788FE]" />
              <span>Recommended SkillSwaps</span>
            </div>
            <Link
              href={ROUTES.SKILLSWAP}
              className="text-xs font-bold text-[#3788FE] hover:underline flex items-center gap-1"
            >
              <span>Open</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <EmptyState
            variant="compact"
            title="No SkillSwap recommendations yet"
            description="Add skills you can teach and want to learn on your profile to trigger pairing."
          />
        </div>

        {/* Recommended Project Teams */}
        <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#16122a]/80 border border-[#BEB3FF]/40 backdrop-blur-md shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold text-sm text-[rgb(15_12_30)] dark:text-white">
              <Users className="w-4 h-4 text-[#a03d58] dark:text-[#FFD7E0]" />
              <span>Recommended Team Seats</span>
            </div>
            <Link
              href={ROUTES.TEAM_BUILDER}
              className="text-xs font-bold text-[#3788FE] hover:underline flex items-center gap-1"
            >
              <span>Open</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <EmptyState
            variant="compact"
            title="No team seat matches found"
            description="Projects seeking your specific tech stack will be ranked here."
          />
        </div>

        {/* Recommended Local Collaborators */}
        <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#16122a]/80 border border-[#BEB3FF]/40 backdrop-blur-md shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold text-sm text-[rgb(15_12_30)] dark:text-white">
              <Compass className="w-4 h-4 text-[#5446a8] dark:text-[#BEB3FF]" />
              <span>Nearby Builders (20 km)</span>
            </div>
            <Link
              href={ROUTES.DISCOVER}
              className="text-xs font-bold text-[#3788FE] hover:underline flex items-center gap-1"
            >
              <span>Explore</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <EmptyState
            variant="compact"
            title="No local peers discovered in range"
            description="Grant browser geolocation or expand your search radius on the discover page."
          />
        </div>

        {/* Why Recommendations Matter */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-[#3788FE]/10 via-[#BEB3FF]/15 to-[#FFD7E0]/20 border border-[#BEB3FF]/40 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#3788FE]">
              <Sparkles className="w-4 h-4" />
              <span>Transparent AI Rationale</span>
            </div>
            <h3 className="text-base font-bold text-[rgb(15_12_30)] dark:text-white">
              Why AptTrove recommendations are different
            </h3>
            <p className="text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] leading-relaxed">
              Every recommendation comes with a granular score breakdown across skills, time overlap, radius proximity, and team role fit.
            </p>
          </div>

          <div className="text-xs font-semibold text-[#3788FE] flex items-center gap-1.5">
            <span>Powered by AptTrove 4-Factor Engine</span>
          </div>
        </div>

      </div>
    </div>
  );
}
