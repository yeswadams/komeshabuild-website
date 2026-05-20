"use client";

import React, { useEffect, useState } from "react";

interface NavigationItem {
  id: string;
  label: string;
}

interface ProductNavigationProps {
  items: NavigationItem[];
}

export default function ProductNavigation({ items }: ProductNavigationProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-120px 0px -60% 0px", // Align offset with sticky headers
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

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      items.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [items]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const offset = 130; // height of primary navbar + sticky product sub-navbar + buffer
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });

    setActiveId(id);
  };

  return (
    <nav 
      className="sticky top-[72px] z-[900] w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md shadow-sm print:hidden"
      aria-label="Product sections"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-start overflow-x-auto scrollbar-none py-3.5 gap-6 md:gap-8">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleScrollTo(e, item.id)}
                className={`text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-200 relative pb-1 border-b-2 hover:text-black ${
                  isActive
                    ? "text-[#533BEE] border-[#533BEE]"
                    : "text-slate-500 border-transparent hover:border-slate-300"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
