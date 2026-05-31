import { getAllBlogPosts } from "@/lib/content";
import { BlogListClient } from "./BlogListClient";

export const metadata = {
  title: "Blog | Bereket Tesfaye Getie",
  description: "Thoughts on web development, React, Next.js, and life as a CS student in Ethiopia.",
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  return <BlogListClient posts={posts} />;
}
