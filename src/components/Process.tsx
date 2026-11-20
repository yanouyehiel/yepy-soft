import { process } from "@/data/site";

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-6 py-24">
      <p data-reveal className="font-mono text-sm text-accent">
        04 — Méthode
      </p>
      <h2 data-reveal className="mt-6 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
        Comment je travaille.
      </h2>
      <div className="relative mt-14 pl-10">
        <div className="absolute bottom-0 left-[11px] top-0 w-px bg-line" />
        <div
          data-line
          className="absolute bottom-0 left-[11px] top-0 w-px origin-top bg-gradient-to-b from-accent to-cyan"
        />
        <div className="space-y-12">
          {process.map((s, i) => (
            <div key={s.title} data-reveal className="relative">
              <span className="absolute -left-10 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-accent bg-bg font-mono text-[10px]">
                {i + 1}
              </span>
              <h3 className="text-2xl font-semibold">{s.title}</h3>
              <p className="mt-2 max-w-xl text-muted">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
