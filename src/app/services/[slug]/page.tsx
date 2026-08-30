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
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  Building2,
  Award
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { FIRM_INFO, SERVICES_DATA, ServiceItem } from "@/data/firmData";

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

  const getServiceIcon = (sSlug: string) => {
    switch (sSlug) {
      case "audit-and-assurance":
        return <ShieldCheck className="w-8 h-8 text-brand-navy" />;
      case "external-audit":
        return <FileSearch className="w-8 h-8 text-brand-navy" />;
      case "tax-management-and-advisory":
        return <Calculator className="w-8 h-8 text-brand-navy" />;
      case "accounting-software-consultancy":
        return <Briefcase className="w-8 h-8 text-brand-navy" />;
      case "special-purpose-audit":
        return <Info className="w-8 h-8 text-brand-navy" />;
      case "financial-reporting":
        return <FileText className="w-8 h-8 text-brand-navy" />;
      default:
        return <ShieldCheck className="w-8 h-8 text-brand-navy" />;
    }
  };

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
    <div className="flex flex-col">
      <JsonLd data={serviceSchema} />
      <Breadcrumbs
        items={[
          { name: "Services", url: "/services" },
          { name: service.title, url: `/services/${service.slug}` }
        ]}
      />

      {/* Hero Header */}
      <section className="bg-brand-navy text-white py-14 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-cyan">
              <Award className="w-3.5 h-3.5" />
              <span>Daniel Isibor & Co • Chartered Accountants</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              {service.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              {service.shortSummary}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Grid */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Main Article */}
            <article className="lg:col-span-8 space-y-8">
              {/* Answer-first statement for AI & GEO */}
              <div className="p-6 bg-slate-50 border-l-4 border-brand-navy shadow-sm">
                <h2 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-2">
                  Service Overview & Direct Answer
                </h2>
                <p className="text-sm text-slate-800 leading-relaxed font-medium">
                  {service.answerFirst}
                </p>
              </div>

              {/* Full copy extracted from PDF */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
                  Detailed Scope & Professional Approach
                </h2>
                {service.fullDescription.split("\n\n").map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Who this is for */}
              <div className="pt-4">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-brand-navy" />
                  <span>Who This Service Is For</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.whoThisIsFor.map((item, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 border border-slate-200 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-brand-navy flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 font-medium leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div className="pt-4">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Key Strategic Benefits
                </h3>
                <ul className="space-y-3">
                  {service.keyBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-brand-navy/10 text-brand-navy font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div className="pt-4">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Key Deliverables & Documentation
                </h3>
                <div className="p-6 bg-slate-50 border border-slate-200 space-y-3">
                  {service.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-800">
                      <span className="font-mono font-bold text-brand-navy">0{idx + 1}.</span>
                      <span className="font-medium">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Freshness Signal */}
              <div className="pt-6 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                <span>Entity: Daniel Isibor & Co (Chartered Accountants), Abuja, Nigeria</span>
                <span>Last reviewed: August 2026</span>
              </div>
            </article>

            {/* Right Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Consultation Card */}
              <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-none shadow-lg border border-slate-800 space-y-4">
                <h3 className="text-base font-bold uppercase tracking-wider text-white">
                  Request Service Proposal
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Discuss your accounting or audit requirements directly with our licensed chartered accountants in Abuja.
                </p>
                <div className="pt-2 space-y-2">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-4 py-3 bg-brand-cyan text-brand-navy text-xs font-bold uppercase tracking-wider hover:bg-white transition-all shadow-md"
                  >
                    <span>Book Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Link>
                  <a
                    href={`tel:${FIRM_INFO.phoneE164}`}
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold tracking-wider transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 mr-2 text-brand-cyan" />
                    <span>Call: {FIRM_INFO.phone}</span>
                  </a>
                </div>
              </div>

              {/* Related Services */}
              <div className="p-6 bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-4">
                  Related Services
                </h4>
                <div className="space-y-3">
                  {relatedServices.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/services/${rel.slug}`}
                      className="block p-3 bg-white border border-slate-200 hover:border-brand-navy transition-all group"
                    >
                      <h5 className="font-bold text-slate-900 text-xs group-hover:text-brand-navy mb-1 flex items-center justify-between">
                        <span>{rel.title}</span>
                        <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-brand-navy transition-colors" />
                      </h5>
                      <p className="text-[11px] text-slate-500 line-clamp-2">{rel.shortSummary}</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Statutory Registrations summary */}
              <div className="p-6 bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
                <div className="font-bold text-slate-900 uppercase tracking-wider">
                  Statutory Registrations
                </div>
                <p>• Financial Reporting Council of Nigeria (FRC)</p>
                <p>• Office of the Auditor General of the Federation</p>
                <p>• ICAN & CITN Certified Partners</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
