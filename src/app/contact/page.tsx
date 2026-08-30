"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building,
  ShieldCheck,
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
    <div className="flex flex-col">
      <Breadcrumbs items={[{ name: "Contact Us", url: "/contact" }]} />

      {/* Page Header */}
      <section className="bg-brand-navy text-white py-14 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-brand-cyan text-xs font-bold uppercase tracking-wider">
              <Building className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Contact Daniel Isibor & Co
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              Schedule a consultation, request an audit proposal, or speak directly with our chartered accountants at our Garki II, Abuja office.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Office Details & NAP */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-slate-200 p-8 shadow-sm space-y-6">
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-widest text-brand-navy mb-1">
                    Official Contact Information (NAP)
                  </h2>
                  <h3 className="text-xl font-bold text-slate-900">
                    Abuja Principal Office
                  </h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-navy flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900">Physical Address:</div>
                      <div className="leading-relaxed mt-0.5">
                        {FIRM_INFO.address.street}, {FIRM_INFO.address.city}, {FIRM_INFO.address.state}, Nigeria.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-navy flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900">Telephone / Direct Line:</div>
                      <a
                        href={`tel:${FIRM_INFO.phoneE164}`}
                        className="text-brand-navy font-bold hover:underline mt-0.5 block"
                      >
                        {FIRM_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-navy flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900">Official Email:</div>
                      <a
                        href={`mailto:${FIRM_INFO.email}`}
                        className="text-brand-navy hover:underline mt-0.5 block"
                      >
                        {FIRM_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-navy flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900">Office Working Hours:</div>
                      <div className="mt-0.5">Monday – Friday: 8:00 AM – 5:00 PM</div>
                      <div className="text-[11px] text-slate-500">Closed on Weekends & Public Holidays</div>
                    </div>
                  </div>
                </div>

                {/* Google Maps link */}
                <div className="pt-4 border-t border-slate-100">
                  <a
                    href="https://maps.google.com/?q=Silverline+Plaza+Garki+II+Abuja+Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy hover:underline"
                  >
                    <span>View Silverline Plaza on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Regulatory Box */}
              <div className="bg-brand-navy text-white p-6 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-brand-cyan text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Statutory Registrations</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Registered with the Financial Reporting Council of Nigeria (FRC), the Office of the Auditor General of the Federation, ICAN, and CITN.
                </p>
              </div>
            </div>

            {/* Right Column: Inquiry / Consultation Form */}
            <div className="lg:col-span-7 bg-white border border-slate-200 p-8 sm:p-10 shadow-sm">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-navy">
                  Online Consultation Form
                </span>
                <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-2">
                  Request an Engagement or Audit Proposal
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Fill out the details below and our partners will get back to you promptly.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-emerald-900">
                    Thank You! Your Request Has Been Received.
                  </h3>
                  <p className="text-xs text-emerald-700 max-w-md mx-auto">
                    Our team at Daniel Isibor & Co will review your requirements and reach out via email ({formData.email}) or phone shortly.
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
                    className="inline-flex items-center justify-center px-5 py-2.5 bg-brand-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-cyan hover:text-brand-navy transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. John Okon"
                        className="w-full px-3.5 py-2.5 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-brand-navy"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. john@example.com"
                        className="w-full px-3.5 py-2.5 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-brand-navy"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. 0801 234 5678"
                        className="w-full px-3.5 py-2.5 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-brand-navy"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Organization / Company Name
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="e.g. Acme Enterprises Ltd"
                        className="w-full px-3.5 py-2.5 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-brand-navy"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Primary Service Required
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-brand-navy bg-white"
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
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Brief Message or Scope Description
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your organization's requirements, industry, or preferred timeline..."
                      className="w-full px-3.5 py-2.5 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-brand-navy"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-brand-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-cyan hover:text-brand-navy transition-all shadow-md"
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
