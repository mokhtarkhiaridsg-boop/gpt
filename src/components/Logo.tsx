export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0" aria-hidden="true">
        <rect width="32" height="32" rx="9" fill="var(--color-clay-500)" />
        <path
          d="M8 20.5 16 9l8 11.5"
          fill="none"
          stroke="var(--color-sand-100)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12.5 24V19h7v5" fill="none" stroke="var(--color-sand-100)" strokeWidth="2.4" strokeLinejoin="round" />
      </svg>
      <span className="font-display text-lg font-semibold tracking-tight">
        Dar&nbsp;Zina
      </span>
    </span>
  );
}
