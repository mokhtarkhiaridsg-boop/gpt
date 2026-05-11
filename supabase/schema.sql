-- Tamkīn — initial schema
-- Run this in the Supabase SQL Editor (or via supabase CLI) to bootstrap
-- the database for the Ummah Trajectory page.
--
-- Privacy posture: every table that touches user-level data must enable
-- Row Level Security (RLS). The public-facing aggregates below are
-- explicitly read-only-public; the user-level tables come later.

-- =============================================================================
-- ummah_counters — public, anonymized, differentially-private aggregates
-- =============================================================================
create table if not exists public.ummah_counters (
  slug        text primary key,
  label       text not null,
  value       bigint not null default 0,
  note        text,
  position    int not null default 0,
  updated_at  timestamptz not null default now()
);

alter table public.ummah_counters enable row level security;

drop policy if exists "ummah_counters readable by anyone" on public.ummah_counters;
create policy "ummah_counters readable by anyone"
  on public.ummah_counters for select
  using (true);

-- writes are restricted to service_role (no public policy = denied)

insert into public.ummah_counters (slug, label, value, note, position) values
  ('salah_today',        'Ṣalawāt prayed today',                4217902,   'anonymous, opt-in, differentially private', 1),
  ('ayat_week',          'Ayāt read this week',                 19431007,  'Quran ladder + tadabbur',                   2),
  ('trees_planted',      'Trees planted by the Sunnah Garden',  412901,    'dates, olives, figs, miswāk, more',         3),
  ('sadaqah_week_cents', 'Ṣadaqah this week',                   120483000, 'ribā-free verified channels',               4),
  ('porn_clean_30d',     'Brothers off porn 30+ days',          182439,    'Awwāb badge, accountability brother',       5),
  ('hifdh_in_progress',  'Hifdh in progress',                   8114,      'across all ten rungs',                      6),
  ('suhoor_jamaahs',     'Group Suhoor jamā''ahs hosted',       29481,     'with halal restaurant partners',            7),
  ('hectares_revived',   'Hectares of dead land revived',       11927,     'permaculture + Islamic land ethics',        8)
on conflict (slug) do update
  set label = excluded.label,
      value = excluded.value,
      note = excluded.note,
      position = excluded.position,
      updated_at = now();

-- =============================================================================
-- milestones — public civilizational goals with running progress
-- =============================================================================
create table if not exists public.milestones (
  slug        text primary key,
  label       text not null,
  target      bigint not null,
  current     bigint not null default 0,
  position    int not null default 0,
  updated_at  timestamptz not null default now()
);

alter table public.milestones enable row level security;

drop policy if exists "milestones readable by anyone" on public.milestones;
create policy "milestones readable by anyone"
  on public.milestones for select
  using (true);

insert into public.milestones (slug, label, target, current, position) values
  ('memorizers',     '1,000,000 memorizers of the Quran',                1000000,   14000,  1),
  ('trees',          '100,000,000 trees planted',                        100000000, 412901, 2),
  ('businesses',     '10,000 ribā-free Muslim businesses linked',        10000,     32,     3),
  ('hifdh_schools',  '100 hifdh schools sponsored',                      100,       2,      4),
  ('wells',          '1,000 wells built',                                1000,      57,     5),
  ('porn_year',      '1,000,000 brothers free from porn 1 year+',        1000000,   9000,   6)
on conflict (slug) do update
  set label = excluded.label,
      target = excluded.target,
      current = excluded.current,
      position = excluded.position,
      updated_at = now();

-- =============================================================================
-- Future tables — left as a roadmap, NOT created here:
--
-- profiles            — kunya, madhab, gender, city, created_at  (RLS: owner-only)
-- salah_logs          — user_id, date, fajr..isha boolean        (RLS: owner-only)
-- salah_pairs         — user_a, user_b, status, paired_at        (RLS: members only)
-- quran_progress      — user_id, rung, last_ayah, hifdh_juz      (RLS: owner-only)
-- wird_logs           — user_id, date, morning, evening          (RLS: owner-only)
-- garden_plants       — user_id, plant_slug, planted_at, notes   (RLS: owner-only)
-- circles             — kunya, city, members[]                   (RLS: members only)
-- shaytan_log         — user_id, event_at, kind, notes           (RLS: owner-only, encrypted)
--
-- Aggregates derived from these tables go through a server-side function
-- with calibrated DP noise before being written back into ummah_counters.
-- =============================================================================
