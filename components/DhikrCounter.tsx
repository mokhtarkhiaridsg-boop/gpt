"use client";

import { useState } from "react";

const PRESETS = [
  { name: "SubḥānAllāh", arabic: "سُبْحَانَ اللَّهِ", target: 33 },
  { name: "Alḥamdulillāh", arabic: "الْحَمْدُ لِلَّهِ", target: 33 },
  { name: "Allāhu Akbar", arabic: "اللَّهُ أَكْبَرُ", target: 34 },
  { name: "Lā ḥawla wa lā quwwata illā billāh", arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ", target: 100 },
  { name: "Astaghfirullāh", arabic: "أَسْتَغْفِرُ اللَّهَ", target: 100 },
];

export default function DhikrCounter() {
  const [pIdx, setPIdx] = useState(0);
  const [count, setCount] = useState(0);
  const p = PRESETS[pIdx];
  const reachedTarget = count >= p.target;

  return (
    <div className="border border-ink-700 bg-ink-900/40 p-8">
      <div className="flex items-baseline justify-between mb-2">
        <h3 className="text-xl text-gold-400">Dhikr</h3>
        <span className="text-sm text-parchment-300/60">
          {count} / {p.target}
        </span>
      </div>
      <p className="text-sm text-parchment-300/60 mb-6 italic">
        Tap anywhere on the field. Eyes-closed mode in the real app.
      </p>
      <button
        onClick={() => setCount((c) => c + 1)}
        className={`w-full border py-12 transition-colors ${
          reachedTarget
            ? "border-gold-500 bg-gold-500/10"
            : "border-ink-700 hover:border-gold-500/40"
        }`}
      >
        <span className="block arabic text-3xl mb-3 text-gold-400">{p.arabic}</span>
        <span className="block text-sm uppercase tracking-wider text-parchment-200">
          {p.name}
        </span>
        <span className="block mt-4 font-arabic text-5xl text-parchment-50">
          {count}
        </span>
      </button>
      <div className="mt-6 flex flex-wrap gap-2">
        {PRESETS.map((preset, i) => (
          <button
            key={preset.name}
            onClick={() => {
              setPIdx(i);
              setCount(0);
            }}
            className={`text-xs px-3 py-1 border transition-colors ${
              i === pIdx
                ? "border-gold-500 text-gold-400"
                : "border-ink-700 text-parchment-300/70 hover:border-gold-500/40"
            }`}
          >
            {preset.name}
          </button>
        ))}
        <button
          onClick={() => setCount(0)}
          className="text-xs px-3 py-1 border border-ink-700 text-parchment-300/70 hover:border-gold-500/40 transition-colors ml-auto"
        >
          reset
        </button>
      </div>
    </div>
  );
}
