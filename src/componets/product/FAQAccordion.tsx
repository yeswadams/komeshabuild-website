"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS_DATA: FAQItem[] = [
  {
    question: "How does the mobile offline synchronization work?",
    answer: "When site supervisors walk deep concrete basements or remote locations without signal, KomeshaBuild automatically caches all checklist inputs, structural parameters, and camera photos directly on the device's secure browser/storage. The moment cellular or Wi-Fi signal is detected, the application background-syncs the queued uploads safely to the cloud."
  },
  {
    question: "Can we invite trade subcontractors to verify checklists for free?",
    answer: "Yes! KomeshaBuild encourages collaborative coordination. Workspace administrators can assign limited subcontractor seat roles. These accounts allow subcontractors to view their designated checklists, upload resolution photos, and clear defect warnings without costing full project developer licenses."
  },
  {
    question: "How secure are our proprietary CAD drawings and blueprints?",
    answer: "Extremely secure. We store drawings and compliance files under private cloud vaults. Every single database table is secured with Supabase Row-Level Security (RLS) policies. Only authenticated members of your active corporate workspace who are assigned to that specific project have access to view or edit documents."
  },
  {
    question: "Does the AI Code Search assistant replace licensed structural engineers?",
    answer: "No, under no circumstances. The AI Code Search is a powerful auxiliary semantic tool designed to speed up standard references (e.g. concrete slump guidelines or steel rebar margins). All structural blueprints and critical curing calculations must be signed and certified by a registered structural engineer in Kenya before physical operations begin."
  },
  {
    question: "Can we export generated reports for municipal occupancy permits?",
    answer: "Yes. KomeshaBuild compiles all logged checklists, slump charts, safety observations, and verified photographs. With a single click, administrators can export a polished, certified PDF document ready for city council review, consultant engineers, and client handovers."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 px-6 lg:px-8 bg-white border-b border-slate-150">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center bg-indigo-50 border border-indigo-100/60 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#533BEE] mb-4 uppercase tracking-wider">
            Operational FAQs
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950 mb-6 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
            Have questions about integrating KomeshaBuild into your active construction site QA? Read our operational guidelines below.
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm hover:border-slate-350"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left font-bold text-slate-900 hover:text-[#533BEE] transition-colors focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3 text-xs md:text-sm">
                    <HelpCircle className="w-4.5 h-4.5 text-[#533BEE] flex-shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-[#533BEE]" : ""
                    }`} 
                  />
                </button>

                {/* Animated Answer Panel */}
                <div 
                  className={`transition-all duration-200 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-slate-100" : "max-h-0"
                  }`}
                >
                  <p className="p-5 md:p-6 text-slate-500 font-light text-xs md:text-sm leading-relaxed">
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
