"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Terminal, ArrowUp, Mail } from "lucide-react";

const links = {
  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Timeline", href: "#timeline" },
    { label: "Certificates", href: "#certificates" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "#contact" },
  ],
  social: [
    { label: "GitHub", icon: Github, href: "https://github.com/berekettesfayegetie89-ethiopia" },
    { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/bereket-tesfaye-getie-b160b9373" },
    { label: "Twitter / X", icon: Twitter, href: "https://x.com/BereketGet48667" },
    { label: "Email", icon: Mail, href: "mailto:berekettesfayegetie89@gmail.com" },
  ],
};

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative z-10 mt-24 border-t"
      style={{ borderColor: "var(--border-color)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4 font-syne font-bold text-xl">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "var(--accent-gold)" }}
              >
                <Terminal size={16} className="text-[#07080f]" />
              </div>
              <span style={{ color: "var(--text-primary)" }}>
                BTG<span style={{ color: "var(--accent-gold)" }}>.</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              CS student at Woldia University building real-world web systems.
              Always learning, always shipping.
            </p>
            <div className="flex items-center gap-1 text-xs font-mono" style={{ color: "var(--text-muted)" }}>
              <span
                className="inline-block w-2 h-2 rounded-full animate-pulse"
                style={{ background: "var(--accent-green)" }}
              />
              Available for internship
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-syne font-semibold text-sm mb-4 tracking-wider uppercase" style={{ color: "var(--text-primary)" }}>
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {links.nav.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-mono transition-colors hover:text-[var(--accent-gold)]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-syne font-semibold text-sm mb-4 tracking-wider uppercase" style={{ color: "var(--text-primary)" }}>
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              {links.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-mono transition-colors group"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center glass-card group-hover:border-[var(--accent-gold)] transition-colors"
                    style={{ color: "var(--accent-gold)" }}
                  >
                    <s.icon size={14} />
                  </span>
                  <span className="group-hover:text-[var(--text-primary)] transition-colors">
                    {s.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t"
          style={{ borderColor: "var(--border-color)" }}
        >
          <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Bereket Tesfaye Getie.{" "}
            <span style={{ color: "var(--text-muted)" }}>Built with</span>{" "}
            <span style={{ color: "var(--accent-gold)" }}>Next.js</span>{" "}
            <span style={{ color: "var(--text-muted)" }}>+</span>{" "}
            <span style={{ color: "var(--accent-green)" }}>Framer Motion</span>
          </p>
          <motion.button
            onClick={scrollTop}
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-xs font-mono transition-colors"
            style={{ color: "var(--text-muted)" }}
          >
            Back to top
            <span
              className="w-7 h-7 rounded-lg flex items-center justify-center glass-card"
              style={{ color: "var(--accent-gold)" }}
            >
              <ArrowUp size={12} />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
