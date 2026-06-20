import type { Creator, EditorialStory, RabbitHole } from "../types";

export const featuredCreators: Creator[] = [
  {
    slug: "steven-spielberg",
    name: "Steven Spielberg",
    identity: "The boy who turned wonder into cinema.",
    portrait: "https://images.unsplash.com/photo-1560109942-7f0f9c4eaaed?w=400&h=500&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1478720568477-152d9b8e9b0c?w=1600&h=900&fit=crop&q=80",
  },
  {
    slug: "christopher-nolan",
    name: "Christopher Nolan",
    identity: "The architect of time.",
    portrait: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1600&h=900&fit=crop&q=80",
  },
  {
    slug: "ss-rajamouli",
    name: "S. S. Rajamouli",
    identity: "The epic visionary of Indian cinema.",
    portrait: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600&h=900&fit=crop&q=80",
  },
  {
    slug: "hayao-miyazaki",
    name: "Hayao Miyazaki",
    identity: "The poet of animated worlds.",
    portrait: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1616530940355-351b1093a5b5?w=1600&h=900&fit=crop&q=80",
  },
  {
    slug: "quentin-tarantino",
    name: "Quentin Tarantino",
    identity: "The video store dreamer.",
    portrait: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1600&h=900&fit=crop&q=80",
  },
];

export const featuredJourney = {
  label: "This Week's Journey",
  creatorSlug: "steven-spielberg",
  creatorName: "Steven Spielberg",
  narrative:
    "From filming toy trains as a child to becoming one of cinema's most influential storytellers — explore how wonder became a language.",
  image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&h=700&fit=crop&q=80",
};

export const continueExploring: Creator[] = [
  {
    slug: "steven-spielberg",
    name: "Steven Spielberg",
    identity: "Chapter 3 of 7 — The Camera",
    portrait: "https://images.unsplash.com/photo-1560109942-7f0f9c4eaaed?w=300&h=400&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1478720568477-152d9b8e9b0c?w=600&h=400&fit=crop&q=80",
    progress: 43,
  },
  {
    slug: "christopher-nolan",
    name: "Christopher Nolan",
    identity: "Chapter 1 of 6 — The Obsession",
    portrait: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&h=400&fit=crop&q=80",
    progress: 17,
  },
  {
    slug: "hayao-miyazaki",
    name: "Hayao Miyazaki",
    identity: "Chapter 5 of 8 — The Forest",
    portrait: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1616530940355-351b1093a5b5?w=600&h=400&fit=crop&q=80",
    progress: 62,
  },
];

export const journeysWorthReading: EditorialStory[] = [
  {
    slug: "boy-who-built-hollywood",
    title: "The Boy Who Built Hollywood",
    subtitle:
      "A lonely child in Arizona picked up a camera and accidentally invented the modern blockbuster. This is not a biography — it's an origin story.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=900&h=600&fit=crop&q=80",
    creatorSlug: "steven-spielberg",
    readTime: "12 min",
  },
  {
    slug: "architect-of-time",
    title: "The Architect of Time",
    subtitle:
      "Christopher Nolan didn't study film. He studied English literature — and then bent the laws of physics to tell stories about memory and guilt.",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=900&h=600&fit=crop&q=80",
    creatorSlug: "christopher-nolan",
    readTime: "10 min",
  },
  {
    slug: "video-store-dreamer",
    title: "The Video Store Dreamer",
    subtitle:
      "Quentin Tarantino never went to film school. He went to a video store — and watched every film on the shelf until he could make his own.",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b8e9b0c?w=900&h=600&fit=crop&q=80",
    creatorSlug: "quentin-tarantino",
    readTime: "9 min",
  },
];

export const selfTaughtLegends: Creator[] = [
  {
    slug: "quentin-tarantino",
    name: "Quentin Tarantino",
    identity: "No film school. Pure obsession.",
    portrait: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=400&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=300&fit=crop&q=80",
  },
  {
    slug: "christopher-nolan",
    name: "Christopher Nolan",
    identity: "Literature to labyrinthine cinema.",
    portrait: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=300&fit=crop&q=80",
  },
  {
    slug: "steven-spielberg",
    name: "Steven Spielberg",
    identity: "Age 12. First camera. No turning back.",
    portrait: "https://images.unsplash.com/photo-1560109942-7f0f9c4eaaed?w=300&h=400&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=300&fit=crop&q=80",
  },
  {
    slug: "ss-rajamouli",
    name: "S. S. Rajamouli",
    identity: "Mythology as blockbuster craft.",
    portrait: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=400&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&h=300&fit=crop&q=80",
  },
];

export const worldBuilders: Creator[] = [
  {
    slug: "hayao-miyazaki",
    name: "Hayao Miyazaki",
    identity: "Enchanted forests & flying castles",
    portrait: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1616530940355-351b1093a5b5?w=500&h=300&fit=crop&q=80",
  },
  {
    slug: "ss-rajamouli",
    name: "S. S. Rajamouli",
    identity: "Kingdoms of myth & spectacle",
    portrait: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=400&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&h=300&fit=crop&q=80",
  },
  {
    slug: "steven-spielberg",
    name: "Steven Spielberg",
    identity: "Dinosaurs, aliens & wonder",
    portrait: "https://images.unsplash.com/photo-1560109942-7f0f9c4eaaed?w=300&h=400&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1519003722824-194b4459a02c?w=500&h=300&fit=crop&q=80",
  },
  {
    slug: "christopher-nolan",
    name: "Christopher Nolan",
    identity: "Dreams within dreams",
    portrait: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=300&fit=crop&q=80",
  },
];

export const mastersOfEmotion: Creator[] = [
  {
    slug: "steven-spielberg",
    name: "Steven Spielberg",
    identity: "Hope in the darkest hours",
    portrait: "https://images.unsplash.com/photo-1560109942-7f0f9c4eaaed?w=300&h=400&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=300&fit=crop&q=80",
  },
  {
    slug: "hayao-miyazaki",
    name: "Hayao Miyazaki",
    identity: "Gentle power of connection",
    portrait: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=500&h=300&fit=crop&q=80",
  },
  {
    slug: "christopher-nolan",
    name: "Christopher Nolan",
    identity: "Grief, guilt & redemption",
    portrait: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=300&fit=crop&q=80",
  },
  {
    slug: "quentin-tarantino",
    name: "Quentin Tarantino",
    identity: "Violence with vulnerability",
    portrait: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=400&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1478720568477-152d9b8e9b0c?w=500&h=300&fit=crop&q=80",
  },
];

export const rabbitHoles: RabbitHole[] = [
  {
    title: "The Spielberg Lineage",
    description: "Trace the creative DNA from Hollywood's golden age to the blockbuster era.",
    nodes: [
      { name: "Spielberg", slug: "steven-spielberg" },
      { name: "John Ford" },
      { name: "Akira Kurosawa" },
      { name: "George Lucas" },
    ],
  },
  {
    title: "Masters of Time",
    description: "Filmmakers who bent narrative structure to their will.",
    nodes: [
      { name: "Nolan", slug: "christopher-nolan" },
      { name: "Tarkovsky" },
      { name: "Kubrick" },
      { name: "Resnais" },
    ],
  },
  {
    title: "Epic Storytellers",
    description: "From mythic India to animated Japan — builders of vast worlds.",
    nodes: [
      { name: "Rajamouli", slug: "ss-rajamouli" },
      { name: "Miyazaki", slug: "hayao-miyazaki" },
      { name: "Kurosawa" },
      { name: "Lean" },
    ],
  },
];
