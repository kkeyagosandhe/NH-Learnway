// Progress lives in localStorage as a list of completed milestone slugs.
// Slug-keyed (not index-keyed) so reordering the trail never corrupts saved state.
const KEY = 'thepath_progress_v2';

export function loadDone(): string[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

export function saveDone(list: string[]): void {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(list));
  } catch {
    /* storage full or blocked — progress just won't persist */
  }
}

export function isDone(slug: string): boolean {
  return loadDone().indexOf(slug) !== -1;
}

/** Flip a milestone's state. Returns true if it is now lit. */
export function toggle(slug: string): boolean {
  const list = loadDone();
  const at = list.indexOf(slug);
  if (at === -1) {
    list.push(slug);
    saveDone(list);
    return true;
  }
  list.splice(at, 1);
  saveDone(list);
  return false;
}

export function reset(): void {
  saveDone([]);
}
