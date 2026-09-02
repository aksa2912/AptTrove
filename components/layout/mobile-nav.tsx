"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Repeat2, Users, LogIn, User } from "lucide-react";
import { ROUTES } from "@/lib/constants/routes";

export function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "SkillSwap", href: ROUTES.SKILLSWAP, icon: Repeat2, highlight: true },
    { label: "Team Builder", href: ROUTES.TEAM_BUILDER, icon: Users, highlight: true },
    { label: "Login", href: ROUTES.LOGIN, icon: LogIn },
    { label: "Profile", href: ROUTES.PROFILE, icon: User },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFF5F3]/95 dark:bg-[#0f0c1c]/95 border-t border-[#BEB3FF]/30 backdrop-blur-2xl px-2 py-1.5 shadow-lg shadow-black/10">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all duration-150 ${
                isActive
                  ? "text-[#3788FE] font-bold"
                  : "text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] hover:text-[rgb(15_12_30)]"
              }`}
            >
              <div
                className={`relative p-1 rounded-lg ${
                  isActive
                    ? "bg-[#3788FE]/15 text-[#3788FE]"
                    : item.highlight
                    ? "text-[#3788FE]"
                    : ""
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.highlight && !isActive && (
                  <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-[#3788FE]" />
                )}
              </div>
              <span className="text-[10px] mt-0.5 font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default MobileNav;
