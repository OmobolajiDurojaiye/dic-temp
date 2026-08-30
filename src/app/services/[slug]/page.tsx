import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ShieldCheck,
  FileSearch,
  Calculator,
  Briefcase,
  Info,
  FileText,
  ArrowRight,
  Phone,
  Building2
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import TickMark from "@/components/TickMark";
import LedgerGraphic from "@/components/LedgerGraphic";
import { FIRM_INFO, SERVICES_DATA } from "@/data/firmData";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} in Abuja, Nigeria`,
    description: service.shortSummary,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Daniel Isibor & Co (Chartered Accountants)`,
      description: service.shortSummary,
      url: `${FIRM_INFO.siteUrl}/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = SERVICES_DATA.filter((s) =>
    service.relatedSlugs.includes(s.slug)
  );

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "serviceType": service.title,
    "provider": {
      "@type": "AccountingService",
      "name": FIRM_INFO.name,
      "telephone": FIRM_INFO.phoneE164,
      "url": FIRM_INFO.siteUrl,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": FIRM_INFO.address.street,
        "addressLocality": FIRM_INFO.address.city,
        "addressRegion": FIRM_INFO.address.state,
        "addressCountry": FIRM_INFO.address.countryCode
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "Nigeria"
    },
    "description": service.shortSummary
  };

  return (
    <div className="flex flex-col bg-[#F6F2E9]">
      <JsonLd data={serviceSchema} />
      <Breadcrumbs
        items={[
          { name: "Services", url: "/services" },
          { name: service.title, url: `/services/${service.slug}` }
        ]}
      />

      {/* Hero Header - Ink Navy */}
      <section className="bg-[#101F38] text-white py-14 lg:py-20 border-b border-[#B08D3E]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#B08D3E]">
              <TickMark variant="rust" size="sm" />
              <span>Daniel Isibor & Co • Chartered Accountants</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              {service.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              {service.shortSummary}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Grid */}
      <section className="py-14 bg-[#F6F2E9] border-b border-[#5B6B7F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Main Article */}
            <article className="lg:col-span-8 space-y-8">
              {/* Answer-first statement for AI & GEO */}
              <div className="p-6 bg-white border-l-4 border-[#B08D3E] brass-corner-card">
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#B08D3E] mb-1.5">
                  Direct Overview & Practice Summary
                </div>
                <p className="text-sm text-[#101F38] leading-relaxed font-sans font-medium">
                  {service.answerFirst}
                </p>
              </div>

              {/* Service Ledger Graphic Feature */}
              <div className="space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#5B6B7F]">
                  Workpaper / Ledger Excerpt:
                </div>
                <LedgerGraphic slug={service.slug} />
              </div>

              {/* Full copy from PDF */}
              <div className="space-y-4 text-xs sm:text-sm text-[#5B6B7F] font-sans leading-relaxed">
                <h2 className="font-serif text-xl font-bold text-[#101F38] border-b border-[#5B6B7F]/20 pb-2">
                  Detailed Scope & Professional Approach
                </h2>
                {service.fullDescription.split("\n\n").map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Who this is for */}
              <div className="pt-4">
                <h3 className="font-serif text-lg font-bold text-[#101F38] mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#B08D3E]" />
                  <span>Who This Service Is For</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.whoThisIsFor.map((item, idx) => (
                    <div key={idx} className="p-4 bg-white brass-corner-card flex items-start gap-3">
                      <TickMark variant="rust" size="sm" className="mt-0.5" />
                      <span className="text-xs text-[#101F38] font-sans font-medium leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div className="pt-4">
                <h3 className="font-serif text-lg font-bold text-[#101F38] mb-4">
                  Key Strategic Benefits
                </h3>
                <ul className="space-y-3">
                  {service.keyBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#101F38] font-sans">
                      <TickMark variant="rust" size="sm" className="mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div className="pt-4">
                <h3 className="font-serif text-lg font-bold text-[#101F38] mb-4">
                  Key Deliverables & Documentation
                </h3>
                <div className="p-6 bg-white brass-corner-card space-y-3 font-sans">
                  {service.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#101F38]">
                      <span className="font-mono font-bold text-[#B08D3E]">0{idx + 1}.</span>
                      <span className="font-medium">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Freshness Signal */}
              <div className="pt-6 border-t border-[#5B6B7F]/20 flex items-center justify-between text-[11px] font-mono text-[#5B6B7F]">
                <span>Entity: Daniel Isibor & Co (Chartered Accountants), Abuja, Nigeria</span>
                <span>Last reviewed: August 2026</span>
              </div>
            </article>

            {/* Right Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Consultation Card in Ink Navy */}
              <div className="bg-[#101F38] text-white p-6 sm:p-8 rounded-none shadow-xl border border-[#B08D3E]/40 brass-corner-card !bg-[#101F38] space-y-4">
                <div className="flex items-center gap-2">
                  <TickMark variant="brass" size="sm" />
                  <h3 className="font-serif text-base font-bold uppercase tracking-wider text-white">
                    Request Proposal
                  </h3>
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Discuss your accounting or audit requirements directly with our licensed chartered accountants in Abuja.
                </p>
                <div className="pt-2 space-y-2">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-4 py-3 bg-[#B08D3E] text-[#101F38] font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-all shadow-md"
                  >
                    <span>Book Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Link>
                  <a
                    href={`tel:${FIRM_INFO.phoneE164}`}
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-[#B08D3E]/30 text-white font-mono text-xs font-bold tracking-wider transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 mr-2 text-[#B08D3E]" />
                    <span>Call: {FIRM_INFO.phone}</span>
                  </a>
                </div>
              </div>

              {/* Related Services */}
              <div className="p-6 bg-white brass-corner-card">
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#B08D3E] mb-4">
                  Related Services
                </div>
                <div className="space-y-3">
                  {relatedServices.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/services/${rel.slug}`}
                      className="block p-3 bg-[#F6F2E9] border border-[#5B6B7F]/15 hover:border-[#B08D3E] transition-all group"
                    >
                      <h4 className="font-serif font-bold text-[#101F38] text-xs group-hover:text-[#B08D3E] mb-1 flex items-center justify-between">
                        <span>{rel.title}</span>
                        <ArrowRight className="w-3 h-3 text-[#5B6B7F] group-hover:text-[#B08D3E] transition-colors" />
                      </h4>
                      <p className="text-[11px] font-sans text-[#5B6B7F] line-clamp-2">{rel.shortSummary}</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Statutory Registrations summary */}
              <div className="p-6 bg-white brass-corner-card text-xs text-[#5B6B7F] space-y-2 font-mono text-[11px]">
                <div className="font-bold text-[#101F38] uppercase tracking-wider">
                  Accreditations
                </div>
                <p className="flex items-center gap-1.5">
                  <TickMark variant="rust" size="sm" />
                  <span>Financial Reporting Council (FRC)</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <TickMark variant="rust" size="sm" />
                  <span>Auditor General of Federation</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <TickMark variant="rust" size="sm" />
                  <span>ICAN & CITN Certified</span>
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
