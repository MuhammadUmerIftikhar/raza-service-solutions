"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { mainNav } from "@/data/nav";
import { services } from "@/data/services";
import { COMPANY } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  // Lock background scroll while the mobile menu is open so scrolling
  // (e.g. through the expanded Services list) stays within the menu
  // instead of scrolling the page behind it.
  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/90 backdrop-blur-md">
      <div className="flex w-full items-center justify-between gap-4 px-6 py-3 lg:px-10 xl:px-16">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <span className="relative h-10 w-10 shrink-0">
            <Image src="/images/logo.png" alt="RSS Contracting logo" fill className="object-contain" priority />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="whitespace-nowrap text-sm font-bold text-navy-950 sm:text-base">
              Raza Service Solutions
            </span>
            <span className="whitespace-nowrap text-[11px] font-medium uppercase tracking-wide text-navy-500">
              RSS Contracting Co.
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) =>
            item.label === "Services" ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={item.href}
                  onClick={() => setServicesOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-gold-50 text-gold-700"
                      : "text-navy-800 hover:bg-navy-50 hover:text-navy-950"
                  }`}
                >
                  Services
                  <ChevronDown className="h-3.5 w-3.5" aria-hidden />
                </Link>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3"
                    >
                      <div className="grid grid-cols-2 gap-1 rounded-2xl border border-navy-100 bg-white p-4 shadow-xl shadow-navy-950/10">
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            onClick={() => setServicesOpen(false)}
                            aria-current={isActive(`/services/${service.slug}`) ? "page" : undefined}
                            className={`flex items-start gap-3 rounded-xl px-3 py-2.5 text-left ${
                              isActive(`/services/${service.slug}`) ? "bg-gold-50" : "hover:bg-navy-50"
                            }`}
                          >
                            <service.icon
                              className="mt-0.5 h-[18px] w-[18px] shrink-0 text-gold-600"
                              aria-hidden
                            />
                            <span>
                              <span className="block text-sm font-semibold text-navy-950">
                                {service.name}
                              </span>
                              <span className="mt-0.5 block text-xs text-navy-500 line-clamp-1">
                                {service.shortDescription}
                              </span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-gold-50 text-gold-700"
                    : "text-navy-800 hover:bg-navy-50 hover:text-navy-950"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={COMPANY.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-navy-950"
          >
            <Phone className="h-4 w-4 text-gold-600" aria-hidden />
            {COMPANY.phone}
          </a>
          <Button href="/contact">Get a Quote</Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-navy-900 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-navy-100 bg-white lg:hidden"
          >
            <div className="flex max-h-[calc(100dvh-4.5rem)] flex-col gap-1 overflow-y-auto overscroll-contain px-6 py-4">
              {mainNav.map((item) =>
                item.label === "Services" ? (
                  <div key={item.href}>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium ${
                        isActive(item.href) ? "bg-gold-50 text-gold-700" : "text-navy-900"
                      }`}
                    >
                      Services
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-3"
                        >
                          {services.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              onClick={() => setMobileOpen(false)}
                              aria-current={isActive(`/services/${service.slug}`) ? "page" : undefined}
                              className={`block rounded-lg px-3 py-2 text-sm ${
                                isActive(`/services/${service.slug}`)
                                  ? "bg-gold-50 text-gold-700 font-medium"
                                  : "text-navy-700 hover:bg-navy-50"
                              }`}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                      isActive(item.href)
                        ? "bg-gold-50 text-gold-700"
                        : "text-navy-900 hover:bg-navy-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-full bg-gold-400 px-4 py-2.5 text-center text-sm font-semibold text-navy-950"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
