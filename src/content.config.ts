import { defineCollection } from 'astro:content';

import { glob, file } from 'astro/loaders';


import { z } from 'astro/zod';
import { bookSchema } from './schemas/book';
import { blogPostSchema } from './schemas/blogPost';

const highlightSchema = z.object({
  title: z.string(),
  description: z.string(),
  impact: z.string(),
});
const blog = defineCollection({ loader: glob({ pattern: "**/*.md", base: "./content/blog" }),
  schema: blogPostSchema,
});
const books = defineCollection({  loader: glob({ pattern: "**/*.md", base: "./content/books" }),
  schema: bookSchema,
});

const journey = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./content/journey" }),
  schema:z.object({
  company: z.string(),
  role: z.string(),
  period: z.string(),
  theme: z.string(),
  icon: z.string().optional(),
  color: z.string().optional(),
  story: z.string(),
  highlights: z.array(highlightSchema).optional(),
  stack: z.array(z.string()).optional(),
  keyLearning: z.string().optional(),
}),
});

export const collections = { blog, books, journey };