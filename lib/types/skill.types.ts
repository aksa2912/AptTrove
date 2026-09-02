// ============================================================
// SKILL TYPES
// Backend integration: Skills fetched from backend skill registry
// ============================================================

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "AI/ML"
  | "UI/UX"
  | "Cybersecurity"
  | "Cloud"
  | "Programming"
  | "Research"
  | "Marketing"
  | "Product"
  | "Communication"
  | "Data Science"
  | "DevOps"
  | "Mobile"
  | "Blockchain"
  | "Design"
  | "Other";

export type SkillProficiency = "Beginner" | "Intermediate" | "Advanced" | "Expert";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  description?: string;
}

export interface UserSkill {
  skillId: string;
  skill: Skill;
  proficiency: SkillProficiency;
  canTeach: boolean;
  wantsToLearn: boolean;
  yearsExperience?: number;
}

export interface SkillProfile {
  userId: string;
  canTeach: UserSkill[];
  wantsToLearn: UserSkill[];
  lastUpdated: string;
}

// ============================================================
// CAREER SKILLS (Market-updated via admin backend)
// Backend integration: career skill data from admin CMS
// ============================================================

export interface CareerPath {
  id: string;
  title: string; // e.g. "AI Engineer"
  description: string;
  requiredSkills: Skill[];
  niceToHaveSkills: Skill[];
  lastUpdatedAt: string;
  updatedByAdmin?: string; // admin ID
  trending: boolean;
  demandLevel: "Low" | "Medium" | "High" | "Very High";
}
