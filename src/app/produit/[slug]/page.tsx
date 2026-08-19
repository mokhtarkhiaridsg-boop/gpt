import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductArt from "@/components/ProductArt";
import ProductCard from "@/components/ProductCard";
import AddToCart from "@/components/AddToCart";
import { CATEGORIES, PRODUCTS, getProduct } from "@/lib/products";
import { formatTND } from "@/lib/money";
import { FREE_SHIPPING_THRESHOLD, ZONE_FEES } from "@/lib/governorates";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Produit introuvable" };
  return {
    title: product.name,
    description: product.description.slice(0, 160),
    openGraph: { title: `${product.name} · Dar Zina`, description: product.description.slice(0, 160) },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = CATEGORIES.find((c) => c.slug === product.category)!;
  const related = PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    material: product.material,
    offers: {
      "@type": "Offer",
      price: (product.price / 1000).toFixed(3),
      priceCurrency: "TND",
      availability:
        product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    },
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <nav aria-label="Fil d'Ariane" className="text-sm text-ink-700">
        <Link href="/boutique" className="hover:text-clay-500">Boutique</Link>
        <span className="mx-2">/</span>
        <Link href={`/boutique?c=${category.slug}`} className="hover:text-clay-500">{category.label}</Link>
        <span className="mx-2">/</span>
        <span className="text-ink-900">{product.name}</span>
      </nav>

      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-sand-200 bg-white">
          <ProductArt product={product} className="aspect-square w-full" />
        </div>

        <div>
          <p className="text-sm text-ink-700">{product.origin}</p>
          <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {product.name}
          </h1>

          <p className="mt-4 flex items-baseline gap-3">
            <span className="font-display text-3xl font-semibold text-clay-600">
              {formatTND(product.price)}
            </span>
            {product.compareAt && (
              <span className="text-lg text-ink-700 line-through">{formatTND(product.compareAt)}</span>
            )}
          </p>
          <p className="mt-1 text-sm text-ink-700">
            TVA incluse · livraison dès {formatTND(ZONE_FEES["grand-tunis"])}, offerte à partir de{" "}
            {formatTND(FREE_SHIPPING_THRESHOLD)}
          </p>

          <p className="mt-6 leading-relaxed text-ink-700">{product.description}</p>

          <ul className="mt-6 space-y-2">
            {product.highlights.map((h) => (
              <li key={h} className="flex gap-2.5 text-sm">
                <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-olive-500" fill="currentColor" aria-hidden="true">
                  <path d="M8.2 13.6 5 10.4l1.3-1.3 1.9 1.9 5.5-5.5L15 6.8z" />
                </svg>
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <AddToCart product={product} />
          </div>

          <dl className="mt-10 divide-y divide-sand-200 border-t border-sand-200 text-sm">
            {[
              ["Dimensions", product.dimensions],
              ["Matière", product.material],
              ["Poids du colis", `${(product.weightGrams / 1000).toFixed(1)} kg`],
              ["Disponibilité", product.stock > 0 ? `${product.stock} en stock` : "Rupture"],
            ].map(([term, value]) => (
              <div key={term} className="flex justify-between gap-6 py-3">
                <dt className="text-ink-700">{term}</dt>
                <dd className="text-right font-medium">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-2xl font-semibold tracking-tight">Dans la même famille</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
