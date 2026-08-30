import React from "react";
import Image from "next/image";

interface TeamAvatarProps {
  name: string;
  photoUrl?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function TeamAvatar({
  name,
  photoUrl,
  size = "md",
  className = ""
}: TeamAvatarProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("");

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "w-14 h-14 text-sm";
      case "md":
        return "w-20 h-20 text-base";
      case "lg":
        return "w-28 h-28 text-xl";
      case "xl":
        return "w-36 h-36 text-2xl";
      default:
        return "w-20 h-20 text-base";
    }
  };

  if (photoUrl && photoUrl.trim() !== "") {
    return (
      <div
        className={`relative ${getSizeClasses()} bg-[#101F38] border border-[#B08D3E]/40 overflow-hidden flex-shrink-0 shadow-sm ${className}`}
      >
        {/* Brass corner registration marks */}
        <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#B08D3E] z-10 pointer-events-none" />
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#B08D3E] z-10 pointer-events-none" />
        <Image
          src={photoUrl}
          alt={`${name} - Chartered Accountant`}
          fill
          sizes="(max-width: 768px) 120px, 160px"
          className="object-cover object-top"
          priority
        />
      </div>
    );
  }

  // Bespoke brass-outlined monogram document badge on ledger-texture background
  return (
    <div
      className={`relative ${getSizeClasses()} bg-[#F6F2E9] border border-[#B08D3E]/50 flex-shrink-0 flex items-center justify-center ledger-grid-bg select-none shadow-sm ${className}`}
    >
      {/* Brass corner stamps */}
      <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#B08D3E] pointer-events-none" />
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#B08D3E] pointer-events-none" />

      {/* Inner subtle seal circle */}
      <div className="w-[82%] h-[82%] border border-dashed border-[#B08D3E]/40 rounded-none flex items-center justify-center flex-col">
        <span className="font-serif font-bold text-[#101F38] tracking-widest leading-none">
          {initials}
        </span>
        <span className="text-[7px] font-mono text-[#5B6B7F] tracking-[0.2em] uppercase mt-0.5">
          DIC
        </span>
      </div>
    </div>
  );
}
