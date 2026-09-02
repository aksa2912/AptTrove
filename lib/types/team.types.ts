// ============================================================
// PROJECT & TEAM TYPES
// Backend integration: Projects/teams from backend API
// ============================================================

export type ProjectType =
  | "Hackathon"
  | "College Project"
  | "Startup / Business Idea"
  | "Research Project"
  | "Personal Project"
  | "Community Project"
  | "Other";

export type TeamSeatStatus = "open" | "filled" | "reserved";

export interface TeamSeat {
  id: string;
  role: string; // e.g. "Frontend Developer"
  requiredSkills: string[];
  status: TeamSeatStatus;
  filledBy?: string; // userId if filled
  filledByProfile?: import("./user.types").StudentProfile;
}

export interface WorkingHours {
  day: import("./user.types").DayOfWeek;
  startTime: string;
  endTime: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  type: ProjectType;
  createdBy: string; // userId
  createdByProfile?: import("./user.types").StudentProfile;
  requiredSkills: string[]; // Skill IDs
  teamSize: number;
  workingHours: WorkingHours[];
  location: import("./user.types").LocationPreference;
  seats: TeamSeat[];
  tags: string[];
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
}

export interface Team {
  id: string;
  projectId: string;
  project: Project;
  members: import("./user.types").StudentProfile[];
  pendingInvites: string[]; // userIds
  maxSize: number;
  skillCoverage: {
    covered: string[];
    missing: string[];
  };
  availabilityOverlap: {
    days: import("./user.types").DayOfWeek[];
    hoursPerWeek: number;
  };
}

// ============================================================
// TEAM BUILDER INPUT (Form state — not a DB model)
// ============================================================

export interface TeamBuilderInput {
  projectName: string;
  projectDescription: string;
  projectType: ProjectType | "";
  requiredSkills: string[];
  teamSize: number;
  workingHours: WorkingHours[];
  location: import("./user.types").LocationPreference;
}
