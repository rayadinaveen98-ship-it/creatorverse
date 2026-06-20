export default function TwoMinuteSummary({ points }: { points: string[] }) {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 sm:p-8 lg:p-10">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
        If You Only Have 2 Minutes
      </p>
      <h2 className="mt-2 font-display text-xl font-semibold text-text sm:text-2xl">
        Understand the Journey
      </h2>

      <ol className="mt-6 space-y-4">
        {points.map((point, i) => (
          <li key={i} className="flex gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-xs font-bold text-gold">
              {i + 1}
            </span>
            <p className="pt-0.5 text-sm leading-relaxed text-muted sm:text-base">
              {point}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
