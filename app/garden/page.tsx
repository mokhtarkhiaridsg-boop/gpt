const PLANTS = [
  {
    name: "Date palm",
    arabic: "نَخْلَة",
    latin: "Phoenix dactylifera",
    week: 4,
    weeks: 12,
    task: "Water deeply. Let the topsoil dry between waterings — the date palm hates wet feet.",
    note: "The Prophet ﷺ said: \"Whoever eats seven 'ajwa dates in the morning will not be harmed by poison or sorcery that day.\" — Bukhārī.",
  },
  {
    name: "Olive",
    arabic: "زَيْتُون",
    latin: "Olea europaea",
    week: 4,
    weeks: 12,
    task: "Wait. The olive is patient; you become patient with it.",
    note: "Mentioned by Allah seven times in the Quran. The blessed tree of Sūrat al-Tīn.",
  },
  {
    name: "Black seed",
    arabic: "حَبَّة السَّوْدَاء",
    latin: "Nigella sativa",
    week: 4,
    weeks: 12,
    task: "Harvest in nine days. Save half the seed for next season.",
    note: "The Prophet ﷺ said: \"In the black seed is healing for every disease except death.\" — Bukhārī.",
  },
];

const SUNNAH_CATALOG = [
  { name: "Date palm", arabic: "نَخْلَة" },
  { name: "Olive", arabic: "زَيْتُون" },
  { name: "Fig", arabic: "تِين" },
  { name: "Pomegranate", arabic: "رُمَّان" },
  { name: "Grape", arabic: "عِنَب" },
  { name: "Black seed", arabic: "حَبَّة السَّوْدَاء" },
  { name: "Miswāk tree", arabic: "أَرَاك" },
  { name: "Basil", arabic: "رَيْحَان" },
  { name: "Barley", arabic: "شَعِير" },
  { name: "Bottle gourd", arabic: "دُبَّاء" },
];

export default function GardenPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-gold-500/70 mb-3">
          arḍ
        </p>
        <h1 className="text-4xl text-parchment-50">Sunnah Garden</h1>
        <p className="text-parchment-300/70 mt-3 max-w-prose">
          Three plants from the Quran and the Sunnah, chosen for your climate.
          Twelve weeks, one care task at a time. Tend, log, harvest. The
          Prophet ﷺ said: <em className="text-gold-400">"If the Hour is
          established and one of you has a sapling in his hand, let him
          plant it."</em>
        </p>
      </header>

      {/* Today's care */}
      <section className="mb-10">
        <h2 className="text-xl text-gold-400 mb-2">Today</h2>
        <p className="text-sm text-parchment-300/70 mb-6 italic">
          One task per plant. Five minutes outside. Then go pray.
        </p>
        <ul className="space-y-4">
          {PLANTS.map((p) => (
            <li
              key={p.name}
              className="border border-ink-700 bg-ink-900/40 p-6"
            >
              <div className="flex items-baseline justify-between mb-3">
                <div>
                  <h3 className="text-lg text-parchment-50">{p.name}</h3>
                  <p className="text-xs text-parchment-300/50 italic">
                    {p.latin}
                  </p>
                </div>
                <span className="arabic text-2xl text-gold-500/80">
                  {p.arabic}
                </span>
              </div>
              <div className="mb-3">
                <div className="flex items-baseline justify-between text-xs text-parchment-300/60 mb-1">
                  <span>
                    week {p.week} of {p.weeks}
                  </span>
                  <span>{Math.round((p.week / p.weeks) * 100)}%</span>
                </div>
                <div className="h-1 bg-ink-700">
                  <div
                    className="h-1 bg-gold-500"
                    style={{ width: `${(p.week / p.weeks) * 100}%` }}
                  />
                </div>
              </div>
              <p className="text-parchment-200 leading-relaxed mb-3">
                {p.task}
              </p>
              <p className="text-sm text-parchment-300/60 italic border-l border-gold-500/30 pl-3">
                {p.note}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Catalog */}
      <section className="mb-10">
        <h2 className="text-xl text-gold-400 mb-2">The Sunnah catalog</h2>
        <p className="text-sm text-parchment-300/70 mb-6 italic">
          Plants the Quran and Sunnah explicitly name. The app filters by your
          climate and shows only what will grow where you are.
        </p>
        <ul className="grid gap-px bg-ink-700/40 sm:grid-cols-2 lg:grid-cols-5">
          {SUNNAH_CATALOG.map((p) => (
            <li
              key={p.name}
              className="bg-ink-950 p-5 text-center hover:bg-ink-900 transition-colors"
            >
              <span className="arabic text-2xl text-gold-500/80 block mb-2">
                {p.arabic}
              </span>
              <span className="text-sm text-parchment-200">{p.name}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Community total */}
      <section className="border border-ink-700 bg-ink-900/40 p-8 text-center">
        <p className="text-xs uppercase tracking-wider text-parchment-300/60 mb-2">
          the Ummah on this app
        </p>
        <p className="font-arabic text-5xl text-gold-400 leading-tight mb-2">
          412,901
        </p>
        <p className="text-parchment-200">trees planted</p>
        <p className="text-sm text-parchment-300/60 mt-3 italic">
          One tree per istighfār is a campaign within the app. The counter is
          differentially private — your contribution is invisible to anyone but
          you.
        </p>
      </section>

      <div className="hairline my-16" />

      <section className="text-center max-w-prose mx-auto">
        <p className="arabic text-gold-500/90 text-2xl mb-4 leading-loose">
          مَا مِنْ مُسْلِمٍ يَغْرِسُ غَرْسًا فَيَأْكُلُ مِنْهُ إِنْسَانٌ أَوْ
          دَابَّةٌ إِلَّا كَانَ لَهُ بِهِ صَدَقَةٌ
        </p>
        <p className="text-parchment-200 italic">
          "No Muslim plants a plant from which a human or an animal eats except
          that it is a ṣadaqah for him." — Bukhārī
        </p>
      </section>
    </div>
  );
}
