// The six chapters of the trail. Each has a hue that themes its milestones.
export type ChapterId = 'c1' | 'c2' | 'c3' | 'c4' | 'c5' | 'c6';

export interface Chapter {
  n: string;
  name: string;
  tag: string;
  hue: string; // CSS var reference used for theming
  chip: string; // solid hex for the flag chip
  ink: string; // readable text on top of the hue
}

export const CHAPTERS: Record<ChapterId, Chapter> = {
  c1: { n: '01', name: 'Base Camp', tag: 'Get unstuck', hue: 'var(--gold)', chip: '#F5B841', ink: '#151024' },
  c2: { n: '02', name: 'Foundations', tag: 'DSA basics', hue: 'var(--mint)', chip: '#34D9A8', ink: '#0c221b' },
  c3: { n: '03', name: 'The Core', tag: 'DSA depth', hue: 'var(--azure)', chip: '#46B4F0', ink: '#08202e' },
  c4: { n: '04', name: 'First Builds', tag: 'Weekends', hue: 'var(--violet)', chip: '#B57BEE', ink: '#1a1030' },
  c5: { n: '05', name: 'The Arena', tag: 'Contests', hue: 'var(--rose)', chip: '#FB7793', ink: '#2e0e17' },
  c6: { n: '06', name: 'The Summit', tag: 'Mastery', hue: 'var(--gold)', chip: '#F5B841', ink: '#151024' },
};
