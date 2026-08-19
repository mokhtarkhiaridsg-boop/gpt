/**
 * Le dinar tunisien se divise en 1000 millimes. On stocke donc tous les prix
 * en millimes (entiers) pour éviter les erreurs d'arrondi en virgule flottante.
 */
export type Millimes = number;

export const DINAR = 1000;

export function formatTND(millimes: Millimes): string {
  const sign = millimes < 0 ? "-" : "";
  const abs = Math.abs(millimes);
  const dinars = Math.floor(abs / DINAR);
  const rest = abs % DINAR;
  return `${sign}${dinars.toLocaleString("fr-TN")},${String(rest).padStart(3, "0")} DT`;
}

/** Prix « 89,500 » écrit en dinars décimaux -> millimes. */
export function toMillimes(dinars: number): Millimes {
  return Math.round(dinars * DINAR);
}
