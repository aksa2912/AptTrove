"use client";

import { useState } from "react";
import { DiscoverSearch } from "@/components/discover/discover-search";
import { DiscoverFilters } from "@/components/discover/discover-filters";
import { StudentCard } from "@/components/discover/student-card";
import { ProjectCard } from "@/components/discover/project-card";
import { EmptyState } from "@/components/shared/empty-state";
import { RadiusOption } from "@/lib/constants/routes";
import { StudentProfile, Project } from "@/lib/types";
import { Compass, Sparkles } from "lucide-react";

export default function DiscoverPage() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<"people" | "projects" | "teams" | "skills">("people");
  const [category, setCategory] = useState("all");
  const [radius, setRadius] = useState<RadiusOption>(20);
  const [yearFilter, setYearFilter] = useState("all");

  // Backend response placeholders
  // BACKEND: fetch `/api/discover?tab=${activeTab}&q=${search}&cat=${category}&radius=${radius}`
  const [people, setPeople] = useState<StudentProfile[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#BEB3FF]/20 via-[#FFF5F3] to-[#FFD7E0]/30 dark:from-[#16122a] dark:via-[#120f23] dark:to-[#1a142c] border border-[#BEB3FF]/40 shadow-sm">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 dark:bg-white/10 border border-[#BEB3FF]/40 text-xs font-bold text-[#3788FE]">
            <Compass className="w-3.5 h-3.5" />
            <span>Campus & Local Network Directory</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[rgb(15_12_30)] dark:text-white">
            Discover Talent & Project Opportunities
          </h1>
          <p className="text-xs sm:text-sm text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] max-w-xl">
            Search peer students, hackathon projects, and active teams within your geographic radius.
          </p>
        </div>
      </div>

      {/* Search Bar + Tabs */}
      <DiscoverSearch
        value={search}
        onChange={setSearch}
        onClear={() => setSearch("")}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Main Grid: Filters + Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Filters (4 cols) */}
        <div className="lg:col-span-4">
          <DiscoverFilters
            selectedCategory={category}
            onCategoryChange={setCategory}
            radius={radius}
            onRadiusChange={setRadius}
            yearFilter={yearFilter}
            onYearChange={setYearFilter}
            onReset={() => {
              setCategory("all");
              setRadius(20);
              setYearFilter("all");
              setSearch("");
            }}
          />
        </div>

        {/* Right Content Area (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {activeTab === "people" && (
            <>
              {people.length === 0 ? (
                <EmptyState
                  icon={<Compass className="w-8 h-8 text-[#3788FE]" />}
                  title="No people found in this radius"
                  description="Try adjusting your filters or expanding your search radius to explore students outside your immediate area."
                />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {people.map((p) => (
                    <StudentCard key={p.id} profile={p} />
                  ))}
                </div>
              )}
            </>
          )}

          {activeTab === "projects" && (
            <>
              {projects.length === 0 ? (
                <EmptyState
                  icon={<Sparkles className="w-8 h-8 text-[#a03d58] dark:text-[#FFD7E0]" />}
                  title="No open projects found matching criteria"
                  description="Be the first to launch an idea! Use the AI Team Builder to publish your project."
                  action={{
                    label: "Build a Project Team",
                    href: "/team-builder",
                  }}
                />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.map((proj) => (
                    <ProjectCard key={proj.id} project={proj} />
                  ))}
                </div>
              )}
            </>
          )}

          {(activeTab === "teams" || activeTab === "skills") && (
            <EmptyState
              icon={<Compass className="w-8 h-8 text-[#5446a8] dark:text-[#BEB3FF]" />}
              title={`No active ${activeTab} available yet`}
              description="Connect your backend database to populate full category listings."
            />
          )}
        </div>
      </div>
    </div>
  );
}
