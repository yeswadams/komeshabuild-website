import React from "react";
import { Link2, AlertCircle, Info, ShieldCheck, AlertTriangle } from "lucide-react";

interface Callout {
  type: "info" | "warning" | "success" | "danger";
  title?: string;
  content: string;
}

interface LegalSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  callout?: Callout;
}

export default function LegalSection({ id, title, children, callout }: LegalSectionProps) {
  // Utility to select callout styles and icons
  const getCalloutStyles = (type: Callout["type"]) => {
    switch (type) {
      case "success":
        return {
          bg: "bg-emerald-50/60 border-emerald-200/80 text-emerald-950",
          accent: "text-emerald-600",
          icon: ShieldCheck,
        };
      case "warning":
        return {
          bg: "bg-amber-50/60 border-amber-200/80 text-amber-950",
          accent: "text-amber-600",
          icon: AlertTriangle,
        };
      case "danger":
        return {
          bg: "bg-rose-50/60 border-rose-200/80 text-rose-950",
          accent: "text-rose-600",
          icon: AlertCircle,
        };
      case "info":
      default:
        return {
          bg: "bg-indigo-50/50 border-indigo-100/80 text-indigo-950",
          accent: "text-[#533BEE]",
          icon: Info,
        };
    }
  };

  const calloutStyles = callout ? getCalloutStyles(callout.type) : null;
  const CalloutIcon = calloutStyles ? calloutStyles.icon : null;

  return (
    <section
      id={id}
      className="pb-10 mb-10 border-b border-slate-100 last:border-none last:pb-0 last:mb-0 scroll-mt-28 print:pb-4 print:mb-4 print:border-slate-200"
    >
      {/* Anchored Header */}
      <div className="group flex items-center gap-2 mb-4">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 leading-tight">
          {title}
        </h2>
        <a
          href={`#${id}`}
          className="opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-200 p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-[#533BEE] print:hidden"
          aria-label={`Link to section: ${title}`}
        >
          <Link2 className="w-4 h-4" />
        </a>
      </div>

      {/* Content Block */}
      <div className="prose prose-slate max-w-none text-slate-600 font-light leading-relaxed text-sm md:text-base space-y-4 prose-p:mb-4 prose-ul:list-disc prose-ul:pl-6 prose-li:mb-2">
        {children}
      </div>

      {/* Callout Block (if present) */}
      {callout && calloutStyles && CalloutIcon && (
        <div
          className={`mt-6 p-4 rounded-xl border flex gap-3 text-xs md:text-sm leading-relaxed ${calloutStyles.bg} print:bg-none print:border-slate-200`}
        >
          <CalloutIcon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${calloutStyles.accent}`} />
          <div className="flex flex-col gap-0.5">
            {callout.title && <strong className="font-semibold">{callout.title}</strong>}
            <span className="font-light">{callout.content}</span>
          </div>
        </div>
      )}
    </section>
  );
}
