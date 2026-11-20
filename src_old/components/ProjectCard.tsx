"use client";

import { useRef } from "react";
import type { Project } from "@/data/projects";
import { gsap } from "@/lib/gsap";
import ProjectCarousel from "./ProjectCarousel";

export default function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLElement>(null);
  const singleLink = (project.links.length >= 1 && project.links.find(link => link.label === "Site")) ?
   project.links.find(link => link.label === "Site") : undefined;

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(el, {
      rotateX: y * -8,
      rotateY: x * 8,
      y: -4,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 800,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCardClick = () => {
    if (singleLink) openLink(singleLink.url);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (!singleLink) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openLink(singleLink.url);
    }
  };

  const handleLinkButtonClick = (url: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    openLink(url);
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      role={singleLink ? "link" : undefined}
      tabIndex={singleLink ? 0 : undefined}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/2 transition-colors hover:border-white/20 hover:bg-white/4 ${
        singleLink ? "cursor-pointer" : ""
      }`}
    >
      <ProjectCarousel images={project.images} alt={project.name} />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
          {project.badge && (
            <span className="shrink-0 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              {project.badge}
            </span>
          )}
        </div>

        <p className="mt-1 text-sm text-foreground/50">{project.tagline}</p>
        <p className="mt-4 text-sm text-foreground/60">{project.description}</p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-foreground/50"
            >
              {tag}
            </li>
          ))}
        </ul>

        {project.links.length >= 1 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.links.map((link) => (
              <button
                key={link.url}
                type="button"
                onClick={handleLinkButtonClick(link.url)}
                className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-medium text-foreground/70 transition-colors hover:border-white/30 hover:text-foreground"
              >
                {link.label} ↗
              </button>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
