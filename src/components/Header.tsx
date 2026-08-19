"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import CartBadge from "./CartBadge";
import { CATEGORIES } from "@/lib/products";

const LINKS = [
  { href: "/boutique", label: "Boutique" },
  { href: "/livraison", label: "Livraison" },
  { href: "/a-propos", label: "L'atelier" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-sand-200 bg-sand-50/90 backdrop-blur">
      <p className="bg-ink-900 px-4 py-2 text-center text-xs text-sand-100">
        Paiement à la livraison partout en Tunisie · Livraison offerte dès 199&nbsp;DT
      </p>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" aria-label="Dar Zina — accueil">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 text-sm md:flex">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-ink-700 transition hover:text-clay-500">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CartBadge />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            className="rounded-full border border-sand-200 p-2 md:hidden"
          >
            <span className="sr-only">Menu</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div id="menu-mobile" className="border-t border-sand-200 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-ink-700">
                {l.label}
              </Link>
            ))}
            <hr className="border-sand-200" />
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                href={`/boutique?c=${c.slug}`}
                onClick={() => setOpen(false)}
                className="text-ink-700"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
