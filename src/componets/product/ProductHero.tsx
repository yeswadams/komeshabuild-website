import React from "react";
import Link from "next/link";
import { ArrowRight, Play, CheckCircle } from "lucide-react";

export default function ProductHero() {
  return (
    <section 
      id="overview" 
      className="relative pt-20 pb-20 lg:pt-28 lg:pb-24 px-6 lg:px-8 border-b border-slate-100 bg-gradient-to-b from-indigo-50/30 via-white to-white overflow-hidden"
    >
      {/* Sleek top divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent" />
      
      {/* Soft elegant warm-blue backdrop glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/[0.04] via-transparent to-transparent blur-[70px] pointer-events-none" />

      {/* Grid Pattern overlay for premium SaaS look */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Announcement Pill */}
        <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100/60 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#533BEE] mb-8 shadow-sm">
          <span>🏗️</span>
          <span>Enterprise Commissioning & QA</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 max-w-4xl leading-[1.1] mb-6">
          Construction Commissioning.
          <span className="block mt-2 bg-gradient-to-r from-[#11249D] to-[#533BEE] bg-clip-text text-transparent">
            Coordinated from One Platform.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-600 text-base md:text-lg max-w-2xl mb-10 leading-relaxed font-light">
          Unite architects, structural engineers, site superintendants, and trades. Log slump records, verify structural rebar spacing, track safety checklists, and export certified occupancy readiness reports with ease.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link
            href="/signup"
            className="bg-[#533BEE] hover:bg-[#533BEE]/90 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-indigo-500/10 transition-all text-center flex items-center justify-center gap-2 cursor-pointer text-sm"
          >
            Get Started Free <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#workflows"
            className="bg-slate-50 hover:bg-slate-100 text-slate-800 font-semibold px-8 py-3.5 rounded-full border border-slate-200/80 transition-all text-center flex items-center justify-center gap-2 cursor-pointer text-sm"
          >
            <Play className="w-4 h-4 text-[#533BEE] fill-current" />
            Explore Workflows
          </a>
        </div>

        {/* Core Visual Mockup - White/Slate Enterprise Dashboard */}
        <div className="w-full max-w-5xl relative border border-slate-200 bg-slate-50/50 rounded-2xl p-4 shadow-2xl backdrop-blur-md">
          
          <div className="w-full bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-md aspect-[16/10] flex flex-col">
            
            {/* Dashboard Mockup Header */}
            <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="text-slate-400 text-xs font-mono ml-4 select-none">komeshabuild.com/commissioning/tower-b</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-indigo-50 text-[#533BEE] text-xs font-bold px-3 py-1 rounded-md border border-indigo-100 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Commissioning Score: 98.6%
                </div>
                <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-[#533BEE]">
                  PM
                </div>
              </div>
            </div>

            {/* Dashboard Mockup Body */}
            <div className="flex-1 flex overflow-hidden">
              
              {/* Mockup Sidebar */}
              <div className="w-48 bg-slate-50/70 border-r border-slate-200/60 p-3 hidden md:flex flex-col gap-1 text-left">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">Project Control</div>
                <div className="flex items-center gap-2 bg-indigo-50 text-[#533BEE] text-xs font-bold px-3 py-2 rounded-lg border border-indigo-100/60">
                  📋 Active Checklists
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-xs px-3 py-2 hover:bg-slate-200/50 rounded-lg">
                  🛠️ Subcontractors
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-xs px-3 py-2 hover:bg-slate-200/50 rounded-lg">
                  🏗️ Equipment Systems
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-xs px-3 py-2 hover:bg-slate-200/50 rounded-lg">
                  📊 Compliance Reports
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-4 mb-2 px-2">Data Integrity</div>
                <div className="flex items-center gap-2 text-slate-600 text-xs px-3 py-2 hover:bg-slate-200/50 rounded-lg">
                  🔒 RLS Audit Trails
                </div>
              </div>

              {/* Mockup Main Panel */}
              <div className="flex-1 bg-slate-50/50 p-4 md:p-6 flex flex-col gap-4 overflow-y-auto text-left">
                
                {/* Stats Row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="bg-white p-3 rounded-lg border border-slate-200/80 shadow-sm flex flex-col gap-1">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Systems Verified</span>
                    <span className="text-base md:text-lg font-bold text-slate-900">412 Systems</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200/80 shadow-sm flex flex-col gap-1">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Critical Defects</span>
                    <span className="text-base md:text-lg font-bold text-amber-650">2 Warnings</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200/80 shadow-sm flex flex-col gap-1">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Trade Coordination</span>
                    <span className="text-base md:text-lg font-bold text-emerald-600">14 Active Trades</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200/80 shadow-sm flex flex-col gap-1">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Handover Readiness</span>
                    <span className="text-base md:text-lg font-bold text-[#533BEE]">Ready (98.6%)</span>
                  </div>
                </div>

                {/* Main Dashboard Workspace area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-1">
                  
                  {/* Checklist Panel */}
                  <div className="lg:col-span-2 bg-white rounded-lg border border-slate-200/80 p-4 shadow-sm flex flex-col gap-3">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                      <span className="text-xs font-bold text-slate-900">Commissioning Systems Validation Feed</span>
                      <span className="text-[9px] bg-indigo-50 text-[#533BEE] px-2 py-0.5 rounded border border-indigo-100 font-medium">Automatic Logs</span>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between bg-slate-50/50 p-2.5 rounded border border-slate-100">
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          <div className="flex flex-col">
                            <span className="text-xs font-bold text-slate-800">HVAC Duct Pressure Leak Integrity test</span>
                            <span className="text-[10px] text-slate-400">Section 4.12 • Certified by Mechanical Engineer</span>
                          </div>
                        </div>
                        <span className="text-[9px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-100 font-semibold">Passed</span>
                      </div>
                      <div className="flex items-center justify-between bg-slate-50/50 p-2.5 rounded border border-slate-100">
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-amber-500" />
                          <div className="flex flex-col">
                            <span className="text-xs font-bold text-slate-800">Concrete Core Foundation Slump Variance</span>
                            <span className="text-[10px] text-slate-400">Pour #4B • 14-day compressive test threshold caution</span>
                          </div>
                        </div>
                        <span className="text-[9px] bg-amber-50 text-amber-800 px-2 py-0.5 rounded border border-amber-100 font-semibold">Caution</span>
                      </div>
                    </div>
                  </div>

                  {/* Right side helper module */}
                  <div className="bg-white rounded-lg border border-slate-200/80 p-4 shadow-sm flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-bold text-slate-900 block border-b border-slate-100 pb-2">Standards Compliance Gateway</span>
                      <div className="bg-indigo-50/40 border border-indigo-100 p-2.5 rounded text-[11px] text-indigo-900 leading-normal font-medium">
                        🛡️ <span className="font-bold text-indigo-950">Standards Check:</span> Concrete curing verified at 32 N/mm² compressive strength, meeting KE BS-8110 building requirements.
                      </div>
                    </div>
                    <button className="w-full bg-[#533BEE] hover:bg-[#533BEE]/90 text-white text-[10px] font-bold py-2 rounded-full transition-colors text-center cursor-pointer">
                      Export Handover Certificate
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
