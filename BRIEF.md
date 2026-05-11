# Tamkīn — Agent handoff brief

A self-contained spec for rebuilding the app. Read this top to bottom; everything you need is here.

## What it is

**Tamkīn (تَمْكِين)** — a Muslim community app named after Sūrat al-Ḥajj 22:41:

> *"Those who, if We give them tamkīn in the land, establish prayer, give zakāt, enjoin good, and forbid evil. And to Allah belongs the outcome of all matters."*

The verse is the whole product in thirty words. The app's success is measured in users *leaving their phones* — to pray, to plant, to lift, to build, to serve a higher purpose. Retention metrics are inverted on purpose.

## The thesis

Dopamine is the currency of behavior, and every haram industry has weaponized it (porn, gambling, ultra-processed food, doomscrolling, parasocial influencers). The Ummah ceded the dopamine economy. The fix is not asceticism — it is **redirection**: build halal, ibādah-aligned reward loops that are *better* than the haram ones, because they compound into real-world strength rather than draining it.

## The seven pillars (one organism, seven organs)

1. **Ibādah** — worship reimagined: salah you can't slip on, Quran organized into one ladder to ijāzah, dhikr you can do eyes-closed.
2. **'Ilm** — knowledge: pick one madhab once, never compare. Verified scholars only. Arabic of the Quran in 90 days.
3. **Ukhuwwah** — brotherhood / sisterhood: a Circle of Twelve who meet weekly in person. No public feed, no likes, no follower counts.
4. **Arḍ** — earth & Sunnah movement: plant dates, olives, figs, miswāk. Walk everywhere. Eat tayyib. Revive dead land.
5. **Iḥsān al-Ṣan'ah** — skill, craft, formidability: wrestle, lift, ride, shoot. Build a halal business. Learn a craft.
6. **Da'wah** — beautiful invitation: mercy first, not fire first. Hard questions answered honestly. Aesthetic worthy of Cordoba.
7. **Masīrat al-Ummah** — the trajectory: the Ummah's rise made visible — every prayer, every tree, every brother off porn — a single climbing line.

## The defensible twelve (MVP Phase 1)

If any is removed the thesis is weaker. If a thirteenth is added the scope creeps.

1. **Salah Companion** — a *real human brother* you pair with. He sees today's five fards; you see his. Mutual nudges. This is the heartbeat.
2. **Quran Journey** — one organized 10-rung ladder: read Arabic letters → words → tajwīd → 300 Quranic vocab → tadabbur → SRS hifdh → tasmī' → full hifdh → tafsīr → ijāzah.
3. **Daily Wird** — morning/evening adhkār, haptic dhikr counter, eyes-closed mode.
4. **Live Adhan Mode** — when adhan rings, app dims, plays local mu'adhdhin, prompts "Stop. Leave the phone. Go pray." Brutal-honesty button five minutes later.
5. **The Quiet Hour** — between maghrib and 'ishā the app refuses to do anything except Quran / muṣḥaf.
6. **Group Suhoor** (Fasting Tracker) — local Muslims meet at partner halal restaurants who offer verified-user discounts via the Halal Business Network.
7. **Porn Lockdown + Awwāb Badge** — one button, device-level DNS block, brother-co-signed unlock with 30-day cooldown. Escalating "Awwāb" badge at 30 / 90 / 365 days clean.
8. **Circle of Twelve** — geo-bounded circle that *meets every week in person*. App is logistics-only.
9. **Sunnah Garden** — three climate-filtered Quranic/Sunnah plants (dates, olives, figs, pomegranate, grapes, black seed, miswāk, basil, barley, gourd). 12-week plan, photo log.
10. **Hayba Drill / Sakīna Drill** — weekly Sunnah-rooted formidability challenges (brothers / sisters).
11. **Halal Business Network** — gyms, restaurants, butchers, hijama, Quran teachers, archery, riding — all give verified-user discounts. Circulates the local Muslim economy.
12. **Ummah Trajectory** — public, transparent gauge of the Ummah's rise + private Iqāmah Dashboard (8 petals: salah, quran, arabic, fitness, sadaqah, da'wah, fasting, family). Plus civilizational milestones (1M memorizers, 100M trees, 10k ribā-free businesses, etc.).

**Onboarding (precondition, not a feature):** bismillāh → gender → madhab picked once, locked forever, no comparison → language → city → honest salah baseline → kunya → Salah Companion pairing → 3 Garden plants → Sunnah-Firsts checklist (ghusl, miswāk, morning adhkār, smile at family) → Home.

## Charter — forbidden by design (not by promise)

Bound by AGPL license + waqf charter. Future bad-faith owner cannot flip these without forfeiting the project to a community fork.

- **No ads. Ever.**
- **No data sold or shared.** We can't sell what we don't have.
- **No public feed. No likes. No follower counts. No algorithmic ranking. No "for you" recommendations.**
- **No infinite scroll. No streak-shame. No FOMO timers.**
- **No notifications outside the whitelist:** adhan, tahajjud opt-in, Salah Companion nudges, Circle meetups, scholar-board emergency.
- **No location more precise than the user's city.** Adhan computed locally.
- **No real names.** Kunyas only.
- **No third-party analytics SDKs in production.** No Google, Facebook, Mixpanel, Amplitude, Segment, AppsFlyer, Branch.

## Privacy architecture — six sensitivity classes

Every byte tagged at the schema layer. Default for any new feature is Class 0.

