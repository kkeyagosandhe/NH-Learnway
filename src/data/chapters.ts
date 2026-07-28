// The chapters of the concept trail. Each has a soft pastel hue.
export type ChapterId = 'basics' | 'foundations' | 'structures' | 'techniques';

export interface Chapter {
  n: string;
  name: string;
  tag: string;
  hue: string; // CSS var, themes the chapter's concepts
  chip: string; // solid pastel hex for the flag chip + confetti
  ink: string; // readable dark text on top of the pastel
}

export const CHAPTERS: Record<ChapterId, Chapter> = {
  basics: { n: '00', name: 'The Basics', tag: 'before the foundations', hue: 'var(--peach)', chip: '#F2C6A9', ink: '#2e2018' },
  foundations: { n: '01', name: 'Foundations', tag: 'the everyday tools', hue: 'var(--pink)', chip: '#F4B8CB', ink: '#2c2028' },
  structures: { n: '02', name: 'Structures', tag: 'shapes for data', hue: 'var(--lav)', chip: '#C7B9EC', ink: '#221b2e' },
  techniques: { n: '03', name: 'Techniques', tag: 'ways of thinking', hue: 'var(--mint)', chip: '#A9D9C6', ink: '#14251d' },
};

// Chapters sort in this order; concepts sort by `order` within a chapter.
export const CHAPTER_RANK: Record<ChapterId, number> = {
  basics: 0,
  foundations: 1,
  structures: 2,
  techniques: 3,
};
