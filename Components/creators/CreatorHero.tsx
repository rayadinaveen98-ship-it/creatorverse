import Image from "next/image";
import Link from "next/link";
import type { CreatorProfile } from "@/lib/types";

export default function CreatorHero({ profile }: { profile: CreatorProfile }) {
  return (
    <section className="relative min-h-[55vh] overflow-hidden sm:min-h-[60vh]">
      <Image
        src={profile.heroImage}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="overlay-cinematic absolute inset-0" />
      <div className="overlay-side absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:gap-10">
          <div className="relative mx-auto h-44 w-32 shrink-0 overflow-hidden rounded-2xl border border-border shadow-2xl sm:mx-0 sm:h-56 sm:w-40">
            <Image
              src={profile.portrait}
              alt={profile.name}
              fill
              className="object-cover"
              sizes="160px"
            />
          </div>

          <div className="text-center sm:text-left">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Creator Journey
            </p>
            <h1 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-3 max-w-lg text-base italic text-muted sm:text-lg">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-8 sm:justify-start sm:gap-12">
              <Stat value={profile.stats.works} label="Works" />
              <Stat value={profile.stats.keyMoments} label="Key Moments" />
              <Stat value={profile.stats.creativeEras} label="Creative Eras" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div>
      <p className="font-display text-3xl font-bold text-gold sm:text-4xl">{value}</p>
      <p className="mt-0.5 text-xs uppercase tracking-wider text-muted">{label}</p>
    </div>
  );
}
