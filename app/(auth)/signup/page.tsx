"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Sparkles, ArrowRight, Lock, Mail, User, GraduationCap } from "lucide-react";
import { ROUTES } from "@/lib/constants/routes";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [college, setCollege] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // BACKEND: POST `/api/auth/signup`
    setTimeout(() => {
      setIsLoading(false);
      router.push(ROUTES.ONBOARDING);
    }, 500);
  };

  return (
    <div className="w-full max-w-md p-8 rounded-[32px] bg-white/85 dark:bg-[#16122a]/85 border border-[#BEB3FF]/40 backdrop-blur-xl shadow-2xl space-y-6">
      
      {/* Title */}
      <div className="text-center space-y-2">
        <div className="w-12 h-12 mx-auto rounded-2xl bg-[#BEB3FF]/20 border border-[#BEB3FF]/40 flex items-center justify-center text-[#5446a8] dark:text-[#BEB3FF] shadow-sm">
          <Sparkles className="w-6 h-6" />
        </div>
        <h1 className="text-2xl font-black text-[rgb(15_12_30)] dark:text-white tracking-tight">
          Create Your AptTrove Identity
        </h1>
        <p className="text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
          Join a treasure trove of student abilities and project builders
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3.5">
        <div className="space-y-1">
          <label className="text-xs font-bold text-[rgb(15_12_30)] dark:text-white flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-[#3788FE]" />
            <span>Full Name</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Aarav Sharma"
            className="w-full px-4 py-2 text-xs rounded-xl bg-[#FFF5F3] dark:bg-[#120f23] border border-[#BEB3FF]/40 text-[rgb(15_12_30)] dark:text-white outline-none focus:border-[#3788FE]"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-[rgb(15_12_30)] dark:text-white flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-[#3788FE]" />
            <span>Campus or Work Email</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="aarav@campus.edu"
            className="w-full px-4 py-2 text-xs rounded-xl bg-[#FFF5F3] dark:bg-[#120f23] border border-[#BEB3FF]/40 text-[rgb(15_12_30)] dark:text-white outline-none focus:border-[#3788FE]"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-[rgb(15_12_30)] dark:text-white flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-[#3788FE]" />
            <span>College / Institution</span>
          </label>
          <input
            type="text"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            placeholder="Indian Institute of Technology, Bombay"
            className="w-full px-4 py-2 text-xs rounded-xl bg-[#FFF5F3] dark:bg-[#120f23] border border-[#BEB3FF]/40 text-[rgb(15_12_30)] dark:text-white outline-none focus:border-[#3788FE]"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-[rgb(15_12_30)] dark:text-white flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-[#3788FE]" />
            <span>Create Password</span>
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full px-4 py-2 text-xs rounded-xl bg-[#FFF5F3] dark:bg-[#120f23] border border-[#BEB3FF]/40 text-[rgb(15_12_30)] dark:text-white outline-none focus:border-[#3788FE]"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 mt-2 rounded-xl bg-[#3788FE] hover:bg-[#2573e8] text-white text-xs font-bold shadow-lg shadow-[#3788FE]/25 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          {isLoading ? (
            <span>Creating account...</span>
          ) : (
            <>
              <span>Continue to Skills Onboarding</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* Footer */}
      <div className="text-center pt-2 border-t border-[#BEB3FF]/20 text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
        <span>Already have an account? </span>
        <Link href={ROUTES.LOGIN} className="font-bold text-[#3788FE] hover:underline">
          Sign in
        </Link>
      </div>
    </div>
  );
}
