"use client";

import { useMemo, useState } from "react";
import type { ChapterEvent } from "@/data/site";

const categories = ["All", "Community", "Career", "Academic", "Networking"] as const;

export default function EventExplorer({ events }: { events: ChapterEvent[] }) {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [status, setStatus] = useState<"Upcoming" | "Past">("Upcoming");

  const filteredEvents = useMemo(
    () => events.filter((event) => event.status === status && (category === "All" || event.category === category)),
    [category, events, status],
  );

  return (
    <div>
      <div className="mb-10 flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:bg-[#122019]">
        <div className="flex rounded-full bg-gray-100 p-1 dark:bg-white/5">
          {(["Upcoming", "Past"] as const).map((option) => (
            <button key={option} type="button" onClick={() => setStatus(option)} className={`rounded-full px-5 py-2 text-sm font-bold transition-colors ${status === option ? "bg-[#006B3C] text-white" : "text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"}`}>{option}</button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2" aria-label="Filter events by category">
          {categories.map((option) => (
            <button key={option} type="button" onClick={() => setCategory(option)} className={`rounded-full border px-4 py-2 text-xs font-bold transition-colors ${category === option ? "border-[#006B3C] bg-green-50 text-[#006B3C] dark:bg-green-400/10 dark:text-green-300" : "border-gray-200 text-gray-500 hover:border-[#006B3C]/40 dark:border-white/10 dark:text-gray-300"}`}>{option}</button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {filteredEvents.map((event) => (
          <article key={event.id} className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-[#006B3C]/40 hover:shadow-xl dark:border-white/10 dark:bg-[#122019]">
            <div className="flex items-start justify-between gap-4">
              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-[#006B3C] dark:bg-green-400/10 dark:text-green-300">{event.category}</span>
              <time dateTime={event.date} className="text-right text-xs font-bold uppercase tracking-wider text-gray-400">{event.displayDate}</time>
            </div>
            <h3 className="mt-7 text-2xl font-black tracking-tight text-gray-950 group-hover:text-[#006B3C] dark:text-white dark:group-hover:text-green-300">{event.title}</h3>
            <p className="mt-4 flex-1 leading-relaxed text-gray-500 dark:text-gray-300">{event.description}</p>
            <dl className="mt-7 grid grid-cols-2 gap-4 border-t border-gray-100 pt-5 text-sm dark:border-white/10">
              <div><dt className="text-xs uppercase tracking-widest text-gray-400">Time</dt><dd className="mt-1 font-bold text-gray-800 dark:text-white">{event.time}</dd></div>
              <div><dt className="text-xs uppercase tracking-widest text-gray-400">Location</dt><dd className="mt-1 font-bold text-gray-800 dark:text-white">{event.location}</dd></div>
            </dl>
            {status === "Upcoming" && (
              <div className="mt-6">
                {event.registrationUrl ? <a href={event.registrationUrl} target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-[#006B3C] px-5 py-2.5 text-sm font-bold text-white">Register ↗</a> : <span className="inline-flex rounded-full border border-dashed border-gray-300 px-5 py-2.5 text-sm font-bold text-gray-400 dark:border-white/15">Registration link coming soon</span>}
              </div>
            )}
          </article>
        ))}
      </div>
      {filteredEvents.length === 0 && <p className="rounded-2xl border border-dashed border-gray-300 p-10 text-center text-gray-500 dark:border-white/15 dark:text-gray-300">No events match those filters yet.</p>}
    </div>
  );
}
