import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
  useImage?: boolean;
}

export default function Logo({
  className = "h-10 w-10",
  showText = true,
  light = false,
  useImage = false
}: LogoProps) {
  // Use Ink Navy (#101F38) and Brass (#B08D3E)
  const strokeColor = light ? "#B08D3E" : "#101F38";
  const textColor = light ? "#FFFFFF" : "#101F38";
  const secondaryTextColor = light ? "#B08D3E" : "#B08D3E";

  if (useImage) {
    return (
      <div className="flex items-center gap-3 select-none">
        <div className="relative h-11 w-auto aspect-[3/1]">
          <Image
            src="/images/DIC-LOGO.png"
            alt="Daniel Isibor & Co Logo"
            width={180}
            height={50}
            className="h-full w-auto object-contain"
            priority
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 select-none">
      <div className={`relative ${className}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Hexagon seal outline */}
          <polygon
            points="50,7 90,30 90,70 50,93 10,70 10,30"
            fill="none"
            stroke={strokeColor}
            strokeWidth="8"
            strokeLinejoin="round"
          />
          {/* Inner DIC Monogram Text in Plex Mono feel */}
          <text
            x="50"
            y="59"
            textAnchor="middle"
            fill={strokeColor}
            fontWeight="800"
            fontSize="30"
            fontFamily="var(--font-mono), monospace"
            letterSpacing="-0.5"
          >
            DIC
          </text>
        </svg>
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-serif font-extrabold text-lg tracking-tight" style={{ color: textColor }}>
            DANIEL ISIBOR & CO
          </span>
          <span className="text-[9px] font-mono font-bold tracking-[0.22em] mt-0.5" style={{ color: secondaryTextColor }}>
            CHARTERED ACCOUNTANTS
          </span>
        </div>
      )}
    </div>
  );
}
