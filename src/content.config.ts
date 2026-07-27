import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * One milestone = one Markdown file in src/content/milestones/.
 * The frontmatter below is the whole lesson, broken into the parts we teach in:
 *   basics -> analogy -> usage -> language & logic.
 * Everything past `why` is optional: a habit milestone just fills the top,
 * a DSA milestone fills the whole thing. The template renders whatever exists.
 */
const milestones = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/milestones' }),
  schema: z.object({
    order: z.number().int().min(1).max(27), // position on the trail
    chapter: z.enum(['c1', 'c2', 'c3', 'c4', 'c5', 'c6']),
    title: z.string(),

    // --- always present: the summary the trail shows ---
    do: z.string(), // the single concrete action
    why: z.string(), // one line: why it matters
    links: z
      .array(z.object({ label: z.string(), url: z.string().url() }))
      .default([]),

    // --- the "at a glance" chips ---
    meta: z
      .object({
        interview: z.number().min(0).max(5).optional(), // dots
        realWorld: z.number().min(0).max(5).optional(), // dots
        time: z.string().optional(),
        unlocks: z.string().optional(),
        confidence: z.string().optional(), // "you'll know you've got it when..."
      })
      .optional(),

    // --- 1. the basics: what problem this exists for ---
    problem: z.string().optional(),

    // --- 2. the analogy: the mental picture ---
    analogy: z.string().optional(),
    viz: z.enum(['hashmap']).optional(), // an interactive demo, if one fits

    // --- intuition bridges the analogy into the real idea ---
    intuition: z.string().optional(),

    // --- 3. the usage: where it lives in real systems ---
    real: z.array(z.string()).optional(),

    // --- 4. the language & logic: how you actually write it ---
    prereqs: z.array(z.string()).optional(), // what you should already know
    toolkit: z
      .array(z.object({ code: z.string(), does: z.string() }))
      .optional(), // syntax -> what it does
    walkthrough: z.array(z.string()).optional(), // the recipe, step by step
    code: z.string().optional(), // the worked solution (revealed, not spoiled)
    build: z.string().optional(), // a tiny thing to build yourself

    // --- practice + wiring into the rest of the trail ---
    interview: z.string().optional(),
    practice: z
      .array(z.object({ label: z.string(), url: z.string().url() }))
      .optional(),
    connects: z
      .array(z.object({ label: z.string(), slug: z.string() }))
      .optional(),
    check: z.object({ q: z.string(), a: z.string() }).optional(), // reveal
    reflect: z.string().optional(), // a prompt they answer in their own words
  }),
});

export const collections = { milestones };
