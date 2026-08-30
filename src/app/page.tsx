import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  FileSearch,
  Calculator,
  Briefcase,
  Info,
  FileText,
  ArrowRight,
  Award,
  Building2,
  ChevronRight
} from "lucide-react";
import { FIRM_INFO, SERVICES_DATA, TEAM_DATA, CLIENTS_DATA, FAQS_DATA } from "@/data/firmData";
import ClientLogo from "@/components/ClientLogo";
import TickMark from "@/components/TickMark";
import TeamAvatar from "@/components/TeamAvatar";

export default function HomePage() {
  const principalPartner = TEAM_DATA[0];

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
      {/* 1. HERO SECTION - Ink Navy */}
      <section className="relative bg-[#101F38] text-white overflow-hidden py-16 lg:py-24 border-b border-[#B08D3E]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-[#B08D3E]/40 text-[#B08D3E] text-[11px] font-mono font-bold tracking-wider uppercase">
                <TickMark variant="rust" size="sm" />
                <span>FRC & Auditor General Registered Audit Firm</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
                Statutory Audit, Corporate Tax & Financial Advisory in Nigeria
              </h1>

              {/* Answer-first GEO statement */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans font-normal max-w-2xl">
                <strong className="text-white font-semibold">Daniel Isibor & Co (Chartered Accountants)</strong> is an accredited professional audit and accounting practice based in <strong className="text-white font-semibold">Abuja, Nigeria</strong>. We deliver IFRS-compliant external audits, corporate tax planning, financial reporting, and accounting software consultancy for enterprises, SMEs, NGOs, and public institutions.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-[#B08D3E] text-[#101F38] font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-sm"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent border border-[#B08D3E]/50 text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
                >
                  Explore Our 6 Services
                </Link>
              </div>

              {/* Verified Stats Row with Hand-Inked Rust Tick Marks */}
              <div className="pt-6 border-t border-[#5B6B7F]/25 grid grid-cols-3 gap-4">
                <div className="flex items-start gap-2.5">
                  <TickMark variant="rust" size="md" animated={true} />
                  <div>
                    <div className="text-2xl font-mono font-bold text-white tracking-tight">15+</div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                      Years In Practice
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <TickMark variant="rust" size="md" animated={true} />
                  <div>
                    <div className="text-2xl font-mono font-bold text-white tracking-tight">100%</div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                      IFRS & CAMA Compliant
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <TickMark variant="rust" size="md" animated={true} />
                  <div>
                    <div className="text-2xl font-mono font-bold text-white tracking-tight">ICAN·CITN</div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                      Certified Partners
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero Card: Principal Partner Spotlight */}
            <div className="lg:col-span-5">
              <div className="bg-[#0C172B] border border-[#B08D3E]/40 p-6 sm:p-8 rounded-none shadow-2xl relative brass-corner-card !bg-[#0C172B]">
                <div className="flex items-center gap-4 mb-5">
                  <TeamAvatar
                    name={principalPartner.name}
                    photoUrl={principalPartner.photoUrl}
                    size="lg"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <TickMark variant="rust" size="sm" />
                      <span className="text-[10px] font-mono text-[#B08D3E] font-bold uppercase tracking-widest">
                        Principal Partner
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-white leading-snug mt-0.5">
                      {principalPartner.name}
                    </h3>
                    <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                      {principalPartner.credentials}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-sans line-clamp-4">
                  {principalPartner.shortBio}
                </p>

                <div className="mt-5 pt-4 border-t border-[#5B6B7F]/30 flex items-center justify-between">
                  <Link
                    href={`/team/${principalPartner.slug}`}
                    className="text-xs font-mono font-bold text-[#B08D3E] hover:underline inline-flex items-center gap-1 uppercase tracking-wider"
                  >
                    <span>Read Partner Bio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    REF: DIC-EXEC-01
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REGULATORY ACCREDITATIONS TICKER */}
      <section className="bg-[#F6F2E9] py-5 border-b border-[#5B6B7F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#5B6B7F]">
              Statutory Reg. & Accreditations:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 font-mono text-[11px] text-[#101F38]">
              <span className="bg-white px-3 py-1.5 border border-[#B08D3E]/30 flex items-center gap-1.5">
                <TickMark variant="rust" size="sm" />
                <span>Financial Reporting Council (FRC)</span>
              </span>
              <span className="bg-white px-3 py-1.5 border border-[#B08D3E]/30 flex items-center gap-1.5">
                <TickMark variant="rust" size="sm" />
                <span>Auditor General of Federation</span>
              </span>
              <span className="bg-white px-3 py-1.5 border border-[#B08D3E]/30 flex items-center gap-1.5">
                <TickMark variant="rust" size="sm" />
                <span>ICAN Licensed</span>
              </span>
              <span className="bg-white px-3 py-1.5 border border-[#B08D3E]/30 flex items-center gap-1.5">
                <TickMark variant="rust" size="sm" />
                <span>CITN Certified</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES - Parchment background with Flat Brass-Bordered Cards */}
      <section className="py-16 lg:py-24 bg-[#F6F2E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-widest text-[#B08D3E] mb-2">
              <TickMark variant="brass" size="sm" />
              <span>Practice Areas</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-[#101F38] tracking-tight">
              Audit, Tax & Financial Advisory Services
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#5B6B7F] font-sans">
              Each engagement is delivered by licensed chartered accountants adhering strictly to Nigerian statutory requirements and International Financial Reporting Standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service, index) => (
              <div
                key={service.slug}
                className="brass-corner-card p-8 flex flex-col justify-between hover:border-[#B08D3E] transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#5B6B7F]/15">
                    <span className="font-mono text-xs font-bold text-[#B08D3E]">
                      0{index + 1}.
                    </span>
                    <span className="text-[10px] font-mono text-[#5B6B7F] uppercase tracking-widest">
                      SERVICE
                    </span>
                  </div>

                  <div className="w-12 h-12 bg-[#F6F2E9] border border-[#B08D3E]/30 flex items-center justify-center mb-5">
                    {getServiceIcon(service.slug)}
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#101F38] group-hover:text-[#B08D3E] transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#5B6B7F] font-sans leading-relaxed mb-6">
                    {service.shortSummary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#5B6B7F]/15 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="font-mono text-xs font-bold text-[#101F38] group-hover:text-[#B08D3E] inline-flex items-center gap-1.5 uppercase tracking-wider"
                  >
                    <span>View Service Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-[#101F38] text-white border border-[#B08D3E] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#B08D3E] hover:text-[#101F38] transition-all"
            >
              <span>Explore Complete Services Directory</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. ABOUT & VALUE PROPOSITION - Dense Ink Navy Section */}
      <section className="py-16 lg:py-20 bg-[#101F38] text-white border-t border-[#B08D3E]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#B08D3E]">
                About Daniel Isibor & Co
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight leading-snug text-white">
                Dedicated Partners in Financial Integrity & Operational Growth
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                At Daniel Isibor & Co (Chartered Accountants), we provide auditing, tax, accounting, financial management, training, consultancy, system optimization, due diligence, feasibility studies, financial forecast, enterprise risk management, fraud prevention and detection, and debt recovery services.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                DIC is committed to providing our clients with an independent assessment of their operations and organizational structure. We take time to understand how they measure performance and bring a hands-on approach that builds lasting integrity and trust.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#B08D3E] hover:text-white transition-colors"
                >
                  <span>Learn More About Our Mission, Values & Strengths</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Core Values Callout Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-[#0C172B] border border-[#B08D3E]/30">
                <div className="flex items-center gap-2 text-[#B08D3E] font-mono text-xs font-bold mb-1.5">
                  <TickMark variant="rust" size="sm" />
                  <span>Integrity & Ethics</span>
                </div>
                <p className="text-xs text-slate-300 font-sans">Uncompromising adherence to professional ethics and objectivity in all audit engagements.</p>
              </div>
              <div className="p-5 bg-[#0C172B] border border-[#B08D3E]/30">
                <div className="flex items-center gap-2 text-[#B08D3E] font-mono text-xs font-bold mb-1.5">
                  <TickMark variant="rust" size="sm" />
                  <span>Accuracy & Diligence</span>
                </div>
                <p className="text-xs text-slate-300 font-sans">Meticulous verification under IFRS and Nigerian statutory reporting frameworks.</p>
              </div>
              <div className="p-5 bg-[#0C172B] border border-[#B08D3E]/30">
                <div className="flex items-center gap-2 text-[#B08D3E] font-mono text-xs font-bold mb-1.5">
                  <TickMark variant="rust" size="sm" />
                  <span>Accountability</span>
                </div>
                <p className="text-xs text-slate-300 font-sans">Clear, transparent reporting and round-the-clock client communication channels.</p>
              </div>
              <div className="p-5 bg-[#0C172B] border border-[#B08D3E]/30">
                <div className="flex items-center gap-2 text-[#B08D3E] font-mono text-xs font-bold mb-1.5">
                  <TickMark variant="rust" size="sm" />
                  <span>Systems & Technology</span>
                </div>
                <p className="text-xs text-slate-300 font-sans">Deploying leading accounting systems like QuickBooks, Sage, and ERP for streamlined operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. KEY DRIVERS / TEAM SPOTLIGHT - Parchment */}
      <section className="py-16 lg:py-24 bg-[#F6F2E9] border-t border-[#5B6B7F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-widest text-[#B08D3E] mb-2">
                <TickMark variant="brass" size="sm" />
                <span>Executive Leadership</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-[#101F38] tracking-tight">
                Meet Our Key Drivers
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#5B6B7F] font-sans max-w-xl">
                Our key drivers possess over fifteen years of accounting, audit, and tax experience, giving our firm the depth needed to accomplish desired results.
              </p>
            </div>
            <Link
              href="/team"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#101F38] hover:text-[#B08D3E] transition-colors"
            >
              <span>View All 5 Partners & Managers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_DATA.slice(0, 3).map((member) => (
              <div
                key={member.slug}
                className="brass-corner-card p-6 flex flex-col justify-between hover:border-[#B08D3E] transition-all"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <TeamAvatar
                      name={member.name}
                      photoUrl={member.photoUrl}
                      size="md"
                    />
                    <div>
                      <h3 className="font-serif font-bold text-[#101F38] text-base leading-snug">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#B08D3E] mt-0.5">
                        {member.role}
                      </p>
                      <div className="flex items-center gap-1 mt-1 font-mono text-[10px] text-[#5B6B7F]">
                        <TickMark variant="rust" size="sm" />
                        <span>{member.credentials}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#5B6B7F] font-sans leading-relaxed line-clamp-3 mb-4">
                    {member.shortBio}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#5B6B7F]/15 flex items-center justify-between">
                  <Link
                    href={`/team/${member.slug}`}
                    className="font-mono text-xs font-bold text-[#101F38] hover:text-[#B08D3E] inline-flex items-center gap-1 uppercase tracking-wider"
                  >
                    <span>Read Bio & Qualifications</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLIENTS & SECTORS PREVIEW */}
      <section className="py-16 bg-[#F6F2E9] border-t border-[#5B6B7F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-widest text-[#B08D3E] mb-2">
              <TickMark variant="brass" size="sm" />
              <span>Proven Engagements</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#101F38] tracking-tight">
              Trusted by Organizations Across Nigeria
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#5B6B7F] font-sans">
              A track record of high-impact engagements spanning government agencies, financial institutions, corporate enterprises, and SMEs.
            </p>
          </div>

          {/* Adaptive Client Logo Grid with Brass Corner Marks */}
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
              className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#101F38] hover:text-[#B08D3E] transition-colors"
            >
              <span>View Full Client Portfolio & Industries Served</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FAQ PREVIEW */}
      <section className="py-16 bg-white border-t border-[#5B6B7F]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-widest text-[#B08D3E] mb-2">
              <TickMark variant="brass" size="sm" />
              <span>Guidance & FAQ</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#101F38] tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS_DATA.slice(0, 4).map((faq, index) => (
              <div key={index} className="brass-corner-card p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-[#B08D3E]">0{index + 1}.</span>
                  <h3 className="font-serif font-bold text-[#101F38] text-base">{faq.question}</h3>
                </div>
                <p className="text-xs text-[#5B6B7F] font-sans leading-relaxed pl-6">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#101F38] hover:text-[#B08D3E] transition-colors"
            >
              <span>View All Frequently Asked Questions & Answers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CONSULTATION CTA - Dense Ink Navy */}
      <section className="bg-[#101F38] text-white py-16 border-t border-[#B08D3E]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Ready to Verify, Reconcile & Streamline Your Financial Operations?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
            Speak directly with our certified chartered accountants in Abuja. We will review your organization’s reporting needs and propose a compliant, value-driven strategy.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#B08D3E] text-[#101F38] font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-lg"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a
              href={`tel:${FIRM_INFO.phoneE164}`}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border border-[#B08D3E]/60 text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
            >
              <span>Call: {FIRM_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
