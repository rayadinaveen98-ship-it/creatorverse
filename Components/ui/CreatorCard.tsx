import Image from "next/image";
import Link from "next/link";
import type { Creator } from "@/lib/types";

export default function CreatorCard({
  creator,
  showProgress = false,
}: {
  creator: Creator;
  showProgress?: boolean;
}) {
  return (
    <Link
      href={`/creators/${creator.slug}`}
      className="group hover-glow w-[220px] shrink-0 overflow-hidden rounded-2xl border border-border bg-card sm:w-[260px]"
    >
      <div className="relative h-[280px] overflow-hidden sm:h-[320px]">
        <Image
          src={creator.backdrop}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="260px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />

        <div className="absolute bottom-3 left-3 h-16 w-12 overflow-hidden rounded-lg border border-border shadow-lg sm:bottom-4 sm:left-4 sm:h-20 sm:w-14">
          <Image
            src={creator.portrait}
            alt={creator.name}
            fill
            className="object-cover"
            sizes="56px"
          />
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-display text-base font-semibold text-text transition-colors group-hover:text-gold sm:text-lg">
          {creator.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-xs text-muted sm:text-sm">
          {creator.identity}
        </p>

        {showProgress && creator.progress !== undefined && (
          <div className="mt-3">
            <div className="flex items-center justify-between text-[10px] text-muted">
              <span>Progress</span>
              <span>{creator.progress}%</span>
            </div>
            <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-border">
              <div
                className="h-full rounded-full bg-gold transition-all duration-500"
                style={{ width: `${creator.progress}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
