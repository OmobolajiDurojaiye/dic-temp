import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CellRow } from "@/components/CellTable";
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
  return (
    <div className="flex flex-col bg-[#F4F8FB]">
      <Breadcrumbs items={[{ name: "Services", url: "/services" }]} />

      {/* Page Header - Deep Navy */}
      <section className="bg-[#0B1E3D] text-white py-14 lg:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-[#3B9FE0]/40 text-[#3B9FE0] text-[11px] font-mono font-bold uppercase tracking-wider rounded-[4px]">
              <span>Full Practice Portfolio</span>
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Audit, Tax & Financial Advisory Services
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              Delivering independent assurance, regulatory compliance, and system optimization for Nigerian enterprises, SMEs, NGOs, and public sector institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Answer-first summary for GEO */}
      <section className="py-10 bg-[#F4F8FB] border-b border-[#5C7089]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 bg-white border-l-4 border-[#3B9FE0] max-w-4xl flat-panel">
            <p className="text-sm text-[#0B1E3D] leading-relaxed font-medium font-sans">
              <strong>Daniel Isibor & Co (Chartered Accountants)</strong> provides six core professional services in <strong>Abuja and nationwide across Nigeria</strong>: (1) Audit and Assurance Services, (2) External Audit, (3) Tax Management and Advisory, (4) Accounting Software Consultancy, (5) Special Purpose Audit, and (6) IFRS Financial Reporting.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-16 bg-white border-b border-[#5C7089]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service, index) => (
              <div
                key={service.slug}
                id={service.slug}
                className="flat-panel p-6 sm:p-8 flex flex-col justify-between hover:border-[#3B9FE0] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#5C7089]/15">
                    <span className="font-mono text-xs font-bold text-[#3B9FE0]">
                      0{index + 1}.
                    </span>
                    <span className="text-[10px] font-mono text-[#5C7089] uppercase tracking-widest">
                      PRACTICE AREA
                    </span>
                  </div>

                  <h2 className="font-sans font-black text-xl text-[#0B1E3D] mb-3">
                    {service.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#5C7089] font-sans leading-relaxed mb-6">
                    {service.shortSummary}
                  </p>

                  {/* At a glance Cell Table */}
                  <div className="space-y-1 mb-6 border border-[#5C7089]/20 rounded-[4px] bg-[#F4F8FB] overflow-hidden">
                    <CellRow label="Target Sector" value={service.whoThisIsFor[0]?.split(" ")[0] + " & Corporate"} />
                    <CellRow label="Primary Deliverable" value={service.deliverables[0]?.split(" ").slice(0, 3).join(" ")} />
                  </div>
                </div>

                <div className="pt-4 border-t border-[#5C7089]/15">
                  <Link
                    href={`/services/${service.slug}`}
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-[#0B1E3D] text-white border border-[#3B9FE0] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#3B9FE0] transition-all rounded-[4px]"
                  >
                    <span>Full Service Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="bg-[#0B1E3D] text-white py-14 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="font-sans text-2xl sm:text-3xl font-black tracking-tight text-white">
            Need Expert Financial Advice for Your Organization?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-sans">
            Contact Daniel Isibor & Co today to schedule an initial consultation or request an audit proposal.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#3B9FE0] text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-[#0B1E3D] transition-all shadow-md rounded-[4px]"
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
