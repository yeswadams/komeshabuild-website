import React from "react";
import { Metadata } from "next";
import ReadingProgress from "@/componets/legal/ReadingProgress";
import LegalHero from "@/componets/legal/LegalHero";
import LegalSidebar from "@/componets/legal/LegalSidebar";
import LegalSection from "@/componets/legal/LegalSection";
import LegalCTA from "@/componets/legal/LegalCTA";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Review the official Terms of Service for KomeshaBuild, outlining account structures, intellectual property, Kenya governing law, and structural engineering disclaimers.",
  keywords: ["KomeshaBuild terms", "construction SaaS terms", "Kenya legal dispute terms", "builder software disclaimer"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "article",
    title: "Terms of Service | KomeshaBuild",
    description: "Review the official Terms of Service for KomeshaBuild, outlining account structures, intellectual property, Kenya governing law, and structural engineering disclaimers.",
    url: "https://komeshabuild.com/terms-of-service",
  },
};

const SECTIONS = [
  { id: "acceptance-of-terms", title: "1. Acceptance of Terms" },
  { id: "account-registration", title: "2. Registration & Supabase Security" },
  { id: "acceptable-use-policies", title: "3. Acceptable Use & Field Logs" },
  { id: "subscription-billing", title: "4. Subscription Tiers & Billing" },
  { id: "intellectual-property", title: "5. Intellectual Property Rights" },
  { id: "ai-assistant-disclaimer", title: "6. AI Code Search & Disclaimers" },
  { id: "termination", title: "7. Suspension & Account Termination" },
  { id: "warranties-liability", title: "8. Limitation of Liability" },
  { id: "governing-law-disputes", title: "9. Governing Law & Dispute Handling" },
  { id: "updates-contact", title: "10. Modifications & Contact Info" },
];

