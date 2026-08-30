"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ExternalLink
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TickMark from "@/components/TickMark";
import { FIRM_INFO, SERVICES_DATA } from "@/data/firmData";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Audit and Assurance Services",
    organization: "",
    message: ""
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col bg-[#F6F2E9]">
      <Breadcrumbs items={[{ name: "Contact Us", url: "/contact" }]} />

      {/* Page Header - Ink Navy */}
      <section className="bg-[#101F38] text-white py-14 lg:py-20 border-b border-[#B08D3E]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-[#B08D3E]/40 text-[#B08D3E] text-[11px] font-mono font-bold uppercase tracking-wider">
              <TickMark variant="rust" size="sm" />
              <span>Office Location & Inquiries</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Contact Daniel Isibor & Co
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              Schedule a consultation, request an audit proposal, or speak directly with our chartered accountants at our Garki II, Abuja office.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid - Parchment */}
      <section className="py-16 bg-[#F6F2E9] border-b border-[#5B6B7F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Office Details & NAP */}
            <div className="lg:col-span-5 space-y-6">
              <div className="brass-corner-card p-8 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-[#B08D3E] mb-1">
                    <TickMark variant="brass" size="sm" />
                    <span>Official Practice Address</span>
                  </div>
                  <h2 className="font-serif text-xl font-bold text-[#101F38]">
                    Abuja Principal Office
                  </h2>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#5B6B7F] font-sans">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#B08D3E] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-serif font-bold text-[#101F38]">Physical Address:</div>
                      <div className="leading-relaxed mt-0.5">
                        {FIRM_INFO.address.street}, {FIRM_INFO.address.city}, {FIRM_INFO.address.state}, Nigeria.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#B08D3E] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-serif font-bold text-[#101F38]">Telephone / Direct Line:</div>
                      <a
                        href={`tel:${FIRM_INFO.phoneE164}`}
                        className="font-mono text-[#101F38] font-bold hover:text-[#B08D3E] mt-0.5 block"
                      >
                        {FIRM_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#B08D3E] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-serif font-bold text-[#101F38]">Official Email:</div>
                      <a
                        href={`mailto:${FIRM_INFO.email}`}
                        className="font-mono text-[#101F38] hover:text-[#B08D3E] mt-0.5 block"
                      >
                        {FIRM_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#B08D3E] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-serif font-bold text-[#101F38]">Office Working Hours:</div>
                      <div className="mt-0.5 font-mono text-xs">Monday – Friday: 8:00 AM – 5:00 PM</div>
                      <div className="text-[11px] font-mono text-[#5B6B7F] mt-0.5">Closed on Weekends & Public Holidays</div>
                    </div>
                  </div>
                </div>

                {/* Google Maps Link */}
                <div className="pt-4 border-t border-[#5B6B7F]/15">
                  <a
                    href="https://maps.google.com/?q=Silverline+Plaza+Garki+II+Abuja+Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#101F38] hover:text-[#B08D3E]"
                  >
                    <span>View Silverline Plaza on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Regulatory Accreditations Box */}
              <div className="bg-[#101F38] text-white p-6 border border-[#B08D3E]/40 brass-corner-card !bg-[#101F38] space-y-3">
                <div className="flex items-center gap-2 text-[#B08D3E] text-xs font-mono font-bold uppercase tracking-wider">
                  <TickMark variant="rust" size="sm" />
                  <span>Statutory Registrations</span>
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Registered with the Financial Reporting Council of Nigeria (FRC), the Office of the Auditor General of the Federation, ICAN, and CITN.
                </p>
              </div>
            </div>

            {/* Right Column: Inquiry / Consultation Form */}
            <div className="lg:col-span-7 brass-corner-card p-8 sm:p-10">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#B08D3E]">
                  Engagement Inquiry
                </span>
                <h2 className="font-serif text-2xl font-bold text-[#101F38] mt-1 mb-2">
                  Request an Audit or Advisory Proposal
                </h2>
                <p className="text-xs sm:text-sm text-[#5B6B7F] font-sans mb-6">
                  Provide your organization&apos;s details below and our partners will review your scope and respond promptly.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 bg-[#F6F2E9] border border-[#B08D3E]/40 text-center space-y-4">
                  <div className="w-12 h-12 bg-[#101F38] text-[#B08D3E] flex items-center justify-center mx-auto">
                    <TickMark variant="rust" size="lg" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#101F38]">
                    Inquiry Received Successfully
                  </h3>
                  <p className="text-xs text-[#5B6B7F] font-sans max-w-md mx-auto">
                    Our chartered partners at Daniel Isibor & Co will review your requirements and reach out via email ({formData.email}) or phone shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        service: "Audit and Assurance Services",
                        organization: "",
                        message: ""
                      });
                    }}
                    className="inline-flex items-center justify-center px-5 py-2.5 bg-[#101F38] text-white border border-[#B08D3E] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#B08D3E] hover:text-[#101F38] transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#101F38] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. John Okon"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#5B6B7F]/30 text-xs font-sans text-[#101F38] focus:outline-none focus:border-[#B08D3E]"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#101F38] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. john@example.com"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#5B6B7F]/30 text-xs font-sans text-[#101F38] focus:outline-none focus:border-[#B08D3E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#101F38] mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. 0801 234 5678"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#5B6B7F]/30 text-xs font-mono text-[#101F38] focus:outline-none focus:border-[#B08D3E]"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#101F38] mb-1">
                        Organization / Enterprise Name
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="e.g. Acme Enterprises Ltd"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#5B6B7F]/30 text-xs font-sans text-[#101F38] focus:outline-none focus:border-[#B08D3E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#101F38] mb-1">
                      Primary Service Required
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#5B6B7F]/30 text-xs font-sans text-[#101F38] focus:outline-none focus:border-[#B08D3E]"
                    >
                      {SERVICES_DATA.map((s) => (
                        <option key={s.slug} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="General Financial Advisory">Other / General Financial Advisory</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#101F38] mb-1">
                      Brief Message or Scope Description
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your organization's requirements, industry, or preferred timeline..."
                      className="w-full px-3.5 py-2.5 bg-white border border-[#5B6B7F]/30 text-xs font-sans text-[#101F38] focus:outline-none focus:border-[#B08D3E]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#101F38] text-white border border-[#B08D3E] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#B08D3E] hover:text-[#101F38] transition-all shadow-md"
                    >
                      <Send className="w-3.5 h-3.5 mr-2 text-[#B08D3E]" />
                      <span>Submit Request</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
