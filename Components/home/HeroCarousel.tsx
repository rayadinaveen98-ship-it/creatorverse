"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import type { Creator } from "@/lib/types";

export default function HeroCarousel({ creators }: { creators: Creator[] }) {
  const [active, setActive] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (transitioning) return;
      setTransitioning(true);
      setActive(index);
      setTimeout(() => setTransitioning(false), 700);
    },
    [transitioning]
  );

  const next = useCallback(() => goTo((active + 1) % creators.length), [active, creators.length, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const current = creators[active];

  return (
    <section className="relative h-[85vh] min-h-[520px] max-h-[800px] w-full overflow-hidden">
      {creators.map((creator, i) => (
        <div
          key={creator.slug}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={creator.backdrop}
            alt=""
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}

      <div className="overlay-cinematic absolute inset-0" />
      <div className="overlay-side absolute inset-0" />

      <div className="relative mx-auto flex h-full max-w-7xl items-end px-4 pb-12 pt-24 sm:px-6 sm:pb-16 lg:px-8">
        <div className="flex w-full flex-col gap-8 sm:flex-row sm:items-end sm:gap-10">
          {/* Portrait */}
          <div
            key={`portrait-${current.slug}`}
            className="relative mx-auto h-36 w-28 shrink-0 overflow-hidden rounded-2xl border border-border shadow-2xl shadow-black/50 sm:mx-0 sm:h-52 sm:w-40 animate-fade-up"
          >
            <Image
              src={current.portrait}
              alt={current.name}
              fill
              className="object-cover"
              sizes="160px"
            />
          </div>

          {/* Text */}
          <div key={`text-${current.slug}`} className="flex-1 text-center sm:text-left animate-fade-up">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Featured Journey
            </p>
            <h1 className="mt-2 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {current.name}
            </h1>
            <p className="mt-3 max-w-lg text-base italic text-muted sm:text-lg lg:text-xl">
              &ldquo;{current.identity}&rdquo;
            </p>
            <Link
              href={`/creators/${current.slug}`}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-bg transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
            >
              Explore Journey
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-8">
          {creators.map((c, i) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`View ${c.name}`}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === active ? "w-8 bg-gold" : "w-4 bg-text/25 hover:bg-text/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
