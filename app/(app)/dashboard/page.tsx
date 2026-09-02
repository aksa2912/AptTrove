"use client";

import Link from "next/link";
import { Repeat2, Users, ArrowRight, Sparkles, MapPin, Clock, ShieldCheck, Compass, Link2 } from "lucide-react";
import { EmptyState } from "@/components/shared/empty-state";
import { ProfileStats } from "@/components/profile/profile-stats";
import { ROUTES } from "@/lib/constants/routes";

export default function DashboardPage() {
  return (
    <div className="space-y-8 pb-16">
      
      {/* 1. Welcome Greeting Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#3788FE]/15 via-[#BEB3FF]/20 to-[#FFD7E0]/30 border border-[#BEB3FF]/40 shadow-sm relative overflow-hidden">
        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 dark:bg-white/10 border border-[#BEB3FF]/40 text-xs font-bold text-[#3788FE]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Welcome back to AptTrove</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[rgb(15_12_30)] dark:text-white">
            Find people who complement what you know.
          </h1>
          <p className="text-xs sm:text-sm text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] max-w-xl">
            Discover peer learning partners via SkillSwap or form a balanced project team with our 4-factor matching engine.
          </p>
        </div>
      </div>

      {/* 2. Core Actions (Two Visually Dominant Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* SKILLSWAP Card */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-[#BEB3FF]/30 via-white to-[#BEB3FF]/10 dark:from-[#1f1638] dark:via-[#16122a] dark:to-[#120f23] border border-[#BEB3FF]/50 shadow-md hover:shadow-xl hover:border-[#3788FE]/60 transition-all duration-200 flex flex-col justify-between space-y-6 group">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#3788FE]/15 text-[#3788FE] flex items-center justify-center shadow-sm">
              <Repeat2 className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#5446a8] dark:text-[#BEB3FF] bg-[#BEB3FF]/20 px-2.5 py-1 rounded-full border border-[#BEB3FF]/30">
              Primary Pillar 01
            </span>
            <h2 className="text-xl font-extrabold text-[rgb(15_12_30)] dark:text-white">
              SkillSwap
            </h2>
            <p className="text-xs sm:text-sm text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] leading-relaxed">
              Find someone who can teach what you want to learn, in exchange for teaching what you already know.
            </p>
          </div>

          <Link
            href={ROUTES.SKILLSWAP}
            className="inline-flex items-center justify-between px-5 py-3 rounded-2xl bg-[#3788FE] hover:bg-[#2573e8] text-white text-xs font-bold shadow-md shadow-[#3788FE]/25 hover:shadow-lg transition-all"
          >
            <span>Find Skill Matches</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* AI TEAM BUILDER Card */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-[#FFD7E0]/40 via-white to-[#FFD7E0]/10 dark:from-[#2a1420] dark:via-[#16122a] dark:to-[#120f23] border border-[#FFD7E0] shadow-md hover:shadow-xl hover:border-[#3788FE]/60 transition-all duration-200 flex flex-col justify-between space-y-6 group">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FFD7E0]/50 text-[#a03d58] dark:text-[#FFD7E0] flex items-center justify-center shadow-sm">
              <Users className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#a03d58] dark:text-[#FFD7E0] bg-[#FFD7E0]/40 px-2.5 py-1 rounded-full border border-[#FFD7E0]">
              Primary Pillar 02
            </span>
            <h2 className="text-xl font-extrabold text-[rgb(15_12_30)] dark:text-white">
              AI Team Builder
            </h2>
            <p className="text-xs sm:text-sm text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] leading-relaxed">
              Turn your startup, hackathon, research, or college project idea into a complete, balanced team within 10–50 km.
            </p>
          </div>

          <Link
            href={ROUTES.TEAM_BUILDER}
            className="inline-flex items-center justify-between px-5 py-3 rounded-2xl bg-[#3788FE] hover:bg-[#2573e8] text-white text-xs font-bold shadow-md shadow-[#3788FE]/25 hover:shadow-lg transition-all"
          >
            <span>Build My Team</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>

      {/* 3. SkillSwap Matches Section */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-[#16122a]/80 border border-[#BEB3FF]/40 backdrop-blur-md shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Repeat2 className="w-4 h-4 text-[#3788FE]" />
            <h3 className="text-sm font-bold text-[rgb(15_12_30)] dark:text-white">
              SkillSwap Opportunities
            </h3>
          </div>
          <Link
            href={ROUTES.SKILLSWAP}
            className="text-xs font-bold text-[#3788FE] hover:underline"
          >
            Explore All →
          </Link>
        </div>

        <EmptyState
          variant="compact"
          title="No active SkillSwap matches yet"
          description="Add skills you can teach and want to learn to unlock peer recommendations."
        />
      </div>

      {/* 4. Team Opportunities Section */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-[#16122a]/80 border border-[#BEB3FF]/40 backdrop-blur-md shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#a03d58] dark:text-[#FFD7E0]" />
            <h3 className="text-sm font-bold text-[rgb(15_12_30)] dark:text-white">
              Projects Looking for Your Skills
            </h3>
          </div>
          <Link
            href={ROUTES.PROJECTS}
            className="text-xs font-bold text-[#3788FE] hover:underline"
          >
            View Projects →
          </Link>
        </div>

        <EmptyState
          variant="compact"
          title="No open project seats currently seeking your profile"
          description="Projects within your radius matching your teaching skills will be highlighted here."
        />
      </div>

      {/* 5. Activity Stats */}
      <ProfileStats />

    </div>
  );
}
