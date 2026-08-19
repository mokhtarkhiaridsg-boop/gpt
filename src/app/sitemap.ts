import type { MetadataRoute } from "next";
import { CATEGORIES, PRODUCTS } from "@/lib/products";

const BASE = "https://darzina.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, priority: 1 },
    { url: `${BASE}/boutique`, priority: 0.9 },
    { url: `${BASE}/livraison`, priority: 0.6 },
    { url: `${BASE}/a-propos`, priority: 0.5 },
    ...CATEGORIES.map((c) => ({ url: `${BASE}/boutique?c=${c.slug}`, priority: 0.7 })),
    ...PRODUCTS.map((p) => ({ url: `${BASE}/produit/${p.slug}`, priority: 0.8 })),
  ];
}
