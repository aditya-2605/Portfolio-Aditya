import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={isCenter ? "text-center" : "text-left"}
    >
      <h2 className="text-3xl font-semibold text-[var(--color-text)] sm:text-4xl text-balance">
        {title}
      </h2>
      <span
        className={`mt-4 block h-[3px] w-12 rounded-full bg-[var(--color-accent)] ${
          isCenter ? "mx-auto" : ""
        }`}
      />
      {description && (
        <p
          className={`mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--color-text-muted)] ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
