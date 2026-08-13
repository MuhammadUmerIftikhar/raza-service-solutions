import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { services } from "@/data/services";
import { footerCompanyLinks, footerResourceLinks } from "@/data/nav";
import { COMPANY, SITE_NAME } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-900 bg-navy-950 text-navy-200">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="relative h-10 w-10 shrink-0 rounded-lg bg-white p-1">
                <Image src="/images/logo.png" alt="RSS Contracting logo" fill className="object-contain p-0.5" />
              </span>
              <span className="text-sm font-bold text-white">{SITE_NAME}</span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-navy-300">
              A 100% foreign investment contracting company delivering Civil,
              MEP, HVAC and Industrial services across the Kingdom of Saudi
              Arabia, aligned with Vision 2030.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 7).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-navy-300 hover:text-gold-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm font-semibold text-gold-300 hover:text-gold-200">
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {footerCompanyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-navy-300 hover:text-gold-300">
                    {link.label}
                  </Link>
                </li>
              ))}
              {footerResourceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-navy-300 hover:text-gold-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-navy-300">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden />
                <span>{COMPANY.fullAddress}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold-400" aria-hidden />
                <a href={COMPANY.phoneHref} className="hover:text-gold-300">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold-400" aria-hidden />
                <a href={COMPANY.emailHref} className="hover:text-gold-300">
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-navy-800 pt-6 text-xs text-navy-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {COMPANY.legalName}. All rights reserved. CR {COMPANY.crNumber} · VAT{" "}
            {COMPANY.vatNumber}
          </p>
          <Link href="/privacy-policy" className="hover:text-gold-300">
            Privacy Policy
          </Link>
        </div>
      </Container>
    </footer>
  );
}
