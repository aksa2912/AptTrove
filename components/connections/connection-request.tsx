"use client";

import { ConnectionRequest, StudentProfile } from "@/lib/types";
import { getInitials } from "@/lib/utils/cn";
import { Check, X, Clock, Send } from "lucide-react";

export interface ConnectionRequestItemProps {
  request: ConnectionRequest;
  profile?: StudentProfile;
  type: "incoming" | "outgoing";
  onAccept?: (id: string) => void;
  onReject?: (id: string) => void;
  onWithdraw?: (id: string) => void;
  className?: string;
}

export function ConnectionRequestItem({
  request,
  profile,
  type,
  onAccept,
  onReject,
  onWithdraw,
  className = "",
}: ConnectionRequestItemProps) {
  const name = profile?.name || "Peer Builder";
  const college = profile?.college || "Local Campus";

  return (
    <div
      className={`p-5 rounded-2xl bg-white/70 dark:bg-[#16122a]/70 border border-[#BEB3FF]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm ${className}`}
    >
      <div className="flex items-center gap-3.5">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#3788FE] to-[#BEB3FF] p-0.5 shadow-sm shrink-0">
          <div className="w-full h-full bg-[#FFF5F3] dark:bg-[#120f23] rounded-[10px] flex items-center justify-center font-bold text-xs text-[#3788FE]">
            {getInitials(name)}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-bold text-[rgb(15_12_30)] dark:text-white">
            {name}
          </h4>
          <p className="text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
            {college}
          </p>
          {request.message && (
            <p className="text-xs italic text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] mt-1">
              “{request.message}”
            </p>
          )}
        </div>
      </div>

      {type === "incoming" ? (
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            type="button"
            onClick={() => onReject?.(request.id)}
            className="px-3 py-1.5 rounded-xl border border-rose-200 dark:border-rose-900/40 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => onAccept?.(request.id)}
            className="px-3.5 py-1.5 rounded-xl bg-[#3788FE] hover:bg-[#2573e8] text-white text-xs font-bold shadow-md shadow-[#3788FE]/25 transition-all flex items-center gap-1"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Accept & Reveal</span>
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#BEB3FF]/20 text-[#5446a8] dark:text-[#BEB3FF] text-[11px] font-semibold">
            <Clock className="w-3 h-3" />
            <span>Pending</span>
          </span>
          <button
            type="button"
            onClick={() => onWithdraw?.(request.id)}
            className="text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] hover:text-rose-500 transition-colors"
          >
            Withdraw
          </button>
        </div>
      )}
    </div>
  );
}

export default ConnectionRequestItem;
