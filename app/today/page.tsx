import { fetchAyahOfDay, FALLBACK_AYAH } from "@/lib/quran";
import SalahTracker from "@/components/SalahTracker";
import DhikrCounter from "@/components/DhikrCounter";
import QuietHourBanner from "@/components/QuietHourBanner";

export const revalidate = 3600;

export default async function TodayPage() {
  const ayah = (await fetchAyahOfDay()) ?? FALLBACK_AYAH;

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-gold-500/70 mb-3">
          today
        </p>
        <h1 className="text-4xl text-parchment-50">Your daily ground</h1>
        <p className="text-parchment-300/70 mt-3 max-w-prose">
          A taste of the Ibādah pillar. Five fards, one ayah, one wird. In
          production the Salah Companion sees your row and you see his.
        </p>
      </header>

      <div className="space-y-6 mb-10">
        <QuietHourBanner />
      </div>

      {/* Ayah of the day */}
      <section className="mb-10 border border-ink-700 bg-ink-900/40 p-8">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-xl text-gold-400">Today's ayah</h2>
          <span className="text-xs uppercase tracking-wider text-parchment-300/60">
            {ayah.surah.englishName} · {ayah.surah.englishNameTranslation}
          </span>
        </div>
        <p className="arabic text-2xl text-parchment-50 mb-8 leading-loose">
          {ayah.text}
        </p>
        <p className="text-parchment-200 italic leading-loose max-w-prose">
          "{ayah.translation}"
        </p>
        <p className="text-sm text-gold-500/70 mt-4">
          {ayah.surah.englishName} {ayah.surah.number}:{ayah.numberInSurah}
        </p>
        <div className="hairline mt-8 mb-6" />
        <p className="text-sm text-parchment-300/70 italic">
          Tadabbur prompt — sit with one word. What in your day today touches
          this ayah?
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <SalahTracker />
        <DhikrCounter />
      </section>

      {/* Ladder placeholder */}
      <section className="mt-10 border border-ink-700 bg-ink-900/40 p-8">
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="text-xl text-gold-400">Your Quran rung</h2>
          <span className="text-xs uppercase tracking-wider text-parchment-300/60">
            ladder of ten
          </span>
        </div>
        <p className="text-parchment-200/85 leading-relaxed mb-6">
          One organized path from your first Arabic letter to a full hifdh
          ijāzah. You always know which rung you stand on. No scattered apps,
          no half-finished tracks.
        </p>
        <ol className="space-y-2 text-sm">
          {[
            "Read the Arabic letters",
            "Read words",
            "Tajwīd",
            "300-word Quranic vocabulary",
            "Tadabbur of one ayah a day",
            "Memorization on an SRS schedule",
            "Tasmī' to a teacher",
            "Full hifdh",
            "Tafsīr depth",
            "Pursuit of ijāzah",
          ].map((rung, i) => (
            <li
              key={rung}
              className={`flex items-baseline gap-4 border-l py-2 pl-5 ${
                i < 5
                  ? "border-gold-500/60 text-parchment-100"
                  : "border-ink-700 text-parchment-300/60"
              }`}
            >
              <span
                className={`font-arabic text-sm ${
                  i < 5 ? "text-gold-500" : "text-parchment-300/40"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{rung}</span>
              {i === 4 && (
                <span className="ml-auto text-xs text-gold-500/80">
                  you are here
                </span>
              )}
            </li>
          ))}
        </ol>
      </section>

      <p className="text-center text-sm text-parchment-300/50 mt-16 max-w-prose mx-auto">
        Everything on this page is local-first. Nothing about your salah, your
        dhikr, or your tadabbur leaves your device. That is not a promise; it
        is the architecture.
      </p>
    </div>
  );
}
