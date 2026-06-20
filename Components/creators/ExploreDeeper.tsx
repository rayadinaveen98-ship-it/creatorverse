import type { ExploreItem } from "@/lib/types";

export default function ExploreDeeper({ items }: { items: ExploreItem[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <button
          key={item.title}
          type="button"
          className="group rounded-xl border border-border bg-bg p-5 text-left transition-all duration-300 hover:border-border hover:bg-card sm:p-6"
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-base font-semibold text-muted transition-colors group-hover:text-text sm:text-lg">
              {item.title}
            </h3>
            {item.count && (
              <span className="shrink-0 text-[10px] uppercase tracking-wider text-muted/60">
                {item.count}
              </span>
            )}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted/80">
            {item.description}
          </p>
        </button>
      ))}
    </div>
  );
}
