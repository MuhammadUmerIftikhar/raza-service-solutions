import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";

export function CTASection({
  title = "Ready to start your next project?",
  description = "Tell us about your scope and site, and our engineering team will get back to you with a tailored proposal.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-16 sm:py-20">
      <div
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl"
        aria-hidden
      />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-xl text-base leading-7 text-navy-200">{description}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/contact">
            Request a Quote
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
          <a
            href={COMPANY.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {COMPANY.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
