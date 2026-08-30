"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight
} from "lucide-react";
import Logo from "./Logo";
import TickMark from "./TickMark";
import { FIRM_INFO, SERVICES_DATA } from "@/data/firmData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#F6F2E9] border-b border-[#5B6B7F]/20">
      {/* Top micro bar for Trust & Direct Contact in Ink Navy */}
      <div className="bg-[#101F38] text-white text-xs py-2 px-4 border-b border-[#B08D3E]/30">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap font-mono text-[11px]">
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#B08D3E]" />
              Garki II, Abuja, Nigeria
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#B08D3E]" />
              Mon – Fri: 8:00 AM – 5:00 PM
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 font-mono text-[11px]">
            <a
              href={`tel:${FIRM_INFO.phoneE164}`}
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-[#B08D3E] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#B08D3E]" />
              <span>{FIRM_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${FIRM_INFO.email}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-slate-200 hover:text-[#B08D3E] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#B08D3E]" />
              <span>{FIRM_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-200 ${isScrolled ? "h-16" : "h-20"}`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Logo className={`transition-all duration-200 ${isScrolled ? "h-8 w-8" : "h-9 w-9"}`} />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 font-sans font-medium text-xs text-[#101F38]">
            <Link
              href="/"
              className={`px-3 py-2 transition-colors uppercase tracking-wider ${
                pathname === "/" ? "text-[#101F38] font-bold border-b-2 border-[#B08D3E]" : "hover:text-[#B08D3E]"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 transition-colors uppercase tracking-wider ${
                pathname === "/about" ? "text-[#101F38] font-bold border-b-2 border-[#B08D3E]" : "hover:text-[#B08D3E]"
              }`}
            >
              About Us
            </Link>

            {/* Services with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                href="/services"
                className={`px-3 py-2 inline-flex items-center gap-1 transition-colors uppercase tracking-wider ${
                  pathname.startsWith("/services") ? "text-[#101F38] font-bold border-b-2 border-[#B08D3E]" : "hover:text-[#B08D3E]"
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180" : ""}`} />
              </Link>

              {/* Mega Dropdown */}
              {servicesDropdownOpen && (
                <div className="absolute left-0 top-full w-84 bg-white border border-[#B08D3E]/30 shadow-lg py-2 z-50 ledger-grid-bg">
                  <div className="px-4 py-2 border-b border-[#5B6B7F]/15 bg-[#F6F2E9]">
                    <Link
                      href="/services"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#101F38] hover:text-[#B08D3E] flex items-center justify-between"
                    >
                      <span>All Services Directory</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="py-1">
                    {SERVICES_DATA.map((service, index) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="flex items-start gap-3 px-4 py-2.5 hover:bg-[#F6F2E9] text-[#101F38] transition-colors border-b border-[#5B6B7F]/5 last:border-0"
                      >
                        <span className="font-mono text-[10px] text-[#B08D3E] font-bold mt-0.5">0{index + 1}.</span>
                        <div>
                          <div className="text-xs font-serif font-bold text-[#101F38]">{service.title}</div>
                          <div className="text-[10px] font-sans text-[#5B6B7F] line-clamp-1">{service.shortSummary}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/team"
              className={`px-3 py-2 transition-colors uppercase tracking-wider ${
                pathname.startsWith("/team") ? "text-[#101F38] font-bold border-b-2 border-[#B08D3E]" : "hover:text-[#B08D3E]"
              }`}
            >
              Our Team
            </Link>

            <Link
              href="/clients"
              className={`px-3 py-2 transition-colors uppercase tracking-wider ${
                pathname === "/clients" ? "text-[#101F38] font-bold border-b-2 border-[#B08D3E]" : "hover:text-[#B08D3E]"
              }`}
            >
              Clients
            </Link>

            <Link
              href="/faq"
              className={`px-3 py-2 transition-colors uppercase tracking-wider ${
                pathname === "/faq" ? "text-[#101F38] font-bold border-b-2 border-[#B08D3E]" : "hover:text-[#B08D3E]"
              }`}
            >
              FAQ
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 transition-colors uppercase tracking-wider ${
                pathname === "/contact" ? "text-[#101F38] font-bold border-b-2 border-[#B08D3E]" : "hover:text-[#B08D3E]"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Consultation Action */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-[#101F38] text-white border border-[#B08D3E]/60 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#B08D3E] hover:text-[#101F38] transition-all"
            >
              <span>Book Consultation</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#101F38] hover:text-[#B08D3E] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#5B6B7F]/20 px-4 pt-2 pb-6 space-y-2 shadow-lg">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 text-xs font-mono uppercase tracking-wider ${
              pathname === "/" ? "text-[#101F38] font-bold bg-[#F6F2E9]" : "text-[#5B6B7F] hover:bg-[#F6F2E9]"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 text-xs font-mono uppercase tracking-wider ${
              pathname === "/about" ? "text-[#101F38] font-bold bg-[#F6F2E9]" : "text-[#5B6B7F] hover:bg-[#F6F2E9]"
            }`}
          >
            About Us
          </Link>

          {/* Mobile Services Accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex justify-between items-center px-3 py-2.5 text-xs font-mono uppercase tracking-wider text-[#5B6B7F] hover:bg-[#F6F2E9]"
            >
              <span>Services</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>

            {mobileServicesOpen && (
              <div className="pl-4 pr-2 py-1 space-y-1 bg-[#F6F2E9] border-l-2 border-[#B08D3E] my-1">
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-2 py-1.5 text-xs font-bold text-[#101F38]"
                >
                  All Services Overview &rarr;
                </Link>
                {SERVICES_DATA.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-2 py-1.5 text-[11px] text-[#5B6B7F] hover:text-[#101F38]"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/team"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 text-xs font-mono uppercase tracking-wider ${
              pathname.startsWith("/team") ? "text-[#101F38] font-bold bg-[#F6F2E9]" : "text-[#5B6B7F] hover:bg-[#F6F2E9]"
            }`}
          >
            Our Team
          </Link>

          <Link
            href="/clients"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 text-xs font-mono uppercase tracking-wider ${
              pathname === "/clients" ? "text-[#101F38] font-bold bg-[#F6F2E9]" : "text-[#5B6B7F] hover:bg-[#F6F2E9]"
            }`}
          >
            Clients
          </Link>

          <Link
            href="/faq"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 text-xs font-mono uppercase tracking-wider ${
              pathname === "/faq" ? "text-[#101F38] font-bold bg-[#F6F2E9]" : "text-[#5B6B7F] hover:bg-[#F6F2E9]"
            }`}
          >
            FAQ
          </Link>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 text-xs font-mono uppercase tracking-wider ${
              pathname === "/contact" ? "text-[#101F38] font-bold bg-[#F6F2E9]" : "text-[#5B6B7F] hover:bg-[#F6F2E9]"
            }`}
          >
            Contact
          </Link>

          <div className="pt-3 border-t border-[#5B6B7F]/20">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full px-5 py-3 bg-[#101F38] text-white border border-[#B08D3E] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#B08D3E] hover:text-[#101F38] transition-all"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
