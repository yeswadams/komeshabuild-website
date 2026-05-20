import React from "react";
import { Metadata } from "next";
import ReadingProgress from "@/componets/legal/ReadingProgress";
import LegalHero from "@/componets/legal/LegalHero";
import LegalSidebar from "@/componets/legal/LegalSidebar";
import LegalSection from "@/componets/legal/LegalSection";
import LegalCTA from "@/componets/legal/LegalCTA";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read KomeshaBuild's Privacy Policy to understand how we collect, store, and safeguard your construction project logs, Google OAuth credentials, and Supabase security details.",
  keywords: ["KomeshaBuild privacy", "data protection Kenya", "construction data security", "Google OAuth privacy", "Supabase storage security"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "article",
    title: "Privacy Policy | KomeshaBuild",
    description: "Read KomeshaBuild's Privacy Policy to understand how we collect, store, and safeguard your construction project logs, Google OAuth credentials, and Supabase security details.",
    url: "https://komeshabuild.com/privacy-policy",
  },
};

const SECTIONS = [
  { id: "introduction", title: "1. Introduction & Scope" },
  { id: "information-we-collect", title: "2. Information We Collect" },
  { id: "how-we-use-information", title: "3. How We Use Your Information" },
  { id: "data-storage-security", title: "4. Data Storage & Access Control" },
  { id: "offline-synchronization", title: "5. Offline Field & On-Device Storage" },
  { id: "data-sharing-integrations", title: "6. Third-Party Services & OAuth" },
  { id: "data-retention-deletion", title: "7. Data Retention & Account Deletion" },
  { id: "your-rights", title: "8. Your Legal Rights & Controls" },
  { id: "governing-law", title: "9. Governing Law & Compliance" },
  { id: "contact-us", title: "10. Contact Information" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <ReadingProgress />
      <LegalHero
        title="Privacy Policy"
        description="We are committed to securing your construction project records, identity details, and structural compliance logs. Read below to understand our robust privacy systems."
        lastUpdated="May 20, 2026"
        category="Legal & Compliance"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Table of Contents Sidebar */}
          <LegalSidebar sections={SECTIONS} />

          {/* Legal Document Content */}
          <main className="col-span-1 lg:col-span-9 max-w-4xl" aria-label="Privacy Policy content">
            
            <LegalSection id="introduction" title="1. Introduction & Scope">
              <p>
                Welcome to KomeshaBuild (referred to as <strong>"KomeshaBuild"</strong>, <strong>"we"</strong>, <strong>"us"</strong>, or <strong>"our"</strong>). We operate a premium collaborative quality assurance (QA), standards directory, and commissioning (Cx) workspace accessible via web and mobile platforms. 
              </p>
              <p>
                This Privacy Policy describes how we collect, use, store, and secure your personal information, user profiles, and construction project files when you access our platforms. By creating a KomeshaBuild account, syncing field records, or uploading architectural plans, you consent to the data collection and processing methods outlined in this Policy.
              </p>
            </LegalSection>

            <LegalSection 
              id="information-we-collect" 
              title="2. Information We Collect"
              callout={{
                type: "info",
                title: "Google OAuth Protocol",
                content: "When logging in via Google, we only extract account identifiers, profile pictures, and verified email addresses. We never request access to your personal Google Drive or calendar items."
              }}
            >
              <p>
                To provide standard-compliant inspection reporting and real-time on-site verification tools, we collect several categories of information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Identity & Account Details:</strong> Name, professional title, corporate affiliation, verified email address, phone number, and account access credentials.
                </li>
                <li>
                  <strong>Google OAuth Profile Data:</strong> If you select our single-sign-on service using Google OAuth, we capture your unique Google identifier, public avatar image, and verified email address to provision your profile securely.
                </li>
                <li>
                  <strong>Construction Site & Project Logs:</strong> Blueprints, structural plans, photographic records of site conditions, QA checklist responses, concrete slump logs, structural steel inspection items, safety logs, team assignments, and compliance ratings.
                </li>
                <li>
                  <strong>Device & Connection Information:</strong> IP addresses, browser version, operating system, unique device identifiers, network connection states, and local device clock coordinates (essential for sorting chronological field audits).
                </li>
              </ul>
            </LegalSection>

            <LegalSection id="how-we-use-information" title="3. How We Use Your Information">
              <p>
                We use the collected data strictly to maintain, evaluate, and optimize the KomeshaBuild platform. Specifically, we process your information to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Set up, authenticate, and manage your account credentials using safe authorization layers.
                </li>
                <li>
                  Establish and track project structures, including logging cement tests, rebar specs, and wall plumb tolerances linked directly to your active supervisor profile.
                </li>
                <li>
                  Generate professional, branded PDF inspection reports for city council review or structural engineers’ occupancy certificates.
                </li>
                <li>
                  Facilitate live team collaboration, allowing developers to assign localized quality issues to specific subcontractors, accompanied by visual photos and coordinate markers.
                </li>
                <li>
                  Power our semantic AI Building Code Search, matching plain-text queries against regional construction standards to return verified guidelines.
                </li>
              </ul>
            </LegalSection>

            <LegalSection 
              id="data-storage-security" 
              title="4. Data Storage & Access Control"
              callout={{
                type: "success",
                title: "Supabase & Cloud Security",
                content: "Your passwords, session keys, and authentication schemas are hosted entirely in secure Supabase vaults. Project documents are locked under strict Row-Level Security (RLS) policies."
              }}
            >
              <p>
                We leverage premium, distributed cloud environments to manage and store your construction data:
              </p>
              <p>
                <strong>Authentication and Identity:</strong> All session keys, password hashes, web tokens, and security credentials are managed securely by <strong>Supabase Auth</strong>. Passwords are encrypted before transit and are never viewable by KomeshaBuild personnel.
              </p>
              <p>
                <strong>Cloud Storage and RLS:</strong> Blueprints, photographs, drawings, concrete test charts, and structural sheets are stored in secure cloud objects. We implement strict <strong>Row-Level Security (RLS)</strong> so that only authenticated members of your specific workspace or approved trade subcontractors have access to read or update project records.
              </p>
            </LegalSection>

            <LegalSection id="offline-synchronization" title="5. Offline Field & On-Device Storage">
              <p>
                Construction sites are often located in remote areas or deep basement structures where network signals are weak or non-existent. To ensure seamless operation, the KomeshaBuild application utilizes offline browser and device caching:
              </p>
              <p>
                <strong>Local Indexing:</strong> When field supervisors log issues, structural steel alignment specs, or concrete slump details, the data is saved locally on the user's browser storage or mobile storage layer.
              </p>
              <p>
                <strong>Secure Cloud Sync:</strong> The locally stored inspections, photographs, and records are queued internally. The moment a mobile device or tablet detects a stable cellular or Wi-Fi network, KomeshaBuild securely uploads and syncs the records to the main cloud databases.
              </p>
            </LegalSection>

            <LegalSection id="data-sharing-integrations" title="6. Third-Party Services & OAuth">
              <p>
                We do not sell, trade, or rent your personal profile information or project logs to advertising networks or external data brokers. We share data only with trusted infrastructure providers required to operate the platform:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Supabase (Authentication & Database):</strong> For storing core data records under secure databases and routing platform events.
                </li>
                <li>
                  <strong>Google (OAuth Service):</strong> Solely to facilitate secure single-sign-on verification.
                </li>
                <li>
                  <strong>Vector Indices & AI Services:</strong> To process semantic questions posed to our AI Building Code assistant. No proprietary blueprint drawings or project quality scores are used to train general foundation models.
                </li>
              </ul>
            </LegalSection>

            <LegalSection 
              id="data-retention-deletion" 
              title="7. Data Retention & Account Deletion"
              callout={{
                type: "danger",
                title: "Permanent Account Deletion",
                content: "Once an account deletion is initiated, your user details, photos, and logged records are completely deleted from our production servers within 30 days."
              }}
            >
              <p>
                We store your data as long as your workspace account remains active or as needed to provide platform services. You retain complete control over your historical records:
              </p>
              <p>
                <strong>Workspace Deletion:</strong> Workspace administrators may request the deletion of individual project files, blueprints, safety logs, or full project folders at any time.
              </p>
              <p>
                <strong>Account Deletion:</strong> You can submit a deletion request through your account settings portal or directly to our support channel. Upon verification, we will delete your Supabase profile information, uploaded construction files, and field reports from our active databases within thirty (30) days.
              </p>
            </LegalSection>

            <LegalSection id="your-rights" title="8. Your Legal Rights & Controls">
              <p>
                We provide all users, site supervisors, and administrators with robust tools to access, export, and modify their stored details:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Access & Export:</strong> You can download comprehensive summaries of your logged slump tests, rebar reports, and QA inspection outcomes in standard CSV or PDF structures.
                </li>
                <li>
                  <strong>Correction:</strong> You can edit profile names, assigned trade organizations, and user contact settings instantly.
                </li>
                <li>
                  <strong>Communication Limits:</strong> You can opt-out of secondary newsletter notifications or construction insights, though critical safety alerts and password reset notifications will remain active.
                </li>
              </ul>
            </LegalSection>

            <LegalSection id="governing-law" title="9. Governing Law & Compliance">
              <p>
                KomeshaBuild operations are governed in strict accordance with the laws of the <strong>Republic of Kenya</strong>. 
              </p>
              <p>
                We align our data handling processes with the provisions of the <strong>Kenya Data Protection Act, 2019</strong>. In compliance with the Office of the Data Protection Commissioner (ODPC), we ensure that your personal data is collected for explicit, specified purposes, handled with appropriate technical safeguards, and stored with maximum integrity.
              </p>
            </LegalSection>

            <LegalSection id="contact-us" title="10. Contact Information">
              <p>
                If you have questions, regulatory feedback, or data protection inquiries regarding this Privacy Policy, or if you wish to exercise your data deletion rights, please contact our official team:
              </p>
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 mt-4 font-light text-slate-700">
                <p className="font-bold text-slate-900 mb-1">KomeshaBuild Support Team</p>
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
