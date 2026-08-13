import type { ReactNode } from "react";

export function Badge({
  children,
  tone = "gold",
}: {
  children: ReactNode;
  tone?: "gold" | "navy" | "neutral";
}) {
  const toneClasses = {
    gold: "bg-gold-50 text-gold-700 ring-1 ring-inset ring-gold-200",
    navy: "bg-navy-50 text-navy-700 ring-1 ring-inset ring-navy-200",
    neutral: "bg-slate-100 text-slate-600 ring-1 ring-inset ring-slate-200",
  }[tone];

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${toneClasses}`}
    >
      {children}
    </span>
  );
}
