const TWELVE = [
  { kunya: "Abū Yūsuf", consistency: 7 },
  { kunya: "Abū Ḥamza", consistency: 6 },
  { kunya: "Abū 'Abdillāh", consistency: 7 },
  { kunya: "Abū Bakr", consistency: 5 },
  { kunya: "Abū al-Ḥasan", consistency: 7 },
  { kunya: "Abū Idrīs", consistency: 4 },
  { kunya: "Abū Ṣāliḥ", consistency: 6 },
  { kunya: "Abū Ṭalḥa", consistency: 7 },
  { kunya: "Abū Sa'īd", consistency: 5 },
  { kunya: "Abū al-Qāsim", consistency: 7 },
  { kunya: "Abū Mu'ādh", consistency: 6 },
  { kunya: "Abū 'Umar", consistency: 7 },
];

const DRILLS = [
  {
    week: 18,
    title: "Twenty kilometres in silence",
    body: "Walk twenty kilometres without your phone, without speaking, before maghrib. The Prophet ﷺ walked everywhere; we have forgotten how.",
  },
  {
    week: 19,
    title: "Thirty fards in the masjid",
    body: "Pray every fard in jamā'ah at the masjid for thirty days. No exceptions short of illness.",
  },
  {
    week: 20,
    title: "Sleep on the floor",
    body: "One week. Wake naturally before fajr. Pray two raka'at qiyām before adhan.",
  },
];

export default function CirclePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-gold-500/70 mb-3">
          ukhuwwah
        </p>
        <h1 className="text-4xl text-parchment-50">Circle of Twelve</h1>
        <p className="text-parchment-300/70 mt-3 max-w-prose">
          A geo-bounded circle that meets every week in person. Logistics in the
          app. Brotherhood in the world. Twelve, after the naqībs at Bay'at
          al-'Aqabah.
        </p>
      </header>

      {/* Next meetup */}
      <section className="mb-10 border border-gold-500/40 bg-gold-500/5 p-8">
        <p className="text-xs uppercase tracking-wider text-gold-500/80 mb-2">
          this week
        </p>
        <h2 className="text-2xl text-parchment-50 mb-4">
          Saturday after 'Aṣr · Masjid al-Falāḥ
        </h2>
        <p className="text-parchment-200 leading-relaxed">
          Bring something to share for iftār. We are in the eighteenth Hayba
          drill — see below. RSVPs go to the brother hosting; details exchanged
          E2E-encrypted in the app.
        </p>
      </section>

      {/* The twelve */}
      <section className="mb-10">
        <h2 className="text-xl text-gold-400 mb-2">Your twelve</h2>
        <p className="text-sm text-parchment-300/70 mb-6 italic">
          Kunyas only. No real names. The circle is bound by attendance, not
          algorithms.
        </p>
        <ul className="grid gap-px bg-ink-700/40 sm:grid-cols-2 lg:grid-cols-3">
          {TWELVE.map((b) => (
            <li
              key={b.kunya}
              className="bg-ink-950 p-5 flex items-baseline justify-between"
            >
              <span className="text-parchment-100">{b.kunya}</span>
              <span className="text-xs text-gold-500/70">
                {b.consistency}/7 days
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Group Suhoor */}
      <section className="mb-10 border border-ink-700 bg-ink-900/40 p-8">
        <div className="flex items-baseline justify-between mb-3">
          <h2 className="text-xl text-gold-400">Group Suhoor</h2>
          <span className="text-xs uppercase tracking-wider text-parchment-300/60">
            partner: Karim's Grill
          </span>
        </div>
        <p className="text-parchment-200 mb-4 leading-relaxed">
          Sunday 4:30 am at <span className="text-gold-400">Karim's Grill</span>.
          Tamkīn brothers eat at <span className="text-gold-400">−25%</span> with
          a single-use code. The restaurant sees only the code, never your
          identity.
        </p>
        <p className="text-sm text-parchment-300/60 italic">
          Eating suhoor in jamā'ah is a Sunnah. So is supporting the local Muslim
          economy. The Halal Business Network ties them together.
        </p>
      </section>

      {/* Drills */}
      <section>
        <h2 className="text-xl text-gold-400 mb-2">Hayba & Sakīna Drills</h2>
        <p className="text-sm text-parchment-300/70 mb-6 italic">
          Weekly Sunnah-rooted formidability challenges. Brothers walk the path
          of hayba; sisters walk the path of sakīna. Same road, different
          language.
        </p>
        <ul className="space-y-4">
          {DRILLS.map((d) => (
            <li key={d.week} className="border-l border-gold-500/40 pl-6 py-2">
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-parchment-50">{d.title}</h3>
                <span className="text-xs uppercase tracking-wider text-gold-500/60">
                  week {d.week}
                </span>
              </div>
              <p className="text-parchment-200/85 leading-relaxed">{d.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="hairline my-16" />

      <section className="text-center max-w-prose mx-auto">
        <p className="arabic text-gold-500/90 text-2xl mb-4">
          الْمَرْءُ عَلَىٰ دِينِ خَلِيلِهِ
        </p>
        <p className="text-parchment-200 italic">
          "A man is upon the religion of his close friend, so let one of you
          look at whom he befriends." — Abū Dāwūd
        </p>
      </section>
    </div>
  );
}
