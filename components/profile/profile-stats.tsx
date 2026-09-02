import { UserStats } from "@/lib/types";
import { Link2, Repeat2, Clock, Users, FolderKanban, Award } from "lucide-react";

export interface ProfileStatsProps {
  stats?: UserStats;
  className?: string;
}

export function ProfileStats({
  stats,
  className = "",
}: ProfileStatsProps) {
  const statItems = [
    {
      label: "Connections",
      value: stats?.connections ? `${stats.connections}` : "—",
      icon: Link2,
      color: "text-[#3788FE] bg-[#3788FE]/10",
    },
    {
      label: "SkillSwaps",
      value: stats?.skillSwapsCompleted ? `${stats.skillSwapsCompleted}` : "—",
      icon: Repeat2,
      color: "text-[#5446a8] dark:text-[#BEB3FF] bg-[#BEB3FF]/20",
    },
    {
      label: "Hours Taught",
      value: stats?.hoursTaught ? `${stats.hoursTaught}h` : "—",
      icon: Clock,
      color: "text-emerald-600 bg-emerald-500/10",
    },
    {
      label: "Hours Learned",
      value: stats?.hoursLearned ? `${stats.hoursLearned}h` : "—",
      icon: Award,
      color: "text-amber-600 bg-amber-500/10",
    },
    {
      label: "Teams Joined",
      value: stats?.teamsJoined ? `${stats.teamsJoined}` : "—",
      icon: Users,
      color: "text-[#a03d58] dark:text-[#FFD7E0] bg-[#FFD7E0]/40",
    },
    {
      label: "Projects Contributed",
      value: stats?.projectsContributed ? `${stats.projectsContributed}` : "—",
      icon: FolderKanban,
      color: "text-[#3788FE] bg-[#3788FE]/10",
    },
  ];

  return (
    <div
      className={`p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-[#16122a]/80 border border-[#BEB3FF]/40 backdrop-blur-md shadow-sm space-y-4 ${className}`}
    >
      <div>
        <h3 className="text-base font-bold text-[rgb(15_12_30)] dark:text-white">
          AptTrove Activity & Exchange Stats
        </h3>
        <p className="text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
          Real metrics populated after peer engagements
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {statItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="p-3.5 rounded-2xl bg-[#FFF5F3]/70 dark:bg-white/5 border border-[#BEB3FF]/30 text-center space-y-1"
            >
              <div
                className={`w-7 h-7 mx-auto rounded-xl flex items-center justify-center ${item.color}`}
              >
                <Icon className="w-3.5 h-3.5" />
              </div>
              <p className="text-lg font-black text-[rgb(15_12_30)] dark:text-white">
                {item.value}
              </p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] truncate">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProfileStats;
