"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { services } from "@/data/services";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const company = formData.get("company");
    const service = formData.get("service");
    const message = formData.get("message");

    const subject = `Quote Request: ${service || "General Enquiry"}`;
    const body = [
      `Name: ${name}`,
      company ? `Company: ${company}` : null,
      service ? `Service of interest: ${service}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(String(body))}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-navy-800">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1.5 w-full rounded-lg border border-navy-200 px-4 py-2.5 text-sm text-navy-900 outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100"
          />
        </div>
        <div>
          <label htmlFor="company" className="text-sm font-medium text-navy-800">
            Company (optional)
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="mt-1.5 w-full rounded-lg border border-navy-200 px-4 py-2.5 text-sm text-navy-900 outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-sm font-medium text-navy-800">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1.5 w-full rounded-lg border border-navy-200 px-4 py-2.5 text-sm text-navy-900 outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100"
          />
        </div>
        <div>
          <label htmlFor="service" className="text-sm font-medium text-navy-800">
            Service of interest
          </label>
          <select
            id="service"
            name="service"
            className="mt-1.5 w-full rounded-lg border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-900 outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100"
          >
            <option value="">General enquiry</option>
            {services.map((service) => (
              <option key={service.slug} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-navy-800">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your site, scope and timeline..."
          className="mt-1.5 w-full rounded-lg border border-navy-200 px-4 py-2.5 text-sm text-navy-900 outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-navy-950 hover:bg-gold-300"
      >
        <Send className="h-4 w-4" aria-hidden />
        Send Enquiry
      </button>
      {submitted && (
        <p className="text-sm text-navy-600">
          Your email app should now be open with your message pre-filled. Hit
          send to reach our team directly.
        </p>
      )}
    </form>
  );
}
