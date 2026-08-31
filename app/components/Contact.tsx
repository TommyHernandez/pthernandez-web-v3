"use client";

import {
  LuCircleCheck as CircleCheck,
  LuCircleAlert as CircleAlert,
  LuMail as Mail,
  LuMapPin as MapPin,
  LuSend as Send,
} from "react-icons/lu";
import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { submitContactMessage } from "@/app/actions/contact";
import { ContactCaptcha } from "./ContactCaptcha";
import { SocialLinks } from "./SocialLinks";
import { CONTACT_FIELDS, INITIAL_CONTACT_FORM_STATE } from "@/lib/contact/constants";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-ink text-background rounded-xl text-sm font-semibold hover:bg-ink-hover transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
    >
      <Send className="w-4 h-4" />
      {pending ? "Sending…" : "Send Message"}
    </button>
  );
}

export function Contact() {
  const [state, formAction] = useActionState(
    submitContactMessage,
    INITIAL_CONTACT_FORM_STATE,
  );
  const formRef = useRef<HTMLFormElement>(null);

  // Uncontrolled inputs only read `defaultValue` on mount, so a successful
  // submission needs an explicit reset to actually clear the fields.
  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state.status]);

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
            Let’s work together.
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
                say hello, feel free to reach out. I’ll do my best to respond
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
              <SocialLinks variant="labelled" />
            </div>
          </div>

          {/* Form */}
          <div className="bg-surface rounded-2xl p-8 border border-ink/7">
            <form
              ref={formRef}
              action={formAction}
              className="space-y-5"
              noValidate
            >
              {/* Honeypot — hidden from sighted and screen-reader users alike;
                  a filled value marks the submission as a bot. */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor={CONTACT_FIELDS.honeypot}>
                  Leave this field empty
                </label>
                <input
                  id={CONTACT_FIELDS.honeypot}
                  name={CONTACT_FIELDS.honeypot}
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label
                  htmlFor={CONTACT_FIELDS.name}
                  className="block text-xs font-semibold text-muted uppercase tracking-wide mb-2"
                >
                  Name
                </label>
                <input
                  id={CONTACT_FIELDS.name}
                  name={CONTACT_FIELDS.name}
                  type="text"
                  placeholder="Your name"
                  defaultValue={state.values.name}
                  required
                  aria-invalid={Boolean(state.fieldErrors.name)}
                  aria-describedby={
                    state.fieldErrors.name ? "name-error" : undefined
                  }
                  className="w-full px-4 py-3 bg-background border border-ink/10 rounded-xl text-sm text-ink placeholder:text-placeholder focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all"
                />
                {state.fieldErrors.name && (
                  <p
                    id="name-error"
                    className="mt-2 text-xs text-terracotta-strong"
                  >
                    {state.fieldErrors.name}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor={CONTACT_FIELDS.email}
                  className="block text-xs font-semibold text-muted uppercase tracking-wide mb-2"
                >
                  Email
                </label>
                <input
                  id={CONTACT_FIELDS.email}
                  name={CONTACT_FIELDS.email}
                  type="email"
                  placeholder="your.email@example.com"
                  defaultValue={state.values.email}
                  required
                  aria-invalid={Boolean(state.fieldErrors.email)}
                  aria-describedby={
                    state.fieldErrors.email ? "email-error" : undefined
                  }
                  className="w-full px-4 py-3 bg-background border border-ink/10 rounded-xl text-sm text-ink placeholder:text-placeholder focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all"
                />
                {state.fieldErrors.email && (
                  <p
                    id="email-error"
                    className="mt-2 text-xs text-terracotta-strong"
                  >
                    {state.fieldErrors.email}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor={CONTACT_FIELDS.message}
                  className="block text-xs font-semibold text-muted uppercase tracking-wide mb-2"
                >
                  Message
                </label>
                <textarea
                  id={CONTACT_FIELDS.message}
                  name={CONTACT_FIELDS.message}
                  placeholder="Tell me about your project..."
                  rows={5}
                  defaultValue={state.values.message}
                  required
                  aria-invalid={Boolean(state.fieldErrors.message)}
                  aria-describedby={
                    state.fieldErrors.message ? "message-error" : undefined
                  }
                  className="w-full px-4 py-3 bg-background border border-ink/10 rounded-xl text-sm text-ink placeholder:text-placeholder focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all resize-none"
                />
                {state.fieldErrors.message && (
                  <p
                    id="message-error"
                    className="mt-2 text-xs text-terracotta-strong"
                  >
                    {state.fieldErrors.message}
                  </p>
                )}
              </div>

              <ContactCaptcha />

              {state.status !== "idle" && (
                <p
                  role="status"
                  className={`flex items-center gap-2 text-sm font-medium ${
                    state.status === "success"
                      ? "text-teal-strong"
                      : "text-terracotta-strong"
                  }`}
                >
                  {state.status === "success" ? (
                    <CircleCheck className="w-4 h-4 shrink-0" />
                  ) : (
                    <CircleAlert className="w-4 h-4 shrink-0" />
                  )}
                  {state.message}
                </p>
              )}

              <SubmitButton />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
