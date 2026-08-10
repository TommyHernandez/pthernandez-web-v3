"use client";
import {
  LuMail as Mail,
  LuMapPin as MapPin,
  LuSend as Send,
  LuGithub as Github,
  LuLinkedin as Linkedin,
} from "react-icons/lu";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-28 px-6 bg-white relative overflow-hidden"
    >
      {/* Organic deco */}
      <div
        className="absolute -top-15 -right-15 w-80 h-80 opacity-[0.05]"
        style={{
          background: "var(--color-teal)",
          borderRadius: "60% 40% 30% 70% / 50% 60% 40% 50%",
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        <p className="text-xs font-semibold tracking-widest uppercase text-subtle mb-5">
          Get in Touch
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="text-5xl font-bold tracking-tight text-ink leading-tight">
            Let's work together.
          </h2>
          <p className="text-subtle font-light max-w-xs md:text-right">
            Open to new projects, collaborations, and conversations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info panel */}
          <div className="flex flex-col gap-6">
            <div className="bg-surface rounded-2xl p-8 border border-ink/7">
              <h3 className="text-lg font-bold text-ink mb-4">
                Reach out directly
              </h3>
              <p className="text-muted font-light leading-relaxed mb-8 text-sm">
                Whether you have a project proposal, a question, or just want to
                say hello — feel free to reach out. I'll do my best to respond
                within 24 hours.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-teal-soft rounded-xl shrink-0">
                    <Mail className="w-4 h-4 text-teal-strong" />
                  </div>
                  <div>
                    <p className="text-xs text-subtle font-light">Email</p>
                    <a
                      href="mailto:hello@pedrotomas.dev"
                      className="text-sm font-semibold text-ink hover:text-teal transition-colors"
                    >
                      hello@pedrotomas.dev
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-amber-soft rounded-xl shrink-0">
                    <MapPin className="w-4 h-4 text-amber-strong" />
                  </div>
                  <div>
                    <p className="text-xs text-subtle font-light">Location</p>
                    <p className="text-sm font-semibold text-ink">
                      Available for Remote Work
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="bg-surface rounded-2xl p-6 border border-ink/7">
              <p className="text-xs font-semibold text-subtle uppercase tracking-widest mb-4">
                Social
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/tommyhernandez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-background border border-ink/8 rounded-xl text-sm font-semibold text-ink hover:bg-surface-muted transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/pedrothdc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-background border border-ink/8 rounded-xl text-sm font-semibold text-ink hover:bg-surface-muted transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-surface rounded-2xl p-8 border border-ink/7">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold text-muted uppercase tracking-wide mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 bg-background border border-ink/10 rounded-xl text-sm text-ink placeholder:text-placeholder focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-muted uppercase tracking-wide mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 bg-background border border-ink/10 rounded-xl text-sm text-ink placeholder:text-placeholder focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-muted uppercase tracking-wide mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 bg-background border border-ink/10 rounded-xl text-sm text-ink placeholder:text-placeholder focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-ink text-background rounded-xl text-sm font-semibold hover:bg-ink-hover transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
