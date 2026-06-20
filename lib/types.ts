export interface Creator {
  slug: string;
  name: string;
  identity: string;
  portrait: string;
  backdrop: string;
  category?: string;
  progress?: number;
}

export interface EditorialStory {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  creatorSlug: string;
  readTime?: string;
}

export interface JourneyChapter {
  slug: string;
  number: number;
  title: string;
  shortStory: string;
  whyItMattered: string;
  image: string;
  year: string;
  story: string;
  context: string;
  lesson: string;
  relatedWorks: WorkRef[];
  nextChapter?: { slug: string; title: string };
}

export interface WorkRef {
  title: string;
  year: string;
  image: string;
}

export interface CreativePattern {
  name: string;
  explanation: string;
  examples: string[];
  image: string;
}

export interface EssentialWork {
  title: string;
  year: string;
  poster: string;
  whyItMatters: string;
  journeyConnection: string;
  patternConnection: string;
}

export interface ExploreItem {
  title: string;
  description: string;
  count?: string;
}

export interface RabbitHole {
  title: string;
  description: string;
  nodes: { name: string; slug?: string }[];
}

export interface CreatorProfile {
  slug: string;
  name: string;
  tagline: string;
  heroImage: string;
  portrait: string;
  stats: { works: number; keyMoments: number; creativeEras: number };
  twoMinuteSummary: string[];
  spark: {
    title: string;
    moment: string;
    narrative: string;
    image: string;
  };
  impact: {
    headline: string;
    paragraphs: string[];
    image: string;
  };
  chapters: JourneyChapter[];
  patterns: CreativePattern[];
  essentialWorks: EssentialWork[];
  exploreDeeper: ExploreItem[];
}
