import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Linkedin } from "lucide-react";
import TickMark from "./TickMark";

interface MembershipCardProps {
  slug: string;
  name: string;
  role: string;
  credentials: string;
  photoUrl?: string;
  shortBio?: string;
  rotation?: number; // e.g. -5 to 5
  memberNo?: string;
  specialties?: string[];
  linkedin?: string;
  className?: string;
}

export default function MembershipCard({
  slug,
  name,
  role,
  credentials,
  photoUrl,
  shortBio,
  rotation = 0,
  memberNo = "FRC/2026/ICAN/0194",
  specialties,
  linkedin,
  className = ""
}: MembershipCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("");

  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className={`relative rounded-[24px] bg-gradient-to-b from-[#FFFFFF] via-[#FDFBF7] to-[#F6F2E9] border-2 border-[#B08D3E]/40 p-6 sm:p-7 shadow-[0_22px_45px_-10px_rgba(16,31,56,0.22)] transition-all duration-300 hover:rotate-0 hover:scale-[1.02] hover:shadow-[0_28px_55px_-10px_rgba(16,31,56,0.3)] hover:z-20 select-none overflow-hidden ${className}`}
    >
      {/* Metallic Brass Header Foil Strip */}
      <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-[#8C6D2B] via-[#C49E46] to-[#B08D3E]" />

      {/* Card Header Info */}
      <div className="pt-2 flex justify-between items-start gap-3 mb-4">
        <div>
          <span className="font-mono text-[9px] font-bold tracking-[0.25em] text-[#B08D3E] uppercase block">
            DANIEL ISIBOR & CO • PARTNER ID
          </span>
          <span className="font-mono text-[8px] tracking-widest text-[#5B6B7F] uppercase">
            REG: {memberNo}
          </span>
        </div>

        {/* Physical Gold Stamp / Hologram accent */}
        <div className="w-8 h-8 rounded-full border border-[#B08D3E]/60 bg-gradient-to-br from-[#EAD59B] to-[#B08D3E] flex items-center justify-center shadow-inner">
          <TickMark variant="rust" size="sm" />
        </div>
      </div>

      {/* Profile Row: Photo slot or Embossed Monogram */}
      <div className="flex items-center gap-4 mb-5">
        {photoUrl && photoUrl.trim() !== "" ? (
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#B08D3E] flex-shrink-0 shadow-md">
            <Image
              src={photoUrl}
              alt={`${name} - Chartered Accountant`}
              fill
              className="object-cover object-top"
            />
          </div>
        ) : (
          <div className="w-16 h-16 rounded-full bg-[#101F38] border-2 border-[#B08D3E] flex items-center justify-center flex-shrink-0 text-white font-serif font-bold text-lg shadow-md">
            <span>{initials}</span>
          </div>
        )}

        <div>
          <h3 className="font-serif font-bold text-[#101F38] text-base leading-snug">
            {name}
          </h3>
          <p className="text-xs font-semibold text-[#B08D3E] font-sans">
            {role}
          </p>
        </div>
      </div>

      {/* Embossed Credentials Strip set in letterspaced Plex Mono */}
      <div className="bg-[#101F38] text-white px-3.5 py-2 rounded-lg mb-4 flex items-center justify-between border border-[#B08D3E]/40 shadow-inner">
        <span className="font-mono text-[11px] font-bold tracking-[0.18em] text-[#EAD59B]">
          {credentials}
        </span>
        <TickMark variant="rust" size="sm" />
      </div>

      {shortBio && (
        <p className="text-xs text-[#5B6B7F] font-sans leading-relaxed line-clamp-3 mb-4">
          {shortBio}
        </p>
      )}

      {/* Specialties */}
      {specialties && specialties.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-5">
          {specialties.slice(0, 3).map((spec, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono px-2 py-0.5 bg-[#FFFFFF] border border-[#B08D3E]/30 text-[#101F38] rounded"
            >
              {spec}
            </span>
          ))}
        </div>
      )}

      {/* Bottom Action */}
      <div className="pt-3 border-t border-[#5B6B7F]/15 flex items-center justify-between">
        <Link
          href={`/team/${slug}`}
          className="font-mono text-xs font-bold text-[#101F38] hover:text-[#B08D3E] inline-flex items-center gap-1.5 uppercase tracking-wider"
        >
          <span>View Profile & Credentials</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5B6B7F] hover:text-[#B08D3E] p-1 transition-colors"
            aria-label={`${name} LinkedIn Profile`}
          >
            <Linkedin className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}
