"use client";

import { motion } from "framer-motion";
import { BlogPost } from "@/types";
import { fadeUp } from "@/lib/animations";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";

export function BlogPostClient({ post }: { post: BlogPost }) {
  return (
    <main className="min-h-screen relative z-10 pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-mono transition-colors"
            style={{ color: "var(--text-muted)" }}
          >
            <ArrowLeft size={14} />
            Back to Blog
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-10">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="flex items-center gap-1.5 text-xs font-mono" style={{ color: "var(--text-muted)" }}>
              <Calendar size={12} />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5 text-xs font-mono" style={{ color: "var(--text-muted)" }}>
              <Clock size={12} />
              {post.readTime}
            </span>
          </div>

          <h1 className="font-syne text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{ color: "var(--text-primary)" }}>
            {post.title}
          </h1>
          <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
            {post.excerpt}
          </p>
          <div className="flex flex-wrap gap-2">
            {post.tags?.map((tag) => (
              <span key={tag} className="tag tag-gold text-xs">
                <Tag size={10} className="mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="mb-10" style={{ borderBottom: "1px solid var(--border-color)" }} />

        {/* Content */}
        {post.content ? (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="prose prose-sm max-w-none font-mono"
            style={{ color: "var(--text-secondary)" }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        ) : (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="glass-card p-8 rounded-2xl text-center"
          >
            <p className="text-2xl mb-3">✍️</p>
            <p className="font-syne font-bold text-lg mb-2" style={{ color: "var(--text-primary)" }}>
              Coming soon
            </p>
            <p className="text-sm font-mono" style={{ color: "var(--text-secondary)" }}>
              This post is being written. Check back soon!
            </p>
          </motion.div>
        )}

        {/* Back link bottom */}
        <div className="mt-16 pt-8" style={{ borderTop: "1px solid var(--border-color)" }}>
          <Link href="/blog" className="btn-ghost inline-flex text-sm">
            <ArrowLeft size={14} />
            All Posts
          </Link>
        </div>
      </div>
    </main>
  );
}
