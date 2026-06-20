import { notFound } from "next/navigation";
import JourneyChapterView from "@/Components/journeys/JourneyChapterView";
import { getAllChapterSlugs, getChapterBySlug, spielberg } from "@/lib/data/creators";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllChapterSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);
  if (!chapter) return { title: "Chapter — CreatorVerse" };
  return {
    title: `${chapter.title} — ${spielberg.name} — CreatorVerse`,
    description: chapter.shortStory,
  };
}

export default async function JourneyPage({ params }: PageProps) {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);

  if (!chapter) notFound();

  return (
    <JourneyChapterView
      chapter={chapter}
      creatorName={spielberg.name}
      creatorSlug={spielberg.slug}
    />
  );
}
