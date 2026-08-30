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
      className={`flat-panel flex flex-col justify-between p-6 hover:border-[#3B9FE0] transition-colors ${className}`}
    >
      {/* Logo Container */}
      <div className="w-full h-20 flex items-center justify-center p-2 bg-[#F4F8FB] border border-[#5C7089]/15 rounded-[4px] overflow-hidden relative">
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
          <div className="flex items-center gap-2 text-[#0B1E3D]">
            <div className="h-8 w-8 flex-shrink-0 bg-white border border-[#5C7089]/30 text-[#0B1E3D] flex items-center justify-center font-mono font-bold text-xs rounded-[4px]">
              {initials || <Building2 className="w-4 h-4 text-[#3B9FE0]" />}
            </div>
            <span className="font-sans font-bold text-xs tracking-tight text-[#0B1E3D] line-clamp-1">
              {name.split(" ")[0]}
            </span>
          </div>
        )}
      </div>

      {/* Client Details */}
      <div className="mt-4 pt-3 border-t border-[#5C7089]/15 flex flex-col flex-1 justify-between">
        <h4 className="font-sans font-bold text-[#0B1E3D] text-sm leading-snug line-clamp-2">
          {name}
        </h4>
        {category && (
          <p className="text-[10px] font-mono uppercase tracking-wider text-[#5C7089] mt-2">
            {category}
          </p>
        )}
      </div>
    </div>
  );
}
