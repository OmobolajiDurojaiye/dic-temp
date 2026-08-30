import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Target,
  Eye,
  CheckCircle2,
  Award,
  ArrowRight,
  Building,
  Users,
  Compass,
  Briefcase
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FIRM_INFO } from "@/data/firmData";

export const metadata: Metadata = {
  title: "About Us | Professional Profile & Accreditations",
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
    <div className="flex flex-col">
      <Breadcrumbs items={[{ name: "About Us", url: "/about" }]} />

      {/* Page Header */}
      <section className="bg-brand-navy text-white py-14 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-brand-cyan text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Firm Profile & Background</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              About Daniel Isibor & Co (Chartered Accountants)
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              An accredited professional accounting and audit firm located in Abuja, Nigeria, dedicated to total quality management, statutory compliance, and empowering business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Answer-first & Introduction Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              {/* Answer-first GEO statement */}
              <div className="p-6 bg-slate-50 border-l-4 border-brand-navy">
                <p className="text-sm text-slate-800 leading-relaxed font-medium">
                  <strong>Daniel Isibor & Co (Chartered Accountants)</strong> provides premier auditing, taxation, accounting, financial management, system optimization, due diligence, feasibility studies, financial forecast, enterprise risk management, fraud prevention and detection, and debt recovery services across <strong>Abuja and Nigeria</strong>.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
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
              <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-none shadow-xl border border-slate-800">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="w-6 h-6 text-brand-cyan" />
                  <h3 className="text-base font-bold uppercase tracking-wider">Statutory Registrations</h3>
                </div>
                <ul className="space-y-3.5 text-xs text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span><strong>Financial Reporting Council of Nigeria (FRC):</strong> Official registered audit firm adhering to national & IFRS reporting standards.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span><strong>Office of the Auditor General of the Federation:</strong> Registered audit practice authorized for public sector & MDA engagements.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span><strong>Institute of Chartered Accountants of Nigeria (ICAN):</strong> Licensed chartered partners with ACA qualifications.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span><strong>Chartered Institute of Taxation of Nigeria (CITN):</strong> Certified tax management and advisory practitioners.</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-2">Our Operating Focus</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our focus at DIC is dedicated to Total Quality Management (TQM) and Quality Assurance (QA) in carrying out every audit and financial consulting procedure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Goals */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 p-8 shadow-sm">
              <div className="w-12 h-12 bg-brand-navy text-brand-cyan flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Our Mission</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                &ldquo;To provide high-quality services to our clients in the most efficient and effective manner for their businesses to operate at optimal level.&rdquo;
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-8 shadow-sm">
              <div className="w-12 h-12 bg-brand-navy text-brand-cyan flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Our Vision</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                &ldquo;To be a leading professional firm providing exceptional services and timely solutions to our clients&apos; Tax, Audit, and Financial Advisory needs.&rdquo;
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-8 shadow-sm">
              <div className="w-12 h-12 bg-brand-navy text-brand-cyan flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Our Goals</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-brand-navy font-bold">•</span>
                  <span>Integrity and accuracy while handling client business</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-navy font-bold">•</span>
                  <span>Professionalism and continuous skill development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-navy font-bold">•</span>
                  <span>Innovative, cost-effective problem solving</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-navy">Foundation of Our Practice</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
              Our Core Values
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Defined and reinforced daily through our team’s dedication to ethical accounting and client success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((val, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-6 flex flex-col justify-between">
                <div>
                  <div className="text-xl font-black text-brand-navy mb-2">0{idx + 1}</div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">{val.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Strengths */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-navy">Competitive Edge</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
              Our Distinct Strengths
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {strengths.map((strength, index) => (
              <div key={index} className="flex items-start gap-4 p-5 bg-white border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-brand-navy flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                  {strength}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center flex flex-wrap justify-center gap-4">
            <Link
              href="/team"
              className="inline-flex items-center justify-center px-6 py-3 bg-brand-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-cyan hover:text-brand-navy transition-all"
            >
              <span>Meet Our Leadership Team</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white border border-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider hover:bg-slate-50 transition-all"
            >
              <span>Book a Consultation</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
