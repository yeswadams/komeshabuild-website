import React from "react";
import { Phone, CloudLightning, Camera, Wifi, CheckCircle2, ShieldCheck } from "lucide-react";

export default function MobileShowcase() {
  return (
    <section id="mobile-showcase" className="py-20 lg:py-28 px-6 lg:px-8 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block: Description of mobile capabilities */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="w-10 h-10 rounded-full bg-[#ADD015] flex items-center justify-center mb-6 shadow-sm border border-[#ADD015]/40">
              <Phone className="w-4 h-4 text-slate-950" />
            </div>
            <span className="text-xs font-bold text-[#533BEE] uppercase tracking-wider mb-2">
              Field-First Engineering
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-950 mb-6 tracking-tight leading-tight">
              Designed for concrete basements and remote locations.
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 font-light max-w-lg">
              Field supervisors and trade subcontractors carry KomeshaBuild directly in their pockets. Log structural inspections, capture real-time photographic proof, and overlay safety pins on digital blueprint drawings—entirely offline.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <div className="flex gap-3">
                <CloudLightning className="w-5 h-5 text-[#533BEE] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-slate-900 mb-1">True Offline Checklist Logging</h3>
                  <p className="text-slate-500 text-xs font-light leading-normal">
                    Inspect steel alignment or log concrete slumps. Inputs save instantly on-device, regardless of cellular coverage.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Camera className="w-5 h-5 text-[#533BEE] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-slate-900 mb-1">Photo Defect Verification</h3>
                  <p className="text-slate-500 text-xs font-light leading-normal">
                    Add visual proof to safety records. Subcontractors snap photos of fixed issues to request digital verification.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Realistic CSS-rendered smartphone mockup */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-lg flex items-center justify-center relative min-h-[460px]">
            
            {/* Ambient Lighting Accents */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-indigo-500/[0.03] to-transparent blur-[50px] pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#ADD015]/[0.05] to-transparent blur-[50px] pointer-events-none" />

            {/* Smartphone Graphic Structure */}
            <div className="w-[230px] h-[380px] bg-slate-950 rounded-[40px] p-3.5 shadow-2xl relative border-2 border-slate-800 animate-fadeIn">
              
              {/* Notch / Dynamic Island */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-20 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-900 absolute right-3" />
              </div>
              
              {/* Internal Screen Area */}
              <div className="w-full h-full bg-white rounded-[28px] overflow-hidden flex flex-col p-3 justify-between relative text-left">
                
                {/* Simulated Header */}
                <div className="flex justify-between items-center border-b border-slate-100 pb-1.5 mt-5">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-extrabold text-slate-950">KomeshaBuild Field</span>
                    <span className="text-[7px] text-slate-400">Project: Nairobi Square</span>
                  </div>
                  <div className="flex items-center gap-1 text-[7px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">
                    <Wifi className="w-2 h-2" /> Sync Active
                  </div>
                </div>

                {/* Simulated Scrollable Feed */}
                <div className="flex-1 flex flex-col gap-2 py-3 overflow-y-auto scrollbar-none">
                  
                  {/* Status card */}
                  <div className="bg-indigo-50/50 p-2 rounded-lg border border-indigo-100/50 flex flex-col gap-0.5">
                    <span className="text-[6px] text-slate-400 font-bold uppercase tracking-wider">Verification Checklist</span>
                    <span className="text-[8px] font-bold text-slate-950">Concrete Pour #12B</span>
                  </div>

                  {/* Checklist rows */}
                  <div className="flex flex-col gap-1.5">
                    <div className="bg-slate-50 p-2 rounded border border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                        <span className="text-[7px] text-slate-700 font-medium">Rebar Spacing spec check</span>
                      </div>
                      <span className="text-[6px] bg-emerald-50 text-emerald-700 px-1 py-0.5 rounded font-semibold">Passed</span>
                    </div>

                    <div className="bg-slate-50 p-2 rounded border border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                        <span className="text-[7px] text-slate-700 font-medium">Concrete Slump (120mm)</span>
                      </div>
                      <span className="text-[6px] bg-emerald-50 text-emerald-700 px-1 py-0.5 rounded font-semibold">Passed</span>
                    </div>

                    <div className="bg-slate-50 p-2 rounded border border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-rose-50 flex items-center justify-center text-[7px] text-rose-600 font-bold">!</span>
                        <span className="text-[7px] text-slate-700 font-medium">Plumbing Sleeve Conduit check</span>
                      </div>
                      <span className="text-[6px] bg-rose-50 text-rose-700 px-1 py-0.5 rounded font-semibold">Failed</span>
                    </div>
                  </div>

                </div>

                {/* Simulated Bottom Actions */}
                <div className="flex flex-col gap-1 border-t border-slate-100 pt-1.5">
                  <div className="flex justify-between items-center text-[7px] text-slate-400 mb-1">
                    <span className="flex items-center gap-0.5">
                      <ShieldCheck className="w-2.5 h-2.5 text-emerald-600" /> Secure Encryption
                    </span>
                    <span>v1.2.4</span>
                  </div>
                  <button className="w-full bg-[#533BEE] hover:bg-[#533BEE]/90 text-white text-[8px] font-bold py-1.5 rounded-lg text-center cursor-pointer transition-colors">
                    + Log New Site Slump Pour
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
