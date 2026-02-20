import { z } from "astro/zod";

export const blogPostSchema = z.object({
    title: z.string(),
    author: z.string(),
    date: z.date(),
    slug: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
  })

  export type BlogPostSchema = z.infer<typeof blogPostSchema>;