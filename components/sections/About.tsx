"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem } from "@/lib/animations";
import { BookOpen, Code2, Lightbulb, Rocket, Target, Zap } from "lucide-react";

const milestones = [
  { year: "2022", label: "Started coding", icon: "🌱" },
  { year: "2023", label: "HTML/CSS/JS basics", icon: "💻" },
  { year: "2023", label: "Joined Woldia CS", icon: "🎓" },
  { year: "2024", label: "Discovered React", icon: "⚛️" },
  { year: "2024", label: "FCC Certifications", icon: "🏆" },
  { year: "2025", label: "Building systems", icon: "🚀" },
];

const facts = [
  { icon: Code2, label: "Languages", value: "6+" },
  { icon: Rocket, label: "Projects Built", value: "8+" },
  { icon: BookOpen, label: "Certifications", value: "2" },
  { icon: Target, label: "Goal", value: "Internship" },
];

export function About() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="about" ref={ref} className="relative z-10 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex justify-center mb-16"
        >
          <span className="section-label">About Me</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — story */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h2
              className="font-syne text-3xl md:text-4xl xl:text-5xl font-bold mb-6 leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Turning lines of code into{" "}
              <span className="text-gradient-gold">real solutions</span>
            </h2>
            <div
              className="space-y-4 text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              <p>
                I&apos;m <strong style={{ color: "var(--text-primary)" }}>Bereket Tesfaye Getie</strong>, 
                a Computer Science student at Woldia University in Ethiopia. I started programming 
                out of curiosity and quickly became obsessed with building things that matter.
              </p>
              <p>
                What started as experimenting with HTML turned into building full-stack systems — 
                a{" "}
                <span style={{ color: "var(--accent-gold)" }}>University Grade Management System</span>{" "}
                used at my own institution, an e-commerce platform, and this portfolio you&apos;re 
                reading right now.
              </p>
              <p>
                I love the intersection of{" "}
                <span style={{ color: "var(--accent-green)" }}>engineering precision</span> and{" "}
                <span style={{ color: "var(--accent-gold)" }}>beautiful design</span>. 
                My goal is to land an internship where I can grow fast, contribute real value, 
                and learn from experienced engineers.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m exploring AI tools, experimenting with UI concepts, 
                or thinking about the next system I want to build.
              </p>
            </div>

            {/* Facts grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8"
            >
              {facts.map((fact) => (
                <motion.div
                  key={fact.label}
                  variants={staggerItem}
                  className="glass-card p-4 rounded-xl text-center"
                >
                  <fact.icon
                    size={18}
                    className="mx-auto mb-2"
                    style={{ color: "var(--accent-gold)" }}
                  />
                  <div
                    className="font-syne text-xl font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {fact.value}
                  </div>
                  <div
                    className="text-xs font-mono mt-0.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {fact.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — visual panel */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col gap-6"
          >
            {/* Terminal-style card */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span
                  className="ml-3 text-xs font-mono"
                  style={{ color: "var(--text-muted)" }}
                >
                  ~/bereket/about.json
                </span>
              </div>
              <div className="p-5 text-sm font-mono space-y-1">
                <p style={{ color: "#7dd3fc" }}>{"{"}</p>
                <p className="pl-4">
                  <span style={{ color: "#e879f9" }}>&quot;name&quot;</span>
                  <span style={{ color: "#94a3b8" }}>: </span>
                  <span style={{ color: "#86efac" }}>&quot;Bereket Tesfaye Getie&quot;</span>,
                </p>
                <p className="pl-4">
                  <span style={{ color: "#e879f9" }}>&quot;role&quot;</span>
                  <span style={{ color: "#94a3b8" }}>: </span>
                  <span style={{ color: "#86efac" }}>&quot;Full-Stack Developer&quot;</span>,
                </p>
                <p className="pl-4">
                  <span style={{ color: "#e879f9" }}>&quot;university&quot;</span>
                  <span style={{ color: "#94a3b8" }}>: </span>
                  <span style={{ color: "#86efac" }}>&quot;Woldia University&quot;</span>,
                </p>
                <p className="pl-4">
                  <span style={{ color: "#e879f9" }}>&quot;location&quot;</span>
                  <span style={{ color: "#94a3b8" }}>: </span>
                  <span style={{ color: "#86efac" }}>&quot;Woldia, Ethiopia 🇪🇹&quot;</span>,
                </p>
                <p className="pl-4">
                  <span style={{ color: "#e879f9" }}>&quot;status&quot;</span>
                  <span style={{ color: "#94a3b8" }}>: </span>
                  <span style={{ color: "#34d399" }}>&quot;open to opportunities&quot;</span>,
                </p>
                <p className="pl-4">
                  <span style={{ color: "#e879f9" }}>&quot;interests&quot;</span>
                  <span style={{ color: "#94a3b8" }}>: </span>
                  <span style={{ color: "#7dd3fc" }}>[</span>
                </p>
                {[
                  "React & Next.js",
                  "System Architecture",
                  "UI/UX Design",
                  "AI Tools",
                ].map((interest) => (
                  <p key={interest} className="pl-8">
                    <span style={{ color: "#fcd34d" }}>&quot;{interest}&quot;</span>,
                  </p>
                ))}
                <p className="pl-4">
                  <span style={{ color: "#7dd3fc" }}>]</span>
                </p>
                <p style={{ color: "#7dd3fc" }}>{"}"}</p>
              </div>
            </div>

            {/* Passion chips */}
            <div>
              <p
                className="text-xs font-mono mb-3"
                style={{ color: "var(--text-muted)" }}
              >
                {"// what drives me"}
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: "⚡", text: "Shipping fast" },
                  { icon: "🎨", text: "Beautiful UI" },
                  { icon: "🔧", text: "Clean code" },
                  { icon: "📚", text: "Never stop learning" },
                  { icon: "🌍", text: "Real-world impact" },
                  { icon: "🤝", text: "Collaboration" },
                ].map((chip) => (
                  <motion.span
                    key={chip.text}
                    className="tag text-xs px-3 py-1.5 rounded-full"
                    whileHover={{ scale: 1.05, y: -1 }}
                  >
                    {chip.icon} {chip.text}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline milestones */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20"
        >
          <p
            className="text-center text-xs font-mono mb-8 section-label mx-auto"
            style={{ color: "var(--text-muted)" }}
          >
            My Journey
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-0 md:flex-nowrap items-center">
            {milestones.map((m, i) => (
              <div key={i} className="flex items-center gap-2">
                <motion.div
                  variants={staggerItem}
                  className="glass-card px-4 py-3 rounded-xl text-center min-w-[100px]"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className="text-xl mb-1">{m.icon}</div>
                  <div
                    className="font-syne font-bold text-sm"
                    style={{ color: "var(--accent-gold)" }}
                  >
                    {m.year}
                  </div>
                  <div
                    className="text-xs font-mono mt-0.5"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {m.label}
                  </div>
                </motion.div>
                {i < milestones.length - 1 && (
                  <div
                    className="hidden md:block w-6 h-px"
                    style={{ background: "var(--border-color)" }}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
