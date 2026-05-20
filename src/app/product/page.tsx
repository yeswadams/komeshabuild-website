import React from "react";
import { Metadata } from "next";
import ProductHero from "@/componets/product/ProductHero";
import ProductNavigation from "@/componets/product/ProductNavigation";
import ProblemSolution from "@/componets/product/ProblemSolution";
import FeatureGrid from "@/componets/product/FeatureGrid";
import WorkflowTimeline from "@/componets/product/WorkflowTimeline";
import RoleExperience from "@/componets/product/RoleExperience";
import MobileShowcase from "@/componets/product/MobileShowcase";
import SecurityReliability from "@/componets/product/SecurityReliability";
import FAQAccordion from "@/componets/product/FAQAccordion";
import LegalCTA from "@/componets/legal/LegalCTA";

export const metadata: Metadata = {
  title: "Product Overview",
  description: "Discover KomeshaBuild, the ultimate construction commissioning and QA operating system. Coordinate trades, log concrete slump pours, verify steel rebar, and compile certified occupancy reports.",
  keywords: [
    "construction commissioning software",
    "project management",
    "construction QA QC",
    "field operations",
    "commissioning workflows",
    "building code lookup",
    "concrete slump test",
    "subcontractor coordination",
    "Supabase RLS",
    "Google OAuth login"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Product Overview | KomeshaBuild",
    description: "Discover KomeshaBuild, the ultimate construction commissioning and QA operating system. Coordinate trades, log concrete slump pours, verify steel rebar, and compile certified occupancy reports.",
    url: "https://komeshabuild.com/product",
  },
};

const NAVIGATION_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "problem-solution", label: "Comparison" },
  { id: "features", label: "Features" },
  { id: "workflows", label: "Workflows" },
  { id: "roles", label: "Teams" },
  { id: "mobile-showcase", label: "Mobile Field" },
  { id: "security", label: "Security" },
  { id: "faq", label: "FAQs" }
];

export default function ProductPage() {
  return (
    <>
      {/* 1. Main Hero Panel */}
      <ProductHero />

      {/* 2. Sticky Sub-navigation Bar */}
      <ProductNavigation items={NAVIGATION_ITEMS} />

      {/* 3. Problem Comparison Section */}
      <ProblemSolution />

      {/* 4. Core Capabilities Feature Grid */}
      <FeatureGrid />

      {/* 5. Execution Stage Timeline */}
      <WorkflowTimeline />

      {/* 6. Stakeholder Viewpoints Tab System */}
      <RoleExperience />

      {/* 7. Mobile Device Caching Showcase */}
      <MobileShowcase />

      {/* 8. Supabase & Document Security Grid */}
      <SecurityReliability />

      {/* 9. Interactive Disclosures Accordion */}
      <FAQAccordion />

      {/* 10. Bottom Premium CTA Block */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
        <LegalCTA />
      </div>
    </>
  );
}
