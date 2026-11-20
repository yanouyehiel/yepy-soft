"use client";

import { useEffect, useRef } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { gsap } from "@/lib/gsap";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-heading > *", {
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

      gsap.from(".project-card", {
        opacity: 0,
        y: 32,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="realisations" className="border-t border-white/10 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="projects-heading">
          <h2 className="text-sm font-medium uppercase tracking-widest text-accent">Réalisations</h2>
          <p className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
            Une sélection de projets sur lesquels j&apos;ai travaillé.
          </p>
        </div>

        <div className="projects-grid mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.slug} className="project-card h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
