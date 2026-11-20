import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact — Yepy Soft",
  description: "Contactez Yepy Soft pour discuter de votre projet web ou mobile.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-sm font-medium uppercase tracking-widest text-accent">Contact</h1>
          <p className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            Un projet en tête ? Parlons-en.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-foreground/60">
            Décrivez votre projet ci-dessous, je réponds sous 48h. Vous pouvez aussi m&apos;écrire directement
            à{" "}
            <a href={`mailto:${site.email}`} className="text-accent hover:underline">
              {site.email}
            </a>
            .
          </p>

          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
