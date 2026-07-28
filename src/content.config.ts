import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * One concept = one Markdown file in src/content/concepts/.
 * The frontmatter is the whole lesson, broken down in detail:
 *   picture -> origin -> purpose -> cues -> good/bad -> the click ->
 *   prerequisites -> the toolkit -> how to solve -> worked code ->
 *   build -> using AI -> two problems -> complexity.
 * 18 concepts, three chapters, no apps or streaks.
 */
const concepts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/concepts' }),
  schema: z.object({
    order: z.number().int().min(1).max(18),
    chapter: z.enum(['foundations', 'structures', 'techniques']),
    title: z.string(),

    // --- the mental model ---
    picture: z.array(z.string()), // the vivid analogy
    origin: z.array(z.string()), // where it comes from / why it exists
    purpose: z.array(z.string()), // what you're going for
    good: z.array(z.string()), // strong at
    bad: z.array(z.string()), // watch out
    click: z.array(z.string()), // the aha that ties it together

    // --- recognition + framing ---
    cues: z.array(z.string()).default([]), // "reach for it when the problem says..."
    why: z.string().optional(), // why companies ask this

    // --- the language & logic (added depth) ---
    prereqs: z.array(z.string()).optional(), // what to be comfortable with first
    toolkit: z
      .array(z.object({ code: z.string(), does: z.string() }))
      .optional(), // syntax -> what it does
    viz: z.enum(['hashmap']).optional(), // an interactive demo, where one fits

    // --- how to solve it ---
    solve: z.object({
      lead: z.string(),
      steps: z.array(z.object({ do: z.string(), why: z.string() })),
      keep: z.string(), // the invariant to hold true
    }),
    code: z.string().optional(), // the worked solution (revealed, not spoiled)

    // --- build + practice + reference ---
    ai: z.array(z.string()).optional(), // using AI well
    build: z.object({
      blurb: z.string(),
      skills: z.array(z.string()),
      out: z.string(),
    }),
    practice: z.array(z.object({ label: z.string(), url: z.string().url() })),
    complexity: z
      .array(z.object({ op: z.string(), val: z.string(), note: z.string().optional() }))
      .optional(),
    complexityNote: z.string().optional(),
  }),
});

export const collections = { concepts };
