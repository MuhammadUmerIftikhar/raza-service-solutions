import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { ImageIcon } from "lucide-react";

type Variant = "navy" | "gold" | "slate";

const variantClasses: Record<Variant, string> = {
  navy: "from-navy-800 via-navy-900 to-navy-950 text-navy-200",
  gold: "from-gold-600 via-gold-700 to-navy-900 text-gold-100",
  slate: "from-slate-700 via-slate-800 to-slate-900 text-slate-300",
};

/**
 * Renders real site photography when `src` is supplied; otherwise falls
 * back to a branded gradient placeholder for slots without a photo yet.
 */
export function ImagePlaceholder({
  label,
  src,
  icon: Icon = ImageIcon,
  variant = "navy",
  aspect = "aspect-[4/3]",
  className = "",
  priority = false,
}: {
  label: string;
  src?: string;
  icon?: LucideIcon;
  variant?: Variant;
  aspect?: string;
  className?: string;
  priority?: boolean;
}) {
  if (src) {
    return (
      <div className={`relative ${aspect} w-full overflow-hidden rounded-2xl ${className}`}>
        <Image
          src={src}
          alt={label}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={label}
      className={`relative flex ${aspect} w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-br ${variantClasses[variant]} bg-grid p-6 text-center ${className}`}
    >
      <Icon className="h-10 w-10 opacity-80" strokeWidth={1.5} aria-hidden />
      <span className="text-xs font-medium leading-snug opacity-80 sm:text-sm">
        {label}
      </span>
    </div>
  );
}
