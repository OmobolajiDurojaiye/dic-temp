import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Phone,
  Building2,
  CheckCircle2
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
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
    <div className="flex flex-col bg-white">
      <JsonLd data={serviceSchema} />
      <Breadcrumbs
        items={[
          { name: "Services", url: "/services" },
          { name: service.title, url: `/services/${service.slug}` }
        ]}
      />

      {/* Hero Header */}
      <section className="bg-[#f8fafc] py-14 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#143d6b]">
              Daniel Isibor & Co • Chartered Accountants
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0e2a47]">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
              {service.shortSummary}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Grid */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Main Article */}
            <article className="lg:col-span-8 space-y-8">
              {/* Answer-first statement */}
              <div className="p-6 bg-slate-50 border-l-4 border-[#143d6b] rounded-r-2xl">
                <div className="text-xs font-bold uppercase tracking-wider text-[#143d6b] mb-1.5">
                  Service Summary
                </div>
                <p className="text-sm sm:text-base text-[#0e2a47] leading-relaxed font-medium">
                  {service.answerFirst}
                </p>
              </div>

              {/* Full copy from PDF */}
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <h2 className="text-xl font-bold text-[#0e2a47] border-b border-slate-200 pb-2">
                  Detailed Scope & Professional Approach
                </h2>
                {service.fullDescription.split("\n\n").map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Who this is for */}
              <div className="pt-4">
                <h3 className="text-lg font-bold text-[#0e2a47] mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#143d6b]" />
                  <span>Who This Service Is For</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.whoThisIsFor.map((item, idx) => (
                    <div key={idx} className="p-4 bg-[#f8fafc] border border-slate-100 rounded-2xl flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#143d6b] flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#0e2a47] font-medium leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div className="pt-4">
                <h3 className="text-lg font-bold text-[#0e2a47] mb-4">
                  Key Strategic Benefits
                </h3>
                <ul className="space-y-3">
                  {service.keyBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#0e2a47]">
                      <CheckCircle2 className="w-4 h-4 text-[#143d6b] flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div className="pt-4">
                <h3 className="text-lg font-bold text-[#0e2a47] mb-4">
                  Key Deliverables & Documentation
                </h3>
                <div className="p-6 bg-[#f8fafc] border border-slate-100 rounded-2xl space-y-3">
                  {service.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0e2a47]">
                      <span className="font-bold text-[#143d6b]">0{idx + 1}.</span>
                      <span className="font-medium">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Freshness Signal */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>Daniel Isibor & Co (Chartered Accountants), Abuja, Nigeria</span>
                <span>Last reviewed: August 2026</span>
              </div>
            </article>

            {/* Right Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Consultation Card */}
              <div className="bg-[#0e2a47] text-white p-7 rounded-3xl shadow-xl space-y-4">
                <h3 className="text-lg font-bold text-white">
                  Request Proposal
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  Discuss your accounting or audit requirements directly with our licensed chartered accountants in Abuja.
                </p>
                <div className="pt-2 space-y-2.5">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-4 py-3 bg-[#e59819] hover:bg-[#d48810] text-[#0e2a47] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
                  >
                    <span>Book Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Link>
                  <a
                    href={`tel:${FIRM_INFO.phoneE164}`}
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 mr-2 text-[#3b9fe0]" />
                    <span>Call: {FIRM_INFO.phone}</span>
                  </a>
                </div>
              </div>

              {/* Related Services */}
              <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-[#143d6b] mb-4">
                  Related Services
                </div>
                <div className="space-y-3">
                  {relatedServices.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/services/${rel.slug}`}
                      className="block p-3.5 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors group"
                    >
                      <h4 className="font-bold text-[#0e2a47] text-xs group-hover:text-[#143d6b] mb-1 flex items-center justify-between">
                        <span>{rel.title}</span>
                        <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-[#143d6b]" />
                      </h4>
                      <p className="text-[11px] text-slate-500 line-clamp-2">{rel.shortSummary}</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Statutory Registrations summary */}
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl text-xs text-slate-600 space-y-2">
                <div className="font-bold text-[#0e2a47] uppercase tracking-wider">
                  Accreditations
                </div>
                <p>• Financial Reporting Council (FRC)</p>
                <p>• Auditor General of Federation</p>
                <p>• ICAN & CITN Certified</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
