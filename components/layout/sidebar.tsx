"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  LayoutDashboard,
  Repeat2,
  Users,
  LogIn,
  UserPlus,
  User,
  Sparkles,
  Compass,
  FolderKanban,
  Link2,
} from "lucide-react";
import { ROUTES } from "@/lib/constants/routes";
import { ThemeToggle } from "./theme-toggle";

export function Sidebar() {
  const pathname = usePathname();

  const mainNavItems = [
    {
      label: "Home",
      href: "/",
      icon: Home,
      badge: null,
    },
    {
      label: "Dashboard",
      href: ROUTES.DASHBOARD,
      icon: LayoutDashboard,
      badge: null,
    },
    {
      label: "SkillSwap",
      href: ROUTES.SKILLSWAP,
      icon: Repeat2,
      badge: "CORE",
      highlightColor: "text-[#3788FE] bg-[#3788FE]/10 border-[#3788FE]/30",
    },
    {
      label: "Team Builder",
      href: ROUTES.TEAM_BUILDER,
      icon: Users,
      badge: "CORE",
      highlightColor: "text-[#BEB3FF] bg-[#BEB3FF]/15 border-[#BEB3FF]/40",
    },
    {
      label: "Discover",
      href: ROUTES.DISCOVER,
      icon: Compass,
      badge: null,
    },
    {
      label: "Projects & Teams",
      href: ROUTES.PROJECTS,
      icon: FolderKanban,
      badge: null,
    },
    {
      label: "Connections",
      href: ROUTES.CONNECTIONS,
      icon: Link2,
      badge: null,
    },
    {
      label: "My Profile",
      href: ROUTES.PROFILE,
      icon: User,
      badge: null,
    },
  ];

  return (
    <aside className="w-64 shrink-0 hidden md:flex flex-col h-screen sticky top-0 bg-[#FFF5F3]/90 dark:bg-[#0f0c1c]/90 border-r border-[#BEB3FF]/30 backdrop-blur-xl z-30 transition-colors">
      {/* Brand Header */}
      <div className="p-5 border-b border-[#BEB3FF]/20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#3788FE] via-[#BEB3FF] to-[#FFD7E0] p-0.5 shadow-sm">
            <div className="w-full h-full bg-[#FFF5F3] dark:bg-[#120f23] rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#3788FE]" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-[rgb(15_12_30)] dark:text-white">
              <span className="text-[#3788FE]">Apt</span>Trove
            </span>
          </div>
        </Link>
        <ThemeToggle />
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1.5 scrollbar-thin">
        <div className="px-3 pb-2 text-[11px] font-bold uppercase tracking-wider text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
          Navigation
        </div>

        {mainNavItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 group ${
                isActive
                  ? "bg-[#3788FE] text-white shadow-md shadow-[#3788FE]/25 font-semibold"
                  : "text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] hover:text-[rgb(15_12_30)] dark:hover:text-white hover:bg-[#BEB3FF]/20"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon
                  className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                    isActive
                      ? "text-white"
                      : "text-[#3788FE] dark:text-[#BEB3FF]"
                  }`}
                />
                <span>{item.label}</span>
              </div>

              {item.badge && (
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full border ${
                    isActive
                      ? "bg-white/20 text-white border-transparent"
                      : item.highlightColor || "bg-[#BEB3FF]/30 text-[#645a82] dark:text-white border-[#BEB3FF]/40"
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Quick Auth Switches */}
      <div className="p-3 m-3 rounded-2xl bg-white/70 dark:bg-[#16122a]/70 border border-[#BEB3FF]/30 backdrop-blur-md shadow-sm space-y-2">
        <div className="flex items-center justify-between text-xs px-1">
          <Link
            href={ROUTES.LOGIN}
            className="text-xs font-semibold text-[#3788FE] hover:underline flex items-center gap-1"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Login</span>
          </Link>
          <span className="text-[#BEB3FF]">|</span>
          <Link
            href={ROUTES.SIGNUP}
            className="text-xs font-semibold text-[#3788FE] hover:underline flex items-center gap-1"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Signup</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
