export function CardSkeleton() {
  return (
    <div className="p-6 rounded-3xl border border-[#BEB3FF]/30 bg-white/70 dark:bg-[#16122a]/70 backdrop-blur-md shadow-sm space-y-4 animate-pulse">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#BEB3FF]/20 dark:bg-white/5" />
          <div className="space-y-2">
            <div className="w-32 h-4 rounded-lg bg-[#BEB3FF]/20 dark:bg-white/5" />
            <div className="w-24 h-3 rounded-lg bg-[#BEB3FF]/15 dark:bg-white/5" />
          </div>
        </div>
        <div className="w-14 h-14 rounded-full bg-[#3788FE]/15 dark:bg-white/5" />
      </div>
      <div className="space-y-2 pt-2">
        <div className="w-full h-3 rounded-lg bg-[#BEB3FF]/15 dark:bg-white/5" />
        <div className="w-4/5 h-3 rounded-lg bg-[#BEB3FF]/15 dark:bg-white/5" />
      </div>
      <div className="flex gap-2 pt-2">
        <div className="w-16 h-6 rounded-full bg-[#BEB3FF]/20 dark:bg-white/5" />
        <div className="w-20 h-6 rounded-full bg-[#BEB3FF]/20 dark:bg-white/5" />
        <div className="w-14 h-6 rounded-full bg-[#BEB3FF]/20 dark:bg-white/5" />
      </div>
      <div className="pt-2 border-t border-[#BEB3FF]/20 flex justify-between items-center">
        <div className="w-24 h-4 rounded-lg bg-[#BEB3FF]/15 dark:bg-white/5" />
        <div className="w-20 h-8 rounded-xl bg-[#3788FE]/20 dark:bg-white/10" />
      </div>
    </div>
  );
}

export function ProfileSkeleton() {
  return (
    <div className="p-8 rounded-3xl border border-[#BEB3FF]/30 bg-white/80 dark:bg-[#16122a]/80 shadow-sm space-y-6 animate-pulse">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="w-24 h-24 rounded-full bg-[#BEB3FF]/25 dark:bg-white/10" />
        <div className="space-y-3 text-center sm:text-left flex-1">
          <div className="w-48 h-6 rounded-xl bg-[#BEB3FF]/30 dark:bg-white/10 mx-auto sm:mx-0" />
          <div className="w-36 h-4 rounded-lg bg-[#BEB3FF]/20 dark:bg-white/5 mx-auto sm:mx-0" />
          <div className="w-full max-w-md h-3 rounded-lg bg-[#BEB3FF]/15 dark:bg-white/5" />
        </div>
      </div>
    </div>
  );
}

export function ListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}

export function TextSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2 animate-pulse">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`h-3 rounded-lg bg-[#BEB3FF]/20 dark:bg-white/5 ${
            i === lines - 1 ? "w-3/4" : "w-full"
          }`}
        />
      ))}
    </div>
  );
}
