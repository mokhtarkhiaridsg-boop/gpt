import { getSupabaseServer } from "@/lib/supabase/server";

export type UmmahCounter = {
  slug: string;
  label: string;
  value: number;
  note: string;
};

export type Milestone = {
  slug: string;
  label: string;
  target: number;
  current: number;
};

export const FALLBACK_COUNTERS: UmmahCounter[] = [
  { slug: "salah_today", label: "Ṣalawāt prayed today", value: 4_217_902, note: "anonymous, opt-in, differentially private" },
  { slug: "ayat_week", label: "Ayāt read this week", value: 19_431_007, note: "Quran ladder + tadabbur" },
  { slug: "trees_planted", label: "Trees planted by the Sunnah Garden", value: 412_901, note: "dates, olives, figs, miswāk, more" },
  { slug: "sadaqah_week_cents", label: "Ṣadaqah this week", value: 120_483_000, note: "ribā-free verified channels" },
  { slug: "porn_clean_30d", label: "Brothers off porn 30+ days", value: 182_439, note: "Awwāb badge, accountability brother" },
  { slug: "hifdh_in_progress", label: "Hifdh in progress", value: 8_114, note: "across all ten rungs" },
  { slug: "suhoor_jamaahs", label: "Group Suhoor jamā'ahs hosted", value: 29_481, note: "with halal restaurant partners" },
  { slug: "hectares_revived", label: "Hectares of dead land revived", value: 11_927, note: "permaculture + Islamic land ethics" },
];

export const FALLBACK_MILESTONES: Milestone[] = [
  { slug: "memorizers", label: "1,000,000 memorizers of the Quran", target: 1_000_000, current: 14_000 },
  { slug: "trees", label: "100,000,000 trees planted", target: 100_000_000, current: 412_901 },
  { slug: "businesses", label: "10,000 ribā-free Muslim businesses linked", target: 10_000, current: 32 },
  { slug: "hifdh_schools", label: "100 hifdh schools sponsored", target: 100, current: 2 },
  { slug: "wells", label: "1,000 wells built", target: 1_000, current: 57 },
  { slug: "porn_year", label: "1,000,000 brothers free from porn 1 year+", target: 1_000_000, current: 9_000 },
];

export function formatCounter(c: UmmahCounter): string {
  if (c.slug === "sadaqah_week_cents") {
    return "$" + Math.floor(c.value / 100).toLocaleString();
  }
  return c.value.toLocaleString();
}

export function milestonePct(m: Milestone): number {
  return (m.current / m.target) * 100;
}

export async function fetchUmmahData(): Promise<{
  counters: UmmahCounter[];
  milestones: Milestone[];
  source: "supabase" | "fallback";
}> {
  const supabase = getSupabaseServer();
  if (!supabase) {
    return {
      counters: FALLBACK_COUNTERS,
      milestones: FALLBACK_MILESTONES,
      source: "fallback",
    };
  }
  try {
    const [countersRes, milestonesRes] = await Promise.all([
      supabase.from("ummah_counters").select("slug,label,value,note").order("position"),
      supabase.from("milestones").select("slug,label,target,current").order("position"),
    ]);
    const counters =
      countersRes.data && countersRes.data.length > 0
        ? (countersRes.data as UmmahCounter[])
        : FALLBACK_COUNTERS;
    const milestones =
      milestonesRes.data && milestonesRes.data.length > 0
        ? (milestonesRes.data as Milestone[])
        : FALLBACK_MILESTONES;
    return {
      counters,
      milestones,
      source: countersRes.error || milestonesRes.error ? "fallback" : "supabase",
    };
  } catch {
    return {
      counters: FALLBACK_COUNTERS,
      milestones: FALLBACK_MILESTONES,
      source: "fallback",
    };
  }
}
