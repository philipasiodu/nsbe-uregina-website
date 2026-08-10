import type { Metadata } from "next";
import EventExplorer from "@/components/EventExplorer";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { chapterEvents } from "@/data/site";

export const metadata: Metadata = { title: "Events", description: "Explore upcoming NSBE University of Regina events, workshops, and community programs." };

export default function EventsPage() {
  return (
    <>
      <PageHero eyebrow="Events & programming" title="Learn together. Connect in person." description="Explore professional development, academic support, networking, and community experiences created for our members." primary={{ label: "Join the chapter", href: "/membership" }} />
      <section className="bg-gray-50 py-24 dark:bg-[#0b1712]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><SectionHeading eyebrow="Calendar" title="What’s happening." description="Filter the schedule by status or event type. Dates without confirmed details are marked clearly." /><span className="w-fit rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-bold text-amber-800 dark:border-amber-300/20 dark:bg-amber-300/10 dark:text-amber-200">Sample schedule — confirm before launch</span></div>
          <EventExplorer events={chapterEvents} />
        </div>
      </section>
      <section className="bg-white py-20 dark:bg-[#07110d]"><div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">{[{ title: "Host with us", body: "Collaborate on a workshop, panel, or community event." }, { title: "Speak at an event", body: "Share technical knowledge or career experience with members." }, { title: "Sponsor programming", body: "Support access to food, travel, materials, and speakers." }].map((item) => <article key={item.title} className="rounded-2xl border border-gray-200 p-7 dark:border-white/10 dark:bg-[#122019]"><h2 className="text-xl font-black dark:text-white">{item.title}</h2><p className="mt-3 text-gray-500 dark:text-gray-300">{item.body}</p><a href="/contact" className="mt-6 inline-flex font-bold text-[#006B3C] dark:text-green-300">Contact us →</a></article>)}</div></section>
    </>
  );
}
