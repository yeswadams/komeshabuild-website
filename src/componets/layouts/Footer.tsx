"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  { name: "Status", href: "#" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "#" },
  { name: "Help Docs", href: "#" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
];

const features = [
  { name: "QA Inspections", href: "#" },
  { name: "Issue Tracking", href: "#" },
  { name: "Standards Directory", href: "#" },
  { name: "Progress Reports", href: "#" },
  { name: "Team Collaboration", href: "#" },
];

const account = [
  { name: "Login", href: "/login" },
  { name: "Sign Up", href: "/signup" },
  { name: "Reset Password", href: "#" },
  { name: "Support", href: "#" },
];

const socials = [
  {
    name: "Discord",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-slate-50 text-slate-600 relative overflow-hidden py-16 lg:py-20 border-t border-slate-200/70">
      {/* Sleek top divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      {/* Subtle soft-indigo lighting effect for modern look */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/[0.03] via-transparent to-transparent blur-[60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <Image
                src="/logos/kb_logo.svg"
                alt="KomeshaBuild Logo"
                width={32}
                height={32}
                className="cursor-pointer transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-semibold text-xl tracking-tight text-slate-900 transition-colors duration-300">
                KomeshaBuild
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-6">
              A modern collaborative platform for quality assurance and standards in construction. Perfect for builders, developers, and project teams to build right the first time.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-slate-400 hover:text-slate-700 transition-colors duration-200 p-1.5 hover:bg-slate-200/60 rounded-lg"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2">
            <h3 className="text-slate-900 font-bold text-sm tracking-wide mb-5">Services</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-500 hover:text-[#533BEE] text-sm transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Features Column */}
          <div className="lg:col-span-2">
            <h3 className="text-slate-900 font-bold text-sm tracking-wide mb-5">Features</h3>
            <ul className="space-y-3">
              {features.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-500 hover:text-[#533BEE] text-sm transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account Column */}
          <div className="lg:col-span-2">
            <h3 className="text-slate-900 font-bold text-sm tracking-wide mb-5">Account</h3>
            <ul className="space-y-3">
              {account.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-500 hover:text-[#533BEE] text-sm transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay in Touch Column */}
          <div className="lg:col-span-2 flex flex-col">
            <h3 className="text-slate-900 font-bold text-sm tracking-wide mb-5">Stay in Touch</h3>
            <p className="text-slate-500 text-sm mb-4 leading-normal">
              Subscribe now for exclusive insights and offers!
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white border border-slate-200 rounded-full px-4 py-2.5 text-sm text-slate-950 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#533BEE] hover:bg-[#533BEE]/95 text-white font-medium py-2.5 px-4 rounded-full text-sm transition-all shadow-md shadow-indigo-500/10 cursor-pointer text-center"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="mt-16 pt-8 border-t border-slate-200/60 w-full flex justify-center items-center">
          <p className="text-slate-400 text-xs text-center">
            &copy; 2026 KomeshaBuild - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
