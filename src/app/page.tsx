import React from "react";
import Link from "next/link";
import {
  ArrowRight
} from "lucide-react";
import { FIRM_INFO, SERVICES_DATA, TEAM_DATA, CLIENTS_DATA, FAQS_DATA } from "@/data/firmData";
import ClientLogo from "@/components/ClientLogo";
import TeamAvatar from "@/components/TeamAvatar";
import CellTable, { CellRow } from "@/components/CellTable";

export default function HomePage() {
  const principalPartner = TEAM_DATA[0];

  const heroStats = [
    { label: "Practice Experience", value: "15+", subvalue: "Years Active" },
    { label: "Statutory Standards", value: "100%", subvalue: "IFRS & CAMA" },
    { label: "Partner Credentials", value: "ICAN·CITN", subvalue: "Certified" }
  ];

  const accreditationCells = [
    { label: "Regulatory Body", value: "FRC Nigeria", subvalue: "Registered Auditor" },
    { label: "Public Sector", value: "Auditor General", subvalue: "Of The Federation" },
    { label: "Chartered Licenses", value: "ICAN & CITN", subvalue: "Licensed Practice" }
  ];

  return (
    <div className="flex flex-col bg-[#F4F8FB]">
      {/* 1. HERO SECTION - Deep Navy */}
      <section className="bg-[#0B1E3D] text-white py-16 lg:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-[#3B9FE0]/40 text-[#3B9FE0] text-[11px] font-mono font-bold tracking-wider uppercase rounded-[4px]">
                <span>FRC & Auditor General Registered Audit Practice</span>
              </div>

              <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] text-white">
                Statutory Audit, Corporate Tax & Financial Advisory in Nigeria
              </h1>

              {/* Answer-first GEO statement */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-2xl">
                <strong className="text-white font-semibold">Daniel Isibor & Co (Chartered Accountants)</strong> is an accredited professional audit and accounting practice based in <strong className="text-white font-semibold">Abuja, Nigeria</strong>. We deliver IFRS-compliant external audits, corporate tax planning, financial reporting, and accounting software consultancy for enterprises, SMEs, NGOs, and public institutions.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-[#3B9FE0] text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-[#0B1E3D] transition-all rounded-[4px]"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent border border-white/25 text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all rounded-[4px]"
                >
                  Explore Our 6 Services
                </Link>
              </div>

              {/* Stats Table Cell Signature */}
              <div className="pt-4">
                <CellTable items={heroStats} columns={3} dark={true} />
              </div>
            </div>

            {/* Right Hero Panel: Flat Square Panel in Ink Blue */}
            <div className="lg:col-span-5">
              <div className="bg-[#13294B] border border-white/20 p-6 sm:p-8 rounded-[4px] shadow-sm">
                <div className="flex items-center gap-4 mb-5">
                  <TeamAvatar
                    name={principalPartner.name}
                    photoUrl={principalPartner.photoUrl}
                    size="lg"
                  />
                  <div>
                    <span className="font-mono text-[10px] font-bold text-[#3B9FE0] uppercase tracking-wider block">
                      Principal Partner
                    </span>
                    <h2 className="font-sans font-black text-white text-lg leading-snug mt-0.5">
                      {principalPartner.name}
                    </h2>
                    <p className="text-[11px] font-mono text-slate-300 mt-0.5">
                      {principalPartner.credentials}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 font-sans leading-relaxed mb-5">
                  {principalPartner.shortBio}
                </p>

                <div className="space-y-1 mb-5 border border-white/10 rounded-[4px] bg-[#0B1E3D]/50 overflow-hidden">
                  <CellRow label="Regulatory Standing" value="FRC Registered" dark={true} />
                  <CellRow label="Qualifications" value="ICAN • CITN • CIBN" dark={true} />
                  <CellRow label="Alma Mater" value="Ahmadu Bello Univ." dark={true} />
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={`/team/${principalPartner.slug}`}
                    className="font-mono text-xs font-bold text-[#3B9FE0] hover:underline inline-flex items-center gap-1 uppercase tracking-wider"
                  >
                    <span>Read Executive Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ACCREDITATION CELL TABLE BAR */}
      <section className="bg-[#0B1E3D] py-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CellTable items={accreditationCells} columns={3} dark={true} />
        </div>
      </section>

      {/* 3. CORE SERVICES - Equal 3-Up Grid */}
      <section className="py-16 lg:py-24 bg-[#F4F8FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#3B9FE0] mb-2 block">
              Practice Portfolio
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-black text-[#0B1E3D] tracking-tight">
              Audit, Tax & Financial Advisory Services
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#5C7089] font-sans">
              Each engagement is delivered by licensed chartered accountants adhering strictly to Nigerian statutory requirements and International Financial Reporting Standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service, index) => (
              <div
                key={service.slug}
                className="flat-panel p-6 sm:p-7 flex flex-col justify-between hover:border-[#3B9FE0] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#5C7089]/15">
                    <span className="font-mono text-xs font-bold text-[#3B9FE0]">
                      0{index + 1}.
                    </span>
                    <span className="text-[10px] font-mono text-[#5C7089] uppercase tracking-widest">
                      SERVICE
                    </span>
                  </div>

                  <h3 className="font-sans font-black text-lg text-[#0B1E3D] mb-3">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#5C7089] font-sans leading-relaxed mb-6">
                    {service.shortSummary}
                  </p>

                  <div className="space-y-1 mb-6 border border-[#5C7089]/20 rounded-[4px] bg-[#F4F8FB]">
                    <CellRow label="Framework" value="IFRS / CAMA 2020" />
                    <CellRow label="Coverage" value="Abuja & Nationwide" />
                  </div>
                </div>

                <div className="pt-4 border-t border-[#5C7089]/15 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="font-mono text-xs font-bold text-[#0B1E3D] hover:text-[#3B9FE0] inline-flex items-center gap-1.5 uppercase tracking-wider"
                  >
                    <span>View Service Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-[#0B1E3D] text-white border border-[#3B9FE0] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#3B9FE0] transition-all rounded-[4px]"
            >
              <span>Explore Complete Services Directory</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. ABOUT & VALUE PROPOSITION - Ink Blue Section */}
      <section className="py-16 lg:py-20 bg-[#13294B] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#3B9FE0]">
                About Daniel Isibor & Co
              </span>
              <h2 className="font-sans text-2xl sm:text-3xl font-black tracking-tight leading-snug text-white">
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
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#3B9FE0] hover:text-white transition-colors"
                >
                  <span>Learn More About Our Mission, Values & Strengths</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Core Values Cell Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-[#0B1E3D] border border-white/15 rounded-[4px]">
                <div className="text-[#3B9FE0] font-mono text-xs font-bold mb-1.5">
                  01. Integrity & Ethics
                </div>
                <p className="text-xs text-slate-300 font-sans">Uncompromising adherence to professional ethics and objectivity in all audit engagements.</p>
              </div>
              <div className="p-5 bg-[#0B1E3D] border border-white/15 rounded-[4px]">
                <div className="text-[#3B9FE0] font-mono text-xs font-bold mb-1.5">
                  02. Accuracy & Diligence
                </div>
                <p className="text-xs text-slate-300 font-sans">Meticulous verification under IFRS and Nigerian statutory reporting frameworks.</p>
              </div>
              <div className="p-5 bg-[#0B1E3D] border border-white/15 rounded-[4px]">
                <div className="text-[#3B9FE0] font-mono text-xs font-bold mb-1.5">
                  03. Accountability
                </div>
                <p className="text-xs text-slate-300 font-sans">Clear, transparent reporting and round-the-clock client communication channels.</p>
              </div>
              <div className="p-5 bg-[#0B1E3D] border border-white/15 rounded-[4px]">
                <div className="text-[#3B9FE0] font-mono text-xs font-bold mb-1.5">
                  04. Systems & Technology
                </div>
                <p className="text-xs text-slate-300 font-sans">Deploying leading accounting systems like QuickBooks, Sage, and ERP for streamlined operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TEAM SPOTLIGHT - Equal Grid */}
      <section className="py-16 lg:py-24 bg-[#F4F8FB] border-t border-[#5C7089]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#3B9FE0] block mb-1">
                Executive Leadership
              </span>
              <h2 className="font-sans text-3xl font-black text-[#0B1E3D] tracking-tight">
                Meet Our Key Drivers
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#5C7089] font-sans max-w-xl">
                Our key drivers possess over fifteen years of accounting, audit, and tax experience, giving our firm the depth needed to accomplish desired results.
              </p>
            </div>
            <Link
              href="/team"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#0B1E3D] hover:text-[#3B9FE0] transition-colors"
            >
              <span>View All 5 Partners & Managers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_DATA.slice(0, 3).map((member) => (
              <div
                key={member.slug}
                className="flat-panel p-6 flex flex-col justify-between hover:border-[#3B9FE0] transition-colors"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <TeamAvatar
                      name={member.name}
                      photoUrl={member.photoUrl}
                      size="md"
                    />
                    <div>
                      <h3 className="font-sans font-bold text-[#0B1E3D] text-base leading-snug">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#3B9FE0] mt-0.5">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-[#5C7089] font-sans leading-relaxed mb-4">
                    {member.shortBio}
                  </p>

                  <div className="space-y-1 mb-4 border border-[#5C7089]/20 rounded-[4px] bg-[#F4F8FB]">
                    <CellRow label="Credentials" value={member.credentials} />
                  </div>
                </div>

                <div className="pt-3 border-t border-[#5C7089]/15 flex items-center justify-between">
                  <Link
                    href={`/team/${member.slug}`}
                    className="font-mono text-xs font-bold text-[#0B1E3D] hover:text-[#3B9FE0] inline-flex items-center gap-1 uppercase tracking-wider"
                  >
                    <span>Read Bio & Qualifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLIENTS & SECTORS PREVIEW */}
      <section className="py-16 bg-[#F4F8FB] border-t border-[#5C7089]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#3B9FE0] block mb-1">
              Social Proof
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl font-black text-[#0B1E3D] tracking-tight">
              Trusted by Organizations Across Nigeria
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#5C7089] font-sans">
              A track record of high-impact engagements spanning government agencies, financial institutions, corporate enterprises, and SMEs.
            </p>
          </div>

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
              className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#0B1E3D] hover:text-[#3B9FE0] transition-colors"
            >
              <span>View Full Client Portfolio & Industries Served</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FAQ PREVIEW */}
      <section className="py-16 bg-white border-t border-[#5C7089]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#3B9FE0] block mb-1">
              Guidance & FAQ
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl font-black text-[#0B1E3D] tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS_DATA.slice(0, 4).map((faq, index) => (
              <div key={index} className="flat-panel p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-[#3B9FE0]">0{index + 1}.</span>
                  <h3 className="font-sans font-bold text-[#0B1E3D] text-base">{faq.question}</h3>
                </div>
                <p className="text-xs text-[#5C7089] font-sans leading-relaxed pl-6">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#0B1E3D] hover:text-[#3B9FE0] transition-colors"
            >
              <span>View All Frequently Asked Questions & Answers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CONSULTATION CTA - Deep Navy */}
      <section className="bg-[#0B1E3D] text-white py-16 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
            Ready to Verify, Reconcile & Streamline Your Financial Operations?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
            Speak directly with our certified chartered accountants in Abuja. We will review your organization’s reporting needs and propose a compliant, value-driven strategy.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#3B9FE0] text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-[#0B1E3D] transition-all shadow-md rounded-[4px]"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a
              href={`tel:${FIRM_INFO.phoneE164}`}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border border-white/30 text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all rounded-[4px]"
            >
              <span>Call: {FIRM_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