| Class | Description | Lives where |
|---|---|---|
| 0 | Local only — never leaves device | SQLite + MMKV (mobile) / `localStorage` (web preview) |
| 1 | E2E to one (your Salah Companion) | Encrypted blob via Signal Protocol; server holds ciphertext only |
| 2 | E2E to small group (your Circle of 12) | Encrypted to group key |
| 3 | Anonymized aggregate with differential privacy noise added on-device | DP-aggregated server counter |
| 4 | Public, pseudonymous (kunya only) | Public signed registry — verified scholars, verified businesses |
| 5 | Never collected — real names, phone, GPS, contacts, photo library, ad IDs | — |

## Governance — Majlis al-'Ilm

12-scholar council (3 per madhab: Ḥanafī, Mālikī, Shāfi'ī, Ḥanbalī), geographic diversity required, formal ijāzah required, 5-year terms (two-term max). Plus one **Muḥtasib** seat — public-conscience role, user-elected, single 3-year term. Paid from the waqf (not the company) so independence is structural.

**Will not do:** takfīr of individuals/groups, political-party endorsements, fatwas-on-demand for individual high-stakes life decisions, rulings outside scholarly competence.

**Will do:** verify scholars and halal businesses, veto any feature touching fiqh / `aqīdah / akhlāq, publish reasoning publicly for every decision.

**This is a Sunni app for Sunni Muslims following one of the four classical madhāhib.** Honest about scope. Respectful tone toward Shi'a Muslims; no pretense of pan-Islamic coverage.

## Aesthetic

- **Dark warm parchment over deep ink.** Palette: `#0c0a08` ink, `#ecdfc1` parchment, `#c9a96b` gold.
- **Arabic typography first-class** (Amiri / Noto Naskh Arabic).
- **Restraint.** No emoji. No exclamation marks. No clickbait. Andalusian sensibility.
- **Mercy-first.** *Rahma* is mentioned 114 times in the Quran's bismillāh alone — lead there, not hellfire.

## Tech stack (this build)

- **Web preview**: Next.js 14 (App Router) + TypeScript + Tailwind, deployed to Vercel.
- **Mobile (planned)**: React Native + Expo. Same backend, native UX.
- **Database**: Supabase Postgres with Row Level Security on every user-touching table. Public read-only tables for `ummah_counters` and `milestones`.
- **Fonts**: EB Garamond (body), Amiri (Arabic), Inter (UI) — via `next/font/google`.
- **Quran data**: alquran.cloud (free, no key) for ayah of the day.
- **State**: local-first (`localStorage`) for personal data in the web preview. Real app uses SQLite + MMKV + optional E2E sync via Signal Protocol.
- **License**: AGPL-3.0 (charter clause).
- **Funding model**: waqf / sadaqah jariyah. No ads, no subscriptions extracting from poor Muslims.

## What is built so far (this repo)

The preview build covers seven routes, all prerendered:

- `/` — landing: hero, the verse, 7 pillars, the 12 features, "what Tamkīn cannot do"
- `/today` — interactive: daily ayah (alquran.cloud), local salah tracker, dhikr counter, 10-rung Quran ladder, Quiet Hour banner
- `/circle` — Circle of Twelve + Group Suhoor + Hayba/Sakīna drills
- `/garden` — Sunnah Garden with 3 plants + 10-plant catalog + tree counter
- `/lockdown` — interactive Porn Lockdown + Phone Lockout focus timer + explainer
- `/ummah` — Ummah Trajectory: Supabase-backed counters + Iqāmah Dashboard + milestones; falls back to seed data when Supabase isn't configured
- `/manifesto` — long-form why

Schema for the two Supabase tables (`ummah_counters`, `milestones`) is in `supabase/schema.sql` with RLS enabled. Future per-user tables documented as roadmap, not created: `profiles`, `salah_logs`, `salah_pairs`, `quran_progress`, `wird_logs`, `garden_plants`, `circles`, `shaytan_log` — all owner-only RLS.

## What to build next (priority order)

1. **Auth** — Supabase magic-link email; create `profiles` table with kunya/madhab/gender/city/timezone, owner-only RLS.
2. **Salah Companion pairing** — schema (`salah_pairs`), pairing flow (60s intake → 3 candidate matches → mutual confirm OR scaffold companion), shared today-only view of both rows.
3. **Salah logs synced** — when logged in, today's fards persist to Supabase; offline-first still works.
4. **Daily ayah from Supabase** instead of alquran.cloud — pre-load the muṣḥaf as a static dataset so the app works without external API and offline.
5. **Real Quran Journey state** — per-user rung, hifdh queue, SRS schedule. The 10-rung ladder is the longest-tail feature; ship rung 1 first.
6. **Sunnah Garden state** — per-user plants, care log, photo upload (Supabase Storage with E2E option).
7. **Move from web to React Native** — once the auth + ibādah loop works on web, port to Expo. The web preview becomes the marketing surface; mobile becomes the product.

## Deploy

1. Create Supabase project, run `supabase/schema.sql` in SQL Editor.
2. Import repo at <https://vercel.com/new>, pick this branch.
3. Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Vercel env vars.
4. Deploy. Site works without these vars (fallback path), but `/ummah` will say `source: fallback seed` instead of `source: live · supabase`.

## North Star

A Muslim who, after eighteen months on Tamkīn, **no longer needs Tamkīn** — because he prays five times, reads Quran daily, has a circle, grows food, lifts iron, raises children — is the success case. The app's purpose is to make itself unnecessary. Build every feature to that test.

> الَّذِينَ إِن مَّكَّنَّاهُمْ فِي الْأَرْضِ أَقَامُوا الصَّلَاةَ وَآتَوُا الزَّكَاةَ وَأَمَرُوا بِالْمَعْرُوفِ وَنَهَوْا عَنِ الْمُنكَرِ ۗ وَلِلَّهِ عَاقِبَةُ الْأُمُورِ

— al-Ḥajj 22:41
