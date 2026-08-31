"use client";

import Script from "next/script";
import { CONTACT_FIELDS } from "@/lib/contact/constants";

/**
 * hCaptcha widget for the contact form. Reads the site key straight from
 * `NEXT_PUBLIC_HCAPTCHA_SITE_KEY` — set at build time, no plumbing needed to
 * reach a client component.
 *
 * Renders nothing until that variable is set, so the form works today with no
 * captcha. To turn it on:
 *   1. Create a site at https://dashboard.hcaptcha.com and set
 *      `NEXT_PUBLIC_HCAPTCHA_SITE_KEY` (public) and `HCAPTCHA_SECRET_KEY`
 *      (server-only, already read by `lib/contact/captcha.ts`).
 *   2. Nothing else — the widget renders, injects its response token into a
 *      hidden input named `h-captcha-response` (`CONTACT_FIELDS.captcha`), and
 *      `submitContactMessage` starts enforcing it automatically.
 */
export function ContactCaptcha() {
  const siteKey = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY;
  if (!siteKey) return null;

  return (
    <>
      <Script src="https://js.hcaptcha.com/1/api.js" async defer />
      <div
        className="h-captcha"
        data-sitekey={siteKey}
        data-size="normal"
        // hCaptcha names its own field; keep it aligned with CONTACT_FIELDS.captcha.
        data-response-field-name={CONTACT_FIELDS.captcha}
      />
    </>
  );
}
