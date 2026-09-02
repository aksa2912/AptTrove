import Link from "next/link";
import { Repeat2, Sparkles, ArrowRight, CheckCircle2, Clock, MapPin } from "lucide-react";
import { SkillChip } from "@/components/shared/skill-chip";
import { MatchScore } from "@/components/shared/match-score";
import { ROUTES } from "@/lib/constants/routes";

export function SkillSwapPreview() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#BEB3FF]/20 border border-[#BEB3FF]/40 text-xs font-bold text-[#5446a8] dark:text-[#BEB3FF]">
            <Repeat2 className="w-3.5 h-3.5" />
            <span>Product Pillar 01</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[rgb(15_12_30)] dark:text-white">
            Teach what you know. Learn what you love.
          </h2>
          <p className="text-sm sm:text-base text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
            AptTrove matches you with peers who want to learn what you can teach, and can teach what you want to learn.
          </p>
        </div>

        {/* Visual Preview Card (Clearly marked as UI Preview) */}
        <div className="max-w-4xl mx-auto rounded-[32px] border border-[#BEB3FF]/40 bg-gradient-to-b from-white/95 via-[#FFF5F3]/80 to-[#BEB3FF]/10 dark:from-[#16122a]/95 dark:via-[#120f23]/80 dark:to-transparent backdrop-blur-xl shadow-2xl p-6 sm:p-10 relative overflow-hidden">
          
          {/* Top Preview Badge */}
          <div className="flex items-center justify-between pb-6 border-b border-[#BEB3FF]/20">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
                Interactive Concept Preview
              </span>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#3788FE]/10 text-[#3788FE] border border-[#3788FE]/30">
              Two-Way Complement
            </span>
          </div>

          {/* Interactive Match Visual Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center py-8">
            
            {/* Student A Side (5 cols) */}
            <div className="md:col-span-5 p-5 rounded-2xl bg-white/80 dark:bg-[#1f1938]/80 border border-[#3788FE]/30 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#3788FE] to-[#BEB3FF] text-white font-bold flex items-center justify-center text-sm shadow-inner">
                  YOU
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[rgb(15_12_30)] dark:text-white">Your Profile</h4>
                  <p className="text-[11px] text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">Frontend Specialist</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase text-[#3788FE]">You Can Teach:</p>
                <div className="flex flex-wrap gap-1.5">
                  <SkillChip skill="React" variant="teach" size="sm" />
                  <SkillChip skill="Figma" variant="teach" size="sm" />
                  <SkillChip skill="Next.js" variant="teach" size="sm" />
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#BEB3FF]/20">
                <p className="text-[10px] font-bold uppercase text-[#5446a8] dark:text-[#BEB3FF]">You Want to Learn:</p>
                <div className="flex flex-wrap gap-1.5">
                  <SkillChip skill="Python" variant="learn" size="sm" />
                  <SkillChip skill="Machine Learning" variant="learn" size="sm" />
                </div>
              </div>
            </div>

            {/* Central Match Score & Connector (2 cols) */}
            <div className="md:col-span-2 flex flex-col items-center justify-center gap-2 py-4">
              <div className="w-10 h-10 rounded-full bg-[#3788FE] text-white flex items-center justify-center shadow-lg shadow-[#3788FE]/30 animate-pulse">
                <Repeat2 className="w-5 h-5" />
              </div>
              <MatchScore score={92} size="sm" />
              <span className="text-[10px] font-bold uppercase text-emerald-600 dark:text-emerald-400">
                High Overlap
              </span>
            </div>

            {/* Student B Side (5 cols) */}
            <div className="md:col-span-5 p-5 rounded-2xl bg-white/80 dark:bg-[#1f1938]/80 border border-[#BEB3FF]/40 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#BEB3FF] to-[#FFD7E0] text-[#1f1545] font-bold flex items-center justify-center text-sm shadow-inner">
                  AP
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[rgb(15_12_30)] dark:text-white">Aarav Patel</h4>
                  <p className="text-[11px] text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">AI/ML Student · 7.8 km away</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase text-[#5446a8] dark:text-[#BEB3FF]">They Can Teach:</p>
                <div className="flex flex-wrap gap-1.5">
                  <SkillChip skill="Python" variant="learn" size="sm" />
                  <SkillChip skill="Machine Learning" variant="learn" size="sm" />
                  <SkillChip skill="PyTorch" variant="learn" size="sm" />
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#BEB3FF]/20">
                <p className="text-[10px] font-bold uppercase text-[#3788FE]">They Want to Learn:</p>
                <div className="flex flex-wrap gap-1.5">
                  <SkillChip skill="React" variant="teach" size="sm" />
                  <SkillChip skill="Figma" variant="teach" size="sm" />
                </div>
              </div>
            </div>

          </div>

          {/* Expandable "Why This Match?" Section */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-[#3788FE]/5 via-[#BEB3FF]/10 to-[#FFD7E0]/15 border border-[#BEB3FF]/30 space-y-2">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#3788FE] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Transparent Match Rationale:</span>
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>You want to learn Python; they teach Python</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>They want to learn React; you teach React</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#3788FE] shrink-0" />
                <span>3.5 hrs schedule overlap (Saturday 2–5 PM)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#a03d58] dark:text-[#FFD7E0] shrink-0" />
                <span>Located 7.8 km away (within 20 km search radius)</span>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-6 text-center">
            <Link
              href={ROUTES.SKILLSWAP}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#3788FE] hover:bg-[#2573e8] text-white text-sm font-bold shadow-lg shadow-[#3788FE]/25 hover:shadow-xl transition-all"
            >
              <span>Explore SkillSwap Matches</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

export default SkillSwapPreview;
