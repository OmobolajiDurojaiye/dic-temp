import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = "h-10 w-auto", light = false }: LogoProps) {
  return (
    <div className="flex items-center gap-3 select-none">
      <div className={`relative ${className} flex items-center`}>
        <Image
          src="/images/DIC-LOGO.png"
          alt="Daniel Isibor & Co (Chartered Accountants)"
          width={180}
          height={50}
          className="h-10 w-auto object-contain"
          priority
        />
      </div>
    </div>
  );
}
