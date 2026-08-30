"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Building2 } from "lucide-react";

interface ClientLogoProps {
  name: string;
  category?: string;
  logoUrl?: string;
  className?: string;
}

export default function ClientLogo({
  name,
  category,
  logoUrl,
  className = ""
}: ClientLogoProps) {
  const [imageError, setImageError] = useState(false);

  // Clean initials for fallback monogram
  const initials = name
    .split(" ")
    .filter((w) => !["and", "&", "of", "the", "for", "in", "ltd", "gte", "limited"].includes(w.toLowerCase()))
    .slice(0, 3)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const hasValidImage = logoUrl && logoUrl.trim() !== "" && !imageError;

  return (
    <div
      className={`brass-corner-card group flex flex-col justify-between p-6 ${className}`}
    >
      {/* Adaptive Logo / Seal Container */}
      <div className="w-full h-24 flex items-center justify-center p-2 bg-[#F6F2E9]/80 border border-[#5B6B7F]/10 overflow-hidden relative ledger-grid-bg">
        {hasValidImage ? (
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={logoUrl}
              alt={`${name} Logo`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              className="object-contain max-h-full max-w-full transition-transform duration-300 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <div className="flex items-center gap-2.5 text-[#101F38]">
            <div className="h-10 w-10 flex-shrink-0 border border-[#B08D3E]/40 bg-white text-[#101F38] flex items-center justify-center font-mono font-bold text-xs tracking-wider">
              {initials || <Building2 className="w-5 h-5 text-[#B08D3E]" />}
            </div>
            <span className="font-serif font-bold text-xs tracking-wide text-[#101F38] text-center line-clamp-2">
              {name.split(" ")[0]}
            </span>
          </div>
        )}
      </div>

      {/* Client Details */}
      <div className="mt-4 pt-3 border-t border-[#5B6B7F]/15 flex flex-col flex-1 justify-between">
        <h4 className="font-serif font-bold text-[#101F38] text-sm leading-snug line-clamp-2 group-hover:text-[#B08D3E] transition-colors">
          {name}
        </h4>
        {category && (
          <p className="text-[10px] font-mono uppercase tracking-wider text-[#5B6B7F] font-semibold mt-2">
            {category}
          </p>
        )}
      </div>
    </div>
  );
}
