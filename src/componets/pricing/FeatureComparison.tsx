import React from "react";
import { Check, Minus } from "lucide-react";

interface FeatureRow {
  name: string;
  starter: string | boolean;
  professional: string | boolean;
  enterprise: string | boolean;
}

interface FeatureCategory {
  category: string;
  features: FeatureRow[];
}

const COMPARISON_DATA: FeatureCategory[] = [
  {
    category: "Operational Capacity",
    features: [
      { name: "Active Projects", starter: "1 Active Project", professional: "Up to 5 Projects", enterprise: "Unlimited" },
      { name: "Subcontractor Seats", starter: "Up to 10 free seats", professional: "Unlimited free seats", enterprise: "Unlimited free seats" },
      { name: "Document Storage Vaults", starter: "5 GB Secure Storage", professional: "25 GB Secure Storage", enterprise: "500 GB+ Dedicated Storage" }
    ]
  },
  {
    category: "Commissioning & Field Tools",
    features: [
      { name: "Commissioning Checklists", starter: "Standard Templates", professional: "Custom Builder & Templates", enterprise: "SLA Custom Checklists" },
      { name: "CAD Blueprint Pins", starter: false, professional: "Advanced overlays", enterprise: "Multi-layered CAD/Revit overlays" },
      { name: "Mobile Field Logging (Offline)", starter: true, professional: true, enterprise: true },
      { name: "AI Building Code Search", starter: false, professional: "Semantic Assist Search", enterprise: "Custom models & Vector matching" }
    ]
  },
  {
    category: "Enterprise Trust & Governance",
    features: [
      { name: "Database RLS Isolation", starter: true, professional: true, enterprise: true },
      { name: "Uptime SLA Guarantee", starter: false, professional: false, enterprise: "99.9% Certified SLA" },
      { name: "Single-Sign-On (SSO)", starter: false, professional: false, enterprise: "SAML / OAuth integrations" },
      { name: "Dedicated Site Consultant", starter: false, professional: false, enterprise: true }
    ]
  },
  {
    category: "Support & Integrations",
    features: [
      { name: "Support Channels", starter: "Email (24h turnaround)", professional: "Slack & Email (4h priority)", enterprise: "24/7 Phone, Slack, and Consultant" },
      { name: "BIM / Revit Integration", starter: false, professional: false, enterprise: "Custom API & Revit pipeline" }
    ]
  }
];

export default function FeatureComparison() {
  const renderCell = (val: string | boolean) => {
    if (typeof val === "boolean") {
      return val ? (
        <Check className="w-5 h-5 text-[#533BEE] mx-auto" />
      ) : (
        <Minus className="w-4 h-4 text-slate-350 mx-auto" />
      );
    }
    return <span className="text-slate-700 text-xs md:text-sm font-medium">{val}</span>;
  };

  return (
    <section id="comparison" className="py-20 lg:py-28 px-6 lg:px-8 bg-slate-50/50 border-b border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center bg-indigo-50 border border-indigo-100/60 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#533BEE] mb-4 uppercase tracking-wider">
            Detailed Comparison
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-950 mb-6 leading-tight">
            Compare KomeshaBuild Feature Matrices
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">
            Select the commissioning package optimized for your active sites. See our complete outline of modules, tools, and support parameters below.
          </p>
        </div>

        {/* Responsive, Horizontally Scrollable Table Wrapper */}
        <div className="w-full border border-slate-200/80 rounded-3xl overflow-hidden bg-white shadow-md">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[700px] text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="sticky left-0 bg-slate-50 z-20 p-5 text-xs font-black uppercase tracking-wider text-slate-800 border-r border-slate-200/60 min-w-[220px]">
                    Feature Parameter
                  </th>
                  <th className="p-5 text-center text-xs font-black uppercase tracking-wider text-slate-800 min-w-[150px]">
                    Starter
                  </th>
                  <th className="p-5 text-center text-xs font-black uppercase tracking-wider text-[#533BEE] min-w-[150px]">
                    Professional
                  </th>
                  <th className="p-5 text-center text-xs font-black uppercase tracking-wider text-slate-800 min-w-[150px]">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_DATA.map((cat, cidx) => (
                  <React.Fragment key={cidx}>
                    {/* Category grouping row */}
                    <tr className="bg-indigo-50/20 border-y border-slate-200/60">
                      <td colSpan={4} className="sticky left-0 bg-slate-100/40 p-4 text-[10px] font-black uppercase tracking-widest text-[#533BEE] border-r border-slate-200/60">
                        {cat.category}
                      </td>
                    </tr>

                    {/* Feature items */}
                    {cat.features.map((row, idx) => (
                      <tr 
                        key={idx} 
                        className="border-b border-slate-200/60 hover:bg-slate-50/50 transition-colors"
                      >
                        <td className="sticky left-0 bg-white z-10 p-4 md:p-5 text-xs md:text-sm font-semibold text-slate-900 border-r border-slate-200/60 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                          {row.name}
                        </td>
                        <td className="p-4 md:p-5 text-center border-r border-slate-200/40">
                          {renderCell(row.starter)}
                        </td>
                        <td className="p-4 md:p-5 text-center border-r border-slate-200/40 bg-indigo-50/10 font-bold">
                          {renderCell(row.professional)}
                        </td>
                        <td className="p-4 md:p-5 text-center">
                          {renderCell(row.enterprise)}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
