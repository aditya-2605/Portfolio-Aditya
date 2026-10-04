import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { profile } from "@/data/profile";
import { education } from "@/data/education";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading title="About" />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-5"
          >
            {profile.about.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[15px] leading-relaxed text-[var(--color-text-muted)] sm:text-base"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-text)]">
              <GraduationCap size={16} className="text-[var(--color-accent)]" aria-hidden="true" />
              Education
            </div>

            <ol className="mt-5 space-y-4">
              {education.map((edu) => (
                <li
                  key={edu.id}
                  className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
                >
                  <p className="text-sm font-semibold text-[var(--color-text)]">{edu.degree}</p>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{edu.institution}</p>
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--color-text-faint)]">
                    <span>{edu.period}</span>
                    <span className="rounded-full border border-[var(--color-border)] px-2.5 py-1 text-[var(--color-accent)]">
                      {edu.score}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          className="mt-12"
        >
          <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-text)]">
            <Award size={16} className="text-[var(--color-accent)]" aria-hidden="true" />
            Highlights
          </div>

          <ul className="mt-5 flex flex-wrap gap-2.5">
            {profile.highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-1.5 text-[13px] text-[var(--color-text-muted)]"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
