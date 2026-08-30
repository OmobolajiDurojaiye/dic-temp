import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Linkedin
} from "lucide-react";
import Logo from "./Logo";
import { FIRM_INFO, SERVICES_DATA } from "@/data/firmData";

export default function Footer() {
  return (
    <footer className="bg-[#0B1E3D] text-[#F4F8FB] border-t border-white/15">
      {/* Regulatory Accreditation Cell Table Bar */}
      <div className="border-b border-white/10 bg-[#07142A] py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs font-bold text-[#3B9FE0] tracking-wider uppercase">
            Statutory & Professional Accreditations
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 font-mono text-[11px] text-slate-300">
            <span className="px-3 py-1.5 bg-white/5 border border-white/15 rounded-[4px]">
              FRC Registered (Financial Reporting Council of Nigeria)
            </span>
            <span className="px-3 py-1.5 bg-white/5 border border-white/15 rounded-[4px]">
              Auditor General of the Federation Registered
            </span>
            <span className="px-3 py-1.5 bg-white/5 border border-white/15 rounded-[4px]">
              ICAN & CITN Certified
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Firm Bio */}
          <div className="space-y-4">
            <Logo light className="h-9 w-9" />
            <p className="text-xs leading-relaxed text-slate-300 font-sans">
              Daniel Isibor & Co (Chartered Accountants) is an accredited audit, tax, and financial advisory practice based in Abuja, Nigeria. We provide IFRS-compliant assurance, corporate tax management, and accounting software consultancy.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={FIRM_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Daniel Isibor LinkedIn Profile"
                className="h-8 w-8 flex items-center justify-center bg-white/10 hover:bg-[#3B9FE0] hover:text-white border border-white/20 transition-colors text-slate-200 rounded-[4px]"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div>
            <h4 className="font-sans text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#3B9FE0] pl-2.5">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              {SERVICES_DATA.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-[#3B9FE0] transition-colors flex items-center gap-1.5 text-slate-300"
                  >
                    <ArrowRight className="w-3 h-3 text-[#3B9FE0]" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="font-sans text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#3B9FE0] pl-2.5">
              Practice Overview
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li>
                <Link href="/about" className="hover:text-[#3B9FE0] transition-colors flex items-center gap-1.5 text-slate-300">
                  <ArrowRight className="w-3 h-3 text-[#3B9FE0]" />
                  <span>About Our Firm</span>
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-[#3B9FE0] transition-colors flex items-center gap-1.5 text-slate-300">
                  <ArrowRight className="w-3 h-3 text-[#3B9FE0]" />
                  <span>Key Drivers & Leadership</span>
                </Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-[#3B9FE0] transition-colors flex items-center gap-1.5 text-slate-300">
                  <ArrowRight className="w-3 h-3 text-[#3B9FE0]" />
                  <span>Client Portfolio & Sectors</span>
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#3B9FE0] transition-colors flex items-center gap-1.5 text-slate-300">
                  <ArrowRight className="w-3 h-3 text-[#3B9FE0]" />
                  <span>Frequently Asked Questions</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#3B9FE0] transition-colors flex items-center gap-1.5 text-slate-300">
                  <ArrowRight className="w-3 h-3 text-[#3B9FE0]" />
                  <span>Contact & Office Location</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Location */}
          <div className="space-y-3.5 text-xs">
            <h4 className="font-sans text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#3B9FE0] pl-2.5">
              Abuja Office
            </h4>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#3B9FE0] flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed text-slate-300 font-sans">
                {FIRM_INFO.address.street}, {FIRM_INFO.address.city}, {FIRM_INFO.address.state}, Nigeria.
              </span>
            </div>
            <div className="flex items-center gap-2.5 font-mono text-[11px]">
              <Phone className="w-4 h-4 text-[#3B9FE0] flex-shrink-0" />
              <a href={`tel:${FIRM_INFO.phoneE164}`} className="hover:text-[#3B9FE0] transition-colors text-slate-200">
                {FIRM_INFO.phone}
              </a>
            </div>
            <div className="flex items-center gap-2.5 font-mono text-[11px]">
              <Mail className="w-4 h-4 text-[#3B9FE0] flex-shrink-0" />
              <a href={`mailto:${FIRM_INFO.email}`} className="hover:text-[#3B9FE0] transition-colors text-slate-200">
                {FIRM_INFO.email}
              </a>
            </div>
            <div className="flex items-center gap-2.5 font-mono text-[11px]">
              <Clock className="w-4 h-4 text-[#3B9FE0] flex-shrink-0" />
              <span className="text-slate-300">Mon – Fri: 8:00 AM – 5:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white/10 bg-[#07142A] py-5 px-4 font-mono text-[11px] text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>© {new Date().getFullYear()} Daniel Isibor & Co (Chartered Accountants). All Rights Reserved.</p>
          <p className="text-[10px] text-slate-500">
            FRC Reg. • Office of the Auditor General of the Federation • ICAN • CITN
          </p>
        </div>
      </div>
    </footer>
  );
}
