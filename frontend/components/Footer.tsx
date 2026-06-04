import Link from "next/link";
import { SITE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
        <p>Built with Next.js 15, Tailwind CSS v4 &amp; Motion.</p>
        <p>
          &copy; {new Date().getFullYear()} {SITE.name}
        </p>
      </div>
    </footer>
  );
}
