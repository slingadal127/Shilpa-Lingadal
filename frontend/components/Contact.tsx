"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Mail, Github, Linkedin, MapPin, FileText } from "lucide-react";
import { SITE } from "@/lib/data";

const LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: "lingadal.s@northeastern.edu",
    href: "mailto:lingadal.s@northeastern.edu",
    external: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/shilpalingadal",
    href: SITE.linkedin,
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/shilpalingadal",
    href: SITE.github,
    external: true,
  },
  {
    icon: FileText,
    label: "Resume",
    value: "ShilpaLingadal-Resume.pdf",
    href: "/ShilpaLingadal-Resume.pdf",
    download: "ShilpaLingadal-Resume.pdf",
    external: false,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 px-6 border-t border-[var(--border)]">
      <div className="max-w-3xl mx-auto" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 text-[var(--muted)] text-xs font-mono uppercase tracking-widest mb-6">
            <Mail size={12} />
            Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let&apos;s connect</h2>
          <p className="text-[var(--muted)] leading-relaxed">
            I&apos;m currently open to full-time SDE roles starting December 2026. Whether you have a role in mind or just want to say hi — reach out through any of the channels below.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {LINKS.map(({ icon: Icon, label, value, href, external, download }, i) => (
            <motion.a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              download={download}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className="group flex items-center gap-4 p-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--color-accent)] transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl border border-[var(--border)] bg-[var(--bg)] flex items-center justify-center shrink-0 group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)] transition-all">
                <Icon size={16} />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-[var(--muted)] mb-0.5">{label}</p>
                <p className="text-sm font-medium truncate group-hover:text-[var(--color-accent)] transition-colors">
                  {value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Location + availability */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
            <MapPin size={14} className="shrink-0" />
            Boston, MA — open to SF, NYC, Seattle
          </div>
          <div className="flex items-center gap-2 text-sm text-[var(--muted)] sm:ml-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            Open to full-time SDE roles starting Dec 2026
          </div>
        </motion.div>

      </div>
    </section>
  );
}
