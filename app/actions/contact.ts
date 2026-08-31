"use server";

import type { ContactFormState } from "@/app/types";
import { verifyCaptchaToken } from "@/lib/contact/captcha";
import {
  CONTACT_FIELDS,
  INITIAL_CONTACT_FORM_STATE,
} from "@/lib/contact/constants";
import { sendContactEmail } from "@/lib/contact/email";
import {
  readContactMessage,
  validateContactMessage,
} from "@/lib/contact/validate";

const SUCCESS_MESSAGE =
  "Thanks — your message is on its way. I’ll get back to you soon.";

/**
 * Server Action behind the contact form.
 *
 * Everything that decides whether a message is sent runs here: field
 * validation, the honeypot, and the captcha. The client half is a progressive
 * enhancement — the form posts and works with JavaScript disabled.
 *
 * The shape `(prevState, formData) => state` is what `useActionState` expects.
 */
export async function submitContactMessage(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const values = readContactMessage(formData);

  // Honeypot: a human never sees this field, so anything in it is a bot. Answer
  // with the success state — a bot that learns it was caught just adapts.
  const honeypot = formData.get(CONTACT_FIELDS.honeypot);
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return {
      status: "success",
      message: SUCCESS_MESSAGE,
      fieldErrors: {},
      values: INITIAL_CONTACT_FORM_STATE.values,
    };
  }

  const fieldErrors = validateContactMessage(values);
  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please fix the fields below and try again.",
      fieldErrors,
      values,
    };
  }

  const captchaToken = formData.get(CONTACT_FIELDS.captcha);
  const captchaPassed = await verifyCaptchaToken(
    typeof captchaToken === "string" ? captchaToken : null,
  );
  if (!captchaPassed) {
    return {
      status: "error",
      message: "Captcha verification failed. Please try again.",
      fieldErrors: {},
      values,
    };
  }

  try {
    await sendContactEmail(values);
  } catch (error) {
    // The visitor gets a way forward; the detail stays in the server logs.
    console.error("[contact] failed to send message", error);
    return {
      status: "error",
      message:
        "Something went wrong sending your message. Please email me directly at hello@pedrotomas.dev.",
      fieldErrors: {},
      values,
    };
  }

  return {
    status: "success",
    message: SUCCESS_MESSAGE,
    fieldErrors: {},
    values: INITIAL_CONTACT_FORM_STATE.values,
  };
}
