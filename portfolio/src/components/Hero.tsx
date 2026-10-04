import { useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { useResumeAvailability } from "@/hooks/useResumeAvailability";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const resumeStatus = useResumeAvailability(profile.resumePath);
  const [portraitLoaded, setPortraitLoaded] = useState(true);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] scroll-mt-20 items-center overflow-hidden pt-24 pb-16 sm:pt-20"
    >
      <div className="glow-accent bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      {!prefersReducedMotion && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(249,115,22,0.16) 0%, rgba(249,115,22,0) 70%)",
          }}
          animate={{ x: [0, 24, 0], y: [0, 16, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <div className="container-page relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            <motion.div
              variants={item}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/60 px-3.5 py-1.5 text-xs text-[var(--color-text-muted)]"
            >
              <MapPin size={13} className="text-[var(--color-accent)]" aria-hidden="true" />
              {profile.location}
            </motion.div>

            <motion.h1
              variants={item}
              className="text-balance text-4xl font-semibold leading-[1.08] text-[var(--color-text)] sm:text-5xl lg:text-6xl"
            >
              {profile.name}
            </motion.h1>

            <motion.ul variants={item} className="mt-6 flex flex-wrap gap-2" aria-label="Roles">
              {profile.roles.map((role) => (
                <li
                  key={role}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-1.5 text-[13px] font-medium text-[var(--color-text-muted)]"
                >
                  {role}
                </li>
              ))}
            </motion.ul>

            <motion.p
              variants={item}
              className="mt-6 max-w-lg text-[15px] leading-relaxed text-[var(--color-text-muted)]"
            >
              I turn ideas into working software — from full-stack web apps to
              AI/ML and cloud-backed systems — and use every build to get
              sharper at engineering the whole stack.
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-black transition-all duration-150 hover:-translate-y-0.5 hover:bg-[var(--color-accent-strong)] active:translate-y-0 active:bg-[var(--color-accent-2)]"
              >
                View my work
                <ArrowDown size={15} aria-hidden="true" />
              </a>

              {resumeStatus === "available" ? (
                <a
                  href={profile.resumePath}
                  download={profile.resumeFileName}
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border-strong)] px-5 py-3 text-sm font-semibold text-[var(--color-text)] transition-colors duration-150 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] active:border-[var(--color-accent-2)] active:text-[var(--color-accent-2)]"
                >
                  <Download size={15} aria-hidden="true" />
                  Download resume
                </a>
              ) : (
                <span
                  className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-[var(--color-border)] px-5 py-3 text-sm font-semibold text-[var(--color-text-faint)]"
                  title="Resume file not added yet"
                  aria-disabled="true"
                >
                  <Download size={15} aria-hidden="true" />
                  Resume coming soon
                </span>
              )}
            </motion.div>

            <motion.div variants={item} className="mt-8 flex items-center gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Aditya Patil on GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] active:border-[var(--color-accent-2)] active:text-[var(--color-accent-2)]"
              >
                <Github size={17} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Aditya Patil on LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] active:border-[var(--color-accent-2)] active:text-[var(--color-accent-2)]"
              >
                <Linkedin size={17} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email Aditya Patil"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] active:border-[var(--color-accent-2)] active:text-[var(--color-accent-2)]"
              >
                <Mail size={17} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={item}
            className="relative mx-auto w-full max-w-[520px] lg:justify-self-end"
          >
            <div className="relative overflow-hidden rounded-[30px] border border-[var(--color-border)] bg-[#050505] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.18),transparent_50%)]" />
              <div
                className="relative aspect-[4/5] bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: portraitLoaded
                    ? "linear-gradient(180deg, rgba(5,5,5,0.08), rgba(5,5,5,0.72)), url('/profile-photo.jpg')"
                    : "linear-gradient(180deg, rgba(5,5,5,0.08), rgba(5,5,5,0.72)), url('/profile-photo.svg')",
                }}
                aria-label="Portrait of Aditya Patil"
              >
                <img
                  src="/profile-photo.jpg"
                  alt="Aditya Patil"
                  className="h-full w-full object-cover opacity-0"
                  onError={() => setPortraitLoaded(false)}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
