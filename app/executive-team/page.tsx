import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { chapterLinks, executives } from "@/data/site";

export const metadata: Metadata = {
  title: "Executive Team",
  description: "Meet the 13 student leaders serving the NSBE University of Regina chapter.",
};

export default function ExecutiveTeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Executive team"
        title="Thirteen leaders. One chapter."
        description="Meet the students responsible for chapter strategy, member experience, events, partnerships, communications, advocacy, and continuity."
        primary={{ label: "Join the chapter", href: "/membership" }}
      />

      <section className="bg-white py-24 dark:bg-[#07110d]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="2026–27 team"
              title="Student leadership in action."
              description="Our executive team brings together students from engineering, data science, and nursing to serve the chapter and strengthen its campus community."
            />
            <span className="w-fit rounded-full bg-green-50 px-4 py-2 text-sm font-bold text-[#006B3C] dark:bg-green-400/10 dark:text-green-300">13 executives</span>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {executives.map((executive) => (
              <article
                key={executive.name}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#006B3C]/40 hover:shadow-xl dark:border-white/10 dark:bg-[#122019]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#edf6f1] dark:bg-[#102019]">
                  <Image
                    src={executive.image}
                    alt={`${executive.name}, ${executive.role} for NSBE University of Regina`}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#006B3C] dark:text-green-400">{executive.role}</p>
                  <h2 className="mt-3 text-2xl font-black text-gray-950 dark:text-white">{executive.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-300">{executive.program}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#006B3C] py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/55">Get involved</p>
            <h2 className="mt-4 text-3xl font-black">Interested in future leadership?</h2>
            <p className="mt-3 max-w-2xl text-white/70">Ready to help shape the chapter? Submit the executive application to be considered for future leadership opportunities.</p>
          </div>
          <Link
            href={chapterLinks.executiveApplication}
            target="_blank"
            rel="noreferrer"
            className="w-fit rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#006B3C] transition-transform hover:-translate-y-0.5"
          >
            Apply for the executive team →
          </Link>
        </div>
      </section>
    </>
  );
}
