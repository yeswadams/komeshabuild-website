import React from "react";

export default function ProductLoading() {
  return (
    <div className="w-full bg-white min-h-screen" aria-hidden="true">
      {/* Top loader bar shimmer */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-100 z-50 overflow-hidden">
        <div className="h-full w-1/3 bg-gradient-to-r from-indigo-500 to-indigo-600 animate-shimmer" />
      </div>

      {/* Hero Header Skeleton */}
      <section className="relative pt-20 pb-20 lg:pt-28 lg:pb-24 px-6 lg:px-8 border-b border-slate-100 bg-slate-50/40">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center animate-pulse">
          {/* Pill Placeholder */}
          <div className="w-40 h-6 bg-slate-200 rounded-full mb-8" />
          {/* Main Title Placeholder */}
          <div className="w-full max-w-2xl h-14 bg-slate-200 rounded-lg mb-4" />
          <div className="w-4/5 max-w-xl h-14 bg-slate-200 rounded-lg mb-6" />
          {/* Subtitle Placeholder */}
          <div className="w-full max-w-lg h-4 bg-slate-200 rounded mb-2" />
          <div className="w-2/3 max-w-sm h-4 bg-slate-200 rounded mb-10" />
          {/* CTAs Placeholder */}
          <div className="flex gap-4 mb-16">
            <div className="w-36 h-12 bg-slate-200 rounded-full" />
            <div className="w-36 h-12 bg-slate-200 rounded-full" />
          </div>
          {/* Mockup Dashboard Placeholder */}
          <div className="w-full h-80 bg-slate-200 rounded-2xl" />
        </div>
      </section>

      {/* Sub-Navigation skeleton */}
      <div className="border-b border-slate-200 bg-slate-50/20 py-4 px-6 lg:px-8 animate-pulse">
        <div className="max-w-7xl mx-auto flex gap-6 md:gap-8 justify-start">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-16 h-3 bg-slate-200 rounded" />
          ))}
        </div>
      </div>

      {/* Content Columns Skeleton */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 animate-pulse">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="h-64 bg-slate-100 rounded-3xl" />
          <div className="h-64 bg-slate-100 rounded-3xl" />
        </div>
      </div>
    </div>
  );
}
