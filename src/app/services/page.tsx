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
  ArrowRight
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TickMark from "@/components/TickMark";
import LedgerGraphic from "@/components/LedgerGraphic";
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
        return <ShieldCheck className="w-6 h-6 text-[#B08D3E]" />;
      case "external-audit":
        return <FileSearch className="w-6 h-6 text-[#B08D3E]" />;
      case "tax-management-and-advisory":
        return <Calculator className="w-6 h-6 text-[#B08D3E]" />;
      case "accounting-software-consultancy":
        return <Briefcase className="w-6 h-6 text-[#B08D3E]" />;
      case "special-purpose-audit":
        return <Info className="w-6 h-6 text-[#B08D3E]" />;
      case "financial-reporting":
        return <FileText className="w-6 h-6 text-[#B08D3E]" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#B08D3E]" />;
    }
  };

  return (
    <div className="flex flex-col bg-[#F6F2E9]">
      <Breadcrumbs items={[{ name: "Services", url: "/services" }]} />

      {/* Page Header - Ink Navy */}
      <section className="bg-[#101F38] text-white py-14 lg:py-20 border-b border-[#B08D3E]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-[#B08D3E]/40 text-[#B08D3E] text-[11px] font-mono font-bold uppercase tracking-wider">
              <TickMark variant="rust" size="sm" />
              <span>Full Practice Portfolio</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Audit, Tax & Financial Advisory Services
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              Delivering independent assurance, regulatory compliance, and system optimization for Nigerian enterprises, SMEs, NGOs, and public sector institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Answer-first summary for GEO */}
      <section className="py-10 bg-[#F6F2E9] border-b border-[#5B6B7F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 bg-white border-l-4 border-[#B08D3E] max-w-4xl brass-corner-card">
            <p className="text-sm text-[#101F38] leading-relaxed font-medium font-sans">
              <strong>Daniel Isibor & Co (Chartered Accountants)</strong> provides six core professional services in <strong>Abuja and nationwide across Nigeria</strong>: (1) Audit and Assurance Services, (2) External Audit, (3) Tax Management and Advisory, (4) Accounting Software Consultancy, (5) Special Purpose Audit, and (6) IFRS Financial Reporting.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services Grid with Ledger Workpapers */}
      <section className="py-16 bg-white border-b border-[#5B6B7F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {SERVICES_DATA.map((service, index) => (
              <div
                key={service.slug}
                id={service.slug}
                className="brass-corner-card p-8 sm:p-10 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#F6F2E9] border border-[#B08D3E]/30 flex items-center justify-center">
                        {getServiceIcon(service.slug)}
                      </div>
                      <div>
                        <span className="text-[11px] font-mono font-bold text-[#B08D3E] uppercase tracking-wider">
                          Service 0{index + 1}
                        </span>
                        <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#101F38] leading-snug">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#5B6B7F] font-sans leading-relaxed">
                      {service.answerFirst}
                    </p>

                    <div className="pt-2">
                      <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#101F38] mb-2">
                        Key Deliverables & Documentation:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.deliverables.slice(0, 4).map((del, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2 text-xs text-[#5B6B7F] font-sans">
                            <TickMark variant="rust" size="sm" className="mt-0.5" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Ledger Graphic & Action */}
                  <div className="lg:col-span-5 space-y-4">
                    <LedgerGraphic slug={service.slug} />
                    <div className="pt-2">
                      <Link
                        href={`/services/${service.slug}`}
                        className="w-full inline-flex items-center justify-center px-4 py-3 bg-[#101F38] text-white border border-[#B08D3E] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#B08D3E] hover:text-[#101F38] transition-all"
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
      <section className="bg-[#101F38] text-white py-14 border-t border-[#B08D3E]/30">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Need Expert Financial Advice for Your Organization?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-sans">
            Contact Daniel Isibor & Co today to schedule an initial consultation or request an audit proposal.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#B08D3E] text-[#101F38] font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-md"
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
