/**
 * Minimal classnames combiner — avoids pulling in clsx/tailwind-merge
 * as extra dependencies for something this small.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
