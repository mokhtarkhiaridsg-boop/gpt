"use client";

import { useEffect, useRef, useState } from "react";

const DESTINATIONS = ["the muṣḥaf", "the gym", "the garden", "the masjid"];

export default function FocusTimer() {
  const [minutes, setMinutes] = useState(25);
  const [remaining, setRemaining] = useState(0);
  const [destination, setDestination] = useState(DESTINATIONS[0]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const running = remaining > 0;

  const start = () => {
    setRemaining(minutes * 60);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          return 0;
        }
        return r - 1;
      });
    }, 1000);
  };

  const cancel = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setRemaining(0);
  };

  const mm = Math.floor(remaining / 60)
    .toString()
    .padStart(2, "0");
  const ss = (remaining % 60).toString().padStart(2, "0");

  return (
    <div className="border border-ink-700 bg-ink-900/40 p-8">
      <div className="flex items-baseline justify-between mb-2">
        <h3 className="text-xl text-gold-400">Phone Lockout</h3>
        <span className="text-xs uppercase tracking-wider text-parchment-300/60">
          deep work
        </span>
      </div>
      <p className="text-sm text-parchment-300/60 mb-6 italic">
        In production, this forces the OS into focus mode and opens the
        destination automatically. Here it counts down for the preview.
      </p>

      {!running ? (
        <div className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-wider text-parchment-300/60 mb-3">
              minutes
            </p>
            <div className="flex flex-wrap gap-2">
              {[15, 25, 45, 60, 90].map((m) => (
                <button
                  key={m}
                  onClick={() => setMinutes(m)}
                  className={`px-4 py-2 border transition-colors ${
                    minutes === m
                      ? "border-gold-500 text-gold-400"
                      : "border-ink-700 text-parchment-200 hover:border-gold-500/40"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-parchment-300/60 mb-3">
              go to
            </p>
            <div className="flex flex-wrap gap-2">
              {DESTINATIONS.map((d) => (
                <button
                  key={d}
                  onClick={() => setDestination(d)}
                  className={`px-4 py-2 border transition-colors ${
                    destination === d
                      ? "border-gold-500 text-gold-400"
                      : "border-ink-700 text-parchment-200 hover:border-gold-500/40"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={start}
            className="w-full border border-gold-500 text-gold-400 py-4 hover:bg-gold-500 hover:text-ink-950 transition-colors uppercase tracking-[0.2em]"
          >
            Lock my phone
          </button>
        </div>
      ) : (
        <div className="text-center">
          <p className="font-arabic text-6xl text-gold-400 leading-none mb-3 tabular-nums">
            {mm}:{ss}
          </p>
          <p className="text-parchment-200 mb-6">
            Go to <span className="text-gold-400">{destination}</span>.
          </p>
          <button
            onClick={cancel}
            className="text-xs text-parchment-300/50 hover:text-parchment-300 transition-colors"
          >
            cancel
          </button>
        </div>
      )}
    </div>
  );
}
