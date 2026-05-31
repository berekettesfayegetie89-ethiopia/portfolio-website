export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageColor: string;
  featured: boolean;
  status: "completed" | "in-progress" | "planned";
  challenges?: string;
  lessons?: string;
  year: string;
}

export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools" | "design";
  icon: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type: "education" | "project" | "certification" | "milestone";
  icon: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  url: string;
  credentialId: string;
  color: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  handle: string;
  icon: string;
}
