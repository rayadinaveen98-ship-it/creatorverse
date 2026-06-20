"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { JourneyChapter } from "@/lib/types";

export default function JourneyMap({ chapters }: { chapters: JourneyChapter[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = chapters[activeIndex];

  return (
    <section className="relative">
      {/* Section intro */}
      <div className="mb-10 text-center sm:mb-12">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
          The Heart of CreatorVerse
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold text-text sm:text-4xl lg:text-5xl">
          Journey Map
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted sm:text-base">
          Seven chapters. One life. Click each moment to explore the story behind the story.
        </p>
        <div className="mx-auto mt-5 gold-line max-w-[120px]" />
      </div>

      {/* Desktop: chapter path + detail panel */}
      <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8">
        {/* Chapter list */}
        <div className="relative lg:col-span-4">
          <div className="absolute left-[27px] top-4 bottom-4 w-px journey-path-line" />
          <div className="space-y-2">
            {chapters.map((chapter, i) => (
              <button
                key={chapter.slug}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`relative flex w-full items-start gap-4 rounded-xl px-4 py-4 text-left transition-all duration-300 ${
                  i === activeIndex
                    ? "bg-gold/8 border border-gold/25"
                    : "border border-transparent hover:bg-card"
                }`}
              >
                <span
                  className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                    i === activeIndex
                      ? "bg-gold text-bg shadow-lg shadow-gold/20"
                      : "border border-border bg-card text-muted"
                  }`}
                >
                  {chapter.number}
                </span>
                <div className="min-w-0 pt-1">
                  <p className="text-[10px] uppercase tracking-wider text-gold">{chapter.year}</p>
                  <h3
                    className={`font-display text-base font-semibold transition-colors ${
                      i === activeIndex ? "text-text" : "text-muted"
                    }`}
                  >
                    {chapter.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Active chapter detail */}
        <div className="lg:col-span-8">
          <ChapterDetail chapter={active} large />
        </div>
      </div>

      {/* Mobile & tablet: horizontal chapter scroll + stacked cards */}
      <div className="lg:hidden">
        <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-4 no-scrollbar">
          {chapters.map((chapter, i) => (
            <button
              key={chapter.slug}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`shrink-0 rounded-xl border px-4 py-3 transition-all duration-300 ${
                i === activeIndex
                  ? "border-gold/40 bg-gold/8"
                  : "border-border bg-card"
              }`}
            >
              <span className="text-[10px] uppercase tracking-wider text-gold">
                Ch. {chapter.number}
              </span>
              <p className="mt-0.5 whitespace-nowrap font-display text-sm font-semibold text-text">
                {chapter.title}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-4">
          <ChapterDetail chapter={active} />
        </div>
      </div>
    </section>
  );
}

function ChapterDetail({ chapter, large = false }: { chapter: JourneyChapter; large?: boolean }) {
  return (
    <div className="hover-glow overflow-hidden rounded-2xl border border-border bg-card animate-fade-up">
      <div className={`relative overflow-hidden ${large ? "h-72" : "h-52"}`}>
        <Image
          src={chapter.image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-xs uppercase tracking-wider text-gold">
            Chapter {chapter.number} · {chapter.year}
          </p>
          <h3 className="mt-1 font-display text-2xl font-bold text-text sm:text-3xl">
            {chapter.title}
          </h3>
        </div>
      </div>

      <div className="space-y-5 p-6 sm:p-8">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted">The Story</p>
          <p className="mt-2 text-sm leading-relaxed text-text sm:text-base">
            {chapter.shortStory}
          </p>
        </div>

        <div className="rounded-xl border border-gold/15 bg-gold/5 p-4 sm:p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-gold">Why It Mattered</p>
          <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
            {chapter.whyItMattered}
          </p>
        </div>

        <Link
          href={`/journeys/${chapter.slug}`}
          className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-5 py-2.5 text-sm font-semibold text-gold transition-all hover:border-gold/50 hover:bg-gold/20"
        >
          Read Full Chapter <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
