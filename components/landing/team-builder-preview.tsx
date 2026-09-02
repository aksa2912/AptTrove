import Link from "next/link";
import { Users, Sparkles, ArrowRight, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";
import { SkillChip } from "@/components/shared/skill-chip";
import { ROUTES } from "@/lib/constants/routes";

export function TeamBuilderPreview() {
  const seats = [
    { seat: 1, role: "Founder / Lead", status: "Filled", name: "You", skills: ["Product", "Research"], filled: true },
    { seat: 2, role: "Frontend Engineer", status: "Filled", name: "Rohan M.", skills: ["React", "TypeScript"], filled: true },
    { seat: 3, role: "AI / ML Engineer", status: "Filled", name: "Ananya S.", skills: ["PyTorch", "FastAPI"], filled: true },
    { seat: 4, role: "UI / UX Designer", status: "Open Gap", name: "Open Seat", skills: ["Figma", "Design Systems"], filled: false, gap: true },
    { seat: 5, role: "Backend Architect", status: "Open", name: "Open Seat", skills: ["PostgreSQL", "Go"], filled: false },
  ];

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFD7E0]/40 border border-[#FFD7E0] text-xs font-bold text-[#a03d58] dark:text-[#FFD7E0]">
            <Users className="w-3.5 h-3.5" />
            <span>Product Pillar 02</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[rgb(15_12_30)] dark:text-white">
            Turn an idea into a balanced team.
          </h2>
          <p className="text-sm sm:text-base text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
            For hackathon crews, startup founders, college projects, and research builders. Find the missing talent pieces.
          </p>
        </div>

        {/* Team Builder Visual Box */}
        <div className="max-w-4xl mx-auto rounded-[32px] border border-[#BEB3FF]/40 bg-gradient-to-b from-white/95 via-[#FFF5F3]/80 to-[#FFD7E0]/15 dark:from-[#16122a]/95 dark:via-[#120f23]/80 dark:to-transparent backdrop-blur-xl shadow-2xl p-6 sm:p-10 relative overflow-hidden">
          
          {/* Top Project Title & Seat Counter */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#BEB3FF]/20">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#3788FE]/10 text-[#3788FE] border border-[#3788FE]/30">
                  Hackathon / Startup
                </span>
                <span className="text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
                  Radius: 30 km
                </span>
              </div>
              <h3 className="text-lg font-bold text-[rgb(15_12_30)] dark:text-white mt-1">
                HealthPulse — AI Medical Triage Assistant
              </h3>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto bg-white/80 dark:bg-[#1f1938] px-3.5 py-1.5 rounded-xl border border-[#BEB3FF]/40 shadow-sm">
              <Users className="w-4 h-4 text-[#3788FE]" />
              <span className="text-xs font-bold text-[rgb(15_12_30)] dark:text-white">
                3 / 5 Seats Filled
              </span>
            </div>
          </div>

          {/* Missing Skill Gap Alert */}
          <div className="my-6 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 flex items-start gap-3 text-xs text-amber-800 dark:text-amber-300">
            <AlertTriangle className="w-4 h-4 shrink-0 text-amber-500 mt-0.5" />
            <div>
              <strong className="font-semibold">Skill Gap Detected:</strong> Your project lacks a dedicated{" "}
              <span className="font-bold underline">UI/UX Designer</span>. AptTrove is actively recommending local designers with weekend availability.
            </div>
          </div>

          {/* 5 Team Seats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-8">
            {seats.map((seat) => (
              <div
                key={seat.seat}
                className={`p-3.5 rounded-2xl border transition-all flex flex-col justify-between min-h-[140px] ${
                  seat.filled
                    ? "bg-white/80 dark:bg-[#1f1938]/80 border-[#3788FE]/30 shadow-sm"
                    : seat.gap
                    ? "bg-rose-50/50 dark:bg-rose-950/20 border-dashed border-rose-300 dark:border-rose-800 shadow-sm"
                    : "bg-white/40 dark:bg-white/5 border-dashed border-[#BEB3FF]/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
                      Seat #{seat.seat}
                    </span>
                    <span
                      className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                        seat.filled
                          ? "bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300"
                          : seat.gap
                          ? "bg-rose-100 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                      }`}
                    >
                      {seat.status}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-[rgb(15_12_30)] dark:text-white truncate">
                    {seat.role}
                  </h4>
                  <p className="text-[11px] text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] mt-0.5">
                    {seat.name}
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-1">
                  {seat.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[9px] px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/5 text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action CTA */}
          <div className="text-center pt-2">
            <Link
              href={ROUTES.TEAM_BUILDER}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#3788FE] hover:bg-[#2573e8] text-white text-sm font-bold shadow-lg shadow-[#3788FE]/25 hover:shadow-xl transition-all"
            >
              <span>Build Your Project Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

export default TeamBuilderPreview;
