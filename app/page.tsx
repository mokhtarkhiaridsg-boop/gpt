import Link from "next/link";
import { PILLARS, MVP_FEATURES, FORBIDDEN } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="lamp absolute inset-0 -z-10" />
        <div className="mx-auto max-w-4xl px-6 pt-24 pb-32 text-center">
          <p className="arabic text-gold-500/90 text-3xl mb-6 breathe">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <h1 className="font-arabic text-7xl text-gold-400 tracking-wider mb-4">
            تَمْكِين
          </h1>
          <p className="text-xs uppercase tracking-[0.4em] text-parchment-300/70 mb-8">
            tamkīn — establishment, ascendance
          </p>
          <p className="text-2xl text-parchment-100 max-w-2xl mx-auto leading-relaxed">
            An app whose success is measured in users{" "}
            <em className="text-gold-400">leaving their phones</em> — to pray,
            to plant, to lift, to build, to serve a higher purpose.
          </p>
          <p className="text-base text-parchment-300/70 mt-8 max-w-prose mx-auto leading-loose">
            Dopamine has been captured by every haram industry on earth. Tamkīn
            redirects it — toward salah, Quran, the Sunnah of agriculture and
            movement, the brotherhood of twelve, the rise of the Ummah.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/today"
              className="border border-gold-500 text-gold-400 px-8 py-3 hover:bg-gold-500 hover:text-ink-950 transition-colors"
            >
              See Today
            </Link>
            <Link
              href="/manifesto"
              className="text-parchment-200 px-8 py-3 hover:text-gold-400 transition-colors"
            >
              Read the manifesto →
            </Link>
          </div>
        </div>
      </section>

      <div className="hairline mx-auto max-w-3xl" />

      {/* The verse */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="arabic text-gold-500/90 text-2xl leading-loose mb-6">
          الَّذِينَ إِن مَّكَّنَّاهُمْ فِي الْأَرْضِ أَقَامُوا الصَّلَاةَ
          وَآتَوُا الزَّكَاةَ وَأَمَرُوا بِالْمَعْرُوفِ وَنَهَوْا عَنِ
          الْمُنكَرِ
        </p>
        <p className="text-parchment-200 italic max-w-prose mx-auto leading-loose">
          "Those who, if We give them <strong className="text-gold-400">tamkīn</strong>{" "}
          in the land, establish prayer, give zakāt, enjoin good, and forbid
          evil. And to Allah belongs the outcome of all matters."
        </p>
        <p className="text-sm text-parchment-300/60 mt-3">— al-Ḥajj 22:41</p>
        <p className="text-parchment-300/70 mt-10 max-w-prose mx-auto">
          The verse is the entire app in thirty words. If Allah establishes
          you in the land, you pray, you give, you build, you restrain evil.
          Tamkīn is named after the means and the end.
        </p>
      </section>

      <div className="hairline mx-auto max-w-3xl" />

      {/* Pillars */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <header className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-500/70 mb-3">
            seven pillars
          </p>
          <h2 className="text-4xl text-parchment-50">
            One organism, seven organs
          </h2>
        </header>
        <div className="grid gap-px bg-ink-700/40 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p) => (
            <article
              key={p.id}
              className="bg-ink-950 p-8 hover:bg-ink-900 transition-colors"
            >
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-xl text-gold-400">{p.name}</h3>
                <span className="arabic text-2xl text-gold-500/70">
                  {p.arabic}
                </span>
              </div>
              <p className="text-sm uppercase tracking-wider text-parchment-300/60 mb-3">
                {p.subtitle}
              </p>
              <p className="text-parchment-200/90 leading-relaxed">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="hairline mx-auto max-w-3xl" />

      {/* The 12 */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <header className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-500/70 mb-3">
            phase one
          </p>
          <h2 className="text-4xl text-parchment-50">The defensible twelve</h2>
          <p className="text-parchment-300/70 mt-4 max-w-prose mx-auto">
            Twelve features that together prove the thesis. If any one is
            removed, the thesis is weaker. If a thirteenth is added, the scope
            creeps and the soul slips.
          </p>
        </header>
        <ol className="grid gap-px bg-ink-700/40 sm:grid-cols-2 lg:grid-cols-3">
          {MVP_FEATURES.map((f) => (
            <li
              key={f.n}
              className="bg-ink-950 p-8 hover:bg-ink-900 transition-colors"
            >
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-arabic text-3xl text-gold-500/40 leading-none">
                  {String(f.n).padStart(2, "0")}
                </span>
                <h3 className="text-lg text-parchment-50">{f.name}</h3>
              </div>
              <p className="text-parchment-200/85 leading-relaxed mb-4">
                {f.body}
              </p>
              <p className="text-xs uppercase tracking-wider text-gold-500/60">
                {f.pillar}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <div className="hairline mx-auto max-w-3xl" />

      {/* Forbidden */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <header className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-500/70 mb-3">
            forbidden by design
          </p>
          <h2 className="text-4xl text-parchment-50">
            Things Tamkīn cannot do
          </h2>
          <p className="text-parchment-300/70 mt-4 max-w-prose mx-auto">
            Not a promise. An architectural constraint, written into the
            charter and enforced by the AGPL. Even a future bad-faith owner
            could not flip these without forfeiting the project.
          </p>
        </header>
        <ul className="space-y-4">
          {FORBIDDEN.map((line) => (
            <li
              key={line}
              className="flex items-baseline gap-4 border-l border-gold-500/40 pl-6 py-1"
            >
              <span className="text-gold-500/70 text-sm">✕</span>
              <span className="text-parchment-200">{line}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="hairline mx-auto max-w-3xl" />

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 py-32 text-center">
        <p className="arabic text-gold-500/90 text-2xl mb-6">
          إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ
        </p>
        <p className="text-parchment-200 italic mb-12">
          The believers are but brothers. — al-Ḥujurāt 49:10
        </p>
        <h2 className="text-3xl text-parchment-50 mb-6">
          The rise of the Ummah is not a metaphor.
        </h2>
        <p className="text-parchment-300/80 max-w-prose mx-auto leading-loose mb-12">
          It is a sum of small, daily, faithful actions — multiplied by a
          billion. Tamkīn does not promise that rise. Tamkīn is the scaffolding
          for the believers who, by Allah's leave, will build it themselves.
        </p>
        <Link
          href="/today"
          className="inline-block border border-gold-500 text-gold-400 px-10 py-4 hover:bg-gold-500 hover:text-ink-950 transition-colors"
        >
          Begin
        </Link>
      </section>
    </>
  );
}
