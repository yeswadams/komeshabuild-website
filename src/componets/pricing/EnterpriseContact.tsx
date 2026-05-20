"use client";
import Link from "next/link";
import { Phone, Mail, ShieldCheck } from "lucide-react";

export default function EnterpriseContact(){
  return (
    <section id="enterprise" className="py-20 lg:py-28 px-6 lg:px-8 bg-slate-50/50 border-b border-slate-200/60">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center bg-indigo-50 border border-indigo-100/60 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#533BEE] mb-4 uppercase tracking-wider">
          Enterprise Ready
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-950 mb-6">
          Custom Solutions for Large‑Scale Construction Projects
        </h2>
        <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed mb-8">
          Need private‑cloud deployment, on‑premise hosting, dedicated support, or tailored SLA guarantees? Our enterprise team will work directly with you to design a solution that meets regulatory, security, and performance requirements.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#533BEE] text-white rounded-full hover:bg-[#533BEE]/90 transition-colors text-sm font-semibold">
            <Phone className="w-4 h-4" /> Contact Sales
          </Link>
          <Link href="mailto:sales@komeshabuild.xyz" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white border border-slate-300 text-slate-800 rounded-full hover:bg-slate-100 transition-colors text-sm font-semibold">
            <Mail className="w-4 h-4" /> Email Us
          </Link>
        </div>
        <div className="mt-8 flex items-center justify-center gap-6 text-slate-500 text-xs">
          <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> SOC‑2 Certified</span>
          <span>·</span>
          <span>GDPR Compliant</span>
          <span>·</span>
          <span>99.9% Uptime SLA</span>
        </div>
      </div>
    </section>
  );
}
