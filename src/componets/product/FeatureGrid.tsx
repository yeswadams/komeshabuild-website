import React from "react";
import { 
  ClipboardCheck, 
  AlertTriangle, 
  MapPin, 
  TrendingUp, 
  ShieldCheck, 
  FileCheck, 
  CloudLightning,
  Sparkles
} from "lucide-react";

const FEATURES = [
  {
    icon: ClipboardCheck,
    title: "Commissioning Checklists",
    description: "Standardize your on-site validation gates. Build custom verification criteria for concrete pours, structural rebar layouts, structural columns, and MEP integrity tests.",
    tag: "Core Module"
  },
  {
    icon: AlertTriangle,
    title: "Issue & Defect Tracker",
    description: "Record failing parameters directly in the field. Tag localized issues, upload photos, and assign correction requests immediately to specific subcontractors.",
    tag: "Field Tools"
  },
  {
    icon: MapPin,
    title: "Blueprint Coordinate Pins",
    description: "Overlay inspection checkpoints directly on digital plan sheets. Give subcontractors precise physical locations of structural observations to completely eliminate rework lag.",
    tag: "Aesthetics"
  },
  {
    icon: SparklingIcon, // We'll map to Sparkles
    title: "AI Building Code Search",
    description: "Instantly query local building codes (such as KE BS-8110 regulations or concrete compressive strength thresholds) in plain text, retrieving certified sections.",
    tag: "AI Intelligence"
  },
  {
    icon: TrendingUp,
    title: "Contractor Quality Scores",
    description: "Generate automated compliance records for active subcontractors. Analyze trade accuracy, check resolution speeds, and hire best-performing teams.",
    tag: "Analytics"
  },
  {
    icon: FileCheck,
    title: "Certified PDF Handover",
    description: "Export professional compliance documents for municipal inspectors and structural consultants. Single-click report generation containing site signatures.",
    tag: "Reporting"
  },
  {
    icon: CloudLightning,
    title: "Offline Mobile Syncing",
    description: "Perform inspections deep within concrete basements or remote infrastructure. All inputs save securely on-device and automatically upload once signal is restored.",
    tag: "Offline-First"
  },
  {
    icon: ShieldCheck,
    title: "Row-Level Document Security",
    description: "Keep critical blueprints, photos, and project scores locked safely. Workspace-based authorization prevents unauthorized subcontractors from reading general data.",
    tag: "Enterprise Trust"
  }
];

function SparklingIcon(props: React.SVGProps<SVGSVGElement>) {
  return <Sparkles className="w-5 h-5 text-[#533BEE]" {...props} />;
}

export default function FeatureGrid() {
  return (
    <section id="features" className="py-20 lg:py-28 px-6 lg:px-8 bg-slate-50/50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center bg-indigo-50 border border-indigo-100/60 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#533BEE] mb-4 uppercase tracking-wider">
            Platform Capabilities
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-950 mb-6 leading-tight">
            Every Module Needed for Structural Certainty.
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">
            From field logging to administrative review, KomeshaBuild powers the entire quality assurance pipeline with modern cloud tools.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {FEATURES.map((feat, idx) => {
            const IconComponent = feat.icon;
            return (
              <div 
                key={idx} 
                className="bg-white border border-slate-200/80 p-6 rounded-2xl flex flex-col justify-between hover:shadow-lg hover:border-slate-300 transition-all duration-300 group relative"
              >
                <div>
                  {/* Category Pill Tag */}
                  <span className="inline-block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                    {feat.tag}
                  </span>
                  
                  {/* Icon Wrapper */}
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center border border-indigo-100/40 mb-4 group-hover:scale-105 transition-transform duration-200">
                    <IconComponent className="w-4 h-4 text-[#533BEE]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-bold text-slate-900 mb-2 tracking-tight group-hover:text-[#533BEE] transition-colors duration-150">
                    {feat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
