"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { site } from "@/data/site";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projets" },
  { href: "#process", label: "Méthode" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const bar = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      if (bar.current) gsap.set(bar.current, { scaleX: p });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/70 backdrop-blur-xl">
      <div
        ref={bar}
        className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-accent to-cyan"
        style={{ transform: "scaleX(0)" }}
      />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm tracking-tight">
          <span className="text-accent">&lt;</span>
          {site.brand}
          <span className="text-accent">/&gt;</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-ink px-4 py-2 font-medium text-bg transition hover:bg-cyan"
          >
            Me contacter
          </a>
        </nav>
        <button
          className="font-mono text-sm md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? "fermer" : "menu"}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-line px-6 py-5 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-muted">
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
