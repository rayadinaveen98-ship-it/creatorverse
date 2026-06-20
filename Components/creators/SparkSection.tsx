import Image from "next/image";

interface SparkSectionProps {
  title: string;
  moment: string;
  narrative: string;
  image: string;
}

export default function SparkSection({ title, moment, narrative, image }: SparkSectionProps) {
  const paragraphs = narrative.split("\n\n");

  return (
    <section>
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">{title}</p>
      <h2 className="mt-2 font-display text-2xl font-semibold text-text sm:text-3xl lg:text-4xl">
        {moment}
      </h2>

      <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
          <Image
            src={image}
            alt={moment}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
        </div>

        <div className="space-y-4">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="text-base leading-relaxed text-muted sm:text-lg">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
