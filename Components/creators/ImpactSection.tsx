import Image from "next/image";

interface ImpactSectionProps {
  headline: string;
  paragraphs: string[];
  image: string;
}

export default function ImpactSection({ headline, paragraphs, image }: ImpactSectionProps) {
  return (
    <section>
      <h2 className="font-display text-2xl font-semibold text-text sm:text-3xl lg:text-4xl">
        {headline}
      </h2>
      <div className="mt-5 gold-line max-w-[120px]" />

      <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="space-y-6 lg:col-span-7">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 50)} className="text-base leading-[1.8] text-muted sm:text-lg">
              {p}
            </p>
          ))}
        </div>

        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border lg:col-span-5">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
