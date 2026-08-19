import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "L'atelier",
  description:
    "Dar Zina, une marque tunisienne de petits meubles et de décoration : pourquoi de petites pièces, et comment nous travaillons avec les artisans d'ici.",
};

export default function APropos() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-sm font-semibold uppercase tracking-wide text-clay-600">دار زينة</p>
      <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        La maison se décore par petites touches.
      </h1>

      <div className="mt-8 space-y-6 leading-relaxed text-ink-700">
        <p>
          Dar Zina est né d&apos;un constat simple : en Tunisie, acheter un canapé est une
          expédition, mais acheter le tabouret qui va à côté est presque impossible.
          Les grandes enseignes vendent du volume ; les artisans font des merveilles
          mais restent invisibles en ligne. Entre les deux, il n&apos;y avait rien.
        </p>
        <p>
          Nous avons donc choisi le petit meuble. Rien de plus de 60 cm, rien qui
          demande deux personnes pour être porté, rien qui coûte plus cher en transport
          qu&apos;en fabrication. C&apos;est une contrainte, et c&apos;est elle qui dessine tout le
          catalogue : un tabouret d&apos;olivier, une étagère qui voyage à plat, un pouf
          livré en housse à garnir chez soi.
        </p>
        <p>
          Nous travaillons avec des ateliers tunisiens : l&apos;olivier vient du Sud, la
          poterie de Sejnane et de Guellala, l&apos;osier de Nabeul. Certaines pièces sont
          faites à la main, ce qui veut dire qu&apos;aucune n&apos;est exactement identique à la
          photo — un veinage, une nuance d&apos;émail. Nous préférons le dire.
        </p>
        <p>
          Enfin, tout est payable à la livraison. Parce que c&apos;est ainsi que les
          Tunisiens achètent en ligne, et parce que demander une carte bancaire avant
          d&apos;avoir livré quoi que ce soit, c&apos;est demander de la confiance qu&apos;on n&apos;a pas
          encore méritée.
        </p>
      </div>

      <dl className="mt-12 grid gap-6 border-y border-sand-200 py-8 sm:grid-cols-3">
        {[
          [String(PRODUCTS.length), "pièces au catalogue"],
          ["24", "gouvernorats livrés"],
          ["7 j", "pour changer d'avis"],
        ].map(([n, label]) => (
          <div key={label}>
            <dt className="font-display text-3xl font-semibold text-clay-600">{n}</dt>
            <dd className="mt-1 text-sm text-ink-700">{label}</dd>
          </div>
        ))}
      </dl>

      <Link
        href="/boutique"
        className="mt-12 inline-block rounded-full bg-clay-500 px-7 py-3.5 text-sm font-semibold text-sand-50 transition hover:bg-clay-600"
      >
        Découvrir le catalogue
      </Link>
    </div>
  );
}
