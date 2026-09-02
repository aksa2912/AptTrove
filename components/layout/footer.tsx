import Link from "next/link";
import { Sparkles, Heart } from "lucide-react";
import { ROUTES } from "@/lib/constants/routes";

export function Footer() {
  return (
    <footer className="border-t border-[#BEB3FF]/30 bg-gradient-to-b from-transparent via-[#BEB3FF]/5 to-[#FFD7E0]/15 dark:via-white/[0.02] dark:to-white/[0.04] pt-14 pb-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-[#BEB3FF]/20 text-center md:text-left">
          {/* Brand Col */}
          <div className="space-y-2">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#3788FE] via-[#BEB3FF] to-[#FFD7E0] p-0.5 shadow-sm">
                <div className="w-full h-full bg-[#FFF5F3] dark:bg-[#120f23] rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#3788FE]" />
                </div>
              </div>
              <span className="text-lg font-bold tracking-tight text-[rgb(15_12_30)] dark:text-white">
                <span className="text-[#3788FE]">Apt</span>Trove
              </span>
            </Link>
            <p className="text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] max-w-sm">
              “A Treasure Trove of Aptitudes” — connecting students through skills, time, location, and team fit.
            </p>
          </div>

          {/* Quick Core Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
            <Link href="/" className="hover:text-[#3788FE] transition-colors">
              Home
            </Link>
            <Link href={ROUTES.SKILLSWAP} className="hover:text-[#3788FE] text-[#3788FE] transition-colors">
              SkillSwap
            </Link>
            <Link href={ROUTES.TEAM_BUILDER} className="hover:text-[#3788FE] text-[#5446a8] dark:text-[#BEB3FF] transition-colors">
              Team Builder
            </Link>
            <Link href={ROUTES.LOGIN} className="hover:text-[#3788FE] transition-colors">
              Login
            </Link>
            <Link href={ROUTES.SIGNUP} className="hover:text-[#3788FE] transition-colors">
              Signup
            </Link>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
          <p>© {new Date().getFullYear()} AptTrove. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built for passionate students and builders with <Heart className="w-3.5 h-3.5 text-[#FFD7E0] fill-[#FFD7E0]" />
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
