"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import { gsap } from "@/lib/gsap";

const navLinks = [
  { href: "/#apropos", label: "À propos" },
  { href: "/#parcours", label: "Parcours" },
  { href: "/#realisations", label: "Réalisations" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(headerRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      style={{ opacity: 0, transform: "translateY(-32px)" }}
      className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/#top" className="text-lg font-semibold tracking-tight">
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-foreground/70 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Discutons
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-px w-6 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 px-6 pb-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-3 text-sm text-foreground/80 hover:bg-white/5"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
