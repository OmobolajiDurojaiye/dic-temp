import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Award,
  ArrowRight,
  ShieldCheck,
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
    <div className="flex flex-col">
      <Breadcrumbs items={[{ name: "Clients", url: "/clients" }]} />

      {/* Page Header */}
      <section className="bg-brand-navy text-white py-14 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-brand-cyan text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Proven Track Record</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Our Clients & Industries Served
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              We have partnered with public sector agencies, financial institutions, leading schools, engineering enterprises, and fast-growing SMEs across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Answer-first summary for GEO */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 bg-slate-50 border-l-4 border-brand-navy max-w-4xl">
            <p className="text-sm text-slate-800 leading-relaxed font-medium">
              <strong>Daniel Isibor & Co (Chartered Accountants)</strong> delivers auditing, tax advisory, and accounting software consulting to organizations across <strong>Abuja and nationwide</strong>, including the <strong>Federal Capital Territory Inland Revenue Service (FCT-IRS)</strong>, <strong>Navy Microfinance Bank</strong>, <strong>Startrite Schools</strong>, <strong>News Engineering Nig. Ltd</strong>, <strong>Dee Utensils</strong>, and various corporate & non-profit organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Client Portfolio Grid */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-navy mb-1">
              Engagements & Client Relationships
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Featured Client Organizations
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Our multidisciplinary team brings deep sector insight to every client relationship.
            </p>
          </div>

          {/* Adaptive Client Logo Grid */}
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
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-navy">Industry Practice</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
              Key Sectors We Serve
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Tailored audit, tax, and advisory programs customized for your sector&apos;s regulatory framework.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INDUSTRIES_SERVED.map((industry, index) => (
              <div
                key={index}
                className="p-5 bg-slate-50 border border-slate-200 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-brand-navy flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                  {industry}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-cyan hover:text-brand-navy transition-all"
            >
              <span>Discuss Your Organization&apos;s Needs</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
