import { Notification } from "@/lib/types";
import { Bell, Repeat2, Users, Link2, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export interface NotificationItemProps {
  notification: Notification;
  onMarkRead: (id: string) => void;
  className?: string;
}

export function NotificationItem({
  notification,
  onMarkRead,
  className = "",
}: NotificationItemProps) {
  const getIcon = () => {
    switch (notification.type) {
      case "skillswap_request":
        return <Repeat2 className="w-4 h-4 text-[#3788FE]" />;
      case "team_invitation":
        return <Users className="w-4 h-4 text-[#a03d58] dark:text-[#FFD7E0]" />;
      case "connection_accepted":
        return <CheckCircle2 className="w-4 h-4 text-emerald-500" />;
      case "match_found":
        return <Sparkles className="w-4 h-4 text-[#5446a8] dark:text-[#BEB3FF]" />;
      default:
        return <Bell className="w-4 h-4 text-[#3788FE]" />;
    }
  };

  return (
    <div
      onClick={() => onMarkRead(notification.id)}
      className={`p-4 rounded-2xl border transition-all flex items-start gap-3.5 cursor-pointer ${
        !notification.read
          ? "bg-white dark:bg-[#1f1938] border-[#3788FE]/40 shadow-sm"
          : "bg-white/50 dark:bg-white/[0.02] border-[#BEB3FF]/20 opacity-75 hover:opacity-100"
      } ${className}`}
    >
      <div className="w-9 h-9 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
        {getIcon()}
      </div>

      <div className="flex-1 min-w-0 space-y-1">
        <div className="flex items-center justify-between gap-2">
          <h4 className="text-xs font-bold text-[rgb(15_12_30)] dark:text-white truncate">
            {notification.title}
          </h4>
          <span className="text-[10px] text-[rgb(160_155_180)] dark:text-[rgb(110_100_140)] shrink-0">
            Just now
          </span>
        </div>

        <p className="text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] leading-relaxed">
          {notification.message}
        </p>

        {notification.actionUrl && (
          <Link
            href={notification.actionUrl}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#3788FE] hover:underline pt-1"
          >
            <span>View Details</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        )}
      </div>

      {!notification.read && (
        <span className="w-2 h-2 rounded-full bg-[#3788FE] shrink-0 mt-2" />
      )}
    </div>
  );
}

export default NotificationItem;
