"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    color: "#e8a838",
    emoji: "🎨",
    skills: [
      { name: "React", level: 85, note: "Hooks, Context, Router" },
      { name: "Next.js", level: 80, note: "App Router, SSR, SSG" },
      { name: "TypeScript", level: 72, note: "Types, Interfaces, Generics" },
      { name: "Tailwind CSS", level: 88, note: "Utility-first, Responsive" },
      { name: "JavaScript", level: 85, note: "ES6+, Async, DOM" },
      { name: "HTML & CSS", level: 92, note: "Semantic, Flexbox, Grid" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    color: "#34d399",
    emoji: "⚙️",
    skills: [
      { name: "PHP", level: 80, note: "OOP, REST APIs, Sessions" },
      { name: "MySQL", level: 78, note: "Schema design, Queries" },
      { name: "Node.js", level: 60, note: "Express, REST APIs" },
      { name: "REST APIs", level: 75, note: "CRUD, JSON, Auth" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Design",
    color: "#a78bfa",
    emoji: "🛠️",
    skills: [
      { name: "Git & GitHub", level: 82, note: "Branching, PRs, CI" },
      { name: "VS Code", level: 90, note: "Extensions, Debugging" },
      { name: "Figma", level: 65, note: "UI design, Prototyping" },
      { name: "Bootstrap", level: 80, note: "Components, Grid" },
      { name: "Linux", level: 60, note: "CLI, File system, Bash" },
    ],
  },
];

function SkillBar({
  name,
  level,
  note,
  color,
  delay,
  inView,
}: {
  name: string;
  level: number;
  note: string;
  color: string;
  delay: number;
  inView: boolean;
}) {
  return (
    <motion.div
      variants={staggerItem}
      className="group"
      whileHover={{ x: 2 }}
    >
      <div className="flex items-center justify-between mb-1.5">
        <span
          className="text-sm font-mono font-medium"
          style={{ color: "var(--text-primary)" }}
        >
          {name}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono hidden group-hover:block transition-all" style={{ color: "var(--text-muted)" }}>
            {note}
          </span>
          <span className="text-xs font-mono" style={{ color }}>
            {level}%
          </span>
        </div>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)" }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" ref={ref} className="relative z-10 py-28 px-6">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Label + heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block mx-auto justify-center">
            Skills
          </span>
          <h2
            className="font-syne text-3xl md:text-4xl xl:text-5xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            My{" "}
            <span className="text-gradient-gold">technical</span> toolkit
          </h2>
          <p
            className="mt-4 text-sm font-mono max-w-md mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Technologies I use to build real products — from pixel-perfect UIs to
            database-driven backends.
          </p>
        </motion.div>

        {/* Skill category cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.id}
              variants={staggerItem}
              className="glass-card p-6 rounded-2xl"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6 pb-4"
                style={{ borderBottom: "1px solid var(--border-color)" }}>
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
                  style={{ background: `${cat.color}18` }}
                >
                  {cat.emoji}
                </div>
                <div>
                  <h3
                    className="font-syne font-bold text-base"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {cat.label}
                  </h3>
                  <span
                    className="text-xs font-mono"
                    style={{ color: cat.color }}
                  >
                    {cat.skills.length} skills
                  </span>
                </div>
              </div>

              {/* Skill bars */}
              <div className="space-y-4">
                {cat.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    note={skill.note}
                    color={cat.color}
                    delay={catIdx * 0.1 + skillIdx * 0.08}
                    inView={inView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech logo cloud */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <p
            className="text-center text-xs font-mono mb-6"
            style={{ color: "var(--text-muted)" }}
          >
            // currently learning & exploring
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "TypeScript", "Prisma", "Docker", "Redis",
              "GraphQL", "Testing", "CI/CD", "Web3",
            ].map((tech) => (
              <motion.span
                key={tech}
                className="tag text-xs px-3 py-1.5 rounded-full"
                whileHover={{ scale: 1.05, y: -1 }}
                style={{ borderStyle: "dashed" }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
