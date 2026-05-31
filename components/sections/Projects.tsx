"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { ExternalLink, Github, Clock, CheckCircle2, Circle, ArrowUpRight } from "lucide-react";
import { staticProjects } from "@/lib/data";
import { Project } from "@/types";

const statusConfig = {
  completed: { icon: CheckCircle2, label: "Completed", color: "#34d399" },
  "in-progress": { icon: Clock, label: "In Progress", color: "#e8a838" },
  planned: { icon: Circle, label: "Planned", color: "#94a3b8" },
};

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const status = statusConfig[project.status];

  return (
    <motion.div
      variants={staggerItem}
      className={`glass-card rounded-2xl overflow-hidden group ${featured ? "md:col-span-2" : ""}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {/* Image/color header */}
      <div
        className={`relative ${featured ? "h-52" : "h-40"} bg-gradient-to-br overflow-hidden`}
        style={{
          background: `linear-gradient(135deg, var(--bg-secondary), var(--bg-primary))`,
        }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${project.imageColor} opacity-80`} />

        {/* Code decoration */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 font-mono text-xs overflow-hidden select-none pointer-events-none">
          <div className="text-center space-y-1">
            {["const App = () => {", "  return <Portfolio />;", "};"].map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        </div>

        {/* Status badge */}
        <div className="absolute top-4 left-4">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono"
            style={{
              background: "rgba(7,8,15,0.7)",
              border: `1px solid ${status.color}40`,
              color: status.color,
              backdropFilter: "blur(8px)",
            }}
          >
            <status.icon size={10} />
            {status.label}
          </span>
        </div>

        {/* Year badge */}
        <div className="absolute top-4 right-4">
          <span
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono"
            style={{
              background: "rgba(7,8,15,0.7)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "var(--text-muted)",
              backdropFilter: "blur(8px)",
            }}
          >
            {project.year}
          </span>
        </div>

        {/* Hover overlay with links */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "rgba(7,8,15,0.7)", backdropFilter: "blur(4px)" }}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-mono"
              style={{ background: "var(--accent-gold)", color: "#07080f" }}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-mono"
              style={{
                background: "rgba(255,255,255,0.1)",
                color: "var(--text-primary)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={14} />
              Code
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3
            className="font-syne font-bold text-lg leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            {project.title}
          </h3>
          {(project.liveUrl || project.githubUrl) && (
            <ArrowUpRight
              size={16}
              className="flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ color: "var(--accent-gold)" }}
            />
          )}
        </div>

        <p
          className="text-sm leading-relaxed mb-4 line-clamp-2"
          style={{ color: "var(--text-secondary)" }}
        >
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span key={tech} className="tag text-xs">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        {(project.liveUrl || project.githubUrl) && (
          <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid var(--border-color)" }}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono transition-colors"
                style={{ color: "var(--accent-gold)" }}
              >
                <ExternalLink size={12} />
                View Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono transition-colors"
                style={{ color: "var(--text-muted)" }}
              >
                <Github size={12} />
                Source
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const featured = staticProjects.filter((p) => p.featured);
  const others = staticProjects.filter((p) => !p.featured);

  return (
    <section id="projects" ref={ref} className="relative z-10 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block justify-center">
            Projects
          </span>
          <h2
            className="font-syne text-3xl md:text-4xl xl:text-5xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Things I&apos;ve{" "}
            <span className="text-gradient-gold">built</span>
          </h2>
          <p
            className="mt-4 text-sm font-mono max-w-md mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Real projects with real users. Each one taught me something new.
          </p>
        </motion.div>

        {/* Featured projects */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
        >
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </motion.div>

        {/* Other projects */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {others.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/berekettesfayegetie89-ethiopia"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex"
          >
            <Github size={16} />
            More on GitHub
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
