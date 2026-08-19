import type { Millimes } from "./money";

export type Category = "assises" | "rangement" | "murs" | "lumiere" | "tables" | "textile";

/** Silhouette dessinée pour la référence — une par produit, jamais partagée. */
export type ArtKey =
  | "tabouret"
  | "etagere"
  | "miroir"
  | "table"
  | "patere"
  | "pouf"
  | "panier"
  | "photophore"
  | "plateau"
  | "macrame"
  | "porteRevues"
  | "lampe"
  | "cachePot"
  | "portePlantes"
  | "cadres"
  | "horloge"
  | "coussin"
  | "tapis"
  | "tabouretPliant";

export const CATEGORIES: { slug: Category; label: string; blurb: string }[] = [
  { slug: "assises", label: "Assises", blurb: "Tabourets, poufs et petits sièges d'appoint." },
  { slug: "tables", label: "Petites tables", blurb: "Tables d'appoint, guéridons, bouts de canapé." },
  { slug: "rangement", label: "Rangement", blurb: "Paniers, porte-revues, cache-pots." },
  { slug: "murs", label: "Décoration murale", blurb: "Miroirs, étagères, cadres, horloges." },
  { slug: "lumiere", label: "Lumière", blurb: "Lampes, photophores, suspensions." },
  { slug: "textile", label: "Textile", blurb: "Foutas, coussins, tapis d'appoint." },
];

