import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  Briefcase,
  ShieldCheck,
  ArrowRight,
  Linkedin,
  CheckCircle2
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
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

  const teamPhotos: Record<string, string> = {
    "daniel-isibor": "/images/Mr Daniel.jpeg",
    "rukayat-hassan-daniel": "/images/Mrs Rukayat.jpeg",
    "mayowa-omotosho": "/images/stock/man-suit.jpg",
    "idris-husseini": "/images/stock/team-collaboration.jpg"
  };

  const photo = member.photoUrl && member.photoUrl.trim() !== "" ? member.photoUrl : (teamPhotos[member.slug] || "/images/stock/man-suit.jpg");

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
    <div className="flex flex-col bg-white">
      <JsonLd data={personSchema} />
      <Breadcrumbs
        items={[
          { name: "Our Team", url: "/team" },
          { name: member.name, url: `/team/${member.slug}` }
        ]}
      />

      {/* Header Profile Banner */}
      <section className="bg-[#f8fafc] py-14 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative w-36 h-36 rounded-3xl overflow-hidden shadow-lg border-4 border-white flex-shrink-0 bg-slate-100">
              <Image
                src={photo}
                alt={`${member.name} - Chartered Accountant`}
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Main Title & Role */}
            <div className="space-y-2 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0e2a47]">
                {member.name}
              </h1>
              <p className="text-base sm:text-lg text-[#143d6b] font-semibold">
                {member.role}
              </p>
              <div className="text-sm font-mono text-slate-500">
                {member.credentials}
              </div>
              {member.linkedin && (
                <div className="pt-2">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#0e2a47] hover:bg-[#143d6b] text-white text-xs font-semibold rounded-full transition-colors shadow-sm"
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
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Full Biography */}
            <div className="lg:col-span-8 space-y-6">
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl">
                <div className="text-xs font-bold uppercase tracking-wider text-[#143d6b] mb-1.5">
                  Executive Summary
                </div>
                <p className="text-sm sm:text-base text-[#0e2a47] leading-relaxed font-medium">
                  {member.shortBio}
                </p>
              </div>

              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <h2 className="text-xl font-bold text-[#0e2a47] border-b border-slate-200 pb-2">
                  Professional Background & Practice Experience
                </h2>
                {member.fullBio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Core Specialties */}
              <div className="pt-4">
                <h3 className="text-base font-bold text-[#0e2a47] mb-3 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#143d6b]" />
                  <span>Practice Areas & Core Specialties</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-medium px-3 py-1.5 bg-[#f8fafc] border border-slate-200 text-[#0e2a47] rounded-xl"
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
              <div className="p-6 bg-[#f8fafc] border border-slate-200 rounded-3xl space-y-3 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#143d6b] flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#143d6b]" />
                  <span>Academic Qualifications</span>
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  {member.education.map((edu, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#143d6b] flex-shrink-0 mt-0.5" />
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Memberships */}
              <div className="p-6 bg-[#f8fafc] border border-slate-200 rounded-3xl space-y-3 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#143d6b] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#143d6b]" />
                  <span>Professional Accreditations</span>
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  {member.memberships.map((mem, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#143d6b] flex-shrink-0 mt-0.5" />
                      <span>{mem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Consultation Card */}
              <div className="bg-[#0e2a47] text-white p-7 rounded-3xl space-y-3 shadow-xl">
                <h4 className="text-base font-bold text-white">
                  Schedule Consultation
                </h4>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Request an engagement or advisory session with {member.name}.
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-4 py-3 bg-white hover:bg-slate-100 text-[#0e2a47] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
                  >
                    <span>Contact Firm</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Other Key Drivers */}
              <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Other Key Drivers
                </div>
                <div className="space-y-2.5">
                  {otherTeam.slice(0, 3).map((other) => (
                    <Link
                      key={other.slug}
                      href={`/team/${other.slug}`}
                      className="block p-3 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors"
                    >
                      <div className="font-bold text-[#0e2a47] text-xs">{other.name}</div>
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
