import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ClientLogo from "@/components/ClientLogo";
import TickMark from "@/components/TickMark";
import { FIRM_INFO, CLIENTS_DATA, INDUSTRIES_SERVED } from "@/data/firmData";

export const metadata: Metadata = {
  title: "Client Portfolio & Sectors Served in Nigeria",
  description:
    "Explore the clients and industries served by Daniel Isibor & Co (Chartered Accountants) in Abuja, Nigeria, including government MDAs, banks, engineering firms, and commercial enterprises.",
  alternates: {
    canonical: "/clients",
  },
  openGraph: {
    title: "Client Portfolio | Daniel Isibor & Co (Chartered Accountants)",
    description:
      "Proven audit and financial advisory engagements with FCT-IRS, Navy Microfinance Bank, Startrite Schools, News Engineering, and commercial enterprises.",
    url: `${FIRM_INFO.siteUrl}/clients`,
  }
};

export default function ClientsPage() {
  return (
    <div className="flex flex-col bg-[#F6F2E9]">
      <Breadcrumbs items={[{ name: "Clients", url: "/clients" }]} />

      {/* Page Header - Ink Navy */}
      <section className="bg-[#101F38] text-white py-14 lg:py-20 border-b border-[#B08D3E]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-[#B08D3E]/40 text-[#B08D3E] text-[11px] font-mono font-bold uppercase tracking-wider">
              <TickMark variant="rust" size="sm" />
              <span>Proven Engagements</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Our Clients & Industries Served
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              We have partnered with public sector agencies, financial institutions, leading schools, engineering enterprises, and fast-growing SMEs across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Answer-first summary for GEO */}
      <section className="py-8 bg-[#F6F2E9] border-b border-[#5B6B7F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 bg-white border-l-4 border-[#B08D3E] max-w-4xl brass-corner-card">
            <p className="text-sm text-[#101F38] leading-relaxed font-medium font-sans">
              <strong>Daniel Isibor & Co (Chartered Accountants)</strong> delivers auditing, tax advisory, and accounting software consulting to organizations across <strong>Abuja and nationwide</strong>, including the <strong>Federal Capital Territory Inland Revenue Service (FCT-IRS)</strong>, <strong>Navy Microfinance Bank</strong>, <strong>Startrite Schools</strong>, <strong>News Engineering Nig. Ltd</strong>, <strong>Dee Utensils</strong>, and various corporate & non-profit organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Client Portfolio Grid */}
      <section className="py-16 bg-[#F6F2E9] border-b border-[#5B6B7F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-widest text-[#B08D3E] mb-1">
              <TickMark variant="brass" size="sm" />
              <span>Client Engagements</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#101F38] tracking-tight">
              Featured Client Organizations
            </h2>
            <p className="text-xs sm:text-sm text-[#5B6B7F] font-sans mt-1">
              Our multidisciplinary team brings deep sector insight to every client relationship.
            </p>
          </div>

          {/* Adaptive Client Logo Grid with Brass Corner Marks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {CLIENTS_DATA.map((client) => (
              <ClientLogo
                key={client.name}
                name={client.name}
                category={client.category}
                logoUrl={client.logoUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-white border-b border-[#5B6B7F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-widest text-[#B08D3E] mb-1">
              <TickMark variant="brass" size="sm" />
              <span>Sector Coverage</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#101F38] tracking-tight">
              Key Sectors We Serve
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#5B6B7F] font-sans">
              Tailored audit, tax, and advisory programs customized for your sector&apos;s regulatory framework.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INDUSTRIES_SERVED.map((industry, index) => (
              <div
                key={index}
                className="p-5 brass-corner-card flex items-start gap-3"
              >
                <TickMark variant="rust" size="md" className="mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-[#101F38] font-sans leading-snug">
                  {industry}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#101F38] text-white border border-[#B08D3E] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#B08D3E] hover:text-[#101F38] transition-all shadow-md"
            >
              <span>Discuss Your Organization&apos;s Requirements</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
