import { AlertCircle, RotateCcw } from "lucide-react";

export interface ErrorCardProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  compact?: boolean;
  className?: string;
}

export function ErrorCard({
  title = "Something went wrong",
  message = "An error occurred while loading this section. You can try again.",
  onRetry,
  compact = false,
  className = "",
}: ErrorCardProps) {
  if (compact) {
    return (
      <div
        className={`p-4 rounded-2xl border border-rose-200 dark:border-rose-900/40 bg-rose-50/80 dark:bg-rose-950/20 text-rose-800 dark:text-rose-300 flex items-center justify-between text-xs ${className}`}
      >
        <div className="flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
          <span>{message}</span>
        </div>
        {onRetry && (
          <button
            onClick={onRetry}
            className="px-2.5 py-1 rounded-lg bg-rose-100 dark:bg-rose-900/40 font-semibold hover:bg-rose-200 transition-colors"
          >
            Retry
          </button>
        )}
      </div>
    );
  }

  return (
    <div
      className={`p-8 text-center rounded-3xl border border-rose-200 dark:border-rose-900/40 bg-gradient-to-b from-rose-50/50 to-[#FFF5F3] dark:from-rose-950/20 dark:to-transparent shadow-sm ${className}`}
    >
      <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-500">
        <AlertCircle className="w-7 h-7" />
      </div>
      <h3 className="text-base font-bold text-[rgb(15_12_30)] dark:text-white">
        {title}
      </h3>
      <p className="text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] max-w-sm mx-auto mt-1.5 leading-relaxed">
        {message}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-[#16122a] border border-[#BEB3FF]/40 text-xs font-semibold hover:border-[#3788FE] transition-all shadow-sm"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Try Again</span>
        </button>
      )}
    </div>
  );
}

export default ErrorCard;
