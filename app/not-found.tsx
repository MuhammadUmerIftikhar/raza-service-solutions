import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-28">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden />
      <Container className="relative flex flex-col items-center text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-400 text-navy-950">
          <Compass className="h-7 w-7" aria-hidden />
        </span>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">
          404: Page Not Found
        </p>
        <h1 className="mt-3 max-w-xl text-balance text-3xl font-bold text-white sm:text-4xl">
          This page has moved, or never existed
        </h1>
        <p className="mt-4 max-w-md text-sm leading-6 text-navy-300">
          Let&apos;s get you back on site: head home, browse our services,
          or view our project case studies.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/">
            Back to Home
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
          <Button href="/services" variant="outline" className="border-white/20 text-white hover:bg-white/10">
            Browse Services
          </Button>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {services.slice(0, 6).map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="rounded-full bg-white/5 px-4 py-2 text-xs font-medium text-navy-200 ring-1 ring-inset ring-white/10 hover:bg-white/10"
            >
              {service.name}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
