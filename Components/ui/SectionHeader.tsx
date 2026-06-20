interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={`mb-8 sm:mb-10 ${align === "center" ? "text-center" : ""}`}>
      {label && (
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-gold">
          {label}
        </p>
      )}
      <h2 className="font-display text-2xl font-semibold tracking-tight text-text sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-5 gold-line max-w-[120px] ${align === "center" ? "mx-auto" : ""}`} />
    </div>
  );
}
