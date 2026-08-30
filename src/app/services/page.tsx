import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  FileSearch,
  Calculator,
  Briefcase,
  Info,
  FileText,
  ArrowRight,
  CheckCircle2,
  Award
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FIRM_INFO, SERVICES_DATA } from "@/data/firmData";

export const metadata: Metadata = {
  title: "Professional Accounting, Audit & Tax Services in Nigeria",
  description:
    "Explore the 6 core accounting, auditing, and financial advisory services offered by Daniel Isibor & Co (Chartered Accountants) in Abuja, Nigeria.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Our Services | Daniel Isibor & Co (Chartered Accountants)",
    description:
      "Statutory Audit, External Audit, Tax Advisory, Accounting Software Consultancy, Special Purpose Audit, and Financial Reporting in Nigeria.",
    url: `${FIRM_INFO.siteUrl}/services`,
  }
};

export default function ServicesPage() {
  const getServiceIcon = (slug: string) => {
    switch (slug) {
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

  return (
    <div className="flex flex-col">
      <Breadcrumbs items={[{ name: "Services", url: "/services" }]} />

      {/* Page Header */}
      <section className="bg-brand-navy text-white py-14 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-brand-cyan text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Full Practice Portfolio</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Audit, Tax & Financial Advisory Services
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              Delivering independent assurance, regulatory compliance, and system optimization for Nigerian enterprises, SMEs, NGOs, and public sector institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Answer-first summary for GEO */}
      <section className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 bg-slate-50 border-l-4 border-brand-navy max-w-4xl">
            <p className="text-sm text-slate-800 leading-relaxed font-medium">
              <strong>Daniel Isibor & Co (Chartered Accountants)</strong> provides six core professional services in <strong>Abuja and nationwide across Nigeria</strong>: (1) Audit and Assurance Services, (2) External Audit, (3) Tax Management and Advisory, (4) Accounting Software Consultancy, (5) Special Purpose Audit, and (6) IFRS Financial Reporting.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {SERVICES_DATA.map((service, index) => (
              <div
                key={service.slug}
                id={service.slug}
                className="bg-white border border-slate-200 p-8 sm:p-10 shadow-sm hover:border-brand-navy transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-slate-100 flex items-center justify-center">
                        {getServiceIcon(service.slug)}
                      </div>
                      <div>
                        <span className="text-[11px] font-mono font-bold text-brand-navy uppercase tracking-wider">
                          Service 0{index + 1}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {service.answerFirst}
                    </p>

                    <div className="pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                        Key Deliverables & Scope:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.deliverables.slice(0, 4).map((del, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-navy flex-shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4 bg-slate-50 p-6 border border-slate-200 flex flex-col justify-between h-full space-y-4">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-2">
                        Who This Is For:
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {service.whoThisIsFor.slice(0, 3).map((item, wIdx) => (
                          <li key={wIdx} className="flex items-start gap-1.5">
                            <span className="text-brand-navy font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-200">
                      <Link
                        href={`/services/${service.slug}`}
                        className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-brand-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-cyan hover:text-brand-navy transition-all"
                      >
                        <span>Full Service Guide</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="bg-brand-navy text-white py-14 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Need Expert Financial Advice for Your Organization?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Contact Daniel Isibor & Co today to schedule an initial consultation or request an audit proposal.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-cyan text-brand-navy font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-md"
            >
              <span>Contact Us Today</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
