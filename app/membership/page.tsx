import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { chapterLinks, faqs, socialLinks } from "@/data/site";

export const metadata: Metadata = {
  title: "Membership",
  description: "Join NSBE University of Regina and access community, mentorship, events, and career resources.",
};

const benefits = [
  { number: "01", title: "Community", body: "Build genuine relationships with students who understand your experience." },
  { number: "02", title: "Career access", body: "Meet employers, polish your resume, and prepare for interviews with support." },
  { number: "03", title: "Academic support", body: "Find study partners, peer guidance, and resources for demanding courses." },
  { number: "04", title: "Leadership", body: "Lead events, committees, projects, and chapter initiatives that matter." },
  { number: "05", title: "Scholarships", body: "Hear about chapter, national, industry, and community funding opportunities." },
  { number: "06", title: "National network", body: "Connect with NSBE members, conferences, and opportunities beyond Regina." },
];

const joinSteps = [
  { title: "Complete the form", body: "Submit the NSBE URegina general membership application." },
  { title: "Join the community", body: "Enter Discord and follow the chapter’s social channels for updates." },
  { title: "Show up", body: "Attend an event, introduce yourself, and start using member resources." },
];

export default function MembershipPage() {
  const discord = socialLinks.find((link) => link.label === "Discord")!;

  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="You belong in the room."
        description="Join a community that supports your academic journey, career goals, leadership growth, and sense of belonging in STEM."
        primary={{ label: "Start your membership", href: "#join" }}
        secondary={{ label: "Explore member benefits", href: "#benefits" }}
      />
      <section id="benefits" className="bg-white py-24 dark:bg-[#07110d]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Member benefits" title="More support. More connection. More opportunity." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <article key={benefit.number} className="rounded-2xl border border-gray-200 p-7 transition-all hover:-translate-y-1 hover:border-[#006B3C]/40 hover:shadow-lg dark:border-white/10 dark:bg-[#122019]">
                <span className="text-4xl font-black text-[#006B3C]/15 dark:text-green-400/15">{benefit.number}</span>
                <h2 className="mt-5 text-xl font-black dark:text-white">{benefit.title}</h2>
                <p className="mt-3 leading-relaxed text-gray-500 dark:text-gray-300">{benefit.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="join" className="bg-[#edf6f1] py-24 dark:bg-[#0b1712]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="How to join" title="Three simple steps." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {joinSteps.map((step, index) => (
              <article key={step.title} className="rounded-2xl bg-white p-8 shadow-sm dark:bg-[#122019]">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#006B3C] font-black text-white">{index + 1}</span>
                <h2 className="mt-6 text-xl font-black dark:text-white">{step.title}</h2>
                <p className="mt-3 text-gray-500 dark:text-gray-300">{step.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={chapterLinks.membershipApplication}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#006B3C] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#005c34]"
            >
              Open membership application ↗
            </a>
            <a href={discord.href} target="_blank" rel="noreferrer" className="rounded-full border border-[#006B3C]/25 bg-white px-6 py-3 text-sm font-bold text-[#006B3C] transition hover:-translate-y-0.5 hover:border-[#006B3C] dark:bg-[#122019] dark:text-green-300">
              Join Discord ↗
            </a>
          </div>
        </div>
      </section>
      <section className="bg-white py-24 dark:bg-[#07110d]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Questions" title="Membership FAQ." />
          <div className="mt-10"><FAQAccordion items={faqs} /></div>
          <p className="mt-8 text-center text-gray-500 dark:text-gray-300">Still unsure? <Link href="/contact" className="font-bold text-[#006B3C] dark:text-green-300">Send us a message.</Link></p>
        </div>
      </section>
    </>
  );
}
