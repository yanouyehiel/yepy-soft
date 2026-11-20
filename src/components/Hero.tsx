"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { site } from "@/data/site";

const titleLines = ["Je construis des produits", "web & mobile qui", "passent à l'échelle."];

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const role = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduce) {
        if (role.current) role.current.textContent = site.roles[0];
        return;
      }
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from("[data-hero='chip']", { opacity: 0, y: 20, duration: 0.7 })
        .from("[data-hero='word']", { yPercent: 110, duration: 1, stagger: 0.06 }, "-=0.3")
        .from("[data-hero='fade']", { opacity: 0, y: 24, duration: 0.8, stagger: 0.1 }, "-=0.6")
        .from("[data-hero='stat']", { opacity: 0, y: 30, duration: 0.8, stagger: 0.12 }, "-=0.5");

      const loop = gsap.timeline({ repeat: -1 });
      site.roles.forEach((r) => {
        loop
          .call(() => {
            if (role.current) role.current.textContent = r;
          })
          .fromTo(
            role.current,
            { yPercent: 100, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          )
          .to(role.current, { yPercent: -100, opacity: 0, duration: 0.5, ease: "power3.in" }, "+=1.8");
      });

      gsap.to("[data-orb]", {
        x: "random(-60, 60)",
        y: "random(-40, 40)",
        duration: 6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 1.5,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={root}
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32"
    >
      <div className="grid-bg absolute inset-0" />
      <div
        data-orb
        className="orb absolute -left-24 top-24 h-80 w-80 rounded-full bg-accent/30 blur-[110px]"
      />
      <div
        data-orb
        className="orb absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-cyan/20 blur-[120px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div
          data-hero="chip"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-2 font-mono text-xs text-muted"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-lime" />
          Disponible pour de nouvelles missions · {site.location}
        </div>

        <h1 className="text-[clamp(2.4rem,7vw,5.8rem)] font-semibold leading-[1.02] tracking-tight">
          {titleLines.map((line, i) => (
            <span key={i} className="block overflow-hidden pb-2">
              {line.split(" ").map((w, j) => (
                <span
                  key={j}
                  data-hero="word"
                  className={`mr-[0.25em] inline-block ${i === 2 ? "text-gradient" : ""}`}
                >
                  {w}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <p data-hero="fade" className="mt-8 flex items-center gap-3 font-mono text-lg text-muted">
          <span className="text-accent">&gt;</span>
          <span className="inline-block overflow-hidden">
            <span ref={role} className="inline-block text-ink">
              {site.roles[0]}
            </span>
          </span>
        </p>

        <p data-hero="fade" className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          {site.intro}
        </p>

        <div data-hero="fade" className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-medium transition hover:shadow-[0_0_40px_-5px_var(--color-accent)]"
          >
            Voir mes projets
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contact"
            className="rounded-full border border-line px-7 py-3.5 font-medium transition hover:border-ink"
          >
            Parlons de votre projet
          </a>
        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-3">
          {site.stats.map((s) => (
            <div
              key={s.label}
              data-hero="stat"
              className="rounded-2xl border border-line bg-white/[0.02] p-5 backdrop-blur"
            >
              <div className="text-2xl font-semibold">{s.value}</div>
              <div className="mt-1 text-sm text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
