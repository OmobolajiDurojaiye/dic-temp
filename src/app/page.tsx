import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  FileSearch,
  Calculator,
  Briefcase,
  Info,
  FileText,
  ArrowRight,
  Award,
  CheckCircle2,
  Building2,
  Users,
  Calendar,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { FIRM_INFO, SERVICES_DATA, TEAM_DATA, CLIENTS_DATA, FAQS_DATA } from "@/data/firmData";
import ClientLogo from "@/components/ClientLogo";

export default function HomePage() {
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

  const principalPartner = TEAM_DATA[0];

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative bg-brand-navy text-white overflow-hidden py-16 lg:py-24 border-b border-slate-800">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-cyan blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-brand-cyan blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 text-brand-cyan text-xs font-bold tracking-wider uppercase">
                <Award className="w-3.5 h-3.5" />
                <span>FRC & Auditor General Registered Audit Firm</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                High-Quality Audit, Tax & Financial Advisory Services in Nigeria
              </h1>

              {/* Answer-first GEO statement */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-light">
                <strong className="text-white font-medium">Daniel Isibor & Co (Chartered Accountants)</strong> is an accredited professional accounting and audit firm based in <strong className="text-white font-medium">Abuja, Nigeria</strong>. We deliver IFRS-compliant external audits, strategic tax management, financial reporting, and accounting software consultancy for corporate enterprises, SMEs, NGOs, and public institutions.
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-brand-cyan text-brand-navy font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-md"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent border border-white/30 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
                >
                  Explore Our 6 Services
                </Link>
              </div>

              {/* Quick Trust Badges */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center sm:text-left">
                <div>
                  <div className="text-2xl font-black text-brand-cyan">15+</div>
                  <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-brand-cyan">100%</div>
                  <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">IFRS & CAMA Compliant</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-brand-cyan">ICAN / CITN</div>
                  <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Certified Partners</div>
                </div>
              </div>
            </div>

            {/* Right Hero Card: Principal Partner Spotlight */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 border border-white/10 p-6 sm:p-8 rounded-none shadow-2xl relative">
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-brand-cyan/60 flex-shrink-0 bg-slate-800">
                    <Image
                      src={principalPartner.photoUrl}
                      alt="Daniel Isibor - Principal Partner"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-snug">{principalPartner.name}</h3>
                    <p className="text-xs font-semibold text-brand-cyan">{principalPartner.role}</p>
                    <p className="text-[11px] text-slate-400 font-mono mt-0.5">{principalPartner.credentials}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-4">
                  {principalPartner.shortBio}
                </p>
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={`/team/${principalPartner.slug}`}
                    className="text-xs font-bold text-brand-cyan hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read Executive Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest">Key Driver</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REGULATORY CREDENTIALS TICKER / BADGES */}
      <section className="bg-white py-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Accredited & Registered By:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-semibold text-slate-700">
              <span className="bg-slate-100 px-3 py-1.5 border border-slate-200">Financial Reporting Council of Nigeria (FRC)</span>
              <span className="bg-slate-100 px-3 py-1.5 border border-slate-200">Auditor General of the Federation</span>
              <span className="bg-slate-100 px-3 py-1.5 border border-slate-200">ICAN</span>
              <span className="bg-slate-100 px-3 py-1.5 border border-slate-200">CITN</span>
              <span className="bg-slate-100 px-3 py-1.5 border border-slate-200">CIBN</span>
              <span className="bg-slate-100 px-3 py-1.5 border border-slate-200">ACFE</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES GRID (INDEXABLE TO /services/[slug]) */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-navy mb-2">
              Comprehensive Professional Practice
            </h2>
            <h3 className="text-3xl font-bold text-slate-900 tracking-tight">
              Our Core Services in Abuja & Across Nigeria
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Each engagement is handled by qualified chartered accountants and tax specialists adhering to strict independence and IFRS standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.slug}
                className="bg-white border border-slate-200 p-8 flex flex-col justify-between hover:border-brand-navy hover:shadow-xl transition-all duration-200 group"
              >
                <div>
                  <div className="w-14 h-14 bg-slate-100 group-hover:bg-brand-navy/10 rounded-none flex items-center justify-center mb-6 transition-colors">
                    {getServiceIcon(service.slug)}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-brand-navy transition-colors mb-3">
                    {service.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {service.shortSummary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs font-bold text-brand-navy group-hover:text-brand-navy inline-flex items-center gap-1.5 uppercase tracking-wider"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 bg-brand-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-cyan hover:text-brand-navy transition-all"
            >
              <span>Explore Complete Services Directory</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. ABOUT & VALUE PROPOSITION */}
      <section className="py-16 lg:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-navy">
                About Daniel Isibor & Co
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                Dedicated Partners in Financial Integrity & Operational Growth
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                At Daniel Isibor & Co (Chartered Accountants), we provide auditing, tax, accounting, financial management, training, consultancy, system optimization, due diligence, feasibility studies, financial forecast, enterprise risk management, fraud prevention and detection, as well as debt recovery services.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                DIC is committed to providing our clients with an independent assessment of their operations and organizational structure. We take time to get to know our clients, understand how they measure performance, and bring a hands-on approach that builds lasting integrity and trust.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy hover:text-brand-cyan transition-colors"
                >
                  <span>Learn More About Our Mission, Values & Strengths</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Core Values Callout Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-slate-50 border border-slate-200">
                <div className="text-brand-navy font-bold text-sm mb-1">Integrity & Ethics</div>
                <p className="text-xs text-slate-600">Uncompromising adherence to professional ethics and objectivity in all audit engagements.</p>
              </div>
              <div className="p-5 bg-slate-50 border border-slate-200">
                <div className="text-brand-navy font-bold text-sm mb-1">Accuracy & Diligence</div>
                <p className="text-xs text-slate-600">Meticulous verification under IFRS and Nigerian statutory reporting frameworks.</p>
              </div>
              <div className="p-5 bg-slate-50 border border-slate-200">
                <div className="text-brand-navy font-bold text-sm mb-1">Accountability</div>
                <p className="text-xs text-slate-600">Clear, transparent reporting and round-the-clock client communication channels.</p>
              </div>
              <div className="p-5 bg-slate-50 border border-slate-200">
                <div className="text-brand-navy font-bold text-sm mb-1">Innovation & Tech</div>
                <p className="text-xs text-slate-600">Deploying leading accounting systems like QuickBooks, Sage, and ERP for streamlined operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. KEY DRIVERS / TEAM SPOTLIGHT */}
      <section className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-brand-navy mb-2">
                Executive Leadership
              </h2>
              <h3 className="text-3xl font-bold text-slate-900 tracking-tight">
                Meet Our Key Drivers
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl">
                Our key drivers possess over fifteen years of accounting, audit, and tax experience, providing the depth needed to accomplish desired results.
              </p>
            </div>
            <Link
              href="/team"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-navy hover:text-brand-cyan transition-colors"
            >
              <span>View All Team Members</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_DATA.slice(0, 3).map((member) => (
              <div
                key={member.slug}
                className="bg-white border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg hover:border-brand-navy transition-all"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    {member.photoUrl ? (
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border border-slate-200 flex-shrink-0 bg-slate-100">
                        <Image
                          src={member.photoUrl}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-brand-navy/10 text-brand-navy font-bold text-lg flex items-center justify-center flex-shrink-0">
                        {member.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                      </div>
                    )}
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm leading-snug">{member.name}</h4>
                      <p className="text-xs font-semibold text-brand-navy">{member.role}</p>
                      <p className="text-[10px] text-slate-500 font-mono mt-0.5">{member.credentials}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {member.shortBio}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/team/${member.slug}`}
                    className="text-xs font-bold text-brand-navy hover:underline inline-flex items-center gap-1 uppercase tracking-wider"
                  >
                    <span>Read Bio & Credentials</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLIENTS & SECTORS PREVIEW */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-navy mb-2">
              Social Proof & Experience
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Trusted by Organizations Across Nigeria
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              A track record of high-impact engagements spanning government agencies, financial institutions, corporate enterprises, and SMEs.
            </p>
          </div>

          {/* Adaptive Client Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {CLIENTS_DATA.slice(0, 8).map((client) => (
              <ClientLogo
                key={client.name}
                name={client.name}
                category={client.category}
                logoUrl={client.logoUrl}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/clients"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy hover:text-brand-cyan transition-colors"
            >
              <span>View Full Client Portfolio & Industries Served</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FAQ PREVIEW */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-navy mb-2">
              Got Questions?
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {FAQS_DATA.slice(0, 4).map((faq, index) => (
              <div key={index} className="bg-white border border-slate-200 p-6 shadow-sm">
                <h4 className="font-bold text-slate-900 text-sm mb-2">{faq.question}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy hover:text-brand-cyan transition-colors"
            >
              <span>View All Frequently Asked Questions & Answers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CONSULTATION CTA */}
      <section className="bg-brand-navy text-white py-16 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            Ready to Streamline Your Audit, Tax & Financial Operations?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Speak directly with our chartered accountants in Abuja. We will review your organization’s reporting needs and propose a compliant, value-driven strategy.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-cyan text-brand-navy font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-lg"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a
              href={`tel:${FIRM_INFO.phoneE164}`}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border border-white/30 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
            >
              <span>Call: {FIRM_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
