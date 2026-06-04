"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { PenLine, ArrowRight, Clock, Tag } from "lucide-react";
import type { BlogPost } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

function PostCard({ post, index }: { post: BlogPost; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group block p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--color-accent)]/40 transition-all duration-300"
      >
        <div className="flex items-center gap-3 text-xs text-[var(--muted)] mb-3">
          <span className="flex items-center gap-1">
            <Clock size={11} />
            {post.readingTime}
          </span>
          <span>{formatDate(post.date)}</span>
        </div>

        <h3 className="font-semibold mb-2 group-hover:text-[var(--color-accent)] transition-colors leading-snug">
          {post.title}
        </h3>
        <p className="text-sm text-[var(--muted)] line-clamp-2 mb-3 leading-relaxed">{post.excerpt}</p>

        <div className="flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border border-[var(--border)] text-[var(--muted)]"
            >
              <Tag size={10} />
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.article>
  );
}

export default function BlogPreview({ posts }: { posts: BlogPost[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="blog" className="py-24 px-4 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <div className="flex items-center gap-2 text-[var(--color-accent)] text-sm font-mono mb-3">
              <PenLine size={14} />
              <span>// writing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Thinking out loud</h2>
            <p className="text-[var(--muted)]">Technical deep-dives and lessons from the trenches.</p>
          </div>
          <Link
            href="/blog"
            className="hidden sm:flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--color-accent)] transition-colors shrink-0"
          >
            All posts <ArrowRight size={14} />
          </Link>
        </motion.div>

        {posts.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-[var(--muted)] text-sm"
          >
            Posts coming soon — check back shortly.
          </motion.p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {posts.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-6 sm:hidden"
        >
          <Link href="/blog" className="flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--color-accent)] transition-colors">
            All posts <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
