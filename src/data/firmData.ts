export interface ServiceItem {
  slug: string;
  title: string;
  shortSummary: string;
  answerFirst: string;
  fullDescription: string;
  whoThisIsFor: string[];
  keyBenefits: string[];
  deliverables: string[];
  iconName: string;
  relatedSlugs: string[];
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  credentials: string;
  photoUrl: string;
  shortBio: string;
  fullBio: string[];
  education: string[];
  memberships: string[];
  specialties: string[];
  linkedin?: string;
}

export interface ClientItem {
  name: string;
  category: string;
  description?: string;
  logoUrl?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const FIRM_INFO = {
  name: "Daniel Isibor & Co (Chartered Accountants)",
  shortName: "DIC",
  tagline: "High-Quality Audit, Tax & Financial Advisory in Nigeria",
  description:
    "Daniel Isibor & Co (Chartered Accountants) is a licensed professional accounting and audit firm in Abuja, Nigeria, registered with the Financial Reporting Council of Nigeria (FRC) and the Office of the Auditor General of the Federation.",
  siteUrl: "https://www.danielisiborandco.com",
  phone: "08036092574",
  phoneE164: "+2348036092574",
  email: "danielisiborandco@gmail.com",
  address: {
    street: "Suite C2, Silverline Plaza, Plot 1543, Cadastral Zone A03, Safana Close, Garki II",
    city: "Abuja",
    state: "FCT",
    country: "Nigeria",
    countryCode: "NG",
    postalCode: "900110",
  },
  geo: {
    latitude: 9.0253,
    longitude: 7.4912,
  },
  openingHours: [
    { days: "Monday – Friday", hours: "8:00 AM – 5:00 PM" }
  ],
  regulatoryAffiliations: [
    "Financial Reporting Council of Nigeria (FRC)",
    "Office of the Auditor General of the Federation",
    "Institute of Chartered Accountants of Nigeria (ICAN)",
    "Chartered Institute of Taxation of Nigeria (CITN)",
    "Chartered Institute of Bankers of Nigeria (CIBN)",
    "Association of Certified Fraud Examiners (ACFE)"
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/daniel-isibor-aca-acti-mcib-m-sc-0a545141/",
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    slug: "audit-and-assurance",
    title: "Audit and Assurance Services",
    iconName: "ShieldCheck",
    shortSummary:
      "Independent evaluation and assurance to strengthen financial integrity, governance, and stakeholder confidence.",
    answerFirst:
      "Daniel Isibor & Co provides comprehensive Audit and Assurance Services in Abuja, Nigeria. Our certified audit professionals deliver rigorous, objective assessments that sustain public trust, ensure regulatory compliance, and provide shareholders and boards with total confidence in their financial reporting.",
    fullDescription:
      "As businesses keep growing, shareholders, boards, business leaders, and stakeholders need to have confidence in the reliability and integrity of their financial information. Daniel Isibor & Co provides businesses the platform to meet their expectations, enlarge, and extend their operations so they can take a strategic position in both local and international markets.\n\nWe utilize robust audit tools, proven methodologies, and specialized procedures to deliver high-quality audit services that sustain public and stakeholder trust. In delivering these services, we adhere strictly to the highest standards of professional independence, objectivity, and technical expertise.",
    whoThisIsFor: [
      "Growing corporate enterprises preparing for institutional investment or expansion",
      "Boards of directors and audit committees requiring independent oversight",
      "Organizations seeking to bolster credibility with banks, regulators, and partners",
      "Non-profit entities and associations requiring certified assurance"
    ],
    keyBenefits: [
      "Enhanced credibility of financial statements with lenders and investors",
      "Early detection and mitigation of reporting risks and operational vulnerabilities",
      "Alignment with Nigerian and international statutory standards",
      "Actionable management letter insights to streamline internal controls"
    ],
    deliverables: [
      "Independent Auditor’s Assurance Report",
      "Management Letter highlighting internal control observations and remedies",
      "Governance and financial integrity briefing for leadership",
      "Compliance verification certificate"
    ],
    relatedSlugs: ["external-audit", "special-purpose-audit", "financial-reporting"]
  },
  {
    slug: "external-audit",
    title: "External Audit",
    iconName: "FileSearch",
    shortSummary:
      "Statutory independent audit expressing an expert opinion on financial statements in conformity with IFRS.",
    answerFirst:
      "Daniel Isibor & Co delivers statutory External Audit services across Abuja and Nigeria, providing an impartial, independent opinion on whether financial statements reflect a true and fair view in conformity with International Financial Reporting Standards (IFRS) and Nigerian regulatory frameworks.",
    fullDescription:
      "At Daniel Isibor & Co (Chartered Accountants), our primary objective as external auditors is to determine whether, in the auditor’s opinion, the financial statements present fairly in all material respects the company's financial position, results of operations, and cash flows in conformity with International Financial Reporting Standards (IFRS).\n\nDIC provides you with proper auditing and financial records to ensure full compliance with the Federal Inland Revenue Service (FIRS), state tax authorities (such as FCT-IRS), the Corporate Affairs Commission (CAC), and the Financial Reporting Council of Nigeria (FRC). We impartially examine your accounting records without personal bias, ensuring financial statements tell the unvarnished truth to prevent major losses. Furthermore, our audit process helps you identify concrete avenues for optimizing cash flows, reducing debt service interest, improving asset management, and boosting overall profitability.",
    whoThisIsFor: [
      "Limited liability companies subject to statutory annual audit requirements under CAMA 2020",
      "Public sector institutions, MDAs, and government parastatals",
      "Commercial entities preparing tax returns for FIRS and FCT-IRS",
      "Financial institutions and microfinance banks needing independent audits"
    ],
    keyBenefits: [
      "Uncompromising compliance with CAMA 2020, FRC regulations, and IFRS standards",
      "Robust defense during statutory tax audits and regulatory inspections",
      "Independent verification of asset valuation and liability schedules",
      "Constructive advisory notes on cash flow optimization and cost containment"
    ],
    deliverables: [
      "Signed and stamped Statutory Independent Auditor’s Report",
      "Audited Financial Statements (Statement of Financial Position, Profit or Loss, Cash Flows, Notes)",
      "Detailed Management Letter with risk rating and recommendations",
      "Filing-ready documentation for CAC, FIRS, and FRC"
    ],
    relatedSlugs: ["audit-and-assurance", "financial-reporting", "tax-management-and-advisory"]
  },
  {
    slug: "tax-management-and-advisory",
    title: "Tax Management and Advisory Services",
    iconName: "Calculator",
    shortSummary:
      "Strategic tax planning, CITN-compliant filing, tax health checks, and dispute resolution with tax authorities.",
    answerFirst:
      "Daniel Isibor & Co delivers strategic Tax Management and Advisory Services in Abuja and across Nigeria. Led by accredited members of the Chartered Institute of Taxation of Nigeria (CITN), we assist businesses in minimizing tax liabilities legally, resolving tax audits, and achieving total compliance with FIRS and state revenue services.",
    fullDescription:
      "Every business operating in Nigeria is faced with the complex challenge of navigating evolving tax laws, multiple taxation tiers, and stringent enforcement from revenue authorities. This is an intricate domain that requires the guidance of experienced tax practitioners.\n\nAt Daniel Isibor & Co, our tax experts provide comprehensive corporate and personal tax management. We manage your Company Income Tax (CIT), Value Added Tax (VAT), Withholding Tax (WHT), Personal Income Tax / PAYE, and Capital Gains Tax. We conduct thorough tax health checks, recommend optimal tax structures, represent your firm during desk reviews and field tax audits, and save you valuable time, effort, and punitive penalty charges.",
    whoThisIsFor: [
      "Businesses navigating complex tax audits with FIRS or FCT-IRS",
      "Corporate organizations aiming to optimize their effective tax rate legitimately",
      "Employers managing PAYE remittances and employee tax compliance",
      "Companies seeking Tax Clearance Certificates (TCC) for public bidding and contracts"
    ],
    keyBenefits: [
      "Substantial reduction of unnecessary tax exposures and late filing penalties",
      "Streamlined processing of Tax Clearance Certificates (TCC)",
      "Expert representation during tax reconciliation and dispute conferences",
      "Proactive structuring aligned with the latest Finance Acts and regulations"
    ],
    deliverables: [
      "Annual Company Income Tax (CIT) computation and filing package",
      "Monthly VAT, WHT, and PAYE remittance schedules and returns",
      "Comprehensive Corporate Tax Health Check Report",
      "Tax Clearance Certificate (TCC) procurement assistance"
    ],
    relatedSlugs: ["external-audit", "financial-reporting", "special-purpose-audit"]
  },
  {
    slug: "accounting-software-consultancy",
    title: "Accounting Software Consultancy",
    iconName: "Briefcase",
    shortSummary:
      "Selection, setup, customization, and training for modern accounting systems like QuickBooks, ERP, and Sage.",
    answerFirst:
      "Daniel Isibor & Co provides specialized Accounting Software Consultancy in Abuja, Nigeria. We guide organizations through system selection, installation, chart of accounts customization, cloud integration, and staff training for QuickBooks, Sage, and Enterprise Resource Planning (ERP) solutions.",
    fullDescription:
      "In today’s dynamic business environment, organizations require efficient, technology-driven systems to manage their accounting and financial operations accurately and in real time. At Daniel Isibor & Co, we provide Accounting Software Consultancy designed to help businesses automate financial processes, improve reporting precision, and enhance operational efficiency.\n\nWe begin by conducting a comprehensive system study to understand the structure, workflows, and operational needs of each client. This enables us to identify workflow bottlenecks and recommend tailored software solutions aligned with the client’s business model, transaction volume, and reporting requirements.\n\nOur consultants support clients throughout software selection, installation, chart-of-accounts structuring, data migration, and third-party integrations. We deliver hands-on user training to ensure smooth adoption across teams. Beyond deployment, DIC offers ongoing technical maintenance, periodic system reviews, and internal control configurations to safeguard financial integrity.",
    whoThisIsFor: [
      "SMEs transitioning from manual or spreadsheet-based bookkeeping to automated systems",
      "Companies upgrading legacy software to modern cloud-based ERP solutions",
      "Organizations requiring multi-branch or multi-currency accounting systems",
      "Enterprises seeking real-time management dashboard analytics and inventory controls"
    ],
    keyBenefits: [
      "90% reduction in manual data entry errors and financial reconciliation delays",
      "Real-time financial visibility and automated management reporting",
      "Role-based access controls protecting sensitive payroll and banking records",
      "Seamless cloud accessibility for remote decision-makers"
    ],
    deliverables: [
      "Customized Chart of Accounts tailored to industry reporting standards",
      "Fully configured and tested accounting software environment (QuickBooks, Sage, ERP)",
      "Staff user manuals and hands-on operational training workshops",
      "Post-implementation support and system health audits"
    ],
    relatedSlugs: ["financial-reporting", "audit-and-assurance", "special-purpose-audit"]
  },
  {
    slug: "special-purpose-audit",
    title: "Special Purpose Audit",
    iconName: "Info",
    shortSummary:
      "Focused non-statutory audits, forensic investigations, grant compliance reviews, and due diligence assessments.",
    answerFirst:
      "Daniel Isibor & Co conducts specialized Special Purpose Audits in Abuja and throughout Nigeria. Our certified forensic and audit practitioners deliver targeted evaluations of internal controls, project expenditures, donor grant compliance, fraud risks, and mergers & acquisitions due diligence.",
    fullDescription:
      "At Daniel Isibor & Co (Chartered Accountants), we understand that organizations frequently require targeted, independent reviews beyond statutory audits to address specific strategic objectives or investigate unique operational concerns. Our Special Purpose Audit services provide management, investors, donor agencies, and stakeholders with focused and reliable insights into key operational areas.\n\nWe conduct non-statutory audits, agreed-upon procedures (AUP), and specialized reviews evaluating internal controls, donor/grant agreement compliance, project cost efficiency, asset utilization, and financial forensics. Our approach goes beyond mere compliance—we deliver practical recommendations that strengthen governance structures, enhance transparency, and eliminate leakages. Leveraging our multidisciplinary expertise in accounting, forensic investigation (ACFE), and risk management, we help clients resolve vulnerabilities and drive sustainable performance.",
    whoThisIsFor: [
      "Non-Governmental Organizations (NGOs) and grant recipients reporting to international donors",
      "Investors and acquirers conducting financial and tax due diligence",
      "Companies requiring forensic investigation into suspected asset diversion or fraud",
      "Project managers auditing capital project expenditure and contractor deliverables"
    ],
    keyBenefits: [
      "Granular verification of funds utilization against approved budgets and grant covenants",
      "Independent evidence gathering suitable for stakeholder review or legal proceedings",
      "Actionable recommendations to plug operational leakages and reinforce internal controls",
      "Heightened donor and investor confidence facilitating future project allocations"
    ],
    deliverables: [
      "Targeted Special Purpose Audit or Agreed-Upon Procedures (AUP) Report",
      "Internal Control and Risk Exposure Assessment",
      "Forensic Findings & Evidence Summary (where applicable)",
      "Corrective action plan and governance roadmap"
    ],
    relatedSlugs: ["audit-and-assurance", "external-audit", "tax-management-and-advisory"]
  },
  {
    slug: "financial-reporting",
    title: "Financial Reporting",
    iconName: "FileText",
    shortSummary:
      "Preparation of GAAP & IFRS-compliant annual accounts, management statements, and cash flow projections.",
    answerFirst:
      "Daniel Isibor & Co provides expert Financial Reporting services in Abuja, Nigeria. Our chartered accountants prepare compliant, accurate financial statements—including Balance Sheet, Profit & Loss, Cash Flow Statements, and Notes—strictly adhering to Nigerian standards and International Financial Reporting Standards (IFRS).",
    fullDescription:
      "Reliable financial statements are the bedrock of sound corporate governance, investor trust, and effective business management. Our team of professionals at Daniel Isibor & Co provides clients with financial reporting services that comply fully with Nigerian statutory requirements and International Financial Reporting Standards (IFRS / IFRS for SMEs).\n\nOur qualified chartered accountants prepare complete sets of financial statements, including Statement of Financial Position, Statement of Profit or Loss and Other Comprehensive Income, Statement of Changes in Equity, Statement of Cash Flows, and accompanying Explanatory Notes. In addition to annual statutory accounts, we prepare periodic management accounts, financial forecasts, and key performance indicator (KPI) dashboards that empower leadership to make data-backed strategic decisions.",
    whoThisIsFor: [
      "SMEs requiring professional compilation of monthly, quarterly, and annual accounts",
      "Firms preparing for year-end statutory audit and tax filings",
      "Organizations converting from local accounting principles to IFRS or IFRS for SMEs",
      "Startups and fast-growing businesses needing investor-grade financial packages"
    ],
    keyBenefits: [
      "Complete accuracy and IFRS compliance eliminating audit adjustments",
      "Timely delivery of monthly and quarterly management accounts for decision-making",
      "Enhanced transparency and standing with banks, credit bureaus, and investors",
      "Seamless integration with statutory tax return filings"
    ],
    deliverables: [
      "Full IFRS-compliant Annual Financial Statements with explanatory notes",
      "Monthly & Quarterly Management Accounts with variance analysis",
      "Cash Flow Projections and Working Capital Models",
      "Fixed Asset Register and Depreciation Schedules"
    ],
    relatedSlugs: ["external-audit", "accounting-software-consultancy", "tax-management-and-advisory"]
  }
];

export const TEAM_DATA: TeamMember[] = [
  {
    slug: "daniel-isibor",
    name: "Daniel Isibor",
    role: "Principal Partner",
    credentials: "ACA, ACTI, MCIB, M.Sc, B.Sc",
    photoUrl: "/images/Mr Daniel.jpeg",
    shortBio:
      "Seasoned finance professional with over 15 years of experience spanning Accounting, Auditing, Taxation, Enterprise Risk Management, and Banking.",
    fullBio: [
      "Daniel Isibor is a seasoned finance professional with over 15 years of distinguished experience spanning Accounting, Auditing, Taxation, Enterprise Risk Management, Compliance Management, Fraud Investigation, Credit Management, and Debt Recovery.",
      "He is a Chartered Accountant and an Associate of the Institute of Chartered Accountants of Nigeria (ICAN). Daniel is also an Associate of the Chartered Institute of Taxation of Nigeria (CITN), a member of the Chartered Institute of Bankers of Nigeria (CIBN), and a registered professional with the Financial Reporting Council of Nigeria (FRC)—the regulatory authority for financial reporting standards in Nigeria.",
      "An alumnus of Ahmadu Bello University, Daniel holds a Bachelor's degree in Accounting and a Master of Science (M.Sc.) in Finance and Accounting.",
      "With over a decade of high-level banking experience, he has held key leadership positions including Financial Controller, Chief Internal Auditor, and Head of Enterprise Risk Management. Beyond the banking sector, Daniel served as Chief Internal Auditor at News Engineering (Nig.) Limited—one of the largest electrical construction companies in Nigeria—and as an Audit Partner at Adebowale Oyeniran & Co. (Chartered Accountants), one of Abuja’s foremost accounting firms."
    ],
    education: [
      "M.Sc. in Finance and Accounting – Ahmadu Bello University (ABU), Zaria",
      "B.Sc. in Accounting – Ahmadu Bello University (ABU), Zaria"
    ],
    memberships: [
      "Institute of Chartered Accountants of Nigeria (ICAN) – Associate (ACA)",
      "Chartered Institute of Taxation of Nigeria (CITN) – Associate (ACTI)",
      "Chartered Institute of Bankers of Nigeria (CIBN) – Member (MCIB)",
      "Financial Reporting Council of Nigeria (FRC) – Registered Professional"
    ],
    specialties: [
      "Statutory Audit & Assurance",
      "Enterprise Risk Management (ERM)",
      "Corporate Taxation & Planning",
      "Forensic Accounting & Debt Recovery",
      "Banking & Treasury Operations"
    ],
    linkedin: "https://www.linkedin.com/in/daniel-isibor-aca-acti-mcib-m-sc-0a545141/"
  },
  {
    slug: "rukayat-hassan-daniel",
    name: "Rukayat Hassan-Daniel",
    role: "Senior Partner",
    credentials: "ACA, ACTI, MBA, B.Sc",
    photoUrl: "",
    shortBio:
      "Goal-driven chartered accountant with 15+ years of specialized expertise in Financial Forecasting, NGO Accounting, and Capacity Building.",
    fullBio: [
      "Rukayat Hassan-Daniel is a goal-driven finance executive with over 15 years of specialized expertise in Financial Forecasting, Financial Reporting, Financial Management, Human Resource Management, Capacity Building, and Accounting for Non-Governmental Organizations (NGOs).",
      "Rukayat is a seasoned Chartered Accountant and an Associate of both the Institute of Chartered Accountants of Nigeria (ICAN) and the Chartered Institute of Taxation of Nigeria (CITN). She is also a registered professional with the Financial Reporting Council of Nigeria (FRC), the statutory body responsible for regulating financial reporting standards in the country.",
      "An alumna of Ahmadu Bello University, Rukayat holds a Bachelor’s degree in Accounting and a Master of Business Administration (MBA).",
      "Prior to co-founding Daniel Isibor & Co, she gained valuable professional experience with Deinde Odusanya & Co. (Chartered Accountants), one of the foremost auditing firms in Lagos, and Cypress Consult Limited, one of Nigeria’s leading civil construction companies. Rukayat has also participated in several professional development programs and executive trainings on Financial Forecasting, Financial Management, and IFRS Reporting organized by ICAN."
    ],
    education: [
      "Master of Business Administration (MBA) – Ahmadu Bello University (ABU), Zaria",
      "B.Sc. in Accounting – Ahmadu Bello University (ABU), Zaria"
    ],
    memberships: [
      "Institute of Chartered Accountants of Nigeria (ICAN) – Associate (ACA)",
      "Chartered Institute of Taxation of Nigeria (CITN) – Associate (ACTI)",
      "Financial Reporting Council of Nigeria (FRC) – Registered Professional"
    ],
    specialties: [
      "Non-Profit & NGO Financial Management",
      "Financial Forecasting & Budgetary Modeling",
      "IFRS Financial Statement Compilation",
      "Organizational Capacity Building",
      "Corporate Governance & Compliance"
    ]
  },
  {
    slug: "chijioke-agbedo",
    name: "Chijioke Agbedo",
    role: "Partner – Tax Management & Advisory Services",
    credentials: "ACA, AAT, CISA, ACFE",
    photoUrl: "",
    shortBio:
      "Taxation, fraud investigation, and financial management specialist with over 10 years of professional consulting practice.",
    fullBio: [
      "Chijioke Agbedo holds a Bachelor’s degree in Accounting from the University of Abuja and is an accomplished Chartered Accountant. He is an Associate Member of both the Institute of Chartered Accountants of Nigeria (ICAN) and the Chartered Institute of Taxation of Nigeria (CITN).",
      "In addition, Chijioke is a Certified Fraud Examiner (CFE) and a member of the Association of Certified Fraud Examiners (ACFE), bringing sophisticated investigative insight to tax and audit procedures.",
      "With over 10 years of professional consulting practice, Chijioke’s core area of expertise lies in corporate taxation, complemented by extensive skills in financial management, fraud investigation, and IT systems audit. He previously served as Team Lead for Tax Matters at Umuhefe & Co. (Chartered Accountants) and later as Financial Controller at Safeline Microfinance Bank."
    ],
    education: [
      "B.Sc. in Accounting – University of Abuja",
      "Association of Accounting Technicians (AAT)"
    ],
    memberships: [
      "Institute of Chartered Accountants of Nigeria (ICAN) – Associate (ACA)",
      "Chartered Institute of Taxation of Nigeria (CITN) – Associate (ACTI)",
      "Association of Certified Fraud Examiners (ACFE) – Certified Fraud Examiner (CFE)",
      "Information Systems Audit and Control Association (ISACA) – CISA"
    ],
    specialties: [
      "Corporate & Direct Tax Advisory",
      "Tax Audit Defense & Resolution",
      "Fraud Examination & Forensic Auditing",
      "Information Systems & Financial Controls Audit"
    ]
  },
  {
    slug: "mayowa-omotosho",
    name: "Mayowa Omotosho",
    role: "Senior Manager – Compliance",
    credentials: "B.Sc (Accounting), Data & Systems Specialist",
    photoUrl: "",
    shortBio:
      "Compliance and systems specialist skilled in financial analysis, Power BI, SQL, and management account preparation.",
    fullBio: [
      "Mayowa Omotosho holds a Bachelor’s degree in Accounting from the University of Ilorin and is an alumnus of Ahmadu Bello University. He is highly skilled in modern financial analysis and corporate reporting, with hands-on expertise in Power BI, Microsoft Excel modeling, and SQL database querying.",
      "Mayowa’s professional experience covers bank reconciliations, cash flow management, internal control reviews, and the preparation of monthly, quarterly, and annual management accounts.",
      "He previously served as Accountant at Laguru Health Club Ltd and later as Finance Manager at Bella Afrik Suites and Apartments. Mayowa has participated in several technical trainings focused on computer systems, network security, and financial technology, empowering clients to streamline operational efficiency and optimize internal systems."
    ],
    education: [
      "B.Sc. in Accounting – University of Ilorin",
      "Executive Professional Development – Ahmadu Bello University"
    ],
    memberships: [
      "Financial Data Analytics & Systems Audit Network"
    ],
    specialties: [
      "Statutory & Regulatory Compliance",
      "Management Accounting & Reporting",
      "Business Intelligence (Power BI & SQL)",
      "Cash Flow & Working Capital Optimization"
    ]
  },
  {
    slug: "idris-husseini",
    name: "Idris Husseini",
    role: "Audit Manager",
    credentials: "ACA, B.Sc, HND, OND",
    photoUrl: "",
    shortBio:
      "Highly skilled chartered accountant with 12 years of experience in auditing MDAs, financial reporting, and complex analysis.",
    fullBio: [
      "Idris Husseini is an experienced and highly skilled Chartered Accountant with 12 years of hands-on practice in financial reporting, statutory auditing, and strategic financial analysis.",
      "Idris possesses strong analytical skills and the ability to evaluate complex financial datasets to provide actionable business insight. He holds a B.Sc in Accounting (Second Class Upper Division) from the Federal University of Gusau, Zamfara State, as well as an HND and OND in Accounting.",
      "Before joining Daniel Isibor & Co, Idris trained with Anefu, Snoe & Co in Zamfara, where he led major audit engagements and supervised comprehensive statutory audits of Ministries, Departments, and Agencies (MDAs)."
    ],
    education: [
      "B.Sc. in Accounting (Second Class Upper) – Federal University of Gusau",
      "Higher National Diploma (HND) in Accounting",
      "National Diploma (OND) in Accounting"
    ],
    memberships: [
      "Institute of Chartered Accountants of Nigeria (ICAN) – Associate (ACA)"
    ],
    specialties: [
      "Public Sector & MDA Auditing",
      "Statutory Field Audit Leadership",
      "Financial Statement Verification",
      "Analytical Review & Risk Assessment"
    ]
  }
];

export const CLIENTS_DATA: ClientItem[] = [
  {
    name: "Federal Capital Territory Inland Revenue Service (FCT-IRS)",
    category: "Government Agency & Revenue Authority",
    description: "Statutory tax audit and revenue verification engagements.",
    logoUrl: ""
  },
  {
    name: "Navy Microfinance Bank",
    category: "Financial Institution & Microfinance",
    description: "Financial advisory, risk management, and internal control reviews.",
    logoUrl: ""
  },
  {
    name: "Startrite Schools",
    category: "Education & Institutional Management",
    description: "Financial reporting, payroll structuring, and software advisory.",
    logoUrl: ""
  },
  {
    name: "News Engineering (Nig.) Ltd",
    category: "Civil & Electrical Engineering",
    description: "Internal audit oversight, tax advisory, and compliance management.",
    logoUrl: ""
  },
  {
    name: "Dee Utensils",
    category: "Commercial & Retail Enterprise",
    description: "Accounting software setup, inventory accounting, and tax compliance.",
    logoUrl: ""
  },
  {
    name: "International Women's Federation of Commerce and Industry Nigeria LTD/GTE",
    category: "Non-Governmental Organization & Association",
    description: "Non-profit accounting, grant compliance, and assurance services.",
    logoUrl: ""
  },
  {
    name: "Leobob Engineering Services Ltd",
    category: "Engineering & Infrastructure",
    description: "Statutory external audit and corporate tax advisory.",
    logoUrl: ""
  },
  {
    name: "Kumcyn Global Consultancy Ltd",
    category: "Corporate Consultancy",
    description: "Financial management and special purpose review.",
    logoUrl: ""
  },
  {
    name: "Ara Contemporary Ltd",
    category: "Creative & Commercial Enterprise",
    description: "Financial reporting, accounting software implementation, and tax filings.",
    logoUrl: ""
  },
  {
    name: "Hub360 Circuits Ltd",
    category: "Technology & Hardware Engineering",
    description: "Financial modeling, tax advisory, and cloud accounting configuration.",
    logoUrl: ""
  },
  {
    name: "Fountain Credit Services Ltd",
    category: "Financial Services & Credit Management",
    description: "Statutory audit, risk management, and loan portfolio review.",
    logoUrl: ""
  },
  {
    name: "Karvi Logistics Ltd",
    category: "Logistics & Supply Chain",
    description: "External audit, tax health checks, and cash flow analysis.",
    logoUrl: ""
  },
  {
    name: "Alphamed Supply Ltd",
    category: "Healthcare & Medical Supplies",
    description: "Financial statement compilation and tax compliance.",
    logoUrl: ""
  },
  {
    name: "Kumcyn Farms",
    category: "Agriculture & Agro-Allied",
    description: "Cost accounting, asset verification, and accounting advisory.",
    logoUrl: ""
  }
];

export const INDUSTRIES_SERVED = [
  "Corporate Enterprises & Commercial Entities",
  "Small & Mid-Size Businesses (SMEs)",
  "Government Agencies & MDAs",
  "Non-Governmental Organizations (NGOs) & Non-Profits",
  "Financial Institutions & Microfinance Banks",
  "Engineering, Construction & Infrastructure",
  "Technology, Startups & Circuit Innovations",
  "Agriculture & Agro-Allied Ventures"
];

export const FAQS_DATA: FaqItem[] = [
  {
    question: "What auditing services does Daniel Isibor & Co provide in Nigeria?",
    answer:
      "Daniel Isibor & Co provides comprehensive External Audits (expressing independent opinions on financial statements under IFRS and CAMA 2020), Special Purpose Audits (assessing internal controls, grant compliance, project performance, and fraud prevention), and overall Audit and Assurance services to build stakeholder and regulatory trust.",
    category: "Audit & Assurance"
  },
  {
    question: "Is Daniel Isibor & Co registered with the Financial Reporting Council of Nigeria (FRC)?",
    answer:
      "Yes. Daniel Isibor & Co is an audit firm registered with the Financial Reporting Council of Nigeria (FRC). Our partners are licensed chartered accountants and tax practitioners with ICAN, CITN, CIBN, and ACFE, and we are registered with the Office of the Auditor General of the Federation for public sector engagements.",
    category: "Accreditation & Compliance"
  },
  {
    question: "How do your tax management and advisory services benefit businesses?",
    answer:
      "Our CITN-certified tax practitioners handle comprehensive corporate tax planning, annual Company Income Tax (CIT) filing, monthly VAT and WHT schedules, PAYE administration, tax audit defense, and Tax Clearance Certificate (TCC) procurement. We ensure total compliance with FIRS and state revenue authorities like FCT-IRS while legally optimizing your tax liability.",
    category: "Tax Management"
  },
  {
    question: "Which accounting software systems do you support and implement?",
    answer:
      "We provide end-to-end consulting, system selection, chart-of-accounts structuring, deployment, and staff training for leading accounting packages including QuickBooks (Online and Desktop), Sage 50 / Sage ERP, and custom Enterprise Resource Planning (ERP) systems.",
    category: "Software Consultancy"
  },
  {
    question: "Do you support small and mid-sized enterprises (SMEs)?",
    answer:
      "Yes. A core pillar of our practice is empowering SMEs. We free business owners and founders from complex back-office accounting, payroll, and tax burdens so they can focus on revenue generation, customer acquisition, and profitability.",
    category: "General"
  },
  {
    question: "Where is Daniel Isibor & Co located, and do you serve clients outside Abuja?",
    answer:
      "Our principal office is located at Suite C2, Silverline Plaza, Plot 1543, Cadastral Zone A03, Safana Close, Garki II, Abuja, FCT. While rooted in Abuja, we serve corporate clients, NGOs, and public institutions across all 36 states of Nigeria through secure cloud-based workflows and on-site audit missions.",
    category: "General"
  },
  {
    question: "What is the difference between a statutory external audit and a special purpose audit?",
    answer:
      "A statutory external audit is a mandatory annual review required by CAMA 2020 to express an independent opinion on the entire financial statement for shareholders and regulators. A special purpose audit is a targeted investigation into specific areas—such as grant compliance for donor funds, internal control weaknesses, forensic fraud reviews, or merger due diligence.",
    category: "Audit & Assurance"
  },
  {
    question: "How can we engage Daniel Isibor & Co for our company’s audit or tax work?",
    answer:
      "You can book a consultation by reaching out via phone at 08036092574 (+2348036092574), emailing danielisiborandco@gmail.com, or submitting the consultation form on our website. Our partners will promptly review your requirements and provide a tailored scope of service and proposal.",
    category: "General"
  }
];
