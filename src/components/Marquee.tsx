import { stack } from "@/data/site";

export default function Marquee() {
  const items = [...stack, ...stack];
  return (
    <div className="marquee relative overflow-hidden border-y border-line py-6">
      <div className="marquee-track flex w-max gap-12">
        {items.map((s, i) => (
          <span key={i} className="flex items-center gap-12 font-mono text-sm uppercase tracking-widest text-muted">
            {s}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
