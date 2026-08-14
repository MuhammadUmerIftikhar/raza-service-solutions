import Image from "next/image";
import { ArrowRight, ShieldCheck, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { FadeIn } from "@/components/motion/FadeIn";
import { stats } from "@/data/company";
import { findVisionLogo } from "@/lib/media";

export function HomeHero() {
  const visionLogo = findVisionLogo();

  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden />
      <div
        className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-navy-600/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold-500/20 blur-3xl"
        aria-hidden
      />
      <Container className="relative grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <FadeIn>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold-300 ring-1 ring-inset ring-white/10">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
            100% Foreign Investment Contracting Company · KSA
          </span>
          <h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            Civil, MEP &amp; Industrial Contracting Built for{" "}
            <span className="text-gold-400">Saudi Arabia&apos;s</span> Vision 2030
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-navy-200 sm:text-lg">
            Raza Service Solutions (RSS) delivers civil construction,
            pre-engineered buildings, process piping, HVAC, electrical, cold
            storage and air compressor solutions for oil &amp; gas, aviation,
            government and industrial clients across the Kingdom.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact">
              Get a Quote
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button href="/projects" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <Wrench className="h-4 w-4" aria-hidden />
              View Our Projects
            </Button>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                  <span className="text-gold-400">{stat.suffix}</span>
                </dd>
                <p className="mt-1 text-xs leading-5 text-navy-300">{stat.label}</p>
              </div>
            ))}
          </dl>
        </FadeIn>

        <FadeIn delay={0.15} className="relative">
          <div className="grid grid-cols-2 gap-4">
            <ImagePlaceholder
              label="Rooftop HVAC installation"
              src="/images/hero-hvac-rooftop-units.png"
              variant="gold"
              aspect="aspect-square"
              priority
            />
            <ImagePlaceholder
              label="Cold storage warehouse racking"
              src="/images/gallery-warehouse-racking.png"
              variant="navy"
              aspect="aspect-square"
              priority
            />
            <ImagePlaceholder
              label="Pre-engineered building structure under construction"
              src="/images/hero-peb-construction.png"
              variant="navy"
              aspect="aspect-square"
            />
            <ImagePlaceholder
              label="Industrial process plant"
              src="/images/hero-industrial-plant-night.png"
              variant="gold"
              aspect="aspect-square"
            />
          </div>

          {visionLogo && (
            <div className="mt-6 flex justify-end">
              <Image
                src={visionLogo}
                alt="Saudi Vision 2030"
                width={260}
                height={180}
                className="h-20 w-auto opacity-95 sm:h-24"
              />
            </div>
          )}
        </FadeIn>
      </Container>
    </section>
  );
}
