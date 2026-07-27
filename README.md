# NH-Learnway

A hand-built learning trail — your highway from zero to solid CS fundamentals, at
your own pace. Milestones mark the road the way distance-stones mark a real
highway. Multi-page Astro site so every milestone gets room to breathe.

## Run it

```bash
npm install      # once
npm run dev      # http://localhost:4321
npm run build    # static site into dist/
npm run preview  # serve the built site
```

## How it's put together

- **The trail** (`src/pages/index.astro`) — the snake of 27 nodes. Each node
  links to its milestone page. "Lit" state lives in `localStorage`.
- **A milestone page** (`src/pages/path/[slug].astro`) — one page per milestone,
  laid out in four parts:
  1. **The basics** — the problem this idea exists to solve
  2. **The analogy** — the mental picture (+ an interactive demo where one fits)
  3. **The usage** — where it lives in real systems
  4. **The language & logic** — prerequisites → the syntax toolkit → how you
     actually write it → the worked code (revealed, not spoiled)
- **The field guide** (`src/pages/guide.astro`) — every free resource.

## Adding or editing a milestone

Every milestone is one Markdown file in `src/content/milestones/`. The filename
is its URL slug (`arrays-and-hashing.md` → `/path/arrays-and-hashing`). The
frontmatter *is* the lesson — see `src/content.config.ts` for the full shape.
Everything past `why` is optional: a habit milestone fills only the top, a DSA
milestone fills the whole thing, and the page renders whatever a milestone has.

`arrays-and-hashing.md` is the gold-standard example to copy from.

## The interactive bits (Astro "islands")

Kept as small client scripts, not a framework:

- `src/scripts/progress.ts` — reads/writes progress in `localStorage`
- `src/scripts/confetti.ts` — the burst when you mark a milestone lit
- `src/components/HashViz.astro` — the type-a-word hash-map demo
