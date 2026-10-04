import { useEffect, useState } from "react";

export type ResumeStatus = "checking" | "available" | "unavailable";

/**
 * The resume PDF isn't guaranteed to exist in every deployment of this
 * project (see RESUME_INSTRUCTIONS.md at the project root). Rather than link to a
 * file that 404s, check for it once and let the UI degrade gracefully.
 */
export function useResumeAvailability(path: string): ResumeStatus {
  const [status, setStatus] = useState<ResumeStatus>("checking");

  useEffect(() => {
    let cancelled = false;

    fetch(path, { method: "HEAD" })
      .then((res) => {
        if (!cancelled) setStatus(res.ok ? "available" : "unavailable");
      })
      .catch(() => {
        if (!cancelled) setStatus("unavailable");
      });

    return () => {
      cancelled = true;
    };
  }, [path]);

  return status;
}
