import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Shield,
  Award,
  ArrowRight,
  ExternalLink,
  Linkedin
} from "lucide-react";
import Logo from "./Logo";
import { FIRM_INFO, SERVICES_DATA } from "@/data/firmData";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-300 border-t border-slate-800">
      {/* Regulatory Accreditation Bar */}
      <div className="border-b border-slate-800 bg-slate-950/40 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-brand-cyan" />
            <span className="text-xs font-semibold text-slate-200 tracking-wide uppercase">
              Statutory & Professional Accreditations
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-medium text-slate-300">
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-none">
              FRC Registered (Financial Reporting Council of Nigeria)
            </span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-none">
              Auditor General of the Federation Registered
            </span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-none">
              ICAN & CITN Certified
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Firm Bio & Creds */}
          <div className="space-y-4">
            <Logo light className="h-10 w-10" />
            <p className="text-xs leading-relaxed text-slate-400">
              Daniel Isibor & Co (Chartered Accountants) is a licensed audit and advisory firm in Abuja, Nigeria. We provide high-quality auditing, corporate taxation, forensic review, and accounting software consultancy tailored for sustainable business growth.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={FIRM_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Daniel Isibor LinkedIn Profile"
                className="h-8 w-8 flex items-center justify-center bg-white/10 hover:bg-brand-cyan hover:text-brand-navy rounded-none transition-colors text-slate-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-brand-cyan pl-2">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {SERVICES_DATA.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-brand-cyan transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-brand-cyan/60" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links & Industries */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-brand-cyan pl-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/about" className="hover:text-brand-cyan transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-brand-cyan/60" />
                  <span>About Our Firm</span>
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-brand-cyan transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-brand-cyan/60" />
                  <span>Key Drivers & Leadership</span>
                </Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-brand-cyan transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-brand-cyan/60" />
                  <span>Client Portfolio & Sectors</span>
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-brand-cyan transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-brand-cyan/60" />
                  <span>Frequently Asked Questions</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-cyan transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-brand-cyan/60" />
                  <span>Contact & Location</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Location */}
          <div className="space-y-3.5 text-xs">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-brand-cyan pl-2">
              Abuja Office
            </h4>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed text-slate-300">
                {FIRM_INFO.address.street}, {FIRM_INFO.address.city}, {FIRM_INFO.address.state}, Nigeria.
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-brand-cyan flex-shrink-0" />
              <a href={`tel:${FIRM_INFO.phoneE164}`} className="hover:text-brand-cyan transition-colors font-medium">
                {FIRM_INFO.phone}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-brand-cyan flex-shrink-0" />
              <a href={`mailto:${FIRM_INFO.email}`} className="hover:text-brand-cyan transition-colors">
                {FIRM_INFO.email}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-brand-cyan flex-shrink-0" />
              <span>Monday – Friday: 8:00 AM – 5:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Disclaimer */}
      <div className="border-t border-slate-800 bg-slate-950 py-5 px-4 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>© {new Date().getFullYear()} Daniel Isibor & Co (Chartered Accountants). All Rights Reserved.</p>
          <p className="text-[11px] text-slate-500">
            Registered with CAC, FRC, and the Office of the Auditor General of the Federation.
          </p>
        </div>
      </div>
    </footer>
  );
}
