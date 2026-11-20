"use client";

import { useEffect, useRef } from "react";
import { site } from "@/data/site";
import { gsap } from "@/lib/gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".hero-badge", { opacity: 0, y: -10, duration: 0.6 })
        .from(".hero-title", { opacity: 0, y: 30, duration: 0.8 }, "-=0.35")
        .from(".hero-subtitle", { opacity: 0, y: 20, duration: 0.7 }, "-=0.5")
        .from(".hero-cta > *", { opacity: 0, y: 16, duration: 0.6, stagger: 0.12 }, "-=0.4");

      gsap.to(blobRef.current, {
        y: 24,
        scale: 1.08,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative overflow-hidden px-6 pt-24 pb-20 md:pt-32 md:pb-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 flex justify-center blur-3xl"
      >
        <div ref={blobRef} className="h-72 w-[36rem] rounded-full bg-gradient-to-r from-accent to-accent-2 opacity-30" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <p className="hero-badge mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-xs font-medium text-foreground/60">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Disponible pour de nouveaux projets
        </p>

        <h1 className="hero-title text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          {site.tagline}
        </h1>

        <p className="hero-subtitle mx-auto mt-6 max-w-2xl text-balance text-base text-foreground/60 sm:text-lg">
          {site.name} — {site.role}. Du cahier des charges à la mise en production, je conçois des applications
          web et mobile robustes, pensées pour durer.
        </p>

        <div className="hero-cta mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#realisations"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Voir mes réalisations
          </a>
          <a
            href="/contact"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-foreground/80 transition-colors hover:border-white/30 hover:text-foreground"
          >
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}
