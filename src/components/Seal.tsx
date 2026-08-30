import React from "react";
import TickMark from "./TickMark";

interface SealProps {
  title: string;
  subtitle?: string;
  code?: string;
  rotation?: number; // e.g. -6 to 6
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Seal({
  title,
  subtitle = "OFFICIAL REG.",
  code,
  rotation = 0,
  size = "md",
  className = ""
}: SealProps) {
  const sizeClasses = {
    sm: "w-24 h-24 text-[9px]",
    md: "w-32 h-32 text-[10px]",
    lg: "w-40 h-40 text-xs"
  }[size];

  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className={`relative inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#C49E46] via-[#B08D3E] to-[#8C6D2B] text-[#101F38] shadow-[0_15px_30px_-8px_rgba(16,31,56,0.35)] select-none border-2 border-[#EAD59B]/60 flex-shrink-0 transition-transform hover:scale-105 duration-300 ${sizeClasses} ${className}`}
    >
      {/* Outer scalloped/stamped ring */}
      <div className="absolute inset-1.5 rounded-full border border-dashed border-[#101F38]/40" />
      {/* Inner solid gold ring */}
      <div className="absolute inset-3 rounded-full border border-[#101F38]/30 bg-[#F6F2E9]/15 backdrop-blur-[1px]" />

      {/* Content inside seal */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-2">
        <TickMark variant="rust" size="sm" className="mb-0.5 drop-shadow-sm" />
        <span className="font-mono font-extrabold uppercase tracking-widest leading-tight text-[#101F38] line-clamp-2">
          {title}
        </span>
        {subtitle && (
          <span className="text-[7px] font-mono tracking-[0.2em] uppercase text-[#101F38]/80 mt-0.5">
            {subtitle}
          </span>
        )}
        {code && (
          <span className="text-[8px] font-mono font-bold text-[#A3462B] mt-0.5">
            {code}
          </span>
        )}
      </div>
    </div>
  );
}
