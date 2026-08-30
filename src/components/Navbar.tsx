"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  ArrowRight
} from "lucide-react";
import Logo from "./Logo";
import { FIRM_INFO, SERVICES_DATA } from "@/data/firmData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      {/* Top micro bar in Deep Navy */}
      <div className="bg-[#0e2a47] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          <div className="flex items-center gap-4 sm:gap-6 text-slate-300 text-[11px]">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#3b9fe0]" />
              Silverline Plaza, Garki II, Abuja
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5">
              Mon – Fri: 8:00 AM – 5:00 PM
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 text-[11px]">
            <a
              href={`tel:${FIRM_INFO.phoneE164}`}
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#3b9fe0]" />
              <span className="font-mono">{FIRM_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${FIRM_INFO.email}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#3b9fe0]" />
              <span>{FIRM_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Real DIC Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Logo className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 font-sans font-medium text-[13px] text-slate-700">
            <Link
              href="/"
              className={`transition-colors ${
                pathname === "/" ? "text-[#143d6b] font-bold" : "hover:text-[#143d6b]"
              }`}
            >
              Home
            </Link>

            {/* Services with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                href="/services"
                className={`inline-flex items-center gap-1 transition-colors ${
                  pathname.startsWith("/services") ? "text-[#143d6b] font-bold" : "hover:text-[#143d6b]"
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180" : ""}`} />
              </Link>

              {/* Dropdown */}
              {servicesDropdownOpen && (
                <div className="absolute left-0 top-full w-80 bg-white border border-slate-100 shadow-xl py-2 z-50 rounded-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-2 border-b border-slate-100 bg-slate-50 rounded-t-2xl">
                    <Link
                      href="/services"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="text-xs font-bold text-[#143d6b] hover:text-[#2b70c9] flex items-center justify-between"
                    >
                      <span>All Services Overview</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                  <div className="py-1">
                    {SERVICES_DATA.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="block px-4 py-2.5 hover:bg-slate-50 text-slate-800 transition-colors border-b border-slate-50 last:border-0"
                      >
                        <div className="text-xs font-bold text-[#0e2a47]">{service.title}</div>
                        <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{service.shortSummary}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`transition-colors ${
                pathname === "/about" ? "text-[#143d6b] font-bold" : "hover:text-[#143d6b]"
              }`}
            >
              About
            </Link>

            <Link
              href="/team"
              className={`transition-colors ${
                pathname.startsWith("/team") ? "text-[#143d6b] font-bold" : "hover:text-[#143d6b]"
              }`}
            >
              Our Team
            </Link>

            <Link
              href="/clients"
              className={`transition-colors ${
                pathname === "/clients" ? "text-[#143d6b] font-bold" : "hover:text-[#143d6b]"
              }`}
            >
              Clients
            </Link>

            <Link
              href="/faq"
              className={`transition-colors ${
                pathname === "/faq" ? "text-[#143d6b] font-bold" : "hover:text-[#143d6b]"
              }`}
            >
              FAQ
            </Link>

            <Link
              href="/contact"
              className={`transition-colors ${
                pathname === "/contact" ? "text-[#143d6b] font-bold" : "hover:text-[#143d6b]"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right Phone / Consultation CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${FIRM_INFO.phoneE164}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0e2a47] hover:bg-[#143d6b] text-white text-xs font-semibold rounded-full transition-all shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#3b9fe0]" />
              <span>{FIRM_INFO.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#143d6b] transition-colors rounded-lg"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-in fade-in duration-200">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3.5 py-2.5 text-xs font-semibold rounded-xl ${
              pathname === "/" ? "text-[#0e2a47] font-bold bg-slate-100" : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            Home
          </Link>

          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex justify-between items-center px-3.5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded-xl"
            >
              <span>Services</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>

            {mobileServicesOpen && (
              <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50 rounded-xl my-1 border-l-2 border-[#143d6b]">
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-2 py-1.5 text-xs font-bold text-[#0e2a47]"
                >
                  All Services Overview &rarr;
                </Link>
                {SERVICES_DATA.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-2 py-1.5 text-[11px] text-slate-600 hover:text-[#0e2a47]"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3.5 py-2.5 text-xs font-semibold rounded-xl ${
              pathname === "/about" ? "text-[#0e2a47] font-bold bg-slate-100" : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            About Us
          </Link>

          <Link
            href="/team"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3.5 py-2.5 text-xs font-semibold rounded-xl ${
              pathname.startsWith("/team") ? "text-[#0e2a47] font-bold bg-slate-100" : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            Our Team
          </Link>

          <Link
            href="/clients"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3.5 py-2.5 text-xs font-semibold rounded-xl ${
              pathname === "/clients" ? "text-[#0e2a47] font-bold bg-slate-100" : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            Clients
          </Link>

          <Link
            href="/faq"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3.5 py-2.5 text-xs font-semibold rounded-xl ${
              pathname === "/faq" ? "text-[#0e2a47] font-bold bg-slate-100" : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            FAQ
          </Link>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3.5 py-2.5 text-xs font-semibold rounded-xl ${
              pathname === "/contact" ? "text-[#0e2a47] font-bold bg-slate-100" : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            Contact
          </Link>

          <div className="pt-3 border-t border-slate-100">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full px-5 py-3 bg-[#0e2a47] text-white text-xs font-semibold uppercase tracking-wider rounded-xl shadow-sm"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
