import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about NSBE, its history and mission, and the student-led University of Regina chapter.",
};

const values = [
  { number: "01", title: "Academic excellence", body: "We encourage strong study habits, peer support, technical growth, and the confidence to persist." },
  { number: "02", title: "Professional success", body: "We help members build career awareness, practical skills, networks, and leadership experience." },
  { number: "03", title: "Community", body: "We create spaces where Black students in STEM can belong, connect, mentor one another, and be seen." },
  { number: "04", title: "Positive impact", body: "We use engineering, service, and advocacy to make campus and the wider community stronger." },
];

const history = [
  { year: "1971", title: "The idea takes root", body: "Purdue students Edward Barnette and Fred Cooper proposed the Black Society of Engineers to improve the recruitment and retention of Black engineering students." },
  { year: "1975", title: "NSBE becomes national", body: "Students from universities across the United States gathered at Purdue from April 10–12, and the Society became the National Society of Black Engineers." },
  { year: "Today", title: "A global student-led community", body: "NSBE reports more than 24,000 members and over 700 chapters, connecting students and professionals through a shared commitment to excellence and impact." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About NSBE URegina"
        title="Built for belonging. Driven by excellence."
        description="Our student-led chapter connects the University of Regina to a global community of Black engineers, technologists, leaders, and allies."
        primary={{ label: "Meet the executive team", href: "/executive-team" }}
        secondary={{ label: "Join the chapter", href: "/membership" }}
      />

      <section className="bg-white py-24 dark:bg-[#07110d]">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading eyebrow="Our chapter" title="A national mission, grounded in Regina." />
            <blockquote className="mt-7 border-l-4 border-[#F4C430] pl-6 text-xl font-bold leading-relaxed text-gray-900 dark:text-white">
              “To increase the number of culturally responsible Black engineers who excel academically, succeed professionally, and positively impact the community.”
            </blockquote>
            <p className="mt-6 text-lg leading-relaxed text-gray-500 dark:text-gray-300">
              At the University of Regina, that mission means building community, encouraging academic and technical growth, creating professional opportunities, and giving students meaningful ways to lead and serve.
            </p>
            <a href="https://nsbe.org/about-/" target="_blank" rel="noreferrer" className="mt-6 inline-flex text-sm font-bold text-[#006B3C] hover:underline dark:text-green-400">
              Read NSBE’s official mission and vision →
            </a>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <Image src="/media/homepage/chapter-group.jpg" alt="NSBE University of Regina executive team seated in a lecture theatre" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" priority />
          </div>
        </div>
      </section>

      <section className="bg-[#edf6f1] py-24 dark:bg-[#0b1712]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What guides us" title="Excellence with purpose." description="These priorities translate NSBE’s national mission into the way our chapter supports members and serves its community." />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article key={value.number} className="rounded-2xl border border-[#006B3C]/10 bg-white p-7 shadow-sm transition-transform hover:-translate-y-1 dark:border-white/10 dark:bg-[#122019]">
                <span className="text-5xl font-black text-[#006B3C]/10 dark:text-green-400/10">{value.number}</span>
                <h3 className="mt-6 text-xl font-black text-gray-950 dark:text-white">{value.title}</h3>
                <p className="mt-3 leading-relaxed text-gray-500 dark:text-gray-300">{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-[#07110d]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="rounded-2xl bg-[#006B3C] p-8 text-white shadow-xl lg:sticky lg:top-28">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/60">NSBE history</p>
              <p className="mt-6 text-6xl font-black text-[#F4C430]">50+</p>
              <h2 className="mt-3 text-3xl font-black">years of student-led impact</h2>
              <p className="mt-5 leading-relaxed text-white/75">From a retention-focused student group at Purdue to an international network, NSBE’s story shows what organized student leadership can build.</p>
              <a href="https://nsbe.org/storage/2024/06/NSBE-2019-20-Annual-Report_FINAL-1.pdf" target="_blank" rel="noreferrer" className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold text-[#006B3C]">Explore the official history →</a>
            </div>

            <div>
              <SectionHeading eyebrow="Where it began" title="A movement built by students." description="The chapter’s work in Regina is part of a national story that began with students addressing a real gap in engineering education." />
              <div className="mt-10 space-y-8 border-l border-[#006B3C]/25 pl-7 sm:pl-10">
                {history.map((item) => (
                  <article key={item.year} className="relative">
                    <span className="absolute -left-[2.08rem] top-1 h-3 w-3 rounded-full bg-[#F4C430] ring-4 ring-white sm:-left-[2.83rem] dark:ring-[#07110d]" />
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#006B3C] dark:text-green-400">{item.year}</p>
                    <h3 className="mt-2 text-2xl font-black text-gray-950 dark:text-white">{item.title}</h3>
                    <p className="mt-3 max-w-3xl leading-relaxed text-gray-500 dark:text-gray-300">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#101b16] py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-green-300">URegina today</p>
            <h2 className="mt-4 text-3xl font-black">Thirteen students leading one shared mission.</h2>
            <p className="mt-3 max-w-2xl text-white/65">Meet the team supporting chapter operations, campus relationships, events, policy, sponsorship, marketing, technology, and member representation.</p>
          </div>
          <Link href="/executive-team" className="w-fit rounded-full bg-[#F4C430] px-7 py-3.5 text-sm font-bold text-gray-950 transition-transform hover:-translate-y-0.5">Meet the team →</Link>
        </div>
      </section>
    </>
  );
}
