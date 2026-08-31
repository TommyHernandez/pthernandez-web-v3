/**
 * Contact form domain types — shared by the server action, the mail transport
 * and the client form.
 */

/** The validated payload handed to the mail transport. */
export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

/** Per-field validation messages, keyed by the field's `name` attribute. */
export type ContactFieldErrors = Partial<Record<keyof ContactMessage, string>>;

/**
 * `idle` — nothing submitted yet.
 * `success` — the message was accepted and sent.
 * `error` — validation, captcha or transport failure; see `fieldErrors`/`message`.
 */
export type ContactFormStatus = "idle" | "success" | "error";

/**
 * State threaded through `useActionState`. `values` is echoed back so a form
 * submitted without JavaScript re-renders with what the visitor typed.
 */
export interface ContactFormState {
  status: ContactFormStatus;
  /** Form-level feedback shown above the submit button. Empty when `idle`. */
  message: string;
  fieldErrors: ContactFieldErrors;
  values: ContactMessage;
}
