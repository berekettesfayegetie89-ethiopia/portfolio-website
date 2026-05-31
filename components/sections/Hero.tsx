"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  Github,
  Linkedin,
  Twitter,
  ArrowDown,
  Download,
  ExternalLink,
} from "lucide-react";
import { containerLetters, letterVariants, fadeUp } from "@/lib/animations";

const letters = "BEREKET".split("");
const subLetters = "TESFAYE GETIE".split("");

const socials = [
  {
    icon: Github,
    href: "https://github.com/berekettesfayegetie89-ethiopia",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/bereket-tesfaye-getie-b160b9373",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://x.com/BereketGet48667",
    label: "X / Twitter",
  },
];

export function Hero() {
  const scrollToWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12 z-10 overflow-hidden">
      {/* Ambient glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(232,168,56,0.06) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 80% 70%, rgba(52,211,153,0.04) 0%, transparent 60%)",
        }}
      />

      {/* Floating badges */}
      <div className="relative w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden"
  style={{ border: "2px solid var(--border-color)" }}>
  <Image
    src="/images/profile.jpg"
    alt="Bereket Tesfaye Getie"
    fill
    className="object-cover"
    priority
  />
</div>
      <motion.div
        className="absolute top-32 right-8 md:right-24 hidden sm:flex"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="tag-gold tag text-xs px-3 py-1.5 rounded-full"
          style={{ backdropFilter: "blur(12px)" }}
        >
          🎓 CS @ Woldia University
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-36 left-6 md:left-20 hidden sm:flex"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div
          className="tag-green tag text-xs px-3 py-1.5 rounded-full"
          style={{ backdropFilter: "blur(12px)" }}
        >
          🇪🇹 Woldia, Ethiopia
        </div>
      </motion.div>

      <motion.div
        className="absolute top-44 left-6 md:left-16 hidden md:flex"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div className="tag text-xs px-3 py-1.5 rounded-full font-mono"
          style={{ backdropFilter: "blur(12px)" }}>
          ⚡ Open to Internship
        </div>
      </motion.div>

      <div className="max-w-5xl w-full text-center">
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono"
            style={{
              background: "rgba(52,211,153,0.08)",
              border: "1px solid rgba(52,211,153,0.2)",
              color: "var(--accent-green)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "var(--accent-green)" }}
            />
            Available for internship &amp; collaboration
          </div>
        </motion.div>

        {/* Main name — BEREKET */}
        <motion.div
          variants={containerLetters}
          initial="hidden"
          animate="visible"
          className="flex justify-center mb-1 overflow-hidden"
          style={{ perspective: "800px" }}
        >
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              className="font-syne inline-block leading-none select-none"
              style={{
                fontSize: "clamp(3.5rem, 12vw, 9rem)",
                fontWeight: 800,
                background: "linear-gradient(135deg, #f0ece3 20%, #e8a838 60%, #f0c060 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "0.02em",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Sub name — TESFAYE GETIE */}
        <motion.div
          variants={containerLetters}
          initial="hidden"
          animate="visible"
          className="flex justify-center flex-wrap mb-6 overflow-hidden"
          style={{ perspective: "800px" }}
        >
          {subLetters.map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              custom={i}
              className="font-syne inline-block leading-none select-none"
              style={{
                fontSize: "clamp(1.2rem, 3.5vw, 2.8rem)",
                fontWeight: 600,
                color: "var(--text-secondary)",
                letterSpacing: letter === " " ? "0.5em" : "0.08em",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Typewriter role */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="mb-6 h-8 flex justify-center items-center"
        >
          <span className="font-mono text-sm md:text-base" style={{ color: "var(--accent-gold)" }}>
            {">"}{" "}
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                2000,
                "React & Next.js Engineer",
                2000,
                "UI/UX Enthusiast",
                2000,
                "CS Student @ Woldia University",
                2000,
                "Building Real-World Systems",
                2000,
                "PHP & MySQL Developer",
                2000,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
            />
            <span className="animate-blink-cursor ml-0.5" style={{ color: "var(--accent-green)" }}>_</span>
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
          className="text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          I build real, production-grade web systems — from university grade
          management platforms to e-commerce apps. Passionate about clean code,
          great UX, and shipping things that actually work.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <motion.button
            onClick={scrollToWork}
            className="btn-primary"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            View My Work
            <ExternalLink size={14} />
          </motion.button>

          <motion.a
            href="/resume-bereket-tesfaye.pdf"
            download
            className="btn-ghost"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Download size={14} />
            Download CV
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
          className="flex items-center justify-center gap-4"
        >
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-xl glass-card flex items-center justify-center transition-colors"
              style={{ color: "var(--text-muted)" }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <s.icon size={16} />
            </motion.a>
          ))}
          <div
            className="w-px h-6 mx-1"
            style={{ background: "var(--border-color)" }}
          />
          <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
            @berekettesfayegetie
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          style={{ color: "var(--accent-gold)" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
