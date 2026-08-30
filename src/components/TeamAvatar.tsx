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

  const sizeClasses = {
    sm: "w-12 h-12 text-sm",
    md: "w-16 h-16 text-base",
    lg: "w-24 h-24 text-xl",
    xl: "w-32 h-32 text-2xl"
  }[size];

  if (photoUrl && photoUrl.trim() !== "") {
    return (
      <div
        className={`relative ${sizeClasses} rounded-[4px] bg-[#13294B] border border-white/20 overflow-hidden flex-shrink-0 ${className}`}
      >
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

  // Flat square initials in Public Sans Black on Pale fill
  return (
    <div
      className={`relative ${sizeClasses} rounded-[4px] bg-[#F4F8FB] border border-[#5C7089]/30 flex-shrink-0 flex items-center justify-center select-none ${className}`}
    >
      <span className="font-sans font-black text-[#0B1E3D] tracking-wider leading-none">
        {initials}
      </span>
    </div>
  );
}
