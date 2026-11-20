import { site } from "@/data/site";

const points = [
  { k: "Backend", v: "Spring Boot (Java), Node.js / TypeScript, APIs REST sécurisées" },
  { k: "Frontend", v: "Next.js, React, Tailwind CSS, animations GSAP" },
  { k: "Mobile", v: "React Native / Expo" },
  { k: "DevOps", v: "Linux VPS, Nginx & Apache, MySQL, Redis, CI/CD" },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-32">
      <p data-reveal className="font-mono text-sm text-accent">
        01 — À propos
      </p>
      <div className="mt-6 grid gap-16 lg:grid-cols-2">
        <h2 data-reveal className="text-4xl font-semibold leading-tight md:text-5xl">
          Un profil <span className="text-gradient">full-stack</span> qui livre de bout en bout.
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-muted">
          <p data-reveal>
            Je suis {site.name}, {site.title.toLowerCase()} basé au {site.location}. Je mène plusieurs projets clients en parallèle et
            j&apos;encadre des équipes de 3 à 6 personnes.
          </p>
          <p data-reveal>
            Mon approche : comprendre le besoin métier, poser une architecture propre, livrer vite et en continu, puis
            accompagner la mise en production.
          </p>
        </div>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
        {points.map((p) => (
          <div key={p.k} data-reveal className="bg-surface p-8">
            <div className="font-mono text-sm text-cyan">{p.k}</div>
            <div className="mt-2 text-lg">{p.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
