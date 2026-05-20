import React from "react";

interface LegalHeroProps {
  title: string;
  description: string;
  lastUpdated: string;
  category: string;
}

export default function LegalHero({ title, description, lastUpdated, category }: LegalHeroProps) {
  return (
    <section className="relative pt-16 pb-12 lg:pt-24 lg:pb-16 px-6 lg:px-8 border-b border-slate-200 bg-gradient-to-b from-indigo-50/30 via-white to-white overflow-hidden print:border-none print:bg-none print:pt-4 print:pb-4">
      {/* Sleek top divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent print:hidden" />
      
      {/* Soft elegant warm-blue backdrop glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/[0.04] via-transparent to-transparent blur-[60px] pointer-events-none print:hidden" />

      {/* Grid Pattern overlay for premium SaaS look */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none print:hidden" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Category Pill */}
        <div className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-100/60 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#533BEE] mb-6 shadow-sm print:hidden">
          <span>⚖️</span>
          <span>{category}</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.15] mb-4 print:text-3xl print:text-left print:w-full">
          {title}
        </h1>

        {/* Subtitle / Description */}
        <p className="text-slate-600 text-sm md:text-base max-w-2xl mb-6 leading-relaxed font-light print:text-slate-800 print:text-left print:w-full">
          {description}
        </p>

        {/* Last Updated metadata */}
        <div className="flex items-center gap-2 text-xs font-medium text-slate-400 print:text-slate-500 print:text-left print:w-full">
          <span>Last Updated:</span>
          <time className="text-slate-600 font-bold" dateTime={new Date(lastUpdated).toISOString()}>
            {lastUpdated}
          </time>
          <span className="h-3 w-[1px] bg-slate-200 print:hidden" />
          <span className="text-[#533BEE] font-semibold print:hidden">Official Agreement</span>
        </div>
      </div>
    </section>
  );
}
