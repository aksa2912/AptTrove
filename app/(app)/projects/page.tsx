"use client";

import { useState } from "react";
import Link from "next/link";
import { ProjectCard } from "@/components/discover/project-card";
import { EmptyState } from "@/components/shared/empty-state";
import { Project } from "@/lib/types";
import { FolderKanban, Plus, Sparkles, Users } from "lucide-react";
import { ROUTES } from "@/lib/constants/routes";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<"all" | "my-projects">("all");

  // Backend placeholders
  // BACKEND: fetch `/api/projects` and `/api/projects/my`
  const [openProjects, setOpenProjects] = useState<Project[]>([]);
  const [myProjects, setMyProjects] = useState<Project[]>([]);

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#3788FE]/15 via-[#BEB3FF]/20 to-[#FFD7E0]/30 border border-[#BEB3FF]/40 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 dark:bg-white/10 border border-[#BEB3FF]/40 text-xs font-bold text-[#3788FE]">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>Project Collaborations</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[rgb(15_12_30)] dark:text-white">
            Projects & Hackathon Teams
          </h1>
          <p className="text-xs sm:text-sm text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] max-w-xl">
            Explore active team seats looking for specific skills or launch a new initiative.
          </p>
        </div>

        <Link
          href={ROUTES.TEAM_BUILDER}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#3788FE] hover:bg-[#2573e8] text-white text-xs font-bold shadow-md shadow-[#3788FE]/25 hover:shadow-lg transition-all self-start md:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Launch New Team</span>
        </Link>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-[#BEB3FF]/30 pb-3">
        <button
          type="button"
          onClick={() => setActiveTab("all")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === "all"
              ? "bg-[#3788FE] text-white shadow-md shadow-[#3788FE]/25"
              : "bg-white/70 dark:bg-white/5 text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] hover:bg-[#BEB3FF]/20"
          }`}
        >
          <Users className="w-3.5 h-3.5" />
          <span>Open Team Opportunities ({openProjects.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("my-projects")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === "my-projects"
              ? "bg-[#3788FE] text-white shadow-md shadow-[#3788FE]/25"
              : "bg-white/70 dark:bg-white/5 text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] hover:bg-[#BEB3FF]/20"
          }`}
        >
          <FolderKanban className="w-3.5 h-3.5" />
          <span>My Projects ({myProjects.length})</span>
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "all" && (
        <>
          {openProjects.length === 0 ? (
            <EmptyState
              icon={<FolderKanban className="w-8 h-8 text-[#3788FE]" />}
              title="No project teams seeking members right now"
              description="Be the first in your campus or local radius to create an opportunity!"
              action={{
                label: "Form a Team with AI",
                href: "/team-builder",
              }}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {openProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          )}
        </>
      )}

      {activeTab === "my-projects" && (
        <>
          {myProjects.length === 0 ? (
            <EmptyState
              icon={<Sparkles className="w-8 h-8 text-[#BEB3FF]" />}
              title="You haven't launched or joined any projects yet"
              description="Start a startup concept, hackathon entry, or research group using AI Team Builder."
              action={{
                label: "Start Your First Project",
                href: "/team-builder",
              }}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {myProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
