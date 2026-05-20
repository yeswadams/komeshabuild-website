import React from "react";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function LegalCTA() {
  return (
    <section className="mt-16 border-t border-slate-200/80 pt-16 pb-6 print:hidden">
      <div className="relative rounded-3xl overflow-hidden border border-[#533BEE]/10 bg-slate-900 px-6 py-12 md:py-16 text-center shadow-xl">
        
        {/* Abstract Ambient Glow Effects inside card */}
        <div className="absolute -top-24 -left-20 w-80 h-80 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#533BEE]/10 via-transparent to-transparent blur-[50px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-20 w-80 h-80 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#11249D]/20 via-transparent to-transparent blur-[50px] pointer-events-none" />
        
        {/* Subtle Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-4">
            Build Right. First Time.
          </h2>
          <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed mb-8 max-w-lg mx-auto">
            Ready to secure your construction QA process, automate code validations, and eliminate structural rework? Get started today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="w-full sm:w-auto bg-[#533BEE] hover:bg-[#533BEE]/90 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-indigo-900/35 transition-all text-center flex items-center justify-center gap-2 cursor-pointer border border-transparent text-sm"
            >
              Get Started for Free <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-750 text-slate-100 font-semibold px-8 py-3.5 rounded-full border border-slate-700 transition-all text-center flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              <MessageSquare className="w-4 h-4 text-[#ADD015]" /> Contact Support
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
