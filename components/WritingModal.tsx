"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { WritingPost } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";
import { t } from "@/lib/translations";

export default function WritingModal({
  post,
  onClose,
}: {
  post: WritingPost | null;
  onClose: () => void;
}) {
  const { language } = useLanguage();
  const englishOnlyNotice = t("writing.englishOnly", language);
  useEffect(() => {
    if (post) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [post]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {post && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-4 md:inset-x-auto md:inset-y-8 md:left-1/2 md:-translate-x-1/2 md:max-w-[680px] md:w-full z-50 bg-surface rounded-2xl border border-ink/[0.08] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-ink/[0.06] shrink-0">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono text-accent/70 tracking-widest uppercase px-2 py-0.5 rounded bg-accent/[0.06]">
                  {post.tag}
                </span>
                <span className="text-xs font-mono text-ink/30">
                  {post.date}
                </span>
              </div>
              <button
                onClick={onClose}
                className="group flex items-center justify-center w-8 h-8 rounded-lg hover:bg-ink/[0.05] transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-ink/40 group-hover:text-ink transition-colors"
                >
                  <path
                    d="M4 4L12 12M12 4L4 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-6 md:px-8 py-8">
              <h1 className="font-display text-2xl md:text-3xl italic leading-tight mb-8">
                {post.title}
              </h1>

              {englishOnlyNotice && (
                <p className="text-sm text-accent/70 italic mb-6 px-4 py-2.5 rounded-lg bg-accent/[0.05] border border-accent/[0.1]">
                  {englishOnlyNotice}
                </p>
              )}

              <div className="space-y-5">
                {post.content.map((block, i) => {
                  if (block.startsWith("## ")) {
                    return (
                      <h2
                        key={i}
                        className="font-display text-lg italic text-ink mt-8 mb-2"
                      >
                        {block.replace("## ", "")}
                      </h2>
                    );
                  }
                  return (
                    <p
                      key={i}
                      className="text-[15px] text-ink/65 leading-[1.8]"
                    >
                      {block}
                    </p>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
