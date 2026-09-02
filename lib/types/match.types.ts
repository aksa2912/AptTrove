// ============================================================
// MATCH / SCORING TYPES
// Backend integration: Match data returned from matching engine
// ============================================================

export interface MatchBreakdown {
  overall: number; // 0–100
  skillScore: number;
  timeScore: number;
  locationScore: number;
  teamFitScore: number;
}

export interface MatchReason {
  id: string;
  type: "skill" | "time" | "location" | "teamFit";
  description: string;
  positive: boolean;
}

export interface SkillSwapMatch {
  id: string;
  matchedUser: import("./user.types").StudentProfile;
  score: MatchBreakdown;
  reasons: MatchReason[];
  matchedSkills: {
    theyTeach: string[]; // Skill names you want to learn
    youTeach: string[]; // Skill names they want to learn
  };
  availabilityOverlap: {
    hoursPerWeek: number;
    overlappingSlots: import("./user.types").AvailabilitySlot[];
    description: string; // e.g. "Saturday 2–5 PM"
  };
  distanceKm: number;
  connectionStatus: ConnectionStatus;
}

export type ConnectionStatus =
  | "none"
  | "pending_sent"
  | "pending_received"
  | "connected"
  | "rejected";

// ============================================================
// TEAM MATCHING TYPES
// Backend integration: Team candidate recommendations from AI
// ============================================================

export interface TeamCandidate {
  id: string;
  profile: import("./user.types").StudentProfile;
  score: MatchBreakdown;
  reasons: MatchReason[];
  recommendedRole: string;
  skillContribution: string[]; // Skills they bring
  filledGaps: string[]; // Team gaps they fill
  availabilityFit: {
    overlapsWithProject: boolean;
    overlapHours: number;
    description: string;
  };
  distanceKm: number;
  connectionStatus: ConnectionStatus;
}
