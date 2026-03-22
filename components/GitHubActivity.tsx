"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { t } from "@/lib/translations";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ContributionWeek {
  days: ContributionDay[];
}

const MONTHS: Record<string, string[]> = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  fr: ["Jan", "Fev", "Mar", "Avr", "Mai", "Juin", "Juil", "Aou", "Sep", "Oct", "Nov", "Dec"],
  es: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
};

const LEVEL_COLORS = [
  "bg-ink/[0.04] border border-ink/[0.06]",
  "bg-emerald-300/50",
  "bg-emerald-400/60",
  "bg-emerald-500/70",
  "bg-emerald-600/90",
];

export default function GitHubActivity({ username }: { username: string }) {
  const [weeks, setWeeks] = useState<ContributionWeek[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { language } = useLanguage();
  const months = MONTHS[language] || MONTHS.en;

  useEffect(() => {
    async function fetchContributions() {
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
        );
        const data = await res.json();

        if (data.contributions) {
          // data.contributions is a flat array of { date, count, level }
          const flat: ContributionDay[] = data.contributions;
          const totalCount = flat.reduce((sum: number, d: ContributionDay) => sum + d.count, 0);
          setTotal(totalCount);

          // Group into weeks (columns of 7)
          const grouped: ContributionWeek[] = [];
          let currentWeek: ContributionDay[] = [];

          // Pad the first week if it doesn't start on Sunday
          const firstDate = new Date(flat[0].date);
          const firstDay = firstDate.getDay();
          for (let i = 0; i < firstDay; i++) {
            currentWeek.push({ date: "", count: 0, level: -1 });
          }

          for (const day of flat) {
            currentWeek.push(day);
            if (currentWeek.length === 7) {
              grouped.push({ days: currentWeek });
              currentWeek = [];
            }
          }
          if (currentWeek.length > 0) {
            grouped.push({ days: currentWeek });
          }

          setWeeks(grouped);
        }
      } catch (e) {
        console.error("Failed to fetch GitHub contributions:", e);
      } finally {
        setLoading(false);
      }
    }

    fetchContributions();
  }, [username]);

  // Calculate month labels
  const monthLabels: { label: string; col: number }[] = [];
  if (weeks.length > 0) {
    let lastMonth = -1;
    weeks.forEach((week, i) => {
      const validDay = week.days.find((d) => d.date);
      if (validDay) {
        const month = new Date(validDay.date).getMonth();
        if (month !== lastMonth) {
          monthLabels.push({ label: months[month], col: i });
          lastMonth = month;
        }
      }
    });
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" className="text-ink/60">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
        </svg>
        <span className="text-[11px] font-mono text-ink/40 tracking-[0.2em] uppercase">
          {t("github.title", language)}
        </span>
      </div>

      {/* Graph container */}
      <div className="p-6 md:p-8 rounded-2xl border border-ink/[0.06] bg-surface">
        {loading ? (
          <div className="flex items-center justify-center h-32">
            <div className="w-5 h-5 border-2 border-ink/10 border-t-accent rounded-full animate-spin" />
          </div>
        ) : (
          <>

            {/* Contribution grid */}
            <div className="overflow-x-auto">
              {/* Month labels */}
              <div className="flex mb-2">
                {monthLabels.map(({ label, col }, i) => {
                  const nextCol = i < monthLabels.length - 1 ? monthLabels[i + 1].col : weeks.length;
                  const widthPercent = ((nextCol - col) / weeks.length) * 100;
                  return (
                    <span
                      key={`${label}-${col}`}
                      className="text-[11px] font-mono text-ink/35 tracking-wide"
                      style={{ width: `${widthPercent}%`, flexShrink: 0 }}
                    >
                      {label}
                    </span>
                  );
                })}
              </div>

              {/* Grid */}
              <div className="flex gap-[2px] w-full">
                {weeks.map((week, wi) => (
                  <div key={wi} className="flex-1 flex flex-col gap-[2px]">
                    {week.days.map((day, di) => (
                      <div
                        key={`${wi}-${di}`}
                        className={`aspect-square rounded-sm transition-colors duration-200 ${
                          day.level === -1
                            ? "bg-transparent"
                            : LEVEL_COLORS[day.level] || LEVEL_COLORS[0]
                        }`}
                        title={day.date ? `${day.count} contributions on ${day.date}` : ""}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-end justify-between mt-5">
              <span className="text-xs text-ink/40">
                {total.toLocaleString()} {t("github.contributions", language)}
              </span>
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-ink/30 mr-0.5">{t("github.less", language)}</span>
                  {LEVEL_COLORS.map((color, i) => (
                    <div
                      key={i}
                      className={`w-[11px] h-[11px] rounded-[2px] ${color}`}
                    />
                  ))}
                  <span className="text-[10px] text-ink/30 ml-0.5">{t("github.more", language)}</span>
                </div>
                <a
                  href={`https://github.com/${username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] text-accent hover:text-accent-hover transition-colors"
                >
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  {t("github.viewOn", language)}
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}
