import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import ProductArt from "@/components/ProductArt";
import { CATEGORIES, FEATURED, PRODUCTS } from "@/lib/products";
import { formatTND } from "@/lib/money";
import { FREE_SHIPPING_THRESHOLD, ZONE_FEES } from "@/lib/governorates";

const ARGUMENTS = [
  {
    title: "Paiement à la livraison",
    body: "Vous payez le livreur, en espèces, une fois le colis dans les mains. Aucune carte demandée.",
  },
  {
    title: "Livré dans les 24 gouvernorats",
    body: `Dès ${formatTND(ZONE_FEES["grand-tunis"])} sur le Grand Tunis, offert au-dessus de ${formatTND(FREE_SHIPPING_THRESHOLD)}.`,
  },
  {
    title: "Pensé pour les petits espaces",
    body: "Rien qui dépasse 60 cm : des pièces qui tiennent dans un S+1 sans l'encombrer.",
  },
  {
    title: "Artisanat tunisien",
    body: "Olivier de Nefta, poterie de Sejnane, osier de Nabeul — travaillés par des ateliers d'ici.",
  },
];

export default function Home() {
  const nouveautes = PRODUCTS.filter((p) => !p.featured).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-sand-200 bg-sand-100">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="inline-flex rounded-full bg-clay-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-clay-600">
              دار زينة · Fabriqué et livré en Tunisie
            </p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              Le petit meuble qui change toute la pièce.
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-700">
              Un tabouret, une étagère, un miroir. Des pièces courtes, faciles à
              caser, expédiées dans un carton qui ne coûte pas le prix du meuble —
              et payées à la livraison.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/boutique"
                className="rounded-full bg-clay-500 px-7 py-3.5 text-sm font-semibold text-sand-50 transition hover:bg-clay-600"
              >
                Voir la boutique
              </Link>
              <Link
                href="/livraison"
                className="rounded-full border border-ink-900/15 px-7 py-3.5 text-sm font-semibold transition hover:border-clay-400 hover:text-clay-600"
              >
                Frais de livraison
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {FEATURED.slice(0, 4).map((p, i) => (
              <Link
                key={p.slug}
                href={`/produit/${p.slug}`}
                className={`overflow-hidden rounded-2xl border border-sand-200 bg-white transition hover:border-clay-400 ${
                  i % 2 === 1 ? "sm:translate-y-6" : ""
                }`}
              >
                <ProductArt product={p} className="aspect-square w-full" />
                <p className="px-3 py-2.5 text-xs font-medium">{p.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Arguments */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ARGUMENTS.map((a) => (
            <li key={a.title} className="rounded-2xl border border-sand-200 bg-white p-5">
              <h2 className="font-display text-base font-semibold">{a.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{a.body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Sélection */}
      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              La sélection de la maison
            </h2>
            <p className="mt-2 text-ink-700">Quatre pièces par lesquelles commencer.</p>
          </div>
          <Link href="/boutique" className="hidden shrink-0 text-sm font-semibold text-clay-600 hover:underline sm:block">
            Tout voir →
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Catégories */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">Par catégorie</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/boutique?c=${c.slug}`}
              className="rounded-2xl border border-sand-200 bg-white p-6 transition hover:border-clay-400 hover:shadow-md"
            >
              <h3 className="font-display text-lg font-semibold">{c.label}</h3>
              <p className="mt-1.5 text-sm text-ink-700">{c.blurb}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-clay-600">Découvrir →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Nouveautés */}
      <section className="mx-auto max-w-6xl px-4 pb-6">
        <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">Derniers arrivages</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {nouveautes.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Bandeau livraison */}
      <section className="mx-auto mt-16 max-w-6xl px-4">
        <div className="rounded-3xl bg-ink-900 px-6 py-12 text-sand-100 sm:px-12">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Payez quand le colis arrive.
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-sand-200">
            Pas de carte bancaire, pas d&apos;acompte. Vous commandez, notre transporteur
            vous appelle, vous réglez en espèces à la remise du colis. Et si la pièce
            ne vous plaît pas, vous avez 7 jours pour nous la renvoyer.
          </p>
          <Link
            href="/livraison"
            className="mt-8 inline-block rounded-full bg-sand-50 px-7 py-3.5 text-sm font-semibold text-ink-900 transition hover:bg-clay-400 hover:text-sand-50"
          >
            Comment ça marche
          </Link>
        </div>
      </section>
    </>
  );
}
