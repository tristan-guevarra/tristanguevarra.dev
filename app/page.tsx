"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import SignatureVisual from "@/components/SignatureVisual";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import WritingModal from "@/components/WritingModal";
import GitHubActivity from "@/components/GitHubActivity";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";
import type { WritingPost } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";
import { t } from "@/lib/translations";
import { getProjects, getExperiences, getWriting } from "@/lib/data-translations";

export default function Home() {
  const [activePost, setActivePost] = useState<WritingPost | null>(null);
  const { language } = useLanguage();
  const projects = getProjects(language);
  const experiences = getExperiences(language);
  const writing = getWriting(language);

  return (
    <>
      <Navigation />

      <main className="relative">
        {/* ─── HERO ─── */}
        <section className="min-h-[125dvh] flex flex-col justify-center max-w-[1200px] mx-auto px-6 md:px-8 pt-24 pb-12">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-50"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-xs font-mono text-ink/40 tracking-wider uppercase">
              {siteConfig.location} · {siteConfig.university}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-hero italic"
          >
            {siteConfig.name}
          </motion.h1>

          {/* Signature visual (animated bars like Marcelo's but with canvas) */}
          <SignatureVisual />

          {/* Bio blurb */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-base md:text-lg text-ink/55 max-w-xl leading-relaxed"
          >
            {t("hero.bio", language)}
          </motion.p>

          {/* Quick links row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-ink-inverse text-sm font-medium hover:bg-accent transition-colors duration-300"
            >
              {t("hero.viewProjects", language)}
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform group-hover:translate-y-0.5"
              >
                <path
                  d="M8 3V13M8 13L4 9M8 13L12 9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-ink/10 text-sm font-medium text-ink/70 hover:border-ink/30 hover:text-ink transition-all duration-300"
            >
              {t("hero.getInTouch", language)}
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-[1px] h-8 bg-gradient-to-b from-transparent via-ink/20 to-transparent"
            />
          </motion.div>
        </section>

        {/* ─── EXPERIENCE ─── */}
        <section
          id="experience"
          className="max-w-[1200px] mx-auto px-6 md:px-8 py-12 md:py-20"
        >
          <SectionHeader
            label={t("section.experience.label", language)}
            title={t("section.experience.title", language)}
            description={t("section.experience.desc", language)}
          />

          <div className="divide-y divide-ink/[0.06]">
            {experiences.map((exp, i) => (
              <ExperienceCard
                key={exp.company}
                experience={exp}
                index={i}
              />
            ))}
          </div>
        </section>

        {/* ─── PROJECTS ─── */}
        <section
          id="projects"
          className="max-w-[1200px] mx-auto px-6 md:px-8 py-12 md:py-20"
        >
          <SectionHeader
            label={t("section.projects.label", language)}
            title={t("section.projects.title", language)}
            description={t("section.projects.desc", language)}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </section>

        {/* ─── GITHUB ACTIVITY ─── */}
        <section id="github" className="max-w-[1200px] mx-auto px-6 md:px-8 py-12 md:py-16">
          <GitHubActivity username="tristan-guevarra" />
        </section>

        {/* ─── TECH STACK ─── */}
        <section id="stack" className="max-w-[1200px] mx-auto px-6 md:px-8 py-12 md:py-16">
          <SectionHeader
            label={t("section.stack.label", language)}
            title={t("section.stack.title", language)}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: t("stack.languages", language), tools: ["C#", "Java", "Python", "C/C++", "JavaScript/TypeScript", "SQL", "HTML/CSS", "Assembly", "Verilog"] },
              { label: t("stack.frameworks", language), tools: [".NET/ASP.NET", "Spring Boot", "React/Node.js", "Express", "Pandas", "NumPy", "SKLearn", "PyTorch"] },
              { label: t("stack.tools", language), tools: ["Git", "Docker", "Kubernetes", "Postman", "GitHub Actions", "Power Automate", "Qt Creator", "Android Studio", "Figma", "UNIX"] },
              { label: t("stack.interests", language), tools: [t("interest.teaching", language), t("interest.athlete", language), t("interest.billiards", language), t("interest.finance", language), t("interest.startups", language)] },
            ].map((group, i) => (
              <StackCard key={group.label} group={group} index={i} />
            ))}
          </div>
        </section>

        {/* ─── WRITING ─── */}
        <section
          id="writing"
          className="max-w-[1200px] mx-auto px-6 md:px-8 py-12 md:py-20"
        >
          <SectionHeader
            label={t("section.writing.label", language)}
            title={t("section.writing.title", language)}
            description={t("section.writing.desc", language)}
          />

          <div className="space-y-1">
            {writing.map((post, i) => (
              <WritingRow key={post.title} post={post} index={i} onOpen={setActivePost} />
            ))}
          </div>
        </section>
      </main>

      <Footer />

      <WritingModal post={activePost} onClose={() => setActivePost(null)} />
    </>
  );
}

/* ─── Sub-components ─── */
import { useRef } from "react";
import { useInView } from "framer-motion";

function StackCard({ group, index }: { group: { label: string; tools: string[] }; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -4 }}
      className="group relative p-5 rounded-2xl border border-ink/[0.06] bg-surface hover:bg-surface-secondary/60 hover:border-ink/[0.12] transition-all duration-500 cursor-default"
    >
      <span className="text-[11px] font-mono text-accent tracking-[0.2em] uppercase block mb-4">
        {group.label}
      </span>
      <ul className="space-y-2">
        {group.tools.map((tool, i) => (
          <motion.li
            key={tool}
            initial={{ opacity: 0, x: -8 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1 + i * 0.03,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-sm text-ink/55 font-light group-hover:text-ink/70 transition-colors duration-300"
          >
            {tool}
          </motion.li>
        ))}
      </ul>
      {/* Subtle glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-accent/[0.03] to-transparent" />
    </motion.div>
  );
}

function WritingRow({ post, index, onOpen }: { post: WritingPost; index: number; onOpen: (post: WritingPost) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      onClick={() => onOpen(post)}
      className="group grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 py-7 border-b border-ink/[0.06] last:border-0 cursor-pointer hover:pl-2 transition-all duration-500"
    >
      <div>
        <div className="flex items-center gap-3 mb-1.5">
          <span className="text-[10px] font-mono text-accent/70 tracking-widest uppercase px-2 py-0.5 rounded bg-accent/[0.06]">
            {post.tag}
          </span>
          <span className="text-xs font-mono text-ink/30">{post.date}</span>
        </div>
        <h3 className="font-display text-lg italic group-hover:text-accent transition-colors duration-300">
          {post.title}
        </h3>
        <p className="text-sm text-ink/45 mt-1 leading-relaxed max-w-lg">
          {post.description}
        </p>
      </div>
      <div className="hidden md:flex items-center">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="text-ink/20 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300"
        >
          <path
            d="M3 8H13M13 8L9 4M13 8L9 12"
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
