import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { executives } from "@/data/site";

export const metadata: Metadata = { title: "Executive Team", description: "Meet the 13 student leaders serving the NSBE University of Regina chapter." };

export default function ExecutiveTeamPage() {
  return (
    <>
      <PageHero eyebrow="Executive team" title="Thirteen leaders. One chapter." description="Meet the students responsible for chapter strategy, member experience, events, partnerships, communications, and continuity." primary={{ label: "Contact the team", href: "/contact" }} />
      <section className="bg-white py-24 dark:bg-[#07110d]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><SectionHeading eyebrow="2026–27 team" title="Student leadership in action." description="Names, photos, programs, email addresses, and final role titles are ready to be added." /><span className="w-fit rounded-full bg-green-50 px-4 py-2 text-sm font-bold text-[#006B3C] dark:bg-green-400/10 dark:text-green-300">13 positions</span></div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {executives.map((executive, index) => (
              <article key={`${executive.role}-${index}`} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-[#006B3C]/40 hover:shadow-xl dark:border-white/10 dark:bg-[#122019]">
                <div className="relative aspect-[4/3] bg-[#edf6f1] dark:bg-[#102019]"><div className="absolute inset-5 flex items-center justify-center rounded-xl border border-dashed border-[#006B3C]/25"><span className="text-center"><span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#006B3C] text-xl font-black text-white">{String(index + 1).padStart(2, "0")}</span><span className="mt-3 block text-xs font-bold uppercase tracking-widest text-gray-400">Headshot needed</span></span></div></div>
                <div className="p-6"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#006B3C] dark:text-green-400">{executive.role}</p><h2 className="mt-3 text-xl font-black text-gray-950 dark:text-white">{executive.name}</h2><p className="mt-2 text-sm text-gray-500 dark:text-gray-300">{executive.program}</p><p className="mt-5 border-t border-gray-100 pt-4 text-sm text-gray-400 dark:border-white/10">{executive.email}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#006B3C] py-20 text-white"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8"><div><p className="text-xs font-bold uppercase tracking-[0.25em] text-white/50">Get involved</p><h2 className="mt-4 text-3xl font-black">Interested in future leadership?</h2><p className="mt-3 max-w-2xl text-white/65">Ask about committees, volunteer roles, and the next executive application period.</p></div><Link href="/contact" className="w-fit rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#006B3C]">Express interest →</Link></div></section>
    </>
  );
}
