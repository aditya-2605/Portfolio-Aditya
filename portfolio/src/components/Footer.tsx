import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-10">
      <div className="container-page flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-sm font-semibold text-[var(--color-text)]">
            {profile.name}
          </p>
          <p className="mt-1 max-w-md text-xs text-[var(--color-text-faint)]">
            {profile.headline}
          </p>
          <p className="mt-3 text-xs text-[var(--color-text-faint)]">
            © 2026 {profile.name}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Aditya Patil on GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] active:border-[var(--color-accent-2)] active:text-[var(--color-accent-2)]"
          >
            <Github size={15} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Aditya Patil on LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] active:border-[var(--color-accent-2)] active:text-[var(--color-accent-2)]"
          >
            <Linkedin size={15} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email Aditya Patil"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] active:border-[var(--color-accent-2)] active:text-[var(--color-accent-2)]"
          >
            <Mail size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
