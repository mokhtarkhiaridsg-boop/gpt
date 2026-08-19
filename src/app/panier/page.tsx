"use client";

import Link from "next/link";
import ProductArt from "@/components/ProductArt";
import { useCart } from "@/lib/cart";
import { PRODUCTS } from "@/lib/products";
import { formatTND } from "@/lib/money";
import { FREE_SHIPPING_THRESHOLD, ZONE_FEES } from "@/lib/governorates";

export default function Panier() {
  const { items, subtotal, setQty, remove, ready } = useCart();
  const manqueLivraisonOfferte = FREE_SHIPPING_THRESHOLD - subtotal;

  if (!ready) {
    return <div className="mx-auto max-w-6xl px-4 py-20 text-ink-700">Chargement du panier…</div>;
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <h1 className="font-display text-3xl font-semibold tracking-tight">Votre panier est vide</h1>
        <p className="mt-3 text-ink-700">
          Il reste {PRODUCTS.length} pièces à découvrir dans la boutique.
        </p>
        <Link
          href="/boutique"
          className="mt-8 inline-block rounded-full bg-clay-500 px-7 py-3.5 text-sm font-semibold text-sand-50 transition hover:bg-clay-600"
        >
          Voir la boutique
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Votre panier</h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_22rem]">
        <ul className="divide-y divide-sand-200 border-y border-sand-200">
          {items.map(({ product, qty, lineTotal }) => (
            <li key={product.slug} className="flex gap-4 py-5">
              <Link href={`/produit/${product.slug}`} className="shrink-0">
                <ProductArt product={product} className="h-24 w-24 rounded-xl border border-sand-200" />
              </Link>

              <div className="flex flex-1 flex-col gap-1">
                <Link href={`/produit/${product.slug}`} className="font-display font-semibold hover:text-clay-500">
                  {product.name}
                </Link>
                <p className="text-xs text-ink-700">{product.dimensions}</p>

                <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
                  <div className="flex items-center rounded-full border border-sand-200">
                    <button
                      type="button"
                      onClick={() => setQty(product.slug, qty - 1)}
                      className="px-3 py-1.5 leading-none text-ink-700 hover:text-clay-500"
                      aria-label={`Diminuer la quantité de ${product.name}`}
                    >
                      −
                    </button>
                    <span className="w-7 text-center text-sm">{qty}</span>
                    <button
                      type="button"
                      onClick={() => setQty(product.slug, qty + 1)}
                      className="px-3 py-1.5 leading-none text-ink-700 hover:text-clay-500"
                      aria-label={`Augmenter la quantité de ${product.name}`}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => remove(product.slug)}
                    className="text-xs text-ink-700 underline underline-offset-2 hover:text-clay-500"
                  >
                    Retirer
                  </button>
                </div>
              </div>

              <p className="font-display font-semibold">{formatTND(lineTotal)}</p>
            </li>
          ))}
        </ul>

        <aside className="h-fit rounded-2xl border border-sand-200 bg-white p-6">
          <h2 className="font-display text-lg font-semibold">Récapitulatif</h2>

          <dl className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-ink-700">Sous-total</dt>
              <dd className="font-medium">{formatTND(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-ink-700">Livraison</dt>
              <dd className="font-medium">
                {subtotal >= FREE_SHIPPING_THRESHOLD
                  ? "Offerte"
                  : `dès ${formatTND(ZONE_FEES["grand-tunis"])}`}
              </dd>
            </div>
          </dl>

          {manqueLivraisonOfferte > 0 && (
            <p className="mt-4 rounded-xl bg-olive-500/10 px-4 py-3 text-xs text-olive-600">
              Plus que {formatTND(manqueLivraisonOfferte)} pour la livraison offerte.
            </p>
          )}

          <p className="mt-5 flex justify-between border-t border-sand-200 pt-4 font-display text-lg font-semibold">
            <span>Total</span>
            <span className="text-clay-600">{formatTND(subtotal)}</span>
          </p>
          <p className="mt-1 text-xs text-ink-700">Frais de livraison calculés à l&apos;étape suivante.</p>

          <Link
            href="/commande"
            className="mt-6 block rounded-full bg-clay-500 px-6 py-3.5 text-center text-sm font-semibold text-sand-50 transition hover:bg-clay-600"
          >
            Commander
          </Link>
          <Link
            href="/boutique"
            className="mt-3 block text-center text-sm text-ink-700 underline underline-offset-2 hover:text-clay-500"
          >
            Continuer mes achats
          </Link>
        </aside>
      </div>
    </div>
  );
}
