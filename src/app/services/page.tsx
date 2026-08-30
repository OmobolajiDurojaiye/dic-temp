import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Calculator,
  FileSearch,
  Briefcase,
  FileText,
  CheckCircle2
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
  const serviceImages = [
    "/images/stock/team-meeting.jpg",
    "/images/stock/team-collaboration.jpg",
    "/images/stock/man-suit.jpg",
    "/images/stock/woman-professional.jpg",
    "/images/stock/office-handshake.jpg",
    "/images/stock/team-discussion.jpg"
  ];

  return (
    <div className="flex flex-col bg-white">
      <Breadcrumbs items={[{ name: "Services", url: "/services" }]} />

      {/* Page Header */}
      <section className="bg-[#f8fafc] py-14 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0e2a47]">
              Audit, Tax & Financial Advisory Services
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
              Delivering independent assurance, regulatory compliance, and system optimization for Nigerian enterprises, SMEs, NGOs, and public sector institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Answer-first summary for GEO */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl max-w-4xl">
            <p className="text-sm text-[#0e2a47] leading-relaxed font-medium">
              <strong>Daniel Isibor & Co (Chartered Accountants)</strong> provides six core professional services in <strong>Abuja and nationwide across Nigeria</strong>: (1) Audit and Assurance Services, (2) External Audit, (3) Tax Management and Advisory, (4) Accounting Software Consultancy, (5) Special Purpose Audit, and (6) IFRS Financial Reporting.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services Grid with High-Res Photos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service, index) => (
              <div
                key={service.slug}
                id={service.slug}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full h-48 bg-slate-100">
                    <Image
                      src={serviceImages[index % serviceImages.length]}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#0e2a47]">
                      0{index + 1}. Practice Area
                    </div>
                  </div>

                  <div className="p-7 space-y-3">
                    <h2 className="text-xl font-bold text-[#0e2a47]">
                      {service.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {service.shortSummary}
                    </p>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href={`/services/${service.slug}`}
                    className="w-full inline-flex items-center justify-center py-3 px-4 bg-[#0e2a47] hover:bg-[#143d6b] text-white text-xs font-semibold rounded-xl transition-colors shadow-sm"
                  >
                    <span>Full Service Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="bg-[#0e2a47] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Need Expert Financial Advice for Your Organization?
          </h3>
          <p className="text-sm text-slate-300 font-sans">
            Contact Daniel Isibor & Co today to schedule an initial consultation or request an audit proposal.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white hover:bg-slate-100 text-[#0e2a47] font-bold text-xs uppercase tracking-wider rounded-full transition-all shadow-lg"
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
