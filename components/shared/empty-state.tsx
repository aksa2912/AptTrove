import { ReactNode } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
  variant?: "default" | "compact" | "card";
  className?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  variant = "default",
  className = "",
}: EmptyStateProps) {
  if (variant === "compact") {
    return (
      <div
        className={`p-6 text-center rounded-2xl border border-dashed border-[#BEB3FF]/40 bg-white/40 dark:bg-white/[0.02] ${className}`}
      >
        <p className="text-sm font-medium text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
          {title}
        </p>
        {description && (
          <p className="text-xs text-[rgb(160_155_180)] dark:text-[rgb(110_100_140)] mt-1">
            {description}
          </p>
        )}
      </div>
    );
  }

  return (
    <div
      className={`p-10 text-center rounded-3xl border border-[#BEB3FF]/30 bg-gradient-to-b from-white/80 via-[#FFF5F3]/50 to-[#BEB3FF]/10 dark:from-[#16122a]/80 dark:via-[#120f23]/60 dark:to-transparent backdrop-blur-md shadow-sm ${className}`}
    >
      {/* Visual icon container */}
      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-[#3788FE]/10 via-[#BEB3FF]/20 to-[#FFD7E0]/30 border border-[#BEB3FF]/40 flex items-center justify-center text-[#3788FE]">
        {icon || <Sparkles className="w-8 h-8 text-[#3788FE]/80 animate-pulse" />}
      </div>

      <h3 className="text-lg font-bold text-[rgb(15_12_30)] dark:text-white tracking-tight">
        {title}
      </h3>

      {description && (
        <p className="text-sm text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] max-w-md mx-auto mt-2 leading-relaxed">
          {description}
        </p>
      )}

      {action && (
        <div className="mt-6">
          {action.href ? (
            <Link
              href={action.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#3788FE] hover:bg-[#2573e8] text-white text-sm font-semibold shadow-md shadow-[#3788FE]/25 hover:shadow-lg transition-all duration-150"
            >
              <span>{action.label}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <button
              onClick={action.onClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#3788FE] hover:bg-[#2573e8] text-white text-sm font-semibold shadow-md shadow-[#3788FE]/25 hover:shadow-lg transition-all duration-150 cursor-pointer"
            >
              <span>{action.label}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default EmptyState;
