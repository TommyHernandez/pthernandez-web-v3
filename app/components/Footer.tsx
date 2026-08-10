"use client";

export function Footer() {
  return (
    <div className="mt-16 pt-8 border-t border-ink/8 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-subtle font-light">
        © {new Date().getFullYear()} Web Developer Portfolio. Built with React &
        Tailwind CSS.
      </p>
      <p className="text-xs text-placeholder font-light">
        Crafted with care — and a lot of TypeScript.
      </p>
    </div>
  );
}
