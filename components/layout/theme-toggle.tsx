"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className={`p-2.5 rounded-xl border border-[#BEB3FF]/30 bg-white/60 text-[rgb(100_90_130)] ${className}`}
      >
        <Sun className="w-4 h-4 opacity-0" />
      </button>
    );
  }

  const currentTheme = theme === "system" ? resolvedTheme : (theme || resolvedTheme);
  const isDark = currentTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => {
        const nextTheme = isDark ? "light" : "dark";
        setTheme(nextTheme);
      }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative p-2.5 rounded-xl border border-[#BEB3FF]/40 hover:border-[#3788FE]/60 bg-white/70 dark:bg-[#16122a]/70 text-[rgb(15_12_30)] dark:text-white shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex items-center justify-center ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-[#BEB3FF] hover:rotate-45 transition-transform duration-300" />
      ) : (
        <Moon className="w-4 h-4 text-[#3788FE] hover:-rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
}

export default ThemeToggle;
