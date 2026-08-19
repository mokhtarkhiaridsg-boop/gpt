# Dar Zina — دار زينة

Boutique en ligne tunisienne de **petits meubles et décoration**. Next.js 15 (App
Router) + Tailwind v4, déployée sur Vercel.

## Le parti pris

Rien au catalogue ne dépasse 60 cm et ne pèse plus de ~4 kg. C'est la contrainte
fondatrice : une pièce qui coûte plus cher à transporter qu'à fabriquer n'a pas
sa place ici. D'où les colis plats (étagères, cadres), les articles qui se
démontent (table Zitouna) et le pouf vendu en housse à garnir chez soi.

## Ce qui est spécifique au marché tunisien

| Sujet | Choix |
|---|---|
| Devise | Dinar tunisien, stocké **en millimes** (entiers) — jamais de flottant sur un prix |
| Paiement | **Espèces à la livraison**, sans compte ni carte — le mode d'achat dominant en Tunisie |
| Livraison | 4 zones tarifaires couvrant les **24 gouvernorats**, offerte dès 199 DT |
| Téléphone | Validation à 8 chiffres |
| Langue | Français, avec l'arabe en signature de marque |

## Architecture

```
src/lib/products.ts       catalogue (source de vérité des prix)
src/lib/governorates.ts   24 gouvernorats, zones, tarifs et délais
src/lib/money.ts          arithmétique et formatage en millimes
src/lib/cart.tsx          panier React Context, persisté en localStorage
src/components/ProductArt une silhouette SVG par référence — aucune image externe
src/app/api/commandes     réception des commandes
```

Le panier vit côté navigateur, mais **l'API recalcule chaque prix depuis le
catalogue** : les montants envoyés par le client ne sont jamais utilisés.

Les visuels produits sont des SVG générés, un par référence. Pas de CDN, pas
d'images à héberger, et la vitrine reste cohérente tant qu'il n'y a pas de photos
studio.

## Développement

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run typecheck
```

## Configuration

| Variable | Rôle |
|---|---|
| `ORDERS_WEBHOOK_URL` | Facultatif. Chaque commande validée y est POSTée en JSON (Google Sheets, Make, n8n…). Sans elle, la commande reste dans les logs Vercel. |

## À faire ensuite

- Persistance des commandes en base (Vercel Postgres) plutôt qu'un webhook
- Passerelles de paiement locales : Flouci, Konnect, Paymee
- Version arabe (RTL)
- Photos studio en remplacement des illustrations SVG
- Suivi de colis chez le transporteur
