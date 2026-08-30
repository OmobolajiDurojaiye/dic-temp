import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight
} from "lucide-react";
import { FIRM_INFO, SERVICES_DATA, TEAM_DATA, CLIENTS_DATA, FAQS_DATA } from "@/data/firmData";
import ClientLogo from "@/components/ClientLogo";
import ClientMarquee from "@/components/ClientMarquee";

export default function HomePage() {
  const principalPartner = TEAM_DATA[0];

  return (
    <div className="flex flex-col bg-white">
      {/* 1. HERO SECTION - Clean, High-Contrast Modern Layout */}
      <section className="relative bg-[#f8fafc] py-12 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Text */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0e2a47] leading-[1.15]">
                Smart Accounting for Growing Businesses
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed max-w-xl">
                Reliable financial expertise for organizations, businesses, and institutions — ensuring statutory compliance, tax efficiency, and sustainable growth every step of the way.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-[#0e2a47] hover:bg-[#143d6b] text-white text-sm font-semibold rounded-full transition-all shadow-md"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-sm font-semibold rounded-full transition-all shadow-sm"
                >
                  <span>Explore Services</span>
                </Link>
              </div>

              {/* Social Proof Avatar Stack */}
              <div className="pt-4 flex items-center gap-4">
                <div className="inline-flex items-center gap-3 bg-white px-4 py-2.5 rounded-full border border-slate-200 shadow-sm">
                  <div className="flex -space-x-2 overflow-hidden">
                    <div className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                      <Image
                        src="/images/stock/woman-professional.jpg"
                        alt="Client representative"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                      <Image
                        src="/images/stock/man-suit.jpg"
                        alt="Corporate client"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                      <Image
                        src="/images/Mr Daniel.jpeg"
                        alt="Mr Daniel Isibor"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-xs text-slate-700">
                    <span className="font-bold text-[#0e2a47]">TRUSTED BY</span>{" "}
                    <span className="font-bold text-[#143d6b]">50+</span> Enterprises & MDAs
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card with Accent Button */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  src="/images/stock/team-meeting.jpg"
                  alt="Daniel Isibor & Co professional accounting team in meeting"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Floating Deep Blue Accent Arrow Button */}
              <Link
                href="/services"
                className="absolute -bottom-5 left-8 w-14 h-14 bg-[#0e2a47] hover:bg-[#143d6b] text-white flex items-center justify-center rounded-2xl shadow-xl transition-transform hover:scale-105"
                aria-label="View our services"
              >
                <ArrowUpRight className="w-7 h-7 stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INFINITE MOVING CLIENT LOGOS MARQUEE */}
      <ClientMarquee />

      {/* 3. SERVICES SECTION - Deep Blue Background with Rounded White Cards */}
      <section className="bg-[#143d6b] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Comprehensive Accounting Solutions
            </h2>
            <p className="mt-3 text-base text-blue-100 font-sans">
              Trusted expertise to keep your finances clear, compliant, and stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.slice(0, 3).map((service) => (
              <div
                key={service.slug}
                className="bg-white text-[#0e2a47] p-8 rounded-3xl flex flex-col justify-between shadow-xl hover:-translate-y-1 transition-all duration-200"
              >
                <div>
                  <h3 className="font-bold text-xl leading-snug mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                    {service.shortSummary}
                  </p>
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center justify-center w-full py-3 px-4 bg-[#0e2a47] hover:bg-[#143d6b] text-white text-xs font-semibold rounded-xl transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>
            ))}

            {/* 4th Card: Call to Action Card */}
            <div className="bg-white text-[#0e2a47] p-8 rounded-3xl flex flex-col justify-between shadow-xl">
              <div>
                <h3 className="font-bold text-xl leading-snug mb-3">
                  Get a Personalized Proposal
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                  Tell us about your organization and financial consulting needs, and we&apos;ll provide a customized statutory audit or tax plan.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full py-3 px-4 bg-[#0e2a47] hover:bg-[#143d6b] text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
              >
                <span>Request Proposal</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5 stroke-[2.5]" />
              </Link>
            </div>
          </div>

          {/* Remaining 3 Services in a 3-col grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            {SERVICES_DATA.slice(3).map((service) => (
              <div
                key={service.slug}
                className="bg-white text-[#0e2a47] p-8 rounded-3xl flex flex-col justify-between shadow-xl hover:-translate-y-1 transition-all duration-200"
              >
                <div>
                  <h3 className="font-bold text-lg leading-snug mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-5">
                    {service.shortSummary}
                  </p>
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-[#0e2a47] hover:bg-[#143d6b] text-white text-xs font-semibold rounded-xl transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "YOUR TRUSTED ACCOUNTING PARTNER" */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Photo */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[3/4] bg-slate-100">
                <Image
                  src="/images/stock/team-discussion.jpg"
                  alt="Daniel Isibor & Co chartered accounting consultants"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Story & Feature Cards */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0e2a47]">
                Your Trusted Accounting Partner
              </h2>
              <p className="text-base sm:text-lg font-medium text-[#143d6b]">
                Experienced and personal, we deliver reliable, stress-free accounting for organizations and businesses.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                For over 15 years, Daniel Isibor & Co (Chartered Accountants) has provided accurate, timely, and personalized accounting, auditing, and tax advisory services to businesses across Abuja and Nigeria. Our mission is to simplify financial compliance so you can focus on growth.
              </p>

              {/* 3 Feature Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-[#f8fafc] border border-slate-100 p-5 rounded-2xl">
                  <h4 className="font-bold text-sm text-[#0e2a47] mb-1">
                    Experienced & Reliable
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Over 15 years of seasoned audit practice delivering trusted results.
                  </p>
                </div>

                <div className="bg-[#f8fafc] border border-slate-100 p-5 rounded-2xl">
                  <h4 className="font-bold text-sm text-[#0e2a47] mb-1">
                    Personalized Approach
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Tailored financial solutions structured around your business goals.
                  </p>
                </div>

                <div className="bg-[#f8fafc] border border-slate-100 p-5 rounded-2xl">
                  <h4 className="font-bold text-sm text-[#0e2a47] mb-1">
                    Stress-Free Compliance
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Full regulatory adherence under FRC, ICAN, and CAMA 2020.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR IMPACT & STATS SECTION */}
      <section className="bg-[#0e2a47] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Our Track Record & Impact
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Helping businesses grow smarter, one number at a time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center">
              <div className="text-4xl font-black text-white font-mono">15+</div>
              <div className="text-sm font-medium text-[#3b9fe0] mt-2">Years of Practice</div>
              <p className="text-xs text-slate-300 mt-1">Seasoned auditing experience across Nigeria.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center">
              <div className="text-4xl font-black text-white font-mono">100%</div>
              <div className="text-sm font-medium text-[#3b9fe0] mt-2">IFRS & CAMA Compliant</div>
              <p className="text-xs text-slate-300 mt-1">Rigorous statutory reporting accuracy.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center">
              <div className="text-4xl font-black text-white font-mono">50+</div>
              <div className="text-sm font-medium text-[#3b9fe0] mt-2">Client Organizations</div>
              <p className="text-xs text-slate-300 mt-1">Government MDAs, banks, and SMEs.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center">
              <div className="text-4xl font-black text-white font-mono">FRC</div>
              <div className="text-sm font-medium text-[#3b9fe0] mt-2">Registered Firm</div>
              <p className="text-xs text-slate-300 mt-1">Office of the Auditor General recognized.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TEAM SPOTLIGHT */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0e2a47] tracking-tight">
                Meet Our Key Drivers
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-xl">
                Qualified chartered accountants with ICAN, CITN, CIBN, and ACFE credentials leading your engagements.
              </p>
            </div>
            <Link
              href="/team"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#143d6b] hover:text-[#2b70c9] transition-colors"
            >
              <span>View All Partners & Managers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_DATA.slice(0, 3).map((member) => (
              <div
                key={member.slug}
                className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-slate-100">
                    <Image
                      src={member.photoUrl && member.photoUrl.trim() !== "" ? member.photoUrl : "/images/stock/man-suit.jpg"}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <h3 className="font-bold text-lg text-[#0e2a47]">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#143d6b] mt-0.5">
                    {member.role} ({member.credentials})
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed mt-3">
                    {member.shortBio}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100">
                  <Link
                    href={`/team/${member.slug}`}
                    className="text-xs font-semibold text-[#143d6b] hover:text-[#2b70c9] inline-flex items-center gap-1"
                  >
                    <span>View Full Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CLIENT PORTFOLIO - Clean Equal Grid */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-[#0e2a47] tracking-tight">
              Trusted by Organizations Across Nigeria
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Government MDAs, microfinance banks, schools, engineering enterprises, and commercial corporations.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {CLIENTS_DATA.slice(0, 8).map((client) => (
              <ClientLogo
                key={client.name}
                name={client.name}
                category={client.category}
                logoUrl={client.logoUrl}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/clients"
              className="inline-flex items-center justify-center px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-full transition-colors"
            >
              <span>View Full Client Portfolio</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-[#f8fafc] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Photo */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] sm:aspect-square bg-slate-100">
                <Image
                  src="/images/stock/team-collaboration.jpg"
                  alt="Daniel Isibor & Co team addressing client questions"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-6 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-[#0e2a47] text-sm">Have more questions?</h4>
                <p className="text-xs text-slate-500 mt-1">Our certified team in Abuja is ready to assist your business.</p>
                <Link
                  href="/contact"
                  className="mt-3 inline-flex items-center text-xs font-bold text-[#143d6b] hover:text-[#2b70c9]"
                >
                  <span>Contact our accountants &rarr;</span>
                </Link>
              </div>
            </div>

            {/* Right Accordion List */}
            <div className="lg:col-span-7 space-y-4">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-[#0e2a47] tracking-tight">
                  Frequently Asked Questions
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Clear answers regarding our statutory audits, tax services, and accounting systems.
                </p>
              </div>

              {FAQS_DATA.slice(0, 5).map((faq, index) => (
                <div key={index} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
                  <h3 className="font-bold text-[#0e2a47] text-base mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. "BOOK A FREE CONSULTATION TODAY" BANNER */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-[#0e2a47] text-white rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden text-center shadow-xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Book a Free Consultation Today
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mt-3 font-sans">
              Let Daniel Isibor & Co handle your numbers while you focus on growing your business. Our chartered accountants are just a message away.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white hover:bg-slate-100 text-[#0e2a47] font-bold text-xs uppercase tracking-wider rounded-full shadow-lg transition-transform hover:scale-105"
              >
                <span>Schedule Now</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
