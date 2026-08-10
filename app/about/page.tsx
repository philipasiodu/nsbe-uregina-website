import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = { title: "About", description: "Learn about NSBE University of Regina, our mission, values, and chapter story." };

const values = [
  { number: "01", title: "Excellence", body: "We pursue academic and professional excellence while making room for others to thrive." },
  { number: "02", title: "Community", body: "We build relationships that help members feel seen, supported, and connected." },
  { number: "03", title: "Leadership", body: "We create opportunities for students to lead projects, people, and meaningful change." },
  { number: "04", title: "Impact", body: "We turn support from members and partners into tangible outcomes for Black students in STEM." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About NSBE URegina" title="Built for belonging. Driven by excellence." description="We support Black engineering and technology students with community, mentorship, professional development, and opportunities to lead." primary={{ label: "Meet the executive team", href: "/executive-team" }} secondary={{ label: "Join the chapter", href: "/membership" }} />

      <section className="bg-white py-24 dark:bg-[#07110d]">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div><SectionHeading eyebrow="Our chapter" title="A national mission, grounded in Regina." description="NSBE URegina is part of a global community committed to increasing the number of culturally responsible Black engineers who excel academically, succeed professionally, and positively impact their communities." /><p className="mt-6 text-lg leading-relaxed text-gray-500 dark:text-gray-300">Our chapter translates that mission into campus programming: peer support, workshops, employer connections, social events, scholarships, and leadership experience.</p></div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"><Image src="/media/homepage/chapter-group.jpg" alt="NSBE University of Regina executive team" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div>
        </div>
      </section>

      <section className="bg-[#edf6f1] py-24 dark:bg-[#0b1712]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our values" title="How we show up." description="These principles guide our programming, partnerships, and relationships with members." />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{values.map((value) => <article key={value.number} className="rounded-2xl border border-[#006B3C]/10 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-[#122019]"><span className="text-5xl font-black text-[#006B3C]/10 dark:text-green-400/10">{value.number}</span><h3 className="mt-6 text-xl font-black text-gray-950 dark:text-white">{value.title}</h3><p className="mt-3 leading-relaxed text-gray-500 dark:text-gray-300">{value.body}</p></article>)}</div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-[#07110d]">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <MediaPlaceholder label="Chapter origin photo" detail="Historical or founding-team image" />
          <div><SectionHeading eyebrow="Our story" title="The next chapter is being written now." /><div className="mt-8 space-y-7 border-l border-[#006B3C]/20 pl-7"><div><p className="text-xs font-bold uppercase tracking-widest text-[#006B3C]">Founded</p><h3 className="mt-2 text-xl font-black dark:text-white">Chapter origin details needed</h3><p className="mt-2 text-gray-500 dark:text-gray-300">Add the founding year, founding executives, and the reason the chapter was established.</p></div><div><p className="text-xs font-bold uppercase tracking-widest text-[#006B3C]">Today</p><h3 className="mt-2 text-xl font-black dark:text-white">Thirteen student leaders</h3><p className="mt-2 text-gray-500 dark:text-gray-300">A 13-person executive team is building programming for academic success, career growth, community, and advocacy.</p></div><div><p className="text-xs font-bold uppercase tracking-widest text-[#006B3C]">Next</p><h3 className="mt-2 text-xl font-black dark:text-white">A sustainable chapter platform</h3><p className="mt-2 text-gray-500 dark:text-gray-300">This website will preserve chapter knowledge, strengthen sponsor credibility, and support future executive transitions.</p></div></div><Link href="/contact" className="mt-9 inline-flex rounded-full bg-[#006B3C] px-6 py-3 text-sm font-bold text-white">Help us document the story</Link></div>
        </div>
      </section>
    </>
  );
}
