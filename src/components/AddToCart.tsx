"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import type { Product } from "@/lib/products";

export default function AddToCart({ product }: { product: Product }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const soldOut = product.stock <= 0;

  function handleAdd() {
    add(product.slug, qty);
    setAdded(true);
  }

  if (soldOut) {
    return (
      <p className="rounded-xl bg-sand-100 px-4 py-3 text-sm text-ink-700">
        Rupture de stock — réapprovisionnement sous 2 semaines.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <div className="flex items-center rounded-full border border-sand-200">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="px-3.5 py-2 text-lg leading-none text-ink-700 transition hover:text-clay-500"
            aria-label="Diminuer la quantité"
          >
            −
          </button>
          <span aria-live="polite" className="w-8 text-center text-sm font-medium">{qty}</span>
          <button
            type="button"
            onClick={() => setQty((q) => Math.min(product.stock, q + 1))}
            className="px-3.5 py-2 text-lg leading-none text-ink-700 transition hover:text-clay-500"
            aria-label="Augmenter la quantité"
          >
            +
          </button>
        </div>

        <button
          type="button"
          onClick={handleAdd}
          className="flex-1 rounded-full bg-clay-500 px-6 py-3 text-sm font-semibold text-sand-50 transition hover:bg-clay-600"
        >
          Ajouter au panier
        </button>
      </div>

      {added && (
        <p className="flex items-center justify-between gap-3 rounded-xl bg-olive-500/10 px-4 py-3 text-sm text-olive-600">
          <span>Ajouté au panier.</span>
          <Link href="/panier" className="font-semibold underline underline-offset-2">
            Voir le panier
          </Link>
        </p>
      )}
    </div>
  );
}
