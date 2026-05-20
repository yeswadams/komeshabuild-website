import React from "react";
import PricingHeroAndCards from "@/componets/pricing/PricingHeroAndCards";
import PricingROI from "@/componets/pricing/PricingROI";
import FeatureComparison from "@/componets/pricing/FeatureComparison";
import FAQAccordion from "@/componets/pricing/FAQAccordion";

export const metadata = {
  title: "KomeshaBuild Pricing – Transparent Plans for Construction Teams",
  description: "Clear, enterprise‑grade pricing for construction commissioning software. Choose Starter, Professional, or Enterprise plans with flexible billing and robust feature sets.",
  keywords: [
    "construction commissioning software pricing",
    "project management pricing",
    "construction workflow platform",
    "enterprise SaaS pricing",
    "KomeshaBuild pricing",
  ],
  openGraph: {
    title: "KomeshaBuild Pricing",
    description: "Transparent, scalable pricing for construction commissioning teams.",
    url: "https://app.komeshabuild.xyz/pricing",
    images: [{ url: "/og/pricing.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KomeshaBuild Pricing",
    description: "Transparent, scalable pricing for construction commissioning teams.",
    images: "/og/pricing.jpg",
  },
};

export default async function PricingPage() {
  return (
    <main className="flex flex-col gap-16 bg-slate-50 text-slate-950">
      <PricingHeroAndCards />
      <PricingROI />
      <FeatureComparison />
      <FAQAccordion />
    </main>
  );
}
