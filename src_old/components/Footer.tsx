"use client";

import { useEffect, useRef } from "react";
import { site } from "@/data/site";
import { gsap } from "@/lib/gsap";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(footerRef.current, {
        opacity: 0,
        y: 12,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-foreground/40 sm:flex-row">
        <p>© {new Date().getFullYear()} {site.name}. Tous droits réservés.</p>
        <a href={`mailto:${site.email}`} className="hover:text-foreground/70">
          {site.email}
        </a>
      </div>
    </footer>
  );
}
