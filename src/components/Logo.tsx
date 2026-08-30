import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = "h-16 sm:h-20 w-auto", light = false }: LogoProps) {
  if (light) {
    return (
      <div className="inline-flex items-center bg-white px-4 py-2.5 rounded-2xl shadow-xs">
        <Image
          src="/images/DIC-LOGO.png"
          alt="Daniel Isibor & Co (Chartered Accountants)"
          width={280}
          height={80}
          className="h-14 w-auto object-contain"
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
        width={320}
        height={90}
        className={`${className} object-contain transition-all`}
        priority
      />
    </div>
  );
}
