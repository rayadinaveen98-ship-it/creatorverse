import Image from "next/image";
import type { EssentialWork } from "@/lib/types";

export default function EssentialWorks({ works }: { works: EssentialWork[] }) {
  return (
    <div className="space-y-6">
      {works.map((work, i) => (
        <div
          key={work.title}
          className={`hover-glow grid overflow-hidden rounded-2xl border border-border bg-card sm:grid-cols-12 ${
            i % 2 === 1 ? "sm:[direction:rtl]" : ""
          }`}
        >
          <div className="relative aspect-[2/3] overflow-hidden sm:col-span-4 sm:aspect-auto sm:min-h-[320px] sm:[direction:ltr]">
            <Image
              src={work.poster}
              alt={work.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-card/60" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
              <p className="text-xs text-gold">{work.year}</p>
              <h3 className="font-display text-2xl font-bold text-text">{work.title}</h3>
            </div>
          </div>

          <div className="flex flex-col justify-center p-6 sm:col-span-8 sm:p-8 sm:[direction:ltr]">
            <div className="space-y-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-gold">
                  Why It Matters
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-text sm:text-base">
                  {work.whyItMatters}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted">
                  Connection to Journey
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {work.journeyConnection}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted">
                  Connection to Creative Patterns
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {work.patternConnection}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
