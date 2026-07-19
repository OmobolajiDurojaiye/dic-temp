"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ShieldCheck,
  Calculator,
  FileText,
  Briefcase,
  FileSearch,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Award,
  BookOpen,
  Check,
  Info,
  Clock,
  Linkedin
} from "lucide-react";
import Logo from "@/components/Logo";

export default function Home() {
  // Mobile menu toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll state for shrinking navbar
  const [isScrolled, setIsScrolled] = useState(false);

  // Active service index for sticky scroll spy
  const [activeService, setActiveService] = useState(0);

  // Track if scroll action was triggered by a tab click (to prevent scroll spy jump)
  const isClickScrolling = useRef(false);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // FAQ accordion open states
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Selected team member for bio modal (null if none)
  const [selectedTeamMember, setSelectedTeamMember] = useState<number | null>(null);

  // Consultation form state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Audit and Assurance Services",
    message: ""
  });

  // Shrink header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
    }
  };

  // Toggle FAQ accordion (only one open at a time)
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Services data from PDF with stock images
  const services = [
    {
      title: "Audit and Assurance Services",
      icon: ShieldCheck,
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=500&q=80",
      summary: "Providing confidence in the reliability and integrity of your financial information to shareholders, boards, and leaders.",
      content: "As businesses keep growing, shareholders, boards, business leaders and stake holders need to have confidence in the reliability and integrity of their financial information. DIC provide businesses the platform to meet their expectations, enlarge and to extend their business so that they can take a strategic position in the international market. DIC provides businesses with reasonable audit and assurance services as well as the platform to minimize their financial information. We have strong audit tools, resources and procedures that our professionals use in delivering high quality audit services that sustain the public trust. In delivering these services, we adhere to the highest standards of independence, professional objectivity and technical expertise."
    },
    {
      title: "External Audit",
      icon: FileSearch,
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=500&q=80",
      summary: "Delivering a true and fair view of your financial position in conformity with International Financial Reporting Standards.",
      content: "At Daniel Isibor & Co (Chartered Accountants), our objective as external auditors is to determine whether in the auditor’s opinion, the statement presents fairly in all material respects that is we show you a true and fair view of the company’s financial position, results of operations, and cash flows in conformity with International Financial Reporting Standards. DIC provides you with proper auditing and financial records to comply with the tax authority. We also examine your book keeping records without the influence of personal relationships clouding our judgement, the financial statement will tell the unvarnished truth and their impartial inspection could keep your business from taking a major loss. At DIC, we provide you with the opportunity of not only verifying your numbers but to learn ways of improving your business in the areas of cash flows, reduction in debt service interest, asset management, turnover and profit."
    },
    {
      title: "Tax Management and Advisory Services",
      icon: Calculator,
      image: "https://images.unsplash.com/photo-1586486855514-8c633cc6fa98?auto=format&fit=crop&w=500&q=80",
      summary: "Handling complex tax challenges with expert solutions, saving your business valuable time and resources.",
      content: "Every business is faced with the challenges of meeting with their taxes. This is a very complex problem that requires the help of knowledgeable and experienced professionals. At DIC, we provide you experts in tax management to handle your tax issues, save you from valuable time and efforts, recommend optimal solution for your tax issues."
    },
    {
      title: "Accounting Software Consultancy",
      icon: Briefcase,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80",
      summary: "Automating financial processes and improving operational efficiency with packages like QuickBooks, ERP, and Sage.",
      content: "In today’s dynamic business environment, organizations require efficient, technology-driven systems to manage their accounting and financial operations accurately and in real time. At Daniel Isibor & Co (DIC), we provide Accounting Software Consultancy services designed to help businesses automate their financial processes, improve reporting accuracy, and enhance operational efficiency. We begin by conducting a comprehensive system study to understand the structure, workflows, and specific operational requirements of each client. This allows us to identify process gaps and recommend customized accounting software solutions that best align with their business model, size, and reporting needs. Our team of experienced consultants supports clients in selecting, installing, configuring, and integrating leading accounting software packages such as QuickBooks, ERP, and Sage, among others. We also provide user training to ensure smooth adoption and optimal system utilization across the organization. Beyond implementation, DIC offers ongoing technical support and periodic system reviews to ensure that the software continues to meet evolving business and regulatory requirements. Our approach helps clients streamline accounting processes, improve financial visibility, strengthen internal controls, and achieve greater efficiency in decision-making."
    },
    {
      title: "Special Purpose Audit",
      icon: Info,
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=500&q=80",
      summary: "Tailored reviews and non-statutory audits designed to evaluate critical aspects like internal controls and cost efficiency.",
      content: "At Daniel Isibor & Co (Chartered Accountants), we understand that organizations often require independent reviews beyond statutory audits to meet specific objectives or address unique business concerns. Our Special Purpose Audit services are designed to provide management, investors, and other stakeholders with focused and reliable insights into particular areas of their operations. We conduct non-statutory audits, agreed-upon procedures, and tailored reviews that evaluate critical financial and operational aspects such as internal controls, compliance with funding or grant conditions, project performance, cost efficiency, and asset utilization. Our approach goes beyond compliance - we provide practical recommendations that strengthen governance structures, enhance transparency, and improve accountability. By leveraging our technical expertise and industry experience, we help clients identify potential risks, optimize resources, and position their organizations for sustainable growth. Ultimately, our goal is to build stakeholder confidence and support informed decision-making that drives long-term performance and organizational success."
    },
    {
      title: "Financial Reporting",
      icon: FileText,
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=500&q=80",
      summary: "Preparing IFRS-compliant financial statements including Statement of Financial Position and Cash Flow.",
      content: "Our team of professionals at DIC, provides our clients with excellent financial reporting services that is compliant with Nigerian and International Financial Reporting (IFRS) standards. Our team of qualified chartered accountants are capable of providing all financial statements (Statement of Financial Position, Cash Flow, Statement of Profit or Loss and Other Comprehensive Income etc)."
    }
  ];

  // Scroll spy effect for the sticky services section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0.1
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      // If we are currently scrolling via a tab click, don't update active state from scroll observer
      if (isClickScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute("data-index") || "0");
          setActiveService(index);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const serviceItems = document.querySelectorAll(".service-scroll-item");
    serviceItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, []);

  // Handle clicking a tab in the sticky left pane to scroll the card into view
  const scrollToService = (index: number) => {
    isClickScrolling.current = true;
    setActiveService(index);

    const element = document.getElementById(`service-card-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    // Reset the block flag after the smooth scroll finishes
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  };

  // Team data from PDF
  const team = [
    {
      name: "Daniel Isibor ACA, ACTI, MCIB, MSc, B.Sc",
      role: "Principal Partner",
      summary: "Finance professional with over 15 years of experience spanning Accounting, Auditing, Taxation, and Debt Recovery.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80",
      linkedin: "https://linkedin.com/in/daniel-isibor-dic",
      bio: "Daniel Isibor is a seasoned finance professional with over 15 years of experience spanning Accounting, Auditing, Taxation, Enterprise Risk Management, Compliance Management, Fraud Investigation, Credit Management, and Debt Recovery. He is a Chartered Accountant and an Associate of the Institute of Chartered Accountants of Nigeria (ICAN). Daniel is also an Associate of the Chartered Institute of Taxation of Nigeria (CITN), a member of the Chartered Institute of Bankers of Nigeria (CIBN), and a registered professional with the Financial Reporting Council of Nigeria (FRC) - the regulatory authority for financial reporting standards in Nigeria. An alumnus of Ahmadu Bello University, Daniel holds a Bachelor’s degree in Accounting and a Master of Science (M.Sc.) in Finance and Accounting. With over a decade of banking experience, he has held key positions in the bank, including Financial Controller, Chief Internal Auditor, and Head of Enterprise Risk Management. Beyond the banking sector, Daniel served as Chief Internal Auditor at News Engineering (Nig.) Limited, the largest electrical construction company in Nigeria, and as an Audit Partner at Adebowale Oyeniran & Co. (Chartered Accountants), one of Abuja’s foremost accounting firms."
    },
    {
      name: "Rukayat Hassan-Daniel ACA, ACTI, MBA, B.Sc",
      role: "Senior Partner",
      summary: "Expert in financial forecasting, non-governmental organizations (NGOs), and capacity building with over 15 years of experience.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80",
      linkedin: "https://linkedin.com/in/rukayat-hassan-daniel",
      bio: "She is a goal-driven professional with over 15 years of specialized expertise in Financial Forecasting, Financial Reporting, Financial Management, Human Resource Management, Capacity Building, and Accounting for Non-Governmental Organizations (NGOs). Rukayat is a seasoned Chartered Accountant and an Associate of both the Institute of Chartered Accountants of Nigeria (ICAN) and the Chartered Institute of Taxation of Nigeria (CITN). She is also a registered professional with the Financial Reporting Council of Nigeria (FRC), the statutory body responsible for regulating financial reporting standards in the country. An alumna of Ahmadu Bello University, Rukayat holds a Bachelor’s degree in Accounting and a Master of Business Administration (MBA). Prior to co-founding our company, she gained valuable professional experience with Deinde Odusanya & Co. (Chartered Accountants), one of the foremost auditing firms in Lagos, and Cypress Consult Limited, one of Nigeria’s leading civil construction companies. Rukayat has also participated in several professional development programs and trainings on Financial Forecasting, Financial Management, and Financial Reporting organized by the Institute of Chartered Accountants of Nigeria (ICAN)."
    },
    {
      name: "Chijioke Agbedo ACA, AAT, CISA, ACFE",
      role: "Partner - Tax Management & Advisory Services",
      summary: "Taxation and fraud investigation specialist with more than 10 years of experience.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80",
      linkedin: "https://linkedin.com/in/chijioke-agbedo",
      bio: "Chijioke holds a Bachelor’s degree in Accounting from the University of Abuja and is an experienced Chartered Accountant. He is an Associate Member of both the Institute of Chartered Accountants of Nigeria (ICAN) and the Chartered Institute of Taxation of Nigeria (CITN). In addition, he is a Certified Fraud Examiner (CFE) and a member of the Association of Certified Fraud Examiners (ACFE). With over 10 years of professional experience, Chijioke’s core area of expertise lies in taxation, complemented by strong skills in financial management and fraud investigation. He previously served as Team Lead for Tax Matters at Umuhefe & Co. (Chartered Accountants) and later as Financial Controller at Safeline Microfinance Bank."
    },
    {
      name: "Mayowa Omotosho",
      role: "Senior Manager - Compliance",
      summary: "Compliance manager skilled in financial analysis, Power BI, Microsoft Excel, and SQL.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80",
      linkedin: "https://linkedin.com/in/mayowa-omotosho",
      bio: "Mayowa Omotosho holds a Bachelor’s degree in Accounting from the University of Ilorin and is an alumnus of Ahmadu Bello University. He is highly skilled in financial analysis and reporting, with hands-on expertise in Power BI, Microsoft Excel, and SQL. Mayowa’s professional experience covers bank reconciliation, cash management, and the preparation of monthly, quarterly, and annual management accounts. He previously served as Accountant at Laguru Health Club Ltd and later as Finance Manager at Bella Afrik Suites and Apartments. He has participated in several professional trainings focused on computer systems, network security, and emerging technologies, which have enhanced his technical proficiency and problem-solving capabilities. Mayowa is passionate about leveraging technology to improve organizational efficiency and optimize system performance."
    },
    {
      name: "Idris Husseini, ACA, HND",
      role: "Audit Manager",
      summary: "Auditing manager with 12 years of experience in financial analysis and auditing of MDAs.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80",
      linkedin: "https://linkedin.com/in/idris-husseini",
      bio: "Idris is an experienced and highly skilled Chartered Accountant with 12 years in financial reporting, auditing and financial analysis. Idris has a strong analytical skill and ability to analyze complex financial data to provide strategic business insight. He is open to learning, delivering value, and sharing knowledge. Idris possess a B.Sc in Accounting (Second Upper Division) from the Federal University of Gusau, Zamfara State; a HND and OND in Accounting respectively. Before joining our audit firm, Idris trained with Anefu, Snoe & Co in Zamfara where he led audit engagements and supervised audits of MDAs."
    }
  ];

  // Client industries matching the Dribbble pills style
  const industries = [
    "Corporate Enterprises",
    "Small & Mid-size Businesses",
    "Government Agencies & MDAs",
    "Non-Profit Organizations & NGOs",
    "Startups & Tech Ventures"
  ];

  // FAQ items
  const faqs = [
    {
      question: "What auditing services does Daniel Isibor & CO provide?",
      answer: "We provide comprehensive External Audit services (expressing an independent opinion on financial statements in conformity with IFRS), Special Purpose Audits (evaluating internal controls, project performance, grant/funding compliance, asset utilization), and general Audit and Assurance services to build stakeholder trust."
    },
    {
      question: "How do your tax management services benefit my business?",
      answer: "Our expert team handles CITN-compliant tax planning, compliance audits, filing, and advisory. We optimize tax positions, resolve disputes, save you valuable time, and ensure complete compliance with local tax regulatory bodies (such as FCT-IRS)."
    },
    {
      question: "Which accounting software systems can you help configure?",
      answer: "We provide consulting, installation, integration, and training for major industry systems including QuickBooks, ERP solutions, and Sage, helping automate processes and improve reporting accuracy."
    },
    {
      question: "Does Daniel Isibor & CO support small and mid-size businesses?",
      answer: "Yes, we are highly passionate about helping small and mid-size businesses maximize returns by freeing them from back-office work, allowing them to focus on revenue growth and improving profitability."
    },
    {
      question: "How are your services tailored for compliance in Nigeria?",
      answer: "All our partners are licensed with professional bodies like ICAN, CITN, and CIBN, and registered with the Financial Reporting Council of Nigeria (FRC). We strictly follow national and international reporting standards."
    }
  ];

  return (
    <div className="flex-1 flex flex-col relative" style={{ overflowX: 'clip' }}>
      
      {/* HEADER & NAVIGATION */}
      <header className={`sticky top-0 z-40 bg-white border-b border-slate-100 transition-all duration-300 ${isScrolled ? "py-2.5 shadow-md" : "py-5"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? "h-14" : "h-20"}`}>
            <div className="flex-shrink-0">
              <a href="#hero">
                <Logo className={`transition-all duration-300 ${isScrolled ? "h-8 w-8" : "h-10 w-10"}`} />
              </a>
            </div>
            
            {/* Desktop Navbar */}
            <nav className="hidden md:flex space-x-8 text-sm font-medium">
              <a href="#about" className="text-slate-600 hover:text-brand-cyan transition-colors">About Us</a>
              <a href="#services" className="text-slate-600 hover:text-brand-cyan transition-colors">Services</a>
              <a href="#team" className="text-slate-600 hover:text-brand-cyan transition-colors">Our Team</a>
              <a href="#clients" className="text-slate-600 hover:text-brand-cyan transition-colors">Clients</a>
              <a href="#faq" className="text-slate-600 hover:text-brand-cyan transition-colors">FAQ</a>
            </nav>

            <div className="hidden md:block">
              <a
                href="#contact"
                className={`inline-flex items-center justify-center rounded-none bg-brand-navy text-white font-semibold uppercase tracking-wider hover:bg-brand-cyan hover:text-brand-navy transition-all ${
                  isScrolled ? "px-4 py-2 text-[10px]" : "px-5 py-2.5 text-xs"
                }`}
              >
                Book a Consultation
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-600 p-2 hover:bg-slate-50 rounded-none transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navbar Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-3 shadow-lg">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-cyan transition-all"
            >
              About Us
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-cyan transition-all"
            >
              Services
            </a>
            <a
              href="#team"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-cyan transition-all"
            >
              Our Team
            </a>
            <a
              href="#clients"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-cyan transition-all"
            >
              Clients
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-cyan transition-all"
            >
              FAQ
            </a>
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center w-full px-5 py-3 bg-brand-navy text-white text-sm font-semibold uppercase tracking-wider hover:bg-brand-cyan hover:text-brand-navy transition-all"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION (Centered Headline + Large Landscape Boardroom Photo) */}
      <section id="hero" className="relative bg-brand-navy text-white pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        {/* Abstract structural grid line indicators */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          {/* Header Text */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Trusted CPA services, expertise you can count on
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Daniel Isibor & CO (Chartered Accountants) delivers high quality auditing, tax management, financial advisory, and software consultancy for businesses to operate at optimal levels.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-cyan text-brand-navy font-bold text-sm tracking-wide hover:bg-white hover:text-brand-navy transition-all shadow-md group"
            >
              Book a Consultation
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-semibold text-sm hover:bg-white hover:text-brand-navy transition-all"
            >
              Explore Services
            </a>
          </div>

          {/* Large Landscape Boardroom Photo */}
          <div className="relative border border-brand-cyan/20 p-2 bg-brand-navy shadow-2xl max-w-5xl mx-auto mt-12">
            <img
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&h=500&q=80"
              alt="Daniel Isibor & CO Executive Boardroom Office"
              className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover border border-slate-700"
            />
          </div>

          {/* Credentials / Trust Indicators */}
          <div className="pt-10 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-left sm:text-center">
            <div>
              <div className="text-3xl font-extrabold text-white">15+ Years</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Professional Experience</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white">100%</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Compliance Assurance</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-3xl font-extrabold text-white">Abuja, FCT</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Head Office Location</div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION & ABOUT US SECTION */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Heading, Tagline and Stock Image */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="text-brand-navy text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-cyan"></span>
                About Daniel Isibor & CO
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                A partner in progress to all business enterprises
              </h2>
              
              <div className="border border-slate-200 p-2 bg-slate-50">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
                  alt="Daniel Isibor & CO Office Skyscraper"
                  className="w-full h-64 object-cover transition-all duration-500"
                />
              </div>

              <div className="p-6 bg-slate-50 border border-slate-100 space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-brand-cyan/20 flex items-center justify-center text-brand-navy flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Round the Clock Access</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Ensuring round the clock access to your financial data with guaranteed data security and confidentiality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: PDF Text Integration */}
            <div className="lg:col-span-7 text-left space-y-6">
              <p className="text-base font-medium text-slate-900 leading-relaxed border-l-4 border-brand-cyan pl-4">
                At Daniel Isibor & Co (Chartered Accountants), we provide auditing, tax, accounting, financial management, training, consultancy, system optimization, due diligence, feasibility studies, financial forecast, enterprise risk management, fraud prevention and detection as well as debt recovery services.
              </p>
              
              <p className="text-slate-600 leading-relaxed text-sm">
                DIC is committed to provide our clients with an independent assessment of their operations and organizational structure. We take time to get to know our clients and understand how they measure performance and we are dedicated to a hand on approach that has proven to build integrity and trust in relationships.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm">
                The cornerstone of our business philosophy is extensive and continued communication with the clients. We keep our client in the loop at all stages of our accounting procedures with regular reports for the client’s reference. All this data is accessible to the client round the clock through dedicated servers using the most modern software and backup facilities. In addition, we also act as business advisers by keeping an eye on the market trends and advising our clients on using the most modern and efficient methods related to accounting and financial services.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm">
                DIC focuses on supporting the small and mid-size business and is very passionate about helping them maximize their return by freeing up their time from back-office work and allow them to focus their work on what they do best &ldquo;increasing their revenue and improving their profit&rdquo;.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm">
                Our desire is to be partner in progress to all categories of business enterprise including non-profit making entities while we consider their satisfaction to be an honest measure of our performance.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* CORE VALUES & MISSION/VISION SECTION */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Mission & Vision Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            
            {/* Mission */}
            <div className="bg-white border border-slate-150 p-8 text-left space-y-4 shadow-sm">
              <div className="text-xs uppercase font-extrabold tracking-widest text-brand-navy">Mission</div>
              <h3 className="text-xl font-extrabold text-slate-900">Delivering Quality & Efficiency</h3>
              <p className="text-slate-600 text-sm leading-relaxed italic">
                &ldquo;To provide high quality services to our clients in the most efficient and effective manner for their businesses to operate at optimal level&rdquo;
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white border border-slate-150 p-8 text-left space-y-4 shadow-sm">
              <div className="text-xs uppercase font-extrabold tracking-widest text-brand-cyan">Vision</div>
              <h3 className="text-xl font-extrabold text-slate-900">Leading the Profession</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To be a leading professional firm providing exceptional services and timely solutions to our clients Tax, Audit and Financial Advisory needs.
              </p>
            </div>

          </div>

          {/* Goals, Core Values & Strengths */}
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Goals & Focus */}
            <div className="bg-white border border-slate-150 p-8 shadow-sm text-left space-y-6">
              <div>
                <h4 className="font-extrabold text-slate-900 text-lg mb-4 flex items-center gap-2">
                  <Award size={18} className="text-brand-navy" />
                  Our Goals
                </h4>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-brand-cyan mt-2 flex-shrink-0"></span>
                    <span>Integrity and accuracy while handling our client's business</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-brand-cyan mt-2 flex-shrink-0"></span>
                    <span>Professionalism and set of skills</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-brand-cyan mt-2 flex-shrink-0"></span>
                    <span>Innovative and cost-effective ways of solving our clients' problems</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">Our Focus</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Our focus at DIC is dedicated to total quality management and quality assurance in carrying out our business operations.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="bg-brand-navy text-white p-8 shadow-lg text-left space-y-6 relative overflow-hidden">
              <h4 className="font-extrabold text-white text-lg mb-4 flex items-center gap-2">
                <BookOpen size={18} className="text-brand-cyan" />
                Core Values
              </h4>
              
              <p className="text-xs text-slate-300 leading-relaxed">
                Our core values are the foundation of our company; they are defined and reinforced through our commitment and dedication.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  { name: "Integrity", desc: "Honesty and adherence to strong moral principles." },
                  { name: "Accuracy", desc: "Meticulous verification of every financial figure." },
                  { name: "Ethics", desc: "Upholding absolute professional standards." },
                  { name: "Accountability", desc: "Taking full ownership and responsibility." },
                  { name: "Teamwork", desc: "Collaborating with a shared purpose." }
                ].map((val, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-white/10 flex items-center justify-center text-brand-cyan text-[10px] font-bold flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div>
                      <div className="text-sm font-bold text-white leading-none">{val.name}</div>
                      <div className="text-[10px] text-slate-400 mt-1">{val.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Strengths */}
            <div className="bg-white border border-slate-150 p-8 shadow-sm text-left space-y-6">
              <h4 className="font-extrabold text-slate-900 text-lg mb-4 flex items-center gap-2">
                <Check size={18} className="text-brand-navy" />
                Our Strengths
              </h4>
              
              <div className="grid gap-4 text-sm text-slate-600">
                {[
                  "Meeting and exceeding expectations",
                  "Leading by example",
                  "Setting and achieving high standards",
                  "Anticipating and responding to the needs of the client",
                  "Maintaining loyalty, trust and respect in relationship",
                  "We work together with a shared purpose"
                ].map((strength, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="w-5 h-5 bg-brand-cyan/20 flex items-center justify-center text-brand-navy flex-shrink-0 mt-0.5">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <span className="leading-snug">{strength}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CORE SERVICES SECTION (Sticky Overlapping Stack Layout) */}
      <section id="services" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* STICKY LEFT COLUMN */}
            <div className="lg:col-span-4 lg:sticky lg:top-36 lg:self-start space-y-8 text-left py-4">
              <div className="space-y-4">
                <div className="text-brand-navy text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-cyan"></span>
                  Our Services
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Our Professional Services
                </h2>
                <p className="text-slate-500 text-sm max-w-md">
                  We provide professional accounting, auditing, and compliance services structured to optimize operations and support your strategic business goals. Scroll to see the cards stack.
                </p>
              </div>

              {/* Service Navigation Indicators (ScrollSpy linked) */}
              <div className="hidden lg:flex flex-col gap-2.5 border-l border-slate-200 pl-4 mt-6">
                {services.map((service, index) => {
                  const isActive = activeService === index;
                  return (
                    <button
                      key={index}
                      onClick={() => scrollToService(index)}
                      className={`text-left text-xs font-bold uppercase tracking-wider py-1.5 transition-all outline-none ${
                        isActive
                          ? "text-brand-navy border-l-2 border-brand-cyan -ml-[18px] pl-[16px] font-extrabold"
                          : "text-slate-400 hover:text-slate-700"
                      }`}
                    >
                      {service.title}
                    </button>
                  );
                })}
              </div>

              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-cyan hover:text-brand-navy transition-all"
                >
                  Inquire about services
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* SCROLLING RIGHT COLUMN (Overlapping Sticky Stack Cards with Images) */}
            <div className="lg:col-span-8 py-4 relative" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {services.map((service, index) => {
                const Icon = service.icon;
                // Each card gets a slightly larger top offset so they stack with depth
                const stickyTop = 100 + (index * 12);
                return (
                  <div
                    key={index}
                    id={`service-card-${index}`}
                    data-index={index}
                    className="service-scroll-item border border-slate-200 bg-white transition-all shadow-lg hover:shadow-xl rounded-none p-0 overflow-hidden flex flex-col md:flex-row"
                    style={{ position: 'sticky', top: `${stickyTop}px`, zIndex: index + 1 }}
                  >
                    {/* Left side text container (2/3 width) */}
                    <div className="p-8 md:w-3/5 flex flex-col justify-between text-left space-y-4">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 bg-brand-cyan/20 text-brand-navy">
                            <Icon size={20} />
                          </div>
                          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase font-mono">
                            Service 0{index + 1}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-extrabold text-slate-900 leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          {service.content}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span className="text-slate-400 font-bold uppercase tracking-wider">
                          Daniel Isibor & CO.
                        </span>
                      </div>
                    </div>

                    {/* Right side Image container (1/3 width, landscape/portrait crop) */}
                    <div className="md:w-2/5 h-48 md:h-auto md:min-h-[250px] border-t md:border-t-0 md:border-l border-slate-200 relative overflow-hidden bg-slate-100">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-all duration-500"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* MEET OUR TEAM SECTION (LinkedIn Profile Links) */}
      <section id="team" className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="text-brand-navy text-xs font-bold uppercase tracking-widest">Key Drivers</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Meet our team of finance leaders
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              Our key drivers possess over fifteen-years accounting, auditing, and tax experience. This level of expertise provides our company with an in-depth understanding of our clients' needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-slate-150 rounded-none p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-left"
              >
                <div className="space-y-5">
                  {/* Stock Headshot Image */}
                  <div className="w-full h-56 border border-slate-200 overflow-hidden bg-slate-100 relative group">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-all"></div>
                  </div>

                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs text-brand-navy font-bold tracking-wide mt-1.5 uppercase">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                    {member.summary}
                  </p>
                </div>

                {/* Social Button Linked directly to LinkedIn */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-navy hover:text-brand-cyan transition-colors"
                  >
                    <Linkedin size={14} className="fill-current" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TEAM PROFILE MODAL */}
      {selectedTeamMember !== null && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-slate-200 flex flex-col relative">
            
            {/* Modal Header */}
            <div className="sticky top-0 bg-white px-6 py-5 border-b border-slate-100 flex justify-between items-center z-10">
              <div className="flex items-center gap-3">
                <img
                  src={team[selectedTeamMember].image}
                  alt={team[selectedTeamMember].name}
                  className="w-10 h-10 object-cover border border-slate-200"
                />
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm leading-none">
                    {team[selectedTeamMember].name}
                  </h4>
                  <span className="text-[10px] text-brand-navy font-bold uppercase tracking-wider mt-1.5 inline-block">
                    {team[selectedTeamMember].role}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedTeamMember(null)}
                className="text-slate-400 hover:text-slate-600 p-2 hover:bg-slate-50 rounded-full transition-all"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 text-left space-y-6">
              <div className="bg-slate-50 border border-slate-150 p-5 flex items-start gap-3">
                <Info className="text-brand-navy flex-shrink-0 mt-0.5" size={18} />
                <div className="text-xs text-slate-600 leading-relaxed">
                  <strong>Credentials & Background:</strong> Licensed with professional bodies including ICAN, CITN, and registered with the Financial Reporting Council of Nigeria.
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="font-extrabold text-slate-950 text-sm uppercase tracking-wider">Professional Bio</h5>
                <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line">
                  {team[selectedTeamMember].bio}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-slate-50 px-6 py-4 border-t border-slate-155 flex justify-between items-center">
              <span className="text-[10px] text-slate-400 font-medium">Daniel Isibor & CO.</span>
              <div className="flex gap-3">
                <a
                  href={team[selectedTeamMember].linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50 hover:text-brand-navy transition-all inline-flex items-center gap-1.5"
                >
                  <Linkedin size={12} className="fill-current" />
                  LinkedIn
                </a>
                <button
                  onClick={() => setSelectedTeamMember(null)}
                  className="px-4 py-2 bg-brand-navy text-white text-xs font-bold hover:bg-brand-cyan hover:text-brand-navy transition-all"
                >
                  Close
                </button>
              </div>
            </div>
            
          </div>
        </div>
      )}

      {/* CLIENTS SECTION */}
      <section id="clients" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Col: Tagline & Industries Served */}
            <div className="lg:col-span-4 text-left space-y-6">
              <div className="text-brand-navy text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-cyan"></span>
                Partner in Progress
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Our Client Portfolio
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                We are proud to serve a diverse group of organizations, ranging from national public authorities and large construction companies to non-profits and agricultural enterprises.
              </p>

              {/* Industries Served */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Industries Served</h4>
                <div className="flex flex-wrap gap-2">
                  {industries.map((ind, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-slate-50 border border-slate-150 text-[10px] font-semibold text-slate-700 hover:bg-slate-100 hover:text-brand-cyan cursor-default transition-all"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Custom Client Logo Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                
                {/* 1. FCT-IRS */}
                <div className="p-6 border border-slate-150 bg-white flex flex-col justify-between items-center text-center h-40">
                  <svg viewBox="0 0 100 60" className="w-16 h-12 text-brand-navy">
                    <polygon points="50,5 90,20 90,45 50,55 10,45 10,20" fill="none" stroke="currentColor" strokeWidth="4" />
                    <line x1="50" y1="5" x2="50" y2="55" stroke="currentColor" strokeWidth="2" />
                    <circle cx="50" cy="30" r="10" fill="none" stroke="#70c9e5" strokeWidth="3" />
                  </svg>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wide text-brand-navy">FCT-IRS</span>
                    <p className="text-[8px] text-slate-400 leading-none mt-1">Inland Revenue Service</p>
                  </div>
                </div>

                {/* 2. IWFCI Nigeria */}
                <div className="p-6 border border-slate-150 bg-white flex flex-col justify-between items-center text-center h-40">
                  <svg viewBox="0 0 100 60" className="w-16 h-12 text-brand-navy">
                    <circle cx="50" cy="30" r="20" fill="none" stroke="currentColor" strokeWidth="4" />
                    <circle cx="50" cy="30" r="12" fill="none" stroke="#70c9e5" strokeWidth="2" />
                    <line x1="30" y1="30" x2="70" y2="30" stroke="currentColor" strokeWidth="2" />
                    <line x1="50" y1="10" x2="50" y2="50" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wide text-brand-navy">IWFCI NIGERIA</span>
                    <p className="text-[8px] text-slate-400 leading-none mt-1">Women's Commerce</p>
                  </div>
                </div>

                {/* 3. Leobob Engineering */}
                <div className="p-6 border border-slate-150 bg-white flex flex-col justify-between items-center text-center h-40">
                  <svg viewBox="0 0 100 60" className="w-16 h-12 text-brand-navy">
                    <path d="M 25,50 L 50,15 L 75,50 Z" fill="none" stroke="currentColor" strokeWidth="4" />
                    <circle cx="50" cy="38" r="8" fill="none" stroke="#70c9e5" strokeWidth="3" />
                  </svg>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wide text-brand-navy">LEOBOB ENG.</span>
                    <p className="text-[8px] text-slate-400 leading-none mt-1">Engineering Services Ltd</p>
                  </div>
                </div>

                {/* 4. Kumcyn Global */}
                <div className="p-6 border border-slate-150 bg-white flex flex-col justify-between items-center text-center h-40">
                  <svg viewBox="0 0 100 60" className="w-16 h-12 text-brand-navy">
                    <rect x="20" y="40" width="12" height="10" fill="currentColor" />
                    <rect x="44" y="25" width="12" height="25" fill="#70c9e5" />
                    <rect x="68" y="10" width="12" height="40" fill="currentColor" />
                  </svg>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wide text-brand-navy">KUMCYN GLOBAL</span>
                    <p className="text-[8px] text-slate-400 leading-none mt-1">Consultancy Ltd</p>
                  </div>
                </div>

                {/* 5. Ara Contemporary */}
                <div className="p-6 border border-slate-150 bg-white flex flex-col justify-between items-center text-center h-40">
                  <svg viewBox="0 0 100 60" className="w-16 h-12 text-brand-navy">
                    <rect x="20" y="10" width="40" height="30" fill="none" stroke="currentColor" strokeWidth="4" />
                    <rect x="40" y="20" width="40" height="30" fill="none" stroke="#70c9e5" strokeWidth="4" />
                  </svg>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wide text-brand-navy">ARA CONTEMP.</span>
                    <p className="text-[8px] text-slate-400 leading-none mt-1">Ara Contemporary Ltd</p>
                  </div>
                </div>

                {/* 6. Dee Utensils */}
                <div className="p-6 border border-slate-150 bg-white flex flex-col justify-between items-center text-center h-40">
                  <svg viewBox="0 0 100 60" className="w-16 h-12 text-brand-navy">
                    <line x1="35" y1="10" x2="35" y2="50" stroke="currentColor" strokeWidth="4" />
                    <line x1="65" y1="10" x2="65" y2="50" stroke="currentColor" strokeWidth="4" />
                    <path d="M 25,20 L 35,20 M 65,20 L 75,20" stroke="#70c9e5" strokeWidth="4" />
                    <circle cx="50" cy="30" r="8" fill="none" stroke="currentColor" strokeWidth="3" />
                  </svg>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wide text-brand-navy">DEE UTENSILS</span>
                    <p className="text-[8px] text-slate-400 leading-none mt-1">Kitchen & Restaurant</p>
                  </div>
                </div>

                {/* 7. Hub360 Circuits */}
                <div className="p-6 border border-slate-150 bg-white flex flex-col justify-between items-center text-center h-40">
                  <svg viewBox="0 0 100 60" className="w-16 h-12 text-brand-navy">
                    <rect x="25" y="15" width="50" height="30" fill="none" stroke="currentColor" strokeWidth="4" />
                    <circle cx="50" cy="30" r="6" fill="#70c9e5" />
                    <line x1="50" y1="5" x2="50" y2="15" stroke="currentColor" strokeWidth="2" />
                    <line x1="50" y1="45" x2="50" y2="55" stroke="currentColor" strokeWidth="2" />
                    <line x1="15" y1="30" x2="25" y2="30" stroke="currentColor" strokeWidth="2" />
                    <line x1="75" y1="30" x2="85" y2="30" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wide text-brand-navy">HUB360 CIR.</span>
                    <p className="text-[8px] text-slate-400 leading-none mt-1">Circuits Ltd</p>
                  </div>
                </div>

                {/* 8. Fountain Credit */}
                <div className="p-6 border border-slate-150 bg-white flex flex-col justify-between items-center text-center h-40">
                  <svg viewBox="0 0 100 60" className="w-16 h-12 text-brand-navy">
                    <path d="M 50,10 C 30,30 30,50 50,50 C 70,50 70,30 50,10 Z" fill="none" stroke="currentColor" strokeWidth="4" />
                    <path d="M 50,22 C 40,35 40,45 50,45 C 60,45 60,35 50,22 Z" fill="none" stroke="#70c9e5" strokeWidth="2" />
                  </svg>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wide text-brand-navy">FOUNTAIN CR.</span>
                    <p className="text-[8px] text-slate-400 leading-none mt-1">Fountain Credit Services</p>
                  </div>
                </div>

                {/* 9. Karvi Logistics */}
                <div className="p-6 border border-slate-150 bg-white flex flex-col justify-between items-center text-center h-40">
                  <svg viewBox="0 0 100 60" className="w-16 h-12 text-brand-navy">
                    <rect x="20" y="20" width="45" height="25" fill="none" stroke="currentColor" strokeWidth="4" />
                    <rect x="65" y="28" width="15" height="17" fill="none" stroke="#70c9e5" strokeWidth="3" />
                    <circle cx="32" cy="50" r="5" fill="currentColor" />
                    <circle cx="70" cy="50" r="5" fill="currentColor" />
                  </svg>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wide text-brand-navy">KARVI LOGIS.</span>
                    <p className="text-[8px] text-slate-400 leading-none mt-1">Logistics Ltd</p>
                  </div>
                </div>

                {/* 10. Alphamed Supply */}
                <div className="p-6 border border-slate-150 bg-white flex flex-col justify-between items-center text-center h-40">
                  <svg viewBox="0 0 100 60" className="w-16 h-12 text-brand-navy">
                    <line x1="50" y1="10" x2="50" y2="50" stroke="currentColor" strokeWidth="6" />
                    <line x1="30" y1="30" x2="70" y2="30" stroke="currentColor" strokeWidth="6" />
                    <circle cx="50" cy="30" r="22" fill="none" stroke="#70c9e5" strokeWidth="3" />
                  </svg>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wide text-brand-navy">ALPHAMED</span>
                    <p className="text-[8px] text-slate-400 leading-none mt-1">Alphamed Supply Ltd</p>
                  </div>
                </div>

                {/* 11. Kumcyn Farms */}
                <div className="p-6 border border-slate-150 bg-white flex flex-col justify-between items-center text-center h-40">
                  <svg viewBox="0 0 100 60" className="w-16 h-12 text-brand-navy">
                    <path d="M 50,50 C 35,35 35,15 50,15 C 65,15 65,35 50,50 Z" fill="none" stroke="currentColor" strokeWidth="4" />
                    <path d="M 50,50 C 42,42 42,25 50,25 C 58,25 58,42 50,50 Z" fill="none" stroke="#70c9e5" strokeWidth="2" />
                    <line x1="50" y1="15" x2="50" y2="50" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wide text-brand-navy">KUMCYN FARMS</span>
                    <p className="text-[8px] text-slate-400 leading-none mt-1">Agricultural Enterprise</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left FAQ Info Column */}
            <div className="lg:col-span-5 text-left space-y-6">
              <div className="text-brand-navy text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-cyan"></span>
                Get Answers
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Here are answers to some of the common inquiries we receive regarding our CPA services, compliance certifications, and software support.
              </p>
              
              <div className="p-6 bg-white border border-slate-150 space-y-4 shadow-sm">
                <h4 className="font-bold text-slate-900 text-sm">Need custom advice?</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Every business case has unique financial needs and tax requirements. Get in touch with us to schedule a detailed review.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-brand-navy hover:underline"
                >
                  Contact our consultants
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Right Accordion List Column */}
            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-slate-150 bg-white overflow-hidden transition-all shadow-sm"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex justify-between items-center p-5 text-left transition-colors hover:bg-slate-50/50"
                    >
                      <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                        {faq.question}
                      </span>
                      <span className={`p-1 bg-slate-50 text-slate-600 rounded-none transition-transform ${isOpen ? "rotate-180" : ""}`}>
                        <ChevronDown size={18} />
                      </span>
                    </button>
                    
                    {isOpen && (
                      <div className="p-5 pt-0 border-t border-slate-50 text-left">
                        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-4">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* CONTACT & CONSULTATION FORM SECTION */}
      <section id="contact" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            
            {/* Contact Info Left (5 Cols) */}
            <div className="lg:col-span-5 bg-brand-navy text-white p-8 lg:p-12 text-left flex flex-col justify-between shadow-lg relative overflow-hidden">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="text-brand-cyan text-xs font-bold uppercase tracking-widest">Get In Touch</div>
                  <h3 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                    Contact Daniel Isibor & CO
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Have questions about auditing, taxation, compliance or accounting software? Reach out directly or fill the form.
                  </p>
                </div>

                <div className="space-y-6">
                  
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-white/10 text-brand-cyan flex-shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Phone Call</div>
                      <a href="tel:08036092574" className="text-sm font-bold text-white hover:text-brand-cyan transition-colors mt-0.5 block">
                        08036092574
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-white/10 text-brand-cyan flex-shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Email Address</div>
                      <a href="mailto:danielisiborandco@gmail.com" className="text-sm font-bold text-white hover:text-brand-cyan transition-colors mt-0.5 block">
                        danielisiborandco@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-white/10 text-brand-cyan flex-shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Office Address</div>
                      <p className="text-xs text-slate-200 mt-0.5 leading-relaxed">
                        Suite C2, Silverline Plaza, Plot 1543,<br />
                        Cadastral Zone A03, Safana Close,<br />
                        Garki II, Abuja, FCT
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Office hours info */}
              <div className="mt-12 pt-6 border-t border-white/10 flex items-center gap-3">
                <Clock className="text-brand-cyan" size={16} />
                <span className="text-[10px] text-slate-400 font-medium">
                  Office Hours: Monday - Friday (8:00 AM - 5:00 PM)
                </span>
              </div>
            </div>

            {/* Contact Form Right (7 Cols) */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-150 p-8 lg:p-12 text-left flex flex-col justify-center">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-brand-cyan/20 text-brand-navy rounded-none flex items-center justify-center mx-auto">
                    <Check size={32} className="stroke-[3]" />
                  </div>
                  <h4 className="text-xl font-extrabold text-slate-900">Request Sent Successfully</h4>
                  <p className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out. A representative from Daniel Isibor & CO will contact you at the details provided within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        service: "Audit and Assurance Services",
                        message: ""
                      });
                    }}
                    className="inline-flex items-center text-xs font-bold text-slate-900 hover:text-brand-navy transition-colors"
                  >
                    Send another message &rarr;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-extrabold text-slate-950 text-lg">Send a Message</h4>
                    <p className="text-xs text-slate-500">
                      Fill out this form to request a consultation or ask questions. We'll respond promptly.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-none bg-white text-xs focus:ring-1 focus:ring-brand-cyan focus:border-brand-cyan transition-all text-slate-800"
                        placeholder="e.g. John Doe"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-none bg-white text-xs focus:ring-1 focus:ring-brand-cyan focus:border-brand-cyan transition-all text-slate-800"
                        placeholder="e.g. john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-none bg-white text-xs focus:ring-1 focus:ring-brand-cyan focus:border-brand-cyan transition-all text-slate-800"
                        placeholder="e.g. 08036092574"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="service" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Required Service
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-none bg-white text-xs focus:ring-1 focus:ring-brand-cyan focus:border-brand-cyan transition-all text-slate-800"
                      >
                        {services.map((service, idx) => (
                          <option key={idx} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Message / inquiry Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-none bg-white text-xs focus:ring-1 focus:ring-brand-cyan focus:border-brand-cyan transition-all text-slate-800 resize-none"
                      placeholder="Please provide details about your inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-navy text-white text-xs font-bold uppercase tracking-widest hover:bg-brand-cyan hover:text-brand-navy transition-all shadow"
                  >
                    Submit Request
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-navy text-white border-t border-white/5 py-12 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
            
            {/* Footer Logo & Brand info (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <Logo light={true} />
              <p className="text-xs text-slate-400 max-w-sm leading-relaxed pt-2">
                Daniel Isibor & CO (Chartered Accountants) is a professional services firm offering audit, tax management, and software consultancy for businesses to operate at optimal efficiency.
              </p>
              
              <div className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase pt-2">
                CAC REGISTRATION PLACEMENT
              </div>
            </div>

            {/* Quick Links (3 Cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-cyan">Quick Navigation</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#about" className="hover:text-brand-cyan transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-brand-cyan transition-colors">Services Offered</a></li>
                <li><a href="#team" className="hover:text-brand-cyan transition-colors">Our Key Drivers</a></li>
                <li><a href="#clients" className="hover:text-brand-cyan transition-colors">Client Portfolio</a></li>
                <li><a href="#faq" className="hover:text-brand-cyan transition-colors">General FAQs</a></li>
              </ul>
            </div>

            {/* Official Credentials (4 Cols) */}
            <div className="lg:col-span-4 space-y-4 text-left">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-cyan">Regulatory Certifications</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Daniel Isibor & CO is licensed and registered with professional institutes including the Institute of Chartered Accountants of Nigeria (ICAN) and the Chartered Institute of Taxation of Nigeria (CITN).
              </p>
              <div className="flex gap-2.5 pt-2">
                <span className="text-[9px] bg-white/5 border border-white/10 px-2 py-1 rounded-none font-semibold text-slate-300">ICAN</span>
                <span className="text-[9px] bg-white/5 border border-white/10 px-2 py-1 rounded-none font-semibold text-slate-300">CITN</span>
                <span className="text-[9px] bg-white/5 border border-white/10 px-2 py-1 rounded-none font-semibold text-slate-300">CIBN</span>
                <span className="text-[9px] bg-white/5 border border-white/10 px-2 py-1 rounded-none font-semibold text-slate-300">ACFE</span>
                <span className="text-[9px] bg-white/5 border border-white/10 px-2 py-1 rounded-none font-semibold text-slate-300">FRC</span>
              </div>
            </div>

          </div>

          {/* Copyright & Jurisdiction Info */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-slate-500">
            <div>
              &copy; {new Date().getFullYear()} Daniel Isibor & CO. All rights reserved.
            </div>
            <div className="flex gap-4">
              <span>Jurisdiction: Federal Republic of Nigeria</span>
              <a href="#about" className="hover:underline transition-colors">Privacy Policy</a>
              <a href="#about" className="hover:underline transition-colors">Disclaimers</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
