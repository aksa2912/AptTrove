"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Sparkles, ArrowRight, Lock, Mail, Eye, EyeOff } from "lucide-react";
import { ROUTES } from "@/lib/constants/routes";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // BACKEND: POST `/api/auth/login`
    setTimeout(() => {
      setIsLoading(false);
      router.push(ROUTES.DASHBOARD);
    }, 500);
  };

  return (
    <div className="w-full max-w-md p-8 rounded-[32px] bg-white/85 dark:bg-[#16122a]/85 border border-[#BEB3FF]/40 backdrop-blur-xl shadow-2xl space-y-6">
      
      {/* Title */}
      <div className="text-center space-y-2">
        <div className="w-12 h-12 mx-auto rounded-2xl bg-[#3788FE]/10 border border-[#3788FE]/30 flex items-center justify-center text-[#3788FE] shadow-sm">
          <Sparkles className="w-6 h-6" />
        </div>
        <h1 className="text-2xl font-black text-[rgb(15_12_30)] dark:text-white tracking-tight">
          Welcome Back
        </h1>
        <p className="text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
          Sign in to access your SkillSwaps and team builder projects
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[rgb(15_12_30)] dark:text-white flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-[#3788FE]" />
            <span>Campus or Personal Email</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="student@campus.edu"
            className="w-full px-4 py-2.5 text-xs rounded-xl bg-[#FFF5F3] dark:bg-[#120f23] border border-[#BEB3FF]/40 text-[rgb(15_12_30)] dark:text-white outline-none focus:border-[#3788FE]"
            required
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-[rgb(15_12_30)] dark:text-white flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#3788FE]" />
              <span>Password</span>
            </label>
            <a href="#" className="text-[11px] font-semibold text-[#3788FE] hover:underline">
              Forgot?
            </a>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 pr-10 text-xs rounded-xl bg-[#FFF5F3] dark:bg-[#120f23] border border-[#BEB3FF]/40 text-[rgb(15_12_30)] dark:text-white outline-none focus:border-[#3788FE]"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 rounded-xl bg-[#3788FE] hover:bg-[#2573e8] text-white text-xs font-bold shadow-lg shadow-[#3788FE]/25 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          {isLoading ? (
            <span>Signing in...</span>
          ) : (
            <>
              <span>Sign In to AptTrove</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* Footer */}
      <div className="text-center pt-2 border-t border-[#BEB3FF]/20 text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
        <span>Don't have an account? </span>
        <Link href={ROUTES.SIGNUP} className="font-bold text-[#3788FE] hover:underline">
          Sign up
        </Link>
      </div>
    </div>
  );
}
