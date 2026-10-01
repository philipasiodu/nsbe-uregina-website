import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ResourceExplorer from "@/components/ResourceExplorer";
import SectionHeading from "@/components/SectionHeading";
import { resources } from "@/data/site";

export const metadata: Metadata = { title: "Resources", description: "Career, academic, scholarship, and wellness resources for NSBE University of Regina members." };

export default function ResourcesPage() {
  return (
    <>
      <PageHero eyebrow="Member resources" title="Tools for the next step." description="Find practical support for classes, applications, interviews, scholarships, internships, and your overall wellbeing." primary={{ label: "Browse resources", href: "#library" }} />
      <section id="library" className="bg-gray-50 py-24 dark:bg-[#0b1712]"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><SectionHeading eyebrow="Resource library" title="Search, filter, and find what you need." description="Resource files and most destination links are placeholders until the chapter approves its final collection." /><span className="w-fit rounded-full bg-amber-50 px-4 py-2 text-xs font-bold text-amber-800 dark:bg-amber-300/10 dark:text-amber-200">7 links/files still needed</span></div><ResourceExplorer resources={resources} /></div></section>
      <section className="bg-white py-20 dark:bg-[#07110d]"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="rounded-3xl bg-[#006B3C] p-9 text-white sm:p-14"><p className="text-xs font-bold uppercase tracking-[0.25em] text-white/50">Share a resource</p><h2 className="mt-5 text-3xl font-black">Know something that should be here?</h2><p className="mt-4 max-w-2xl text-white/65">Send us a scholarship, opportunity, template, or service that would help members.</p><a href="/contact" className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-[#006B3C]">Recommend a resource →</a></div></div></section>
    </>
  );
}
