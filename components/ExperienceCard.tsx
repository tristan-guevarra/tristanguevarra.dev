"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import type { Experience } from "@/lib/data";

export default function ExperienceCard({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.a
      ref={ref}
      href={experience.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative flex items-center gap-14 py-8 border-b border-ink/[0.06] last:border-0 cursor-pointer max-w-7xl mx-auto"
    >
      {/* Logo */}
      <div className="w-20 h-20 rounded-2xl overflow-hidden border border-ink/[0.08] bg-white shrink-0 shadow-sm group-hover:shadow-md group-hover:border-ink/[0.14] transition-all duration-300">
        <Image
          src={experience.logo}
          alt={`${experience.company} logo`}
          width={80}
          height={80}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="font-display text-xl md:text-2xl italic text-ink group-hover:text-accent transition-colors duration-300 leading-snug">
          {experience.role}
        </h3>
        <p className="text-sm text-ink/50 mt-1.5">
          {experience.company}
        </p>
        {experience.rating && (
          <p className="text-xs font-mono text-accent/60 tracking-wider uppercase mt-1.5">
            {experience.rating}
          </p>
        )}
        <span className="text-xs font-mono text-ink/30 tracking-wider uppercase mt-1.5 block">
          {experience.period}
        </span>
      </div>

      {/* Hover arrow */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
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
    </motion.a>
  );
}
