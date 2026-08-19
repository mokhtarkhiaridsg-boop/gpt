import Link from "next/link";
import Logo from "./Logo";
import { CATEGORIES } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-sand-200 bg-sand-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-700">
            Petits meubles et décoration, dessinés pour les appartements tunisiens et
            expédiés dans des colis qui ne coûtent pas le prix du meuble.
          </p>
        </div>

        <nav aria-label="Catégories">
          <h2 className="font-display text-sm font-semibold">Catégories</h2>
          <ul className="mt-4 space-y-2 text-sm text-ink-700">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link href={`/boutique?c=${c.slug}`} className="transition hover:text-clay-500">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Informations">
          <h2 className="font-display text-sm font-semibold">Infos</h2>
          <ul className="mt-4 space-y-2 text-sm text-ink-700">
            <li><Link href="/livraison" className="transition hover:text-clay-500">Livraison &amp; retours</Link></li>
            <li><Link href="/a-propos" className="transition hover:text-clay-500">L&apos;atelier</Link></li>
            <li><Link href="/boutique" className="transition hover:text-clay-500">Tout le catalogue</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold">Nous joindre</h2>
          <ul className="mt-4 space-y-2 text-sm text-ink-700">
            <li>
              <a href="tel:+21620000000" className="transition hover:text-clay-500">+216 20 000 000</a>
            </li>
            <li>
              <a href="mailto:bonjour@darzina.tn" className="transition hover:text-clay-500">bonjour@darzina.tn</a>
            </li>
            <li>Lun – Sam · 9 h – 18 h</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sand-200 px-4 py-6 text-center text-xs text-ink-700">
        © {new Date().getFullYear()} Dar Zina · Tunis, Tunisie · Prix en dinars tunisiens, TVA incluse
      </div>
    </footer>
  );
}
