"use client";

import { useState, type FormEvent } from "react";

const CONTACT_ENDPOINT = "https://api.gesco-app.com/v2/email/portfolio-contact";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      subject: String(data.get("subject") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    setStatus("submitting");

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl text-left">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="text-sm font-medium text-foreground/70">
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="email" className="text-sm font-medium text-foreground/70">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="subject" className="text-sm font-medium text-foreground/70">
            Sujet
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground/70">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
          />
        </div>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "submitting" ? "Envoi..." : "Envoyer le message"}
        </button>

        {status === "success" && (
          <p className="text-sm text-emerald-400">Message envoyé, merci ! Je reviens vers vous sous 48h.</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-400">Une erreur est survenue. Réessayez ou écrivez-moi directement par email.</p>
        )}
      </div>
    </form>
  );
}
