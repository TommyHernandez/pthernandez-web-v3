/**
 * Single entry point for shared types: `import type { Book } from "@/app/types"`.
 * Components and lib modules should not declare their own domain types.
 */
export type { Book, BookLocale } from "./book";
export type {
  SocialLink,
  SocialLinkVariant,
  SocialLinksProps,
} from "./social";
