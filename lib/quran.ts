export type Ayah = {
  number: number;
  text: string;
  surah: { number: number; name: string; englishName: string; englishNameTranslation: string };
  numberInSurah: number;
  translation: string;
};

const TOTAL_AYAT = 6236;

export function ayahNumberForToday(): number {
  const epoch = new Date(Date.UTC(2026, 0, 1));
  const today = new Date();
  const utc = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
  const days = Math.floor((utc - epoch.getTime()) / 86400000);
  return ((days % TOTAL_AYAT) + TOTAL_AYAT) % TOTAL_AYAT + 1;
}

export async function fetchAyahOfDay(): Promise<Ayah | null> {
  const n = ayahNumberForToday();
  try {
    const [arabic, english] = await Promise.all([
      fetch(`https://api.alquran.cloud/v1/ayah/${n}/quran-uthmani`, {
        next: { revalidate: 86400 },
      }).then((r) => r.json()),
      fetch(`https://api.alquran.cloud/v1/ayah/${n}/en.sahih`, {
        next: { revalidate: 86400 },
      }).then((r) => r.json()),
    ]);
    if (arabic?.code !== 200 || english?.code !== 200) return null;
    return {
      number: arabic.data.number,
      text: arabic.data.text,
      surah: {
        number: arabic.data.surah.number,
        name: arabic.data.surah.name,
        englishName: arabic.data.surah.englishName,
        englishNameTranslation: arabic.data.surah.englishNameTranslation,
      },
      numberInSurah: arabic.data.numberInSurah,
      translation: english.data.text,
    };
  } catch {
    return null;
  }
}

export const FALLBACK_AYAH: Ayah = {
  number: 2748,
  text: "الَّذِينَ إِن مَّكَّنَّاهُمْ فِي الْأَرْضِ أَقَامُوا الصَّلَاةَ وَآتَوُا الزَّكَاةَ وَأَمَرُوا بِالْمَعْرُوفِ وَنَهَوْا عَنِ الْمُنكَرِ ۗ وَلِلَّهِ عَاقِبَةُ الْأُمُورِ",
  surah: {
    number: 22,
    name: "سُورَةُ الحَجِّ",
    englishName: "Al-Hajj",
    englishNameTranslation: "The Pilgrimage",
  },
  numberInSurah: 41,
  translation:
    "Those who, if We give them authority in the land, establish prayer and give zakat and enjoin what is right and forbid what is wrong. And to Allah belongs the outcome of all matters.",
};
