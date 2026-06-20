import HeroCarousel from "@/Components/home/HeroCarousel";
import FeaturedJourney from "@/Components/home/FeaturedJourney";
import EditorialCard from "@/Components/home/EditorialCard";
import RabbitHolePath from "@/Components/home/RabbitHolePath";
import CreatorCard from "@/Components/ui/CreatorCard";
import HorizontalScroll from "@/Components/ui/HorizontalScroll";
import SectionHeader from "@/Components/ui/SectionHeader";
import {
  continueExploring,
  featuredCreators,
  featuredJourney,
  journeysWorthReading,
  mastersOfEmotion,
  rabbitHoles,
  selfTaughtLegends,
  worldBuilders,
} from "@/lib/data/home";

export default function HomePage() {
  return (
    <>
      <HeroCarousel creators={featuredCreators} />

      <div className="mx-auto max-w-7xl space-y-16 px-4 py-12 sm:space-y-24 sm:px-6 sm:py-16 lg:px-8">
        <section>
          <FeaturedJourney {...featuredJourney} />
        </section>

        <section>
          <SectionHeader
            title="Continue Exploring"
            subtitle="Pick up where you left off. Your journey progress is saved as you explore."
          />
          <HorizontalScroll>
            {continueExploring.map((creator) => (
              <CreatorCard key={creator.slug} creator={creator} showProgress />
            ))}
          </HorizontalScroll>
        </section>

        <section>
          <SectionHeader
            title="Journeys Worth Reading"
            subtitle="Long-form stories — not profiles. Understand how creators evolved."
          />
          <div className="space-y-5">
            {journeysWorthReading.map((story) => (
              <EditorialCard key={story.slug} story={story} />
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title="Self-Taught Legends" />
          <HorizontalScroll>
            {selfTaughtLegends.map((creator) => (
              <CreatorCard key={creator.slug} creator={creator} />
            ))}
          </HorizontalScroll>
        </section>

        <section>
          <SectionHeader title="World Builders" />
          <HorizontalScroll>
            {worldBuilders.map((creator) => (
              <CreatorCard key={creator.slug} creator={creator} />
            ))}
          </HorizontalScroll>
        </section>

        <section>
          <SectionHeader title="Masters of Emotion" />
          <HorizontalScroll>
            {mastersOfEmotion.map((creator) => (
              <CreatorCard key={creator.slug} creator={creator} />
            ))}
          </HorizontalScroll>
        </section>

        <section>
          <SectionHeader
            title="Creator Rabbit Holes"
            subtitle="Follow threads of influence across generations of great creators."
          />
          <RabbitHolePath holes={rabbitHoles} />
        </section>
      </div>
    </>
  );
}
