import React from "react";
import Link from "next/link";
import {
  ArrowRight
} from "lucide-react";
import { FIRM_INFO, SERVICES_DATA, TEAM_DATA, CLIENTS_DATA, FAQS_DATA } from "@/data/firmData";
import ClientLogo from "@/components/ClientLogo";
import TickMark from "@/components/TickMark";
import TeamAvatar from "@/components/TeamAvatar";
import Workpaper from "@/components/Workpaper";
import MembershipCard from "@/components/MembershipCard";
import Seal from "@/components/Seal";
import LedgerGraphic from "@/components/LedgerGraphic";

export default function HomePage() {
  const principalPartner = TEAM_DATA[0];
  const flagshipService = SERVICES_DATA[0];
  const subServices = SERVICES_DATA.slice(1, 3);
  const remainingServices = SERVICES_DATA.slice(3);

  return (
    <div className="flex flex-col bg-[#F6F2E9] overflow-x-clip">
      {/* 1. HERO SECTION - Layered Asymmetric Depth */}
      <section className="relative bg-[#101F38] text-white overflow-visible pt-16 pb-24 lg:pt-24 lg:pb-32 border-b border-[#B08D3E]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-[#B08D3E]/40 text-[#B08D3E] text-[11px] font-mono font-bold tracking-wider uppercase rounded-md">
                <TickMark variant="rust" size="sm" />
                <span>FRC & Auditor General Registered Audit Practice</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] text-white">
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
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-[#B08D3E] text-[#101F38] font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-md rounded-md"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent border border-[#B08D3E]/60 text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all rounded-md"
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

            {/* Right Hero Card: Overlapping Rotated Workpaper Object */}
            <div className="lg:col-span-5 relative lg:-ml-6 z-20">
              <Workpaper rotation={-3} refCode="WP-PARTNER-01" className="max-w-md mx-auto">
                <div className="flex items-center gap-4 mb-4">
                  <TeamAvatar
                    name={principalPartner.name}
                    photoUrl={principalPartner.photoUrl}
                    size="lg"
                  />
                  <div>
                    <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold text-[#B08D3E] uppercase tracking-wider">
                      <TickMark variant="rust" size="sm" />
                      <span>Principal Partner</span>
                    </div>
                    <h3 className="font-serif font-bold text-[#101F38] text-lg leading-snug mt-0.5">
                      {principalPartner.name}
                    </h3>
                    <p className="text-[11px] font-mono text-[#5B6B7F] mt-0.5">
                      {principalPartner.credentials}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#5B6B7F] font-sans leading-relaxed line-clamp-4 mb-4">
                  {principalPartner.shortBio}
                </p>

                <div className="pt-3 border-t border-[#5B6B7F]/15 flex items-center justify-between">
                  <Link
                    href={`/team/${principalPartner.slug}`}
                    className="font-mono text-xs font-bold text-[#101F38] hover:text-[#B08D3E] inline-flex items-center gap-1 uppercase tracking-wider"
                  >
                    <span>Read Executive Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="font-mono text-[9px] text-[#5B6B7F]/60 uppercase tracking-widest">
                    VERIFIED // ICAN
                  </span>
                </div>
              </Workpaper>
            </div>
          </div>
        </div>

        {/* 2. OVERLAPPING PHYSICAL SEALS ON SECTION BOUNDARY */}
        <div className="absolute -bottom-14 left-0 right-0 z-30 pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center lg:justify-start gap-4 sm:gap-8 flex-wrap pointer-events-auto">
            <Seal
              title="FRC NIGERIA"
              subtitle="REGISTERED AUDIT"
              code="REG # FRC/2026"
              rotation={-4}
              size="md"
            />
            <Seal
              title="AUDITOR GENERAL"
              subtitle="OF THE FEDERATION"
              code="PUBLIC SECTOR"
              rotation={3}
              size="md"
            />
            <Seal
              title="ICAN & CITN"
              subtitle="CHARTERED FELLOWS"
              code="TAX & AUDIT"
              rotation={-2}
              size="md"
            />
          </div>
        </div>
      </section>

      {/* Spacing buffer for overlapping seals */}
      <div className="h-16 lg:h-20 bg-[#F6F2E9]" />

      {/* 3. ASYMMETRIC SERVICES SECTION */}
      <section className="py-16 lg:py-24 bg-[#F6F2E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-widest text-[#B08D3E] mb-2">
              <TickMark variant="brass" size="sm" />
              <span>Practice Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#101F38] tracking-tight">
              Audit, Tax & Financial Advisory Services
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#5B6B7F] font-sans">
              Each engagement is delivered by licensed chartered accountants adhering strictly to Nigerian statutory requirements and International Financial Reporting Standards.
            </p>
          </div>

          {/* Asymmetric Service Layout: 1 Featured Large Workpaper + 2 Staggered Beside It */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            {/* Featured Flagship Service Workpaper */}
            <div className="lg:col-span-7">
              <Workpaper
                rotation={-2}
                refCode="WP-FLAGSHIP-01"
                className="h-full flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#B08D3E] uppercase tracking-wider">
                    <TickMark variant="rust" size="sm" />
                    <span>Flagship Practice Area</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#101F38]">
                    {flagshipService.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5B6B7F] font-sans leading-relaxed">
                    {flagshipService.answerFirst}
                  </p>

                  <div className="py-2">
                    <LedgerGraphic slug={flagshipService.slug} />
                  </div>
                </div>

                <div className="pt-6 border-t border-[#5B6B7F]/15 flex items-center justify-between">
                  <Link
                    href={`/services/${flagshipService.slug}`}
                    className="font-mono text-xs font-bold text-[#101F38] hover:text-[#B08D3E] inline-flex items-center gap-1.5 uppercase tracking-wider"
                  >
                    <span>Read Full Service Scope</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Workpaper>
            </div>

            {/* Staggered Sub-Services Beside It */}
            <div className="lg:col-span-5 space-y-6">
              {subServices.map((service, sIdx) => (
                <Workpaper
                  key={service.slug}
                  rotation={sIdx === 0 ? 3 : -1}
                  refCode={`WP-SERVICE-0${sIdx + 2}`}
                >
                  <h4 className="font-serif text-lg font-bold text-[#101F38] mb-2">
                    {service.title}
                  </h4>
                  <p className="text-xs text-[#5B6B7F] font-sans leading-relaxed mb-4">
                    {service.shortSummary}
                  </p>
                  <div className="pt-3 border-t border-[#5B6B7F]/15 flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      className="font-mono text-xs font-bold text-[#101F38] hover:text-[#B08D3E] inline-flex items-center gap-1 uppercase tracking-wider"
                    >
                      <span>Explore Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </Workpaper>
              ))}
            </div>
          </div>

          {/* Remaining 3 Services in Staggered Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {remainingServices.map((service, rIdx) => (
              <Workpaper
                key={service.slug}
                rotation={rIdx === 0 ? -2 : rIdx === 1 ? 2 : -1}
                refCode={`WP-SERVICE-0${rIdx + 4}`}
              >
                <h4 className="font-serif text-base font-bold text-[#101F38] mb-2">
                  {service.title}
                </h4>
                <p className="text-xs text-[#5B6B7F] font-sans leading-relaxed mb-4">
                  {service.shortSummary}
                </p>
                <div className="pt-3 border-t border-[#5B6B7F]/15 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="font-mono text-xs font-bold text-[#101F38] hover:text-[#B08D3E] inline-flex items-center gap-1 uppercase tracking-wider"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Workpaper>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-[#101F38] text-white border border-[#B08D3E] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#B08D3E] hover:text-[#101F38] transition-all rounded-md"
            >
              <span>Explore Complete Services Directory</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. ABOUT & VALUE PROPOSITION - Dense Ink Navy */}
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

            {/* Core Values Callout Grid with Rotated Workpaper Overlays */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Workpaper rotation={-2} dark={true} refCode="VAL-INTEGRITY">
                <div className="flex items-center gap-2 text-[#B08D3E] font-mono text-xs font-bold mb-1.5">
                  <TickMark variant="rust" size="sm" />
                  <span>Integrity & Ethics</span>
                </div>
                <p className="text-xs text-slate-300 font-sans">Uncompromising adherence to professional ethics and objectivity in all audit engagements.</p>
              </Workpaper>
              <Workpaper rotation={2} dark={true} refCode="VAL-ACCURACY">
                <div className="flex items-center gap-2 text-[#B08D3E] font-mono text-xs font-bold mb-1.5">
                  <TickMark variant="rust" size="sm" />
                  <span>Accuracy & Diligence</span>
                </div>
                <p className="text-xs text-slate-300 font-sans">Meticulous verification under IFRS and Nigerian statutory reporting frameworks.</p>
              </Workpaper>
              <Workpaper rotation={1} dark={true} refCode="VAL-ACCOUNTABLE">
                <div className="flex items-center gap-2 text-[#B08D3E] font-mono text-xs font-bold mb-1.5">
                  <TickMark variant="rust" size="sm" />
                  <span>Accountability</span>
                </div>
                <p className="text-xs text-slate-300 font-sans">Clear, transparent reporting and round-the-clock client communication channels.</p>
              </Workpaper>
              <Workpaper rotation={-1} dark={true} refCode="VAL-TECHNOLOGY">
                <div className="flex items-center gap-2 text-[#B08D3E] font-mono text-xs font-bold mb-1.5">
                  <TickMark variant="rust" size="sm" />
                  <span>Systems & Technology</span>
                </div>
                <p className="text-xs text-slate-300 font-sans">Deploying leading accounting systems like QuickBooks, Sage, and ERP for streamlined operations.</p>
              </Workpaper>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TEAM SPOTLIGHT - Fanned Membership Cards */}
      <section className="py-16 lg:py-24 bg-[#F6F2E9] border-t border-[#5B6B7F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-widest text-[#B08D3E] mb-2">
                <TickMark variant="brass" size="sm" />
                <span>Key Drivers & Leadership</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-[#101F38] tracking-tight">
                Accredited Chartered Partners
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#5B6B7F] font-sans max-w-xl">
                Physical professional credentials held by our principal drivers, with over 15 years of specialized audit and tax practice in Nigeria.
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

          {/* Fanned / Overlapping Membership Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {TEAM_DATA.slice(0, 3).map((member, idx) => (
              <MembershipCard
                key={member.slug}
                slug={member.slug}
                name={member.name}
                role={member.role}
                credentials={member.credentials}
                photoUrl={member.photoUrl}
                shortBio={member.shortBio}
                rotation={idx === 0 ? -3 : idx === 1 ? 2 : -2}
                memberNo={`FRC/2026/ICAN/00${idx + 1}`}
                specialties={member.specialties}
                linkedin={member.linkedin}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLIENTS & SECTORS PREVIEW */}
      <section className="py-16 bg-[#F6F2E9] border-t border-[#5B6B7F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
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

          {/* Adaptive Client Logo Grid with Physical Depth */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
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
              <Workpaper key={index} rotation={index % 2 === 0 ? -1 : 1} refCode={`FAQ-0${index + 1}`}>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-serif font-bold text-[#101F38] text-base">{faq.question}</h3>
                </div>
                <p className="text-xs text-[#5B6B7F] font-sans leading-relaxed">{faq.answer}</p>
              </Workpaper>
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
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#B08D3E] text-[#101F38] font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-lg rounded-md"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a
              href={`tel:${FIRM_INFO.phoneE164}`}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border border-[#B08D3E]/60 text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all rounded-md"
            >
              <span>Call: {FIRM_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
