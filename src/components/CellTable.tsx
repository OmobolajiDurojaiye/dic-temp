import React from "react";

export interface CellItem {
  label: string;
  value: string;
  subvalue?: string;
  highlight?: boolean;
}

interface CellTableProps {
  items: CellItem[];
  columns?: 1 | 2 | 3 | 4;
  dark?: boolean;
  className?: string;
}

export default function CellTable({
  items,
  columns = 3,
  dark = false,
  className = ""
}: CellTableProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
  }[columns];

  return (
    <div
      className={`grid ${gridCols} border ${
        dark ? "border-white/20 bg-[#13294B]" : "border-[#5C7089]/25 bg-white"
      } rounded-[4px] overflow-hidden ${className}`}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={`p-4 sm:p-5 flex flex-col justify-between border-b sm:border-b-0 border-r last:border-r-0 last:border-b-0 ${
            dark ? "border-white/15" : "border-[#5C7089]/20"
          } ${item.highlight ? (dark ? "bg-[#3B9FE0]/10" : "bg-[#3B9FE0]/5") : ""}`}
        >
          <span
            className={`font-mono text-[11px] uppercase tracking-wider block ${
              dark ? "text-slate-400" : "text-[#5C7089]"
            }`}
          >
            {item.label}
          </span>
          <div className="mt-2 flex items-baseline justify-between gap-2">
            <span
              className={`font-mono text-xl sm:text-2xl font-bold tracking-tight ${
                dark ? "text-white" : "text-[#0B1E3D]"
              } ${item.highlight ? "text-[#3B9FE0]" : ""}`}
            >
              {item.value}
            </span>
            {item.subvalue && (
              <span
                className={`font-mono text-[10px] uppercase tracking-widest ${
                  dark ? "text-[#3B9FE0]" : "text-[#5C7089]"
                }`}
              >
                {item.subvalue}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export function CellRow({
  label,
  value,
  dark = false,
  className = ""
}: {
  label: string;
  value: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-between py-2 px-3 border-b ${
        dark ? "border-white/10 text-white" : "border-[#5C7089]/20 text-[#0B1E3D]"
      } font-mono text-xs ${className}`}
    >
      <span className={dark ? "text-slate-400" : "text-[#5C7089]"}>{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  );
}
