import type { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    skills: ["Java", "Python", "C", "C++", "TypeScript", "SQL"],
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    id: "backend",
    title: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI", "Django"],
  },
  {
    id: "ai-ml",
    title: "AI / ML",
    skills: [
      "Machine Learning",
      "Artificial Intelligence",
      "Generative AI",
      "RAG",
      "LLM Integration",
      "Vector Databases",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Supabase"],
  },
  {
    id: "cloud-devops",
    title: "Cloud / DevOps",
    skills: ["AWS", "Docker", "Vercel", "GitHub Actions", "CI/CD"],
  },
  {
    id: "tools",
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "Figma", "Android Studio", "Power BI"],
  },
  {
    id: "other",
    title: "Other",
    skills: ["Clerk", "Stripe", "REST APIs", "JWT", "OAuth 2.0", "RBAC", "System Design"],
  },
];
