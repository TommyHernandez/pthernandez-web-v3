import "server-only";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

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

type BookLocale = "en" | "es";

const BOOKS_DIR = path.join(process.cwd(), "content", "books");

/**
 * Reads every markdown file for a locale, parses its frontmatter and body,
 * and returns the books sorted by the `order` field.
 *
 * Runs only on the server (this module is `server-only`), so it's safe to use
 * directly from a Server Component during render/build.
 */
export function getBooks(locale: BookLocale = "en"): Book[] {
  const dir = path.join(BOOKS_DIR, locale);
  const files = fs.readdirSync(dir).filter((file) => file.endsWith(".md"));

  const books = files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data, content } = matter(raw);

    const image = String(data.image ?? "").trim();

    return {
      slug: file.replace(/\.md$/, ""),
      title: String(data.title ?? "").trim(),
      author: String(data.author ?? "").trim(),
      image: image ? `/images/books/${image}` : "",
      excerpt: String(data.excerpt ?? "").trim(),
      body: content.trim(),
      link: data.link ? String(data.link).trim() : undefined,
      order: typeof data.order === "number" ? data.order : Number.MAX_SAFE_INTEGER,
    };
  });

  return books
    .sort((a, b) => a.order - b.order)
    .map(({ order: _order, ...book }) => book);
}
