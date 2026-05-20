import React from "react";
import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="bg-slate-50 py-20 text-center">
      <h1 className="text-4xl font-bold text-slate-950 mb-4">
        Talk with the KomeshaBuild Team
      </h1>
      <p className="text-lg text-slate-700 max-w-2xl mx-auto mb-8">
        Expert guidance for demos, onboarding, enterprise deployments, partnerships, and support.
      </p>
      <Link
        href="/contact#form"
        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded shadow-md transition"
      >
        Get in Touch
      </Link>
    </section>
  );
}
