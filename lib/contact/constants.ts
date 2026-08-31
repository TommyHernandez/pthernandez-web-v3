import type { ContactFormState } from "@/app/types";

/**
 * Field names, length limits and the form's initial state, shared by the client
 * form and the server action. Client-safe on purpose — no `server-only`, no
 * secrets — so the markup and the validation can never drift apart.
 *
 * (The initial state lives here rather than next to the action because a
 * `"use server"` module may only export async functions.)
 */

export const CONTACT_FIELDS = {
  name: "name",
  email: "email",
  message: "message",
  /**
   * Honeypot: hidden from humans, irresistible to naive bots. A submission that
   * fills it is dropped silently (see `app/actions/contact.ts`).
   */
  honeypot: "website",
  /** Field hCaptcha's widget injects into the form once it's wired up. */
  captcha: "h-captcha-response",
} as const;

export const CONTACT_LIMITS = {
  name: { min: 2, max: 80 },
  /** RFC 5321 caps an address at 254 characters. */
  email: { min: 5, max: 254 },
  message: { min: 10, max: 2000 },
} as const;

/** Starting state for `useActionState` — also what a reset form falls back to. */
export const INITIAL_CONTACT_FORM_STATE: ContactFormState = {
  status: "idle",
  message: "",
  fieldErrors: {},
  values: { name: "", email: "", message: "" },
};
