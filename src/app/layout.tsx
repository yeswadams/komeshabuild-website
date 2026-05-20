import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/componets/layouts/Navbar";
import Footer from "@/componets/layouts/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://komeshabuild.com"),
  title: {
    default: "KomeshaBuild | Construction QA & Compliance Platform",
    template: "%s | KomeshaBuild",
  },
  description: "Eliminate structural re-work, automate building code compliance, and coordinate field teams instantly with the modern digital workspace built for developers and general contractors.",
  keywords: ["construction QA", "building compliance", "field inspection logs", "slump tests", "structural auditing", "Kenya building codes", "commissioning software"],
  authors: [{ name: "KomeshaBuild Team" }],
  creator: "KomeshaBuild",
  publisher: "KomeshaBuild",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://komeshabuild.com",
    title: "KomeshaBuild | Construction QA & Compliance Platform",
    description: "Eliminate structural re-work, automate building code compliance, and coordinate field teams with the modern digital workspace built for developers and general contractors.",
    siteName: "KomeshaBuild",
  },
  twitter: {
    card: "summary_large_image",
    title: "KomeshaBuild | Construction QA & Compliance Platform",
    description: "Eliminate structural re-work, automate building code compliance, and coordinate field teams with the modern digital workspace built for developers and general contractors.",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
