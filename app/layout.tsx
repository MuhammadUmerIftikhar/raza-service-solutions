import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, localBusinessSchema } from "@/lib/schema";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Civil, MEP & Industrial Contracting in Saudi Arabia`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "RSS Contracting Co. delivers civil construction, HVAC, electrical, process piping, cold storage and air compressor solutions for oil & gas, aviation, government and industrial clients across the Kingdom of Saudi Arabia.",
  applicationName: SITE_NAME,
  keywords: [
    "MEP contractor Saudi Arabia",
    "HVAC company Riyadh",
    "civil construction contractor KSA",
    "cold room installation Saudi Arabia",
    "air compressor supplier Riyadh",
  ],
  authors: [{ name: SITE_NAME }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_SA",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Civil, MEP & Industrial Contracting in Saudi Arabia`,
    description:
      "Civil, MEP, HVAC and industrial contracting services delivered across the Kingdom of Saudi Arabia.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Civil, MEP & Industrial Contracting in Saudi Arabia`,
    description:
      "Civil, MEP, HVAC and industrial contracting services delivered across the Kingdom of Saudi Arabia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-navy-900">
        <JsonLd data={[organizationSchema(), localBusinessSchema()]} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
