"use client";

import React, { useEffect, useState } from "react";
import { List, ChevronUp, Menu, X } from "lucide-react";

interface Section {
  id: string;
  title: string;
}

interface LegalSidebarProps {
  sections: Section[];
}

export default function LegalSidebar({ sections }: LegalSidebarProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // IntersectionObserver to sync scroll position with TOC active state
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when heading is near top/middle
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe each section element
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [sections]);

  // Smooth scroll handler that respects reduced motion settings
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const offset = 90; // account for sticky header
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });

    setIsMobileMenuOpen(false);
    setActiveId(id);
  };

  return (
    <>
      {/* Desktop Sticky Table of Contents */}
      <aside className="hidden lg:block lg:col-span-3 h-fit sticky top-28 self-start border border-slate-200/80 bg-slate-50/50 p-6 rounded-2xl backdrop-blur-md shadow-sm print:hidden">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200/80">
          <List className="w-4 h-4 text-[#533BEE]" />
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800">
            Table of Contents
          </h2>
        </div>
        <nav aria-label="Table of contents">
          <ul className="space-y-2.5">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => handleScrollTo(e, section.id)}
                    className={`block text-[13px] leading-relaxed transition-all duration-200 pl-3 border-l-2 py-0.5 hover:text-[#533BEE] hover:border-[#533BEE]/40 ${
                      isActive
                        ? "text-[#533BEE] border-[#533BEE] font-semibold bg-indigo-50/40 rounded-r-md"
                        : "text-slate-500 border-transparent font-light"
                    }`}
                  >
                    {section.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Mobile Floating TOC Menu Button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-[9000] print:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-12 h-12 bg-[#533BEE] text-white rounded-full shadow-lg shadow-indigo-500/20 hover:scale-105 active:scale-95 transition-all duration-250 cursor-pointer"
          aria-haspopup="true"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle legal table of contents"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Sliding TOC Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[8999] print:hidden">
          {/* Backdrop Overlay */}
          <div
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Drawer Panel */}
          <div className="absolute right-0 bottom-0 left-0 max-h-[80vh] bg-white rounded-t-3xl p-6 shadow-2xl overflow-y-auto flex flex-col gap-4 animate-slideUp border-t border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                <List className="w-4 h-4 text-[#533BEE]" /> Table of Contents
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 hover:bg-slate-100 rounded-full cursor-pointer text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex-1">
              <ul className="space-y-3">
                {sections.map((section) => {
                  const isActive = activeId === section.id;
                  return (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        onClick={(e) => handleScrollTo(e, section.id)}
                        className={`block text-sm py-2 px-3 rounded-xl transition-all duration-150 ${
                          isActive
                            ? "bg-indigo-50 text-[#533BEE] font-semibold border-l-4 border-[#533BEE]"
                            : "text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {section.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsMobileMenuOpen(false);
              }}
              className="mt-2 w-full bg-slate-50 text-slate-700 text-xs font-semibold py-2.5 rounded-full border border-slate-200 hover:bg-slate-100 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <ChevronUp className="w-3.5 h-3.5" /> Back to Top
            </button>
          </div>
        </div>
      )}
    </>
  );
}
