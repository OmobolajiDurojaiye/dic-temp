import React from "react";
import TickMark from "./TickMark";

interface LedgerGraphicProps {
  slug: string;
  className?: string;
}

export default function LedgerGraphic({ slug, className = "" }: LedgerGraphicProps) {
  switch (slug) {
    case "audit-and-assurance":
      return (
        <div className={`bg-[#F6F2E9] border border-[#B08D3E]/30 p-5 font-mono text-xs text-[#101F38] ledger-grid-bg relative overflow-hidden select-none ${className}`}>
          <div className="flex justify-between items-center pb-2 border-b border-[#5B6B7F]/20 text-[10px] text-[#5B6B7F]">
            <span>REF: WP-AUD-04/ASSURANCE</span>
            <span className="text-[#B08D3E] font-bold">IFRS / ISA AUDIT WORKPAPER</span>
          </div>
          <div className="py-3 space-y-2 text-[11px]">
            <div className="flex justify-between items-center py-1 border-b border-[#5B6B7F]/10">
              <span className="text-[#101F38] font-medium">01. Internal Controls & Governance Oversight</span>
              <div className="flex items-center gap-1.5 font-bold">
                <span className="text-[#5B6B7F]">VERIFIED</span>
                <TickMark variant="rust" size="sm" />
              </div>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-[#5B6B7F]/10">
              <span className="text-[#101F38] font-medium">02. Substantive Analytical Procedures</span>
              <div className="flex items-center gap-1.5 font-bold">
                <span className="text-[#5B6B7F]">CONFORMED</span>
                <TickMark variant="rust" size="sm" />
              </div>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-[#5B6B7F]/10">
              <span className="text-[#101F38] font-medium">03. Stakeholder Assurance & Public Trust</span>
              <div className="flex items-center gap-1.5 font-bold">
                <span className="text-[#5B6B7F]">SIGNED</span>
                <TickMark variant="rust" size="sm" />
              </div>
            </div>
          </div>
          <div className="pt-2 flex justify-between items-center text-[10px] text-[#5B6B7F] border-t border-[#5B6B7F]/20">
            <span>ENGAGEMENT: DANIEL ISIBOR & CO</span>
            <span className="font-bold text-[#101F38]">STATUS: OPINION ISSUED</span>
          </div>
        </div>
      );

    case "external-audit":
      return (
        <div className={`bg-[#F6F2E9] border border-[#B08D3E]/30 p-5 font-mono text-xs text-[#101F38] ledger-grid-bg relative overflow-hidden select-none ${className}`}>
          <div className="flex justify-between items-center pb-2 border-b border-[#5B6B7F]/20 text-[10px] text-[#5B6B7F]">
            <span>SCHEDULE: STATUTORY BALANCE SHEET</span>
            <span className="text-[#B08D3E] font-bold">CAMA 2020 / FRC REG.</span>
          </div>
          <div className="py-3 space-y-2 text-[11px]">
            <div className="flex justify-between items-center py-1 border-b border-[#5B6B7F]/10">
              <span>Non-Current Assets (Valued at Cost)</span>
              <div className="flex items-center gap-2">
                <span className="text-[#101F38] font-bold">₦482,500,000</span>
                <TickMark variant="rust" size="sm" />
              </div>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-[#5B6B7F]/10">
              <span>Current Assets & Cash Equivalents</span>
              <div className="flex items-center gap-2">
                <span className="text-[#101F38] font-bold">₦129,400,000</span>
                <TickMark variant="rust" size="sm" />
              </div>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-[#5B6B7F]/10">
              <span>Total Equity & Shareholders' Funds</span>
              <div className="flex items-center gap-2">
                <span className="text-[#101F38] font-bold">₦611,900,000</span>
                <TickMark variant="rust" size="sm" />
              </div>
            </div>
          </div>
          <div className="pt-2 flex justify-between items-center text-[10px] text-[#5B6B7F] border-t border-[#5B6B7F]/20">
            <span>INDEPENDENT AUDITOR OPINION: TRUE & FAIR VIEW</span>
            <span className="text-[#A3462B] font-bold">✓ VERIFIED</span>
          </div>
        </div>
      );

    case "tax-management-and-advisory":
      return (
        <div className={`bg-[#F6F2E9] border border-[#B08D3E]/30 p-5 font-mono text-xs text-[#101F38] ledger-grid-bg relative overflow-hidden select-none ${className}`}>
          <div className="flex justify-between items-center pb-2 border-b border-[#5B6B7F]/20 text-[10px] text-[#5B6B7F]">
            <span>TAX SCHEDULE: CITN ACCREDITED</span>
            <span className="text-[#B08D3E] font-bold">FIRS / FCT-IRS COMPLIANCE</span>
          </div>
          <div className="py-3 space-y-2 text-[11px]">
            <div className="flex justify-between items-center py-1 border-b border-[#5B6B7F]/10">
              <span>Company Income Tax (CIT) Computation</span>
              <div className="flex items-center gap-1.5 font-bold">
                <span className="text-[#101F38]">OPTIMIZED</span>
                <TickMark variant="rust" size="sm" />
              </div>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-[#5B6B7F]/10">
              <span>VAT & WHT Monthly Returns Reconciliation</span>
              <div className="flex items-center gap-1.5 font-bold">
                <span className="text-[#101F38]">FILED</span>
                <TickMark variant="rust" size="sm" />
              </div>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-[#5B6B7F]/10">
              <span>Tax Clearance Certificate (TCC) Eligibility</span>
              <div className="flex items-center gap-1.5 font-bold">
                <span className="text-[#101F38]">CLEARED</span>
                <TickMark variant="rust" size="sm" />
              </div>
            </div>
          </div>
          <div className="pt-2 flex justify-between items-center text-[10px] text-[#5B6B7F] border-t border-[#5B6B7F]/20">
            <span>PRACTITIONER: CITN CERTIFIED PARTNER</span>
            <span className="font-bold text-[#101F38]">DEFENSE: 100% SECURED</span>
          </div>
        </div>
      );

    case "accounting-software-consultancy":
      return (
        <div className={`bg-[#F6F2E9] border border-[#B08D3E]/30 p-5 font-mono text-xs text-[#101F38] ledger-grid-bg relative overflow-hidden select-none ${className}`}>
          <div className="flex justify-between items-center pb-2 border-b border-[#5B6B7F]/20 text-[10px] text-[#5B6B7F]">
            <span>SYSTEM ARCHITECTURE: ERP & CLOUD</span>
            <span className="text-[#B08D3E] font-bold">QUICKBOOKS • SAGE • ERP</span>
          </div>
          <div className="py-3 space-y-2 text-[11px]">
            <div className="flex justify-between items-center py-1 border-b border-[#5B6B7F]/10">
              <span>Chart of Accounts Customization</span>
              <div className="flex items-center gap-1.5 font-bold">
                <span className="text-[#101F38]">CONFIGURED</span>
                <TickMark variant="rust" size="sm" />
              </div>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-[#5B6B7F]/10">
              <span>Multi-Currency & Inventory Automation</span>
              <div className="flex items-center gap-1.5 font-bold">
                <span className="text-[#101F38]">SYNCED</span>
                <TickMark variant="rust" size="sm" />
              </div>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-[#5B6B7F]/10">
              <span>Role-Based Security & Audit Trails</span>
              <div className="flex items-center gap-1.5 font-bold">
                <span className="text-[#101F38]">PROTECTED</span>
                <TickMark variant="rust" size="sm" />
              </div>
            </div>
          </div>
          <div className="pt-2 flex justify-between items-center text-[10px] text-[#5B6B7F] border-t border-[#5B6B7F]/20">
            <span>USER ADOPTION: 100% TRAINED</span>
            <span className="font-bold text-[#101F38]">REAL-TIME REPORTING</span>
          </div>
        </div>
      );

    case "special-purpose-audit":
      return (
        <div className={`bg-[#F6F2E9] border border-[#B08D3E]/30 p-5 font-mono text-xs text-[#101F38] ledger-grid-bg relative overflow-hidden select-none ${className}`}>
          <div className="flex justify-between items-center pb-2 border-b border-[#5B6B7F]/20 text-[10px] text-[#5B6B7F]">
            <span>SPECIAL REVIEW: AGREED-UPON PROCEDURES</span>
            <span className="text-[#B08D3E] font-bold">ACFE FORENSIC / GRANT</span>
          </div>
          <div className="py-3 space-y-2 text-[11px]">
            <div className="flex justify-between items-center py-1 border-b border-[#5B6B7F]/10">
              <span>Donor / Grant Covenant Compliance</span>
              <div className="flex items-center gap-1.5 font-bold">
                <span className="text-[#101F38]">CONFIRMED</span>
                <TickMark variant="rust" size="sm" />
              </div>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-[#5B6B7F]/10">
              <span>Capital Project Expenditure & Asset Trace</span>
              <div className="flex items-center gap-1.5 font-bold">
                <span className="text-[#101F38]">RECONCILED</span>
                <TickMark variant="rust" size="sm" />
              </div>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-[#5B6B7F]/10">
              <span>Internal Control Vulnerability Analysis</span>
              <div className="flex items-center gap-1.5 font-bold">
                <span className="text-[#101F38]">REMEDIED</span>
                <TickMark variant="rust" size="sm" />
              </div>
            </div>
          </div>
          <div className="pt-2 flex justify-between items-center text-[10px] text-[#5B6B7F] border-t border-[#5B6B7F]/20">
            <span>FORENSIC EXAMINER: CERTIFIED CFE</span>
            <span className="font-bold text-[#101F38]">REPORT DELIVERED</span>
          </div>
        </div>
      );

    case "financial-reporting":
    default:
      return (
        <div className={`bg-[#F6F2E9] border border-[#B08D3E]/30 p-5 font-mono text-xs text-[#101F38] ledger-grid-bg relative overflow-hidden select-none ${className}`}>
          <div className="flex justify-between items-center pb-2 border-b border-[#5B6B7F]/20 text-[10px] text-[#5B6B7F]">
            <span>IFRS COMPILATION: ANNUAL STATEMENTS</span>
            <span className="text-[#B08D3E] font-bold">STATEMENT OF POSITION</span>
          </div>
          <div className="py-3 space-y-2 text-[11px]">
            <div className="flex justify-between items-center py-1 border-b border-[#5B6B7F]/10">
              <span>Statement of Profit or Loss & OCI</span>
              <div className="flex items-center gap-1.5 font-bold">
                <span className="text-[#101F38]">IFRS COMPLIANT</span>
                <TickMark variant="rust" size="sm" />
              </div>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-[#5B6B7F]/10">
              <span>Statement of Cash Flows (Direct Method)</span>
              <div className="flex items-center gap-1.5 font-bold">
                <span className="text-[#101F38]">BALANCED</span>
                <TickMark variant="rust" size="sm" />
              </div>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-[#5B6B7F]/10">
              <span>Monthly Management Accounts & KPI Deck</span>
              <div className="flex items-center gap-1.5 font-bold">
                <span className="text-[#101F38]">DELIVERED</span>
                <TickMark variant="rust" size="sm" />
              </div>
            </div>
          </div>
          <div className="pt-2 flex justify-between items-center text-[10px] text-[#5B6B7F] border-t border-[#5B6B7F]/20">
            <span>STANDARD: IFRS / IFRS FOR SMES</span>
            <span className="font-bold text-[#101F38]">VERIFIED ACCURACY</span>
          </div>
        </div>
      );
  }
}
