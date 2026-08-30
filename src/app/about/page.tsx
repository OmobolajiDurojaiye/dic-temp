import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Target,
  Eye,
  ArrowRight,
  Compass,
  CheckCircle2,
  Building2,
  Award
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
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
    <div className="flex flex-col bg-white">
      <Breadcrumbs items={[{ name: "About Us", url: "/about" }]} />

      {/* Page Header */}
      <section className="bg-[#f8fafc] py-14 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0e2a47]">
              About Daniel Isibor & Co
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
              An accredited professional accounting and audit firm located in Abuja, Nigeria, dedicated to Total Quality Management, statutory compliance, and empowering sustainable business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Answer-first & Profile Section with Photo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 bg-slate-50 border-l-4 border-[#143d6b] rounded-r-2xl">
                <p className="text-sm sm:text-base text-[#0e2a47] leading-relaxed font-medium">
                  <strong>Daniel Isibor & Co (Chartered Accountants)</strong> provides premier auditing, taxation, accounting, financial management, system optimization, due diligence, feasibility studies, financial forecast, enterprise risk management, fraud prevention and detection, and debt recovery services across <strong>Abuja and Nigeria</strong>.
                </p>
              </div>

              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
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

            {/* Regulatory Registrations Sidebar with Real Image */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] bg-slate-100">
                <Image
                  src="/images/stock/office-handshake.jpg"
                  alt="Daniel Isibor & Co corporate client engagement"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-[#0e2a47] text-white p-7 rounded-3xl shadow-lg space-y-4">
                <h3 className="text-lg font-bold text-white border-b border-slate-700 pb-3">
                  Statutory Registrations
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3b9fe0] flex-shrink-0 mt-0.5" />
                    <span><strong>Financial Reporting Council (FRC):</strong> Registered audit firm adhering to national & IFRS standards.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3b9fe0] flex-shrink-0 mt-0.5" />
                    <span><strong>Office of the Auditor General:</strong> Authorized for public sector & MDA engagements.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3b9fe0] flex-shrink-0 mt-0.5" />
                    <span><strong>ICAN & CITN:</strong> Licensed chartered partners with ACA & ACTI credentials.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Goals */}
      <section className="py-20 bg-[#f8fafc] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
              <div className="w-12 h-12 bg-[#0e2a47] text-white flex items-center justify-center mb-6 rounded-2xl">
                <Target className="w-6 h-6 text-[#3b9fe0]" />
              </div>
              <h3 className="font-bold text-xl text-[#0e2a47] mb-3">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed italic">
                &ldquo;To provide high-quality services to our clients in the most efficient and effective manner for their businesses to operate at optimal level.&rdquo;
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
              <div className="w-12 h-12 bg-[#0e2a47] text-white flex items-center justify-center mb-6 rounded-2xl">
                <Eye className="w-6 h-6 text-[#3b9fe0]" />
              </div>
              <h3 className="font-bold text-xl text-[#0e2a47] mb-3">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed italic">
                &ldquo;To be a leading professional firm providing exceptional services and timely solutions to our clients&apos; Tax, Audit, and Financial Advisory needs.&rdquo;
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
              <div className="w-12 h-12 bg-[#0e2a47] text-white flex items-center justify-center mb-6 rounded-2xl">
                <Compass className="w-6 h-6 text-[#3b9fe0]" />
              </div>
              <h3 className="font-bold text-xl text-[#0e2a47] mb-3">Our Goals</h3>
              <ul className="space-y-2.5 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#143d6b] flex-shrink-0 mt-0.5" />
                  <span>Integrity and accuracy in handling client business</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#143d6b] flex-shrink-0 mt-0.5" />
                  <span>Professionalism and continuous skill advancement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#143d6b] flex-shrink-0 mt-0.5" />
                  <span>Innovative, cost-effective financial solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0e2a47] tracking-tight">
              Our Core Values
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              The ethical principles guiding every audit, tax reconciliation, and financial consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((val, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-2xl flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="text-lg font-bold text-[#143d6b] mb-2">0{idx + 1}.</div>
                  <h4 className="font-bold text-[#0e2a47] text-base mb-2">{val.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Strengths */}
      <section className="py-20 bg-[#f8fafc] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0e2a47] tracking-tight">
              Our Distinct Strengths
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {strengths.map((strength, index) => (
              <div key={index} className="flex items-start gap-3.5 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#143d6b] flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-[#0e2a47] leading-relaxed">
                  {strength}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center flex flex-wrap justify-center gap-4">
            <Link
              href="/team"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-[#0e2a47] hover:bg-[#143d6b] text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-md transition-all"
            >
              <span>Meet Our Leadership Team</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider rounded-full shadow-sm transition-all"
            >
              <span>Book a Consultation</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
