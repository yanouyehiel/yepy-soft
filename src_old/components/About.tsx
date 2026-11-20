"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const stats = [
  { value: "6+", label: "projets livrés" },
  { value: "3", label: "apps publiées sur les stores" },
  { value: "Full-Stack", label: "web & mobile" },
];

const skills = [
  "Next.js / React",
  "React Native",
  "Node.js",
  "TypeScript",
  "Bases de données SQL & NoSQL",
  "Temps réel (Socket.io)",
  "Déploiement & VPS",
  "API REST",
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-text > *", {
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

      gsap.from(".about-stat", {
        opacity: 0,
        y: 16,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".about-stats",
          start: "top 85%",
        },
      });

      gsap.from(".about-skill", {
        opacity: 0,
        scale: 0.85,
        duration: 0.5,
        ease: "back.out(1.7)",
        stagger: 0.06,
        scrollTrigger: {
          trigger: ".about-skills",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="apropos" className="border-t border-white/10 px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
        <div className="about-text">
          <h2 className="text-sm font-medium uppercase tracking-widest text-accent">À propos</h2>
          <p className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            Je transforme des idées en produits logiciels concrets.
          </p>
          <p className="mt-6 text-foreground/60">
            Chez Yepy Soft, je conçois et développe des applications web et mobile de bout en bout : gestion
            métier, plateformes temps réel, applications grand public. J&apos;interviens sur l&apos;ensemble de
            la chaîne — architecture, développement, déploiement — pour livrer des produits fiables et prêts à
            l&apos;emploi.
          </p>

          <dl className="about-stats mt-10 grid grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="about-stat">
                <dt className="text-2xl font-semibold tracking-tight">{stat.value}</dt>
                <dd className="mt-1 text-sm text-foreground/50">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h3 className="text-sm font-medium uppercase tracking-widest text-foreground/40">Compétences</h3>
          <ul className="about-skills mt-5 flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <li
                key={skill}
                className="about-skill rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-foreground/70"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
