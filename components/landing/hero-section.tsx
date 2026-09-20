"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, MapPin, Repeat2, Users, Compass } from "lucide-react";
import { ROUTES } from "@/lib/constants/routes";

export function HeroSection() {
  const nodes = [
    { label: "Frontend", color: "bg-[#3788FE]/15 text-[#3788FE] border-[#3788FE]/40", top: "10%", left: "15%" },
    { label: "AI / ML", color: "bg-[#BEB3FF]/25 text-[#5446a8] dark:text-[#d3cbff] border-[#BEB3FF]/50", top: "15%", right: "12%" },
    { label: "UI / UX", color: "bg-[#FFD7E0]/40 text-[#a03d58] dark:text-[#ffc1ce] border-[#FFD7E0]", top: "50%", right: "5%" },
    { label: "Backend", color: "bg-[#3788FE]/15 text-[#3788FE] border-[#3788FE]/40", bottom: "12%", right: "20%" },
    { label: "Research", color: "bg-[#BEB3FF]/25 text-[#5446a8] dark:text-[#d3cbff] border-[#BEB3FF]/50", bottom: "15%", left: "12%" },
    { label: "Product", color: "bg-[#FFD7E0]/40 text-[#a03d58] dark:text-[#ffc1ce] border-[#FFD7E0]", top: "45%", left: "5%" },
  ];

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute inset-0 bg-radial from-[#BEB3FF]/20 via-[#FFD7E0]/10 to-transparent pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#3788FE]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Story Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#3788FE]/10 via-[#BEB3FF]/20 to-[#FFD7E0]/30 border border-[#BEB3FF]/40 text-xs font-semibold text-[rgb(15_12_30)] dark:text-white shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#3788FE]" />
              <span>A Treasure Trove of Aptitudes</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[rgb(15_12_30)] dark:text-white leading-[1.1]">
              What if the{" "}
              <span className="text-[#3788FE]  underline-offset-8">
                right connection
              </span>{" "}
              could find you?
            </h1>

            {/* Subtitle / Core Idea */}
            <p className="text-base sm:text-lg text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              AptTrove helps you find learning partners, build balanced project teams, and discover collaborators based on{" "}
              <strong className="text-[rgb(15_12_30)] dark:text-white font-semibold">Skills + Availability + Location + Team Fit</strong>.
            </p>
             <p className="text-base sm:text-lg text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              (This project is currently under process, the backend will be updated before the hackathon, for now you can see the frontend prototype )
             
            </p>

            {/* 4 Pillars Mini Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs">
              <span className="px-3 py-1 rounded-lg bg-[#3788FE]/10 text-[#3788FE] font-bold border border-[#3788FE]/30 flex items-center gap-1.5">
                <Repeat2 className="w-3.5 h-3.5" /> Skills
              </span>
              <span className="text-[#BEB3FF] font-bold">+</span>
              <span className="px-3 py-1 rounded-lg bg-[#BEB3FF]/20 text-[#5446a8] dark:text-[#BEB3FF] font-bold border border-[#BEB3FF]/40 flex items-center gap-1.5">
                Time
              </span>
              <span className="text-[#BEB3FF] font-bold">+</span>
              <span className="px-3 py-1 rounded-lg bg-[#FFD7E0]/30 text-[#a03d58] dark:text-[#FFD7E0] font-bold border border-[#FFD7E0] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> Location
              </span>
              <span className="text-[#BEB3FF] font-bold">+</span>
              <span className="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/30 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" /> Team Fit
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <Link
                href={ROUTES.SIGNUP}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-[#3788FE] hover:bg-[#2573e8] text-white text-base font-bold shadow-xl shadow-[#3788FE]/30 hover:shadow-2xl hover:shadow-[#3788FE]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={ROUTES.DISCOVER}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-white/80 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 text-[rgb(15_12_30)] dark:text-white border border-[#BEB3FF]/40 text-base font-semibold shadow-sm hover:border-[#3788FE] transition-all duration-200"
              >
                <Compass className="w-4 h-4 text-[#3788FE]" />
                <span>Explore AptTrove</span>
              </Link>
            </div>

            {/* Trust highlights */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Zero Social Media Clutter</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#3788FE]" />
                <span>Transparent Match Scoring</span>
              </div>
            </div>
          </div>

          {/* Right Visual Graphic (5 cols) — Central Talent Trove Constellation */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              
              {/* Outer glowing orbital rings */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#BEB3FF]/30 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-8 rounded-full border border-[#3788FE]/20" />
              <div className="absolute inset-16 rounded-full border border-dashed border-[#FFD7E0]/40 animate-[spin_40s_linear_infinite_reverse]" />

              {/* Central Crystal Trove Gem */}
              <div className="relative z-10 w-28 h-28 rounded-3xl bg-gradient-to-tr from-[#3788FE] via-[#BEB3FF] to-[#FFD7E0] p-1 shadow-2xl shadow-[#3788FE]/40 animate-float">
                <div className="w-full h-full bg-[#FFF5F3] dark:bg-[#120f23] rounded-[22px] flex flex-col items-center justify-center p-3 text-center">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#3788FE] to-[#BEB3FF] flex items-center justify-center text-white shadow-md shadow-[#3788FE]/30 mb-1">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-black tracking-tight text-[rgb(15_12_30)] dark:text-white">
                    APT TROVE
                  </span>
                  <span className="text-[9px] font-semibold text-[#3788FE]">
                    Match Engine
                  </span>
                </div>
              </div>

              {/* Orbiting Skill Nodes */}
              {nodes.map((node, i) => (
                <div
                  key={i}
                  style={{
                    top: node.top,
                    bottom: node.bottom,
                    left: node.left,
                    right: node.right,
                  }}
                  className={`absolute z-20 px-3 py-1.5 rounded-full text-xs font-bold border shadow-md backdrop-blur-md transition-all hover:scale-110 cursor-default ${node.color}`}
                >
                  {node.label}
                </div>
              ))}

              {/* Connection Lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                <line x1="50%" y1="50%" x2="25%" y2="18%" stroke="#3788FE" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="78%" y2="20%" stroke="#BEB3FF" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="85%" y2="52%" stroke="#FFD7E0" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="72%" y2="82%" stroke="#3788FE" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="22%" y2="80%" stroke="#BEB3FF" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="15%" y2="48%" stroke="#FFD7E0" strokeWidth="1.5" strokeDasharray="4 4" />
              </svg>

              {/* Floating Mini Match Badge */}
              <div className="absolute -bottom-2 right-4 z-30 px-3.5 py-2 rounded-2xl bg-white/90 dark:bg-[#16122a]/90 border border-[#BEB3FF]/50 shadow-lg backdrop-blur-md flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-[rgb(15_12_30)] dark:text-white">
                  94% Compatibility
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;
