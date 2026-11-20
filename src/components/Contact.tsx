"use client";

import { useState } from "react";
import { site } from "@/data/site";

function CopyEmail() {
  const [done, setDone] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(site.email);
        setDone(true);
        setTimeout(() => setDone(false), 1800);
      }}
      className="rounded-full border border-line px-6 py-3 font-mono text-sm transition hover:border-ink"
    >
      {done ? "Copié ✓" : "Copier l'email"}
    </button>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-32">
      <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface p-10 text-center md:p-20">
        <div className="absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-accent/25 blur-[100px]" />
        <div className="relative">
          <p data-reveal className="font-mono text-sm text-accent">
            05 — Contact
          </p>
          <h2 data-reveal className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            Un projet en tête ? <span className="text-gradient">Construisons-le.</span>
          </h2>
          <p data-reveal className="mx-auto mt-6 max-w-xl text-lg text-muted">
            Parlez-moi de votre besoin : je reviens vers vous rapidement avec une proposition claire.
          </p>
          <div data-reveal className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="rounded-full bg-accent px-7 py-3.5 font-medium transition hover:shadow-[0_0_40px_-5px_var(--color-accent)]"
            >
              {site.email}
            </a>
            <CopyEmail />
          </div>
          <div data-reveal className="mt-8 flex flex-wrap justify-center gap-6 font-mono text-sm text-muted">
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink">
              LinkedIn ↗
            </a>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-ink">
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
