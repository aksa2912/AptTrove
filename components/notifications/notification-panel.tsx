"use client";

import { Notification } from "@/lib/types";
import { NotificationItem } from "./notification-item";
import { EmptyState } from "@/components/shared/empty-state";
import { Bell, CheckCheck } from "lucide-react";

export interface NotificationPanelProps {
  notifications: Notification[];
  onMarkRead: (id: string) => void;
  onMarkAllRead: () => void;
  className?: string;
}

export function NotificationPanel({
  notifications,
  onMarkRead,
  onMarkAllRead,
  className = "",
}: NotificationPanelProps) {
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div
      className={`p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-[#16122a]/80 border border-[#BEB3FF]/40 backdrop-blur-md shadow-sm space-y-6 ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Bell className="w-5 h-5 text-[#3788FE]" />
          <h2 className="text-base font-bold text-[rgb(15_12_30)] dark:text-white">
            Activity Updates
          </h2>
          {unreadCount > 0 && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#3788FE] text-white">
              {unreadCount} New
            </span>
          )}
        </div>

        {unreadCount > 0 && (
          <button
            type="button"
            onClick={onMarkAllRead}
            className="text-xs font-semibold text-[#3788FE] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <CheckCheck className="w-3.5 h-3.5" />
            <span>Mark all read</span>
          </button>
        )}
      </div>

      {notifications.length === 0 ? (
        <EmptyState
          icon={<Bell className="w-8 h-8 text-[#BEB3FF]" />}
          title="All caught up! No notifications yet"
          description="When someone sends a SkillSwap request or invites you to a project seat, you'll see alerts here."
        />
      ) : (
        <div className="space-y-3">
          {notifications.map((n) => (
            <NotificationItem
              key={n.id}
              notification={n}
              onMarkRead={onMarkRead}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default NotificationPanel;
