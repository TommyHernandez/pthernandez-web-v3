import type { IconType } from "react-icons";

export interface SocialLink {
  /** Network name — also the accessible label for the icon-only variant. */
  label: string;
  href: string;
  icon: IconType;
}

/**
 * `icon` — compact icon-only tiles (hero).
 * `labelled` — icon + name pills (contact card).
 */
export type SocialLinkVariant = "icon" | "labelled";

export interface SocialLinksProps {
  variant?: SocialLinkVariant;
  className?: string;
}
