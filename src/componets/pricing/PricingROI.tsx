import React from "react";
import { DollarSign, Clock, Users, ArrowRightLeft } from "lucide-react";

export default function PricingROI() {
  return (
    <section id="roi" className="py-20 lg:py-28 px-6 lg:px-8 border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center bg-[#ADD015]/10 border border-[#ADD015]/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-900 mb-4 uppercase tracking-wider">
            Operational Value
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-950 mb-6 leading-tight">
            Designed to Protect Your Construction Margins
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">
            Construction software should represent a clear financial return, not just an administrative expense. KomeshaBuild safeguards your project budget.
          </p>
        </div>

        {/* ROI Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-left">
          
          {/* Cost of Rework */}
          <div className="bg-slate-50/50 border border-slate-200/80 p-8 rounded-2xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center border border-indigo-100/40 mb-6">
                <DollarSign className="w-5 h-5 text-[#533BEE]" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-3 tracking-tight">
                Eliminate Re-Pour Costs
              </h3>
              <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed">
                Finding a misaligned concrete column or faulty rebar after a pour costs thousands. Real-time checklist signs prevent pour sign-offs until certified.
              </p>
            </div>
            <span className="text-[11px] font-bold text-[#533BEE] uppercase tracking-wider mt-6">Rework Protection</span>
          </div>

          {/* Subcontractor Seat Policy */}
          <div className="bg-slate-50/50 border border-slate-200/80 p-8 rounded-2xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center border border-indigo-100/40 mb-6">
                <Users className="w-5 h-5 text-[#533BEE]" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-3 tracking-tight">
                No Subcontractor Seat Penalties
              </h3>
              <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed">
                We believe site QA is collaborative. Invite structural consultants, architects, and every trade sub to view and log validations without extra licensing fees.
              </p>
            </div>
            <span className="text-[11px] font-bold text-[#533BEE] uppercase tracking-wider mt-6">Free trade partners</span>
          </div>

          {/* Handover Closeout Time */}
          <div className="bg-slate-50/50 border border-slate-200/80 p-8 rounded-2xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center border border-indigo-100/40 mb-6">
                <Clock className="w-5 h-5 text-[#533BEE]" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-3 tracking-tight">
                Cut Closeout Admin by 80%
              </h3>
              <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed">
                Forget spending weeks searching through folders for curing compression logs. KomeshaBuild compiles files into certified reports at a single click.
              </p>
            </div>
            <span className="text-[11px] font-bold text-[#533BEE] uppercase tracking-wider mt-6">Closeout Acceleration</span>
          </div>

          {/* Real-time sync vs manual spreadsheets */}
          <div className="bg-slate-50/50 border border-slate-200/80 p-8 rounded-2xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center border border-indigo-100/40 mb-6">
                <ArrowRightLeft className="w-5 h-5 text-[#533BEE]" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-3 tracking-tight">
                Coordinated Defect Alerts
              </h3>
              <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed">
                Instead of daily call rounds, KomeshaBuild alerts assigned plumbers or steel sub-teams immediately of failing checklist logs to resolve within minutes.
              </p>
            </div>
            <span className="text-[11px] font-bold text-[#533BEE] uppercase tracking-wider mt-6">Optimized Turnaround</span>
          </div>

        </div>

      </div>
    </section>
  );
}
