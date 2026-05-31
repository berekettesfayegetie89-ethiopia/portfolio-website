"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp } from "@/lib/animations";
import { TerminalIcon } from "lucide-react";

type OutputLine = { text: string; type: "command" | "output" | "error" | "success" | "info" | "empty" };

const commandResponses: Record<string, OutputLine[]> = {
  whoami: [
    { text: "Bereket Tesfaye Getie", type: "success" },
    { text: "Role    : Full-Stack Developer & CS Student", type: "output" },
    { text: "School  : Woldia University, Ethiopia", type: "output" },
    { text: "Status  : Open to internship opportunities", type: "info" },
    { text: "Goal    : Build real-world systems that matter", type: "output" },
  ],
  skills: [
    { text: "── Frontend ──────────────────────────────────", type: "info" },
    { text: "  React  Next.js  TypeScript  Tailwind  HTML/CSS", type: "success" },
    { text: "── Backend ───────────────────────────────────", type: "info" },
    { text: "  PHP  MySQL  Node.js  REST APIs", type: "success" },
    { text: "── Tools ─────────────────────────────────────", type: "info" },
    { text: "  Git  GitHub  VS Code  Figma  Linux", type: "success" },
  ],
  projects: [
    { text: "1. University Grade Management System", type: "success" },
    { text: "   → https://studentgradesystem.free.nf/", type: "info" },
    { text: "   Stack: PHP, MySQL, Bootstrap", type: "output" },
    { text: "", type: "empty" },
    { text: "2. Beki E-Commerce Platform", type: "success" },
    { text: "   → https://beki-ecommerce-oy9z.vercel.app/", type: "info" },
    { text: "   Stack: Next.js, React, Tailwind CSS", type: "output" },
    { text: "", type: "empty" },
    { text: "3. Dormitory Management System [in progress]", type: "success" },
    { text: "4. This Portfolio Website", type: "success" },
  ],
  contact: [
    { text: "Email   : berekettesfayegetie89@gmail.com", type: "output" },
    { text: "GitHub  : github.com/berekettesfayegetie89-ethiopia", type: "info" },
    { text: "LinkedIn: linkedin.com/in/bereket-tesfaye-getie-b160b9373", type: "info" },
    { text: "X       : x.com/BereketGet48667", type: "info" },
    { text: "", type: "empty" },
    { text: "✓ Available for internship & freelance work", type: "success" },
  ],
  github: [
    { text: "Opening GitHub profile...", type: "info" },
    { text: "→ github.com/berekettesfayegetie89-ethiopia", type: "success" },
  ],
  ls: [
    { text: "about/    skills/    projects/    timeline/", type: "output" },
    { text: "certs/    blog/      contact/     resume.pdf", type: "output" },
  ],
  help: [
    { text: "Available commands:", type: "info" },
    { text: "  whoami    — About Bereket", type: "output" },
    { text: "  skills    — Technical skills", type: "output" },
    { text: "  projects  — Built projects", type: "output" },
    { text: "  contact   — Contact info", type: "output" },
    { text: "  github    — Open GitHub profile", type: "output" },
    { text: "  ls        — List sections", type: "output" },
    { text: "  clear     — Clear terminal", type: "output" },
    { text: "  help      — Show this message", type: "output" },
  ],
  clear: [],
};

const textColors: Record<OutputLine["type"], string> = {
  command: "#e8a838",
  output: "#94a3b8",
  error: "#f87171",
  success: "#86efac",
  info: "#7dd3fc",
  empty: "transparent",
};

const INITIAL_LINES: OutputLine[] = [
  { text: "Bereket Tesfaye Getie — Interactive Portfolio Terminal v1.0", type: "info" },
  { text: 'Type "help" for available commands.', type: "output" },
  { text: "", type: "empty" },
];

