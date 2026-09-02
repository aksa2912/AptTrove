"use client";

import { useState } from "react";
import { ConnectionCard } from "@/components/connections/connection-card";
import { ConnectionRequestItem } from "@/components/connections/connection-request";
import { EmptyState } from "@/components/shared/empty-state";
import { Connection, ConnectionRequest, StudentProfile } from "@/lib/types";
import { Link2, Sparkles, UserCheck, Inbox, Send } from "lucide-react";

export default function ConnectionsPage() {
  const [activeTab, setActiveTab] = useState<"connected" | "incoming" | "outgoing">("connected");

  // Backend response holders
  // BACKEND: fetch `/api/connections` and `/api/connections/requests`
  const [connections, setConnections] = useState<Connection[]>([]);
  const [incomingRequests, setIncomingRequests] = useState<ConnectionRequest[]>([]);
  const [outgoingRequests, setOutgoingRequests] = useState<ConnectionRequest[]>([]);

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#3788FE]/15 via-[#BEB3FF]/20 to-[#FFD7E0]/30 border border-[#BEB3FF]/40 shadow-sm">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 dark:bg-white/10 border border-[#BEB3FF]/40 text-xs font-bold text-[#3788FE]">
            <Link2 className="w-3.5 h-3.5" />
            <span>Privacy-First Network</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[rgb(15_12_30)] dark:text-white">
            Your Connections & Requests
          </h1>
          <p className="text-xs sm:text-sm text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] max-w-xl">
            Contact information is securely locked until both parties explicitly accept a swap or team seat invitation.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-[#BEB3FF]/30 pb-3">
        <button
          type="button"
          onClick={() => setActiveTab("connected")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === "connected"
              ? "bg-[#3788FE] text-white shadow-md shadow-[#3788FE]/25"
              : "bg-white/70 dark:bg-white/5 text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] hover:bg-[#BEB3FF]/20"
          }`}
        >
          <UserCheck className="w-3.5 h-3.5" />
          <span>Active Connections ({connections.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("incoming")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === "incoming"
              ? "bg-[#3788FE] text-white shadow-md shadow-[#3788FE]/25"
              : "bg-white/70 dark:bg-white/5 text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] hover:bg-[#BEB3FF]/20"
          }`}
        >
          <Inbox className="w-3.5 h-3.5" />
          <span>Incoming Requests ({incomingRequests.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("outgoing")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === "outgoing"
              ? "bg-[#3788FE] text-white shadow-md shadow-[#3788FE]/25"
              : "bg-white/70 dark:bg-white/5 text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] hover:bg-[#BEB3FF]/20"
          }`}
        >
          <Send className="w-3.5 h-3.5" />
          <span>Sent Requests ({outgoingRequests.length})</span>
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "connected" && (
        <>
          {connections.length === 0 ? (
            <EmptyState
              icon={<Link2 className="w-8 h-8 text-[#3788FE]" />}
              title="No active connections yet"
              description="Explore SkillSwap matches or team seats to initiate connection requests with peers."
              action={{
                label: "Find Skill Matches",
                href: "/skillswap",
              }}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {connections.map((c) => (
                <ConnectionCard key={c.id} connection={c} otherUser={c.profiles[1]} />
              ))}
            </div>
          )}
        </>
      )}

      {activeTab === "incoming" && (
        <>
          {incomingRequests.length === 0 ? (
            <EmptyState
              icon={<Inbox className="w-8 h-8 text-[#BEB3FF]" />}
              title="No incoming connection requests"
              description="When other students discover your skills and send an invite, their requests will appear here."
            />
          ) : (
            <div className="space-y-3">
              {incomingRequests.map((req) => (
                <ConnectionRequestItem
                  key={req.id}
                  request={req}
                  profile={req.fromProfile}
                  type="incoming"
                />
              ))}
            </div>
          )}
        </>
      )}

      {activeTab === "outgoing" && (
        <>
          {outgoingRequests.length === 0 ? (
            <EmptyState
              icon={<Send className="w-8 h-8 text-[#FFD7E0]" />}
              title="No outgoing requests pending"
              description="Requests you send to potential swap partners or project teammates will be tracked here."
            />
          ) : (
            <div className="space-y-3">
              {outgoingRequests.map((req) => (
                <ConnectionRequestItem
                  key={req.id}
                  request={req}
                  profile={req.toProfile}
                  type="outgoing"
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
