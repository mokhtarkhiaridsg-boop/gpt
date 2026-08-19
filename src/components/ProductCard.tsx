import Link from "next/link";
import ProductArt from "./ProductArt";
import { formatTND } from "@/lib/money";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const lowStock = product.stock > 0 && product.stock <= 10;
  return (
    <Link
      href={`/produit/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-sand-200 bg-white transition hover:-translate-y-0.5 hover:border-clay-400 hover:shadow-lg hover:shadow-sand-300/40"
    >
      <div className="relative">
        <ProductArt product={product} className="aspect-[10/9] w-full" />
        {product.compareAt && (
          <span className="absolute left-3 top-3 rounded-full bg-clay-500 px-2.5 py-1 text-xs font-semibold text-sand-50">
            Promo
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="font-display font-semibold leading-tight">{product.name}</h3>
        <p className="text-xs text-ink-700">{product.origin}</p>
        <p className="mt-auto pt-3 flex items-baseline gap-2">
          <span className="font-display text-lg font-semibold text-clay-600">{formatTND(product.price)}</span>
          {product.compareAt && (
            <span className="text-sm text-ink-700 line-through">{formatTND(product.compareAt)}</span>
          )}
        </p>
        {lowStock && <p className="text-xs text-olive-600">Plus que {product.stock} en stock</p>}
      </div>
    </Link>
  );
}