export function Terminal() {
  const [lines, setLines] = useState<OutputLine[]>(INITIAL_LINES);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const processCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    setLines((prev) => [
      ...prev,
      { text: `bereket@portfolio:~$ ${cmd}`, type: "command" },
    ]);
    setHistory((prev) => [cmd, ...prev]);
    setHistoryIndex(-1);

    if (trimmed === "clear") {
      setTimeout(() => setLines(INITIAL_LINES), 100);
      return;
    }

    if (trimmed === "github") {
      window.open("https://github.com/berekettesfayegetie89-ethiopia", "_blank");
    }

    const response = commandResponses[trimmed];
    if (response !== undefined) {
      setIsTyping(true);
      let delay = 0;
      response.forEach((line) => {
        delay += 40;
        setTimeout(() => {
          setLines((prev) => [...prev, line]);
        }, delay);
      });
      setTimeout(() => {
        setLines((prev) => [...prev, { text: "", type: "empty" }]);
        setIsTyping(false);
      }, delay + 60);
    } else if (trimmed !== "") {
      setTimeout(() => {
        setLines((prev) => [
          ...prev,
          { text: `Command not found: ${trimmed}. Type "help" for available commands.`, type: "error" },
          { text: "", type: "empty" },
        ]);
      }, 80);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (input.trim() || input === "") processCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const newIdx = Math.min(historyIndex + 1, history.length - 1);
      setHistoryIndex(newIdx);
      setInput(history[newIdx] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const newIdx = Math.max(historyIndex - 1, -1);
      setHistoryIndex(newIdx);
      setInput(newIdx === -1 ? "" : history[newIdx] || "");
    }
  };

  return (
    <section id="terminal" ref={ref} className="relative z-10 py-28 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <span className="section-label mb-4 block justify-center">Terminal</span>
          <h2
            className="font-syne text-3xl md:text-4xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Get to know me{" "}
            <span className="text-gradient-gold">interactively</span>
          </h2>
          <p
            className="mt-3 text-sm font-mono"
            style={{ color: "var(--text-secondary)" }}
          >
            Type commands and explore — just like a real developer would.
          </p>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
          className="terminal-window"
        >
          {/* Header */}
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500 opacity-80" />
            <div className="terminal-dot bg-yellow-500 opacity-80" />
            <div className="terminal-dot bg-green-500 opacity-80" />
            <div className="flex items-center gap-2 ml-3">
              <TerminalIcon size={12} style={{ color: "var(--text-muted)" }} />
              <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                bereket@portfolio:~
              </span>
            </div>
          </div>

          {/* Output */}
          <div
            className="p-5 min-h-64 max-h-80 overflow-y-auto text-sm font-mono leading-relaxed"
            onClick={() => inputRef.current?.focus()}
          >
            <AnimatePresence initial={false}>
              {lines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.1 }}
                  className="leading-6"
                  style={{ color: textColors[line.type], minHeight: "1.5rem" }}
                >
                  {line.text}
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Input line */}
            <div className="flex items-center gap-2 mt-1">
              <span style={{ color: "#e8a838" }}>bereket@portfolio:~$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isTyping}
                className="flex-1 bg-transparent outline-none caret-transparent"
                style={{ color: "#e2e8f0" }}
                autoComplete="off"
                autoCorrect="off"
                spellCheck={false}
                aria-label="Terminal input"
              />
              <span
                className="w-2 h-4 animate-blink-cursor"
                style={{ background: "#e8a838" }}
              />
            </div>
            <div ref={bottomRef} />
          </div>

          {/* Quick command buttons */}
          <div
            className="px-5 py-3 flex flex-wrap gap-2 border-t"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            <span className="text-xs font-mono mr-1" style={{ color: "var(--text-muted)" }}>
              Quick:
            </span>
            {["whoami", "skills", "projects", "contact"].map((cmd) => (
              <button
                key={cmd}
                onClick={() => {
                  processCommand(cmd);
                  inputRef.current?.focus();
                }}
                className="text-xs font-mono px-2.5 py-1 rounded-lg transition-all"
                style={{
                  background: "rgba(232,168,56,0.08)",
                  border: "1px solid rgba(232,168,56,0.2)",
                  color: "#e8a838",
                }}
              >
                {cmd}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
