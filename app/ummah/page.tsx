import { fetchUmmahData, formatCounter, milestonePct } from "@/lib/ummah";

export const revalidate = 60;

const PETALS = [
  { name: "Salah", value: 0.92 },
  { name: "Quran", value: 0.71 },
  { name: "Arabic", value: 0.34 },
  { name: "Fitness", value: 0.58 },
  { name: "Ṣadaqah", value: 0.66 },
  { name: "Da'wah", value: 0.21 },
  { name: "Fasting", value: 0.49 },
  { name: "Family", value: 0.78 },
];

export default async function UmmahPage() {
  const { counters, milestones, source } = await fetchUmmahData();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-gold-500/70 mb-3">
          masīrat al-ummah
        </p>
        <h1 className="text-4xl text-parchment-50">Ummah Trajectory</h1>
        <p className="text-parchment-300/70 mt-3 max-w-prose">
          The North Star screen. The Ummah is one body — when one part rises,
          the whole rises. Personal action becomes legible as Ummah action.
        </p>
        <p className="text-xs uppercase tracking-wider text-gold-500/60 mt-4">
          source: {source === "supabase" ? "live · supabase" : "fallback seed"}
        </p>
      </header>

      {/* Public Ummah Index */}
      <section className="mb-16">
        <h2 className="text-xl text-gold-400 mb-6">The Ummah today</h2>
        <div className="grid gap-px bg-ink-700/40 sm:grid-cols-2 lg:grid-cols-4">
          {counters.map((c) => (
            <div key={c.slug} className="bg-ink-950 p-6">
              <p className="font-arabic text-3xl text-gold-400 leading-tight">
                {formatCounter(c)}
              </p>
              <p className="text-sm text-parchment-200 mt-2">{c.label}</p>
              <p className="text-xs text-parchment-300/50 mt-2 italic">
                {c.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* My Iqamah Dashboard */}
      <section className="mb-16">
        <h2 className="text-xl text-gold-400 mb-2">My Iqāmah Dashboard</h2>
        <p className="text-sm text-parchment-300/70 mb-6 italic">
          Eight petals. Compared only to your past self. There is no
          leaderboard, ever.
        </p>
        <div className="grid gap-px bg-ink-700/40 sm:grid-cols-2 lg:grid-cols-4">
          {PETALS.map((p) => (
            <div key={p.name} className="bg-ink-950 p-6">
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-parchment-100">{p.name}</span>
                <span className="text-sm text-gold-500/80">
                  {Math.round(p.value * 100)}%
                </span>
              </div>
              <div className="h-1 bg-ink-700">
                <div
                  className="h-1 bg-gold-500"
                  style={{ width: `${p.value * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Civilizational milestones */}
      <section>
        <h2 className="text-xl text-gold-400 mb-2">Civilizational milestones</h2>
        <p className="text-sm text-parchment-300/70 mb-6 italic">
          Long-horizon goals the Ummah on this app explicitly works toward.
          Updated publicly. You are part of something historical.
        </p>
        <ul className="space-y-5">
          {milestones.map((m) => {
            const pct = milestonePct(m);
            return (
              <li key={m.slug} className="border-l border-gold-500/40 pl-6">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-parchment-100">{m.label}</span>
                  <span className="text-sm text-gold-500/80">
                    {pct.toFixed(1)}%
                  </span>
                </div>
                <div className="h-1 bg-ink-700">
                  <div
                    className="h-1 bg-gold-500"
                    style={{ width: `${Math.max(pct, 0.3)}%` }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <div className="hairline my-16" />

      <section className="text-center max-w-prose mx-auto">
        <p className="arabic text-gold-500/90 text-2xl mb-4">
          الْمُؤْمِنُ لِلْمُؤْمِنِ كَالْبُنْيَانِ
        </p>
        <p className="text-parchment-200 italic">
          "The believer to the believer is like a single building — each part
          supports the others." — Bukhārī
        </p>
      </section>
    </div>
  );
}
