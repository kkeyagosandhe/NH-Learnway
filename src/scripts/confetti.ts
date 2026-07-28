// A one-shot confetti burst on a shared full-screen canvas.
// Ported from the original single-file version; respects reduced-motion.
const PAL = ['#F4B8CB', '#F2C6A9', '#C7B9EC', '#A9D9C6', '#ECD9A0', '#EFE6EC'];

interface Part {
  x: number; y: number; vx: number; vy: number;
  g: number; s: number; rot: number; vr: number;
  c: string; life: number; age: number;
}

let cvs: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;
let parts: Part[] = [];
let raf: number | null = null;
const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function ensure(): void {
  if (cvs) return;
  cvs = document.getElementById('confetti') as HTMLCanvasElement | null;
  if (!cvs) return;
  ctx = cvs.getContext('2d');
  const size = () => {
    if (!cvs) return;
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;
  };
  size();
  window.addEventListener('resize', size);
}

function tick(): void {
  if (!ctx || !cvs) return;
  ctx.clearRect(0, 0, cvs.width, cvs.height);
  for (let i = parts.length - 1; i >= 0; i--) {
    const p = parts[i];
    p.age++; p.vy += p.g; p.x += p.vx; p.y += p.vy; p.rot += p.vr;
    const alpha = Math.max(0, 1 - p.age / p.life);
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.fillStyle = p.c;
    ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.6);
    ctx.restore();
    if (p.age >= p.life || p.y > cvs.height + 40) parts.splice(i, 1);
  }
  if (parts.length) raf = requestAnimationFrame(tick);
  else { raf = null; ctx.clearRect(0, 0, cvs.width, cvs.height); }
}

export function burst(x: number, y: number, color: string): void {
  if (reduce) return;
  ensure();
  if (!ctx) return;
  for (let i = 0; i < 90; i++) {
    const ang = Math.random() * Math.PI * 2;
    const sp = 3 + Math.random() * 7;
    parts.push({
      x, y,
      vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp - 3,
      g: 0.18 + Math.random() * 0.12,
      s: 4 + Math.random() * 5,
      rot: Math.random() * 6.28, vr: (Math.random() - 0.5) * 0.4,
      c: Math.random() < 0.5 ? color : PAL[(Math.random() * PAL.length) | 0],
      life: 60 + Math.random() * 30, age: 0,
    });
  }
  if (!raf) raf = requestAnimationFrame(tick);
}
