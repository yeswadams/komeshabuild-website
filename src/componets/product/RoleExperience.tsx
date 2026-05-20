"use client";

import React, { useState } from "react";
import { UserCheck, ShieldAlert, FileText, CheckCircle2, TrendingUp, BarChart } from "lucide-react";

const ROLES_DATA = [
  {
    id: "pm",
    label: "Project Managers",
    headline: "Protect Timelines, Budgets, and Compliance Quality.",
    subTitle: "Get bird's-eye visibility across all active construction sectors, monitor subcontractor resolution delays, and manage secure handover documents.",
    capabilities: [
      "Real-time commissioning scores (e.g. 98.6% validated) for live status reporting.",
      "Workspace administration with granular Row-Level Security (RLS) folders.",
      "Automatic notifications of structural warnings to protect project schedules.",
      "One-click certified PDF report compiler for municipal inspectors."
    ],
    highlightMetric: "42% Less Rework Delay",
    icon: TrendingUp
  },
  {
    id: "engineer",
    label: "Site Engineers",
    headline: "Automate Complex Quality & Code Validations.",
    subTitle: "Validate foundation slump tests, check steel rebar diameters, and lookup regional building code standards using plain-language AI search in seconds.",
    capabilities: [
      "AI Building Code Matcher trained on KE BS-8110 and building standards.",
      "Concrete slump variance logging with structural core pour parameters.",
      "Interactive blueprint pin overlays to map localized structural observations.",
      "Digital safety checklist signatures with secure unalterable audit trails."
    ],
    highlightMetric: "98.4% QA Compliance Score",
    icon: UserCheck
  },
  {
    id: "subcontractor",
    label: "Subcontractors",
    headline: "Fix Logged Defects Fast. Prove Compliance Instantly.",
    subTitle: "Receive instant notifications of failed QA checkpoints directly on your device. Upload photos of completed repairs to clear flags in real-time.",
    capabilities: [
      "SMS & Email notifications of defect details with blueprint coordinates.",
      "Camera verification logs to upload photos of resolved steel or duct work.",
      "Simplified task feed highlighting active work items and deadlines.",
      "Instant sign-off requests to trigger project manager verification."
    ],
    highlightMetric: "5-Min Issue Alert Loops",
    icon: ShieldAlert
  },
  {
    id: "stakeholder",
    label: "Consultants & Clients",
    headline: "Unalterable Audit Trails & Seamless Handover.",
    subTitle: "Access secure read-only portals to review commissioning logs, concrete compression curves, and verified occupancy safety documents.",
    capabilities: [
      "Read-only viewer accounts for consultants, clients, and municipal inspectors.",
      "Complete historical audit trails showing chronological approval signatures.",
      "Digital safety inspection logs matching local regulatory guidelines.",
      "Automated export pipelines for smooth client project handover."
    ],
    highlightMetric: "100% Crawlable Audits",
    icon: FileText
  }
];

export default function RoleExperience() {
  const [activeTab, setActiveTab] = useState("pm");

  const activeRole = ROLES_DATA.find((role) => role.id === activeTab) || ROLES_DATA[0];
  const HighlightIcon = activeRole.icon;

  return (
    <section id="roles" className="py-20 lg:py-28 px-6 lg:px-8 bg-slate-50/50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-indigo-50 border border-indigo-100/60 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#533BEE] mb-4 uppercase tracking-wider">
            User Personas
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-950 mb-6 leading-tight">
            Tailored Experiences for Every Team Member
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">
            KomeshaBuild bridges the communication gap between site supervisors, administrative offices, sub-trades, and structural safety engineers.
          </p>
        </div>

        {/* Interactive Tab Selectors */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto" role="tablist" aria-label="Stakeholder views">
          {ROLES_DATA.map((role) => (
            <button
              key={role.id}
              role="tab"
              aria-selected={activeTab === role.id}
              aria-controls={`panel-${role.id}`}
              id={`tab-${role.id}`}
              onClick={() => setActiveTab(role.id)}
              className={`px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 border cursor-pointer ${
                activeTab === role.id
                  ? "bg-[#533BEE] text-white border-[#533BEE] shadow-md shadow-indigo-200"
                  : "bg-white hover:bg-slate-50 text-slate-600 border-slate-200 hover:text-slate-900"
              }`}
            >
              {role.label}
            </button>
          ))}
        </div>

        {/* Dynamic Display Panel */}
        <div 
          id={`panel-${activeRole.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeRole.id}`}
          className="max-w-5xl mx-auto bg-white border border-slate-200/80 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden flex flex-col lg:flex-row gap-10 items-center animate-fadeIn"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#533BEE]/5 via-transparent to-transparent blur-[40px] pointer-events-none" />

          {/* Left Block: Description & Capabilities */}
          <div className="flex-1 text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#533BEE] uppercase tracking-wide mb-3">
              <CheckCircle2 className="w-4 h-4" /> Professional Viewpoint
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-950 mb-3 tracking-tight leading-tight">
              {activeRole.headline}
            </h3>
            <p className="text-slate-500 text-sm md:text-base font-light leading-relaxed mb-6">
              {activeRole.subTitle}
            </p>

            <ul className="space-y-3.5">
              {activeRole.capabilities.map((cap, cidx) => (
                <li key={cidx} className="flex items-start gap-2.5 text-slate-600 text-xs md:text-sm font-light">
                  <span className="text-[#533BEE] font-bold mt-0.5">•</span>
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Block: High-Fidelity Stats Box Mockup */}
          <div className="w-full lg:w-80 bg-slate-50/70 border border-slate-250/60 p-6 rounded-2xl flex flex-col justify-between aspect-square lg:aspect-auto min-h-[260px] relative text-left">
            <div className="flex justify-between items-center border-b border-slate-200 pb-3 mb-4">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Metric</span>
              <span className="text-[9px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded font-semibold uppercase tracking-wider">Live Feed</span>
            </div>

            <div className="flex-1 flex flex-col justify-center items-start gap-2">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center border border-indigo-100/40 mb-2">
                <HighlightIcon className="w-5 h-5 text-[#533BEE]" />
              </div>
              <span className="text-3xl font-extrabold text-slate-950 tracking-tight">
                {activeRole.highlightMetric}
              </span>
              <span className="text-[11px] text-slate-400 font-light max-w-[200px]">
                Validated compliance records collected across KomeshaBuild workspaces.
              </span>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] font-medium text-slate-500">
              <span>Auditable Integrity</span>
              <span>🔒 Supabase RLS</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
