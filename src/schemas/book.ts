import { z } from "astro/zod";

export const bookSchema = z.object({
  title: z.string(),
  author: z.string(),
  language: z.string(),
  image: z.string().optional(),
});

export type BookSchema = z.infer<typeof bookSchema>;
