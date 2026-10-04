import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const orderLabel = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: (index % 4) * 0.05 }}
      className={cn(
        "group relative flex h-full flex-col rounded-xl border p-6 transition-colors duration-200 sm:p-7",
        project.incomplete
          ? "border-dashed border-[var(--color-border)] bg-transparent"
          : "border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)]/50",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-xs text-[var(--color-text-faint)]">{orderLabel}</span>
        {(project.github || project.demo) && (
          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.title} on GitHub`}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] active:border-[var(--color-accent-2)] active:text-[var(--color-accent-2)]"
              >
                <Github size={14} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.title} live demo`}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] active:border-[var(--color-accent-2)] active:text-[var(--color-accent-2)]"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        )}
      </div>

      <h3 className="font-display mt-4 text-lg font-semibold text-[var(--color-text)] sm:text-xl">
        {project.title}
      </h3>
      {project.subtitle && (
        <p className="mt-1 text-sm text-[var(--color-accent)]">{project.subtitle}</p>
      )}

      <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
        {project.description}
      </p>

      {project.highlights && project.highlights.length > 0 && (
        <ul className="mt-4 grid grid-cols-1 gap-x-4 gap-y-1.5 sm:grid-cols-2">
          {project.highlights.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2 text-[13px] leading-snug text-[var(--color-text-muted)]"
            >
              <span
                className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]"
                aria-hidden="true"
              />
              {point}
            </li>
          ))}
        </ul>
      )}

      {project.technologies.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--color-border)] px-2.5 py-1 text-[11px] text-[var(--color-text-faint)]"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {project.incomplete && (
        <p className="mt-5 text-xs italic text-[var(--color-text-faint)]">
          Details coming soon
        </p>
      )}
    </motion.article>
  );
}
