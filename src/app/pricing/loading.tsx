import React from "react";

export default function PricingLoading(){
  return (
    <div className="w-full min-h-screen bg-white" aria-hidden="true">
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-200 z-50 overflow-hidden">
        <div className="h-full w-1/3 bg-gradient-to-r from-indigo-500 to-indigo-600 animate-shimmer" />
      </div>

      {/* Hero skeleton */}
      <section className="pt-20 pb-20 lg:pt-28 lg:pb-24 px-6 lg:px-8 border-b border-slate-100 bg-slate-50/40 animate-pulse">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="w-40 h-6 bg-slate-200 rounded-full mb-8" />
          <div className="w-3/4 h-10 bg-slate-200 rounded-lg mb-4" />
          <div className="w-2/3 h-8 bg-slate-200 rounded-lg mb-6" />
          <div className="flex gap-4 mb-12">
            <div className="w-32 h-10 bg-slate-200 rounded-full" />
            <div className="w-32 h-10 bg-slate-200 rounded-full" />
          </div>
          <div className="w-full h-64 bg-slate-200 rounded-2xl" />
        </div>
      </section>

      {/* ROI skeleton */}
      <section className="py-20 lg:py-28 px-6 lg:px-8 bg-white animate-pulse">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[...Array(4)].map((_,i)=>(
            <div key={i} className="bg-slate-200 h-48 rounded-xl" />
          ))}
        </div>
      </section>

      {/* Table skeleton */}
      <section className="py-20 lg:py-28 px-6 lg:px-8 bg-slate-50/50 animate-pulse">
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <div className="w-[800px] h-64 bg-slate-200 rounded-xl" />
        </div>
      </section>
    </div>
  );
}
