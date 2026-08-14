import type { LucideIcon } from "lucide-react";

export function CoreValueCard({
  title,
  icon: Icon,
}: {
  title: string;
  icon: LucideIcon;
}) {
  return (
    <div className="relative flex min-h-[5.5rem] items-center rounded-xl border border-navy-200 bg-white pl-14 pr-5 py-4">
      <span className="absolute -left-3 flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-navy-200 bg-navy-50">
        <Icon className="h-7 w-7 text-navy-700" strokeWidth={1.5} aria-hidden />
      </span>
      <p className="text-sm font-semibold leading-snug text-navy-900">{title}</p>
    </div>
  );
}
