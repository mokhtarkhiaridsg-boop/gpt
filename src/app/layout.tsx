import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://darzina.vercel.app"),
  title: {
    default: "Dar Zina — Petits meubles & décoration livrés en Tunisie",
    template: "%s · Dar Zina",
  },
  description:
    "Tabourets, étagères, miroirs et décoration pour les appartements tunisiens. Paiement à la livraison, expédition dans les 24 gouvernorats, livraison offerte dès 199 DT.",
  keywords: ["meuble Tunisie", "décoration Tunisie", "petit meuble", "livraison Tunisie", "paiement à la livraison"],
  openGraph: {
    type: "website",
    locale: "fr_TN",
    siteName: "Dar Zina",
    title: "Dar Zina — Petits meubles & décoration livrés en Tunisie",
    description:
      "Petits meubles et décoration expédiés partout en Tunisie. Paiement à la livraison.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="font-sans">
        <CartProvider>
          <a
            href="#contenu"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-sand-50"
          >
            Aller au contenu
          </a>
          <Header />
          <main id="contenu">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
