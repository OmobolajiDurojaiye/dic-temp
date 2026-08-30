import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TickMark from "@/components/TickMark";
import MembershipCard from "@/components/MembershipCard";
import Seal from "@/components/Seal";
import Workpaper from "@/components/Workpaper";
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
    <div className="flex flex-col bg-[#F6F2E9] overflow-x-clip">
      <Breadcrumbs items={[{ name: "Our Team", url: "/team" }]} />

      {/* Page Header - Ink Navy */}
      <section className="relative bg-[#101F38] text-white py-14 lg:py-20 border-b border-[#B08D3E]/30 overflow-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-[#B08D3E]/40 text-[#B08D3E] text-[11px] font-mono font-bold uppercase tracking-wider rounded-md">
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

        {/* Overlapping Seals */}
        <div className="absolute -bottom-10 right-8 lg:right-24 z-20 hidden sm:block">
          <Seal
            title="ICAN LICENSED"
            subtitle="PRACTICING CHARTERED"
            code="REG # ACA/0194"
            rotation={4}
            size="sm"
          />
        </div>
      </section>

      {/* Answer-first summary for GEO */}
      <section className="py-10 bg-[#F6F2E9] border-b border-[#5B6B7F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Workpaper rotation={-1} refCode="WP-TEAM-GEO" className="max-w-4xl">
            <p className="text-sm text-[#101F38] leading-relaxed font-medium font-sans">
              The leadership of <strong>Daniel Isibor & Co (Chartered Accountants)</strong> in <strong>Abuja, Nigeria</strong> is headed by Principal Partner <strong>Daniel Isibor (ACA, ACTI, MCIB)</strong>, Senior Partner <strong>Rukayat Hassan-Daniel (ACA, ACTI)</strong>, and Tax Partner <strong>Chijioke Agbedo (ACA, CISA, ACFE)</strong>, supported by senior compliance and audit managers.
            </p>
          </Workpaper>
        </div>
      </section>

      {/* Fanned Membership Cards Grid */}
      <section className="py-16 bg-[#F6F2E9] border-b border-[#5B6B7F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#B08D3E] block mb-1">
              Professional Credentials
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#101F38]">
              Accredited Partners & Senior Practice Managers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
            {TEAM_DATA.map((member, index) => {
              const rotations = [-3, 2, -2, 3, -1];
              return (
                <MembershipCard
                  key={member.slug}
                  slug={member.slug}
                  name={member.name}
                  role={member.role}
                  credentials={member.credentials}
                  photoUrl={member.photoUrl}
                  shortBio={member.shortBio}
                  rotation={rotations[index % rotations.length]}
                  memberNo={`FRC/2026/ICAN/00${index + 1}`}
                  specialties={member.specialties}
                  linkedin={member.linkedin}
                />
              );
            })}
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
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#B08D3E] text-[#101F38] font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-md rounded-md"
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
