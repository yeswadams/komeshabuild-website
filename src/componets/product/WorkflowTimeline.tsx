import React from "react";
import { Settings, Users, Phone, Bell, ShieldCheck, FileCheck } from "lucide-react";

const STAGES = [
  {
    step: "01",
    icon: Settings,
    title: "Define Specs & Checklists",
    description: "Upload blueprints, align structural plans, and configure QA checklist templates (e.g., concrete slump limits or rebar layout specifications) directly inside the project dashboard."
  },
  {
    step: "02",
    icon: Users,
    title: "Onboard Trade Subcontractors",
    description: "Map checklist items to specific trade teams. Subcontractors gain direct access to log updates without costing extra full-seat builder license packages."
  },
  {
    step: "03",
    icon: Phone,
    title: "Log Field Inspections Offline",
    description: "Supervisors walk sites logging rebar, structural plumb, and slump values. The application caches photographs and test data locally until cellular signal is active."
  },
  {
    step: "04",
    icon: Bell,
    title: "Dynamic Alert Corrections",
    description: "Any failing parameter instantly triggers a SMS or email notification directly to the assigned subcontractor, complete with blueprint overlays and photographic evidence."
  },
  {
    step: "05",
    icon: ShieldCheck,
    title: "Structural Engineer Review",
    description: "Independent structural consultants and QA managers review the inspection feed, checking slump graphs, steel diameters, and alignment logs before concrete pours."
  },
  {
    step: "06",
    icon: FileCheck,
    title: "Certified Handover Export",
    description: "With all checklists validated, KomeshaBuild compiles a certified inspection record. Export polished compliance reports ready for city council occupancy audits."
  }
];

export default function WorkflowTimeline() {
  return (
    <section id="workflows" className="py-20 lg:py-28 px-6 lg:px-8 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center bg-indigo-50 border border-indigo-100/60 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#533BEE] mb-4 uppercase tracking-wider">
            Execution Lifecycle
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-950 mb-6 leading-tight">
            How KomeshaBuild Coordinates Commissioning
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">
            Eliminate operational friction and manual check delays. See how KomeshaBuild manages quality from initial setup through occupancy handover.
          </p>
        </div>

        {/* Timeline Grid Layout */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Central Line (visible on desktop) */}
          <div className="absolute left-[27px] md:left-1/2 top-4 bottom-4 w-[1px] bg-slate-200/80 -translate-x-1/2 pointer-events-none" />

          <div className="space-y-12 md:space-y-16">
            {STAGES.map((stage, idx) => {
              const IconComponent = stage.icon;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={idx} 
                  className={`flex flex-col md:flex-row items-start relative ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  
                  {/* Step Bubble Icon */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 z-10 w-14 h-14 rounded-full bg-white border border-slate-250/80 flex items-center justify-center shadow-md">
                    <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center border border-indigo-100/40">
                      <IconComponent className="w-4 h-4 text-[#533BEE]" />
                    </div>
                  </div>

                  {/* Left Column Spacer / Card */}
                  <div className="w-full md:w-1/2 pl-20 md:pl-0 pr-0 md:pr-12 lg:pr-16 text-left md:text-right">
                    {isEven ? (
                      <div className="bg-slate-50/50 border border-slate-200/60 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
                        <span className="text-xs font-bold text-[#533BEE] tracking-wide block mb-1">
                          STAGE {stage.step}
                        </span>
                        <h3 className="text-sm md:text-base font-bold text-slate-900 mb-2">
                          {stage.title}
                        </h3>
                        <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed">
                          {stage.description}
                        </p>
                      </div>
                    ) : (
                      <div className="hidden md:block" />
                    )}
                  </div>

                  {/* Right Column Spacer / Card */}
                  <div className="w-full md:w-1/2 pl-20 md:pl-12 lg:pl-16 pr-0 text-left">
                    {!isEven ? (
                      <div className="bg-slate-50/50 border border-slate-200/60 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
                        <span className="text-xs font-bold text-[#533BEE] tracking-wide block mb-1">
                          STAGE {stage.step}
                        </span>
                        <h3 className="text-sm md:text-base font-bold text-slate-900 mb-2">
                          {stage.title}
                        </h3>
                        <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed">
                          {stage.description}
                        </p>
                      </div>
                    ) : (
                      <div className="hidden md:block" />
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
