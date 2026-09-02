"use client";

import { useState } from "react";
import { MapPin, Navigation, Compass, ShieldCheck } from "lucide-react";
import { RADIUS_OPTIONS, RadiusOption } from "@/lib/constants/routes";

export function LocationSection() {
  const [selectedRadius, setSelectedRadius] = useState<RadiusOption>(20);

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 md:p-16 rounded-[36px] bg-gradient-to-br from-[#BEB3FF]/15 via-[#FFF5F3] to-[#FFD7E0]/20 dark:from-[#16122a] dark:via-[#120f23] dark:to-[#1a132e] border border-[#BEB3FF]/40 shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Description (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD7E0]/40 border border-[#FFD7E0] text-xs font-bold text-[#a03d58] dark:text-[#FFD7E0]">
                <MapPin className="w-3.5 h-3.5" />
                <span>Geographic Precision</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[rgb(15_12_30)] dark:text-white leading-tight">
                Practical connections happen within reach.
              </h2>

              <p className="text-sm sm:text-base text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] leading-relaxed">
                Whether you prefer in-person study sessions on campus, local hackathons, or meeting nearby creators in a coffee shop, AptTrove lets you filter talent by exact radius increments.
              </p>

              {/* Radius Selector Interactive Demo */}
              <div className="space-y-3 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[rgb(15_12_30)] dark:text-white">
                  Try Search Radius:
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {RADIUS_OPTIONS.map((r) => (
                    <button
                      key={r}
                      onClick={() => setSelectedRadius(r)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer ${
                        selectedRadius === r
                          ? "bg-[#3788FE] text-white shadow-md shadow-[#3788FE]/30 scale-105"
                          : "bg-white/80 dark:bg-white/5 text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] border border-[#BEB3FF]/40 hover:border-[#3788FE]"
                      }`}
                    >
                      {r} km
                    </button>
                  ))}
                </div>
              </div>

              {/* Feature Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-2.5">
                  <Navigation className="w-4 h-4 text-[#3788FE] shrink-0 mt-0.5" />
                  <p className="text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
                    <strong className="text-[rgb(15_12_30)] dark:text-white">One-click Geolocation:</strong> Use your live device coordinates or type manually.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
                    <strong className="text-[rgb(15_12_30)] dark:text-white">Privacy Guard:</strong> Exact coordinates are never broadcast to other users.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Interactive Radius Visualization (5 cols) */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-[320px] aspect-square rounded-3xl bg-white/60 dark:bg-[#1f1938]/60 border border-[#BEB3FF]/40 p-6 flex flex-col items-center justify-center text-center backdrop-blur-md shadow-inner">
                {/* Concentric circles SVG */}
                <div className="relative w-48 h-48 flex items-center justify-center">
                  <div
                    className="absolute rounded-full border border-dashed border-[#BEB3FF] transition-all duration-500"
                    style={{
                      width: `${(selectedRadius / 50) * 100}%`,
                      height: `${(selectedRadius / 50) * 100}%`,
                      backgroundColor: "rgba(55, 136, 254, 0.08)",
                    }}
                  />
                  <div className="w-28 h-28 rounded-full border border-[#3788FE]/30 bg-[#3788FE]/5 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#3788FE] text-white flex items-center justify-center shadow-lg shadow-[#3788FE]/40 animate-pulse">
                      <MapPin className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-1">
                  <span className="text-sm font-extrabold text-[#3788FE]">
                    {selectedRadius} km Search Radius
                  </span>
                  <p className="text-[11px] text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
                    Exploring candidates in your immediate local network
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default LocationSection;
