"use client";

import Image from "next/image";
import { useState } from "react";
import type { CreativePattern } from "@/lib/types";

export default function SpielbergPatterns({ patterns }: { patterns: CreativePattern[] }) {
  const [active, setActive] = useState(0);
  const current = patterns[active];

  return (
    <section className="relative overflow-hidden rounded-3xl border border-border bg-card">
      {/* Header */}
      <div className="border-b border-border px-6 py-8 sm:px-10 sm:py-10">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
          Flagship Insight
        </p>
        <h2 className="mt-2 font-display text-2xl font-bold text-text sm:text-3xl lg:text-4xl">
          Why Spielberg Feels Like Spielberg
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          These aren&apos;t themes or labels. They&apos;re recurring creative patterns —
          the instincts that make his work unmistakably his. Select a pattern to understand why.
        </p>
      </div>

      <div className="grid lg:grid-cols-12">
        {/* Pattern selector */}
        <div className="border-b border-border lg:col-span-4 lg:border-b-0 lg:border-r">
          <div className="flex gap-2 overflow-x-auto p-4 no-scrollbar lg:flex-col lg:gap-1 lg:p-6">
            {patterns.map((pattern, i) => (
              <button
                key={pattern.name}
                type="button"
                onClick={() => setActive(i)}
                className={`shrink-0 rounded-xl px-4 py-3 text-left transition-all duration-300 lg:w-full ${
                  i === active
                    ? "bg-gold/10 border border-gold/30"
                    : "border border-transparent hover:bg-bg"
                }`}
              >
                <span
                  className={`font-display text-base font-semibold sm:text-lg ${
                    i === active ? "text-gold" : "text-muted"
                  }`}
                >
                  {pattern.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Pattern detail */}
        <div className="lg:col-span-8">
          <div key={current.name} className="animate-fade-up">
            <div className="relative h-48 overflow-hidden sm:h-56">
              <Image
                src={current.image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
            </div>

            <div className="pattern-card relative p-6 sm:p-8 lg:p-10">
              <h3 className="font-display text-2xl font-bold text-text sm:text-3xl">
                {current.name}
              </h3>

              <p className="mt-4 text-base leading-[1.8] text-muted sm:text-lg">
                {current.explanation}
              </p>

              <div className="mt-8">
                <p className="text-xs font-medium uppercase tracking-wider text-gold">
                  You&apos;ll see this in
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {current.examples.map((example) => (
                    <span
                      key={example}
                      className="rounded-full border border-border bg-bg px-4 py-2 text-sm text-text"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-xl border border-gold/15 bg-gold/5 p-5">
                <p className="text-sm italic leading-relaxed text-text/90">
                  &ldquo;Once you see the {current.name.toLowerCase()} pattern, you can&apos;t unsee it —
                  it&apos;s in nearly everything he makes.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
