import Link from "next/link";
import { Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF5F3] dark:bg-[#0a0814] text-[rgb(15_12_30)] dark:text-white transition-colors duration-200">
      {/* Top Simple Nav */}
      <header className="px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#3788FE] via-[#BEB3FF] to-[#FFD7E0] p-0.5 shadow-sm group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#FFF5F3] dark:bg-[#120f23] rounded-[14px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#3788FE]" />
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight text-[rgb(15_12_30)] dark:text-white">
            <span className="text-[#3788FE]">Apt</span>Trove
          </span>
        </Link>
        <ThemeToggle />
      </header>

      {/* Auth Content */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {children}
      </main>
    </div>
  );
}
