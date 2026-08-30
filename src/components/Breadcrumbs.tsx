import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import JsonLd from "./JsonLd";
import { FIRM_INFO } from "@/data/firmData";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const fullItems = [
    { name: "Home", url: "/" },
    ...items
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": fullItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${FIRM_INFO.siteUrl}${item.url}`
    }))
  };

  return (
    <>
      <JsonLd data={schemaData} />
      <nav aria-label="Breadcrumb" className="py-3 px-4 bg-slate-100/80 border-b border-slate-200 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-1.5">
          <Link href="/" className="inline-flex items-center gap-1 hover:text-brand-navy font-medium transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <React.Fragment key={item.url}>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                {isLast ? (
                  <span className="font-semibold text-brand-navy" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.url} className="hover:text-brand-navy font-medium transition-colors">
                    {item.name}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </nav>
    </>
  );
}
