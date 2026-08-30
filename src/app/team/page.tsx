import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Linkedin
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TeamAvatar from "@/components/TeamAvatar";
import { CellRow } from "@/components/CellTable";
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
    <div className="flex flex-col bg-[#F4F8FB]">
      <Breadcrumbs items={[{ name: "Our Team", url: "/team" }]} />

      {/* Page Header - Deep Navy */}
      <section className="bg-[#0B1E3D] text-white py-14 lg:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-[#3B9FE0]/40 text-[#3B9FE0] text-[11px] font-mono font-bold uppercase tracking-wider rounded-[4px]">
              <span>Key Drivers & Leadership</span>
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Meet Our Executive Leadership
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              Our key drivers possess over fifteen years of accounting, audit, tax, and risk management experience. This depth of expertise gives our firm an edge in delivering optimal results for clients.
            </p>
          </div>
        </div>
      </section>

      {/* Answer-first summary for GEO */}
      <section className="py-8 bg-[#F4F8FB] border-b border-[#5C7089]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 bg-white border-l-4 border-[#3B9FE0] max-w-4xl flat-panel">
            <p className="text-sm text-[#0B1E3D] leading-relaxed font-medium font-sans">
              The leadership of <strong>Daniel Isibor & Co (Chartered Accountants)</strong> in <strong>Abuja, Nigeria</strong> is headed by Principal Partner <strong>Daniel Isibor (ACA, ACTI, MCIB)</strong>, Senior Partner <strong>Rukayat Hassan-Daniel (ACA, ACTI)</strong>, and Tax Partner <strong>Chijioke Agbedo (ACA, CISA, ACFE)</strong>, supported by senior compliance and audit managers.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Strict Equal Grid */}
      <section className="py-16 bg-white border-b border-[#5C7089]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_DATA.map((member, index) => (
              <div
                key={member.slug}
                className="flat-panel p-6 sm:p-7 flex flex-col justify-between hover:border-[#3B9FE0] transition-colors"
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <TeamAvatar
                      name={member.name}
                      photoUrl={member.photoUrl}
                      size="lg"
                    />
                    <div>
                      <span className="text-[10px] font-mono text-[#5C7089] uppercase tracking-widest block">
                        PARTNER 0{index + 1}
                      </span>
                      <h3 className="font-sans font-black text-[#0B1E3D] text-base leading-snug mt-0.5">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#3B9FE0] mt-0.5">{member.role}</p>
                    </div>
                  </div>

                  <p className="text-xs text-[#5C7089] font-sans leading-relaxed mb-4">
                    {member.shortBio}
                  </p>

                  <div className="space-y-1 mb-5 border border-[#5C7089]/20 rounded-[4px] bg-[#F4F8FB]">
                    <CellRow label="Credentials" value={member.credentials} />
                  </div>

                  {/* Specialties */}
                  <div className="mb-5">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#5C7089] mb-2">
                      Core Specialties:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {member.specialties.slice(0, 3).map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] font-mono px-2 py-0.5 bg-[#F4F8FB] text-[#0B1E3D] border border-[#5C7089]/15 font-medium rounded-[4px]"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#5C7089]/15 flex items-center justify-between">
                  <Link
                    href={`/team/${member.slug}`}
                    className="font-mono text-xs font-bold text-[#0B1E3D] hover:text-[#3B9FE0] inline-flex items-center gap-1 uppercase tracking-wider"
                  >
                    <span>Full Profile & Bio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#5C7089] hover:text-[#3B9FE0] p-1 transition-colors"
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
      <section className="bg-[#0B1E3D] text-white py-14 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="font-sans text-2xl sm:text-3xl font-black tracking-tight text-white">
            Engage Our Experienced Chartered Partners
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-sans">
            Reach out directly to engage Daniel Isibor & Co for your audit, tax management, or accounting advisory needs.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#3B9FE0] text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-[#0B1E3D] transition-all shadow-md rounded-[4px]"
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
