"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage, type Language } from "@/lib/language-context";
import { t } from "@/lib/translations";

const navItems = [
  { label: "Top", href: "#", icon: "home" },
  { label: "Experience", href: "#experience", icon: "experience" },
  { label: "Projects", href: "#projects", icon: "projects" },
  { label: "GitHub", href: "#github", icon: "github" },
  { label: "Stack", href: "#stack", icon: "stack" },
  { label: "Writing", href: "#writing", icon: "writing" },
];

function NavIcon({ icon, active }: { icon: string; active: boolean }) {
  const color = active ? "currentColor" : "currentColor";
  switch (icon) {
    case "home":
      return (
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
          <path
            d="M3 6.5L8 2.5L13 6.5V13H10V9.5H6V13H3V6.5Z"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "projects":
      return (
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
          <rect x="2.5" y="2.5" width="4.5" height="4.5" rx="1" stroke={color} strokeWidth="1.2" />
          <rect x="9" y="2.5" width="4.5" height="4.5" rx="1" stroke={color} strokeWidth="1.2" />
          <rect x="2.5" y="9" width="4.5" height="4.5" rx="1" stroke={color} strokeWidth="1.2" />
          <rect x="9" y="9" width="4.5" height="4.5" rx="1" stroke={color} strokeWidth="1.2" />
        </svg>
      );
    case "experience":
      return (
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
          <path
            d="M5.5 4V2.5H10.5V4M2.5 4H13.5V13.5H2.5V4Z"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "stack":
      return (
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
          <path
            d="M2 8L8 4L14 8M2 8L8 12L14 8M2 8L8 10L14 8"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "github":
      return (
        <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
        </svg>
      );
    case "writing":
      return (
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
          <path
            d="M3 3H13M3 6.5H10M3 10H13M3 13H8"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

const LANG_CYCLE: Language[] = ["en", "fr", "es"];
const LANG_LABELS: Record<Language, string> = { en: "EN", fr: "FR", es: "ES" };

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("#");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const cycleLang = () => {
    const idx = LANG_CYCLE.indexOf(language);
    setLanguage(LANG_CYCLE[(idx + 1) % LANG_CYCLE.length]);
  };

  const updateActiveSection = useCallback(() => {
    const threshold = window.innerHeight * 0.3;

    const sections = navItems
      .map((item) => {
        if (item.href === "#") return { href: item.href, top: 0 };
        const el = document.querySelector(item.href);
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        return { href: item.href, top: rect.top };
      })
      .filter(Boolean) as { href: string; top: number }[];

    let active = "#";
    for (const section of sections) {
      if (section.href === "#") continue;
      if (section.top <= threshold) {
        active = section.href;
      }
    }
    setActiveSection(active);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    updateActiveSection();
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [updateActiveSection]);

  return (
    <>
      {/* Desktop floating top nav */}
      <div className="fixed top-5 left-0 right-0 z-50 hidden md:flex justify-center pointer-events-none">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto"
        >
          <div className="flex items-center gap-1.5 p-2 rounded-2xl bg-white/90 backdrop-blur-xl border border-ink/10 shadow-xl shadow-black/[0.08]">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.label}
                href={item.href}
                className="group relative flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300"
              >
                {/* Active background */}
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-xl bg-ink"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                {/* Icon */}
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    isActive
                      ? "text-ink-inverse"
                      : "text-ink/30 group-hover:text-ink/70"
                  }`}
                >
                  <NavIcon icon={item.icon} active={isActive} />
                </span>

                {/* Tooltip */}
                <span className="absolute top-full mt-2 px-2.5 py-1 rounded-lg bg-ink text-ink-inverse text-[11px] font-mono tracking-wider uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 pointer-events-none">
                  {item.label}
                </span>
              </a>
            );
          })}

          {/* Divider */}
          <div className="h-6 w-[1px] bg-ink/[0.1] mx-1" />

          {/* Contact link */}
          <a
            href="#contact"
            className="group relative flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300"
          >
            <span className="text-ink/30 group-hover:text-accent transition-colors duration-300">
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path
                  d="M2 4L8 9L14 4M2 4V12H14V4H2Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="absolute top-full mt-2 px-2.5 py-1 rounded-lg bg-ink text-ink-inverse text-[11px] font-mono tracking-wider uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 pointer-events-none">
              Contact
            </span>
          </a>

          {/* Divider */}
          <div className="h-6 w-[1px] bg-ink/[0.1] mx-1" />

          {/* Language toggle */}
          <button
            onClick={cycleLang}
            className="group relative flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300 hover:bg-ink/[0.04]"
          >
            <span className="text-[11px] font-mono font-semibold text-ink/50 group-hover:text-ink transition-colors duration-300 tracking-wider">
              {LANG_LABELS[language]}
            </span>
            <span className="absolute top-full mt-2 px-2.5 py-1 rounded-lg bg-ink text-ink-inverse text-[11px] font-mono tracking-wider uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 pointer-events-none">
              {t("nav.language", language)}
            </span>
          </button>
        </div>
        </motion.nav>
      </div>

      {/* Mobile top bar */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-500 bg-surface/80 backdrop-blur-xl border-b border-ink/5"
      >
        <div className="px-6 h-14 flex items-center justify-between">
          <a
            href="#"
            className="font-display text-xl italic tracking-tight hover:text-accent transition-colors duration-300"
          >
            T.
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              className="w-5 h-[1.5px] bg-ink block origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-5 h-[1.5px] bg-ink block"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              className="w-5 h-[1.5px] bg-ink block origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-surface/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col items-start justify-center h-full px-8 gap-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-4xl italic text-ink hover:text-accent transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              {/* Mobile language toggle */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: navItems.length * 0.08 }}
                onClick={cycleLang}
                className="flex items-center gap-3 mt-4"
              >
                <span className="font-mono text-lg font-semibold text-ink/50">
                  {LANG_CYCLE.map((l) => (
                    <span key={l} className={l === language ? "text-accent" : "text-ink/30"}>
                      {LANG_LABELS[l]}{l !== "es" ? " / " : ""}
                    </span>
                  ))}
                </span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
