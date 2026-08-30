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
  ShieldCheck,
  FileSearch,
  Calculator,
  Briefcase,
  Info,
  FileText,
  Clock
} from "lucide-react";
import Logo from "./Logo";
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

  const navLinks = [
    { name: "About Us", href: "/about" },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true
    },
    { name: "Our Team", href: "/team" },
    { name: "Clients", href: "/clients" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" }
  ];

  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case "audit-and-assurance":
        return <ShieldCheck className="w-4 h-4 text-brand-navy" />;
      case "external-audit":
        return <FileSearch className="w-4 h-4 text-brand-navy" />;
      case "tax-management-and-advisory":
        return <Calculator className="w-4 h-4 text-brand-navy" />;
      case "accounting-software-consultancy":
        return <Briefcase className="w-4 h-4 text-brand-navy" />;
      case "special-purpose-audit":
        return <Info className="w-4 h-4 text-brand-navy" />;
      case "financial-reporting":
        return <FileText className="w-4 h-4 text-brand-navy" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-brand-navy" />;
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      {/* Top micro bar for Trust & Direct Contact */}
      <div className="bg-brand-navy text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-slate-300 font-medium">
              <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
              Garki II, Abuja, Nigeria
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-brand-cyan" />
              Mon – Fri: 8:00 AM – 5:00 PM
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={`tel:${FIRM_INFO.phoneE164}`}
              className="inline-flex items-center gap-1.5 hover:text-brand-cyan transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-cyan" />
              <span>{FIRM_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${FIRM_INFO.email}`}
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-brand-cyan transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-cyan" />
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
          <nav className="hidden lg:flex items-center space-x-1 font-medium text-sm text-slate-700">
            <Link
              href="/"
              className={`px-3 py-2 transition-colors ${
                pathname === "/" ? "text-brand-navy font-bold" : "hover:text-brand-navy"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 transition-colors ${
                pathname === "/about" ? "text-brand-navy font-bold" : "hover:text-brand-navy"
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
                className={`px-3 py-2 inline-flex items-center gap-1 transition-colors ${
                  pathname.startsWith("/services") ? "text-brand-navy font-bold" : "hover:text-brand-navy"
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180" : ""}`} />
              </Link>

              {/* Mega / Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute left-0 top-full w-80 bg-white border border-slate-200 shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-1">
                  <div className="px-4 py-2 border-b border-slate-100 bg-slate-50">
                    <Link
                      href="/services"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="text-xs font-bold uppercase tracking-wider text-brand-navy hover:underline"
                    >
                      All Services Overview &rarr;
                    </Link>
                  </div>
                  <div className="py-1">
                    {SERVICES_DATA.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="flex items-start gap-3 px-4 py-2.5 hover:bg-slate-50 text-slate-700 hover:text-brand-navy transition-colors"
                      >
                        <div className="mt-0.5 p-1 rounded bg-slate-100">{getServiceIcon(service.slug)}</div>
                        <div>
                          <div className="text-xs font-bold">{service.title}</div>
                          <div className="text-[11px] text-slate-500 line-clamp-1">{service.shortSummary}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/team"
              className={`px-3 py-2 transition-colors ${
                pathname.startsWith("/team") ? "text-brand-navy font-bold" : "hover:text-brand-navy"
              }`}
            >
              Our Team
            </Link>

            <Link
              href="/clients"
              className={`px-3 py-2 transition-colors ${
                pathname === "/clients" ? "text-brand-navy font-bold" : "hover:text-brand-navy"
              }`}
            >
              Clients
            </Link>

            <Link
              href="/faq"
              className={`px-3 py-2 transition-colors ${
                pathname === "/faq" ? "text-brand-navy font-bold" : "hover:text-brand-navy"
              }`}
            >
              FAQ
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 transition-colors ${
                pathname === "/contact" ? "text-brand-navy font-bold" : "hover:text-brand-navy"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Consultation Action */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-brand-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-cyan hover:text-brand-navy transition-all shadow-sm"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-brand-navy transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-lg">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 text-sm font-medium ${
              pathname === "/" ? "text-brand-navy font-bold bg-slate-50" : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 text-sm font-medium ${
              pathname === "/about" ? "text-brand-navy font-bold bg-slate-50" : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            About Us
          </Link>

          {/* Mobile Services Accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex justify-between items-center px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>

            {mobileServicesOpen && (
              <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50 border-l-2 border-brand-navy my-1">
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-2 py-1.5 text-xs font-bold text-brand-navy"
                >
                  All Services Index
                </Link>
                {SERVICES_DATA.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-2 py-1.5 text-xs text-slate-600 hover:text-brand-navy"
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
            className={`block px-3 py-2.5 text-sm font-medium ${
              pathname.startsWith("/team") ? "text-brand-navy font-bold bg-slate-50" : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            Our Team
          </Link>

          <Link
            href="/clients"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 text-sm font-medium ${
              pathname === "/clients" ? "text-brand-navy font-bold bg-slate-50" : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            Clients
          </Link>

          <Link
            href="/faq"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 text-sm font-medium ${
              pathname === "/faq" ? "text-brand-navy font-bold bg-slate-50" : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            FAQ
          </Link>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 text-sm font-medium ${
              pathname === "/contact" ? "text-brand-navy font-bold bg-slate-50" : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            Contact
          </Link>

          <div className="pt-3 border-t border-slate-100">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full px-5 py-3 bg-brand-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-cyan hover:text-brand-navy transition-all"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
