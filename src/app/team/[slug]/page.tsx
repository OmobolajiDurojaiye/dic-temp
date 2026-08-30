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
import TeamAvatar from "@/components/TeamAvatar";
import { CellRow } from "@/components/CellTable";
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
    <div className="flex flex-col bg-[#F4F8FB]">
      <JsonLd data={personSchema} />
      <Breadcrumbs
        items={[
          { name: "Our Team", url: "/team" },
          { name: member.name, url: `/team/${member.slug}` }
        ]}
      />

      {/* Header Profile Banner - Deep Navy */}
      <section className="bg-[#0B1E3D] text-white py-14 lg:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <TeamAvatar
              name={member.name}
              photoUrl={member.photoUrl}
              size="xl"
            />

            {/* Main Title & Role */}
            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-[#3B9FE0]/40 text-[#3B9FE0] text-[11px] font-mono font-bold uppercase tracking-wider rounded-[4px]">
                <span>Executive Profile</span>
              </div>
              <h1 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
                {member.name}
              </h1>
              <p className="text-base sm:text-lg text-[#3B9FE0] font-semibold font-sans">
                {member.role}
              </p>
              <div className="font-mono text-xs text-slate-300">
                {member.credentials}
              </div>
              {member.linkedin && (
                <div className="pt-2">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 hover:bg-[#3B9FE0] hover:text-white border border-white/20 font-mono text-xs font-semibold rounded-[4px] transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Bio & Qualifications Section */}
      <section className="py-14 bg-[#F4F8FB] border-b border-[#5C7089]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Full Biography */}
            <div className="lg:col-span-8 space-y-6">
              <div className="p-6 bg-white border-l-4 border-[#3B9FE0] flat-panel">
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#3B9FE0] mb-1.5">
                  Executive Summary
                </div>
                <p className="text-sm text-[#0B1E3D] leading-relaxed font-sans font-medium">
                  {member.shortBio}
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#5C7089] font-sans leading-relaxed">
                <h2 className="font-sans text-xl font-bold text-[#0B1E3D] border-b border-[#5C7089]/20 pb-2">
                  Professional Background & Practice Experience
                </h2>
                {member.fullBio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Core Specialties */}
              <div className="pt-4">
                <h3 className="font-sans text-base font-bold text-[#0B1E3D] mb-3 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#3B9FE0]" />
                  <span>Practice Areas & Core Specialties</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono px-3 py-1.5 bg-white border border-[#5C7089]/25 text-[#0B1E3D] font-medium rounded-[4px]"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Qualifications & Memberships */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Education */}
              <div className="p-6 bg-white flat-panel space-y-3">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#3B9FE0] flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#3B9FE0]" />
                  <span>Academic Qualifications</span>
                </h3>
                <ul className="space-y-2.5 text-xs text-[#5C7089] font-sans">
                  {member.education.map((edu, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="font-mono text-[#3B9FE0] font-bold">•</span>
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Memberships */}
              <div className="p-6 bg-white flat-panel space-y-3">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#3B9FE0] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#3B9FE0]" />
                  <span>Professional Accreditations</span>
                </h3>
                <ul className="space-y-2.5 text-xs text-[#5C7089] font-sans">
                  {member.memberships.map((mem, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="font-mono text-[#3B9FE0] font-bold">•</span>
                      <span>{mem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Consultation Card in Ink Blue */}
              <div className="bg-[#13294B] text-white p-6 rounded-[4px] space-y-3 border border-white/20">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#3B9FE0]">
                  Schedule Consultation
                </h4>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Request an engagement or advisory session with {member.name}.
                </p>
                <div className="pt-1">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-[#3B9FE0] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#0B1E3D] transition-all rounded-[4px]"
                  >
                    <span>Contact Firm</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Other Key Drivers */}
              <div className="p-6 bg-white flat-panel">
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#5C7089] mb-3">
                  Other Key Drivers
                </div>
                <div className="space-y-2.5">
                  {otherTeam.slice(0, 3).map((other) => (
                    <Link
                      key={other.slug}
                      href={`/team/${other.slug}`}
                      className="block p-2.5 bg-[#F4F8FB] border border-[#5C7089]/15 hover:border-[#3B9FE0] rounded-[4px] transition-colors"
                    >
                      <div className="font-sans text-xs font-bold text-[#0B1E3D]">{other.name}</div>
                      <div className="text-[10px] font-mono text-[#5C7089]">{other.role}</div>
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
