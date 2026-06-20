import Image from "next/image";
import Link from "next/link";
import type { EditorialStory } from "@/lib/types";

export default function EditorialCard({ story }: { story: EditorialStory }) {
  return (
    <Link
      href={`/creators/${story.creatorSlug}`}
      className="group grid overflow-hidden rounded-2xl border border-border bg-card hover-glow lg:grid-cols-5"
    >
      <div className="relative aspect-[16/10] overflow-hidden lg:col-span-2 lg:aspect-auto lg:min-h-[300px]">
        <Image
          src={story.image}
          alt=""
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-card/40" />
      </div>

      <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-3">
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-gold">
            Story
          </span>
          {story.readTime && (
            <span className="text-xs text-muted">{story.readTime} read</span>
          )}
        </div>
        <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-text transition-colors group-hover:text-gold sm:text-2xl lg:text-3xl">
          {story.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          {story.subtitle}
        </p>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-gold transition-all group-hover:gap-2">
          Begin Reading <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
