import Link from "next/link";
import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { CATEGORIES, PRODUCTS, type Category } from "@/lib/products";

export const metadata: Metadata = {
  title: "Boutique",
  description:
    "Tout le catalogue Dar Zina : tabourets, tables d'appoint, miroirs, étagères, paniers et luminaires livrés partout en Tunisie.",
};

function isCategory(value: string | undefined): value is Category {
  return CATEGORIES.some((c) => c.slug === value);
}

export default async function Boutique({
  searchParams,
}: {
  searchParams: Promise<{ c?: string }>;
}) {
  const { c } = await searchParams;
  const active = isCategory(c) ? c : null;
  const products = active ? PRODUCTS.filter((p) => p.category === active) : PRODUCTS;
  const heading = active ? CATEGORIES.find((x) => x.slug === active)!.label : "Tout le catalogue";

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{heading}</h1>
      <p className="mt-2 text-ink-700">
        {products.length} pièce{products.length > 1 ? "s" : ""} · expédiées sous 24 h ouvrées
      </p>

      <nav aria-label="Filtrer par catégorie" className="mt-8 flex flex-wrap gap-2">
        <Link
          href="/boutique"
          aria-current={active === null ? "page" : undefined}
          className={`rounded-full border px-4 py-2 text-sm transition ${
            active === null
              ? "border-clay-500 bg-clay-500 text-sand-50"
              : "border-sand-200 bg-white text-ink-700 hover:border-clay-400"
          }`}
        >
          Tout
        </Link>
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.slug}
            href={`/boutique?c=${cat.slug}`}
            aria-current={active === cat.slug ? "page" : undefined}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              active === cat.slug
                ? "border-clay-500 bg-clay-500 text-sand-50"
                : "border-sand-200 bg-white text-ink-700 hover:border-clay-400"
            }`}
          >
            {cat.label}
          </Link>
        ))}
      </nav>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
