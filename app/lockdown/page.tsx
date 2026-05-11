import LockdownToggle from "@/components/LockdownToggle";
import FocusTimer from "@/components/FocusTimer";

export default function LockdownPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-gold-500/70 mb-3">
          guardrails
        </p>
        <h1 className="text-4xl text-parchment-50">Lock down. Walk away.</h1>
        <p className="text-parchment-300/70 mt-3 max-w-prose">
          The dopamine economy was captured by every haram industry. Tamkīn
          gives you the switches to take it back. None of these features
          benefit Tamkīn — they make the app less used. That is the point.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-2 mb-10">
        <LockdownToggle />
        <FocusTimer />
      </section>

      {/* How it really works */}
      <section className="border border-ink-700 bg-ink-900/40 p-8 mb-10">
        <h2 className="text-xl text-gold-400 mb-4">
          How the real Lockdown works
        </h2>
        <ul className="space-y-3 text-parchment-200/90 leading-relaxed">
          <li className="flex items-baseline gap-3">
            <span className="text-gold-500/70 text-sm">①</span>
            <span>
              You tap the button. The block list ships with the app — no
              "what site did you try" telemetry leaves your device, ever.
            </span>
          </li>
          <li className="flex items-baseline gap-3">
            <span className="text-gold-500/70 text-sm">②</span>
            <span>
              Device-level DNS filtering kicks in: major sites, image search,
              the obvious bypasses.
            </span>
          </li>
          <li className="flex items-baseline gap-3">
            <span className="text-gold-500/70 text-sm">③</span>
            <span>
              To unlock, you need a thirty-day cooldown <em>and</em> your
              accountability brother to co-sign. He sees only the unlock
              request — never any relapse data.
            </span>
          </li>
          <li className="flex items-baseline gap-3">
            <span className="text-gold-500/70 text-sm">④</span>
            <span>
              At thirty days, ninety days, and three hundred sixty-five days
              clean, the <span className="text-gold-400">Awwāb</span> badge
              upgrades. After a year, you are invited to mentor a brother who
              is just starting.
            </span>
          </li>
          <li className="flex items-baseline gap-3">
            <span className="text-gold-500/70 text-sm">⑤</span>
            <span>
              Attempted-access events stay on your device only — for your own
              muhāsabah. No one else can see them. Not your brother. Not us.
              Not anyone.
            </span>
          </li>
        </ul>
      </section>

      {/* Live Adhan + Quiet Hour explainer */}
      <section className="grid gap-6 lg:grid-cols-2 mb-10">
        <div className="border border-ink-700 bg-ink-900/40 p-8">
          <h2 className="text-xl text-gold-400 mb-3">Live Adhan Mode</h2>
          <p className="text-parchment-200/85 leading-relaxed mb-3">
            When the adhan rings in your city, the app dims, plays your local
            mu'adhdhin, and shows a single prompt:{" "}
            <em className="text-gold-400">"Stop. Leave the phone. Go pray."</em>
          </p>
          <p className="text-sm text-parchment-300/60 italic">
            Five minutes later: a brutal-honesty button. Did you pray? Logs
            to your Salah Companion.
          </p>
        </div>
        <div className="border border-ink-700 bg-ink-900/40 p-8">
          <h2 className="text-xl text-gold-400 mb-3">The Quiet Hour</h2>
          <p className="text-parchment-200/85 leading-relaxed mb-3">
            Between maghrib and 'ishā, Tamkīn refuses to do anything except
            play Quran or open the muṣḥaf. No tracker. No social. No garden.
            No gym.
          </p>
          <p className="text-sm text-parchment-300/60 italic">
            The Sunnah of <em>as-sā'ah al-mubārakah</em> — the blessed hour.
          </p>
        </div>
      </section>

      <div className="hairline my-16" />

      <section className="text-center max-w-prose mx-auto">
        <p className="arabic text-gold-500/90 text-2xl mb-4 leading-loose">
          إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ
        </p>
        <p className="text-parchment-200 italic">
          "Indeed, Allah loves those who turn back to Him in repentance."
          — al-Baqara 2:222
        </p>
      </section>
    </div>
  );
}
