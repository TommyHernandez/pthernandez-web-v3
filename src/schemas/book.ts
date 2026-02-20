import { z } from "astro/zod";

export const bookSchema = z.object({
  title: z.string(),
  author: z.string(),
  language: z.string(),
  slug: z.string().optional(), // Adding optional slug field
  image: z.string().optional(), // Adding optional image field
  category: z.string().optional(),
  why: z.string().optional(),
});

export type BookSchema = z.infer<typeof bookSchema>;
