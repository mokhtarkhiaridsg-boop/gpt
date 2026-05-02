# Tamkīn — تَمْكِين

> *"Those who, if We give them establishment in the land, establish prayer, give zakāt, enjoin good, and forbid evil. And to Allah belongs the outcome of all matters."*
> — al-Ḥajj 22:41

An app whose success is measured in users **leaving their phones** — to pray, to plant, to lift, to build, to serve a higher purpose.

## What this is

This repo is the public preview build of Tamkīn, a non-profit waqf project. It demonstrates the vision and the first interactive slice of the Ibādah pillar (Salah tracker, daily Quran ayah, dhikr counter, Quiet Hour). The full app is planned as cross-platform mobile (React Native + Expo); this Next.js build is the marketing + preview surface.

The full vision plan lives in `/root/.claude/plans/what-would-the-perfect-sorted-candle.md` (outside the repo) and covers seven pillars, 77 features, the scholar-board governance (Majlis al-'Ilm), the privacy architecture (six sensitivity classes), and the dopamine-redirection thesis.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Quran data via [alquran.cloud](https://alquran.cloud) (free, no key)
- Local-first state (localStorage); no backend in this preview

## Pages

- `/` — landing: hero, the verse, seven pillars, the defensible twelve, what Tamkīn cannot do
- `/today` — interactive: ayah of the day, salah tracker, dhikr counter, Quran ladder
- `/ummah` — Ummah Trajectory dashboard with public Index, private Iqāmah Dashboard, civilizational milestones
- `/manifesto` — the long-form why

## Develop

```sh
npm install
npm run dev
```

Open <http://localhost:3000>.

## Deploy

This project is configured to deploy on Vercel out of the box.

1. Push this branch to GitHub.
2. Import the repo at <https://vercel.com/new>.
3. No environment variables needed. Build command and output are auto-detected.

## License

AGPL-3.0. Charter-bound: no ads, no data sale, no algorithmic feed, ever. If a future owner ever attempts to violate this, the community can fork without permission.
