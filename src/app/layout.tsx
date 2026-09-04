import type { Metadata } from "next";
import { Public_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { FIRM_INFO } from "@/data/firmData";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(FIRM_INFO.siteUrl),
  title: {
    default: "Daniel Isibor & Co | Chartered Accountants in Abuja, Nigeria",
    template: "%s | Daniel Isibor & Co (Chartered Accountants)"
  },
  description:
    "Daniel Isibor & Co (Chartered Accountants) is an FRC-registered audit firm in Abuja, Nigeria providing Audit and Assurance, External Audit, Tax Advisory, and Accounting Software Consultancy.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  keywords: [
    "Daniel Isibor & Co",
    "DIC Chartered Accountants",
    "Audit firm in Abuja",
    "Audit firms in Abuja",
    "Audit firms in Nigeria",
    "Audit firms in Garki 2",
    "Audit firm in Garki II Abuja",
    "Chartered Accountants Abuja",
    "Chartered Accountants in Abuja Nigeria",
    "Best audit firms in Abuja",
    "FRC registered audit firm Abuja",
    "Auditor General of Federation registered audit practice",
    "Tax management advisory Garki Abuja",
    "Accounting software consultancy QuickBooks Sage",
    "Special purpose audit Nigeria",
    "IFRS financial reporting Nigeria"
  ],
  authors: [
    { name: "Daniel Isibor & Co (Chartered Accountants)" },
    { name: "Omobolaji Durojaiye", url: "https://www.bolaji.tech/" }
  ],
  creator: "Omobolaji Durojaiye",
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
    title: "Daniel Isibor & Co | Top Audit Firm & Chartered Accountants in Abuja, Nigeria",
    description:
      "Licensed audit and advisory firm located in Garki II, Abuja, registered with FRC and the Office of the Auditor General of the Federation. Providing External Audit, Tax Advisory, and Assurance in Nigeria.",
    siteName: "Daniel Isibor & Co",
    images: [
      {
        url: "/images/DIC-LOGO.png",
        width: 800,
        height: 600,
        alt: "Daniel Isibor & Co Chartered Accountants Abuja",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Isibor & Co | Audit Firm & Chartered Accountants Abuja",
    description:
      "FRC-registered audit firm in Garki II, Abuja providing External Audit, Tax Advisory, and Financial Consulting across Nigeria.",
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
  verification: {
    google: "2rMMZqn5XnhqmEDCut2yVHgnmvKX9VcCYUes5szhKHM",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "name": FIRM_INFO.name,
  "alternateName": FIRM_INFO.shortName,
  "description": "Premier audit firm and chartered accountants in Garki II, Abuja, Nigeria. FRC registered and accredited by the Office of the Auditor General of the Federation.",
  "url": FIRM_INFO.siteUrl,
  "logo": `${FIRM_INFO.siteUrl}/images/DIC-LOGO.png`,
  "image": `${FIRM_INFO.siteUrl}/images/Mr%20Daniel.jpeg`,
  "telephone": FIRM_INFO.phoneE164,
  "email": FIRM_INFO.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": FIRM_INFO.address.street,
    "addressLocality": "Garki II, Abuja",
    "addressRegion": "Federal Capital Territory",
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
  "areaServed": [
    { "@type": "City", "name": "Abuja" },
    { "@type": "AdministrativeArea", "name": "Garki II" },
    { "@type": "Country", "name": "Nigeria" }
  ],
  "creator": {
    "@type": "Person",
    "name": "Omobolaji Durojaiye",
    "url": "https://www.bolaji.tech/",
    "sameAs": [
      "https://www.linkedin.com/in/omobolaji-durojaiye-527872294/",
      "https://x.com/bjtolu",
      "https://github.com/OmobolajiDurojaiye"
    ]
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
    <html
      lang="en"
      className={`${publicSans.variable} ${ibmPlexMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <JsonLd data={organizationSchema} />
      </head>
      <body className="min-h-full flex flex-col bg-[#F4F8FB] text-[#0B1E3D] font-sans selection:bg-[#3B9FE0]/20 selection:text-[#0B1E3D]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
