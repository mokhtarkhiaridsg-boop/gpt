import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <p className="font-display text-5xl font-semibold text-clay-500">404</p>
      <h1 className="mt-4 font-display text-2xl font-semibold tracking-tight">
        Cette page n&apos;existe pas
      </h1>
      <p className="mt-3 text-ink-700">
        Le lien est peut-être ancien, ou la pièce a quitté le catalogue.
      </p>
      <Link
        href="/boutique"
        className="mt-8 inline-block rounded-full bg-clay-500 px-7 py-3.5 text-sm font-semibold text-sand-50 transition hover:bg-clay-600"
      >
        Retour à la boutique
      </Link>
    </div>
  );
}
