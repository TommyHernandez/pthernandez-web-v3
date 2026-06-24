'use client';
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
      {/* Organic blob decorations */}
      <div
        className="absolute top-[-80px] right-[-80px] w-[500px] h-[500px] opacity-[0.06]"
        style={{ background: "#5B8A7A", borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
      />
      <div
        className="absolute bottom-[-60px] left-[-60px] w-[360px] h-[360px] opacity-[0.05]"
        style={{ background: "#C2857A", borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" }}
      />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Availability pill */}
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#D1E8E0] text-[#2D5C4F] text-xs font-semibold tracking-wide rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5B8A7A] inline-block" />
            Available for new opportunities
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#1C1917] leading-[1.05] mb-8">
          Senior Web
          <br />
          <span className="text-[#5B8A7A]">Developer.</span>
        </h1>

        <p className="text-xl text-[#78716C] leading-relaxed max-w-2xl mb-12 font-light">
          10+ years building scalable web applications. Specialized in React and the modern
          JavaScript ecosystem — from startup products to enterprise platforms used by millions.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-14">
          <button
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1C1917] text-[#F7F4EE] rounded-xl text-sm font-semibold hover:bg-[#2D2923] transition-colors"
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-[#1C1917] border border-[rgba(28,25,23,0.2)] rounded-xl text-sm font-semibold hover:bg-[#EDE9E0] transition-colors"
          >
            View My Work
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Social + divider */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-white border border-[rgba(28,25,23,0.08)] text-[#44403C] hover:text-[#1C1917] hover:border-[rgba(28,25,23,0.18)] transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-white border border-[rgba(28,25,23,0.08)] text-[#44403C] hover:text-[#1C1917] hover:border-[rgba(28,25,23,0.18)] transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <div className="h-4 w-px bg-[rgba(28,25,23,0.12)]" />
          <span className="text-sm text-[#78716C] font-light">React · TypeScript · Node.js</span>
        </div>
      </div>
    </section>
  );
}
