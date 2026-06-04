"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ExternalLink, Github, TrendingUp, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";

function TechBadge({ tech }: { tech: string }) {
  return (
    <span className="inline-flex text-xs font-mono px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--card)] text-[var(--muted)]">
      {tech}
    </span>
  );
}

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    Production: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    "Open Source": "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30",
    Beta: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
  };
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full border ${colors[status] ?? colors.Beta}`}>
      {status}
    </span>
  );
}

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[number]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="group relative rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden hover:border-[var(--color-accent)]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-accent)]/5"
    >
      {/* Top gradient bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.color}`} />

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-semibold text-lg mb-1 group-hover:text-[var(--color-accent)] transition-colors">
              {project.title}
            </h3>
            <StatusBadge status={project.status} />
          </div>
          <div className="flex gap-2 shrink-0 ml-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--fg)] transition-all"
              aria-label={`${project.title} GitHub`}
            >
              <Github size={14} />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        <p className="text-sm text-[var(--muted)] mb-4 leading-relaxed">{project.description}</p>

        {/* Impact metrics */}
        <div className="grid grid-cols-3 gap-2 mb-4 p-3 rounded-xl bg-[var(--bg)] border border-[var(--border)]">
          {project.metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-sm font-bold text-[var(--color-accent)]">{m.value}</div>
              <div className="text-xs text-[var(--muted)] leading-tight mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <TechBadge key={t} tech={t} />
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  const featured = PROJECTS.filter((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 text-[var(--color-accent)] text-sm font-mono mb-3">
            <TrendingUp size={14} />
            <span>// selected projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Things I&apos;ve built</h2>
          <p className="text-[var(--muted)] max-w-xl">
            A mix of production systems, open-source tools, and side projects — each one solving a problem I cared about.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {featured.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        {others.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {others.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={featured.length + i} />
            ))}
          </div>
        )}

        {/* View more */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex justify-center"
        >
          <a
            href="https://github.com/slingadal127?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border)] text-sm text-[var(--muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all"
          >
            <Github size={14} />
            More projects
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
