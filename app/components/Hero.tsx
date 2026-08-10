"use client";
import {
  LuGithub as Github,
  LuLinkedin as Linkedin,
  LuMail as Mail,
  LuArrowRight as ArrowRight,
} from "react-icons/lu";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-background">
      <div
        className="absolute -top-20 right-[-80px] w-[500px] h-[500px] opacity-[0.06]"
        style={{
          background: "var(--color-teal)",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        }}
      />
      <div
        className="absolute -bottom-15 left-[-60px] w-[360px] h-[360px] opacity-[0.05]"
        style={{
          background: "var(--color-terracotta)",
          borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
        }}
      />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="mb-10">
          <span className="availability-status text-sm font-medium text-teal-strong tracking-wide">
            Available for new opportunities
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-ink leading-[1.05] mb-8">
          Senior Web Developer <span className="text-ink/60">and</span>
          <br />
          <span className="text-teal">Lead Frontend Engineer.</span>
        </h1>

        <p className="text-xl text-subtle leading-relaxed max-w-2xl mb-12 font-light">
          With over a decade of experience building scalable web applications, I
          specialize in React and the modern JavaScript ecosystem. I&apos;m
          Pedro Tomás Hernández. I transform ideas into robust, user-centered
          interfaces. What began as freelance curiosity has led me to lead the
          frontend strategy and technical ecosystem at IriusRisk.
        </p>

        <div className="flex flex-wrap gap-4 mb-14">
          <button
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-ink text-background rounded-xl text-sm font-semibold hover:bg-ink-hover transition-colors cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-ink border border-ink/20 rounded-xl text-sm font-semibold hover:bg-surface-muted transition-colors cursor-pointer"
          >
            View My Experience
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Social + divider */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-white border border-ink/8 text-muted hover:text-ink hover:border-ink/18 transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-white border border-ink/8 text-muted hover:text-ink hover:border-ink/18 transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <div className="h-4 w-px bg-ink/12" />
          <span className="text-sm text-subtle font-light">
            React · TypeScript · Node.js
          </span>
        </div>
      </div>
    </section>
  );
}
