"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, Star } from "lucide-react";

export default function PricingHeroAndCards() {
  const [billingInterval, setBillingInterval] = useState<"monthly" | "annual">("annual");

  const isAnnual = billingInterval === "annual";

  const PLANS = [
    {
      name: "Starter",
      description: "For small teams and pilot construction projects.",
      monthlyPrice: 49,
      annualPrice: 39,
      yearlyTotal: 468,
      features: [
        "1 Active Construction Project",
        "Up to 10 Subcontractor seats",
        "5 GB Secured Blueprint Storage",
        "Standard Commissioning Checklists",
        "Basic PDF Report Exports",
        "Mobile Field Logging (Offline Caching)",
        "Email Support (24-hour turnaround)"
      ],
      ctaText: "Start Free Sandbox",
      ctaLink: "/signup",
      highlighted: false
    },
    {
      name: "Professional",
      description: "For growing teams managing active multi-site QA.",
      monthlyPrice: 149,
      annualPrice: 119,
      yearlyTotal: 1428,
      features: [
        "Up to 5 Active Projects",
        "Unlimited Subcontractor seats",
        "25 GB Secured Blueprint Storage",
        "Custom Checklist Builder & Templates",
        "Advanced CAD Coordinate Pinning",
        "AI Building Code Assistant Search",
        "Priority Slack & Email Support (4hr)",
        "Custom Logo Branded Report PDF"
      ],
      ctaText: "Explore Professional Features",
      ctaLink: "/signup",
      highlighted: true
    },
    {
      name: "Enterprise",
      description: "For principal developers and complex operations.",
      priceText: "Custom",
      features: [
        "Unlimited Active Projects & Workspaces",
        "Unlimited Subcontractors & Collaborators",
        "500 GB+ Document Storage Vaults",
        "Dedicated Commissioning Consultant",
        "Revit & BIM API Custom Integration",
        "Single-Sign-On (SSO / SAML)",
        "99.9% Uptime Service Level Agreement (SLA)",
        "Custom Training & On-Site Onboarding"
      ],
      ctaText: "Contact Sales Department",
      ctaLink: "/contact",
      highlighted: false
    }
  ];

  return (
    <section 
      id="hero" 
      className="relative pt-20 pb-20 lg:pt-28 lg:pb-24 px-6 lg:px-8 border-b border-slate-100 bg-gradient-to-b from-indigo-50/30 via-white to-white overflow-hidden"
    >
      {/* Sleek top divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent" />
      
      {/* Soft elegant warm-blue backdrop glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/[0.04] via-transparent to-transparent blur-[70px] pointer-events-none" />

      {/* Grid Pattern overlay for premium SaaS look */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 text-center">
        
        {/* Category Pill */}
        <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100/60 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#533BEE] mb-8 shadow-sm">
          <span>💎</span>
          <span>Transparent Enterprise Pricing</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-950 max-w-3xl leading-[1.15] mb-6">
          Flexible Pricing for
          <span className="block mt-2 bg-gradient-to-r from-[#11249D] to-[#533BEE] bg-clip-text text-transparent">
            Construction Teams of Every Size.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-600 text-base md:text-lg max-w-2xl mb-10 leading-relaxed font-light">
          No hidden fees, no seat penalties for subcontractors. Select a tier aligned with your active construction project pipelines, or sandbox KomeshaBuild for free.
        </p>

        {/* Dynamic Billing Switcher Toggle */}
        <div className="flex items-center gap-3.5 bg-slate-100 border border-slate-200/50 p-1 rounded-full mb-16 relative">
          <button
            onClick={() => setBillingInterval("monthly")}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              billingInterval === "monthly"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingInterval("annual")}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
              billingInterval === "annual"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Annual
            <span className="bg-[#ADD015] text-slate-950 text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-normal">
              Save 20%
            </span>
          </button>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl w-full text-left items-stretch">
          {PLANS.map((plan, idx) => {
            const isCustom = plan.priceText === "Custom";
            const currentPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 relative ${
                  plan.highlighted
                    ? "border-[#533BEE]/30 shadow-xl lg:-translate-y-2"
                    : "border-slate-200/80 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Highlight Tag */}
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#533BEE] text-white text-[10px] font-black uppercase tracking-wider px-4 py-1 rounded-full shadow flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current text-[#ADD015]" /> MOST POPULAR
                  </div>
                )}

                <div>
                  {/* Plan Name */}
                  <h3 className="text-xl font-extrabold text-slate-950 tracking-tight mb-2">
                    {plan.name}
                  </h3>

                  {/* Plan Description */}
                  <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* Pricing Details */}
                  <div className="mb-8 flex items-baseline gap-1 border-b border-slate-100 pb-6">
                    {isCustom ? (
                      <span className="text-4xl font-black text-slate-950 tracking-tight">
                        {plan.priceText}
                      </span>
                    ) : (
                      <>
                        <span className="text-sm font-extrabold text-slate-400 align-super">$</span>
                        <span className="text-5xl font-black text-slate-950 tracking-tight">
                          {currentPrice}
                        </span>
                        <span className="text-slate-400 text-xs font-medium ml-1">/ project / month</span>
                      </>
                    )}
                  </div>

                  {/* Billing Details sub-label */}
                  {!isCustom && (
                    <div className="text-[10px] text-slate-450 font-bold uppercase tracking-wider mb-6">
                      {isAnnual ? (
                        <span className="text-[#533BEE]">Billed Annually at ${plan.yearlyTotal}/year</span>
                      ) : (
                        <span>Billed Monthly</span>
                      )}
                    </div>
                  )}

                  {/* Feature Lists */}
                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-2.5 text-slate-600 text-xs md:text-sm font-light">
                        <Check className="w-4 h-4 text-[#533BEE] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action button */}
                <Link
                  href={plan.ctaLink}
                  className={`w-full font-bold px-6 py-3.5 rounded-full text-center flex items-center justify-center gap-2 cursor-pointer transition-all border text-xs ${
                    plan.highlighted
                      ? "bg-[#533BEE] hover:bg-[#533BEE]/90 text-white border-transparent shadow shadow-indigo-200"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200"
                  }`}
                >
                  {plan.ctaText} <ArrowRight className="w-3.5 h-3.5" />
                </Link>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
