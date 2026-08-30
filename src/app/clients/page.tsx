import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ClientLogo from "@/components/ClientLogo";
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
    <div className="flex flex-col bg-white">
      <Breadcrumbs items={[{ name: "Clients", url: "/clients" }]} />

      {/* Page Header */}
      <section className="bg-[#f8fafc] py-14 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0e2a47]">
              Our Clients & Industries Served
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
              We have partnered with public sector agencies, financial institutions, leading schools, engineering enterprises, and fast-growing SMEs across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Answer-first summary for GEO */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 bg-slate-50 border-l-4 border-[#143d6b] rounded-r-2xl max-w-4xl">
            <p className="text-sm text-[#0e2a47] leading-relaxed font-medium">
              <strong>Daniel Isibor & Co (Chartered Accountants)</strong> delivers auditing, tax advisory, and accounting software consulting to organizations across <strong>Abuja and nationwide</strong>, including the <strong>Federal Capital Territory Inland Revenue Service (FCT-IRS)</strong>, <strong>Navy Microfinance Bank</strong>, <strong>Startrite Schools</strong>, <strong>News Engineering Nig. Ltd</strong>, <strong>Dee Utensils</strong>, and various corporate & non-profit organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Client Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#0e2a47] tracking-tight">
              Featured Client Organizations
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Our multidisciplinary team brings deep sector insight to every client relationship.
            </p>
          </div>

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
      <section className="py-20 bg-[#f8fafc] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0e2a47] tracking-tight">
              Key Sectors We Serve
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Tailored audit, tax, and advisory programs customized for your sector&apos;s regulatory framework.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INDUSTRIES_SERVED.map((industry, index) => (
              <div
                key={index}
                className="p-5 bg-white border border-slate-200 rounded-2xl flex items-start gap-3 shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-[#143d6b] flex-shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[#0e2a47] leading-snug">
                  {industry}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#0e2a47] hover:bg-[#143d6b] text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-lg transition-all"
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
