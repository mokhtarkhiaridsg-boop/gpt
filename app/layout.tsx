import type { Metadata } from "next";
import { EB_Garamond, Amiri, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const serif = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const arabic = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-arabic",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tamkīn — the rise of the Ummah",
  description:
    "An app whose success is measured in users leaving their phones — to pray, plant, lift, and serve a higher purpose.",
  openGraph: {
    title: "Tamkīn",
    description: "The rise of the Ummah, by design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${arabic.variable} ${sans.variable}`}
    >
      <body className="min-h-screen bg-ink-950 text-parchment-100 antialiased">
        <Header />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
