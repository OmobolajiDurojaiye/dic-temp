"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Phone,
  Mail,
  ShieldCheck
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
    <div className="flex flex-col">
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[{ name: "FAQ", url: "/faq" }]} />

      {/* Page Header */}
      <section className="bg-brand-navy text-white py-14 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-brand-cyan text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Knowledge Base & Guidance</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              Find answers to common questions about statutory audits, Nigerian tax compliance, FRC regulations, accounting software setups, and working with Daniel Isibor & Co.
            </p>
          </div>
        </div>
      </section>

      {/* Main FAQ Accordion */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Answer-first summary block */}
          <div className="p-6 bg-white border-l-4 border-brand-navy shadow-sm mb-10">
            <p className="text-sm text-slate-800 leading-relaxed font-medium">
              <strong>Daniel Isibor & Co (Chartered Accountants)</strong> is an FRC-registered audit practice in <strong>Abuja, Nigeria</strong>. Below are authoritative answers regarding our audit methodologies, tax management services, software implementations, and statutory compliance under Nigerian law.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS_DATA.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200 shadow-sm transition-all overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-brand-navy">
                        0{index + 1}.
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-brand-navy flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 bg-slate-50/50 animate-in fade-in">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Direct Support Card */}
          <div className="mt-12 bg-white border border-slate-200 p-8 text-center space-y-4 shadow-sm">
            <h4 className="text-lg font-bold text-slate-900">
              Have a Specific Question Not Answered Here?
            </h4>
            <p className="text-xs text-slate-600 max-w-lg mx-auto">
              Our chartered accountants are ready to discuss your specific financial or compliance requirements.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-cyan hover:text-brand-navy transition-all"
              >
                <span>Submit An Inquiry</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href={`tel:${FIRM_INFO.phoneE164}`}
                className="inline-flex items-center justify-center px-6 py-3 bg-slate-100 text-slate-800 text-xs font-bold tracking-wider hover:bg-slate-200 transition-all"
              >
                <Phone className="w-4 h-4 mr-2 text-brand-navy" />
                <span>Call {FIRM_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
