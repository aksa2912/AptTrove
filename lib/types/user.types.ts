// ============================================================
// USER / STUDENT PROFILE TYPES
// Backend integration: Replace with actual API response types
// ============================================================

export type UserRole = "student" | "builder" | "researcher";

export type YearOfStudy = "1st" | "2nd" | "3rd" | "4th" | "5th" | "Alumni" | "Other";

export interface LocationPreference {
  label: string; // e.g. "Mumbai, Maharashtra"
  lat?: number;
  lng?: number;
  radiusKm: 10 | 20 | 30 | 40 | 50;
  useCurrentLocation: boolean;
}

export interface StudentProfile {
  id: string;
  name: string;
  avatarUrl?: string;
  email: string;
  college: string;
  year: YearOfStudy;
  branch: string;
  bio: string;
  role: UserRole;
  canTeach: string[]; // Skill IDs
  wantsToLearn: string[]; // Skill IDs
  location: LocationPreference;
  availability: AvailabilitySlot[];
  interests: string[];
  portfolioUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  joinedAt: string; // ISO date string
  stats: UserStats;
  profileCompletion: number; // 0–100
}

export interface UserStats {
  connections: number;
  skillSwapsCompleted: number;
  hoursTaught: number;
  hoursLearned: number;
  teamsJoined: number;
  projectsContributed: number;
}

export interface AvailabilitySlot {
  id: string;
  day: DayOfWeek;
  startTime: string; // "HH:MM" 24h
  endTime: string; // "HH:MM" 24h
  type: "teaching" | "learning" | "project";
}

export type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";
