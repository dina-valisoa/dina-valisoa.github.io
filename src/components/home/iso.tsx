// Tiny isometric renderer: boxes in world units → SVG polygons. Colors come from .iso / .iso-blue in globals.css.

type Box = { x: number; y: number; z?: number; w: number; d: number; h: number; blue?: boolean };

const C = 0.866;
const S = 0.5;

const p = (x: number, y: number, z: number): [number, number] => [(x - y) * C, (x + y) * S - z];
const pts = (a: [number, number][]) => a.map((q) => q.join(",")).join(" ");

function faces({ x, y, z = 0, w, d, h }: Box) {
  const t = z + h;
  return {
    top: [p(x, y, t), p(x + w, y, t), p(x + w, y + d, t), p(x, y + d, t)],
    left: [p(x, y + d, z), p(x + w, y + d, z), p(x + w, y + d, t), p(x, y + d, t)],
    right: [p(x + w, y, z), p(x + w, y + d, z), p(x + w, y + d, t), p(x + w, y, t)],
  };
}

function IsoScene({ boxes, className }: { boxes: Box[]; className?: string }) {
  // Painter's order: back (small x+y) first, then bottom to top
  const sorted = [...boxes].sort((a, b) => a.x + a.y - (b.x + b.y) || (a.z ?? 0) - (b.z ?? 0));
  const all = sorted.flatMap((b) => Object.values(faces(b)).flat());
  const xs = all.map((q) => q[0]);
  const ys = all.map((q) => q[1]);
  const pad = 4;
  const viewBox = [Math.min(...xs) - pad, Math.min(...ys) - pad, Math.max(...xs) - Math.min(...xs) + pad * 2, Math.max(...ys) - Math.min(...ys) + pad * 2].join(" ");

  return (
    <svg viewBox={viewBox} className={className} role="img">
      {sorted.map((b, i) => {
        const f = faces(b);
        return (
          <g key={i} className={b.blue ? "iso-blue" : "iso"}>
            <polygon points={pts(f.left)} className="iso-l" />
            <polygon points={pts(f.right)} className="iso-r" />
            <polygon points={pts(f.top)} className="iso-t" />
          </g>
        );
      })}
    </svg>
  );
}

// Small illustrations (education cards)
const SCENES: Record<string, Box[]> = {
  books: [
    { x: 0, y: 0, z: 0, w: 80, d: 50, h: 10 },
    { x: 6, y: 4, z: 10, w: 68, d: 44, h: 10 },
    { x: 2, y: 2, z: 20, w: 76, d: 48, h: 10, blue: true },
  ],
};

export function IsoIllustration({ kind }: { kind: keyof typeof SCENES }) {
  return <IsoScene boxes={SCENES[kind]} className="h-28 w-auto" />;
}
