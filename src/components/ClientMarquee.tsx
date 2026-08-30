"use client";

import React from "react";
import Image from "next/image";
import { CLIENTS_DATA } from "@/data/firmData";

export default function ClientMarquee() {
  const clientsWithLogos = CLIENTS_DATA.filter(
    (c): c is typeof c & { logoUrl: string } => Boolean(c.logoUrl && c.logoUrl.trim() !== "")
  );

  // Repeat items so the horizontal animation loops seamlessly without white space
  const marqueeItems = [...clientsWithLogos, ...clientsWithLogos, ...clientsWithLogos];

  if (clientsWithLogos.length === 0) return null;

  return (
    <div className="w-full overflow-hidden py-8 bg-[#f8fafc] border-y border-slate-200/80 select-none">
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
          Trusted by Industry Leaders, Government MDAs & Financial Institutions
        </span>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee flex items-center gap-6">
          {marqueeItems.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 w-48 h-20 bg-white border border-slate-200 rounded-2xl px-4 py-2 flex items-center justify-center shadow-xs hover:border-slate-300 transition-colors"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={client.logoUrl}
                  alt={`${client.name} logo`}
                  fill
                  sizes="200px"
                  className="object-contain max-h-14 p-1"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
