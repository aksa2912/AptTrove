// ============================================================
// CONNECTION TYPES
// Backend integration: Connection data from user-connections API
// ============================================================

import { StudentProfile } from "./user.types";

export type ConnectionRequestStatus = "pending" | "accepted" | "rejected" | "withdrawn";

export interface ConnectionRequest {
  id: string;
  fromUserId: string;
  toUserId: string;
  fromProfile?: StudentProfile;
  toProfile?: StudentProfile;
  message?: string;
  status: ConnectionRequestStatus;
  createdAt: string;
  updatedAt: string;
  context?: "skillswap" | "team" | "discover" | "recommendation";
  relatedProjectId?: string;
}

export interface Connection {
  id: string;
  users: [string, string]; // Two user IDs
  profiles: [StudentProfile, StudentProfile];
  connectedAt: string;
  contactRevealed: boolean; // Whether contact details are visible
  sharedProjects?: string[]; // Project IDs they share
}

// ============================================================
// NOTIFICATION TYPES
// Backend integration: Notifications from backend notification system
// ============================================================

export type NotificationType =
  | "connection_request"
  | "connection_accepted"
  | "team_invitation"
  | "project_invitation"
  | "team_seat_accepted"
  | "skillswap_request"
  | "application_update"
  | "match_found"
  | "system";

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
  actionUrl?: string;
  relatedUserId?: string;
  relatedProjectId?: string;
  relatedConnectionId?: string;
}
