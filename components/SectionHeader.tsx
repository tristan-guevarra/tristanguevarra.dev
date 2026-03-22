"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="mb-12 md:mb-16">
      <motion.span
        initial={{ opacity: 0, x: -12 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-[11px] font-mono text-accent tracking-[0.2em] uppercase block mb-4"
      >
        {label}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-heading italic text-balance"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-base text-ink/50 max-w-xl leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
