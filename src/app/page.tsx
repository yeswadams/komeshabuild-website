"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// --- Mock Data ---

const testimonials = [
  {
    name: "James Kamau",
    role: "Senior Site Supervisor, BuildCorp",
    quote: "KomeshaBuild cut our defect reporting loop from 3 days to under 5 minutes. Logging cement slump tests and structural steel alignment directly on site is incredibly fast.",
    rating: 5,
    initials: "JK",
  },
  {
    name: "Sarah Mitchell",
    role: "Principal Structural Engineer",
    quote: "The compliance report builder is flawless. Generated our occupancy readiness PDF for the city council instantly. Highly recommended for complex structural validations.",
    rating: 5,
    initials: "SM",
  },
  {
    name: "David Ochieng",
    role: "Managing Director, Apex Properties",
    quote: "With KomeshaBuild, we hold subcontractors fully accountable. Recurring inspection failures are down by 42% on our residential tower development projects.",
    rating: 5,
    initials: "DO",
  },
  {
    name: "Elena Rostova",
    role: "Lead QA Manager, Vertex Group",
    quote: "Offline synchronization on basement levels and remote sites works perfectly. Our field inspectors log code observations and sync once they reach cellular range.",
    rating: 5,
    initials: "ER",
  },
  {
    name: "Marcus Miller",
    role: "General Contractor, Miller & Sons",
    quote: "Simplifying safety auditing and concrete testing checks is a game-changer. The AI building code search saves us hours of consulting heavy binders on-site.",
    rating: 5,
    initials: "MM",
  },
  {
    name: "Amina Yusuf",
    role: "Project Director, Coastline Developments",
    quote: "Our client hand-over times are faster than ever. Standardizing compliance checklists across 5 active project sites saved us thousands in late-delivery penalties.",
    rating: 5,
    initials: "AY",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    priceMonthly: 0,
    priceYearly: 0,
    desc: "Perfect for individual site supervisors, small residential builders, and DIY renovators.",
    features: [
      "1 Active Construction Project",
      "Unlimited Field Inspection Logs",
      "Basic Compliance Export",
      "Standard Issue Tracking",
      "Offline On-Site Support",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Professional",
    priceMonthly: 19,
    priceYearly: 15,
    desc: "Best for growing commercial contractors and safety auditing teams with multiple trades.",
    features: [
      "Up to 5 Active Projects",
      "Assign Issues to Subcontractors",
      "Branded PDF Report Generator",
      "AI Building Code Semantic Search",
      "Direct E-mail Support",
      "Subcontractor Quality Scores",
    ],
    cta: "Try Professional",
    popular: true,
  },
  {
    name: "Enterprise",
    priceMonthly: 49,
    priceYearly: 39,
    desc: "Tailored for large real estate developers, property developers, and multi-site builders.",
    features: [
      "Unlimited Active Projects",
      "Custom Blueprint Overlay Pins",
      "City Inspector Review Portals",
      "Real-time Subcontractor Analytics",
      "Priority 24/7 Support Manager",
      "Custom Checklist Templates",
      "BIM / Revit Integration Access",
    ],
    cta: "Deploy Enterprise",
    popular: false,
  },
  {
    name: "Custom Audit",
    priceMonthly: "Custom",
    priceYearly: "Custom",
    desc: "Enterprise-grade offline field servers, custom code training, and tailored compliance paths.",
    features: [
      "Everything in Enterprise",
      "Tailored AI Code Search Indexing",
      "Dedicated Client Success Team",
      "On-Site Team Training",
      "Offline Hardware Sync Server",
      "Custom API & Webhook Pipelines",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const faqs = [
  {
    q: "What is KomeshaBuild and how does it help construction teams?",
    a: "KomeshaBuild is a premium, collaborative construction compliance and quality assurance platform. We help developers, general contractors, and structural engineers log defects, run safety walk-throughs, search local building codes, and generate polished inspector-ready reports to build right the first time.",
  },
  {
    q: "Will the mobile inspection app work offline in concrete basements or remote sites?",
    a: "Yes. KomeshaBuild is built with high-performance offline caching. Inspectors can inspect structural steel, log concrete slump tests, take photographs, and pin issues to digital blueprints completely offline. All data securely syncs to the cloud the moment a network connection is re-established.",
  },
  {
    q: "Can we invite external subcontractors and trade teams to fix logged issues?",
    a: "Absolutely. You can invite unlimited subcontractors and trades to view, comment on, and resolve defects assigned to them. They will receive SMS or email notifications with visual proof, directions, and blueprint markers to address the issues quickly, without paying for additional builder seats.",
  },
  {
    q: "How does the AI Building Code Search work?",
    a: "Our Code Search utilizes a semantic vector index trained on current building regulations, safety standards, and structural guidelines. Instead of searching page-by-page through heavy PDF binders, you can query KomeshaBuild in plain language (e.g., 'minimum concrete cover for foundational beams') and get an instant, certified response in seconds.",
  },
  {
    q: "Does KomeshaBuild support integration with BIM or Revit models?",
    a: "Yes. Our Enterprise tier supports robust synchronization with industry-standard CAD, Revit, and Autodesk BIM 360 models, allowing project coordinators to overlay QA defects directly onto engineering files for seamless coordination.",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("logger");
  const [billingCycle, setBillingCycle] = useState("monthly"); // "monthly" or "yearly"
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="bg-white text-slate-900 min-h-screen overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-20 lg:pt-28 lg:pb-24 px-6 lg:px-8 border-b border-slate-100 bg-gradient-to-b from-indigo-50/30 via-white to-white">
        
        {/* Sleek top divider line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent" />
        
        {/* Soft elegant warm-blue backdrop glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/[0.04] via-transparent to-transparent blur-[70px] pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          
          {/* Announcement Pill */}
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#533BEE] mb-8 shadow-sm">
            <span>✨</span>
            <span>KomeshaBuild Beta Launch</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 max-w-4xl leading-[1.1] mb-6">
            Build Right. First Time.
            <span className="block mt-2 bg-gradient-to-r from-[#11249D] to-[#533BEE] bg-clip-text text-transparent">
              Certified QA & Inspections
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light">
            Eliminate structural re-work, automate building code compliance, and coordinate field teams instantly with the modern digital workspace built for developers and general contractors.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 z-10">
            <Link
              href="/signup"
              className="bg-[#533BEE] hover:bg-[#533BEE]/90 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-indigo-500/10 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              Get Started for Free
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              href="#platform-demo"
              className="bg-slate-50 hover:bg-slate-100 text-slate-800 font-semibold px-8 py-3.5 rounded-full border border-slate-200/80 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg className="w-4 h-4 text-[#533BEE]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Book an Inspection Demo
            </Link>
          </div>

          {/* Core Visual Mockup - White/Slate Enterprise Dashboard */}
          <div className="w-full max-w-5xl relative z-10 border border-slate-200 bg-slate-50/50 rounded-2xl p-4 shadow-2xl backdrop-blur-md">
            
            {/* Dashboard Mockup Layout */}
            <div className="w-full bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-md aspect-[16/10] flex flex-col">
              
              {/* Mockup Header */}
              <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <span className="text-slate-400 text-xs font-mono ml-4">komeshabuild.com/projects/tower-b</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-50 text-[#533BEE] text-xs font-bold px-3 py-1 rounded-md border border-indigo-100">
                    Compliance Score: 98.4%
                  </div>
                  <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-[#533BEE]">
                    AY
                  </div>
                </div>
              </div>

              {/* Mockup Body */}
              <div className="flex-1 flex overflow-hidden">
                
                {/* Mockup Sidebar */}
                <div className="w-48 bg-slate-50/70 border-r border-slate-200/60 p-3 hidden md:flex flex-col gap-1">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">Workspace</div>
                  <div className="flex items-center gap-2 bg-indigo-50 text-[#533BEE] text-xs font-bold px-3 py-2 rounded-lg border border-indigo-100/60">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                    Active Projects
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 text-xs px-3 py-2 hover:bg-slate-200/50 rounded-lg">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2" /></svg>
                    QA Checklists
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 text-xs px-3 py-2 hover:bg-slate-200/50 rounded-lg">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    Defect Feed
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 text-xs px-3 py-2 hover:bg-slate-200/50 rounded-lg">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    Schedule Walk
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-4 mb-2 px-2">Settings</div>
                  <div className="flex items-center gap-2 text-slate-600 text-xs px-3 py-2 hover:bg-slate-200/50 rounded-lg">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                    Trade Teams
                  </div>
                </div>

                {/* Mockup Main Panel */}
                <div className="flex-1 bg-slate-50/50 p-4 md:p-6 flex flex-col gap-4 overflow-y-auto">
                  
                  {/* Stats Row */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    <div className="bg-white p-3 rounded-lg border border-slate-200/80 shadow-sm flex flex-col gap-1">
                      <span className="text-[10px] text-slate-400 font-bold uppercase">Active Audits</span>
                      <span className="text-xl font-bold text-slate-900">12 Projects</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-slate-200/80 shadow-sm flex flex-col gap-1">
                      <span className="text-[10px] text-slate-400 font-bold uppercase">Open Issues</span>
                      <span className="text-xl font-bold text-red-600">4 Defects</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-slate-200/80 shadow-sm flex flex-col gap-1">
                      <span className="text-[10px] text-slate-400 font-bold uppercase">Resolved Today</span>
                      <span className="text-xl font-bold text-emerald-600">18 Items</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-slate-200/80 shadow-sm flex flex-col gap-1">
                      <span className="text-[10px] text-slate-400 font-bold uppercase">Ready Inspections</span>
                      <span className="text-xl font-bold text-[#533BEE]">97.8%</span>
                    </div>
                  </div>

                  {/* Blueprint & QA Task Area */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-1">
                    {/* Live Inspection Logger */}
                    <div className="lg:col-span-2 bg-white rounded-lg border border-slate-200/80 p-4 shadow-sm flex flex-col gap-3">
                      <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                        <span className="text-xs font-bold text-slate-900">Concrete & Structural Auditing log</span>
                        <span className="text-[10px] bg-red-50 text-red-700 px-2 py-0.5 rounded border border-red-100 font-medium">Critical Focus</span>
                      </div>
                      
                      {/* Interactive rows */}
                      <div className="flex flex-col gap-2.5">
                        <div className="flex items-center justify-between bg-slate-50/50 p-2.5 rounded border border-slate-100">
                          <div className="flex items-center gap-3">
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                            <div className="flex flex-col">
                              <span className="text-xs font-bold text-slate-800">Basement-B Concrete Slump Test</span>
                              <span className="text-[10px] text-slate-400">Checked by James K. • Certified</span>
                            </div>
                          </div>
                          <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-100 font-medium">Passed</span>
                        </div>
                        <div className="flex items-center justify-between bg-slate-50/50 p-2.5 rounded border border-slate-100">
                          <div className="flex items-center gap-3">
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                            <div className="flex flex-col">
                              <span className="text-xs font-bold text-slate-800">Level-2 Column Rebar Diameter</span>
                              <span className="text-[10px] text-slate-400">22mm steel vs 25mm design spec</span>
                            </div>
                          </div>
                          <span className="text-[10px] bg-amber-50 text-amber-800 px-2 py-0.5 rounded border border-amber-100 font-medium">Warning</span>
                        </div>
                        <div className="flex items-center justify-between bg-slate-50/50 p-2.5 rounded border border-slate-100">
                          <div className="flex items-center gap-3">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                            <div className="flex flex-col">
                              <span className="text-xs font-bold text-slate-800">Plumbing Conduit Pressure Leak</span>
                              <span className="text-[10px] text-slate-400">Assigned to Cascade Plumbing trade</span>
                            </div>
                          </div>
                          <span className="text-[10px] bg-rose-50 text-rose-700 px-2 py-0.5 rounded border border-rose-100 font-medium">Critical Defect</span>
                        </div>
                      </div>
                    </div>

                    {/* AI Code Assistant panel */}
                    <div className="bg-white rounded-lg border border-slate-200/80 p-4 shadow-sm flex flex-col gap-3 justify-between">
                      <div className="flex flex-col gap-2">
                        <span className="text-xs font-bold text-slate-900 block border-b border-slate-100 pb-2">AI Code Matcher</span>
                        <div className="bg-slate-50 border border-slate-200/80 p-2 rounded text-[10px] text-slate-500 font-medium italic">
                          "Verify concrete block load bearing threshold for Level-3 walls."
                        </div>
                        <div className="bg-indigo-50/40 border border-indigo-100 p-2.5 rounded text-[11px] text-indigo-900 leading-normal font-medium">
                          💡 <span className="font-bold text-indigo-950">KE BS-8110 Compliance:</span> Level-3 load-bearing blockwork requires minimum 7.0 N/mm² compressive strength. Flagging 5.0 N/mm² blocks found in Zone C.
                        </div>
                      </div>
                      <button className="w-full bg-[#533BEE] hover:bg-[#533BEE]/90 text-white text-[11px] font-bold py-2 px-3 rounded-full transition-colors text-center cursor-pointer">
                        Export Audit Certificate
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRUSTED BY LOGO ROW --- */}
      <section className="bg-slate-50 py-10 px-6 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <span className="text-slate-500 text-sm font-bold tracking-wide uppercase text-center lg:text-left">
            Trusted by modern builders & property groups
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-50">
            <span className="text-slate-800 font-extrabold text-lg tracking-wider">BUILDCORP</span>
            <span className="text-slate-800 font-extrabold text-lg tracking-wider">APEX STEEL</span>
            <span className="text-slate-800 font-extrabold text-lg tracking-wider">STRUCTURA</span>
            <span className="text-slate-800 font-extrabold text-lg tracking-wider">VERTEX REALTY</span>
            <span className="text-slate-800 font-extrabold text-lg tracking-wider">SOMA HOMES</span>
          </div>
        </div>
      </section>

      {/* --- ALTERNATING FEATURES SECTION (MATCHING ATTACHED DESIGN) --- */}
      <section className="py-20 lg:py-28 px-6 lg:px-8 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center bg-indigo-50 border border-indigo-100 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#533BEE] mb-4 uppercase tracking-wider">
              BUILD RIGHT: FEATURES
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 mb-6 leading-tight">
              Simplify Your Cx With Our Power Tools.
            </h2>
            <p className="text-slate-600 text-lg font-light leading-relaxed">
              Explore our robust features designed to streamline your Commissioning (Cx) processes and concrete structural construction projects.
            </p>
          </div>

          {/* Alternating Feature List Container */}
          <div className="flex flex-col gap-24 lg:gap-32">
            
            {/* Feature 1 (Mockup Left, Text Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Visual Mockup - Cx Library */}
              <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-lg relative overflow-hidden aspect-[4/3] flex flex-col justify-between">
                <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-sm flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-3">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-900">Project Documents</span>
                      <span className="text-[9px] text-slate-400">Total 142 items active</span>
                    </div>
                    <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-0.5 rounded font-medium">Synced</span>
                  </div>

                  <div className="flex gap-4 flex-1">
                    {/* Folders Tree */}
                    <div className="w-1/3 border-r border-slate-100 pr-3 flex flex-col gap-1.5">
                      <div className="text-[8px] font-bold text-slate-400 uppercase tracking-wider mb-1">Folders</div>
                      <div className="text-[10px] font-bold text-[#533BEE] bg-indigo-50/60 p-1.5 rounded flex items-center gap-1">
                        📁 Checklists
                      </div>
                      <div className="text-[10px] text-slate-600 p-1.5 hover:bg-slate-100 rounded flex items-center gap-1 cursor-pointer">
                        📁 Concrete logs
                      </div>
                      <div className="text-[10px] text-slate-600 p-1.5 hover:bg-slate-100 rounded flex items-center gap-1 cursor-pointer">
                        📁 Steel audits
                      </div>
                    </div>

                    {/* Files list & pie chart */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex flex-col gap-1.5">
                        <div className="text-[9px] bg-slate-50 p-1.5 rounded border border-slate-100 text-slate-700 flex justify-between">
                          <span>📋 Column-B Slump.pdf</span>
                          <span className="text-[8px] text-slate-400">Download</span>
                        </div>
                        <div className="text-[9px] bg-slate-50 p-1.5 rounded border border-slate-100 text-slate-700 flex justify-between">
                          <span>📋 Rebar-L3 Spacing.xlsx</span>
                          <span className="text-[8px] text-slate-400">Download</span>
                        </div>
                      </div>

                      {/* Donut chart SVG representing Cx Library stats */}
                      <div className="flex items-center gap-3 bg-slate-50/50 p-2 rounded border border-slate-100 mt-2">
                        <svg className="w-10 h-10" viewBox="0 0 36 36">
                          <path className="text-slate-200" stroke="currentColor" strokeWidth="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                          <path className="text-[#533BEE]" strokeDasharray="80, 100" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        </svg>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-bold text-slate-800">80% Approved</span>
                          <span className="text-[8px] text-slate-400">12 Pending review</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Block */}
              <div className="lg:col-span-6 flex flex-col items-start">
                <div className="w-10 h-10 rounded-full bg-[#ADD015] flex items-center justify-center mb-6 shadow-sm border border-[#ADD015]/40 text-slate-950">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2" /></svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-950 mb-4 tracking-tight leading-tight">
                  Your Entire Cx Library, One Digital Home
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-light">
                  Say goodbye to scattered files and outdated checklists. Harmonize all your project compliance records, checklists, and inspections under one roof. Log defects, concrete tests, and reports in a unified digital dashboard.
                </p>
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold px-5 py-2.5 rounded-full border border-slate-200/80 transition-all cursor-pointer"
                >
                  Learn More <span>→</span>
                </Link>
              </div>
            </div>

            {/* Feature 2 (Text Left, Mockup Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Text Block */}
              <div className="lg:col-span-6 lg:order-2 flex flex-col items-start">
                <div className="w-10 h-10 rounded-full bg-[#ADD015] flex items-center justify-center mb-6 shadow-sm border border-[#ADD015]/40 text-slate-950">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857" /></svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-950 mb-4 tracking-tight leading-tight">
                  Work Together Anywhere With Your Team
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-light">
                  Connect your entire field force — from subcontractors to site managers and architects. Assign tasks, share updates, and make decisions faster with instant push alerts, real-time comment threads, and blueprint overlays.
                </p>
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold px-5 py-2.5 rounded-full border border-slate-200/80 transition-all cursor-pointer"
                >
                  Learn More <span>→</span>
                </Link>
              </div>

              {/* Visual Mockup - Team Board */}
              <div className="lg:col-span-6 lg:order-1 bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-lg relative overflow-hidden aspect-[4/3] flex flex-col justify-between">
                <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-sm flex-1 flex flex-col gap-3">
                  <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      👥 Active Team Audits
                    </span>
                    <div className="flex -space-x-2">
                      <div className="w-5 h-5 rounded-full bg-indigo-100 border border-white flex items-center justify-center text-[7px] font-bold text-[#533BEE]">JK</div>
                      <div className="w-5 h-5 rounded-full bg-emerald-100 border border-white flex items-center justify-center text-[7px] font-bold text-emerald-700">DO</div>
                      <div className="w-5 h-5 rounded-full bg-amber-100 border border-white flex items-center justify-center text-[7px] font-bold text-amber-800">SM</div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="bg-slate-50 p-2.5 rounded border border-slate-100 text-[10px] text-slate-700 flex flex-col gap-1 shadow-sm">
                      <span className="font-bold text-slate-900">#AUD-101: Foundation Rebar Layout check</span>
                      <div className="flex justify-between text-[8px] text-slate-400">
                        <span>Assigned to: Apex Steel</span>
                        <span className="text-[#533BEE] font-bold">💬 James K: Spacing is good</span>
                      </div>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded border border-slate-100 text-[10px] text-slate-700 flex flex-col gap-1 shadow-sm">
                      <span className="font-bold text-slate-900">#AUD-102: Level-1 Waterproofing membrane</span>
                      <div className="flex justify-between text-[8px] text-slate-400">
                        <span>Assigned to: Northside Plumbing</span>
                        <span className="text-amber-600 font-bold">💬 Sarah M: Needs sealant check</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 (Mockup Left, Text Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Visual Mockup - Task Manager */}
              <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-lg relative overflow-hidden aspect-[4/3] flex flex-col justify-between">
                <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-sm flex-1 flex flex-col gap-3">
                  <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                    <span className="text-xs font-bold text-slate-900">📊 Slump Test Schedule</span>
                    <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded">All Clear</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 flex-1">
                    {/* Variance Graph */}
                    <div className="border border-slate-200/80 rounded p-2 flex flex-col justify-between">
                      <span className="text-[9px] text-slate-400 font-bold block mb-1">Slump Variance (mm)</span>
                      <div className="h-16 flex items-end justify-around gap-1.5">
                        <div className="w-3 bg-[#533BEE]/90 rounded-t h-[70%]" />
                        <div className="w-3 bg-[#533BEE] rounded-t h-[90%]" />
                        <div className="w-3 bg-[#ADD015] rounded-t h-[40%]" />
                        <div className="w-3 bg-red-400 rounded-t h-[20%]" />
                      </div>
                      <div className="flex justify-around text-[7px] text-slate-400 mt-1">
                        <span>A</span><span>B</span><span>C</span><span>D</span>
                      </div>
                    </div>

                    {/* Progress details */}
                    <div className="flex flex-col justify-around gap-1.5">
                      <div className="bg-slate-50 p-1.5 rounded border border-slate-100 flex flex-col gap-1">
                        <span className="text-[8px] text-slate-400 uppercase">Weekly Goal</span>
                        <span className="text-xs font-bold text-slate-800">12/15 Tests Logged</span>
                      </div>
                      <div className="bg-slate-50 p-1.5 rounded border border-slate-100 flex flex-col gap-1">
                        <span className="text-[8px] text-slate-400 uppercase">Subcontractor Accuracy</span>
                        <span className="text-xs font-bold text-emerald-600">96.8% Compliant</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Block */}
              <div className="lg:col-span-6 flex flex-col items-start">
                <div className="w-10 h-10 rounded-full bg-[#ADD015] flex items-center justify-center mb-6 shadow-sm border border-[#ADD015]/40 text-slate-950">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" /></svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-950 mb-4 tracking-tight leading-tight">
                  Manage Tasks Smartly, Get Things Done
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-light">
                  Prioritize tasks, assign defects, and track compliance levels across all trades in real-time. Our dashboard makes subcontractor tracking simple and keeps your projects moving.
                </p>
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold px-5 py-2.5 rounded-full border border-slate-200/80 transition-all cursor-pointer"
                >
                  Learn More <span>→</span>
                </Link>
              </div>
            </div>

            {/* Feature 4 (Text Left, Mockup Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Text Block */}
              <div className="lg:col-span-6 lg:order-2 flex flex-col items-start">
                <div className="w-10 h-10 rounded-full bg-[#ADD015] flex items-center justify-center mb-6 shadow-sm border border-[#ADD015]/40 text-slate-950">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-950 mb-4 tracking-tight leading-tight">
                  Test Smarter, Verify Faster
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-light">
                  Standardize your concrete slump testing, rebar inspections, and safety checks with custom checklist templates. Track compliance scores, record photos, and close out non-conformity items quickly.
                </p>
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold px-5 py-2.5 rounded-full border border-slate-200/80 transition-all cursor-pointer"
                >
                  Learn More <span>→</span>
                </Link>
              </div>

              {/* Visual Mockup - Checklist Panel */}
              <div className="lg:col-span-6 lg:order-1 bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-lg relative overflow-hidden aspect-[4/3] flex flex-col justify-between">
                <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-sm flex-1 flex flex-col gap-3">
                  <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                    <span className="text-xs font-bold text-slate-900">📋 Inspection Checklist</span>
                    <span className="text-[10px] text-[#533BEE] font-bold">94% Compliant</span>
                  </div>

                  <div className="flex flex-col gap-2 text-[10px] text-slate-700">
                    <div className="flex items-center justify-between bg-slate-50 p-2 rounded border border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="text-emerald-500 font-bold">✓</span>
                        <span>Level-1 column steel reinforcement layout</span>
                      </div>
                      <span className="text-[8px] bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded border border-emerald-100 font-medium">Passed</span>
                    </div>

                    <div className="flex items-center justify-between bg-slate-50 p-2 rounded border border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="text-emerald-500 font-bold">✓</span>
                        <span>Anchor bolt and steel template alignment</span>
                      </div>
                      <span className="text-[8px] bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded border border-emerald-100 font-medium">Passed</span>
                    </div>

                    <div className="flex items-center justify-between bg-slate-50 p-2 rounded border border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="text-red-500 font-bold">⚠</span>
                        <span>Wall plumb line tolerance - Zone D</span>
                      </div>
                      <span className="text-[8px] bg-rose-50 text-rose-700 px-1.5 py-0.5 rounded border border-rose-100 font-medium">Critical</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 5 (Mockup Left, Text Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Visual Mockup - Phone App */}
              <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-lg relative overflow-hidden aspect-[4/3] flex items-center justify-center">
                
                {/* Realistic Light Phone Shape */}
                <div className="w-[180px] h-[250px] bg-slate-900 rounded-[30px] p-2.5 shadow-2xl relative border-2 border-slate-800">
                  {/* Notch / Dynamic Island */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-black rounded-full z-20 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-slate-800 absolute right-2" />
                  </div>
                  
                  {/* Phone Screen Screen */}
                  <div className="w-full h-full bg-white rounded-[22px] overflow-hidden flex flex-col p-2.5 justify-between">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-1.5 mt-4">
                      <span className="text-[8px] font-bold text-slate-800">KomeshaBuild Mobile</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    </div>

                    <div className="flex-1 flex flex-col gap-1.5 py-3">
                      <div className="bg-indigo-50 p-1.5 rounded border border-indigo-100/50 flex flex-col gap-0.5">
                        <span className="text-[7px] text-slate-400 font-bold uppercase">Ready Walks</span>
                        <span className="text-[9px] font-bold text-slate-800">3 Audits Scheduled</span>
                      </div>

                      <div className="bg-slate-50 p-1.5 rounded border border-slate-100 flex items-center justify-between text-[7px] text-slate-600">
                        <span>Slump Test Zone-C</span>
                        <span className="text-emerald-600 font-bold">Passed</span>
                      </div>
                    </div>

                    <button className="w-full bg-[#533BEE] text-white text-[8px] font-bold py-1.5 rounded-full text-center">
                      + New Site Audit
                    </button>
                  </div>
                </div>

              </div>

              {/* Text Block */}
              <div className="lg:col-span-6 flex flex-col items-start">
                <div className="w-10 h-10 rounded-full bg-[#ADD015] flex items-center justify-center mb-6 shadow-sm border border-[#ADD015]/40 text-slate-950">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-950 mb-4 tracking-tight leading-tight">
                  Automate the Repetitive Cx Tasks with AI
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-light">
                  Speed up your compliance reviews. Ask our AI Code Matcher about regional construction regulations in plain language, search ASTM standards instantly, and generate pre-filled inspection reports.
                </p>
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold px-5 py-2.5 rounded-full border border-slate-200/80 transition-all cursor-pointer"
                >
                  Learn More <span>→</span>
                </Link>
              </div>
            </div>

          </div>

          {/* Flowing Pills Tag Bar Row */}
          <div className="mt-28 pt-16 border-t border-slate-100 max-w-5xl mx-auto flex flex-col items-center">
            <p className="text-slate-500 text-xs md:text-sm font-bold tracking-wide uppercase text-center mb-8">
              Enhance your next construction project with powerful features using KomeshaBuild
            </p>
            
            {/* Elegant horizontally wrapped tags grid */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 max-w-4xl">
              {[
                "AI-Powered Insights",
                "API Integration",
                "Workflow Automation",
                "Custom Reports",
                "Secure Data",
                "Performance Scoring",
                "Cloud Based",
                "Seamless Integration",
                "Advanced Analytics",
                "User Friendly",
                "Custom Checklists",
              ].map((pill, pIdx) => (
                <div
                  key={pIdx}
                  className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-full text-xs text-slate-700 font-bold flex items-center gap-2 shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ADD015]" />
                  {pill}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- INTERACTIVE PLATFORM DEMO SECTION --- */}
      <section id="platform-demo" className="py-20 lg:py-28 px-6 lg:px-8 border-b border-slate-200/60 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-950 mb-6">
              All the tools you need, at your fingertips.
            </h2>
            <p className="text-slate-600 text-lg font-light">
              Unlock a unified on-site workspace built to eliminate friction and elevate overall construction quality.
            </p>
          </div>

          {/* Interactive Navigation Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-4xl mx-auto">
            {[
              { id: "logger", label: "Inspection Logger" },
              { id: "matcher", label: "Code Matcher" },
              { id: "builder", label: "Report Builder" },
              { id: "assignee", label: "Defect Tracker" },
              { id: "scores", label: "Contractor Scores" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer border ${
                  activeTab === tab.id
                    ? "bg-[#533BEE] text-white border-[#533BEE] shadow-md shadow-indigo-200"
                    : "bg-white hover:bg-slate-50 text-slate-600 border-slate-200 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dynamic Mockup Presentation Container */}
          <div className="w-full max-w-4xl mx-auto border border-slate-200 bg-white rounded-2xl p-4 shadow-xl relative overflow-hidden">
            
            {/* Ambient radial glow under light tabs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[180px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/[0.04] to-transparent blur-[50px] pointer-events-none" />

            <div className="w-full bg-slate-50/50 rounded-xl overflow-hidden min-h-[360px] border border-slate-200/80 p-6 flex flex-col justify-between relative z-10">
              
              {/* Logger Preview */}
              {activeTab === "logger" && (
                <div className="flex flex-col gap-4 animate-fadeIn">
                  <div className="flex justify-between items-center border-b border-slate-200/80 pb-3">
                    <div>
                      <h3 className="text-slate-900 font-bold text-base">Site QA Walk Logger</h3>
                      <p className="text-slate-500 text-xs mt-0.5">Level-4 Floor Inspection walk-through feed</p>
                    </div>
                    <span className="text-[10px] bg-indigo-50 text-[#533BEE] px-3 py-1 rounded-full border border-indigo-100 font-bold uppercase tracking-wider">Live Capture</span>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="bg-white p-3.5 rounded border border-slate-200/80 shadow-sm flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded bg-emerald-50 flex items-center justify-center border border-emerald-200 text-xs text-emerald-700 font-bold">✓</span>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-slate-800">Zone A: Pillar Formwork Alignment check</span>
                          <span className="text-[10px] text-slate-500">Inspected by James K. • Plumb line variance &lt; 2mm</span>
                        </div>
                      </div>
                      <span className="text-xs text-emerald-600 font-bold">Passed</span>
                    </div>

                    <div className="bg-white p-3.5 rounded border border-slate-200/80 shadow-sm flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded bg-rose-50 flex items-center justify-center border border-rose-200 text-xs text-rose-600 font-bold">!</span>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-slate-800">Zone D: Elevator Shaft Wall Honeycombing</span>
                          <span className="text-[10px] text-slate-500">Compaction issue • Re-vibration required immediately</span>
                        </div>
                      </div>
                      <span className="text-xs text-rose-600 font-bold">Critical Defect</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Matcher Preview */}
              {activeTab === "matcher" && (
                <div className="flex flex-col gap-4 animate-fadeIn">
                  <div className="flex justify-between items-center border-b border-slate-200/80 pb-3">
                    <div>
                      <h3 className="text-slate-900 font-bold text-base">AI Code Matcher</h3>
                      <p className="text-slate-500 text-xs mt-0.5">Automated building code verification engine</p>
                    </div>
                    <span className="text-[10px] bg-indigo-50 text-[#533BEE] px-3 py-1 rounded-full border border-indigo-100 font-bold uppercase tracking-wider">AI Verified</span>
                  </div>

                  <div className="bg-white p-4 rounded border border-slate-200/80 shadow-sm flex flex-col gap-3">
                    <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded px-3 py-2 text-xs text-slate-600 font-medium">
                      <span className="text-[#533BEE] font-bold">Query:</span> "What are fire rating wall thickness rules for stairwells?"
                    </div>
                    <div className="bg-indigo-50/50 border border-indigo-100 p-3.5 rounded text-xs text-indigo-900 leading-relaxed font-medium">
                      🔥 <span className="font-bold text-indigo-950">Standard Code (KE BS 9999):</span> Stairwells in commercial office layouts require a minimum of <span className="text-indigo-950 font-bold">120-minute fire resistance</span>. Brick masonry walls must be at least <span className="text-indigo-950 font-bold">150mm thick</span> (plastered) to satisfy local regulations.
                    </div>
                  </div>
                </div>
              )}

              {/* Builder Preview */}
              {activeTab === "builder" && (
                <div className="flex flex-col gap-4 animate-fadeIn">
                  <div className="flex justify-between items-center border-b border-slate-200/80 pb-3">
                    <div>
                      <h3 className="text-slate-900 font-bold text-base">One-Click Compliance Report Builder</h3>
                      <p className="text-slate-500 text-xs mt-0.5">Generate municipal-grade structural handovers</p>
                    </div>
                    <span className="text-[10px] bg-indigo-50 text-[#533BEE] px-3 py-1 rounded-full border border-indigo-100 font-bold uppercase tracking-wider">Export Panel</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-white border border-slate-200/80 p-3 rounded shadow-sm flex flex-col gap-1.5">
                      <span className="text-[10px] text-slate-400 font-bold uppercase">Concrete Log</span>
                      <span className="text-xs text-slate-900 font-bold">4 Slump Tests</span>
                      <span className="text-[10px] text-emerald-600 flex items-center gap-1 font-bold">✓ Fully Audited</span>
                    </div>
                    <div className="bg-white border border-slate-200/80 p-3 rounded shadow-sm flex flex-col gap-1.5">
                      <span className="text-[10px] text-slate-400 font-bold uppercase">Steel Specs</span>
                      <span className="text-xs text-slate-900 font-bold">12 Level Rebars</span>
                      <span className="text-[10px] text-emerald-600 flex items-center gap-1 font-bold">✓ Fully Audited</span>
                    </div>
                    <div className="bg-white border border-slate-200/80 p-3 rounded shadow-sm flex flex-col gap-1.5">
                      <span className="text-[10px] text-slate-400 font-bold uppercase">Structural Integrity</span>
                      <span className="text-xs text-slate-900 font-bold">Ready for Review</span>
                      <span className="text-[10px] text-amber-600 flex items-center gap-1 font-bold">⚠ 1 Flagged Item</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Assignee Preview */}
              {activeTab === "assignee" && (
                <div className="flex flex-col gap-4 animate-fadeIn">
                  <div className="flex justify-between items-center border-b border-slate-200/80 pb-3">
                    <div>
                      <h3 className="text-slate-900 font-bold text-base">Defect Tracker</h3>
                      <p className="text-slate-500 text-xs mt-0.5">Real-time trade assignment & resolution loop</p>
                    </div>
                    <span className="text-[10px] bg-rose-50 text-rose-700 px-3 py-1 rounded-full border border-rose-100 font-bold uppercase tracking-wider">Tickets Active</span>
                  </div>

                  <div className="bg-white border border-slate-200/80 rounded p-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-900">#DEF-402: Level-1 Wet Area Waterproofing Failure</span>
                        <span className="text-[10px] text-slate-500">Assigned to: <span className="text-slate-700 font-bold">Cascade Waterproofing</span> • Deadline: Today 4 PM</span>
                      </div>
                    </div>
                    <button className="bg-rose-50 hover:bg-rose-100/80 text-rose-700 border border-rose-200 text-[10px] font-bold px-3 py-1.5 rounded-full transition-all cursor-pointer">
                      Send SMS Reminder
                    </button>
                  </div>
                </div>
              )}

              {/* Scores Preview */}
              {activeTab === "scores" && (
                <div className="flex flex-col gap-4 animate-fadeIn">
                  <div className="flex justify-between items-center border-b border-slate-200/80 pb-3">
                    <div>
                      <h3 className="text-slate-900 font-bold text-base">Subcontractor Quality Scoring</h3>
                      <p className="text-slate-500 text-xs mt-0.5">Subcontractor compliance and issue close-out speed</p>
                    </div>
                    <span className="text-[10px] bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-100 font-bold uppercase tracking-wider">Analytics Live</span>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    <div className="flex items-center justify-between bg-white p-2.5 rounded border border-slate-200/80 shadow-sm text-xs">
                      <span className="font-bold text-slate-800">Cascade Concrete & Foundation</span>
                      <div className="flex items-center gap-3">
                        <div className="w-24 bg-slate-100 h-2 rounded-full overflow-hidden border border-slate-200">
                          <div className="bg-emerald-500 h-full w-[96%]" />
                        </div>
                        <span className="font-bold text-emerald-600">9.6 / 10</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between bg-white p-2.5 rounded border border-slate-200/80 shadow-sm text-xs">
                      <span className="font-bold text-slate-800">Apex Structural Steelworks</span>
                      <div className="flex items-center gap-3">
                        <div className="w-24 bg-slate-100 h-2 rounded-full overflow-hidden border border-slate-200">
                          <div className="bg-indigo-600 h-full w-[88%]" />
                        </div>
                        <span className="font-bold text-[#533BEE]">8.8 / 10</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between bg-white p-2.5 rounded border border-slate-200/80 shadow-sm text-xs">
                      <span className="font-bold text-slate-800">Northside Plumbing & Mechanical</span>
                      <div className="flex items-center gap-3">
                        <div className="w-24 bg-slate-100 h-2 rounded-full overflow-hidden border border-slate-200">
                          <div className="bg-amber-500 h-full w-[74%]" />
                        </div>
                        <span className="font-bold text-amber-600">7.4 / 10</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Platform Bottom CTA */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row justify-between items-center gap-3">
                <span className="text-slate-500 text-xs">Experience how simple construction quality compliance can be.</span>
                <Link
                  href="/signup"
                  className="bg-[#533BEE] hover:bg-[#533BEE]/90 text-white text-xs font-bold py-2 px-5 rounded-full transition-colors text-center cursor-pointer"
                >
                  Start Custom Audit Now
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* --- BENEFITS SECTION --- */}
      <section className="py-20 lg:py-28 px-6 lg:px-8 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-950 mb-6">
              The key benefits of using KomeshaBuild
            </h2>
            <p className="text-slate-600 text-lg font-light">
              Boost inspection speeds, maximize on-site safety compliance, and eliminate high structural re-work expenses.
            </p>
          </div>

          {/* Asymmetrical 3-Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Card 1: Slate/Blue Gradient (Left) */}
            <div className="lg:col-span-6 bg-gradient-to-br from-blue-50/70 to-indigo-50/30 border border-blue-100 rounded-3xl p-8 lg:p-10 flex flex-col justify-between min-h-[320px] transition-all duration-300 group hover:shadow-md">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-4 block">14+ Hours Saved Weekly</span>
                <h3 className="text-slate-950 font-extrabold text-2xl lg:text-3xl mb-4 leading-tight group-hover:text-[#533BEE] transition-colors">
                  Eliminate Paperwork & Manual Audits
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  Log slump tests, rebar logs, and safety checks on-site. Automatically compile professional logs that are ready for municipal inspectors, eliminating late-night office reports.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider group-hover:text-blue-700">
                Learn QA features
                <span>→</span>
              </div>
            </div>

            {/* Card 2: Emerald/Teal Gradient (Right) */}
            <div className="lg:col-span-6 bg-gradient-to-br from-emerald-50/70 to-teal-50/30 border border-emerald-100 rounded-3xl p-8 lg:p-10 flex flex-col justify-between min-h-[320px] transition-all duration-300 group hover:shadow-md">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-4 block">Zero Late Tear-Outs</span>
                <h3 className="text-slate-950 font-extrabold text-2xl lg:text-3xl mb-4 leading-tight group-hover:text-emerald-700 transition-colors">
                  Mitigate Expensive Delay Risks
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  Identify rebar spacing and concrete code issues during early stages. Avoid the nightmare of tear-outs and massive rebuilding delays by correcting mistakes before final pours.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-xs font-bold text-emerald-600 uppercase tracking-wider group-hover:text-emerald-700">
                Prevent project delays
                <span>→</span>
              </div>
            </div>

            {/* Card 3: Deep Professional Blue (Bottom - Anchor Section) */}
            <div className="lg:col-span-12 bg-gradient-to-r from-[#11249D] to-[#1d35cc] border border-[#11249D]/20 rounded-3xl p-8 lg:p-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 shadow-xl shadow-blue-900/10">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-200 mb-3 block">High-Performing Trades Only</span>
                <h3 className="text-white font-extrabold text-2xl lg:text-3xl mb-3 leading-tight">
                  Drive Subcontractor Quality & Safety Scores
                </h3>
                <p className="text-slate-200 text-sm leading-relaxed font-light">
                  Analyze trade compliance levels, track ticket resolution speeds, and hire only the highest-performing subcontractors for your next commercial development project.
                </p>
              </div>
              <Link
                href="/signup"
                className="bg-white hover:bg-slate-50 text-[#11249D] font-bold px-8 py-3.5 rounded-full shadow-lg transition-all text-center self-start sm:self-center shrink-0 cursor-pointer"
              >
                Try KomeshaBuild Now
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section className="py-20 lg:py-28 px-6 lg:px-8 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-950 mb-6">
              What our users say
            </h2>
            <p className="text-slate-600 text-lg font-light">
              Empowering construction project managers, structural engineers, and general builders across active sites.
            </p>
          </div>

          {/* Testimonial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i} className="text-amber-500 text-sm">★</span>
                    ))}
                  </div>

                  <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                    "{item.quote}"
                  </p>
                </div>

                {/* User Info */}
                <div className="flex items-center gap-3 border-t border-slate-100 pt-4 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-50 to-indigo-100 text-indigo-700 border border-indigo-200/40 flex items-center justify-center font-bold text-sm shrink-0 shadow-inner">
                    {item.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-900 font-bold text-sm">{item.name}</span>
                    <span className="text-slate-500 text-xs">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section className="py-20 lg:py-28 px-6 lg:px-8 border-b border-slate-200/60 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-950 mb-6">
              Start Your Quality Construction Journey
            </h2>
            <p className="text-slate-600 text-lg font-light">
              Transparent, professional pricing designed for both independent supervisors and large real estate developers.
            </p>
          </div>

          {/* Billing Switcher */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={`text-sm ${billingCycle === "monthly" ? "text-slate-950 font-bold" : "text-slate-500"}`}>Monthly</span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className="w-12 h-6 bg-slate-200 rounded-full p-0.5 relative transition-colors cursor-pointer border border-slate-300/40"
            >
              <div
                className={`w-5 h-5 bg-[#533BEE] rounded-full transition-transform duration-300 ${
                  billingCycle === "yearly" ? "translate-x-6" : ""
                }`}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm ${billingCycle === "yearly" ? "text-slate-950 font-bold" : "text-slate-500"}`}>Yearly</span>
              <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded font-bold uppercase tracking-wider shadow-sm">Save 20%</span>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {pricingPlans.map((plan, idx) => {
              const displayPrice =
                typeof plan.priceMonthly === "number"
                  ? billingCycle === "monthly"
                    ? plan.priceMonthly
                    : plan.priceYearly
                  : plan.priceMonthly;

              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative border ${
                    plan.popular
                      ? "border-[#533BEE] shadow-xl shadow-indigo-100 md:-translate-y-2"
                      : "border-slate-200/80 shadow-sm hover:border-slate-300"
                  }`}
                >
                  {/* Popular Highlight Badge */}
                  {plan.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#533BEE] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full border border-indigo-400/20 shadow-md">
                      Most Popular
                    </span>
                  )}

                  <div>
                    {/* Header */}
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">{plan.name}</span>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-3xl lg:text-4xl font-extrabold text-slate-950">
                        {typeof displayPrice === "number" ? `$${displayPrice}` : displayPrice}
                      </span>
                      {typeof displayPrice === "number" && (
                        <span className="text-slate-400 text-xs">/ month</span>
                      )}
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed mb-6 pb-6 border-b border-slate-100">
                      {plan.desc}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-3.5 mb-8">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                          <span className="text-emerald-500 font-bold shrink-0">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA button */}
                  <Link
                    href="/signup"
                    className={`w-full text-center font-bold py-2.5 rounded-full text-xs transition-all cursor-pointer ${
                      plan.popular
                        ? "bg-[#533BEE] hover:bg-[#533BEE]/90 text-white shadow-md shadow-indigo-500/10"
                        : "bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80 hover:text-slate-950"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-20 lg:py-28 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-950 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-lg font-light">
              Have questions about how KomeshaBuild secures site quality? We have answers.
            </p>
          </div>

          {/* Collapsible FAQ list */}
          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-50/60 border border-slate-200/60 rounded-xl overflow-hidden transition-all duration-300 hover:border-slate-300/80"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center text-left p-5 transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-sm md:text-base text-slate-900 pr-4">{faq.q}</span>
                    <span
                      className={`text-[#533BEE] font-bold text-xs transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  {/* Expandable answer panel */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? "max-h-[220px] border-t border-slate-200/60" : "max-h-0"
                    }`}
                  >
                    <p className="p-5 text-slate-600 text-sm leading-relaxed bg-white">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </main>
  );
}
