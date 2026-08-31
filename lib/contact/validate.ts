import type { ContactFieldErrors, ContactMessage } from "@/app/types";
import { CONTACT_FIELDS, CONTACT_LIMITS } from "./constants";

/**
 * Deliberately permissive: the address is proven by the reply landing, not by a
 * regex. This only rejects shapes that cannot be an address at all.
 */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Newlines, tabs and other control characters. */
const CONTROL_CHARS = new RegExp("[\u0000-\u001F\u007F]+", "g");

/**
 * Collapses control characters into single spaces. Used for values that end up
 * in an email subject line, where a stray newline is a header-injection vector
 * rather than merely bad formatting.
 */
export function toSingleLine(value: string): string {
  return value.replace(CONTROL_CHARS, " ").trim();
}

/** Reads the form fields, trimming whitespace. Missing fields become `""`. */
export function readContactMessage(formData: FormData): ContactMessage {
  const read = (field: string) => {
    const value = formData.get(field);
    return typeof value === "string" ? value.trim() : "";
  };

  return {
    name: read(CONTACT_FIELDS.name),
    email: read(CONTACT_FIELDS.email),
    message: read(CONTACT_FIELDS.message),
  };
}

/**
 * Server-side validation. The browser's own `required` / `type="email"` checks
 * are a convenience for humans; this is the check that actually counts, so it
 * never trusts what arrived from the client.
 */
export function validateContactMessage(
  values: ContactMessage,
): ContactFieldErrors {
  const errors: ContactFieldErrors = {};

  if (values.name.length < CONTACT_LIMITS.name.min) {
    errors.name = "Please tell me your name.";
  } else if (values.name.length > CONTACT_LIMITS.name.max) {
    errors.name = `Please keep your name under ${CONTACT_LIMITS.name.max} characters.`;
  }

  if (!EMAIL_PATTERN.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  } else if (values.email.length > CONTACT_LIMITS.email.max) {
    errors.email = "That email address is too long.";
  }

  if (values.message.length < CONTACT_LIMITS.message.min) {
    errors.message = `Please write at least ${CONTACT_LIMITS.message.min} characters.`;
  } else if (values.message.length > CONTACT_LIMITS.message.max) {
    errors.message = `Please keep your message under ${CONTACT_LIMITS.message.max} characters.`;
  }

  return errors;
}
