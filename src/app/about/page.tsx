import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Target,
  Eye,
  Award,
  ArrowRight,
  Compass
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TickMark from "@/components/TickMark";
import { FIRM_INFO } from "@/data/firmData";

export const metadata: Metadata = {
  title: "About Us | Firm Profile & Statutory Accreditations",
  description:
    "Learn about Daniel Isibor & Co (Chartered Accountants) in Abuja, Nigeria. Discover our mission, core values, regulatory registrations with FRC & Auditor General of the Federation, and professional strengths.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Daniel Isibor & Co (Chartered Accountants)",
    description:
      "Licensed audit and advisory firm in Abuja, Nigeria. FRC-registered, Auditor General registered, and ICAN/CITN accredited.",
    url: `${FIRM_INFO.siteUrl}/about`,
  }
};

export default function AboutPage() {
  const coreValues = [
    { title: "Integrity", desc: "Upholding absolute honesty, transparency, and independence in every audit and financial engagement." },
    { title: "Accuracy", desc: "Meticulous verification and rigorous analytical procedures ensuring flawless compliance under IFRS and CAMA 2020." },
    { title: "Ethics", desc: "Strict adherence to the professional codes of conduct established by ICAN, CITN, and the Financial Reporting Council." },
    { title: "Accountability", desc: "Taking full responsibility for our findings, maintaining round-the-clock client reporting and data security." },
    { title: "Teamwork", desc: "Leveraging multidisciplinary capabilities across auditing, taxation, risk management, and software systems." }
  ];

  const strengths = [
    "Meeting and exceeding client expectations through customized financial solutions",
    "Leading by example with high-caliber, experienced chartered accountants",
    "Setting and achieving the highest standards of independence and objectivity",
    "Anticipating and responding swiftly to dynamic regulatory and tax requirements",
    "Maintaining loyalty, trust, and mutual respect in all professional relationships",
    "Working together with a unified purpose to drive our clients' profitability"
  ];

  return (
    <div className="flex flex-col bg-[#F6F2E9]">
      <Breadcrumbs items={[{ name: "About Us", url: "/about" }]} />

      {/* Page Header - Ink Navy */}
      <section className="bg-[#101F38] text-white py-14 lg:py-20 border-b border-[#B08D3E]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-[#B08D3E]/40 text-[#B08D3E] text-[11px] font-mono font-bold uppercase tracking-wider">
              <TickMark variant="rust" size="sm" />
              <span>Firm Profile & Statutory Standings</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              About Daniel Isibor & Co
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              An accredited professional accounting and audit firm located in Abuja, Nigeria, dedicated to Total Quality Management, statutory compliance, and empowering sustainable business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Answer-first & Profile Section - Parchment */}
      <section className="py-16 bg-[#F6F2E9] border-b border-[#5B6B7F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              {/* Answer-first GEO statement */}
              <div className="p-6 bg-white border-l-4 border-[#B08D3E] brass-corner-card">
                <p className="text-sm text-[#101F38] leading-relaxed font-medium font-sans">
                  <strong>Daniel Isibor & Co (Chartered Accountants)</strong> provides premier auditing, taxation, accounting, financial management, system optimization, due diligence, feasibility studies, financial forecast, enterprise risk management, fraud prevention and detection, and debt recovery services across <strong>Abuja and Nigeria</strong>.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#5B6B7F] font-sans leading-relaxed">
                <p>
                  DIC is committed to providing our clients with an independent assessment of their operations and organizational structure. We take time to get to know our clients and understand how they measure performance, and we are dedicated to a hands-on approach that has proven to build integrity and trust in relationships.
                </p>
                <p>
                  The cornerstone of our business philosophy is extensive and continued communication with the clients. We keep our clients in the loop at all stages of our accounting procedures with regular reports for reference. All financial data is accessible round the clock through dedicated servers using modern software and secure backup facilities.
                </p>
                <p>
                  In addition, we act as proactive business advisers by monitoring market trends and advising our clients on modern, efficient methods related to accounting and financial management.
                </p>
                <p>
                  DIC focuses specifically on supporting small and mid-size businesses (SMEs) as well as large corporate entities. We are passionate about helping them maximize their return by freeing up their time from back-office work, allowing them to focus on what they do best: &ldquo;increasing their revenue and improving their profit.&rdquo;
                </p>
              </div>
            </div>

            {/* Regulatory Registrations Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#101F38] text-white p-6 sm:p-8 rounded-none shadow-xl border border-[#B08D3E]/40 brass-corner-card !bg-[#101F38]">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#5B6B7F]/30">
                  <TickMark variant="brass" size="md" />
                  <h3 className="font-serif text-base font-bold uppercase tracking-wider text-white">
                    Statutory Registrations
                  </h3>
                </div>
                <ul className="space-y-3.5 text-xs text-slate-300 font-sans">
                  <li className="flex items-start gap-2.5">
                    <TickMark variant="rust" size="sm" className="mt-0.5" />
                    <span><strong className="text-white">Financial Reporting Council (FRC):</strong> Registered audit firm adhering to national & IFRS reporting standards.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <TickMark variant="rust" size="sm" className="mt-0.5" />
                    <span><strong className="text-white">Office of the Auditor General of Federation:</strong> Authorized audit practice for public sector & MDA engagements.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <TickMark variant="rust" size="sm" className="mt-0.5" />
                    <span><strong className="text-white">ICAN:</strong> Licensed chartered partners with ACA qualification.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <TickMark variant="rust" size="sm" className="mt-0.5" />
                    <span><strong className="text-white">CITN:</strong> Certified tax management and advisory practitioners.</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-white border border-[#B08D3E]/30 brass-corner-card">
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#B08D3E] mb-1.5">
                  Operating Philosophy
                </div>
                <p className="text-xs text-[#5B6B7F] font-sans leading-relaxed">
                  Our focus at DIC is dedicated to Total Quality Management (TQM) and Quality Assurance (QA) in carrying out every audit, tax reconciliation, and financial consulting procedure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Goals - Parchment Grid */}
      <section className="py-16 bg-white border-b border-[#5B6B7F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="brass-corner-card p-8">
              <div className="w-10 h-10 bg-[#101F38] text-[#B08D3E] flex items-center justify-center mb-6">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#101F38] mb-3">Our Mission</h3>
              <p className="text-xs sm:text-sm text-[#5B6B7F] font-sans leading-relaxed italic">
                &ldquo;To provide high-quality services to our clients in the most efficient and effective manner for their businesses to operate at optimal level.&rdquo;
              </p>
            </div>

            <div className="brass-corner-card p-8">
              <div className="w-10 h-10 bg-[#101F38] text-[#B08D3E] flex items-center justify-center mb-6">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#101F38] mb-3">Our Vision</h3>
              <p className="text-xs sm:text-sm text-[#5B6B7F] font-sans leading-relaxed italic">
                &ldquo;To be a leading professional firm providing exceptional services and timely solutions to our clients&apos; Tax, Audit, and Financial Advisory needs.&rdquo;
              </p>
            </div>

            <div className="brass-corner-card p-8">
              <div className="w-10 h-10 bg-[#101F38] text-[#B08D3E] flex items-center justify-center mb-6">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#101F38] mb-3">Our Goals</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#5B6B7F] font-sans">
                <li className="flex items-start gap-2">
                  <TickMark variant="rust" size="sm" className="mt-0.5" />
                  <span>Integrity and accuracy while handling client business</span>
                </li>
                <li className="flex items-start gap-2">
                  <TickMark variant="rust" size="sm" className="mt-0.5" />
                  <span>Professionalism and continuous skill set advancement</span>
                </li>
                <li className="flex items-start gap-2">
                  <TickMark variant="rust" size="sm" className="mt-0.5" />
                  <span>Innovative, cost-effective problem solving</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-[#F6F2E9] border-b border-[#5B6B7F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-widest text-[#B08D3E] mb-1">
              <TickMark variant="brass" size="sm" />
              <span>Core Principles</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#101F38] tracking-tight">
              Our Core Values
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#5B6B7F] font-sans">
              Defined and reinforced daily through our team’s commitment to ethical chartered accountancy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((val, idx) => (
              <div key={idx} className="brass-corner-card p-6 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xl font-bold text-[#B08D3E] mb-2">0{idx + 1}.</div>
                  <h4 className="font-serif font-bold text-[#101F38] text-base mb-2">{val.title}</h4>
                  <p className="text-xs text-[#5B6B7F] font-sans leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Strengths */}
      <section className="py-16 bg-white border-b border-[#5B6B7F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-widest text-[#B08D3E] mb-1">
              <TickMark variant="brass" size="sm" />
              <span>Competitive Edge</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#101F38] tracking-tight">
              Our Distinct Strengths
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {strengths.map((strength, index) => (
              <div key={index} className="flex items-start gap-3.5 p-5 brass-corner-card">
                <TickMark variant="rust" size="md" className="mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-[#101F38] font-sans leading-relaxed">
                  {strength}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center flex flex-wrap justify-center gap-4">
            <Link
              href="/team"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-[#101F38] text-white border border-[#B08D3E] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#B08D3E] hover:text-[#101F38] transition-all"
            >
              <span>Meet Our Leadership Team</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-white border border-[#5B6B7F]/30 text-[#101F38] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#F6F2E9] transition-all"
            >
              <span>Book a Consultation</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
