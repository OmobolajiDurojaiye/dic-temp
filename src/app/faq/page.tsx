"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ArrowRight,
  Phone
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import TickMark from "@/components/TickMark";
import { FIRM_INFO, FAQS_DATA } from "@/data/firmData";

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS_DATA.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="flex flex-col bg-[#F6F2E9]">
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[{ name: "FAQ", url: "/faq" }]} />

      {/* Page Header - Ink Navy */}
      <section className="bg-[#101F38] text-white py-14 lg:py-20 border-b border-[#B08D3E]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-[#B08D3E]/40 text-[#B08D3E] text-[11px] font-mono font-bold uppercase tracking-wider">
              <TickMark variant="rust" size="sm" />
              <span>Knowledge Base & Guidance</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Frequently Asked Questions
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              Find clear answers to common questions about statutory audits, Nigerian tax compliance, FRC regulations, accounting software setups, and working with Daniel Isibor & Co.
            </p>
          </div>
        </div>
      </section>

      {/* Main FAQ Section - Parchment */}
      <section className="py-16 bg-[#F6F2E9] border-b border-[#5B6B7F]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Answer-first summary block */}
          <div className="p-6 bg-white border-l-4 border-[#B08D3E] brass-corner-card mb-10">
            <p className="text-sm text-[#101F38] leading-relaxed font-medium font-sans">
              <strong>Daniel Isibor & Co (Chartered Accountants)</strong> is an FRC-registered audit practice in <strong>Abuja, Nigeria</strong>. Below are authoritative answers regarding our audit methodologies, tax management services, software implementations, and statutory compliance under Nigerian law.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS_DATA.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="brass-corner-card overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-[#F6F2E9]/60 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#B08D3E]">
                        0{index + 1}.
                      </span>
                      <h3 className="font-serif text-sm sm:text-base font-bold text-[#101F38] leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#B08D3E] flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#5B6B7F] font-sans leading-relaxed border-t border-[#5B6B7F]/15 bg-[#F6F2E9]/40 animate-in fade-in">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Direct Support Card in Ink Navy */}
          <div className="mt-12 bg-[#101F38] text-white border border-[#B08D3E]/40 brass-corner-card !bg-[#101F38] p-8 text-center space-y-4 shadow-xl">
            <div className="flex items-center justify-center gap-2">
              <TickMark variant="brass" size="sm" />
              <h4 className="font-serif text-lg font-bold text-white">
                Have a Specific Question Not Answered Here?
              </h4>
            </div>
            <p className="text-xs text-slate-300 font-sans max-w-lg mx-auto leading-relaxed">
              Our chartered accountants in Abuja are ready to discuss your specific financial or statutory requirements.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#B08D3E] text-[#101F38] font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-all shadow-md"
              >
                <span>Submit An Inquiry</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href={`tel:${FIRM_INFO.phoneE164}`}
                className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 border border-[#B08D3E]/30 text-white font-mono text-xs font-bold tracking-wider transition-all"
              >
                <Phone className="w-4 h-4 mr-2 text-[#B08D3E]" />
                <span>Call {FIRM_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
