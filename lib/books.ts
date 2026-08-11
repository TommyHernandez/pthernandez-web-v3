import "server-only";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Book, BookLocale } from "@/app/types";

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

  // `order` drives the sort but is not part of `Book`, so keep it alongside the
  // entry instead of on it — no stripping pass afterwards.
  const entries = files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data, content } = matter(raw);

    const image = String(data.image ?? "").trim();

    return {
      order:
        typeof data.order === "number" ? data.order : Number.MAX_SAFE_INTEGER,
      book: {
        slug: file.replace(/\.md$/, ""),
        title: String(data.title ?? "").trim(),
        author: String(data.author ?? "").trim(),
        image: image ? `/images/books/${image}` : "",
        excerpt: String(data.excerpt ?? "").trim(),
        body: content.trim(),
        link: data.link ? String(data.link).trim() : undefined,
      } satisfies Book,
    };
  });

  return entries.sort((a, b) => a.order - b.order).map(({ book }) => book);
}
