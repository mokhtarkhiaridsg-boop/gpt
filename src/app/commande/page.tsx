"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useMemo, useState, type FormEvent } from "react";
import { useCart } from "@/lib/cart";
import { formatTND } from "@/lib/money";
import {
  FREE_SHIPPING_THRESHOLD,
  GOVERNORATES,
  ZONE_DELAYS,
  findGovernorate,
  shippingFor,
} from "@/lib/governorates";

export default function Commande() {
  const router = useRouter();
  const { items, lines, subtotal, ready, clear } = useCart();

  const [gouvernorat, setGouvernorat] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const shipping = useMemo(
    () => shippingFor(gouvernorat || null, subtotal),
    [gouvernorat, subtotal],
  );
  const delai = gouvernorat ? ZONE_DELAYS[findGovernorate(gouvernorat)!.zone] : null;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setPending(true);

    const data = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/commandes", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          nom: data.get("nom"),
          telephone: data.get("telephone"),
          gouvernorat: data.get("gouvernorat"),
          ville: data.get("ville"),
          adresse: data.get("adresse"),
          notes: data.get("notes"),
          lines,
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.ok) {
        setError(result.error ?? "La commande n'a pas pu être enregistrée.");
        setPending(false);
        return;
      }
      clear();
      router.push(`/commande/merci?ref=${encodeURIComponent(result.reference)}`);
    } catch {
      setError("Connexion interrompue. Vérifiez votre réseau et réessayez.");
      setPending(false);
    }
  }

  if (!ready) {
    return <div className="mx-auto max-w-6xl px-4 py-20 text-ink-700">Chargement…</div>;
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <h1 className="font-display text-3xl font-semibold tracking-tight">Rien à commander</h1>
        <p className="mt-3 text-ink-700">Votre panier est vide.</p>
        <Link
          href="/boutique"
          className="mt-8 inline-block rounded-full bg-clay-500 px-7 py-3.5 text-sm font-semibold text-sand-50 transition hover:bg-clay-600"
        >
          Voir la boutique
        </Link>
      </div>
    );
  }

  const field =
    "mt-1.5 w-full rounded-xl border border-sand-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-clay-400 focus:ring-2 focus:ring-clay-400/25";

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        Finaliser la commande
      </h1>
      <p className="mt-2 text-ink-700">
        Vous payez en espèces à la réception. Aucune carte bancaire n&apos;est demandée.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_22rem]">
        <form onSubmit={submit} className="space-y-5">
          <div>
            <label htmlFor="nom" className="text-sm font-medium">Nom et prénom</label>
            <input id="nom" name="nom" required minLength={3} autoComplete="name" className={field} placeholder="Amine Ben Salah" />
          </div>

          <div>
            <label htmlFor="telephone" className="text-sm font-medium">Téléphone</label>
            <input
              id="telephone"
              name="telephone"
              required
              inputMode="numeric"
              pattern="[0-9\s]{8,11}"
              autoComplete="tel-national"
              className={field}
              placeholder="20 000 000"
            />
            <p className="mt-1.5 text-xs text-ink-700">
              8 chiffres. Le livreur vous appelle avant de passer.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="gouvernorat" className="text-sm font-medium">Gouvernorat</label>
              <select
                id="gouvernorat"
                name="gouvernorat"
                required
                value={gouvernorat}
                onChange={(e) => setGouvernorat(e.target.value)}
                className={field}
              >
                <option value="" disabled>Choisir…</option>
                {GOVERNORATES.map((g) => (
                  <option key={g.name} value={g.name}>{g.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="ville" className="text-sm font-medium">Ville / délégation</label>
              <input id="ville" name="ville" required minLength={2} className={field} placeholder="La Marsa" />
            </div>
          </div>

          <div>
            <label htmlFor="adresse" className="text-sm font-medium">Adresse complète</label>
            <textarea
              id="adresse"
              name="adresse"
              required
              minLength={5}
              rows={3}
              className={field}
              placeholder="Rue, immeuble, étage, appartement, point de repère"
            />
          </div>

          <div>
            <label htmlFor="notes" className="text-sm font-medium">
              Remarques <span className="font-normal text-ink-700">(facultatif)</span>
            </label>
            <textarea id="notes" name="notes" rows={2} className={field} placeholder="Livrer après 17 h, sonner chez le voisin…" />
          </div>

          {error && (
            <p role="alert" className="rounded-xl bg-clay-500/10 px-4 py-3 text-sm text-clay-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-full bg-clay-500 px-6 py-4 text-sm font-semibold text-sand-50 transition hover:bg-clay-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {pending ? "Envoi en cours…" : `Confirmer — ${formatTND(subtotal + shipping)} à la livraison`}
          </button>
        </form>

        <aside className="h-fit rounded-2xl border border-sand-200 bg-white p-6">
          <h2 className="font-display text-lg font-semibold">Votre commande</h2>

          <ul className="mt-4 space-y-3 text-sm">
            {items.map(({ product, qty, lineTotal }) => (
              <li key={product.slug} className="flex justify-between gap-4">
                <span className="text-ink-700">
                  {product.name} <span className="text-xs">× {qty}</span>
                </span>
                <span className="shrink-0 font-medium">{formatTND(lineTotal)}</span>
              </li>
            ))}
          </ul>

          <dl className="mt-5 space-y-2 border-t border-sand-200 pt-4 text-sm">
            <div className="flex justify-between">
              <dt className="text-ink-700">Sous-total</dt>
              <dd>{formatTND(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-ink-700">Livraison</dt>
              <dd>{shipping === 0 ? "Offerte" : formatTND(shipping)}</dd>
            </div>
          </dl>

          <p className="mt-4 flex justify-between border-t border-sand-200 pt-4 font-display text-lg font-semibold">
            <span>À payer</span>
            <span className="text-clay-600">{formatTND(subtotal + shipping)}</span>
          </p>

          {subtotal >= FREE_SHIPPING_THRESHOLD && (
            <p className="mt-3 text-xs text-olive-600">Livraison offerte sur cette commande.</p>
          )}
          {delai && <p className="mt-3 text-xs text-ink-700">Délai estimé : {delai}.</p>}
          {!gouvernorat && (
            <p className="mt-3 text-xs text-ink-700">
              Choisissez votre gouvernorat pour le tarif exact.
            </p>
          )}
        </aside>
      </div>
    </div>
  );
}
