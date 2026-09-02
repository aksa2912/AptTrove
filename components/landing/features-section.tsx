import {
  Repeat2,
  Zap,
  Users,
  MapPin,
  Eye,
  Clock,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { ROUTES } from "@/lib/constants/routes";

export function FeaturesSection() {
  const features = [
    {
      title: "SkillSwap",
      tagline: "KNOWLEDGE EXCHANGE",
      description:
        "Exchange knowledge peer-to-peer with people whose skills directly complement what you want to learn.",
      icon: Repeat2,
      cardBg: "bg-white/70 dark:bg-[#16122a]/70 border-[#BEB3FF]/40",
      accent: "text-[#3788FE] bg-[#3788FE]/10",
      link: ROUTES.SKILLSWAP,
      linkText: "Explore SkillSwap",
    },
    {
      title: "Smart Matching",
      tagline: "4-FACTOR COMPATIBILITY",
      description:
        "Compatibility isn't random. AptTrove simultaneously computes Skills, Working Hours, Geographic Radius, and Team Fit.",
      icon: Zap,
      cardBg: "bg-white/70 dark:bg-[#16122a]/70 border-[#3788FE]/30",
      accent: "text-[#3788FE] bg-[#3788FE]/10",
      link: ROUTES.RECOMMENDATIONS,
      linkText: "See Match Engine",
    },
    {
      title: "AI Team Builder",
      tagline: "BALANCED PROJECT FORMATION",
      description:
        "Turn an idea into a complete team. Form hackathon crews, startup ventures, college projects, and research squads.",
      icon: Users,
      cardBg: "bg-white/70 dark:bg-[#16122a]/70 border-[#FFD7E0]/60",
      accent: "text-[#a03d58] dark:text-[#FFD7E0] bg-[#FFD7E0]/30",
      link: ROUTES.TEAM_BUILDER,
      linkText: "Build a Team",
    },
    {
      title: "Local Talent Discovery",
      tagline: "10 TO 50 KM SEARCH RADIUS",
      description:
        "Find practical collaborators near you. Filter by 10, 20, 30, 40, or 50 km radius using browser geolocation or manual location.",
      icon: MapPin,
      cardBg: "bg-white/70 dark:bg-[#16122a]/70 border-[#BEB3FF]/40",
      accent: "text-[#5446a8] dark:text-[#BEB3FF] bg-[#BEB3FF]/20",
      link: ROUTES.DISCOVER,
      linkText: "Search Nearby",
    },
    {
      title: "Transparent Match Reasons",
      tagline: "NO BLACK BOX",
      description:
        "Understand exactly why someone was recommended with clear itemized reasons across skills, schedule, and distance.",
      icon: Eye,
      cardBg: "bg-white/70 dark:bg-[#16122a]/70 border-[#BEB3FF]/30",
      accent: "text-[#3788FE] bg-[#3788FE]/10",
      link: ROUTES.SKILLSWAP,
      linkText: "View Explanations",
    },
    {
      title: "Time-Based Matching",
      tagline: "SCHEDULE OVERLAP",
      description:
        "Avoid ghosting and missed calls. Discover people whose weekly availability hours actually overlap with your project schedule.",
      icon: Clock,
      cardBg: "bg-white/70 dark:bg-[#16122a]/70 border-[#3788FE]/30",
      accent: "text-emerald-500 bg-emerald-500/10",
      link: ROUTES.DASHBOARD,
      linkText: "Check Overlap",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3788FE]/10 border border-[#3788FE]/30 text-xs font-bold text-[#3788FE]">
            Core Features
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[rgb(15_12_30)] dark:text-white">
            Everything you need to find the right people.
          </h2>
          <p className="text-sm sm:text-base text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
            Purpose-built tools for student builders, self-learners, and hackathon teams.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className={`p-7 rounded-3xl border ${feat.cardBg} backdrop-blur-md shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${feat.accent} transition-transform group-hover:scale-110`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] bg-white/60 dark:bg-white/5 px-2.5 py-1 rounded-full border border-[#BEB3FF]/20">
                      {feat.tagline}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[rgb(15_12_30)] dark:text-white group-hover:text-[#3788FE] transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#BEB3FF]/20">
                  <Link
                    href={feat.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3788FE] hover:text-[#2573e8] transition-colors"
                  >
                    <span>{feat.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
