import { defineCollection, z } from "astro:content";

const highlightSchema = z.object({
  title: z.string(),
  description: z.string(),
  impact: z.string(),
});

const journeySchema = z.object({
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
});

export const collections = {
  journey: defineCollection({ schema: journeySchema }),
};
