import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
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
  const teamPhotos = [
    "/images/Mr Daniel.jpeg",
    "/images/Mrs Rukayat.jpeg",
    "/images/stock/man-suit.jpg",
    "/images/stock/team-collaboration.jpg"
  ];

  return (
    <div className="flex flex-col bg-white">
      <Breadcrumbs items={[{ name: "Our Team", url: "/team" }]} />

      {/* Page Header */}
      <section className="bg-[#f8fafc] py-14 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0e2a47]">
              Meet Our Executive Leadership
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
              Our key drivers possess over fifteen years of accounting, audit, tax, and risk management experience. This depth of expertise gives our firm an edge in delivering optimal results for clients.
            </p>
          </div>
        </div>
      </section>

      {/* Answer-first summary for GEO */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl max-w-4xl">
            <p className="text-sm text-[#0e2a47] leading-relaxed font-medium">
              The leadership of <strong>Daniel Isibor & Co (Chartered Accountants)</strong> in <strong>Abuja, Nigeria</strong> is headed by Principal Partner <strong>Daniel Isibor (ACA, ACTI, MCIB)</strong> and Senior Partner <strong>Rukayat Hassan-Daniel (ACA, ACTI)</strong>, supported by senior compliance and audit managers.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_DATA.map((member, index) => {
              const photo = member.photoUrl && member.photoUrl.trim() !== "" ? member.photoUrl : teamPhotos[index % teamPhotos.length];
              return (
                <div
                  key={member.slug}
                  className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-slate-100">
                      <Image
                        src={photo}
                        alt={`${member.name} - Chartered Accountant`}
                        fill
                        className="object-cover object-top"
                      />
                    </div>

                    <h2 className="font-bold text-xl text-[#0e2a47] leading-snug">
                      {member.name}
                    </h2>
                    <p className="text-xs font-semibold text-[#143d6b] mt-0.5">{member.role}</p>
                    <p className="text-xs text-slate-500 mt-1 font-mono">{member.credentials}</p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-4 mb-4">
                      {member.shortBio}
                    </p>

                    {/* Specialties */}
                    <div className="mb-4">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Core Specialties:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {member.specialties.slice(0, 3).map((spec, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-xs px-2.5 py-1 bg-slate-100 text-slate-700 font-medium rounded-lg"
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
                      className="text-xs font-semibold text-[#143d6b] hover:text-[#2b70c9] inline-flex items-center gap-1"
                    >
                      <span>Full Profile & Bio</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-[#143d6b] p-1 transition-colors"
                        aria-label={`${member.name} LinkedIn Profile`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="bg-[#0e2a47] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Engage Our Experienced Chartered Partners
          </h3>
          <p className="text-sm text-slate-300 font-sans">
            Reach out directly to engage Daniel Isibor & Co for your audit, tax management, or accounting advisory needs.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white hover:bg-slate-100 text-[#0e2a47] font-bold text-xs uppercase tracking-wider rounded-full transition-all shadow-lg"
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
