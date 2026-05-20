"use client";
import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Is there a free trial or sandbox version?",
    answer: "Yes! You can sign up for a 14‑day sandbox account that includes the full Starter feature set, allowing you to evaluate field logging, checklist creation, and PDF export without providing payment details."
  },
  {
    question: "Can we scale from Starter to Professional later?",
    answer: "Absolutely. Your workspace can be upgraded at any time. The billing toggle will automatically recalculate the price and you will be charged the prorated amount for the new tier."
  },
  {
    question: "Do field engineers need separate accounts?",
    answer: "All field engineers are added as subcontractor seats within your workspace. Their accounts are included in the Starter and Professional tier limits, and there are no per‑seat fees for additional engineers."
  },
  {
    question: "Is mobile access included in all plans?",
    answer: "Mobile offline logging, photo capture, and blueprint pinning are core features shipped with every tier, including the free sandbox."
  },
  {
    question: "How is document storage handled?",
    answer: "All uploads are encrypted at rest and stored in a private Supabase bucket. The Starter tier provides 5 GB, Professional 25 GB, and Enterprise offers 500 GB+ with optional dedicated vaults."
  },
  {
    question: "Do you support custom enterprise deployments?",
    answer: "Yes. Enterprise customers can request private‑cloud or on‑premise installations, custom SSO integrations, and dedicated SLA contracts through the Enterprise contact form."
  }
];

export default function PricingFAQAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 px-6 lg:px-8 bg-white border-b border-slate-150">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center bg-indigo-50 border border-indigo-100/60 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#533BEE] mb-4 uppercase tracking-wider">
            Pricing FAQs
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950 mb-6 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
            Clarify any concerns about our plans, billing cadence, and feature availability.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm hover:border-slate-300"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-medium text-slate-900 hover:text-[#533BEE] transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3 text-sm md:text-base">
                    <HelpCircle className="w-5 h-5 text-[#533BEE] flex-shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#533BEE]" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? "max-h-96 border-t border-slate-100" : "max-h-0"}`}
                >
                  <p className="p-5 text-slate-500 text-sm md:text-base leading-relaxed">
                    {faq.answer}
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
