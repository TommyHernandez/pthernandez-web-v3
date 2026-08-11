export interface Book {
  /** Filename without extension, e.g. "threatModeling" — stable id for routing/keys. */
  slug: string;
  title: string;
  author: string;
  /** Absolute public path to the cover image, e.g. "/images/books/glowfish.jpg". */
  image: string;
  /** Short text shown on the card. */
  excerpt: string;
  /** Full review (markdown body). Kept for a future "read more" detail view. */
  body: string;
  /** Optional outbound link (e.g. Amazon affiliate). Wired up later. */
  link?: string;
}

/** Locales with a folder under `content/books/`. */
export type BookLocale = "en" | "es";
