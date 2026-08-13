"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/types";

export function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-navy-100 rounded-2xl border border-navy-100 bg-white">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-sm font-semibold text-navy-950 sm:text-base">
                {faq.question}
              </span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-gold-600 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-5">
                <p className="text-sm leading-6 text-navy-600">{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
