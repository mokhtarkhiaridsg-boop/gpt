import type { Millimes } from "./money";

export type DeliveryZone = "grand-tunis" | "nord-est" | "centre" | "sud";

export const ZONE_FEES: Record<DeliveryZone, Millimes> = {
  "grand-tunis": 7_000,
  "nord-est": 8_000,
  centre: 8_000,
  sud: 10_000,
};

export const ZONE_DELAYS: Record<DeliveryZone, string> = {
  "grand-tunis": "24 à 48 h",
  "nord-est": "48 à 72 h",
  centre: "48 à 72 h",
  sud: "72 h à 5 jours",
};

/** Livraison offerte à partir de ce montant de panier. */
export const FREE_SHIPPING_THRESHOLD: Millimes = 199_000;

export type Governorate = { name: string; zone: DeliveryZone };

/** Les 24 gouvernorats de Tunisie. */
export const GOVERNORATES: Governorate[] = [
  { name: "Ariana", zone: "grand-tunis" },
  { name: "Béja", zone: "nord-est" },
  { name: "Ben Arous", zone: "grand-tunis" },
  { name: "Bizerte", zone: "nord-est" },
  { name: "Gabès", zone: "sud" },
  { name: "Gafsa", zone: "sud" },
  { name: "Jendouba", zone: "nord-est" },
  { name: "Kairouan", zone: "centre" },
  { name: "Kasserine", zone: "centre" },
  { name: "Kébili", zone: "sud" },
  { name: "Le Kef", zone: "nord-est" },
  { name: "Mahdia", zone: "centre" },
  { name: "La Manouba", zone: "grand-tunis" },
  { name: "Médenine", zone: "sud" },
  { name: "Monastir", zone: "centre" },
  { name: "Nabeul", zone: "nord-est" },
  { name: "Sfax", zone: "centre" },
  { name: "Sidi Bouzid", zone: "centre" },
  { name: "Siliana", zone: "centre" },
  { name: "Sousse", zone: "centre" },
  { name: "Tataouine", zone: "sud" },
  { name: "Tozeur", zone: "sud" },
  { name: "Tunis", zone: "grand-tunis" },
  { name: "Zaghouan", zone: "nord-est" },
];

export function findGovernorate(name: string): Governorate | undefined {
  return GOVERNORATES.find((g) => g.name === name);
}

export function shippingFor(governorate: string | null, subtotal: Millimes): Millimes {
  if (subtotal >= FREE_SHIPPING_THRESHOLD) return 0;
  const g = governorate ? findGovernorate(governorate) : undefined;
  // Sans gouvernorat choisi on affiche le tarif le plus bas, à titre indicatif.
  return g ? ZONE_FEES[g.zone] : ZONE_FEES["grand-tunis"];
}
