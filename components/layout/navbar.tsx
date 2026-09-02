"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Sparkles, Menu, X, ArrowRight, Repeat2, Users, Home } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { ROUTES } from "@/lib/constants/routes";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/", icon: Home },
    { label: "SkillSwap", href: ROUTES.SKILLSWAP, icon: Repeat2, highlight: true },
    { label: "Team Builder", href: ROUTES.TEAM_BUILDER, icon: Users, highlight: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FFF5F3]/85 dark:bg-[#0a0814]/85 backdrop-blur-xl border-b border-[#BEB3FF]/30 shadow-sm shadow-[#3788FE]/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Wordmark */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#3788FE] via-[#BEB3FF] to-[#FFD7E0] p-0.5 shadow-md shadow-[#3788FE]/20 group-hover:scale-105 transition-transform duration-200">
            <div className="w-full h-full bg-[#FFF5F3] dark:bg-[#120f23] rounded-[14px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#3788FE] group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-[rgb(15_12_30)] dark:text-white flex items-center">
              <span className="text-[#3788FE]">Apt</span>
              <span>Trove</span>
            </span>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-[#645a82] dark:text-[#b4aad2] -mt-1 hidden sm:inline-block">
              Talent Discovery
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links: Home, SkillSwap, Team Builder */}
        <nav className="hidden md:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/70 dark:bg-[#16122a]/70 border border-[#BEB3FF]/40 backdrop-blur-md shadow-sm">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`flex items-center gap-1.5 px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-150 ${
                  link.highlight
                    ? "text-[#3788FE] dark:text-[#BEB3FF] hover:bg-[#3788FE]/10"
                    : "text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] hover:text-[#3788FE] dark:hover:text-white hover:bg-[#BEB3FF]/15"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Action Buttons: Theme Toggle, Login, Signup */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href={ROUTES.LOGIN}
            className="px-4 py-2 text-sm font-semibold text-[rgb(15_12_30)] dark:text-white hover:text-[#3788FE] transition-colors"
          >
            Login
          </Link>
          <Link
            href={ROUTES.SIGNUP}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#3788FE] hover:bg-[#2573e8] text-white text-sm font-bold shadow-md shadow-[#3788FE]/25 hover:shadow-lg hover:shadow-[#3788FE]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
          >
            Signup
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl border border-[#BEB3FF]/30 bg-white/60 dark:bg-[#16122a]/60 text-[rgb(15_12_30)] dark:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 mt-2 mx-4 rounded-2xl bg-[#FFF5F3]/95 dark:bg-[#120f23]/95 border border-[#BEB3FF]/40 backdrop-blur-2xl shadow-xl space-y-3 animate-slide-up">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-semibold rounded-xl text-[rgb(15_12_30)] dark:text-white hover:bg-[#BEB3FF]/20 transition-colors"
                >
                  <Icon className="w-4 h-4 text-[#3788FE]" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-[#BEB3FF]/30 flex flex-col gap-2">
            <Link
              href={ROUTES.LOGIN}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-semibold rounded-xl border border-[#BEB3FF]/50 bg-white/60 dark:bg-white/5 text-[rgb(15_12_30)] dark:text-white"
            >
              Login
            </Link>
            <Link
              href={ROUTES.SIGNUP}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-semibold rounded-xl bg-[#3788FE] text-white shadow-md shadow-[#3788FE]/30"
            >
              Signup
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
