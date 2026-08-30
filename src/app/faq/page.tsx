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
    <div className="flex flex-col bg-white">
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[{ name: "FAQ", url: "/faq" }]} />

      {/* Page Header */}
      <section className="bg-[#f8fafc] py-14 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0e2a47]">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
              Find clear answers to common questions about statutory audits, Nigerian tax compliance, FRC regulations, accounting software setups, and working with Daniel Isibor & Co.
            </p>
          </div>
        </div>
      </section>

      {/* Main FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Answer-first summary block */}
          <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl mb-12">
            <p className="text-sm sm:text-base text-[#0e2a47] leading-relaxed font-medium">
              <strong>Daniel Isibor & Co (Chartered Accountants)</strong> is an FRC-registered audit practice in <strong>Abuja, Nigeria</strong>. Below are authoritative answers regarding our audit methodologies, tax management services, software implementations, and statutory compliance under Nigerian law.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS_DATA.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <h3 className="font-bold text-base text-[#0e2a47] leading-snug">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-[#143d6b] flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Direct Support Card */}
          <div className="mt-14 bg-[#0e2a47] text-white rounded-3xl p-8 sm:p-10 text-center space-y-4 shadow-xl">
            <h4 className="text-xl font-bold text-white">
              Have a Specific Question Not Answered Here?
            </h4>
            <p className="text-sm text-slate-300 font-sans max-w-lg mx-auto leading-relaxed">
              Our chartered accountants in Abuja are ready to discuss your specific financial or statutory requirements.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 bg-white hover:bg-slate-100 text-[#0e2a47] font-bold text-xs uppercase tracking-wider rounded-full shadow-md transition-all"
              >
                <span>Submit An Inquiry</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href={`tel:${FIRM_INFO.phoneE164}`}
                className="inline-flex items-center justify-center px-7 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-full transition-all"
              >
                <Phone className="w-4 h-4 mr-2 text-[#3b9fe0]" />
                <span>Call {FIRM_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
