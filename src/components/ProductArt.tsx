import type { ArtKey, Product } from "@/lib/products";
import type { ReactElement } from "react";

/**
 * Nous n'avons pas encore de photos studio : chaque référence est illustrée par
 * un dessin vectoriel qui lui est propre, colorisé avec sa palette. Zéro requête
 * réseau, zéro image à héberger, et deux produits ne se ressemblent jamais.
 */
const ART: Record<ArtKey, ReactElement> = {
  tabouret: (
    <>
      <ellipse cx="100" cy="70" rx="44" ry="12" fill="var(--b)" />
      <path d="M56 70v7a44 12 0 0 0 88 0v-7" fill="var(--a)" />
      <path d="M66 84 58 142M134 84l8 58M100 86v56" stroke="var(--a)" strokeWidth="7" strokeLinecap="round" />
      <path d="M72 114h56" stroke="var(--b)" strokeWidth="5" strokeLinecap="round" />
    </>
  ),
  etagere: (
    <>
      <rect x="40" y="82" width="120" height="11" rx="3" fill="var(--a)" />
      <path d="M58 93v22l16-22M142 93v22l-16-22" fill="var(--a)" opacity=".55" />
      <rect x="62" y="52" width="13" height="30" rx="2" fill="var(--b)" />
      <rect x="79" y="60" width="10" height="22" rx="2" fill="var(--a)" opacity=".7" />
      <circle cx="122" cy="72" r="11" fill="var(--b)" />
      <path d="M122 82v-4" stroke="var(--a)" strokeWidth="3" />
    </>
  ),
  miroir: (
    <>
      <circle cx="100" cy="98" r="44" fill="var(--b)" />
      <circle cx="100" cy="98" r="44" fill="none" stroke="var(--a)" strokeWidth="9" />
      <circle cx="100" cy="98" r="31" fill="none" stroke="var(--a)" strokeWidth="2.5" opacity=".45" />
      <path d="M86 82a20 20 0 0 0-9 13" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity=".65" fill="none" />
      <path d="M100 54V40" stroke="var(--a)" strokeWidth="5" strokeLinecap="round" />
      <circle cx="100" cy="36" r="5" fill="var(--a)" />
    </>
  ),
  table: (
    <>
      <ellipse cx="100" cy="58" rx="54" ry="14" fill="var(--b)" />
      <path d="M46 58v5a54 14 0 0 0 108 0v-5" fill="var(--a)" />
      <path d="M100 72v62M100 134 64 148M100 134l36 14M100 134v14" stroke="var(--a)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  patere: (
    <>
      <rect x="34" y="72" width="132" height="18" rx="5" fill="var(--a)" />
      <path d="M34 84h132" stroke="var(--b)" strokeWidth="2" opacity=".4" />
      {[52, 76, 100, 124, 148].map((x) => (
        <path key={x} d={`M${x} 90v12a7 7 0 0 0 14 0`} stroke="var(--b)" strokeWidth="6" strokeLinecap="round" fill="none" />
      ))}
    </>
  ),
  pouf: (
    <>
      <ellipse cx="100" cy="126" rx="52" ry="16" fill="var(--a)" />
      <path d="M48 126V96a52 26 0 0 1 104 0v30" fill="var(--b)" />
      <ellipse cx="100" cy="96" rx="52" ry="24" fill="var(--b)" />
      <ellipse cx="100" cy="96" rx="52" ry="24" fill="none" stroke="var(--a)" strokeWidth="4" />
      <path d="M62 108h76M56 118h88" stroke="var(--a)" strokeWidth="3" opacity=".45" />
      <circle cx="100" cy="96" r="7" fill="var(--a)" />
    </>
  ),
  panier: (
    <>
      <path d="M60 78h80l-9 66H69z" fill="var(--b)" />
      <path d="M60 78h80l-9 66H69z" fill="none" stroke="var(--a)" strokeWidth="6" strokeLinejoin="round" />
      <path d="M67 100h66M70 122h60" stroke="var(--a)" strokeWidth="3.5" opacity=".5" />
      <path d="M68 68v10M132 68v10" stroke="var(--a)" strokeWidth="6" strokeLinecap="round" />
      <path d="M68 68a12 9 0 0 1 18 0M114 68a12 9 0 0 1 18 0" fill="none" stroke="var(--a)" strokeWidth="6" strokeLinecap="round" />
    </>
  ),
  photophore: (
    <>
      <path d="M74 76h52l-6 66H80z" fill="var(--b)" />
      <path d="M74 76h52l-6 66H80z" fill="none" stroke="var(--a)" strokeWidth="5" strokeLinejoin="round" />
      <circle cx="90" cy="100" r="5" fill="var(--a)" />
      <circle cx="110" cy="100" r="5" fill="var(--a)" />
      <circle cx="100" cy="120" r="5" fill="var(--a)" />
      <path d="M100 62c6 6 6 11 0 14-6-3-6-8 0-14z" fill="var(--a)" />
      <path d="M70 148h60" stroke="var(--a)" strokeWidth="5" strokeLinecap="round" />
    </>
  ),
  plateau: (
    <>
      <rect x="38" y="76" width="124" height="46" rx="12" fill="var(--b)" />
      <rect x="38" y="76" width="124" height="46" rx="12" fill="none" stroke="var(--a)" strokeWidth="6" />
      <rect x="50" y="92" width="18" height="14" rx="7" fill="var(--a)" />
      <rect x="132" y="92" width="18" height="14" rx="7" fill="var(--a)" />
      <path d="M84 86h32M80 112h40" stroke="var(--a)" strokeWidth="3" opacity=".4" />
    </>
  ),
  macrame: (
    <>
      <rect x="56" y="46" width="88" height="8" rx="4" fill="var(--a)" />
      <path
        d="M70 54v40M86 54v58M100 54v72M114 54v58M130 54v40"
        stroke="var(--b)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path d="M70 94l16 18 14-18 14 18 16-18" fill="none" stroke="var(--a)" strokeWidth="4.5" strokeLinejoin="round" />
      <path d="M78 126l22 20 22-20" fill="none" stroke="var(--a)" strokeWidth="4.5" strokeLinejoin="round" />
    </>
  ),
  porteRevues: (
    <>
      <path d="M52 66 62 140h76l10-74" fill="none" stroke="var(--a)" strokeWidth="7" strokeLinejoin="round" />
      <path d="M100 70v70" stroke="var(--a)" strokeWidth="5" opacity=".6" />
      <rect x="66" y="58" width="26" height="34" rx="2" fill="var(--b)" transform="rotate(-6 79 75)" />
      <rect x="110" y="60" width="26" height="34" rx="2" fill="var(--b)" transform="rotate(6 123 77)" />
      <path d="M52 66h96" stroke="var(--a)" strokeWidth="7" strokeLinecap="round" />
    </>
  ),
  lampe: (
    <>
      <path d="M72 52h56l16 50H56z" fill="var(--b)" />
      <path d="M72 52h56l16 50H56z" fill="none" stroke="var(--a)" strokeWidth="6" strokeLinejoin="round" />
      <path d="M100 102v34" stroke="var(--a)" strokeWidth="8" strokeLinecap="round" />
      <ellipse cx="100" cy="142" rx="30" ry="9" fill="var(--a)" />
      <path d="M62 118h-12M138 118h12M56 132l-9 6M144 132l9 6" stroke="var(--b)" strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  cachePot: (
    <>
      <path d="M62 82h76l-10 62H72z" fill="var(--b)" />
      <path d="M62 82h76l-10 62H72z" fill="none" stroke="var(--a)" strokeWidth="6" strokeLinejoin="round" />
      <path d="M69 106l10-8 10 8 10-8 10 8 10-8 10 8" fill="none" stroke="var(--a)" strokeWidth="4" strokeLinejoin="round" />
      <path d="M100 82c-4-14-14-20-22-20 4 12 12 18 22 20zM100 82c4-14 14-20 22-20-4 12-12 18-22 20z" fill="var(--a)" opacity=".8" />
    </>
  ),
  portePlantes: (
    <>
      <path d="M76 74h48l-7 34H83z" fill="var(--b)" />
      <path d="M76 74h48l-7 34H83z" fill="none" stroke="var(--a)" strokeWidth="5" strokeLinejoin="round" />
      <path d="M100 74c-6-16-18-22-28-22 4 14 14 20 28 22zM100 74c6-16 18-22 28-22-4 14-14 20-28 22z" fill="var(--a)" />
      <path d="M84 108 68 148M116 108l16 40M100 108v40" stroke="var(--a)" strokeWidth="6" strokeLinecap="round" />
      <path d="M78 132h44" stroke="var(--a)" strokeWidth="4" opacity=".6" />
    </>
  ),
  cadres: (
    <>
      <rect x="42" y="56" width="52" height="70" rx="3" fill="var(--b)" stroke="var(--a)" strokeWidth="5" />
      <rect x="104" y="56" width="54" height="40" rx="3" fill="var(--b)" stroke="var(--a)" strokeWidth="5" />
      <rect x="104" y="104" width="38" height="30" rx="3" fill="var(--b)" stroke="var(--a)" strokeWidth="5" />
      <path d="M52 112l14-18 12 14 10-9v22H52z" fill="var(--a)" opacity=".55" />
      <circle cx="119" cy="70" r="6" fill="var(--a)" opacity=".55" />
    </>
  ),
  horloge: (
    <>
      <circle cx="100" cy="98" r="46" fill="var(--b)" />
      <circle cx="100" cy="98" r="46" fill="none" stroke="var(--a)" strokeWidth="7" />
      <path d="M100 62v7M136 98h-7M100 134v-7M64 98h7" stroke="var(--a)" strokeWidth="5" strokeLinecap="round" />
      <path d="M100 98V74M100 98l18 12" stroke="var(--a)" strokeWidth="5.5" strokeLinecap="round" />
      <circle cx="100" cy="98" r="5" fill="var(--a)" />
    </>
  ),
  coussin: (
    <>
      <rect x="50" y="52" width="100" height="94" rx="16" fill="var(--b)" />
      <rect x="50" y="52" width="100" height="94" rx="16" fill="none" stroke="var(--a)" strokeWidth="6" />
      <path d="M50 78h100M50 98h100M50 118h100" stroke="var(--a)" strokeWidth="4" opacity=".45" />
      <path d="M62 64c10 12 10 58 0 70M138 64c-10 12-10 58 0 70" fill="none" stroke="var(--a)" strokeWidth="3" opacity=".35" />
    </>
  ),
  tapis: (
    <>
      <rect x="34" y="66" width="132" height="66" rx="4" fill="var(--b)" />
      <rect x="34" y="66" width="132" height="66" rx="4" fill="none" stroke="var(--a)" strokeWidth="5" />
      <path d="M56 99l14-16 14 16-14 16zM100 99l14-16 14 16-14 16z" fill="var(--a)" opacity=".7" />
      <path d="M34 78h132M34 120h132" stroke="var(--a)" strokeWidth="3" opacity=".4" />
      <path d="M34 132v10M56 132v10M78 132v10M100 132v10M122 132v10M144 132v10M166 132v10" stroke="var(--a)" strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  tabouretPliant: (
    <>
      <path d="M64 74h72" stroke="var(--b)" strokeWidth="14" strokeLinecap="round" />
      <path d="M60 142 138 76M140 142 62 76" stroke="var(--a)" strokeWidth="7" strokeLinecap="round" />
      <path d="M74 110h52" stroke="var(--a)" strokeWidth="5" strokeLinecap="round" opacity=".6" />
      <circle cx="100" cy="109" r="5" fill="var(--a)" />
    </>
  ),
};

export default function ProductArt({
  product,
  className = "",
}: {
  product: Product;
  className?: string;
}) {
  const [a, b] = product.palette;
  return (
    <svg
      viewBox="0 0 200 180"
      role="img"
      aria-label={`Illustration — ${product.name}`}
      className={className}
      style={{ ["--a" as string]: a, ["--b" as string]: b }}
    >
      <rect width="200" height="180" fill="var(--color-sand-100)" />
      <circle cx="100" cy="94" r="64" fill="var(--b)" opacity=".16" />
      {ART[product.art]}
    </svg>
  );
}
