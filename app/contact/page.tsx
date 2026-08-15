import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { chapterLinks, socialLinks } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact NSBE University of Regina about membership, events, sponsorships, and partnerships.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s start a conversation."
        description="Reach out about membership, events, resources, sponsorship, collaborations, or anything else related to the chapter."
      />
      <section className="bg-gray-50 py-24 dark:bg-[#0b1712]">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
          <div>
            <SectionHeading eyebrow="Reach the chapter" title="Choose the channel that works for you." />
            <div className="mt-9 space-y-4">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-[#122019]">
                <p className="text-xs font-bold uppercase tracking-widest text-[#006B3C] dark:text-green-400">Chapter email</p>
                <a
                  href={chapterLinks.emailHref}
                  className="mt-3 inline-block font-bold text-gray-950 transition-colors hover:text-[#006B3C] dark:text-white dark:hover:text-green-300"
                >
                  {chapterLinks.email}
                </a>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">For membership, events, sponsorships, partnerships, and general chapter questions.</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-[#122019]">
                <p className="text-xs font-bold uppercase tracking-widest text-[#006B3C] dark:text-green-400">Campus location</p>
                <p className="mt-3 font-bold text-gray-950 dark:text-white">University of Regina</p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">Office or regular meeting location needed.</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-700 transition hover:border-[#006B3C] hover:text-[#006B3C] dark:border-white/10 dark:bg-[#122019] dark:text-gray-200"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>
          <div><ContactForm /></div>
        </div>
      </section>
    </>
  );
}
