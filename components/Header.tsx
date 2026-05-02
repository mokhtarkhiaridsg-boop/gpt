import Link from "next/link";

const links = [
  { href: "/today", label: "Today" },
  { href: "/circle", label: "Circle" },
  { href: "/garden", label: "Garden" },
  { href: "/lockdown", label: "Lockdown" },
  { href: "/ummah", label: "Ummah" },
  { href: "/manifesto", label: "Manifesto" },
];

export default function Header() {
  return (
    <header className="border-b border-ink-700/60 bg-ink-950/80 backdrop-blur sticky top-0 z-50">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-y-2 px-6 py-4">
        <Link
          href="/"
          className="font-arabic text-2xl text-gold-500 tracking-wide"
        >
          تَمْكِين
        </Link>
        <ul className="flex flex-wrap items-baseline gap-x-6 gap-y-2 text-sm text-parchment-200">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="hover:text-gold-400 transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
