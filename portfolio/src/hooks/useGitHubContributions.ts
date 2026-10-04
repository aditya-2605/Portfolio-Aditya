import { useEffect, useState } from "react";
import type { ContributionDay } from "@/types";

export type ContributionsStatus = "loading" | "success" | "error";

export interface ContributionWeek {
  days: Array<ContributionDay | null>;
  monthLabel: string | null;
}

interface UseGitHubContributionsResult {
  status: ContributionsStatus;
  weeks: ContributionWeek[];
  total: number;
}

interface ApiResponse {
  total?: Record<string, number>;
  contributions?: ContributionDay[];
  error?: string;
}

const MONTH_LABELS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/**
 * Fetches a GitHub user's public contribution history (no auth/token needed)
 * from Jonathan Gruber's github-contributions-api, which scrapes the same
 * data GitHub shows on a profile page. Shapes it into Sunday-start weekly
 * columns so it can be rendered as a GitHub-style heatmap.
 */
export function useGitHubContributions(username: string): UseGitHubContributionsResult {
  const [status, setStatus] = useState<ContributionsStatus>("loading");
  const [weeks, setWeeks] = useState<ContributionWeek[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");

    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then((res) => {
        if (!res.ok) throw new Error("GitHub contributions request failed");
        return res.json() as Promise<ApiResponse>;
      })
      .then((data) => {
        if (cancelled) return;
        if (!data.contributions || data.contributions.length === 0 || data.error) {
          throw new Error(data.error ?? "No contribution data returned");
        }

        const days = data.contributions;
        const totalCount = data.total
          ? Object.values(data.total).reduce((sum, n) => sum + n, 0)
          : days.reduce((sum, d) => sum + d.count, 0);

        const firstDate = new Date(`${days[0].date}T00:00:00`);
        const startPadding = firstDate.getDay();

        const padded: Array<ContributionDay | null> = [
          ...Array<null>(startPadding).fill(null),
          ...days,
        ];
        while (padded.length % 7 !== 0) {
          padded.push(null);
        }

        const builtWeeks: ContributionWeek[] = [];
        let lastLabeledMonth = -1;

        for (let i = 0; i < padded.length; i += 7) {
          const weekDays = padded.slice(i, i + 7);
          const firstDayOfWeek = weekDays.find(
            (d): d is ContributionDay => d !== null,
          );

          let monthLabel: string | null = null;
          if (firstDayOfWeek) {
            const date = new Date(`${firstDayOfWeek.date}T00:00:00`);
            if (date.getDate() <= 7 && date.getMonth() !== lastLabeledMonth) {
              monthLabel = MONTH_LABELS[date.getMonth()];
              lastLabeledMonth = date.getMonth();
            }
          }

          builtWeeks.push({ days: weekDays, monthLabel });
        }

        setWeeks(builtWeeks);
        setTotal(totalCount);
        setStatus("success");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, [username]);

  return { status, weeks, total };
}
