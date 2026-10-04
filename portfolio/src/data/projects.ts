import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "testforge",
    title: "TestForge",
    subtitle: "MSBTE Exam Scheduling System",
    description:
      "A web-based examination management system that streamlines exam-center operations — scheduling, supervisor allocation, seating management, and day-of examination workflows.",
    technologies: ["Next.js", "FastAPI", "MySQL", "Clerk", "Docker"],
    highlights: [
      "Exam-center configuration",
      "Timetable management",
      "Supervisor management",
      "Seating arrangement",
      "Student / block allocation",
      "Absent marking",
      "PDF / report generation",
      "Role-based access",
      "Admin, Supervisor & Institute workflows",
    ],
    featured: true,
  },
  {
    id: "mirage",
    title: "MIRAGE",
    subtitle: "AI-Assisted Cybersecurity SOC Platform",
    description:
      "A SOC platform built around threat visibility, attack forecasting, attack-stage analysis, session analysis, and adaptive deception — following an Observe → Forecast → Explain → Adapt → Learn loop.",
    technologies: [
      "Python",
      "PyTorch",
      "Scikit-learn",
      "Scapy",
      "Streamlit",
      "LSTM",
      "Cybersecurity",
      "MITRE ATT&CK",
    ],
    highlights: [
      "Threat Dashboard",
      "Forecast Engine",
      "Attack-Stage Mapper",
      "Session Manager",
      "Deception Orchestrator",
      "Adaptive Decoy Manager",
    ],
    featured: true,
  },
  {
    id: "pharma-inventory",
    title: "Pharmaceutical Inventory & Retail Management System",
    description:
      "A platform for stock tracking, billing, supplier management, and sales reporting for pharmaceutical businesses, built with a straightforward interface to support day-to-day retail workflows.",
    technologies: [],
  },
  {
    id: "smartsketch",
    title: "SmartSketch",
    description:
      "Project details weren't available at build time — a short description, tech stack, and any links need to be added here.",
    technologies: [],
    incomplete: true,
  },
  {
    id: "barterlearn",
    title: "BarterLearn",
    description:
      "Project details weren't available at build time — a short description, tech stack, and any links need to be added here.",
    technologies: [],
    incomplete: true,
  },
  {
    id: "surakshaverse",
    title: "SurakshaVerse",
    description:
      "Project details weren't available at build time — a short description, tech stack, and any links need to be added here.",
    technologies: [],
    incomplete: true,
  },
];
