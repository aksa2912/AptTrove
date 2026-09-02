// ============================================================
// ROUTE CONSTANTS
// ============================================================

export const ROUTES = {
  // Public
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  ONBOARDING: "/onboarding",

  // Authenticated app
  DASHBOARD: "/dashboard",
  SKILLSWAP: "/skillswap",
  TEAM_BUILDER: "/team-builder",
  DISCOVER: "/discover",
  PROJECTS: "/projects",
  CONNECTIONS: "/connections",
  RECOMMENDATIONS: "/recommendations",
  NOTIFICATIONS: "/notifications",
  PROFILE: "/profile",
  CAREER_SKILLS: "/career-skills",
} as const;

// ============================================================
// RADIUS OPTIONS
// ============================================================

export const RADIUS_OPTIONS = [10, 20, 30, 40, 50] as const;
export type RadiusOption = (typeof RADIUS_OPTIONS)[number];

// ============================================================
// DAYS OF WEEK
// ============================================================

export const DAYS_OF_WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

// ============================================================
// TEAM SIZE OPTIONS
// ============================================================

export const TEAM_SIZE_OPTIONS = [2, 3, 4, 5, 6] as const;

// ============================================================
// PROJECT TYPES
// ============================================================

export const PROJECT_TYPES = [
  "Hackathon",
  "College Project",
  "Startup / Business Idea",
  "Research Project",
  "Personal Project",
  "Community Project",
  "Other",
] as const;
