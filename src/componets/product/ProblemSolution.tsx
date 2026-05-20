import React from "react";
import { AlertCircle, CheckCircle, FileText, Share2, Eye, ShieldAlert } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section id="problem-solution" className="py-20 lg:py-28 px-6 lg:px-8 border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center bg-indigo-50 border border-indigo-100/60 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#533BEE] mb-4 uppercase tracking-wider">
            Operational Comparison
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-950 mb-6 leading-tight">
            Stop Chasing Checklists. Start Building Right.
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">
            Commissioning projects are historically delayed by manual spreadsheets, missing test forms, and uncoordinated trades. KomeshaBuild solves this chaos with real-time verification logs.
          </p>
        </div>

        {/* Side-by-Side Comparison Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          
          {/* Fragmented Traditional Commissioning Chaos */}
          <div className="border border-slate-200/80 bg-slate-50/50 p-8 md:p-10 rounded-3xl flex flex-col justify-between relative overflow-hidden group shadow-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent blur-[20px]" />
            
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center border border-amber-200">
                  <ShieldAlert className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Traditional Commissioning Chaos</h3>
                  <p className="text-[11px] text-slate-400">Fragmented, manually tracked, and slow</p>
                </div>
              </div>

              <ul className="space-y-6">
                <li className="flex items-start gap-3.5">
                  <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 text-sm font-semibold block mb-0.5">Missing Structural Evidence</strong>
                    <span className="text-slate-500 text-xs md:text-sm font-light leading-normal">
                      Photos of rebar spacing and slump validations sit buried inside personal phone galleries instead of permanent audit vaults.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 text-sm font-semibold block mb-0.5">Delayed Subcontractor Action</strong>
                    <span className="text-slate-500 text-xs md:text-sm font-light leading-normal">
                      Trades only hear about defect issues days later during messy weekly alignment meetings, multiplying structural rework costs.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 text-sm font-semibold block mb-0.5">Zero Project Progress Visibility</strong>
                    <span className="text-slate-500 text-xs md:text-sm font-light leading-normal">
                      Project managers lack a unified platform, forcing reliance on manual phone updates to guess if HVAC or structural steel is passed.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-250/60 text-slate-450 text-xs italic font-light">
              Result: 3-5 days lag on critical items, leading to municipal occupancy permit rejections.
            </div>
          </div>

          {/* Coordinated Platform - KomeshaBuild Way */}
          <div className="border border-[#533BEE]/15 bg-white p-8 md:p-10 rounded-3xl flex flex-col justify-between relative overflow-hidden group shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#533BEE]/5 via-transparent to-transparent blur-[20px]" />
            
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#533BEE]/10">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center border border-indigo-100">
                  <CheckCircle className="w-5 h-5 text-[#533BEE]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-950">The KomeshaBuild Platform Way</h3>
                  <p className="text-[11px] text-[#533BEE] font-medium">Centralized, automated, and secure</p>
                </div>
              </div>

              <ul className="space-y-6">
                <li className="flex items-start gap-3.5">
                  <FileText className="w-5 h-5 text-[#533BEE] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 text-sm font-bold block mb-0.5">Unified Document Data Vaults</strong>
                    <span className="text-slate-600 text-xs md:text-sm font-light leading-normal">
                      Every slump test, safety checklist, and blueprint overlay is catalogued securely under role-based permissions in cloud vaults.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <Share2 className="w-5 h-5 text-[#533BEE] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 text-sm font-bold block mb-0.5">Automated Trade Workflows</strong>
                    <span className="text-slate-600 text-xs md:text-sm font-light leading-normal">
                      Failing a field inspection checklist triggers immediate notifications directly to the specific subcontractor, cutting turnaround loops.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <Eye className="w-5 h-5 text-[#533BEE] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 text-sm font-bold block mb-0.5">Real-Time Commissioning Score</strong>
                    <span className="text-slate-600 text-xs md:text-sm font-light leading-normal">
                      Get immediate operational clarity with dashboard metrics that detail project status, concrete curing trends, and readiness levels.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 text-[#533BEE] text-xs font-bold">
              Result: Inspection times reduced from days to minutes. Hands-off readiness tracking.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
