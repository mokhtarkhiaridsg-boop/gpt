import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commande confirmée",
  robots: { index: false },
};

export default async function Merci({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string }>;
}) {
  const { ref } = await searchParams;

  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <svg viewBox="0 0 64 64" className="mx-auto h-16 w-16 text-olive-500" fill="none" stroke="currentColor" strokeWidth="4" aria-hidden="true">
        <circle cx="32" cy="32" r="28" opacity=".25" />
        <path d="m20 33 8 8 16-18" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <h1 className="mt-6 font-display text-3xl font-semibold tracking-tight">Commande enregistrée</h1>

      {ref && (
        <p className="mt-3 text-ink-700">
          Votre référence :{" "}
          <strong className="font-display font-semibold text-ink-900">{ref}</strong>
        </p>
      )}

      <p className="mt-5 leading-relaxed text-ink-700">
        Nous vous appelons dans les heures qui viennent pour confirmer l&apos;adresse,
        puis le colis part chez notre transporteur. Vous réglerez en espèces au livreur,
        rien à avancer.
      </p>

      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <Link
          href="/boutique"
          className="rounded-full bg-clay-500 px-7 py-3.5 text-sm font-semibold text-sand-50 transition hover:bg-clay-600"
        >
          Continuer mes achats
        </Link>
        <a
          href="tel:+21620000000"
          className="rounded-full border border-ink-900/15 px-7 py-3.5 text-sm font-semibold transition hover:border-clay-400"
        >
          Nous appeler
        </a>
      </div>
    </div>
  );
}
