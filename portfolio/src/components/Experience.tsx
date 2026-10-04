import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          title="Experience"
          description="Internships and hands-on work where I've applied what I'm learning to real projects."
        />

        <ol className="mt-14 space-y-10">
          {experience.map((role, index) => (
            <motion.li
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
              className="relative flex gap-5 pl-1 sm:gap-8"
            >
              <div className="flex flex-col items-center pt-1.5">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-accent-soft)]" />
                {index !== experience.length - 1 && (
                  <span
                    className="mt-2 w-px flex-1 bg-[var(--color-border)]"
                    aria-hidden="true"
                  />
                )}
              </div>

              <div className="flex-1 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 pb-7">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-lg font-semibold text-[var(--color-text)]">
                    {role.role}
                  </h3>
                  <span className="font-mono text-xs text-[var(--color-text-faint)]">
                    {role.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-[var(--color-accent)]">
                  {role.company}
                  {role.location ? (
                    <span className="text-[var(--color-text-faint)]"> — {role.location}</span>
                  ) : null}
                </p>

                <ul className="mt-4 space-y-2">
                  {role.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-sm leading-relaxed text-[var(--color-text-muted)]"
                    >
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-text-faint)]"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
