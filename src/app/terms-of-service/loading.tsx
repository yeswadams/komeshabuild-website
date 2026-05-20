import React from "react";

export default function TermsOfServiceLoading() {
  return (
    <div className="w-full bg-white min-h-screen" aria-hidden="true">
      {/* Fixed top loader bar shimmer */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-100 z-50 overflow-hidden">
        <div className="h-full w-1/3 bg-gradient-to-r from-indigo-500 to-indigo-600 animate-shimmer" />
      </div>

      {/* Hero Header Skeleton */}
      <section className="relative pt-16 pb-12 lg:pt-24 lg:pb-16 px-6 lg:px-8 border-b border-slate-200 bg-slate-50/40">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center animate-pulse">
          {/* Pill Placeholder */}
          <div className="w-28 h-5 bg-slate-200 rounded-full mb-6" />
          {/* Title Placeholder */}
          <div className="w-64 md:w-96 h-10 bg-slate-200 rounded-lg mb-4" />
          {/* Description Placeholder */}
          <div className="w-full max-w-lg h-4 bg-slate-200 rounded mb-2" />
          <div className="w-2/3 max-w-sm h-4 bg-slate-200 rounded mb-6" />
          {/* Metadata Placeholder */}
          <div className="w-40 h-4 bg-slate-200 rounded" />
        </div>
      </section>

      {/* Columns Layout Skeleton */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 animate-pulse">
          {/* Left Sidebar Table of Contents Skeleton */}
          <aside className="hidden lg:block lg:col-span-3 border border-slate-200/60 p-6 rounded-2xl bg-slate-50/30">
            <div className="w-32 h-4 bg-slate-200 rounded mb-4 pb-2" />
            <div className="space-y-3.5 mt-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-3 bg-slate-200 rounded-md"
                  style={{ width: `${80 - i * 8}%` }}
                />
              ))}
            </div>
          </aside>

          {/* Right Main Text Content Skeleton */}
          <main className="col-span-1 lg:col-span-9 max-w-4xl space-y-12">
            {[...Array(3)].map((_, sectionIdx) => (
              <section key={sectionIdx} className="pb-10 border-b border-slate-100">
                {/* Heading Placeholder */}
                <div className="w-48 h-6 bg-slate-200 rounded-md mb-6" />
                {/* Paragraph Lines Placeholders */}
                <div className="space-y-3">
                  <div className="w-full h-4 bg-slate-200 rounded" />
                  <div className="w-full h-4 bg-slate-200 rounded" />
                  <div className="w-11/12 h-4 bg-slate-200 rounded" />
                  <div className="w-4/5 h-4 bg-slate-200 rounded" />
                </div>
                {/* Optional Box Placeholder */}
                {sectionIdx === 1 && (
                  <div className="mt-6 p-4 rounded-xl border border-slate-100 bg-slate-50/40 h-20" />
                )}
              </section>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
