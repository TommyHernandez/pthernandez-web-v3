'use client';
import {
  LuMail as Mail,
  LuMapPin as MapPin,
  LuSend as Send,
  LuGithub as Github,
  LuLinkedin as Linkedin,
} from "react-icons/lu";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 px-6 bg-[#F7F4EE] relative overflow-hidden">
      {/* Organic deco */}
      <div
        className="absolute top-[-60px] right-[-60px] w-80 h-80 opacity-[0.05]"
        style={{ background: "#5B8A7A", borderRadius: "60% 40% 30% 70% / 50% 60% 40% 50%" }}
      />

      <div className="max-w-5xl mx-auto relative">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#78716C] mb-5">
          Get in Touch
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="text-5xl font-bold tracking-tight text-[#1C1917] leading-tight">
            Let's work together.
          </h2>
          <p className="text-[#78716C] font-light max-w-xs md:text-right">
            Open to new projects, collaborations, and conversations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info panel */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-8 border border-[rgba(28,25,23,0.07)]">
              <h3 className="text-lg font-bold text-[#1C1917] mb-4">Reach out directly</h3>
              <p className="text-[#44403C] font-light leading-relaxed mb-8 text-sm">
                Whether you have a project proposal, a question, or just want to say hello —
                feel free to reach out. I'll do my best to respond within 24 hours.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-[#D1E8E0] rounded-xl flex-shrink-0">
                    <Mail className="w-4 h-4 text-[#2D5C4F]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#78716C] font-light">Email</p>
                    <a
                      href="mailto:your.email@example.com"
                      className="text-sm font-semibold text-[#1C1917] hover:text-[#5B8A7A] transition-colors"
                    >
                      your.email@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-[#F5EBC2] rounded-xl flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#6B5810]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#78716C] font-light">Location</p>
                    <p className="text-sm font-semibold text-[#1C1917]">
                      Available for Remote Work
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="bg-white rounded-2xl p-6 border border-[rgba(28,25,23,0.07)]">
              <p className="text-xs font-semibold text-[#78716C] uppercase tracking-widest mb-4">
                Social
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-[#F7F4EE] border border-[rgba(28,25,23,0.08)] rounded-xl text-sm font-semibold text-[#1C1917] hover:bg-[#EDE9E0] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-[#F7F4EE] border border-[rgba(28,25,23,0.08)] rounded-xl text-sm font-semibold text-[#1C1917] hover:bg-[#EDE9E0] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 border border-[rgba(28,25,23,0.07)]">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold text-[#44403C] uppercase tracking-wide mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-[#F7F4EE] border border-[rgba(28,25,23,0.1)] rounded-xl text-sm text-[#1C1917] placeholder:text-[#B8B0A6] focus:outline-none focus:ring-2 focus:ring-[#5B8A7A]/30 focus:border-[#5B8A7A] transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-[#44403C] uppercase tracking-wide mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-[#F7F4EE] border border-[rgba(28,25,23,0.1)] rounded-xl text-sm text-[#1C1917] placeholder:text-[#B8B0A6] focus:outline-none focus:ring-2 focus:ring-[#5B8A7A]/30 focus:border-[#5B8A7A] transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-[#44403C] uppercase tracking-wide mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-[#F7F4EE] border border-[rgba(28,25,23,0.1)] rounded-xl text-sm text-[#1C1917] placeholder:text-[#B8B0A6] focus:outline-none focus:ring-2 focus:ring-[#5B8A7A]/30 focus:border-[#5B8A7A] transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1C1917] text-[#F7F4EE] rounded-xl text-sm font-semibold hover:bg-[#2D2923] transition-colors"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-[rgba(28,25,23,0.08)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#78716C] font-light">
            © {new Date().getFullYear()} Web Developer Portfolio. Built with React & Tailwind CSS.
          </p>
          <p className="text-xs text-[#B8B0A6] font-light">
            Crafted with care — and a lot of TypeScript.
          </p>
        </div>
      </div>
    </section>
  );
}
