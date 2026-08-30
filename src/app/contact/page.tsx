"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ExternalLink,
  CheckCircle2
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
    <div className="flex flex-col bg-white">
      <Breadcrumbs items={[{ name: "Contact Us", url: "/contact" }]} />

      {/* Page Header */}
      <section className="bg-[#f8fafc] py-14 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0e2a47]">
              Contact Daniel Isibor & Co
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
              Schedule a consultation, request an audit proposal, or speak directly with our chartered accountants at our Garki II, Abuja office.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Office Details & NAP */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#0e2a47]">
                    Abuja Principal Office
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">Silverline Plaza, Garki II, Federal Capital Territory</p>
                </div>

                <div className="space-y-4 text-sm text-slate-600 font-sans">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#143d6b] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#0e2a47]">Physical Address:</div>
                      <div className="leading-relaxed mt-0.5">
                        {FIRM_INFO.address.street}, {FIRM_INFO.address.city}, {FIRM_INFO.address.state}, Nigeria.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#143d6b] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#0e2a47]">Telephone / Direct Line:</div>
                      <a
                        href={`tel:${FIRM_INFO.phoneE164}`}
                        className="font-mono text-[#143d6b] font-bold hover:underline mt-0.5 block"
                      >
                        {FIRM_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#143d6b] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#0e2a47]">Official Email:</div>
                      <a
                        href={`mailto:${FIRM_INFO.email}`}
                        className="text-[#143d6b] hover:underline mt-0.5 block"
                      >
                        {FIRM_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#143d6b] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#0e2a47]">Office Working Hours:</div>
                      <div className="mt-0.5">Monday – Friday: 8:00 AM – 5:00 PM</div>
                      <div className="text-xs text-slate-400 mt-0.5">Closed on Weekends & Public Holidays</div>
                    </div>
                  </div>
                </div>

                {/* Google Maps Link */}
                <div className="pt-4 border-t border-slate-100">
                  <a
                    href="https://maps.google.com/?q=Silverline+Plaza+Garki+II+Abuja+Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#143d6b] hover:underline"
                  >
                    <span>View Silverline Plaza on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Regulatory Accreditations Box */}
              <div className="bg-[#0e2a47] text-white p-7 rounded-3xl shadow-xl space-y-2">
                <div className="text-[#3b9fe0] text-xs font-bold uppercase tracking-wider">
                  Statutory Standings
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Registered with the Financial Reporting Council of Nigeria (FRC), the Office of the Auditor General of the Federation, ICAN, and CITN.
                </p>
              </div>
            </div>

            {/* Right Column: Inquiry / Consultation Form */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0e2a47] mb-2">
                  Request an Audit or Advisory Proposal
                </h2>
                <p className="text-sm text-slate-500 mb-8">
                  Provide your organization&apos;s details below and our chartered accountants will review your scope and respond promptly.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 bg-slate-50 border border-slate-200 rounded-2xl text-center space-y-4">
                  <div className="w-12 h-12 bg-[#0e2a47] text-white rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6 text-[#3b9fe0]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0e2a47]">
                    Inquiry Received Successfully
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
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
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#0e2a47] hover:bg-[#143d6b] text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0e2a47] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. John Okon"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-sm text-[#0e2a47] rounded-xl focus:outline-none focus:border-[#143d6b] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0e2a47] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. john@example.com"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-sm text-[#0e2a47] rounded-xl focus:outline-none focus:border-[#143d6b] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0e2a47] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. 0801 234 5678"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-sm text-[#0e2a47] rounded-xl focus:outline-none focus:border-[#143d6b] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0e2a47] mb-2">
                        Organization / Enterprise Name
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="e.g. Acme Enterprises Ltd"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-sm text-[#0e2a47] rounded-xl focus:outline-none focus:border-[#143d6b] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0e2a47] mb-2">
                      Primary Service Required
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-sm text-[#0e2a47] rounded-xl focus:outline-none focus:border-[#143d6b] focus:bg-white transition-colors"
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
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0e2a47] mb-2">
                      Brief Message or Scope Description
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your organization's requirements, industry, or preferred timeline..."
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-sm text-[#0e2a47] rounded-xl focus:outline-none focus:border-[#143d6b] focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#0e2a47] hover:bg-[#143d6b] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg transition-all"
                    >
                      <Send className="w-4 h-4 mr-2" />
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
