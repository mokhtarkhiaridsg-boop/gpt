"use client";

import { useEffect, useState } from "react";

export default function QuietHourBanner() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const check = () => {
      const h = new Date().getHours();
      setActive(h >= 18 && h < 20);
    };
    check();
    const i = setInterval(check, 60_000);
    return () => clearInterval(i);
  }, []);

  if (!active) return null;
  return (
    <div className="border border-gold-500/50 bg-gold-500/5 px-6 py-4 text-center">
      <p className="arabic text-gold-500/90 text-xl mb-1">السَّاعَةُ المُبَارَكَة</p>
      <p className="text-sm text-parchment-200">
        The Quiet Hour. In production, the rest of the app would now be
        unavailable — only the muṣḥaf and Quran audio remain. Stillness
        between maghrib and 'ishā is a Sunnah.
      </p>
    </div>
  );
}
