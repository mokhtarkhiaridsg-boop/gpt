import type { Metadata } from "next";
import Link from "next/link";
import { formatTND } from "@/lib/money";
import {
  FREE_SHIPPING_THRESHOLD,
  GOVERNORATES,
  ZONE_DELAYS,
  ZONE_FEES,
  type DeliveryZone,
} from "@/lib/governorates";

export const metadata: Metadata = {
  title: "Livraison & retours",
  description:
    "Tarifs de livraison par gouvernorat, délais, paiement à la livraison en espèces et politique de retour sous 7 jours.",
};

const ZONE_LABELS: Record<DeliveryZone, string> = {
  "grand-tunis": "Grand Tunis",
  "nord-est": "Nord & Nord-Ouest",
  centre: "Sahel & Centre",
  sud: "Sud",
};

const ETAPES = [
  { titre: "Vous commandez", texte: "Aucun compte à créer, aucune carte à saisir. Nom, téléphone, adresse — c'est tout." },
  { titre: "On vous appelle", texte: "Un appel de confirmation dans les heures ouvrées qui suivent, pour valider l'adresse." },
  { titre: "Le colis part", texte: "Expédition sous 24 h ouvrées vers notre transporteur partenaire." },
  { titre: "Vous payez au livreur", texte: "En espèces, à la remise du colis. Vous pouvez l'ouvrir devant lui." },
];

export default function Livraison() {
  const zones = Object.keys(ZONE_FEES) as DeliveryZone[];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        Livraison &amp; retours
      </h1>
      <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
        Nous livrons dans les 24 gouvernorats, et vous ne payez qu&apos;au moment où le
        colis arrive. La livraison est offerte à partir de {formatTND(FREE_SHIPPING_THRESHOLD)}.
      </p>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold tracking-tight">Comment ça marche</h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2">
          {ETAPES.map((e, i) => (
            <li key={e.titre} className="rounded-2xl border border-sand-200 bg-white p-5">
              <span className="font-display text-sm font-semibold text-clay-500">0{i + 1}</span>
              <h3 className="mt-1 font-display font-semibold">{e.titre}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-700">{e.texte}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold tracking-tight">Tarifs par zone</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-sand-300 text-left">
                <th scope="col" className="py-3 pr-4 font-display font-semibold">Zone</th>
                <th scope="col" className="py-3 pr-4 font-display font-semibold">Gouvernorats</th>
                <th scope="col" className="py-3 pr-4 font-display font-semibold">Délai</th>
                <th scope="col" className="py-3 text-right font-display font-semibold">Tarif</th>
              </tr>
            </thead>
            <tbody>
              {zones.map((zone) => (
                <tr key={zone} className="border-b border-sand-200 align-top">
                  <th scope="row" className="py-4 pr-4 text-left font-medium">{ZONE_LABELS[zone]}</th>
                  <td className="py-4 pr-4 text-ink-700">
                    {GOVERNORATES.filter((g) => g.zone === zone).map((g) => g.name).join(", ")}
                  </td>
                  <td className="py-4 pr-4 whitespace-nowrap text-ink-700">{ZONE_DELAYS[zone]}</td>
                  <td className="py-4 text-right whitespace-nowrap font-medium">{formatTND(ZONE_FEES[zone])}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-ink-700">
          Livraison offerte, toutes zones confondues, dès {formatTND(FREE_SHIPPING_THRESHOLD)} d&apos;achat.
        </p>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold tracking-tight">Retours</h2>
        <p className="mt-4 leading-relaxed text-ink-700">
          Vous avez 7 jours à compter de la réception pour nous renvoyer une pièce qui
          ne vous convient pas, dans son emballage d&apos;origine et non montée. Nous vous
          remboursons le prix de l&apos;article ; les frais de retour restent à votre charge,
          sauf si le colis est arrivé abîmé ou si nous nous sommes trompés d&apos;article —
          dans ce cas nous prenons tout en charge.
        </p>
        <p className="mt-4 leading-relaxed text-ink-700">
          Un souci avec une commande ? Appelez le{" "}
          <a href="tel:+21620000000" className="font-medium text-clay-600 underline underline-offset-2">
            +216 20 000 000
          </a>{" "}
          ou écrivez à{" "}
          <a href="mailto:bonjour@darzina.tn" className="font-medium text-clay-600 underline underline-offset-2">
            bonjour@darzina.tn
          </a>
          , en indiquant votre référence de commande.
        </p>
      </section>

      <Link
        href="/boutique"
        className="mt-14 inline-block rounded-full bg-clay-500 px-7 py-3.5 text-sm font-semibold text-sand-50 transition hover:bg-clay-600"
      >
        Voir la boutique
      </Link>
    </div>
  );
}
