import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { FIRM_INFO } from "@/data/firmData";

export const metadata: Metadata = {
  metadataBase: new URL(FIRM_INFO.siteUrl),
  title: {
    default: "Daniel Isibor & Co | Chartered Accountants in Abuja, Nigeria",
    template: "%s | Daniel Isibor & Co (Chartered Accountants)"
  },
  description:
    "Daniel Isibor & Co (Chartered Accountants) is an FRC-registered audit firm in Abuja, Nigeria providing Audit and Assurance, External Audit, Tax Advisory, and Accounting Software Consultancy.",
  keywords: [
    "Daniel Isibor & Co",
    "DIC Chartered Accountants",
    "Chartered Accountants Abuja",
    "Audit firm in Abuja Nigeria",
    "External audit Nigeria",
    "FRC registered auditor",
    "Auditor General of Federation registered",
    "Tax management advisory Abuja",
    "Accounting software consultancy QuickBooks Sage",
    "Special purpose audit Nigeria",
    "IFRS financial reporting Nigeria"
  ],
  authors: [{ name: "Daniel Isibor & Co (Chartered Accountants)" }],
  creator: "Daniel Isibor & Co",
  publisher: "Daniel Isibor & Co",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: FIRM_INFO.siteUrl,
    title: "Daniel Isibor & Co | Chartered Accountants in Abuja, Nigeria",
    description:
      "Licensed audit and advisory firm registered with FRC and the Office of the Auditor General of the Federation. Providing Audit, Tax, and Financial Consulting in Nigeria.",
    siteName: "Daniel Isibor & Co",
    images: [
      {
        url: "/images/DIC-LOGO.png",
        width: 800,
        height: 600,
        alt: "Daniel Isibor & Co Chartered Accountants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Isibor & Co | Chartered Accountants Abuja",
    description:
      "FRC-registered audit firm in Abuja providing External Audit, Tax Advisory, and Financial Consulting.",
    images: ["/images/DIC-LOGO.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "name": FIRM_INFO.name,
  "alternateName": FIRM_INFO.shortName,
  "url": FIRM_INFO.siteUrl,
  "logo": `${FIRM_INFO.siteUrl}/images/DIC-LOGO.png`,
  "image": `${FIRM_INFO.siteUrl}/images/Mr%20Daniel.jpeg`,
  "telephone": FIRM_INFO.phoneE164,
  "email": FIRM_INFO.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": FIRM_INFO.address.street,
    "addressLocality": FIRM_INFO.address.city,
    "addressRegion": FIRM_INFO.address.state,
    "postalCode": FIRM_INFO.address.postalCode,
    "addressCountry": FIRM_INFO.address.countryCode
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": FIRM_INFO.geo.latitude,
    "longitude": FIRM_INFO.geo.longitude
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "17:00"
  },
  "priceRange": "$$",
  "areaServed": {
    "@type": "Country",
    "name": "Nigeria"
  },
  "memberOf": [
    { "@type": "Organization", "name": "Financial Reporting Council of Nigeria" },
    { "@type": "Organization", "name": "Office of the Auditor General of the Federation" },
    { "@type": "Organization", "name": "Institute of Chartered Accountants of Nigeria" },
    { "@type": "Organization", "name": "Chartered Institute of Taxation of Nigeria" },
    { "@type": "Organization", "name": "Chartered Institute of Bankers of Nigeria" },
    { "@type": "Organization", "name": "Association of Certified Fraud Examiners" }
  ],
  "sameAs": [
    FIRM_INFO.socials.linkedin
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400..900&family=IBM+Plex+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <JsonLd data={organizationSchema} />
      </head>
      <body className="min-h-full flex flex-col bg-[#F6F2E9] text-[#101F38] font-sans selection:bg-[#B08D3E]/20 selection:text-[#101F38]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
