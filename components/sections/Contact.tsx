"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, fadeLeft, fadeRight } from "@/lib/animations";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Send,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const socials = [
  {
    icon: Mail,
    label: "Email",
    value: "berekettesfayegetie89@gmail.com",
    href: "mailto:berekettesfayegetie89@gmail.com",
    color: "#e8a838",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "berekettesfayegetie89-ethiopia",
    href: "https://github.com/berekettesfayegetie89-ethiopia",
    color: "#e2e8f0",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "bereket-tesfaye-getie",
    href: "https://www.linkedin.com/in/bereket-tesfaye-getie-b160b9373",
    color: "#0ea5e9",
  },
  {
    icon: Twitter,
    label: "X / Twitter",
    value: "@BereketGet48667",
    href: "https://x.com/BereketGet48667",
    color: "#94a3b8",
  },
];

type FormState = "idle" | "sending" | "success" | "error";

export function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    try {
      const res = await fetch("https://formspree.io/f/xreddnoj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormState("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setFormState("idle"), 4000);
      } else {
        setFormState("error");
        setTimeout(() => setFormState("idle"), 3000);
      }
    } catch {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 3000);
    }
  };

  return (
    <section id="contact" ref={ref} className="relative z-10 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block justify-center">
            Contact
          </span>
          <h2
            className="font-syne text-3xl md:text-4xl xl:text-5xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Let&apos;s <span className="text-gradient-gold">work together</span>
          </h2>
          <p
            className="mt-4 text-sm font-mono max-w-md mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Open to internships, freelance work, and collaborations. Let&apos;s
            build something great.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — info */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Status card */}
            <div
              className="glass-card p-5 rounded-2xl"
              style={{ borderColor: "rgba(52,211,153,0.2)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-2.5 h-2.5 rounded-full animate-pulse"
                  style={{ background: "#34d399" }}
                />
                <span
                  className="text-sm font-mono font-medium"
                  style={{ color: "#34d399" }}
                >
                  Currently available
                </span>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                I&apos;m actively looking for internship opportunities where I
                can contribute and grow as a developer.
              </p>
            </div>

            {/* Location & timezone */}
            <div className="glass-card p-5 rounded-2xl">
              <div className="flex items-start gap-3 mb-4">
                <MapPin
                  size={16}
                  style={{ color: "var(--accent-gold)", marginTop: 2 }}
                />
                <div>
                  <p
                    className="text-sm font-mono font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Woldia, Ethiopia 🇪🇹
                  </p>
                  <p
                    className="text-xs font-mono mt-0.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    East Africa Time (UTC+3)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock
                  size={16}
                  style={{ color: "var(--accent-gold)", marginTop: 2 }}
                />
                <div>
                  <p
                    className="text-sm font-mono font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Response time
                  </p>
                  <p
                    className="text-xs font-mono mt-0.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card flex items-center gap-3 p-4 rounded-xl group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.15 }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${s.color}18` }}
                  >
                    <s.icon size={16} style={{ color: s.color }} />
                  </div>
                  <div className="overflow-hidden">
                    <div
                      className="text-xs font-mono"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {s.label}
                    </div>
                    <div
                      className="text-sm font-mono truncate"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {s.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3
                className="font-syne font-bold text-xl mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    {
                      id: "name",
                      label: "Name",
                      placeholder: "Your name",
                      type: "text",
                    },
                    {
                      id: "email",
                      label: "Email",
                      placeholder: "your@email.com",
                      type: "email",
                    },
                  ].map((field) => (
                    <div key={field.id}>
                      <label
                        htmlFor={field.id}
                        className="block text-xs font-mono mb-2"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {field.label} *
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        required
                        placeholder={field.placeholder}
                        value={formData[field.id as keyof typeof formData]}
                        onChange={(e) =>
                          setFormData((p) => ({
                            ...p,
                            [field.id]: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 rounded-xl text-sm font-mono outline-none transition-all"
                        style={{
                          background: "var(--bg-secondary)",
                          border: "1px solid var(--border-color)",
                          color: "var(--text-primary)",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "var(--accent-gold)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor = "var(--border-color)")
                        }
                      />
                    </div>
                  ))}
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Internship opportunity / Collaboration / etc."
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, subject: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl text-sm font-mono outline-none transition-all"
                    style={{
                      background: "var(--bg-secondary)",
                      border: "1px solid var(--border-color)",
                      color: "var(--text-primary)",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--accent-gold)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--border-color)")
                    }
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, message: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl text-sm font-mono outline-none resize-none transition-all"
                    style={{
                      background: "var(--bg-secondary)",
                      border: "1px solid var(--border-color)",
                      color: "var(--text-primary)",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--accent-gold)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--border-color)")
                    }
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={formState === "sending" || formState === "success"}
                  className="w-full py-3.5 px-6 rounded-xl font-mono text-sm font-medium flex items-center justify-center gap-2 transition-all"
                  style={{
                    background:
                      formState === "success"
                        ? "rgba(52,211,153,0.15)"
                        : "var(--accent-gold)",
                    color: formState === "success" ? "#34d399" : "#07080f",
                    border:
                      formState === "success"
                        ? "1px solid rgba(52,211,153,0.3)"
                        : "none",
                    opacity: formState === "sending" ? 0.7 : 1,
                  }}
                  whileHover={
                    formState === "idle" ? { scale: 1.02, y: -1 } : {}
                  }
                  whileTap={formState === "idle" ? { scale: 0.98 } : {}}
                >
                  {formState === "idle" && (
                    <>
                      Send Message <Send size={14} />
                    </>
                  )}
                  {formState === "sending" && (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-[#07080f] border-t-transparent animate-spin" />
                      Sending...
                    </>
                  )}
                  {formState === "success" && (
                    <>
                      <CheckCircle2 size={16} /> Message sent!
                    </>
                  )}
                  {formState === "error" && (
                    <>
                      <AlertCircle size={16} /> Try again
                    </>
                  )}
                </motion.button>

                <p
                  className="text-center text-xs font-mono"
                  style={{ color: "var(--text-muted)" }}
                >
                  Or email me directly at{" "}
                  <a
                    href="mailto:berekettesfayegetie89@gmail.com"
                    style={{ color: "var(--accent-gold)" }}
                  >
                    berekettesfayegetie89@gmail.com
                  </a>
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
