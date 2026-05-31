"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

const timelineData = [
  {
    year: "2022",
    title: "First Line of Code",
    description: "Wrote my first HTML page out of curiosity. Saw the browser render my words and got completely hooked. Started with FreeCodeCamp.",
    type: "milestone",
    icon: "🌱",
    side: "left",
  },
  {
    year: "2023",
    title: "Enrolled at Woldia University",
    description: "Joined the Computer Science program at Woldia University, Ethiopia. Met fellow developers and deepened my fundamentals.",
    type: "education",
    icon: "🎓",
    side: "right",
  },
  {
    year: "2023",
    title: "JavaScript Deep Dive",
    description: "Moved beyond HTML/CSS into JavaScript — async/await, DOM manipulation, fetch API. Built first dynamic projects.",
    type: "milestone",
    icon: "⚡",
    side: "left",
  },
  {
    year: "2024",
    title: "FCC Responsive Web Design Cert",
    description: "Earned the freeCodeCamp Responsive Web Design certification. Mastered Flexbox, CSS Grid, and modern layout techniques.",
    type: "certification",
    icon: "🏆",
    side: "right",
    link: "https://www.freecodecamp.org/certification/fcc-aff1ef7e-dc5e-4ce1-acfc-cf20d46155a3/responsive-web-design",
  },
  {
    year: "2024",
    title: "Discovered React & Next.js",
    description: "Component-based thinking changed everything. Learned React Hooks, state management, and then dove into Next.js App Router.",
    type: "milestone",
    icon: "⚛️",
    side: "left",
  },
  {
    year: "2024",
    title: "FCC JavaScript Algorithms Cert",
    description: "Completed the JavaScript Algorithms & Data Structures (v9) certification from freeCodeCamp.",
    type: "certification",
    icon: "📜",
    side: "right",
    link: "https://www.freecodecamp.org/certification/fcc-aff1ef7e-dc5e-4ce1-acfc-cf20d46155a3/javascript-v9",
  },
  {
    year: "2024",
    title: "Grade Management System",
    description: "Built a full University Grade Management System in PHP & MySQL. Used by real students and instructors at my institution.",
    type: "project",
    icon: "🚀",
    side: "left",
    link: "https://studentgradesystem.free.nf/",
  },
  {
    year: "2025",
    title: "E-Commerce Platform & More",
    description: "Built an e-commerce app with Next.js & Tailwind, started the Dormitory Management System, and launched this portfolio.",
    type: "project",
    icon: "🛍️",
    side: "right",
  },
  {
    year: "Now",
    title: "Seeking Internship",
    description: "Actively looking for internship opportunities to grow with a great team, contribute real value, and level up fast.",
    type: "milestone",
    icon: "🎯",
    side: "left",
  },
];

const typeColors: Record<string, string> = {
  milestone: "#e8a838",
  education: "#a78bfa",
  certification: "#34d399",
  project: "#60a5fa",
};

function TimelineItem({ item, index, inView }: { item: typeof timelineData[0]; index: number; inView: boolean }) {
  const color = typeColors[item.type];
  const isLeft = item.side === "left";

  return (
    <motion.div
      variants={staggerItem}
      className={`relative flex items-start gap-6 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-row`}
    >
      {/* Content */}
      <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"} text-left`}>
        <motion.div
          className="glass-card p-5 rounded-xl inline-block max-w-sm"
          whileHover={{ scale: 1.02, y: -2 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span
              className="text-xs font-mono font-bold px-2 py-0.5 rounded-full"
              style={{ background: `${color}18`, color }}
            >
              {item.year}
            </span>
            <span
              className="text-xs font-mono capitalize"
              style={{ color: "var(--text-muted)" }}
            >
              {item.type}
            </span>
          </div>
          <h3
            className="font-syne font-bold text-base mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            {item.title}
          </h3>
          <p
            className="text-xs leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {item.description}
          </p>
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-xs font-mono transition-colors"
              style={{ color }}
            >
              View →
            </a>
          )}
        </motion.div>
      </div>

      {/* Center dot */}
      <div className="flex-shrink-0 flex flex-col items-center gap-0 relative z-10">
        <motion.div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-base"
          style={{
            background: `${color}18`,
            border: `1.5px solid ${color}50`,
          }}
          whileHover={{ scale: 1.15, rotate: 5 }}
          initial={{ scale: 0, rotate: -10 }}
          animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -10 }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.4, ease: "backOut" }}
        >
          {item.icon}
        </motion.div>
      </div>

      {/* Empty side */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}

export function Timeline() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="timeline" ref={ref} className="relative z-10 py-28 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block justify-center">
            Journey
          </span>
          <h2
            className="font-syne text-3xl md:text-4xl xl:text-5xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            How I got{" "}
            <span className="text-gradient-gold">here</span>
          </h2>
          <p
            className="mt-4 text-sm font-mono max-w-md mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            From zero to building real-world systems. Every step forward, no matter how small.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-[108px] md:left-1/2 top-0 bottom-0 w-px"
            style={{ background: "var(--border-color)" }}
            initial={{ scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {timelineData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} inView={inView} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
