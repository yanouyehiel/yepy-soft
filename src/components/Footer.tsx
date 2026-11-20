import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-xs text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>Conçu avec Next.js, Tailwind & GSAP</span>
      </div>
    </footer>
  );
}
