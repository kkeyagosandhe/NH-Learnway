// @ts-check
import { defineConfig } from 'astro/config';

// NH-Learnway — a hand-built learning trail.
// Static site; interactive bits are per-component <script> islands.
export default defineConfig({
  site: 'https://example.com',
  trailingSlash: 'ignore',
});
