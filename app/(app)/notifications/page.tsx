"use client";

import { useState } from "react";
import { NotificationPanel } from "@/components/notifications/notification-panel";
import { Notification } from "@/lib/types";

export default function NotificationsPage() {
  // Backend response placeholder
  // BACKEND: fetch `/api/notifications`
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const handleMarkRead = (id: string) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const handleMarkAllRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  return (
    <div className="space-y-8 pb-16 max-w-4xl mx-auto">
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#BEB3FF]/20 via-[#FFF5F3] to-[#FFD7E0]/30 dark:from-[#16122a] dark:via-[#120f23] dark:to-[#1a142c] border border-[#BEB3FF]/40 shadow-sm">
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[rgb(15_12_30)] dark:text-white">
          Notifications & Alerts
        </h1>
        <p className="text-xs sm:text-sm text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] mt-1">
          Track updates on your SkillSwap proposals, team invitations, and contact reveals.
        </p>
      </div>

      <NotificationPanel
        notifications={notifications}
        onMarkRead={handleMarkRead}
        onMarkAllRead={handleMarkAllRead}
      />
    </div>
  );
}
