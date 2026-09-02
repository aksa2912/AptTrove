import { Users, Sparkles } from "lucide-react";

export function TeamBuilderHeader() {
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#BEB3FF]/20 via-[#FFF5F3] to-[#FFD7E0]/35 dark:from-[#16122a] dark:via-[#120f23] dark:to-[#1f162e] border border-[#BEB3FF]/40 shadow-sm relative overflow-hidden mb-8">
      <div className="space-y-3 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 dark:bg-white/10 border border-[#BEB3FF]/40 text-xs font-bold text-[#a03d58] dark:text-[#FFD7E0]">
          <Users className="w-3.5 h-3.5" />
          <span>Balanced Formation Engine</span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[rgb(15_12_30)] dark:text-white">
          AI Team Builder
        </h1>

        <p className="text-xs sm:text-sm text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] max-w-2xl leading-relaxed">
          Whether it's a hackathon, startup venture, college project, or personal idea — find the right people based on{" "}
          <strong className="text-[rgb(15_12_30)] dark:text-white">Skills + Availability + Location + Team Fit</strong>.
        </p>

        {/* 4 Pillars Badge Row */}
        <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
          <span className="px-2.5 py-1 rounded-lg bg-[#3788FE]/10 text-[#3788FE] font-bold border border-[#3788FE]/30">
            1. Skills Compatibility
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-[#BEB3FF]/20 text-[#5446a8] dark:text-[#BEB3FF] font-bold border border-[#BEB3FF]/40">
            2. Schedule Overlap
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-[#FFD7E0]/40 text-[#a03d58] dark:text-[#FFD7E0] font-bold border border-[#FFD7E0]">
            3. Radius (10–50 km)
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/30">
            4. Team Role Balance
          </span>
        </div>
      </div>
    </div>
  );
}

export default TeamBuilderHeader;
