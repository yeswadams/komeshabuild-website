import React from "react";
import { ShieldCheck, Database, Key, Scroll } from "lucide-react";

export default function SecurityReliability() {
  return (
    <section id="security" className="py-20 lg:py-28 px-6 lg:px-8 bg-slate-50/50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center bg-indigo-50 border border-indigo-100/60 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#533BEE] mb-4 uppercase tracking-wider">
            Enterprise Trust
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-950 mb-6 leading-tight">
            Security Engineered for Structural Integrity
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">
            Construction data requires robust security. We protect your drawings, blueprints, audit trails, and user credentials with state-of-the-art database infrastructure.
          </p>
        </div>

        {/* Security Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
          
          {/* Identity Protection */}
          <div className="bg-white border border-slate-200/80 p-8 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200">
            <div>
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center border border-indigo-100/40 mb-6">
                <Key className="w-5 h-5 text-[#533BEE]" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-3 tracking-tight">
                Secure Authentication & SSO
              </h3>
              <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed">
                Passwords and session tokens are hosted entirely inside secure, encrypted authentication portals (Supabase Auth). Integrate with Google OAuth for streamlined trade logins.
              </p>
            </div>
            <span className="text-[10px] font-bold text-[#533BEE] uppercase tracking-wider mt-6">Supabase Auth</span>
          </div>

          {/* Database Access Control */}
          <div className="bg-white border border-slate-200/80 p-8 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200">
            <div>
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center border border-indigo-100/40 mb-6">
                <Database className="w-5 h-5 text-[#533BEE]" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-3 tracking-tight">
                Row-Level Database Security
              </h3>
              <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed">
                We implement Row-Level Security (RLS) across all core databases. Subcontractors are strictly isolated and only read blueprints or check fields mapped to their trade package.
              </p>
            </div>
            <span className="text-[10px] font-bold text-[#533BEE] uppercase tracking-wider mt-6">Granular RLS Policies</span>
          </div>

          {/* Document Vault Encryption */}
          <div className="bg-white border border-slate-200/80 p-8 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200">
            <div>
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center border border-indigo-100/40 mb-6">
                <ShieldCheck className="w-5 h-5 text-[#533BEE]" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-3 tracking-tight">
                Cloud Document Ingestion
              </h3>
              <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed">
                Structural blueprints, steel check photographs, slump metrics charts, and commissioning certificates are processed securely under cloud storage networks with backup recovery.
              </p>
            </div>
            <span className="text-[10px] font-bold text-[#533BEE] uppercase tracking-wider mt-6">Encrypted vaults</span>
          </div>

          {/* Auditable Integrity logs */}
          <div className="bg-white border border-slate-200/80 p-8 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200">
            <div>
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center border border-indigo-100/40 mb-6">
                <Scroll className="w-5 h-5 text-[#533BEE]" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-3 tracking-tight">
                Unmodifiable Audit Trails
              </h3>
              <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed">
                Platform actions log every concrete slump, safety checklist approval, and defect correction chronologically. Every compliance sign-off creates an unalterable history trail.
              </p>
            </div>
            <span className="text-[10px] font-bold text-[#533BEE] uppercase tracking-wider mt-6">Immutable history logs</span>
          </div>

        </div>

      </div>
    </section>
  );
}
