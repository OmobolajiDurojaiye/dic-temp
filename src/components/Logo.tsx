import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = "h-20 sm:h-24 w-auto", light = false }: LogoProps) {
  if (light) {
    return (
      <div className="inline-flex items-center bg-white px-5 py-3 rounded-2xl shadow-xs">
        <Image
          src="/images/DIC-LOGO.png"
          alt="Daniel Isibor & Co (Chartered Accountants)"
          width={380}
          height={110}
          className="h-18 w-auto object-contain scale-[1.25] origin-center"
          priority
        />
      </div>
    );
  }

  return (
    <div className="flex items-center select-none mr-16">
      <Image
        src="/images/DIC-LOGO.png"
        alt="Daniel Isibor & Co (Chartered Accountants)"
        width={450}
        height={130}
        className={`${className} object-contain transition-all scale-[1.8] origin-left`}
        priority
      />
    </div>
  );
}
