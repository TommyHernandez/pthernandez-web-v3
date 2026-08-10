import { LuHeart as Heart } from "react-icons/lu";

export function Footer() {
  return (
    <footer className="bg-background border-t border-ink/10 px-6 py-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-subtle font-light">
          © {new Date().getFullYear()} Pedro T. Hernandez. Built with React &
          Tailwind CSS.
        </p>
        <p className="inline-flex items-center gap-1.5 text-sm text-subtle font-light">
          Made with
          <Heart
            className="w-4 h-4 text-teal fill-teal"
            aria-label="love"
          />
          in Jaén
        </p>
      </div>
    </footer>
  );
}
