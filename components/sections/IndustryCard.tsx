import Link from "next/link";
import type { Industry } from "@/types";

export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <Link
      href={`/industries#${industry.slug}`}
      className="group flex flex-col gap-3 rounded-2xl border border-navy-100 bg-white p-6 transition-colors hover:border-gold-300"
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
        <industry.icon className="h-5 w-5" aria-hidden />
      </span>
      <h3 className="text-base font-semibold text-navy-950">{industry.name}</h3>
      <p className="text-sm leading-6 text-navy-600">{industry.description}</p>
    </Link>
  );
}
