import { Repeat2, Sparkles } from "lucide-react";

export interface SkillSwapHeaderProps {
  matchCount?: number;
  skillsInNetwork?: number;
}

export function SkillSwapHeader({
  matchCount = 0,
  skillsInNetwork = 0,
}: SkillSwapHeaderProps) {
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#3788FE]/15 via-[#BEB3FF]/20 to-[#FFD7E0]/30 border border-[#BEB3FF]/40 shadow-sm relative overflow-hidden mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 dark:bg-white/10 border border-[#BEB3FF]/40 text-xs font-bold text-[#3788FE]">
            <Repeat2 className="w-3.5 h-3.5" />
            <span>SkillSwap Engine</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[rgb(15_12_30)] dark:text-white">
            Teach what you know. Learn what you love.
          </h1>

          <p className="text-xs sm:text-sm text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] max-w-xl">
            AptTrove matches you with peer students who have complementary skills, overlapping study schedules, and close proximity.
          </p>
        </div>

        {/* Dynamic Metric Pills (Ready for backend) */}
        <div className="flex items-center gap-3">
          <div className="px-4 py-2.5 rounded-2xl bg-white/80 dark:bg-[#16122a]/80 border border-[#BEB3FF]/40 text-center shadow-sm min-w-[100px]">
            <p className="text-lg font-black text-[#3788FE]">
              {matchCount > 0 ? matchCount : "—"}
            </p>
            <p className="text-[10px] font-bold uppercase tracking-wider text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
              Matches Found
            </p>
          </div>

          <div className="px-4 py-2.5 rounded-2xl bg-white/80 dark:bg-[#16122a]/80 border border-[#BEB3FF]/40 text-center shadow-sm min-w-[100px]">
            <p className="text-lg font-black text-[#5446a8] dark:text-[#BEB3FF]">
              {skillsInNetwork > 0 ? skillsInNetwork : "—"}
            </p>
            <p className="text-[10px] font-bold uppercase tracking-wider text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
              Network Skills
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillSwapHeader;
