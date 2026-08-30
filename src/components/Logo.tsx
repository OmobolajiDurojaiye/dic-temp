import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = "h-12 w-auto", light = false }: LogoProps) {
  if (light) {
    return (
      <div className="inline-flex items-center bg-white px-3 py-1.5 rounded-xl shadow-xs">
        <Image
          src="/images/DIC-LOGO.png"
          alt="Daniel Isibor & Co (Chartered Accountants)"
          width={180}
          height={50}
          className="h-9 w-auto object-contain"
          priority
        />
      </div>
    );
  }

  return (
    <div className="flex items-center select-none">
      <Image
        src="/images/DIC-LOGO.png"
        alt="Daniel Isibor & Co (Chartered Accountants)"
        width={220}
        height={60}
        className="h-11 sm:h-13 w-auto object-contain transition-all"
        priority
      />
    </div>
  );
}
