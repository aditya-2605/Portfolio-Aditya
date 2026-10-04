import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MoonStar, SunMedium, X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const sectionIds = navigation.map((item) => item.href.replace("#", ""));

export default function Navbar({
  theme,
  onToggleTheme,
}: {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <nav
        aria-label="Primary"
        className="container-page flex h-16 items-center justify-between sm:h-20"
      >
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-tight text-[var(--color-text)]"
          aria-label="Aditya Patil — home"
        >
          Aditya<span className="text-[var(--color-accent)]">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-[var(--color-accent-2-strong)]"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-accent)]",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full border border-[var(--color-accent-2)]/40 bg-[var(--color-accent-2-soft)]"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-xs font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] active:border-[var(--color-accent-2)] active:text-[var(--color-accent-2)]"
          >
            {theme === "dark" ? <SunMedium size={15} /> : <MoonStar size={15} />}
            <span className="hidden sm:inline">{theme === "dark" ? "Light" : "Dark"}</span>
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text)] transition-colors active:border-[var(--color-accent-2)] active:text-[var(--color-accent-2)] md:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-bg)] md:hidden"
          >
            <ul className="container-page flex flex-col gap-1 py-4">
              {navigation.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = activeId === id;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "block rounded-lg px-3 py-3 text-base font-medium",
                        isActive
                          ? "border border-[var(--color-accent-2)]/40 bg-[var(--color-accent-2-soft)] text-[var(--color-accent-2-strong)]"
                          : "text-[var(--color-text-muted)]",
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
