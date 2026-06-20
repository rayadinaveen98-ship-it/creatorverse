import Link from "next/link";
import type { RabbitHole } from "@/lib/types";

export default function RabbitHolePath({ holes }: { holes: RabbitHole[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {holes.map((hole) => (
        <div
          key={hole.title}
          className="hover-glow rounded-2xl border border-border bg-card p-6 sm:p-7"
        >
          <h3 className="font-display text-lg font-semibold text-text sm:text-xl">
            {hole.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {hole.description}
          </p>

          <div className="mt-6 flex flex-col items-start gap-0">
            {hole.nodes.map((node, i) => (
              <div key={`${hole.title}-${node.name}`} className="flex flex-col items-start">
                {node.slug ? (
                  <Link
                    href={`/creators/${node.slug}`}
                    className="rounded-xl border border-gold/25 bg-gold/8 px-4 py-2.5 text-sm font-medium text-gold transition-all hover:border-gold/50 hover:bg-gold/15"
                  >
                    {node.name}
                  </Link>
                ) : (
                  <span className="rounded-xl border border-border bg-bg px-4 py-2.5 text-sm text-muted">
                    {node.name}
                  </span>
                )}
                {i < hole.nodes.length - 1 && (
                  <span className="my-1.5 ml-5 text-gold/60" aria-hidden>
                    ↓
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
