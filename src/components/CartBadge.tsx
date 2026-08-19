"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";

export default function CartBadge() {
  const { count, ready } = useCart();
  return (
    <Link
      href="/panier"
      className="relative inline-flex items-center gap-2 rounded-full bg-ink-900 px-4 py-2 text-sm font-medium text-sand-50 transition hover:bg-clay-500"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M4 6h16l-1.6 11.2a2 2 0 0 1-2 1.8H7.6a2 2 0 0 1-2-1.8Z" strokeLinejoin="round" />
        <path d="M9 6a3 3 0 0 1 6 0" strokeLinecap="round" />
      </svg>
      <span>Panier</span>
      <span
        aria-live="polite"
        className="min-w-5 rounded-full bg-clay-500 px-1.5 text-center text-xs font-semibold leading-5 text-sand-50"
      >
        {ready ? count : 0}
      </span>
    </Link>
  );
}
