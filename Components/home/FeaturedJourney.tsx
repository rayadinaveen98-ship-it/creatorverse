import Image from "next/image";
import Link from "next/link";

interface FeaturedJourneyProps {
  label: string;
  creatorSlug: string;
  creatorName: string;
  narrative: string;
  image: string;
}

export default function FeaturedJourney({
  label,
  creatorSlug,
  creatorName,
  narrative,
  image,
}: FeaturedJourneyProps) {
  return (
    <Link
      href={`/creators/${creatorSlug}`}
      className="group relative block overflow-hidden rounded-2xl border border-border hover-glow"
    >
      <div className="relative aspect-[16/9] sm:aspect-[21/9]">
        <Image
          src={image}
          alt={creatorName}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <div className="overlay-cinematic absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/90 via-bg/50 to-transparent" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-12">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
          {label}
        </p>
        <h2 className="mt-2 font-display text-2xl font-bold text-text sm:text-4xl lg:text-5xl">
          {creatorName}
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
          {narrative}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-all group-hover:gap-3">
          Explore Journey <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
