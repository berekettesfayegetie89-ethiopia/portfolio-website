"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { ExternalLink, Award, CheckCircle2 } from "lucide-react";

const certificates = [
  {
    id: "rwd",
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2024",
    description: "Mastered HTML5, CSS3, Flexbox, CSS Grid, and responsive design principles through 300+ hours of coursework and 5 certification projects.",
    skills: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Responsive Design", "Accessibility"],
    url: "https://www.freecodecamp.org/certification/fcc-aff1ef7e-dc5e-4ce1-acfc-cf20d46155a3/responsive-web-design",
    color: "#0a0a23",
    accent: "#99c432",
    badge: "🎨",
  },
  {
    id: "js",
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    date: "2024",
    description: "Completed the v9 curriculum covering modern JavaScript, ES6+, algorithms, data structures, functional programming, and OOP.",
    skills: ["JavaScript ES6+", "Algorithms", "Data Structures", "OOP", "Functional Programming", "Regex"],
    url: "https://www.freecodecamp.org/certification/fcc-aff1ef7e-dc5e-4ce1-acfc-cf20d46155a3/javascript-v9",
    color: "#0a0a23",
    accent: "#f4c542",
    badge: "⚡",
  },
];

export function Certificates() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="certificates" ref={ref} className="relative z-10 py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block justify-center">
            Certifications
          </span>
          <h2
            className="font-syne text-3xl md:text-4xl xl:text-5xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Verified{" "}
            <span className="text-gradient-gold">credentials</span>
          </h2>
          <p
            className="mt-4 text-sm font-mono max-w-md mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Earned through hundreds of hours of hands-on practice.
          </p>
        </motion.div>

        {/* Cert cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={staggerItem}
              className="glass-card rounded-2xl overflow-hidden group"
              whileHover={{ y: -4 }}
            >
              {/* Header bar */}
              <div
                className="h-2"
                style={{
                  background: `linear-gradient(90deg, ${cert.accent}, ${cert.accent}88)`,
                }}
              />

              <div className="p-6">
                {/* Issuer row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                      style={{ background: cert.color, border: `1px solid ${cert.accent}40` }}
                    >
                      {cert.badge}
                    </div>
                    <div>
                      <div
                        className="text-xs font-mono font-semibold"
                        style={{ color: cert.accent }}
                      >
                        {cert.issuer}
                      </div>
                      <div
                        className="text-xs font-mono"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Issued {cert.date}
                      </div>
                    </div>
                  </div>
                  <CheckCircle2 size={18} style={{ color: cert.accent }} />
                </div>

                {/* Title */}
                <h3
                  className="font-syne font-bold text-lg mb-3 leading-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  {cert.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-2.5 py-1 rounded-full"
                      style={{
                        background: `${cert.accent}10`,
                        border: `1px solid ${cert.accent}30`,
                        color: cert.accent,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-mono px-4 py-2.5 rounded-xl transition-all group-hover:gap-3"
                  style={{
                    background: `${cert.accent}15`,
                    border: `1px solid ${cert.accent}35`,
                    color: cert.accent,
                  }}
                >
                  <Award size={14} />
                  Verify Certificate
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FCC profile link */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-xs font-mono mb-3" style={{ color: "var(--text-muted)" }}>
            More certifications coming — currently working on Advanced JS & Node.js
          </p>
          <a
            href="https://www.freecodecamp.org"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex text-sm"
          >
            <ExternalLink size={14} />
            View FCC Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
