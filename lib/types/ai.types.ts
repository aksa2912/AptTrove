// ============================================================
// AI ASSISTANT TYPES
// Backend integration: Wire these to your AI backend API
// ============================================================

export type AIMessageRole = "user" | "assistant";

export type AIAssistantContext =
  | "skillswap"
  | "team-builder"
  | "discover"
  | "recommendations"
  | "general";

export interface AIMessage {
  id: string;
  role: AIMessageRole;
  content: string;
  timestamp: string;
  context?: AIAssistantContext;
  // Structured data attached to a response (candidate cards, reasoning, etc.)
  attachedCandidates?: import("./match.types").TeamCandidate[];
  attachedMatches?: import("./match.types").SkillSwapMatch[];
  reasoning?: string[];
}

export interface AIConversation {
  id: string;
  userId: string;
  context: AIAssistantContext;
  messages: AIMessage[];
  startedAt: string;
  updatedAt: string;
}

// ============================================================
// RECOMMENDATION TYPES
// Backend integration: Recommendations from matching/AI backend
// ============================================================

export interface Recommendation<T> {
  id: string;
  type: "skillswap" | "person" | "project" | "team";
  item: T;
  score: number;
  reasons: string[];
  generatedAt: string;
  dismissed: boolean;
}
