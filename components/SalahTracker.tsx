"use client";

import { useEffect, useState } from "react";

const PRAYERS = [
  { id: "fajr", name: "Fajr", arabic: "الفَجْر" },
  { id: "dhuhr", name: "Dhuhr", arabic: "الظُّهْر" },
  { id: "asr", name: "'Asr", arabic: "العَصْر" },
  { id: "maghrib", name: "Maghrib", arabic: "المَغْرِب" },
  { id: "isha", name: "'Ishā", arabic: "العِشَاء" },
] as const;

type PrayerId = (typeof PRAYERS)[number]["id"];

function todayKey() {
  const d = new Date();
  return `tamkin.salah.${d.getUTCFullYear()}-${d.getUTCMonth() + 1}-${d.getUTCDate()}`;
}

export default function SalahTracker() {
  const [done, setDone] = useState<Record<PrayerId, boolean>>({
    fajr: false,
    dhuhr: false,
    asr: false,
    maghrib: false,
    isha: false,
  });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(todayKey());
      if (raw) setDone(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(todayKey(), JSON.stringify(done));
    } catch {}
  }, [done, hydrated]);

  const completed = Object.values(done).filter(Boolean).length;

  const toggle = (id: PrayerId) =>
    setDone((d) => ({ ...d, [id]: !d[id] }));

  return (
    <div className="border border-ink-700 bg-ink-900/40 p-8">
      <div className="flex items-baseline justify-between mb-2">
        <h3 className="text-xl text-gold-400">Salah</h3>
        <span className="text-sm text-parchment-300/60">
          {completed} / 5 today
        </span>
      </div>
      <p className="text-sm text-parchment-300/60 mb-8 italic">
        In production, your Salah Companion sees these too. Right now it is
        only you and Allah.
      </p>
      <ul className="grid grid-cols-5 gap-3">
        {PRAYERS.map((p) => {
          const isDone = done[p.id];
          return (
            <li key={p.id}>
              <button
                onClick={() => toggle(p.id)}
                className={`w-full border py-6 px-2 transition-colors ${
                  isDone
                    ? "border-gold-500 bg-gold-500/10 text-gold-400"
                    : "border-ink-700 text-parchment-200 hover:border-gold-500/40"
                }`}
                aria-pressed={isDone}
              >
                <span className="block arabic text-lg mb-1">{p.arabic}</span>
                <span className="block text-xs uppercase tracking-wider">
                  {p.name}
                </span>
                <span
                  className={`block mt-2 text-lg ${
                    isDone ? "text-gold-400" : "text-parchment-300/30"
                  }`}
                >
                  {isDone ? "✓" : "·"}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      <p className="text-xs text-parchment-300/50 mt-6 text-center">
        Stored on your device only. Nothing leaves the browser.
      </p>
    </div>
  );
}
