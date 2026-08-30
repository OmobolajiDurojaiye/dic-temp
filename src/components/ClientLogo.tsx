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

  // Generate clean initials for fallback badge
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
      className={`group relative flex flex-col justify-between p-6 bg-white rounded-none border border-slate-200 hover:border-brand-cyan hover:shadow-md transition-all duration-200 ${className}`}
    >
      {/* Adaptive Logo Container */}
      <div className="w-full h-24 flex items-center justify-center p-2 rounded bg-slate-50/70 overflow-hidden relative">
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
          <div className="flex items-center gap-2.5 text-slate-700">
            <div className="h-10 w-10 flex-shrink-0 rounded bg-brand-navy/10 text-brand-navy flex items-center justify-center font-bold text-xs tracking-wider">
              {initials || <Building2 className="w-5 h-5 text-brand-navy" />}
            </div>
            <span className="font-semibold text-xs tracking-wide text-brand-navy text-center line-clamp-2">
              {name.split(" ")[0]}
            </span>
          </div>
        )}
      </div>

      {/* Client details */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col flex-1 justify-between">
        <h4 className="font-bold text-slate-900 text-sm leading-snug line-clamp-2 group-hover:text-brand-navy transition-colors">
          {name}
        </h4>
        {category && (
          <p className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold mt-2">
            {category}
          </p>
        )}
      </div>
    </div>
  );
}
