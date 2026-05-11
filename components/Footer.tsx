export default function Footer() {
  return (
    <footer className="border-t border-ink-700/60 mt-32">
      <div className="mx-auto max-w-6xl px-6 py-12 text-sm text-parchment-300/60">
        <p className="arabic text-gold-500/80 mb-2">
          وَاللَّهُ غَالِبٌ عَلَىٰ أَمْرِهِ
        </p>
        <p className="italic mb-4">
          And Allah is dominant over His affair. — Yūsuf 12:21
        </p>
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <p>
            Tamkīn is a non-profit waqf project. No ads. No tracking. No data
            sale, ever.
          </p>
          <p className="text-parchment-300/40">AGPL · built by the Ummah, for the Ummah</p>
        </div>
      </div>
    </footer>
  );
}
