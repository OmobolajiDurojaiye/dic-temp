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
      className={`bg-white border border-slate-200/80 rounded-2xl flex flex-col justify-between p-6 shadow-xs hover:shadow-md hover:border-slate-300 transition-all h-[230px] ${className}`}
    >
      {/* Fixed Uniform Logo Container Box */}
      <div className="w-full h-24 flex items-center justify-center p-3 bg-slate-50/70 rounded-xl overflow-hidden relative flex-shrink-0">
        {hasValidImage ? (
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={logoUrl}
              alt={`${name} Logo`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              className="object-contain max-h-16 p-1"
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <div className="flex items-center gap-2 text-[#0e2a47]">
            <div className="h-9 w-9 flex-shrink-0 bg-white border border-slate-200 text-[#0e2a47] flex items-center justify-center font-bold text-xs rounded-lg shadow-xs">
              {initials || <Building2 className="w-4 h-4 text-[#2b70c9]" />}
            </div>
            <span className="font-bold text-xs tracking-tight text-[#0e2a47] line-clamp-1">
              {name.split(" ")[0]}
            </span>
          </div>
        )}
      </div>

      {/* Client Details with Fixed Equal Spacing */}
      <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col flex-1 justify-between overflow-hidden">
        <h4 className="font-bold text-[#0e2a47] text-xs sm:text-sm leading-snug line-clamp-2">
          {name}
        </h4>
        {category && (
          <p className="text-[11px] text-slate-500 line-clamp-1 mt-1">
            {category}
          </p>
        )}
      </div>
    </div>
  );
}