export type Product = {
  slug: string;
  name: string;
  /** Le clin d'œil géographique qui donne son nom au produit. */
  origin: string;
  category: Category;
  price: Millimes;
  /** Prix barré, si le produit est en promotion. */
  compareAt?: Millimes;
  /** Dimensions en centimètres, pour la fiche produit. */
  dimensions: string;
  /** Poids colis en grammes — c'est lui qui décide du coût d'expédition. */
  weightGrams: number;
  material: string;
  description: string;
  highlights: string[];
  stock: number;
  /** Teintes de l'illustration générée pour ce produit. */
  palette: [string, string];
  art: ArtKey;
  featured?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    slug: "tabouret-olivier-nefta",
    name: "Tabouret Nefta",
    origin: "Nefta",
    category: "assises",
    price: 129_000,
    compareAt: 155_000,
    dimensions: "Ø 32 × H 45 cm",
    weightGrams: 2600,
    material: "Bois d'olivier massif, finition huilée",
    description:
      "Un tabouret bas taillé dans l'olivier, ce bois dense et veiné que l'on travaille depuis toujours dans le Sud tunisien. Assez léger pour se déplacer d'une pièce à l'autre, assez solide pour servir de bout de canapé, de table de chevet ou de marchepied.",
    highlights: ["Bois d'olivier massif", "Chaque pièce a un veinage unique", "Se monte en 2 minutes"],
    stock: 14,
    palette: ["#8C6239", "#C89B6A"],
    art: "tabouret",
    featured: true,
  },
  {
    slug: "etagere-murale-sidi-bou",
    name: "Étagère Sidi Bou",
    origin: "Sidi Bou Saïd",
    category: "murs",
    price: 79_000,
    dimensions: "L 60 × P 15 × H 12 cm",
    weightGrams: 1400,
    material: "Pin massif laqué, équerres acier",
    description:
      "Le bleu de Sidi Bou Saïd sur une étagère qui tient dans un carton plat. Trois vis, deux chevilles, et vous avez de quoi poser des livres, une plante ou un cadre au-dessus du bureau.",
    highlights: ["Livrée avec visserie et gabarit de perçage", "Charge utile 8 kg", "Colis plat"],
    stock: 31,
    palette: ["#1F5C99", "#7FB2DB"],
    art: "etagere",
    featured: true,
  },
  {
    slug: "miroir-rotin-nabeul",
    name: "Miroir Nabeul",
    origin: "Nabeul",
    category: "murs",
    price: 149_000,
    dimensions: "Ø 50 cm",
    weightGrams: 1900,
    material: "Rotin tressé main, miroir 3 mm",
    description:
      "Un cercle de rotin tressé à la main autour d'un miroir. Il réchauffe un couloir sombre, agrandit une petite entrée, et pèse assez peu pour tenir sur un simple crochet.",
    highlights: ["Tressage main", "Crochet inclus", "Ne jaunit pas"],
    stock: 9,
    palette: ["#B8874A", "#E4C79A"],
    art: "miroir",
    featured: true,
  },
  {
    slug: "table-appoint-zitouna",
    name: "Table Zitouna",
    origin: "Zitouna",
    category: "tables",
    price: 189_000,
    dimensions: "Ø 40 × H 52 cm",
    weightGrams: 4200,
    material: "Plateau chêne, piètement métal noir",
    description:
      "Un guéridon à côté du fauteuil : de quoi poser un café, un livre, un téléphone. Le plateau se dévisse du piètement, ce qui permet de l'expédier à plat dans un carton compact.",
    highlights: ["Se démonte pour l'expédition", "Piètement stable 3 branches", "Plateau traité anti-taches"],
    stock: 12,
    palette: ["#3B3B3B", "#B99A6B"],
    art: "table",
    featured: true,
  },
  {
    slug: "porte-manteau-medina",
    name: "Porte-manteau Medina",
    origin: "Médina de Tunis",
    category: "rangement",
    price: 59_000,
    dimensions: "L 45 × H 10 cm — 5 patères",
    weightGrams: 900,
    material: "Chêne et laiton vieilli",
    description:
      "Cinq patères en laiton sur une barre de chêne. À poser près de la porte d'entrée pour les vestes, ou dans la salle de bain pour les serviettes.",
    highlights: ["5 patères laiton", "Colis plat, très léger", "Montage mural 2 points"],
    stock: 44,
    palette: ["#7A5C2E", "#D6B26A"],
    art: "patere",
  },
  {
    slug: "pouf-fouta-kerkennah",
    name: "Pouf Kerkennah",
    origin: "Kerkennah",
    category: "textile",
    price: 119_000,
    dimensions: "Ø 50 × H 35 cm",
    weightGrams: 1100,
    material: "Housse coton fouta tissée, à garnir",
    description:
      "La housse seule, tissée en coton façon fouta. Vous la remplissez chez vous (vieux textiles, billes de polystyrène, mousse) : c'est ce qui permet de vous l'expédier pour le prix d'un colis d'un kilo au lieu d'un volume de meuble.",
    highlights: ["Livré non garni — port réduit", "Housse lavable en machine", "Fermeture éclair invisible"],
    stock: 22,
    palette: ["#2F6E63", "#9CCFC3"],
    art: "pouf",
  },
  {
    slug: "panier-osier-hammamet",
    name: "Panier Hammamet",
    origin: "Hammamet",
    category: "rangement",
    price: 69_000,
    dimensions: "Ø 38 × H 30 cm",
    weightGrams: 800,
    material: "Osier naturel, anses cuir",
    description:
      "Un panier d'osier avec deux anses en cuir. Pour le linge, les jouets, les plaids, ou pour cacher le pot en plastique d'une grande plante.",
    highlights: ["Osier naturel", "Anses cuir cousues", "S'emboîte — parfait par deux"],
    stock: 27,
    palette: ["#A8783C", "#E0BE86"],
    art: "panier",
  },
  {
    slug: "photophore-guellala",
    name: "Photophore Guellala",
    origin: "Guellala, Djerba",
    category: "lumiere",
    price: 39_000,
    dimensions: "Ø 10 × H 12 cm",
    weightGrams: 450,
    material: "Terre cuite émaillée de Guellala",
    description:
      "Les potiers de Guellala travaillent l'argile de Djerba depuis des siècles. Ce photophore percé projette des motifs sur le mur dès qu'on y glisse une bougie chauffe-plat.",
    highlights: ["Poterie de Djerba", "Motifs ajourés", "Idéal en trio"],
    stock: 58,
    palette: ["#2A6B7C", "#8FC7D4"],
    art: "photophore",
  },
  {
    slug: "plateau-olivier-sahel",
    name: "Plateau Sahel",
    origin: "Sahel",
    category: "tables",
    price: 89_000,
    dimensions: "L 40 × P 25 × H 4 cm",
    weightGrams: 1300,
    material: "Bois d'olivier, poignées découpées",
    description:
      "Le plateau qui sert le thé, puis reste sur la table basse pour rassembler la télécommande, les bougies et le carnet. Passe de la cuisine au salon sans avoir l'air d'un ustensile.",
    highlights: ["Bois d'olivier massif", "Contact alimentaire", "Poignées intégrées"],
    stock: 19,
    palette: ["#8C6239", "#D3AE7E"],
    art: "plateau",
  },
  {
    slug: "suspension-macrame-chott",
    name: "Suspension Chott",
    origin: "Chott el Jerid",
    category: "murs",
    price: 49_000,
    dimensions: "L 30 × H 90 cm",
    weightGrams: 350,
    material: "Coton peigné, tringle bois",
    description:
      "Une tenture en macramé pour habiller un grand mur vide sans percer trois trous. Elle se roule dans un tube et arrive chez vous pour presque rien en frais de port.",
    highlights: ["350 g seulement", "Coton non teinté", "Tringle en bois incluse"],
    stock: 33,
    palette: ["#B7A48A", "#EFE4D2"],
    art: "macrame",
  },
  {
    slug: "porte-revues-bardo",
    name: "Porte-revues Bardo",
    origin: "Le Bardo",
    category: "rangement",
    price: 65_000,
    dimensions: "L 34 × P 22 × H 28 cm",
    weightGrams: 1600,
    material: "Acier thermolaqué noir mat",
    description:
      "Une structure en fil d'acier qui range les magazines, les journaux et les cahiers debout, au pied du canapé. Se plie à plat quand vous n'en avez plus besoin.",
    highlights: ["Se plie à plat", "Acier thermolaqué", "Deux compartiments"],
    stock: 16,
    palette: ["#333333", "#9A9A9A"],
    art: "porteRevues",
  },
  {
    slug: "lampe-chevet-tozeur",
    name: "Lampe Tozeur",
    origin: "Tozeur",
    category: "lumiere",
    price: 99_000,
    compareAt: 119_000,
    dimensions: "Ø 18 × H 30 cm",
    weightGrams: 1200,
    material: "Abat-jour lin, pied bois tourné",
    description:
      "Une petite lampe à poser sur la table de chevet ou l'étagère de l'entrée. Lumière chaude, interrupteur sur le fil, ampoule E27 non fournie.",
    highlights: ["Câble 1,8 m avec interrupteur", "Douille E27", "Abat-jour lin naturel"],
    stock: 21,
    palette: ["#A4763F", "#EBD9B8"],
    art: "lampe",
  },
  {
    slug: "cache-pot-sejnane",
    name: "Cache-pot Sejnane",
    origin: "Sejnane",
    category: "rangement",
    price: 55_000,
    dimensions: "Ø 22 × H 20 cm",
    weightGrams: 1500,
    material: "Terre cuite modelée, décor Sejnane",
    description:
      "La poterie de Sejnane est inscrite au patrimoine immatériel de l'UNESCO : modelée sans tour, cuite au feu de bois, décorée d'oxydes naturels. Ce cache-pot en reprend les motifs géométriques.",
    highlights: ["Savoir-faire classé UNESCO", "Décor peint à la main", "Sans trou — protège vos meubles"],
    stock: 11,
    palette: ["#9C4A32", "#E3C4A8"],
    art: "cachePot",
  },
  {
    slug: "porte-plantes-dougga",
    name: "Porte-plantes Dougga",
    origin: "Dougga",
    category: "tables",
    price: 75_000,
    dimensions: "Ø 26 × H 40 cm",
    weightGrams: 1400,
    material: "Bambou et corde tressée",
    description:
      "Un support qui surélève une plante de 40 cm et la sort du coin sombre où elle végétait. Se monte sans outil : trois pieds qui s'emboîtent.",
    highlights: ["Montage sans outil", "Supporte 12 kg", "Colis plat"],
    stock: 24,
    palette: ["#7E8C4A", "#CBD79B"],
    art: "portePlantes",
  },
  {
    slug: "cadres-kairouan",
    name: "Trio de cadres Kairouan",
    origin: "Kairouan",
    category: "murs",
    price: 85_000,
    dimensions: "3 cadres — 21×30, 13×18, 10×15 cm",
    weightGrams: 1100,
    material: "Bois massif teinté, plexiglas",
    description:
      "Trois formats à composer en galerie sur un mur d'escalier ou au-dessus du buffet. Vitrage plexiglas : ça ne casse pas pendant le transport, et ça pèse deux fois moins.",
    highlights: ["Vitrage plexiglas incassable", "Accroche portrait ou paysage", "Gabarit d'accrochage fourni"],
    stock: 29,
    palette: ["#6B4F3A", "#D9C4A9"],
    art: "cadres",
  },
  {
    slug: "horloge-tabarka",
    name: "Horloge Tabarka",
    origin: "Tabarka",
    category: "murs",
    price: 95_000,
    dimensions: "Ø 30 cm",
    weightGrams: 700,
    material: "Bois d'olivier, mécanisme silencieux",
    description:
      "Un disque d'olivier, des index en laiton, un mécanisme à balayage silencieux — pas de tic-tac dans le salon. Pile AA non fournie.",
    highlights: ["Mécanisme silencieux", "Bois d'olivier massif", "Très léger à expédier"],
    stock: 18,
    palette: ["#8C6239", "#E1CBA6"],
    art: "horloge",
  },
  {
    slug: "coussin-fouta-douz",
    name: "Coussin Douz",
    origin: "Douz",
    category: "textile",
    price: 35_000,
    dimensions: "45 × 45 cm",
    weightGrams: 400,
    material: "Coton tissé main, garnissage inclus",
    description:
      "Le coussin en coton rayé qu'on trouve sur les banquettes du Sud, tissé aux mêmes couleurs que les foutas de Douz. Vendu garni, prêt à poser.",
    highlights: ["Garnissage inclus", "Housse déhoussable et lavable", "Se marie avec le Pouf Kerkennah"],
    stock: 47,
    palette: ["#B4552F", "#F0D9C4"],
    art: "coussin",
  },
  {
    slug: "tapis-matmata",
    name: "Tapis Matmata",
    origin: "Matmata",
    category: "textile",
    price: 145_000,
    compareAt: 175_000,
    dimensions: "60 × 110 cm",
    weightGrams: 2200,
    material: "Laine tissée, motifs berbères",
    description:
      "Un petit tapis de passage à mettre devant l'évier, au pied du lit ou dans l'entrée. Motifs géométriques berbères tissés à la main, format volontairement court pour qu'il tienne dans un colis roulé.",
    highlights: ["Tissé main", "Se roule pour l'expédition", "Laine naturelle non teintée"],
    stock: 13,
    palette: ["#7A3B2E", "#E8D5BE"],
    art: "tapis",
  },
  {
    slug: "tabouret-pliant-djerid",
    name: "Tabouret pliant Djerid",
    origin: "Djerid",
    category: "assises",
    price: 69_000,
    dimensions: "L 40 × P 32 × H 45 cm (plié : 6 cm)",
    weightGrams: 1800,
    material: "Hêtre massif, assise toile de coton",
    description:
      "L'assise en plus quand quelqu'un passe à l'improviste. Il se plie à 6 cm d'épaisseur et se glisse derrière une porte ou sous un lit le reste du temps.",
    highlights: ["Se plie à 6 cm", "Supporte 100 kg", "Toile remplaçable"],
    stock: 26,
    palette: ["#8A6A3E", "#D9C79E"],
    art: "tabouretPliant",
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function productsIn(category: Category): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export const FEATURED = PRODUCTS.filter((p) => p.featured);
