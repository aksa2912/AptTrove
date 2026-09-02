import Link from "next/link";
import { Sparkles, ArrowRight, Repeat2, Users } from "lucide-react";
import { ROUTES } from "@/lib/constants/routes";

export function FinalCtaSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-[40px] p-8 sm:p-14 md:p-20 bg-gradient-to-tr from-[#3788FE] via-[#7B70FF] to-[#BEB3FF] text-white shadow-2xl shadow-[#3788FE]/30 overflow-hidden text-center">
          
          {/* Background Decorative Rings */}
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full border border-white/20 pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full border border-white/20 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 border border-white/30 text-xs font-bold text-white backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD7E0]" />
              <span>Join the Talent Revolution</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Ready to find the right people for what you want to learn & build?
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
              Create your skills profile, set your availability, and let AptTrove discover your ideal collaborators.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href={ROUTES.SIGNUP}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#FFF5F3] hover:bg-white text-[rgb(15_12_30)] text-base font-extrabold shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-4 h-4 text-[#3788FE]" />
              </Link>
              
              <Link
                href={ROUTES.TEAM_BUILDER}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/15 hover:bg-white/25 text-white border border-white/30 text-base font-bold backdrop-blur-md transition-all duration-200"
              >
                <Users className="w-4 h-4" />
                <span>Build a Team</span>
              </Link>
            </div>

            {/* Micro details */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-white/70">
              <span className="flex items-center gap-1.5">
                <Repeat2 className="w-3.5 h-3.5" /> Peer-to-Peer SkillSwap
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" /> Hackathon & Startup Teams
              </span>
              <span>•</span>
              <span>100% Free for Students</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default FinalCtaSection;
