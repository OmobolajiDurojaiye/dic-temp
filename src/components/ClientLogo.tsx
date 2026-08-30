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
      className={`bg-white border border-slate-100 rounded-2xl flex flex-col justify-between p-6 shadow-sm hover:shadow-md hover:border-slate-200 transition-all ${className}`}
    >
      {/* Logo Container */}
      <div className="w-full h-16 flex items-center justify-center p-2 bg-slate-50 rounded-xl overflow-hidden relative">
        {hasValidImage ? (
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={logoUrl}
              alt={`${name} Logo`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              className="object-contain max-h-full max-w-full"
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <div className="flex items-center gap-2 text-[#0e2a47]">
            <div className="h-8 w-8 flex-shrink-0 bg-white border border-slate-200 text-[#0e2a47] flex items-center justify-center font-bold text-xs rounded-lg">
              {initials || <Building2 className="w-4 h-4 text-[#2b70c9]" />}
            </div>
            <span className="font-bold text-xs tracking-tight text-[#0e2a47] line-clamp-1">
              {name.split(" ")[0]}
            </span>
          </div>
        )}
      </div>

      {/* Client Details */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col flex-1 justify-between">
        <h4 className="font-bold text-[#0e2a47] text-xs sm:text-sm leading-snug line-clamp-2">
          {name}
        </h4>
        {category && (
          <p className="text-[11px] text-slate-500 mt-1.5 line-clamp-1">
            {category}
          </p>
        )}
      </div>
    </div>
  );
}
