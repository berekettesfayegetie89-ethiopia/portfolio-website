"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";
import { BlogPost } from "@/types";
import { Calendar, Clock, Tag, ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function BlogListClient({ posts }: { posts: BlogPost[] }) {
  return (
    <main className="min-h-screen relative z-10 pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-mono transition-colors"
            style={{ color: "var(--text-muted)" }}
          >
            <ArrowLeft size={14} />
            Back to portfolio
          </Link>
        </motion.div>

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-14"
        >
          <span className="section-label mb-4 block">Blog</span>
          <h1
            className="font-syne text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Writing &amp;{" "}
            <span className="text-gradient-gold">Thoughts</span>
          </h1>
          <p
            className="text-sm font-mono max-w-md"
            style={{ color: "var(--text-secondary)" }}
          >
            I write about web development, React, my journey as a student developer in Ethiopia,
            and lessons learned building real systems.
          </p>
        </motion.div>

        {/* Posts */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-5"
        >
          {posts.map((post) => (
            <motion.article
              key={post.slug}
              variants={staggerItem}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.15 }}
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div
                  className="glass-card p-6 rounded-2xl group cursor-pointer"
                >
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <span
                      className="flex items-center gap-1.5 text-xs font-mono"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span
                      className="flex items-center gap-1.5 text-xs font-mono"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h2
                        className="font-syne font-bold text-xl mb-2 group-hover:text-[var(--accent-gold)] transition-colors"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {post.title}
                      </h2>
                      <p
                        className="text-sm leading-relaxed mb-4"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span key={tag} className="tag tag-gold text-xs">
                            <Tag size={10} className="mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: "var(--accent-gold)" }}
                    />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
