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
    <div className="flex flex-col bg-[#F4F8FB]">
      <Breadcrumbs items={[{ name: "Contact Us", url: "/contact" }]} />

      {/* Page Header - Deep Navy */}
      <section className="bg-[#0B1E3D] text-white py-14 lg:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-[#3B9FE0]/40 text-[#3B9FE0] text-[11px] font-mono font-bold uppercase tracking-wider rounded-[4px]">
              <span>Office Location & Inquiries</span>
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Contact Daniel Isibor & Co
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              Schedule a consultation, request an audit proposal, or speak directly with our chartered accountants at our Garki II, Abuja office.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 bg-[#F4F8FB] border-b border-[#5C7089]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Office Details & NAP */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flat-panel p-8 space-y-6">
                <div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#3B9FE0] block mb-1">
                    Official Practice Address
                  </span>
                  <h2 className="font-sans text-xl font-bold text-[#0B1E3D]">
                    Abuja Principal Office
                  </h2>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#5C7089] font-sans">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#3B9FE0] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#0B1E3D]">Physical Address:</div>
                      <div className="leading-relaxed mt-0.5">
                        {FIRM_INFO.address.street}, {FIRM_INFO.address.city}, {FIRM_INFO.address.state}, Nigeria.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#3B9FE0] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#0B1E3D]">Telephone / Direct Line:</div>
                      <a
                        href={`tel:${FIRM_INFO.phoneE164}`}
                        className="font-mono text-[#0B1E3D] font-bold hover:text-[#3B9FE0] mt-0.5 block"
                      >
                        {FIRM_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#3B9FE0] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#0B1E3D]">Official Email:</div>
                      <a
                        href={`mailto:${FIRM_INFO.email}`}
                        className="font-mono text-[#0B1E3D] hover:text-[#3B9FE0] mt-0.5 block"
                      >
                        {FIRM_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#3B9FE0] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#0B1E3D]">Office Working Hours:</div>
                      <div className="mt-0.5 font-mono text-xs">Monday – Friday: 8:00 AM – 5:00 PM</div>
                      <div className="text-[11px] font-mono text-[#5C7089] mt-0.5">Closed on Weekends & Public Holidays</div>
                    </div>
                  </div>
                </div>

                {/* Google Maps Link */}
                <div className="pt-4 border-t border-[#5C7089]/15">
                  <a
                    href="https://maps.google.com/?q=Silverline+Plaza+Garki+II+Abuja+Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#0B1E3D] hover:text-[#3B9FE0]"
                  >
                    <span>View Silverline Plaza on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Regulatory Accreditations Box */}
              <div className="bg-[#13294B] text-white p-6 border border-white/20 rounded-[4px] space-y-2">
                <div className="text-[#3B9FE0] text-xs font-mono font-bold uppercase tracking-wider">
                  Statutory Standings
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Registered with the Financial Reporting Council of Nigeria (FRC), the Office of the Auditor General of the Federation, ICAN, and CITN.
                </p>
              </div>
            </div>

            {/* Right Column: Inquiry / Consultation Form */}
            <div className="lg:col-span-7 flat-panel p-8 sm:p-10">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#3B9FE0]">
                  Engagement Inquiry
                </span>
                <h2 className="font-sans text-2xl font-bold text-[#0B1E3D] mt-1 mb-2">
                  Request an Audit or Advisory Proposal
                </h2>
                <p className="text-xs sm:text-sm text-[#5C7089] font-sans mb-6">
                  Provide your organization&apos;s details below and our partners will review your scope and respond promptly.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 bg-[#F4F8FB] border border-[#3B9FE0]/40 rounded-[4px] text-center space-y-4">
                  <h3 className="font-sans text-lg font-bold text-[#0B1E3D]">
                    Inquiry Received Successfully
                  </h3>
                  <p className="text-xs text-[#5C7089] font-sans max-w-md mx-auto">
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
                    className="inline-flex items-center justify-center px-5 py-2.5 bg-[#0B1E3D] text-white border border-[#3B9FE0] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#3B9FE0] transition-all rounded-[4px]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#0B1E3D] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. John Okon"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#5C7089]/30 text-xs font-sans text-[#0B1E3D] rounded-[4px] focus:outline-none focus:border-[#3B9FE0]"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#0B1E3D] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. john@example.com"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#5C7089]/30 text-xs font-sans text-[#0B1E3D] rounded-[4px] focus:outline-none focus:border-[#3B9FE0]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#0B1E3D] mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. 0801 234 5678"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#5C7089]/30 text-xs font-mono text-[#0B1E3D] rounded-[4px] focus:outline-none focus:border-[#3B9FE0]"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#0B1E3D] mb-1">
                        Organization / Enterprise Name
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="e.g. Acme Enterprises Ltd"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#5C7089]/30 text-xs font-sans text-[#0B1E3D] rounded-[4px] focus:outline-none focus:border-[#3B9FE0]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#0B1E3D] mb-1">
                      Primary Service Required
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#5C7089]/30 text-xs font-sans text-[#0B1E3D] rounded-[4px] focus:outline-none focus:border-[#3B9FE0]"
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
                    <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#0B1E3D] mb-1">
                      Brief Message or Scope Description
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your organization's requirements, industry, or preferred timeline..."
                      className="w-full px-3.5 py-2.5 bg-white border border-[#5C7089]/30 text-xs font-sans text-[#0B1E3D] rounded-[4px] focus:outline-none focus:border-[#3B9FE0]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#3B9FE0] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#0B1E3D] transition-all rounded-[4px]"
                    >
                      <Send className="w-3.5 h-3.5 mr-2" />
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
