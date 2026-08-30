import React from "react";

interface WorkpaperProps {
  refCode?: string;
  rotation?: number; // e.g. -5 to 5
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export default function Workpaper({
  refCode = "WP-DIC-2026",
  rotation = 0,
  children,
  className = "",
  dark = false
}: WorkpaperProps) {
  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className={`relative rounded-[24px] transition-transform duration-300 hover:rotate-0 hover:scale-[1.01] ${
        dark
          ? "bg-[#101F38] text-white border border-[#B08D3E]/40 shadow-[0_25px_50px_-12px_rgba(16,31,56,0.5)]"
          : "bg-[#FFFFFF] text-[#101F38] border border-[#B08D3E]/30 shadow-[0_20px_45px_-10px_rgba(16,31,56,0.18)]"
      } p-6 sm:p-8 ledger-grid-bg ${className}`}
    >
      {/* Top REF Tab Stamp */}
      <div className="flex justify-between items-center mb-4 pb-3 border-b border-[#5B6B7F]/15">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#F6F2E9] border border-[#B08D3E]/40 rounded-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A3462B]" />
          <span className="font-mono text-[10px] font-bold text-[#101F38] tracking-wider uppercase">
            REF: {refCode}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full border border-[#B08D3E]" />
          <span className="w-2 h-2 rounded-full bg-[#B08D3E]/40" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">{children}</div>

      {/* Faint ledger corner fold watermark */}
      <div className="absolute bottom-3 right-4 font-mono text-[8px] tracking-widest text-[#5B6B7F]/30 uppercase select-none pointer-events-none">
        AUDIT WORKING PAPER // VERIFIED
      </div>
    </div>
  );
}
