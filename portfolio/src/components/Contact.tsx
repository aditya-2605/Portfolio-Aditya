import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { profile } from "@/data/profile";
import SectionHeading from "./SectionHeading";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialState: FormState = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // No backend/email service is wired up — this opens the user's own
    // mail client with the message pre-filled, instead of pretending to send it.
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "your site"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name || "Anonymous"} (${form.email || "no email given"})`,
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          title="Contact"
          description="Have a project, internship, or opportunity in mind? I'd like to hear about it."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-5"
          >
            <div>
              <p className="font-display text-lg font-semibold text-[var(--color-text)]">
                {profile.name}
              </p>
              <p className="mt-1 flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                <MapPin size={14} className="text-[var(--color-accent)]" aria-hidden="true" />
                {profile.location}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2.5 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
              >
                <Mail size={16} aria-hidden="true" />
                {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2.5 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
              >
                <Github size={16} aria-hidden="true" />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2.5 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
              >
                <Linkedin size={16} aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
            onSubmit={handleSubmit}
            className="space-y-4"
            aria-label="Contact form"
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-[var(--color-text-muted)]">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-accent-2)]"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm text-[var(--color-text-muted)]">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-accent-2)]"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm text-[var(--color-text-muted)]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="w-full resize-none rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-accent-2)]"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-black transition-all duration-150 hover:-translate-y-0.5 hover:bg-[var(--color-accent-strong)] active:translate-y-0 active:bg-[var(--color-accent-2)]"
            >
              Send message
              <Send size={15} aria-hidden="true" />
            </button>
            <p className="text-xs text-[var(--color-text-faint)]">
              Opens your email app with this message pre-filled — there's no backend on this
              site yet.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
