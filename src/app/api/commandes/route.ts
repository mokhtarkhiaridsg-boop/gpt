import { NextResponse } from "next/server";
import { getProduct } from "@/lib/products";
import { findGovernorate, shippingFor } from "@/lib/governorates";
import { formatTND } from "@/lib/money";

/** 8 chiffres, comme tous les numéros tunisiens. */
const PHONE = /^\d{8}$/;

type IncomingLine = { slug: string; qty: number };

function badRequest(message: string) {
  return NextResponse.json({ ok: false, error: message }, { status: 400 });
}

/**
 * Référence lisible au téléphone : DZ-<base36 du temps>-<4 caractères aléatoires>.
 */
function reference(): string {
  const stamp = Date.now().toString(36).toUpperCase().slice(-5);
  const rand = Math.random().toString(36).toUpperCase().slice(2, 6);
  return `DZ-${stamp}-${rand}`;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return badRequest("Requête illisible.");
  }

  const { nom, telephone, gouvernorat, ville, adresse, notes, lines } = (body ?? {}) as {
    nom?: string;
    telephone?: string;
    gouvernorat?: string;
    ville?: string;
    adresse?: string;
    notes?: string;
    lines?: IncomingLine[];
  };

  if (!nom || nom.trim().length < 3) return badRequest("Merci d'indiquer votre nom complet.");
  if (!telephone || !PHONE.test(telephone.replace(/\s/g, "")))
    return badRequest("Le numéro de téléphone doit contenir 8 chiffres.");
  if (!gouvernorat || !findGovernorate(gouvernorat)) return badRequest("Gouvernorat inconnu.");
  if (!ville || ville.trim().length < 2) return badRequest("Merci d'indiquer votre ville ou délégation.");
  if (!adresse || adresse.trim().length < 5) return badRequest("Adresse trop courte.");
  if (!Array.isArray(lines) || lines.length === 0) return badRequest("Votre panier est vide.");

  // Les prix sont recalculés ici depuis le catalogue : on ne fait jamais confiance
  // aux montants envoyés par le navigateur.
  const items = [];
  for (const line of lines) {
    const product = getProduct(String(line?.slug));
    if (!product) return badRequest("Un article du panier n'existe plus.");
    const qty = Math.floor(Number(line?.qty));
    if (!Number.isFinite(qty) || qty < 1) return badRequest("Quantité invalide.");
    if (qty > product.stock) return badRequest(`Stock insuffisant pour ${product.name}.`);
    items.push({ slug: product.slug, name: product.name, qty, unit: product.price, total: product.price * qty });
  }

  const subtotal = items.reduce((n, i) => n + i.total, 0);
  const shipping = shippingFor(gouvernorat, subtotal);
  const total = subtotal + shipping;

  const order = {
    reference: reference(),
    createdAt: new Date().toISOString(),
    paiement: "especes-a-la-livraison",
    client: {
      nom: nom.trim(),
      telephone: telephone.replace(/\s/g, ""),
      gouvernorat,
      ville: ville.trim(),
      adresse: adresse.trim(),
      notes: (notes ?? "").trim() || null,
    },
    items,
    subtotal,
    shipping,
    total,
  };

  // Tant qu'il n'y a pas de base de données, la commande part vers le webhook de
  // l'équipe (Google Sheets, Make, n8n…) s'il est configuré, et reste dans les
  // logs Vercel dans tous les cas.
  const webhook = process.env.ORDERS_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(order),
      });
    } catch (error) {
      console.error("[commandes] webhook injoignable", error);
    }
  }
  console.info("[commandes] nouvelle commande", order.reference, formatTND(order.total));

  return NextResponse.json({ ok: true, reference: order.reference, total, shipping });
}
