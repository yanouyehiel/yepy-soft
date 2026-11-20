"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProjectCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);

  if (images.length === 0) return null;

  const show = (i: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIndex(i);
  };

  const step = (dir: 1 | -1) => (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIndex((i) => (i + dir + images.length) % images.length);
  };

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/30">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${alt} — visuel ${i + 1}`}
          fill
          sizes="(min-width: 1024px) 360px, 100vw"
          className={`object-cover transition-opacity duration-300 ${i === index ? "opacity-100" : "opacity-0"}`}
          priority={i === 0}
        />
      ))}

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={step(-1)}
            aria-label="Visuel précédent"
            className="absolute left-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={step(1)}
            aria-label="Visuel suivant"
            className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100"
          >
            ›
          </button>

          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={show(i)}
                aria-label={`Aller au visuel ${i + 1}`}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${i === index ? "bg-white" : "bg-white/40"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
