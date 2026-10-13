export interface Skill {
  name: string;
  desc: string;
}

export type StackCategory = "Frontend" | "Backend" | "Databases" | "Tools" | "Testing" | "AI & Automation";

export type Stack = Record<StackCategory, Skill[]>;

export interface Project {
  id: string;
  title: string;
  summary: string;
  thumbClass: "t1" | "t2" | "t3";
  tags: string[];
  caseStudy: { problem: string; solution: string; result: string };
  links: { label: string; href: string }[];
}

export interface TimelineItem {
  when: string;
  title: string;
  text: string;
}

export type Theme = "light" | "dark";
