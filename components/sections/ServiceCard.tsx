import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-gold-300 hover:shadow-lg hover:shadow-navy-950/5"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700 group-hover:bg-gold-50 group-hover:text-gold-600">
        <service.icon className="h-6 w-6" aria-hidden />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-navy-950">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-navy-600">
        {service.shortDescription}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
      </span>
    </Link>
  );
}
