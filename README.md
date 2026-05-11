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
- Supabase Postgres (optional — Ummah Trajectory falls back to seed values when unconfigured)
- Local-first state (localStorage) for personal data

## Pages

- `/` — landing: hero, the verse, seven pillars, the defensible twelve, what Tamkīn cannot do
- `/today` — interactive: ayah of the day, salah tracker, dhikr counter, Quran ladder
- `/circle` — Circle of Twelve with Group Suhoor + drills
- `/garden` — Sunnah Garden with three plants + catalog + tree counter
- `/lockdown` — Porn Lockdown one-tap + Phone Lockout timer + explainer
- `/ummah` — Ummah Trajectory dashboard, sourced from Supabase
- `/manifesto` — the long-form why

## Develop

```sh
npm install
cp .env.example .env.local   # optional — fill in if you want live Supabase data
npm run dev
```

Open <http://localhost:3000>. The app runs fine without any env vars set; `/ummah` will show fallback seed values until Supabase is wired up.

## Database setup (Supabase)

1. Create a new project at <https://supabase.com>
2. In the SQL Editor, paste and run `supabase/schema.sql`
3. Copy the project URL and `anon` key from Settings → API
4. Set them in `.env.local` and in Vercel project settings:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

The schema creates two public read-only tables (`ummah_counters`, `milestones`) with Row Level Security enabled. Writes are restricted to `service_role`. The schema file documents the future per-user tables (profiles, salah_logs, salah_pairs, quran_progress, wird_logs, garden_plants, circles, shaytan_log) — all owner-only RLS.

## Deploy to Vercel

1. Open <https://vercel.com/new>
2. Import this repo
3. Add the two `NEXT_PUBLIC_SUPABASE_*` env vars (optional — site works without them)
4. Deploy

Auto-deploy on push will be enabled once the project is imported.

## License

AGPL-3.0. Charter-bound: no ads, no data sale, no algorithmic feed, ever. If a future owner ever attempts to violate this, the community can fork without permission.
