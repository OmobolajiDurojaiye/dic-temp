import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
  useImage?: boolean;
}

export default function Logo({
  className = "h-9 w-9",
  showText = true,
  light = false,
  useImage = false
}: LogoProps) {
  const strokeColor = light ? "#3B9FE0" : "#0B1E3D";
  const textColor = light ? "#FFFFFF" : "#0B1E3D";
  const secondaryTextColor = light ? "#3B9FE0" : "#5C7089";

  if (useImage) {
    return (
      <div className="flex items-center gap-3 select-none">
        <div className="relative h-10 w-auto aspect-[3/1]">
          <Image
            src="/images/DIC-LOGO.png"
            alt="Daniel Isibor & Co Logo"
            width={180}
            height={48}
            className="h-full w-auto object-contain"
            priority
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 select-none">
      <div className={`relative ${className} flex-shrink-0`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Square outer frame with 4px inner stroke */}
          <rect
            x="8"
            y="8"
            width="84"
            height="84"
            rx="4"
            fill="none"
            stroke={strokeColor}
            strokeWidth="8"
          />
          {/* Inner DIC Monogram in IBM Plex Mono */}
          <text
            x="50"
            y="60"
            textAnchor="middle"
            fill={strokeColor}
            fontWeight="800"
            fontSize="32"
            fontFamily="var(--font-ibm-mono), monospace"
            letterSpacing="-0.5"
          >
            DIC
          </text>
        </svg>
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-sans font-extrabold text-base tracking-tight" style={{ color: textColor }}>
            DANIEL ISIBOR & CO
          </span>
          <span className="text-[9px] font-mono font-bold tracking-[0.2em] mt-0.5" style={{ color: secondaryTextColor }}>
            CHARTERED ACCOUNTANTS
          </span>
        </div>
      )}
    </div>
  );
}
