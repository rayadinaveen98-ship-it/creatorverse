import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CreatorHero from "@/Components/creators/CreatorHero";
import TwoMinuteSummary from "@/Components/creators/TwoMinuteSummary";
import SparkSection from "@/Components/creators/SparkSection";
import ImpactSection from "@/Components/creators/ImpactSection";
import JourneyMap from "@/Components/creators/JourneyMap";
import SpielbergPatterns from "@/Components/creators/SpielbergPatterns";
import EssentialWorks from "@/Components/creators/EssentialWorks";
import ExploreDeeper from "@/Components/creators/ExploreDeeper";
import SectionHeader from "@/Components/ui/SectionHeader";
import { creatorsBySlug } from "@/lib/data/creators";
import { featuredCreators } from "@/lib/data/home";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return featuredCreators.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const profile = creatorsBySlug[slug];
  if (profile) {
    return {
      title: `${profile.name} — CreatorVerse`,
      description: profile.tagline,
    };
  }
  const basic = featuredCreators.find((c) => c.slug === slug);
  return { title: basic ? `${basic.name} — CreatorVerse` : "Creator — CreatorVerse" };
}

export default async function CreatorPage({ params }: PageProps) {
  const { slug } = await params;
  const profile = creatorsBySlug[slug];

  if (profile) {
    return <FullCreatorPage profile={profile} />;
  }

  const basic = featuredCreators.find((c) => c.slug === slug);
  if (!basic) notFound();

  return <ComingSoonCreator creator={basic} />;
}

function FullCreatorPage({ profile }: { profile: NonNullable<(typeof creatorsBySlug)[string]> }) {
  return (
    <>
      <CreatorHero profile={profile} />

      <div className="mx-auto max-w-7xl space-y-20 px-4 py-12 sm:space-y-28 sm:px-6 sm:py-16 lg:px-8">
        <TwoMinuteSummary points={profile.twoMinuteSummary} />

        <SparkSection {...profile.spark} />

        <ImpactSection {...profile.impact} />

        {/* FLAGSHIP: Journey Map */}
        <JourneyMap chapters={profile.chapters} />

        {/* FLAGSHIP: Why Spielberg Feels Like Spielberg */}
        <SpielbergPatterns patterns={profile.patterns} />

        <section>
          <SectionHeader
            title="Essential Works"
            subtitle="Five films that capture the essence of his creative vision — and connect back to the journey."
          />
          <EssentialWorks works={profile.essentialWorks} />
        </section>

        <section>
          <SectionHeader
            title="Explore Deeper"
            subtitle="Influences, quotes, interviews, and legacy — for when you're ready to go further."
          />
          <ExploreDeeper items={profile.exploreDeeper} />
        </section>
      </div>
    </>
  );
}

function ComingSoonCreator({ creator }: { creator: (typeof featuredCreators)[number] }) {
  return (
    <>
      <section className="relative min-h-[45vh] overflow-hidden">
        <Image src={creator.backdrop} alt="" fill priority className="object-cover" sizes="100vw" />
        <div className="overlay-cinematic absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Coming Soon</p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">{creator.name}</h1>
          <p className="mt-4 max-w-xl text-lg italic text-muted">&ldquo;{creator.identity}&rdquo;</p>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-muted">
          This journey is being crafted. Explore{" "}
          <Link href="/creators/steven-spielberg" className="text-gold hover:underline">
            Steven Spielberg
          </Link>{" "}
          for the full V1 experience.
        </p>
      </div>
    </>
  );
}
