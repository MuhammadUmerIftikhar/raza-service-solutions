import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs, type Crumb } from "@/components/sections/Breadcrumbs";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-24">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl"
        aria-hidden
      />
      <Container className="relative">
        <Breadcrumbs items={breadcrumbs} />
        {eyebrow && (
          <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-7 text-navy-200 sm:text-lg">
            {description}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
