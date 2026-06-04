"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { SITE } from "@/lib/data";

const ROTATING_ROLES = [
  "Software Engineer",
  "Backend Engineer",
  "Infra Engineer",
  "ML Systems Engineer",
  "Distributed Systems Engineer",
];

function TypewriterText({ phrases }: { phrases: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed === current) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayed(
          deleting
            ? current.slice(0, displayed.length - 1)
            : current.slice(0, displayed.length + 1)
        );
      }, deleting ? 40 : 70);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, phrases]);

  return (
    <span className="text-[var(--color-accent)]">
      {displayed}
      <span className="animate-[blink_1s_step-end_infinite] border-r-2 border-[var(--color-accent)] ml-0.5" />
    </span>
  );
}

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16 overflow-hidden"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--fg) 1px, transparent 1px), linear-gradient(90deg, var(--fg) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)] opacity-[0.05] blur-[120px] -z-10" />

      {inView && (
        <div className="max-w-3xl w-full">
          {/* Layout: avatar left, content right */}
          <div className="flex gap-8 items-start">
            {/* Avatar */}
            <FadeUp delay={0} className="shrink-0 pt-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/avatar.jpg`}
                alt="Shilpa Lingadal"
                width={224}
                height={224}
                className="w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover object-top ring-2 ring-[var(--border)]"
              />
            </FadeUp>

            {/* All text content */}
            <div className="flex-1 min-w-0">
          {/* Name */}
          <FadeUp delay={0}>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-4">
              Shilpa<br />Lingadal
            </h1>
          </FadeUp>

          {/* Rotating tagline */}
          <FadeUp delay={0.12}>
            <p className="text-xl sm:text-2xl font-semibold mb-6 text-[var(--fg)]">
              <TypewriterText phrases={ROTATING_ROLES} />
            </p>
          </FadeUp>

          {/* Credential line */}
          <FadeUp delay={0.22}>
            <p className="text-sm sm:text-base text-[var(--muted)] mb-8 leading-relaxed">
              SDE Co-op @ Amazon Robotics &nbsp;·&nbsp; SWE @ Infor &nbsp;·&nbsp; MS Software Engineering @ Northeastern
            </p>
          </FadeUp>

          {/* Links */}
          <FadeUp delay={0.32}>
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { href: SITE.github, icon: Github, label: "GitHub" },
                { href: SITE.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${SITE.email}`, icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[var(--border)] bg-[var(--card)] text-sm font-medium hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all"
                >
                  <Icon size={15} />
                  {label}
                </a>
              ))}
              <a
                href="/ShilpaLingadal-Resume.pdf"
                download="ShilpaLingadal-Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-accent)] text-white text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Resume
              </a>
            </div>
          </FadeUp>

          {/* Open to work */}
          <FadeUp delay={0.42}>
            <p className="flex items-center gap-2 text-sm text-[var(--muted)]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
              Open to SWE / Backend / ML roles starting December 2026
            </p>
          </FadeUp>
            </div>{/* end text column */}
          </div>{/* end layout row */}
        </div>
      )}

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-[var(--muted)]"
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
