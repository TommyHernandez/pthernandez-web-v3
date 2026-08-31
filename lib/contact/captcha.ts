import "server-only";

/**
 * hCaptcha verification.
 *
 * Enforcement is gated on *both* halves being configured — the public site key
 * (which makes `ContactCaptcha` render the widget) and the server-only secret
 * (checked here). Either one missing leaves the check a no-op, so a secret
 * dropped into `.env` ahead of time doesn't start rejecting submissions before
 * there's a widget for visitors to solve.
 */

const HCAPTCHA_VERIFY_ENDPOINT = "https://api.hcaptcha.com/siteverify";

interface HCaptchaVerifyResponse {
  success: boolean;
  "error-codes"?: string[];
}

/** True once both hCaptcha env vars are set and the check is enforced. */
export function isCaptchaEnabled(): boolean {
  return Boolean(
    process.env.HCAPTCHA_SECRET_KEY && process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY,
  );
}

/**
 * Verifies a widget token against hCaptcha. Returns `true` when the captcha is
 * disabled, so callers can await it unconditionally.
 */
export async function verifyCaptchaToken(
  token: string | null,
): Promise<boolean> {
  if (!isCaptchaEnabled()) return true;
  if (!token) return false;

  const secret = process.env.HCAPTCHA_SECRET_KEY!;
  const siteKey = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!;
  const body = new URLSearchParams({ secret, response: token, sitekey: siteKey });

  try {
    const response = await fetch(HCAPTCHA_VERIFY_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      cache: "no-store",
    });

    if (!response.ok) return false;

    const result = (await response.json()) as HCaptchaVerifyResponse;
    if (!result.success) {
      console.warn("[contact] captcha rejected", result["error-codes"]);
    }
    return result.success;
  } catch (error) {
    // A verification outage must not silently open the door.
    console.error("[contact] captcha verification failed", error);
    return false;
  }
}
