"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Project } from "@/lib/data";

const categoryColors: Record<Project["category"], string> = {
  platform: "bg-emerald-500/10 text-emerald-700",
  saas: "bg-accent/10 text-accent",
  tooling: "bg-amber-500/10 text-amber-700",
  finance: "bg-violet-500/10 text-violet-700",
};

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="project-card group relative p-6 md:p-8 rounded-2xl border border-ink/[0.06] bg-surface hover:bg-surface-secondary/60 cursor-default"
    >
      {/* Top row: year + category */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono text-ink/40 tracking-wider">
          {project.year}
        </span>
        <span
          className={`text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full ${
            categoryColors[project.category]
          }`}
        >
          {project.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display text-xl md:text-2xl italic mb-3 group-hover:text-accent transition-colors duration-300">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-ink/60 leading-relaxed mb-5">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-mono text-ink/40 tracking-wide px-2 py-0.5 rounded-md bg-ink/[0.03] border border-ink/[0.05]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Hover arrow */}
      <div className="project-arrow absolute top-6 right-6 opacity-0 transition-all duration-500">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="text-accent"
        >
          <path
            d="M4 12L12 4M12 4H6M12 4V10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </motion.article>
  );
}
