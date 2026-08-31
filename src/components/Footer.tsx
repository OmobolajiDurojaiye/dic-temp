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
    <footer className="bg-[#0e2a47] text-white border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Firm Bio */}
          <div className="space-y-4">
            <Logo light />
            <p className="text-xs leading-relaxed text-slate-300 font-sans">
              Daniel Isibor & Co (Chartered Accountants) is an accredited audit, tax, and financial advisory practice based in Abuja, Nigeria. Providing IFRS-compliant assurance, corporate tax management, and accounting software consultancy.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={FIRM_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Daniel Isibor LinkedIn Profile"
                className="h-9 w-9 flex items-center justify-center bg-white/10 hover:bg-[#3b9fe0] hover:text-white rounded-full transition-colors text-slate-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#3b9fe0] pl-2.5">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              {SERVICES_DATA.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-[#3b9fe0] transition-colors flex items-center gap-1.5 text-slate-300"
                  >
                    <ArrowRight className="w-3 h-3 text-[#3b9fe0]" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#3b9fe0] pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li>
                <Link href="/about" className="hover:text-[#3b9fe0] transition-colors flex items-center gap-1.5 text-slate-300">
                  <ArrowRight className="w-3 h-3 text-[#3b9fe0]" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-[#3b9fe0] transition-colors flex items-center gap-1.5 text-slate-300">
                  <ArrowRight className="w-3 h-3 text-[#3b9fe0]" />
                  <span>Our Team</span>
                </Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-[#3b9fe0] transition-colors flex items-center gap-1.5 text-slate-300">
                  <ArrowRight className="w-3 h-3 text-[#3b9fe0]" />
                  <span>Client Portfolio</span>
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#3b9fe0] transition-colors flex items-center gap-1.5 text-slate-300">
                  <ArrowRight className="w-3 h-3 text-[#3b9fe0]" />
                  <span>FAQ</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#3b9fe0] transition-colors flex items-center gap-1.5 text-slate-300">
                  <ArrowRight className="w-3 h-3 text-[#3b9fe0]" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Location */}
          <div className="space-y-3.5 text-xs">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#3b9fe0] pl-2.5">
              Abuja Office
            </h4>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#3b9fe0] flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed text-slate-300 font-sans">
                {FIRM_INFO.address.street}, {FIRM_INFO.address.city}, {FIRM_INFO.address.state}, Nigeria.
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#3b9fe0] flex-shrink-0" />
              <a href={`tel:${FIRM_INFO.phoneE164}`} className="hover:text-[#3b9fe0] transition-colors text-slate-200">
                {FIRM_INFO.phone}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#3b9fe0] flex-shrink-0" />
              <a href={`mailto:${FIRM_INFO.email}`} className="hover:text-[#3b9fe0] transition-colors text-slate-200">
                {FIRM_INFO.email}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#3b9fe0] flex-shrink-0" />
              <span className="text-slate-300">Mon – Fri: 8:00 AM – 5:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-slate-800 bg-[#071626] py-6 px-4 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Daniel Isibor & Co (Chartered Accountants). All Rights Reserved.</span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span>
              Built by{" "}
              <a
                href="https://www.bolaji.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3b9fe0] hover:text-white transition-colors underline"
              >
                Bolaji
              </a>
            </span>
          </div>
          <div className="flex items-center gap-2 flex-wrap text-[11px] text-slate-400">
            <span>FRC Registered</span>
            <span>•</span>
            <span>Auditor General of Federation</span>
            <span>•</span>
            <span>ICAN & CITN Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
