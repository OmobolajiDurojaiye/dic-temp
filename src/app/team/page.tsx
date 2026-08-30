import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  ArrowRight,
  Linkedin
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TickMark from "@/components/TickMark";
import TeamAvatar from "@/components/TeamAvatar";
import { FIRM_INFO, TEAM_DATA } from "@/data/firmData";

export const metadata: Metadata = {
  title: "Our Team & Key Drivers | Chartered Accountants Abuja",
  description:
    "Meet the leadership team and partners of Daniel Isibor & Co (Chartered Accountants) in Abuja, Nigeria. Qualified professionals with ICAN, CITN, CIBN, and ACFE credentials.",
  alternates: {
    canonical: "/team",
  },
  openGraph: {
    title: "Our Team | Daniel Isibor & Co (Chartered Accountants)",
    description:
      "Leadership team and partners at Daniel Isibor & Co in Abuja, Nigeria. Over 15 years of audit, tax, and risk management experience.",
    url: `${FIRM_INFO.siteUrl}/team`,
  }
};

export default function TeamPage() {
  return (
    <div className="flex flex-col bg-[#F6F2E9]">
      <Breadcrumbs items={[{ name: "Our Team", url: "/team" }]} />

      {/* Page Header - Ink Navy */}
      <section className="bg-[#101F38] text-white py-14 lg:py-20 border-b border-[#B08D3E]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-[#B08D3E]/40 text-[#B08D3E] text-[11px] font-mono font-bold uppercase tracking-wider">
              <TickMark variant="rust" size="sm" />
              <span>Key Drivers & Leadership</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Meet Our Executive Leadership
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              Our key drivers possess over fifteen years of accounting, audit, tax, and risk management experience. This depth of expertise gives our firm an edge in delivering optimal results for clients.
            </p>
          </div>
        </div>
      </section>

      {/* Answer-first summary for GEO */}
      <section className="py-8 bg-[#F6F2E9] border-b border-[#5B6B7F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 bg-white border-l-4 border-[#B08D3E] max-w-4xl brass-corner-card">
            <p className="text-sm text-[#101F38] leading-relaxed font-medium font-sans">
              The leadership of <strong>Daniel Isibor & Co (Chartered Accountants)</strong> in <strong>Abuja, Nigeria</strong> is headed by Principal Partner <strong>Daniel Isibor (ACA, ACTI, MCIB)</strong>, Senior Partner <strong>Rukayat Hassan-Daniel (ACA, ACTI)</strong>, and Tax Partner <strong>Chijioke Agbedo (ACA, CISA, ACFE)</strong>, supported by senior compliance and audit managers.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-16 bg-white border-b border-[#5B6B7F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_DATA.map((member, index) => (
              <div
                key={member.slug}
                className="brass-corner-card p-8 flex flex-col justify-between hover:border-[#B08D3E] transition-all group"
              >
                <div>
                  {/* Photo or Interim Brass Monogram Badge */}
                  <div className="flex items-center gap-4 mb-6">
                    <TeamAvatar
                      name={member.name}
                      photoUrl={member.photoUrl}
                      size="lg"
                    />
                    <div>
                      <span className="text-[10px] font-mono text-[#5B6B7F] uppercase tracking-widest block">
                        PARTNER 0{index + 1}
                      </span>
                      <h3 className="font-serif font-bold text-[#101F38] text-base leading-snug group-hover:text-[#B08D3E] transition-colors mt-0.5">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#B08D3E] mt-0.5">{member.role}</p>
                      <div className="flex items-center gap-1.5 mt-1 font-mono text-[10px] text-[#5B6B7F]">
                        <TickMark variant="rust" size="sm" />
                        <span>{member.credentials}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#5B6B7F] font-sans leading-relaxed mb-6">
                    {member.shortBio}
                  </p>

                  {/* Specialties */}
                  <div className="mb-6">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#5B6B7F] mb-2">
                      Core Specialties:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {member.specialties.slice(0, 3).map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] font-mono px-2 py-0.5 bg-[#F6F2E9] text-[#101F38] border border-[#5B6B7F]/15 font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#5B6B7F]/15 flex items-center justify-between">
                  <Link
                    href={`/team/${member.slug}`}
                    className="font-mono text-xs font-bold text-[#101F38] group-hover:text-[#B08D3E] inline-flex items-center gap-1 uppercase tracking-wider"
                  >
                    <span>Full Profile & Bio</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#5B6B7F] hover:text-[#B08D3E] p-1 transition-colors"
                      aria-label={`${member.name} LinkedIn Profile`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
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
            Engage Our Experienced Chartered Partners
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-sans">
            Reach out directly to engage Daniel Isibor & Co for your audit, tax management, or accounting advisory needs.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#B08D3E] text-[#101F38] font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-md"
            >
              <span>Schedule a Meeting</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
