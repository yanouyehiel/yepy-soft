"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = ref.current;
    if (!el) return;
    const x = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3" });
    const y = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3" });
    const move = (e: MouseEvent) => {
      x(e.clientX - 250);
      y(e.clientY - 250);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[500px] w-[500px] rounded-full opacity-60 [background:radial-gradient(circle,rgba(124,92,255,0.18),transparent_65%)] md:block"
    />
  );
}
