"use client";

import { useEffect, useRef } from "react";
import { site } from "@/data/site";
import { gsap } from "@/lib/gsap";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-item", {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="border-t border-white/10 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="contact-item text-sm font-medium uppercase tracking-widest text-accent">Contact</h2>
        <p className="contact-item mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
          Un projet en tête ? Parlons-en.
        </p>
        <p className="contact-item mx-auto mt-4 max-w-xl text-foreground/60">
          Que ce soit pour développer une nouvelle application, moderniser un système existant ou obtenir un
          avis technique, je réponds sous 48h.
        </p>

        <div className="contact-item mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
