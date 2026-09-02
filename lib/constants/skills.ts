// ============================================================
// SKILL CONSTANTS
// Source: These will eventually come from backend skill registry
// ============================================================

import type { Skill, SkillCategory } from "@/lib/types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  "Frontend",
  "Backend",
  "AI/ML",
  "UI/UX",
  "Cybersecurity",
  "Cloud",
  "Programming",
  "Research",
  "Marketing",
  "Product",
  "Communication",
  "Data Science",
  "DevOps",
  "Mobile",
  "Design",
  "Other",
];

// Static skill list — replace with API call when backend is ready
export const SKILLS: Skill[] = [
  // Frontend
  { id: "react", name: "React", category: "Frontend" },
  { id: "nextjs", name: "Next.js", category: "Frontend" },
  { id: "typescript", name: "TypeScript", category: "Frontend" },
  { id: "html-css", name: "HTML/CSS", category: "Frontend" },
  { id: "vue", name: "Vue.js", category: "Frontend" },
  { id: "tailwind", name: "Tailwind CSS", category: "Frontend" },
  // Backend
  { id: "nodejs", name: "Node.js", category: "Backend" },
  { id: "python", name: "Python", category: "Backend" },
  { id: "fastapi", name: "FastAPI", category: "Backend" },
  { id: "django", name: "Django", category: "Backend" },
  { id: "postgres", name: "PostgreSQL", category: "Backend" },
  { id: "golang", name: "Go", category: "Backend" },
  // AI/ML
  { id: "ml", name: "Machine Learning", category: "AI/ML" },
  { id: "dl", name: "Deep Learning", category: "AI/ML" },
  { id: "pytorch", name: "PyTorch", category: "AI/ML" },
  { id: "tensorflow", name: "TensorFlow", category: "AI/ML" },
  { id: "nlp", name: "NLP", category: "AI/ML" },
  { id: "cv", name: "Computer Vision", category: "AI/ML" },
  // UI/UX
  { id: "figma", name: "Figma", category: "UI/UX" },
  { id: "ux-research", name: "UX Research", category: "UI/UX" },
  { id: "prototyping", name: "Prototyping", category: "UI/UX" },
  { id: "design-systems", name: "Design Systems", category: "UI/UX" },
  // Cloud
  { id: "aws", name: "AWS", category: "Cloud" },
  { id: "gcp", name: "GCP", category: "Cloud" },
  { id: "azure", name: "Azure", category: "Cloud" },
  { id: "docker", name: "Docker", category: "Cloud" },
  { id: "kubernetes", name: "Kubernetes", category: "Cloud" },
  // Data Science
  { id: "pandas", name: "Pandas", category: "Data Science" },
  { id: "sql", name: "SQL", category: "Data Science" },
  { id: "data-viz", name: "Data Visualization", category: "Data Science" },
  { id: "statistics", name: "Statistics", category: "Data Science" },
  // Mobile
  { id: "flutter", name: "Flutter", category: "Mobile" },
  { id: "react-native", name: "React Native", category: "Mobile" },
  { id: "swift", name: "Swift", category: "Mobile" },
  { id: "kotlin", name: "Kotlin", category: "Mobile" },
  // Design
  { id: "graphic-design", name: "Graphic Design", category: "Design" },
  { id: "motion-design", name: "Motion Design", category: "Design" },
  { id: "brand-identity", name: "Brand Identity", category: "Design" },
  // Research
  { id: "academic-research", name: "Academic Research", category: "Research" },
  { id: "literature-review", name: "Literature Review", category: "Research" },
  // Programming
  { id: "cpp", name: "C++", category: "Programming" },
  { id: "java", name: "Java", category: "Programming" },
  { id: "rust", name: "Rust", category: "Programming" },
  // Product
  { id: "product-management", name: "Product Management", category: "Product" },
  { id: "agile", name: "Agile / Scrum", category: "Product" },
  // Communication
  { id: "public-speaking", name: "Public Speaking", category: "Communication" },
  { id: "technical-writing", name: "Technical Writing", category: "Communication" },
  // Marketing
  { id: "growth-marketing", name: "Growth Marketing", category: "Marketing" },
  { id: "content-marketing", name: "Content Marketing", category: "Marketing" },
];

export const getSkillById = (id: string) => SKILLS.find((s) => s.id === id);
export const getSkillsByCategory = (category: SkillCategory) =>
  SKILLS.filter((s) => s.category === category);