export default function TermsOfServicePage() {
  return (
    <>
      <ReadingProgress />
      <LegalHero
        title="Terms of Service"
        description="By logging concrete logs, pinning QA checkpoints, or running reports on KomeshaBuild, you agree to these enterprise terms of service. Please read them carefully."
        lastUpdated="May 20, 2026"
        category="Legal & Terms"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Table of Contents Sidebar */}
          <LegalSidebar sections={SECTIONS} />

          {/* Legal Document Content */}
          <main className="col-span-1 lg:col-span-9 max-w-4xl" aria-label="Terms of Service content">
            
            <LegalSection id="acceptance-of-terms" title="1. Acceptance of Terms">
              <p>
                These Terms of Service (referred to as <strong>"Terms"</strong> or this <strong>"Agreement"</strong>) constitute a legally binding agreement between KomeshaBuild (referred to as <strong>"KomeshaBuild"</strong>, <strong>"we"</strong>, <strong>"us"</strong>, or <strong>"our"</strong>) and you, whether personally or on behalf of an entity (referred to as <strong>"User"</strong>, <strong>"you"</strong>, or <strong>"your"</strong>), concerning your access to and use of our quality assurance, building standards, and commissioning (Cx) web applications and mobile field systems.
              </p>
              <p>
                By registering an account, integrating third-party single-sign-on (SSO), creating quality checklists, or generating inspection documents, you acknowledge that you have read, understood, and agreed to be bound by all of these Terms. If you do not agree with all of these Terms, you are prohibited from using the platform, and you must terminate your usage immediately.
              </p>
            </LegalSection>

            <LegalSection id="account-registration" title="2. Registration & Supabase Security">
              <p>
                To access KomeshaBuild’s dynamic dashboard, blueprint overlay features, and report pipelines, you must create a user account. You agree to provide accurate, current, and complete profile information during the enrollment process.
              </p>
              <p>
                <strong>Supabase Authentication Framework:</strong> User sign-up, credential hashing, and operational session handling are processed securely using <strong>Supabase</strong>. You are solely responsible for maintaining the confidentiality of your session keys and profile passwords. Any activity that occurs under your profile is your legal responsibility. You must notify us immediately of any unauthorized breach of security or compromise of your access credentials.
              </p>
            </LegalSection>

            <LegalSection 
              id="acceptable-use-policies" 
              title="3. Acceptable Use & Field Logs"
              callout={{
                type: "warning",
                title: "Log Integrity Obligation",
                content: "All concrete slump records, structural rebar observations, and safety items logged on this platform must reflect actual field findings. Fabricating safety approvals or filing fraudulent compliance reports is strictly prohibited."
              }}
            >
              <p>
                KomeshaBuild is designed for real-world builders, structural QA teams, commissioning managers, and municipal regulators. In using the platform, you agree that you will not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Submit fraudulent on-site logs, mock concrete test outcomes, false slump results, or fabricated inspector approvals.
                </li>
                <li>
                  Upload structural drawings or blueprint files that violate the copyright, patent, or trademark protections of any external architect, firm, or developer.
                </li>
                <li>
                  Use our vector indexing endpoints to scrape, harvest, or bulk-download national or regional building codes for use in commercial competitors.
                </li>
                <li>
                  Introduce malware, virus containers, or custom exploits to disrupt the database systems or API interceptors hosted on our platform.
                </li>
              </ul>
            </LegalSection>

            <LegalSection id="subscription-billing" title="4. Subscription Tiers & Billing">
              <p>
                KomeshaBuild provides modular access matching your construction organization's scope. We establish four general service tiers:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Starter:</strong> Designed for individual inspectors or small residential sites, supporting 1 active project under standard tools.
                </li>
                <li>
                  <strong>Professional:</strong> Built for commercial builders, supporting up to 5 projects and featuring branded report exports and custom issue triggers.
                </li>
                <li>
                  <strong>Enterprise:</strong> Supporting unlimited projects, advanced CAD overlay alignments, and external review portals.
                </li>
                <li>
                  <strong>Custom Audit:</strong> Tailored offline hardware sync structures, on-site personnel training, and custom API pipes.
                </li>
              </ul>
              <p>
                <strong>Future-Ready Posture:</strong> You acknowledge that while KomeshaBuild lists these subscription models, active automated paid payment gateway billing structures are currently configured as pre-release structures. We reserve the right to deploy paid subscription gate restrictions, payment billing integrations, and pricing updates in the future, subject to direct notification to your registered email address thirty (30) days in advance.
              </p>
            </LegalSection>

            <LegalSection id="intellectual-property" title="5. Intellectual Property Rights">
              <p>
                We highly respect creative property and structure a clear division of rights:
              </p>
              <p>
                <strong>User Proprietary Assets:</strong> You retain complete and exclusive ownership of all blueprints, project coordinates, structural photos, concrete test outputs, custom checklists, team chat logs, and quality scores uploaded to your workspace. KomeshaBuild claims no license or ownership over your corporate building assets.
              </p>
              <p>
                <strong>KomeshaBuild System Assets:</strong> We retain all right, title, and interest in and to KomeshaBuild, including the trademark names, design layouts, custom color schemes, styling structures, database schemas, compiled codebase, vector indices trained on building codes, and generated PDF report formatting. You are prohibited from copying, reverse-engineering, or white-labeling our systems without our prior written consent.
              </p>
            </LegalSection>

            <LegalSection 
              id="ai-assistant-disclaimer" 
              title="6. AI Code Search & Disclaimers"
              callout={{
                type: "danger",
                title: "Professional Engineering Warning",
                content: "Our AI Code Search is an auxiliary search tool. It does NOT constitute licensed engineering calculations. All structural layouts must be inspected and certified by a registered structural engineer in Kenya."
              }}
            >
              <p>
                KomeshaBuild incorporates specialized semantic search modules to query building codes (e.g., standard compressive strength limits or rebar layout regulations):
              </p>
              <p>
                <strong>Educational Scope Only:</strong> The AI Building Code Matcher extracts references to regional construction guidelines for convenience. KomeshaBuild does not guarantee the complete alignment of AI search results with live regulatory codes.
              </p>
              <p>
                <strong>No Engineering Licensure:</strong> The platform does not perform structural calculations, determine foundation load allocations, or replace the expertise of certified structural engineers, safety inspectors, or municipal planning officers. You are legally obligated to obtain signatures from registered professional engineers before pouring concrete foundation layers or declaring occupancy readiness.
              </p>
            </LegalSection>

            <LegalSection id="termination" title="7. Suspension & Account Termination">
              <p>
                We reserve the right to suspend, restrict, or completely terminate your KomeshaBuild workspace and account access, without notice or liability, if we determine that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  You have breached any provision of these Terms or logged fraudulent safety files.
                </li>
                <li>
                  Your project accounts show malicious network activities or API scraping efforts that threaten the core data arrays of other customers.
                </li>
                <li>
                  You fail to verify your identity or Google OAuth profiles upon reasonable request.
                </li>
              </ul>
              <p>
                Upon account termination, your right to use the platform immediately ceases. You may request access to export your logged field records within fourteen (14) days of suspension, subject to administrative approval.
              </p>
            </LegalSection>

            <LegalSection id="warranties-liability" title="8. Limitation of Liability">
              <p>
                KomeshaBuild is provided on an "AS IS" and "AS AVAILABLE" basis. To the maximum extent permitted under applicable law, KomeshaBuild disclaims all warranties, express or implied, including the implied warranties of merchantability, fitness for a particular construction purpose, and non-infringement.
              </p>
              <p>
                Under no circumstances shall KomeshaBuild, its directors, employees, or tech partners be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, project delays, structural failures, foundation collapse, subcontractor disputes, regulatory fines from building inspectors, or data corruption resulting from your use of the platform.
              </p>
            </LegalSection>

            <LegalSection id="governing-law-disputes" title="9. Governing Law & Dispute Handling">
              <p>
                This Agreement and your use of KomeshaBuild shall be governed by, interpreted, and enforced in accordance with the laws of the <strong>Republic of Kenya</strong>, without giving effect to conflict of law rules.
              </p>
              <p>
                <strong>Amicable Settlement:</strong> In the event of a dispute, controversy, or claim arising out of this Agreement, the parties shall first attempt to resolve the issue through friendly, direct consultation within thirty (30) days.
              </p>
              <p>
                <strong>Arbitration Framework:</strong> Any dispute that cannot be resolved amicably shall be referred to and finally settled by arbitration in Nairobi, Kenya, in accordance with the provisions of the <strong>Arbitration Act (Cap. 49) of the laws of Kenya</strong>. The arbitration proceedings shall be conducted in English by a single arbitrator appointed by agreement of both parties.
              </p>
            </LegalSection>

            <LegalSection id="updates-contact" title="10. Modifications & Contact Info">
              <p>
                We reserve the right to update or modify these Terms at any time. When modifications are published, we will update the "Last Updated" timestamp at the top of this document. Continued use of KomeshaBuild following modifications constitutes your acceptance of the updated terms.
              </p>
              <p>
                If you have questions, dispute notices, or administrative inquiries regarding these Terms of Service, please contact our support channel:
              </p>
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 mt-4 font-light text-slate-700">
                <p className="font-bold text-slate-900 mb-1">KomeshaBuild Legal Department</p>
                <p>Email: <a href="mailto:support@komeshabuild.com" className="text-[#533BEE] font-medium hover:underline">support@komeshabuild.com</a></p>
                <p>Nairobi, Kenya</p>
              </div>
            </LegalSection>

            {/* Bottom Call to Action and Signature */}
            <LegalCTA />

          </main>
        </div>
      </div>
    </>
  );
}
