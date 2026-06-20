import Image from "next/image";
import Link from "next/link";
import type { JourneyChapter } from "@/lib/types";

export default function JourneyChapterView({
  chapter,
  creatorName,
  creatorSlug,
}: {
  chapter: JourneyChapter;
  creatorName: string;
  creatorSlug: string;
}) {
  const storyParagraphs = chapter.story.split("\n\n");
  const contextParagraphs = chapter.context.split("\n\n");

  return (
    <article>
      {/* Hero */}
      <section className="relative min-h-[50vh] overflow-hidden sm:min-h-[55vh]">
        <Image
          src={chapter.image}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="overlay-cinematic absolute inset-0" />
        <div className="overlay-side absolute inset-0" />

        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <Link
            href={`/creators/${creatorSlug}`}
            className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-gold"
          >
            ← Back to {creatorName}&apos;s Journey
          </Link>

          <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-gold">
            Chapter {chapter.number} · {chapter.year}
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {chapter.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Story */}
        <section>
          <h2 className="font-display text-2xl font-semibold text-text">Story</h2>
          <div className="mt-5 space-y-4">
            {storyParagraphs.map((p) => (
              <p key={p.slice(0, 40)} className="text-base leading-[1.85] text-muted sm:text-lg">
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Context */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-text">Context</h2>
          <div className="mt-5 space-y-4">
            {contextParagraphs.map((p) => (
              <p key={p.slice(0, 40)} className="text-base leading-[1.85] text-muted sm:text-lg">
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Why It Mattered */}
        <section className="mt-12 rounded-2xl border border-gold/20 bg-gold/5 p-6 sm:p-8">
          <h2 className="font-display text-xl font-semibold text-gold sm:text-2xl">
            Why It Mattered
          </h2>
          <p className="mt-4 text-base leading-[1.85] text-text/90 sm:text-lg">
            {chapter.whyItMattered}
          </p>
        </section>

        {/* Related Works */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-text">Related Works</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {chapter.relatedWorks.map((work) => (
              <div
                key={work.title}
                className="group overflow-hidden rounded-xl border border-border bg-card hover-glow"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="300px"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-gold">{work.year}</p>
                  <h3 className="font-display font-semibold text-text">{work.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Lesson */}
        <section className="mt-12 border-l-2 border-gold pl-6 sm:pl-8">
          <h2 className="font-display text-xl font-semibold text-text">Key Lesson</h2>
          <p className="mt-3 text-base italic leading-[1.85] text-muted sm:text-lg">
            &ldquo;{chapter.lesson}&rdquo;
          </p>
        </section>

        {/* Next Chapter */}
        {chapter.nextChapter && (
          <section className="mt-12">
            <Link
              href={`/journeys/${chapter.nextChapter.slug}`}
              className="group flex items-center justify-between rounded-2xl border border-border bg-card p-5 transition-all hover:border-gold/30 hover:bg-card sm:p-7"
            >
              <div>
                <p className="text-xs uppercase tracking-wider text-gold">Next Chapter</p>
                <h3 className="mt-1 font-display text-xl font-semibold text-text transition-colors group-hover:text-gold sm:text-2xl">
                  {chapter.nextChapter.title}
                </h3>
              </div>
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-all group-hover:border-gold group-hover:text-gold">
                →
              </span>
            </Link>
          </section>
        )}
      </div>
    </article>
  );
}
