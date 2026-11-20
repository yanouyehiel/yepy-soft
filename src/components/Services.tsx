import { services } from "@/data/site";
import SpotlightCard from "./SpotlightCard";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <p data-reveal className="font-mono text-sm text-accent">
        02 — Services
      </p>
      <h2 data-reveal className="mt-6 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
        Ce que je peux construire pour vous.
      </h2>
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.n} data-reveal>
            <SpotlightCard className="h-full p-8">
              <div className="font-mono text-sm text-cyan">{s.n}</div>
              <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
            </SpotlightCard>
          </div>
        ))}
      </div>
    </section>
  );
}
