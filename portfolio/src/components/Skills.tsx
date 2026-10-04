import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          title="Skills"
          description="Technologies I reach for across the stack — from programming fundamentals to AI/ML, cloud, and the tools that hold a project together."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, ease: "easeOut", delay: (index % 3) * 0.06 }}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors duration-200 hover:border-[var(--color-border-strong)]"
            >
              <h3 className="font-display text-sm font-semibold text-[var(--color-text)]">
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-3 py-1.5 text-xs text-[var(--color-text-muted)] transition-colors duration-150 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
