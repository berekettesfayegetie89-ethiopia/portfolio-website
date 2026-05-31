import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { Project, BlogPost } from "@/types";
import { staticProjects, staticBlogPosts } from "./data";

export { staticProjects, staticBlogPosts };

const projectsDir = path.join(process.cwd(), "content/projects");
const blogDir = path.join(process.cwd(), "content/blog");

export function getAllProjects(): Project[] {
  try {
    if (!fs.existsSync(projectsDir)) return staticProjects;
    const files = fs.readdirSync(projectsDir);
    const projects = files
      .filter((f) => f.endsWith(".md"))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path.join(projectsDir, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);
        return { slug, ...data } as Project;
      });
    return projects.length > 0
      ? projects.sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1))
      : staticProjects;
  } catch {
    return staticProjects;
  }
}

export function getProjectBySlug(slug: string): Project | null {
  try {
    const fullPath = path.join(projectsDir, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return { slug, ...data } as Project;
  } catch {
    return staticProjects.find((p) => p.slug === slug) || null;
  }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    if (!fs.existsSync(blogDir)) return staticBlogPosts;
    const files = fs.readdirSync(blogDir);
    const posts = files
      .filter((f) => f.endsWith(".md"))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path.join(blogDir, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);
        return { slug, ...data } as BlogPost;
      });
    return posts.length > 0
      ? posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      : staticBlogPosts;
  } catch {
    return staticBlogPosts;
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(blogDir, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const processed = await remark().use(html).process(content);
    return { slug, ...data, content: processed.toString() } as BlogPost;
  } catch {
    return staticBlogPosts.find((p) => p.slug === slug) || null;
  }
}
