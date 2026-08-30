import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  GraduationCap,
  Briefcase,
  ShieldCheck,
  ArrowRight,
  Phone,
  Mail,
  Linkedin,
  Building2
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { FIRM_INFO, TEAM_DATA, TeamMember } from "@/data/firmData";

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
    <div className="flex flex-col">
      <JsonLd data={personSchema} />
      <Breadcrumbs
        items={[
          { name: "Our Team", url: "/team" },
          { name: member.name, url: `/team/${member.slug}` }
        ]}
      />

      {/* Header Profile Banner */}
      <section className="bg-brand-navy text-white py-14 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Photo / Avatar */}
            {member.photoUrl ? (
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-none border-2 border-brand-cyan/70 overflow-hidden flex-shrink-0 bg-slate-800 shadow-2xl">
                <Image
                  src={member.photoUrl}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            ) : (
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-none bg-slate-800 border-2 border-white/20 text-brand-cyan font-black text-3xl flex items-center justify-center flex-shrink-0 shadow-2xl">
                {member.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
              </div>
            )}

            {/* Main Title & Role */}
            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-brand-cyan text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>Executive Profile</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                {member.name}
              </h1>
              <p className="text-base sm:text-lg text-brand-cyan font-medium">
                {member.role}
              </p>
              <p className="text-xs font-mono text-slate-300">
                {member.credentials}
              </p>
              {member.linkedin && (
                <div className="pt-1">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-brand-cyan hover:text-brand-navy text-xs font-semibold rounded-none transition-colors"
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
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Full Biography */}
            <div className="lg:col-span-8 space-y-6">
              <div className="p-6 bg-slate-50 border-l-4 border-brand-navy">
                <h2 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-2">
                  Executive Summary
                </h2>
                <p className="text-sm text-slate-800 leading-relaxed font-medium">
                  {member.shortBio}
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
                  Professional Background & Experience
                </h2>
                {member.fullBio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Core Specialties */}
              <div className="pt-4">
                <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-brand-navy" />
                  <span>Practice Areas & Core Specialties</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs px-3 py-1.5 bg-slate-100 border border-slate-200 text-slate-800 font-medium"
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
              <div className="p-6 bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-brand-navy flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-brand-navy" />
                  <span>Academic Qualifications</span>
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  {member.education.map((edu, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-brand-navy font-bold">•</span>
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Memberships */}
              <div className="p-6 bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-brand-navy flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-navy" />
                  <span>Professional Accreditations</span>
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  {member.memberships.map((mem, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-brand-navy font-bold">•</span>
                      <span>{mem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Consultation Link */}
              <div className="bg-brand-navy text-white p-6 rounded-none space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
                  Book an Appointment
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Request an engagement or advisory session with {member.name}.
                </p>
                <div className="pt-1">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-brand-cyan text-brand-navy text-xs font-bold uppercase tracking-wider hover:bg-white transition-all"
                  >
                    <span>Contact Firm</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Other Key Drivers */}
              <div className="p-6 bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Other Key Drivers
                </h4>
                <div className="space-y-2.5">
                  {otherTeam.slice(0, 3).map((other) => (
                    <Link
                      key={other.slug}
                      href={`/team/${other.slug}`}
                      className="block p-2.5 bg-white border border-slate-200 hover:border-brand-navy transition-colors"
                    >
                      <div className="text-xs font-bold text-slate-900">{other.name}</div>
                      <div className="text-[11px] text-slate-500">{other.role}</div>
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
