import { projects } from "@/data/site";
import SpotlightCard from "./SpotlightCard";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <p data-reveal className="font-mono text-sm text-accent">
        03 — Projets
      </p>
      <h2 data-reveal className="mt-6 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
        Quelques réalisations <span className="text-gradient">récentes</span>.
      </h2>
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => {
          const card = (
            <SpotlightCard className="group flex h-full min-h-64 flex-col justify-between p-8">
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-muted">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <span>{p.tag}</span>
                </div>
                <h3 className="mt-8 text-3xl font-semibold transition-transform duration-300 group-hover:translate-x-1">
                  {p.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{p.text}</p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                    {s}
                  </span>
                ))}
                {p.href && (
                  <span className="ml-auto text-cyan transition-transform group-hover:translate-x-1">↗</span>
                )}
              </div>
            </SpotlightCard>
          );
          return (
            <div key={p.title} data-reveal className={i % 3 === 0 ? "md:col-span-2" : ""}>
              {p.href ? (
                <a href={p.href} target="_blank" rel="noreferrer" className="block h-full">
                  {card}
                </a>
              ) : (
                card
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
