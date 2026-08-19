"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getProduct, type Product } from "./products";
import type { Millimes } from "./money";

const STORAGE_KEY = "darzina.cart.v1";

export type CartLine = { slug: string; qty: number };
export type HydratedLine = { product: Product; qty: number; lineTotal: Millimes };

type CartValue = {
  lines: CartLine[];
  items: HydratedLine[];
  count: number;
  subtotal: Millimes;
  /** false tant que le localStorage n'a pas été relu — évite un flash de panier vide. */
  ready: boolean;
  add: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartValue | null>(null);

function readStorage(): CartLine[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter(
        (l): l is CartLine =>
          typeof l === "object" &&
          l !== null &&
          typeof (l as CartLine).slug === "string" &&
          typeof (l as CartLine).qty === "number",
      )
      .filter((l) => getProduct(l.slug) && l.qty > 0);
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLines(readStorage());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // Stockage plein ou navigation privée : le panier reste valable en mémoire.
    }
  }, [lines, ready]);

  const add = useCallback((slug: string, qty = 1) => {
    const product = getProduct(slug);
    if (!product) return;
    setLines((prev) => {
      const existing = prev.find((l) => l.slug === slug);
      const next = (existing?.qty ?? 0) + qty;
      const capped = Math.min(next, product.stock);
      if (existing) return prev.map((l) => (l.slug === slug ? { ...l, qty: capped } : l));
      return [...prev, { slug, qty: capped }];
    });
  }, []);

  const setQty = useCallback((slug: string, qty: number) => {
    const product = getProduct(slug);
    if (!product) return;
    if (qty <= 0) {
      setLines((prev) => prev.filter((l) => l.slug !== slug));
      return;
    }
    const capped = Math.min(qty, product.stock);
    setLines((prev) => prev.map((l) => (l.slug === slug ? { ...l, qty: capped } : l)));
  }, []);

  const remove = useCallback((slug: string) => {
    setLines((prev) => prev.filter((l) => l.slug !== slug));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const value = useMemo<CartValue>(() => {
    const items: HydratedLine[] = lines.flatMap((l) => {
      const product = getProduct(l.slug);
      return product ? [{ product, qty: l.qty, lineTotal: product.price * l.qty }] : [];
    });
    return {
      lines,
      items,
      count: items.reduce((n, i) => n + i.qty, 0),
      subtotal: items.reduce((n, i) => n + i.lineTotal, 0),
      ready,
      add,
      setQty,
      remove,
      clear,
    };
  }, [lines, ready, add, setQty, remove, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart doit être utilisé dans un <CartProvider>");
  return ctx;
}
