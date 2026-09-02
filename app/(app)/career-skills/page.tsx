"use client";

import { useState } from "react";
import { TrendingUp, Sparkles, CheckCircle2, Clock, ArrowRight } from "lucide-react";
import { SkillChip } from "@/components/shared/skill-chip";
import { CareerPath } from "@/lib/types";

export default function CareerSkillsPage() {
  // Sample architected career paths ready for backend/admin sync
  const careerPaths: CareerPath[] = [
    {
      id: "ai-engineer",
      title: "AI / GenAI Engineer",
      description: "Building production LLM architectures, agent pipelines, fine-tuning models, and vector retrieval systems.",
      requiredSkills: [
        { id: "python", name: "Python", category: "Backend" },
        { id: "pytorch", name: "PyTorch", category: "AI/ML" },
        { id: "nlp", name: "NLP", category: "AI/ML" },
        { id: "fastapi", name: "FastAPI", category: "Backend" },
      ],
      niceToHaveSkills: [
        { id: "docker", name: "Docker", category: "Cloud" },
        { id: "langchain", name: "LangChain", category: "AI/ML" },
      ],
      lastUpdatedAt: "September 2026",
      trending: true,
      demandLevel: "Very High",
    },
    {
      id: "frontend-architect",
      title: "Modern Frontend Architect",
      description: "Developing responsive, high-performance web applications using modern component paradigms and design tokens.",
      requiredSkills: [
        { id: "react", name: "React", category: "Frontend" },
        { id: "nextjs", name: "Next.js", category: "Frontend" },
        { id: "typescript", name: "TypeScript", category: "Frontend" },
        { id: "tailwind", name: "Tailwind CSS", category: "Frontend" },
      ],
      niceToHaveSkills: [
        { id: "figma", name: "Figma", category: "UI/UX" },
        { id: "a11y", name: "Web Accessibility", category: "Frontend" },
      ],
      lastUpdatedAt: "September 2026",
      trending: true,
      demandLevel: "High",
    },
    {
      id: "product-designer",
      title: "Product Designer & Design Technologist",
      description: "Crafting end-to-end user journeys, design systems, interactive prototypes, and usability research.",
      requiredSkills: [
        { id: "figma", name: "Figma", category: "UI/UX" },
        { id: "ux-research", name: "UX Research", category: "UI/UX" },
        { id: "prototyping", name: "Prototyping", category: "UI/UX" },
        { id: "design-systems", name: "Design Systems", category: "UI/UX" },
      ],
      niceToHaveSkills: [
        { id: "html-css", name: "HTML/CSS", category: "Frontend" },
        { id: "motion", name: "Motion Design", category: "Design" },
      ],
      lastUpdatedAt: "August 2026",
      trending: false,
      demandLevel: "High",
    },
  ];

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-[#BEB3FF]/20 to-[#FFD7E0]/30 border border-[#BEB3FF]/40 shadow-sm">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-600 dark:text-emerald-400">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Market-Updated Career Skills Map</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[rgb(15_12_30)] dark:text-white">
            Industry Skill Requirements & Career Trends
          </h1>
          <p className="text-xs sm:text-sm text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] max-w-xl">
            Continuously updated skill combinations associated with emerging tech roles. Compare your profile to identify learning priorities.
          </p>
        </div>
      </div>

      {/* Admin Grounding Notice */}
      <div className="p-4 rounded-2xl bg-white/70 dark:bg-[#16122a]/70 border border-[#BEB3FF]/30 flex items-center justify-between text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
        <span className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-[#3788FE]" />
          <span>Curated by AptTrove Research Team · Last Industry Sync: September 2026</span>
        </span>
        <span className="text-[11px] font-semibold bg-[#3788FE]/10 text-[#3788FE] px-2.5 py-1 rounded-full">
          Live Taxonomy
        </span>
      </div>

      {/* Career Paths Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {careerPaths.map((career) => (
          <div
            key={career.id}
            className="p-6 rounded-3xl bg-white/80 dark:bg-[#16122a]/80 border border-[#BEB3FF]/40 backdrop-blur-md shadow-sm hover:shadow-xl hover:border-[#3788FE]/60 transition-all duration-200 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300">
                  {career.demandLevel} Demand
                </span>
                {career.trending && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#3788FE]/10 text-[#3788FE] border border-[#3788FE]/30">
                    🔥 Trending
                  </span>
                )}
              </div>

              <h3 className="text-base font-bold text-[rgb(15_12_30)] dark:text-white">
                {career.title}
              </h3>

              <p className="text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] leading-relaxed">
                {career.description}
              </p>

              {/* Required Core Skills */}
              <div className="space-y-1.5 pt-2 border-t border-[#BEB3FF]/20">
                <span className="text-[10px] font-bold uppercase text-[#3788FE] block">
                  Core Industry Requirements:
                </span>
                <div className="flex flex-wrap gap-1">
                  {career.requiredSkills.map((s) => (
                    <SkillChip key={s.id} skill={s.name} variant="teach" size="sm" />
                  ))}
                </div>
              </div>

              {/* Nice to Have */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold uppercase text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] block">
                  High-Value Complementary Skills:
                </span>
                <div className="flex flex-wrap gap-1">
                  {career.niceToHaveSkills.map((s) => (
                    <SkillChip key={s.id} skill={s.name} variant="learn" size="sm" />
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#BEB3FF]/20 flex items-center justify-between text-xs">
              <span className="text-[11px] text-[rgb(160_155_180)] dark:text-[rgb(110_100_140)]">
                Updated {career.lastUpdatedAt}
              </span>
              <button
                type="button"
                className="text-xs font-bold text-[#3788FE] hover:underline flex items-center gap-1"
              >
                <span>Add to Goals</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
