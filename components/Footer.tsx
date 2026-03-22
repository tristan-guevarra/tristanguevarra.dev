"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";
import { t } from "@/lib/translations";

const socialLinks = [
  { label: "Email", href: `mailto:${siteConfig.email}` },
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "X", href: siteConfig.social.twitter },
  { label: "Github", href: siteConfig.social.github },
];

export default function Footer() {
  const { language } = useLanguage();
  return (
    <footer id="contact" className="border-t border-ink/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-16 md:py-24">
        {/* CTA */}
        <div className="mb-16">
          <p className="text-[11px] font-mono text-accent tracking-[0.2em] uppercase mb-4">
            {t("footer.getInTouch", language)}
          </p>
          <h2 className="font-display text-heading italic text-balance max-w-lg">
            {t("footer.letsWork", language)}
          </h2>
          <p className="mt-4 text-sm text-ink/50 max-w-md leading-relaxed">
            I&apos;m always open to interesting conversations about engineering,
            product, and what&apos;s worth building next.
          </p>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          {/* Social links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink/40 hover:text-ink transition-colors duration-300 link-underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Status */}
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs text-ink/40 font-mono tracking-wide">
              {t("footer.openTo", language)}
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-ink/[0.04]">
          <p className="text-xs text-ink/25 font-mono">
            © {new Date().getFullYear()} {siteConfig.fullName}. Built with
            Next.js, Tailwind CSS & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
