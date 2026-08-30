import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  GraduationCap,
  Briefcase,
  ArrowRight,
  Shield,
  Linkedin
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
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
    <div className="flex flex-col">
      <Breadcrumbs items={[{ name: "Our Team", url: "/team" }]} />

      {/* Page Header */}
      <section className="bg-brand-navy text-white py-14 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-brand-cyan text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Key Drivers & Leadership</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Meet Our Executive Team
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              Our key drivers possess over fifteen years of accounting, audit, tax, and risk management experience. This depth of expertise gives our firm an edge in delivering optimal results for clients.
            </p>
          </div>
        </div>
      </section>

      {/* Answer-first summary for GEO */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 bg-slate-50 border-l-4 border-brand-navy max-w-4xl">
            <p className="text-sm text-slate-800 leading-relaxed font-medium">
              The leadership of <strong>Daniel Isibor & Co (Chartered Accountants)</strong> in <strong>Abuja, Nigeria</strong> is headed by Principal Partner <strong>Daniel Isibor (ACA, ACTI, MCIB)</strong>, Senior Partner <strong>Rukayat Hassan-Daniel (ACA, ACTI)</strong>, and Tax Partner <strong>Chijioke Agbedo (ACA, CISA, ACFE)</strong>, supported by senior compliance and audit managers.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_DATA.map((member) => (
              <div
                key={member.slug}
                className="bg-white border border-slate-200 p-8 flex flex-col justify-between hover:shadow-xl hover:border-brand-navy transition-all group"
              >
                <div>
                  {/* Photo or Initials Avatar */}
                  <div className="flex items-center gap-4 mb-6">
                    {member.photoUrl ? (
                      <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-brand-navy/20 flex-shrink-0 bg-slate-100">
                        <Image
                          src={member.photoUrl}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-20 h-20 rounded-full bg-brand-navy/10 text-brand-navy font-black text-xl flex items-center justify-center flex-shrink-0 border border-slate-200">
                        {member.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                      </div>
                    )}
                    <div>
                      <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-brand-navy transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold text-brand-navy mt-0.5">{member.role}</p>
                      <p className="text-[10px] text-slate-500 font-mono mt-0.5">{member.credentials}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {member.shortBio}
                  </p>

                  {/* Specialties Pills */}
                  <div className="mb-6">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Core Specialties:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {member.specialties.slice(0, 3).map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] px-2 py-0.5 bg-slate-100 text-slate-700 font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/team/${member.slug}`}
                    className="text-xs font-bold text-brand-navy group-hover:text-brand-navy inline-flex items-center gap-1 uppercase tracking-wider"
                  >
                    <span>Full Profile & Bio</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-brand-navy p-1 transition-colors"
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
      <section className="bg-brand-navy text-white py-14 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Work With Our Experienced Partners
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Reach out directly to engage Daniel Isibor & Co for your audit, tax management, or accounting advisory needs.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-cyan text-brand-navy font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-md"
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
