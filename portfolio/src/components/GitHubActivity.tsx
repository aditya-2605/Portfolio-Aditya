import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { profile } from "@/data/profile";
import {
  useGitHubContributions,
  type ContributionWeek,
} from "@/hooks/useGitHubContributions";
import type { ContributionDay } from "@/types";
import { cn } from "@/lib/utils";
import SectionHeading from "./SectionHeading";

// GitHub's own dark-theme contribution colors (levels 1-4); level 0 uses
// this site's own surface grey so empty cells blend into the card.
const LEVEL_COLORS = ["#0e4429", "#006d32", "#26a641", "#39d353"];
const WEEK_COUNT = 53;

function usernameFromUrl(url: string): string {
  return url.replace(/\/+$/, "").split("/").pop() ?? url;
}

const placeholderWeeks: ContributionWeek[] = Array.from({ length: WEEK_COUNT }, () => ({
  days: Array<ContributionDay | null>(7).fill(null),
  monthLabel: null,
}));

export default function GitHubActivity() {
  const username = usernameFromUrl(profile.github);
  const { status, weeks, total } = useGitHubContributions(username);

  const displayWeeks = status === "success" ? weeks : placeholderWeeks;

  return (
    <section id="github-activity" className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          title="GitHub Activity"
          description="A live look at how often I'm committing, pulled directly from my GitHub profile."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-7"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-text)]">
              <Github size={16} className="text-[var(--color-accent)]" aria-hidden="true" />
              GitHub Activity
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="font-mono text-xs text-[var(--color-text-faint)] transition-colors hover:text-[var(--color-accent)] active:text-[var(--color-accent-2)]"
            >
              @{username}
            </a>
          </div>

          {status === "error" ? (
            <div className="mt-6 flex flex-col items-start gap-3 py-2">
              <p className="text-sm text-[var(--color-text-muted)]">
                Live activity couldn't be loaded right now.
              </p>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border-strong)] px-4 py-2.5 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] active:border-[var(--color-accent-2)] active:text-[var(--color-accent-2)]"
              >
                View on GitHub
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>
          ) : (
            <>
              <div className="mt-6 overflow-x-auto pb-1">
                <div className="inline-flex flex-col gap-1">
                  <div className="flex gap-[3px]">
                    {displayWeeks.map((week, i) => (
                      <span
                        key={i}
                        className="block h-3 w-[11px] shrink-0 text-left text-[10px] leading-3 text-[var(--color-text-faint)]"
                      >
                        {week.monthLabel ?? ""}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-[3px]">
                    {displayWeeks.map((week, wi) => (
                      <div key={wi} className="flex w-[11px] shrink-0 flex-col gap-[3px]">
                        {week.days.map((day, di) => (
                          <span
                            key={di}
                            title={
                              day
                                ? `${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`
                                : undefined
                            }
                            className={cn(
                              "h-[11px] w-[11px] rounded-[2px]",
                              status === "loading" && "animate-pulse",
                            )}
                            style={{
                              backgroundColor:
                                status !== "success"
                                  ? "var(--color-surface-elevated)"
                                  : day === null
                                    ? "transparent"
                                    : day.level === 0
                                      ? "var(--color-surface-elevated)"
                                      : LEVEL_COLORS[day.level - 1],
                            }}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs text-[var(--color-text-faint)]">
                <span>
                  {status === "success"
                    ? `${total.toLocaleString()} contributions in the last year`
                    : "Loading contributions…"}
                </span>
                <div className="flex items-center gap-1.5">
                  <span>Less</span>
                  <span
                    className="h-[11px] w-[11px] rounded-[2px]"
                    style={{ backgroundColor: "var(--color-surface-elevated)" }}
                    aria-hidden="true"
                  />
                  {LEVEL_COLORS.map((color) => (
                    <span
                      key={color}
                      className="h-[11px] w-[11px] rounded-[2px]"
                      style={{ backgroundColor: color }}
                      aria-hidden="true"
                    />
                  ))}
                  <span>More</span>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
