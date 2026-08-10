import type { Metadata } from "next";
import Link from "next/link";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = { title: "Sponsors", description: "Partner with NSBE University of Regina to support Black engineering students and connect with emerging talent." };

const outcomes = [
  { metric: "Talent", title: "Meet emerging engineers", body: "Build authentic relationships with students across engineering and technology disciplines." },
  { metric: "Access", title: "Fund meaningful programming", body: "Support workshops, travel, mentorship, meals, materials, and community-building experiences." },
  { metric: "Impact", title: "Strengthen your commitment", body: "Demonstrate sustained investment in equity, inclusion, education, and the future workforce." },
];

const tiers = [
  { name: "Community Partner", amount: "Contribution level needed", benefits: ["Logo placement", "Chapter recognition", "Event invitation"] },
  { name: "Growth Partner", amount: "Contribution level needed", benefits: ["Everything in Community", "Featured social post", "Workshop collaboration"] },
  { name: "Impact Partner", amount: "Contribution level needed", benefits: ["Everything in Growth", "Priority recruiting access", "Custom annual partnership"] },
];

export default function SponsorsPage() {
  return (
    <>
      <PageHero eyebrow="Partnerships" title="Invest in the next generation." description="Partner with NSBE URegina to expand opportunities for Black students while building a meaningful talent and community relationship." primary={{ label: "Start a conversation", href: "/contact" }} secondary={{ label: "View partnership options", href: "#partnerships" }} />
      <section className="bg-white py-24 dark:bg-[#07110d]"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading eyebrow="Why partner" title="Your support becomes opportunity." /><div className="mt-12 grid gap-5 md:grid-cols-3">{outcomes.map((outcome) => <article key={outcome.metric} className="rounded-2xl border border-gray-200 p-8 dark:border-white/10 dark:bg-[#122019]"><span className="text-xs font-bold uppercase tracking-[0.25em] text-[#006B3C] dark:text-green-400">{outcome.metric}</span><h2 className="mt-6 text-2xl font-black dark:text-white">{outcome.title}</h2><p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-300">{outcome.body}</p></article>)}</div></div></section>
      <section id="partnerships" className="bg-[#edf6f1] py-24 dark:bg-[#0b1712]"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading eyebrow="Partnership levels" title="Flexible ways to make an impact." description="Final contribution amounts and benefits should be aligned with the approved sponsorship package." /><div className="mt-12 grid gap-6 lg:grid-cols-3">{tiers.map((tier, index) => <article key={tier.name} className={`rounded-2xl p-8 shadow-sm ${index === 2 ? "bg-[#006B3C] text-white" : "bg-white dark:bg-[#122019]"}`}><p className={`text-xs font-bold uppercase tracking-[0.22em] ${index === 2 ? "text-white/55" : "text-[#006B3C] dark:text-green-400"}`}>Tier {index + 1}</p><h2 className="mt-5 text-2xl font-black">{tier.name}</h2><p className={`mt-2 text-sm ${index === 2 ? "text-white/60" : "text-gray-400"}`}>{tier.amount}</p><ul className={`mt-7 space-y-3 border-t pt-6 ${index === 2 ? "border-white/15" : "border-gray-100 dark:border-white/10"}`}>{tier.benefits.map((benefit) => <li key={benefit} className="flex gap-3"><span className={index === 2 ? "text-white" : "text-[#006B3C]"}>✓</span>{benefit}</li>)}</ul></article>)}</div><div className="mt-8 flex flex-wrap gap-4"><span className="rounded-full border border-dashed border-[#006B3C]/30 px-6 py-3 text-sm font-bold text-[#006B3C] dark:text-green-300">Sponsorship package PDF needed</span><Link href="/contact" className="rounded-full bg-[#006B3C] px-6 py-3 text-sm font-bold text-white">Request information →</Link></div></div></section>
      <section className="bg-white py-24 dark:bg-[#07110d]"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading eyebrow="Current partners" title="Organizations supporting the mission." description="Replace these placeholders with approved sponsor logos and destination links." /><div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">{Array.from({ length: 6 }).map((_, index) => <MediaPlaceholder key={index} label={`Sponsor logo ${index + 1}`} detail="Logo and website link" className="aspect-video" />)}</div></div></section>
      <section className="bg-gray-950 py-20 text-white"><div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8"><div><p className="text-xs font-bold uppercase tracking-[0.25em] text-green-400">Partnership contact</p><h2 className="mt-5 text-4xl font-black">Let’s build something useful together.</h2><p className="mt-5 max-w-2xl text-white/60">Tell us your recruiting, community, or brand goals. We will shape a partnership that creates real value for members.</p><Link href="/contact" className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#006B3C]">Contact sponsorship team →</Link></div><MediaPlaceholder label="Sponsor impact photo" detail="Employer and member interaction" className="aspect-[4/3] border-white/15 bg-white/5 dark:bg-white/5" /></div></section>
    </>
  );
}
