"use client";

import { useMemo, useState } from "react";
import type { Resource } from "@/data/site";

const categories = ["All", "Career", "Academic", "Scholarships", "Wellness"] as const;

export default function ResourceExplorer({ resources }: { resources: Resource[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");

  const filteredResources = useMemo(() => {
    const normalized = query.toLowerCase().trim();
    return resources.filter((resource) => (category === "All" || resource.category === category) && (!normalized || `${resource.title} ${resource.description}`.toLowerCase().includes(normalized)));
  }, [category, query, resources]);

  return (
    <div>
      <div className="mb-10 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#122019]">
        <label htmlFor="resource-search" className="sr-only">Search resources</label>
        <input id="resource-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search resources…" className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-3.5 text-gray-900 outline-none transition focus:border-[#006B3C] focus:ring-2 focus:ring-[#006B3C]/15 dark:border-white/10 dark:bg-white/5 dark:text-white" />
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((option) => <button key={option} type="button" onClick={() => setCategory(option)} className={`rounded-full px-4 py-2 text-xs font-bold transition-colors ${category === option ? "bg-[#006B3C] text-white" : "bg-gray-100 text-gray-500 hover:text-gray-900 dark:bg-white/5 dark:text-gray-300 dark:hover:text-white"}`}>{option}</button>)}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {filteredResources.map((resource) => (
          <article key={resource.title} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-[#006B3C]/40 hover:shadow-lg dark:border-white/10 dark:bg-[#122019]">
            <div className="flex items-center justify-between gap-4"><span className="text-xs font-bold uppercase tracking-widest text-[#006B3C] dark:text-green-400">{resource.category}</span><span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500 dark:bg-white/5 dark:text-gray-300">{resource.format}</span></div>
            <h3 className="mt-6 text-xl font-black text-gray-950 dark:text-white">{resource.title}</h3>
            <p className="mt-3 flex-1 leading-relaxed text-gray-500 dark:text-gray-300">{resource.description}</p>
            {resource.href ? <a href={resource.href} target="_blank" rel="noreferrer" className="mt-6 font-bold text-[#006B3C] dark:text-green-300">Open resource ↗</a> : <span className="mt-6 text-sm font-bold text-gray-400">Link will be added before launch</span>}
          </article>
        ))}
      </div>
      {filteredResources.length === 0 && <p className="rounded-2xl border border-dashed border-gray-300 p-10 text-center text-gray-500 dark:border-white/15">No resources match your search.</p>}
    </div>
  );
}
