import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  GraduationCap,
  Briefcase,
  ShieldCheck,
  ArrowRight,
  Linkedin
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import TickMark from "@/components/TickMark";
import TeamAvatar from "@/components/TeamAvatar";
import Workpaper from "@/components/Workpaper";
import Seal from "@/components/Seal";
import { FIRM_INFO, TEAM_DATA } from "@/data/firmData";

interface TeamMemberPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TEAM_DATA.map((member) => ({
    slug: member.slug,
  }));
}

export async function generateMetadata({ params }: TeamMemberPageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = TEAM_DATA.find((m) => m.slug === slug);

  if (!member) {
    return {
      title: "Team Member Not Found",
    };
  }

  return {
    title: `${member.name} | ${member.role} at Daniel Isibor & Co`,
    description: `${member.name}, ${member.credentials}. ${member.shortBio}`,
    alternates: {
      canonical: `/team/${member.slug}`,
    },
    openGraph: {
      title: `${member.name} (${member.credentials}) | Daniel Isibor & Co`,
      description: member.shortBio,
      url: `${FIRM_INFO.siteUrl}/team/${member.slug}`,
      images: member.photoUrl ? [{ url: member.photoUrl }] : undefined,
    },
  };
}

export default async function TeamMemberDetailPage({ params }: TeamMemberPageProps) {
  const { slug } = await params;
  const member = TEAM_DATA.find((m) => m.slug === slug);

  if (!member) {
    notFound();
  }

  const otherTeam = TEAM_DATA.filter((m) => m.slug !== member.slug);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": member.name,
    "jobTitle": member.role,
    "honorificSuffix": member.credentials,
    "worksFor": {
      "@type": "AccountingService",
      "name": FIRM_INFO.name,
      "url": FIRM_INFO.siteUrl
    },
    "alumniOf": member.education.map((edu) => ({
      "@type": "EducationalOrganization",
      "name": edu
    })),
    "memberOf": member.memberships.map((mem) => ({
      "@type": "Organization",
      "name": mem
    })),
    ...(member.linkedin ? { "sameAs": [member.linkedin] } : {})
  };

  return (
    <div className="flex flex-col bg-[#F6F2E9] overflow-x-clip">
      <JsonLd data={personSchema} />
      <Breadcrumbs
        items={[
          { name: "Our Team", url: "/team" },
          { name: member.name, url: `/team/${member.slug}` }
        ]}
      />

      {/* Header Profile Banner - Ink Navy with Overlapping Seal */}
      <section className="relative bg-[#101F38] text-white py-14 lg:py-20 border-b border-[#B08D3E]/30 overflow-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Photo / Avatar */}
            <TeamAvatar
              name={member.name}
              photoUrl={member.photoUrl}
              size="xl"
            />

            {/* Main Title & Role */}
            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-[#B08D3E]/40 text-[#B08D3E] text-[11px] font-mono font-bold uppercase tracking-wider rounded-md">
                <TickMark variant="rust" size="sm" />
                <span>Verified Executive Profile</span>
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                {member.name}
              </h1>
              <p className="text-base sm:text-lg text-[#B08D3E] font-medium font-sans">
                {member.role}
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 font-mono text-xs text-slate-300">
                <TickMark variant="rust" size="sm" />
                <span>{member.credentials}</span>
              </div>
              {member.linkedin && (
                <div className="pt-2">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 hover:bg-[#B08D3E] hover:text-[#101F38] border border-[#B08D3E]/40 font-mono text-xs font-semibold rounded-md transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Physical Seal */}
        <div className="absolute -bottom-10 right-8 lg:right-24 z-20 hidden sm:block">
          <Seal
            title="VERIFIED PARTNER"
            subtitle="DANIEL ISIBOR & CO"
            code="OFFICIAL"
            rotation={-3}
            size="sm"
          />
        </div>
      </section>

      {/* Main Bio & Qualifications Section */}
      <section className="py-14 bg-[#F6F2E9] border-b border-[#5B6B7F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Full Biography in Workpaper */}
            <div className="lg:col-span-8 space-y-8">
              <Workpaper rotation={-1} refCode="WP-EXEC-BIO">
                <div className="space-y-6">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#B08D3E] block mb-1">
                      Executive Summary
                    </span>
                    <p className="text-sm text-[#101F38] leading-relaxed font-sans font-medium">
                      {member.shortBio}
                    </p>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-[#5B6B7F] font-sans leading-relaxed">
                    <h2 className="font-serif text-xl font-bold text-[#101F38] border-b border-[#5B6B7F]/20 pb-2">
                      Professional Background & Practice Experience
                    </h2>
                    {member.fullBio.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Core Specialties */}
                  <div className="pt-4">
                    <h3 className="font-serif text-base font-bold text-[#101F38] mb-3 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#B08D3E]" />
                      <span>Practice Areas & Core Specialties</span>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-xs font-mono px-3 py-1 bg-[#F6F2E9] border border-[#B08D3E]/30 text-[#101F38] rounded-md font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Workpaper>
            </div>

            {/* Right Column: Qualifications & Memberships */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Academic Qualifications Workpaper */}
              <Workpaper rotation={2} refCode="WP-ACADEMIC">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#B08D3E] flex items-center gap-2 mb-3">
                  <GraduationCap className="w-4 h-4 text-[#B08D3E]" />
                  <span>Academic Qualifications</span>
                </h3>
                <ul className="space-y-2.5 text-xs text-[#5B6B7F] font-sans">
                  {member.education.map((edu, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <TickMark variant="rust" size="sm" className="mt-0.5" />
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </Workpaper>

              {/* Accreditations Workpaper */}
              <Workpaper rotation={-2} refCode="WP-MEMBERSHIP">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#B08D3E] flex items-center gap-2 mb-3">
                  <ShieldCheck className="w-4 h-4 text-[#B08D3E]" />
                  <span>Professional Accreditations</span>
                </h3>
                <ul className="space-y-2.5 text-xs text-[#5B6B7F] font-sans">
                  {member.memberships.map((mem, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <TickMark variant="rust" size="sm" className="mt-0.5" />
                      <span>{mem}</span>
                    </li>
                  ))}
                </ul>
              </Workpaper>

              {/* Consultation Action */}
              <div className="bg-[#101F38] text-white p-6 rounded-[20px] space-y-3 border border-[#B08D3E]/40 shadow-xl">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#B08D3E]">
                  Schedule Consultation
                </h4>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Request an engagement or advisory session with {member.name}.
                </p>
                <div className="pt-1">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-[#B08D3E] text-[#101F38] font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-all shadow-md rounded-md"
                  >
                    <span>Contact Firm</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Other Key Drivers */}
              <div className="p-6 bg-white rounded-[20px] border border-[#B08D3E]/30">
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#5B6B7F] mb-3">
                  Other Key Drivers
                </div>
                <div className="space-y-2.5">
                  {otherTeam.slice(0, 3).map((other) => (
                    <Link
                      key={other.slug}
                      href={`/team/${other.slug}`}
                      className="block p-2.5 bg-[#F6F2E9] border border-[#5B6B7F]/15 hover:border-[#B08D3E] rounded-md transition-colors"
                    >
                      <div className="font-serif text-xs font-bold text-[#101F38]">{other.name}</div>
                      <div className="text-[10px] font-mono text-[#5B6B7F]">{other.role}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
