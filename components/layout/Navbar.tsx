"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Menu, X, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#timeline" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["about", "skills", "projects", "timeline", "contact"];
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "py-3"
            : "py-5"
        )}
      >
        <div
          className={cn(
            "mx-auto max-w-6xl px-6 flex items-center justify-between transition-all duration-300",
            scrolled && "backdrop-blur-xl"
          )}
          style={
            scrolled
              ? {
                  background: "rgba(7,8,15,0.85)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "16px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                }
              : {}
          }
        >
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center gap-2 font-syne font-bold text-lg"
            style={{ color: "var(--text-primary)" }}
            whileHover={{ scale: 1.02 }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "var(--accent-gold)" }}
            >
              <Terminal size={14} className="text-[#07080f]" />
            </div>
            <span>
              BTG
              <span style={{ color: "var(--accent-gold)" }}>.</span>
            </span>
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <motion.button
                  key={item.label}
                  onClick={() => handleNav(item.href)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-mono transition-all duration-200",
                    isActive
                      ? "text-[var(--accent-gold)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  )}
                  style={
                    isActive
                      ? { background: "var(--glow-gold)" }
                      : {}
                  }
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 0 }}
                >
                  {item.label}
                </motion.button>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            {/* Mobile menu */}
            <motion.button
              className="md:hidden glass-card w-9 h-9 flex items-center justify-center rounded-xl"
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ scale: 0.95 }}
              style={{ color: "var(--text-primary)" }}
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 rounded-2xl p-4 flex flex-col gap-1"
            style={{
              background: "rgba(7,8,15,0.95)",
              border: "1px solid var(--border-color)",
              backdropFilter: "blur(20px)",
            }}
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.label}
                onClick={() => handleNav(item.href)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="w-full text-left px-4 py-3 rounded-xl text-sm font-mono transition-colors"
                style={{ color: "var(--text-secondary)" }}
              >
                <span style={{ color: "var(--accent-gold)" }} className="mr-2">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
