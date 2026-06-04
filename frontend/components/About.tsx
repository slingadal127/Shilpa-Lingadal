"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { User, Briefcase, GraduationCap } from "lucide-react";
import { SKILLS, EXPERIENCE, EDUCATION } from "@/lib/data";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 px-6 border-t border-[var(--border)]">
      <div className="max-w-3xl mx-auto" ref={ref}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-[var(--muted)] text-xs font-mono uppercase tracking-widest mb-10"
        >
          <User size={12} />
          About
        </motion.div>

        {/* Bold statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-2xl sm:text-3xl font-semibold leading-snug text-[var(--fg)] mb-6"
        >
          I build systems that scale, untangle the hard performance problems,
          and ship solutions that reach real users.
        </motion.p>

        {/* Philosophy */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="text-base text-[var(--fg)] mb-8"
        >
          Wiring:{" "}
          <strong>Break · Patch · Proof · Repeat</strong>
        </motion.p>

        {/* Current status */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="text-base text-[var(--muted)] mb-5"
        >
          Currently completing my MS in Software Engineering Systems at Northeastern
          (Dec 2026), with industry experience at Amazon Robotics and Infor —
          shipping features for enterprise logistics platforms and designing
          multi-agent simulation engines at robotics scale.
        </motion.p>

        {/* Looking for */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="text-base text-[var(--muted)] mb-5"
        >
          Looking for SWE, Backend, or ML Infrastructure roles — teams building
          systems that actually need to be fast and reliable.
        </motion.p>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.34 }}
          className="text-sm text-[var(--muted)]"
        >
          Boston → SF, NYC, Seattle (open to relocation)
        </motion.p>

        {/* Divider */}
        <motion.hr
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.45 }}
          className="border-[var(--border)] my-14"
        />

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.48 }}
        >
          <div className="flex items-center gap-2 text-[var(--muted)] text-xs font-mono uppercase tracking-widest mb-7">
            <span>// skills</span>
          </div>
          <div className="space-y-5">
            {SKILLS.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + gi * 0.06 }}
                className="flex flex-col sm:flex-row sm:items-start gap-2"
              >
                <span className="text-xs font-mono text-[var(--muted)] w-36 shrink-0 pt-1">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-md border border-[var(--border)] bg-[var(--card)] text-[var(--fg)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <motion.hr
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="border-[var(--border)] my-14"
        />

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.72 }}
        >
          <div id="experience" className="flex items-center gap-2 text-[var(--muted)] text-xs font-mono uppercase tracking-widest mb-8 scroll-mt-20">
            <Briefcase size={12} />
            Experience
          </div>

          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-[var(--border)]" />
            <div className="space-y-10">
              {EXPERIENCE.map((exp, i) => (
                <motion.div
                  key={`${exp.company}-${exp.role}`}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.78 + i * 0.1 }}
                  className="relative pl-10"
                >
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-[var(--color-accent)] bg-[var(--bg)] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                  </div>
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-1">
                    <h3 className="font-semibold">{exp.company}</h3>
                    <span className="text-sm text-[var(--color-accent)]">{exp.role}</span>
                    <span className="text-xs text-[var(--muted)] font-mono sm:ml-auto">{exp.period}</span>
                  </div>
                  <ul className="mb-2 space-y-1.5">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-2 text-sm text-[var(--muted)] leading-relaxed">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--muted)] shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((s) => (
                      <span key={s} className="text-xs font-mono px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--card)] text-[var(--muted)]">
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.hr
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="border-[var(--border)] my-14"
        />

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.02 }}
        >
          <div className="flex items-center gap-2 text-[var(--muted)] text-xs font-mono uppercase tracking-widest mb-8">
            <GraduationCap size={12} />
            Education
          </div>

          <div className="space-y-8">
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.06 + i * 0.1 }}
              >
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-0.5">
                  <h3 className="font-semibold">{edu.school}</h3>
                  {edu.gpa && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                      GPA {edu.gpa}
                    </span>
                  )}
                  <span className="text-xs text-[var(--muted)] font-mono sm:ml-auto">{edu.period}</span>
                </div>
                <p className="text-sm text-[var(--muted)] mb-2">{edu.degree} · {edu.location}</p>
                {edu.courses.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {edu.courses.map((c) => (
                      <span key={c} className="text-xs px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--card)] text-[var(--muted)]">
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
