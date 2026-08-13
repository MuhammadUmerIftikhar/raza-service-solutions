type Align = "left" | "center";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: Align;
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      {eyebrow && (
        <span
          className={`mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? "text-gold-300" : "text-gold-600"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-balance text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-navy-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-7 sm:text-lg ${
            light ? "text-navy-200" : "text-navy-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
