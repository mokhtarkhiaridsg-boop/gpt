"use client";

import { useEffect, useState } from "react";

const KEY = "tamkin.lockdown.startedAt";

function badgeFor(days: number) {
  if (days >= 365) return { name: "Awwāb · year", arabic: "أَوَّاب" };
  if (days >= 90) return { name: "Awwāb · 90 days", arabic: "أَوَّاب" };
  if (days >= 30) return { name: "Awwāb · 30 days", arabic: "أَوَّاب" };
  return null;
}

export default function LockdownToggle() {
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setStartedAt(Number(raw));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      if (startedAt) localStorage.setItem(KEY, String(startedAt));
      else localStorage.removeItem(KEY);
    } catch {}
  }, [startedAt, hydrated]);

  const days = startedAt
    ? Math.floor((Date.now() - startedAt) / 86_400_000)
    : 0;
  const badge = badgeFor(days);
  const active = !!startedAt;

  return (
    <div className="border border-ink-700 bg-ink-900/40 p-8">
      <div className="flex items-baseline justify-between mb-2">
        <h3 className="text-xl text-gold-400">Porn Lockdown</h3>
        {active && (
          <span className="text-xs uppercase tracking-wider text-gold-500/70">
            day {days}
          </span>
        )}
      </div>
      <p className="text-sm text-parchment-300/60 mb-6 italic">
        In production this triggers device-level DNS filtering, blocks the
        major sites, and requires your accountability brother to co-sign any
        unlock — with a thirty-day cooldown.
      </p>

      {!active ? (
        <button
          onClick={() => setStartedAt(Date.now())}
          className="w-full border border-gold-500 text-gold-400 py-8 text-lg uppercase tracking-[0.2em] hover:bg-gold-500 hover:text-ink-950 transition-colors"
        >
          Lock me out of all of it
        </button>
      ) : (
        <div className="space-y-6">
          <div className="border border-gold-500/40 bg-gold-500/5 p-6 text-center">
            <p className="font-arabic text-6xl text-gold-400 leading-none mb-2">
              {days}
            </p>
            <p className="text-sm uppercase tracking-wider text-parchment-200">
              days clean, alḥamdulillāh
            </p>
          </div>
          {badge && (
            <div className="border border-gold-500/40 p-4 text-center">
              <p className="arabic text-3xl text-gold-400 mb-1">
                {badge.arabic}
              </p>
              <p className="text-xs uppercase tracking-wider text-parchment-200">
                {badge.name}
              </p>
              <p className="text-sm text-parchment-300/60 mt-2 italic">
                The one who repeatedly turns back to Allah.
              </p>
            </div>
          )}
          <button
            onClick={() => {
              if (
                confirm(
                  "In the real app, your accountability brother must co-sign this. Reset the local counter?",
                )
              ) {
                setStartedAt(null);
              }
            }}
            className="w-full text-xs text-parchment-300/50 hover:text-parchment-300 transition-colors py-3"
          >
            reset (preview only)
          </button>
        </div>
      )}
    </div>
  );
}
