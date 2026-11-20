"use client";

import { useEffect, useRef } from "react";
import { experiences, formations, type ExperienceEntry } from "@/data/experience";
import { gsap } from "@/lib/gsap";

function Timeline({ items }: { items: ExperienceEntry[] }) {
  return (
    <ol className="experience-timeline mt-6 space-y-8 border-l border-white/10 pl-6">
      {items.map((item) => (
        <li key={`${item.title}-${item.period}`} className="experience-item relative">
          <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
          <p className="text-xs font-medium uppercase tracking-widest text-foreground/40">{item.period}</p>
          <h3 className="mt-1 text-lg font-semibold tracking-tight">{item.title}</h3>
          <p className="text-sm text-foreground/50">{item.place}</p>
          <p className="mt-2 text-sm text-foreground/60">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".experience-heading > *", {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".experience-item", {
        opacity: 0,
        x: -16,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".experience-columns",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="parcours" className="border-t border-white/10 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="experience-heading">
          <h2 className="text-sm font-medium uppercase tracking-widest text-accent">Parcours</h2>
          <p className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
            Expériences professionnelles et formations.
          </p>
        </div>

        <div className="experience-columns mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="text-sm font-medium uppercase tracking-widest text-foreground/40">
              Expériences professionnelles
            </h3>
            <Timeline items={experiences} />
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-widest text-foreground/40">Formations</h3>
            <Timeline items={formations} />
          </div>
        </div>
      </div>
    </section>
  );
}
