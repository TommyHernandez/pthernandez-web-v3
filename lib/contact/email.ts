import "server-only";
import type { ContactMessage } from "@/app/types";
import { toSingleLine } from "./validate";

/**
 * Mail transport for the contact form — Resend's REST API, called with `fetch`
 * so the site keeps zero runtime dependencies for this.
 *
 * Required environment variables (see `.env.example`):
 *   RESEND_API_KEY      — from resend.com/api-keys
 *   CONTACT_FROM_EMAIL  — a sender on a domain verified in Resend
 *   CONTACT_TO_EMAIL    — where the messages land
 *
 * With them unset the transport logs the message to the server console in
 * development and throws in production, so a missing production secret fails
 * loudly instead of swallowing someone's message.
 */

const RESEND_ENDPOINT = "https://api.resend.com/emails";

/** Signals a delivery failure the action turns into visitor-facing copy. */
export class EmailTransportError extends Error {
  constructor(message: string, options?: { cause?: unknown }) {
    super(message, options);
    this.name = "EmailTransportError";
  }
}

interface TransportConfig {
  apiKey: string;
  from: string;
  to: string;
}

function readConfig(): TransportConfig | null {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) return null;
  return { apiKey, from, to };
}

function buildPlainTextBody({ name, email, message }: ContactMessage): string {
  return [
    `Name:  ${name}`,
    `Email: ${email}`,
    "",
    "Message",
    "-------",
    message,
  ].join("\n");
}

/**
 * Sends one contact message. Resolves on delivery; throws
 * `EmailTransportError` on any transport or configuration failure.
 */
export async function sendContactEmail(
  contactMessage: ContactMessage,
): Promise<void> {
  const config = readConfig();

  if (!config) {
    if (process.env.NODE_ENV === "production") {
      throw new EmailTransportError(
        "Mail transport is not configured (RESEND_API_KEY / CONTACT_FROM_EMAIL / CONTACT_TO_EMAIL).",
      );
    }

    console.info(
      "[contact] no mail transport configured — message logged instead:\n" +
        buildPlainTextBody(contactMessage),
    );
    return;
  }

  let response: Response;
  try {
    response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: config.from,
        to: [config.to],
        // Replying in the mail client answers the visitor, not the site.
        reply_to: contactMessage.email,
        subject: `Portfolio - ${toSingleLine(contactMessage.name)}`,
        text: buildPlainTextBody(contactMessage),
      }),
      cache: "no-store",
    });
  } catch (error) {
    throw new EmailTransportError("Could not reach the mail service.", {
      cause: error,
    });
  }

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new EmailTransportError(
      `Mail service responded ${response.status}: ${detail.slice(0, 500)}`,
    );
  }
}
