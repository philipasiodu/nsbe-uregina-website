import type { Metadata } from "next";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { chapterLinks } from "@/data/site";

export const metadata: Metadata = {
  title: "Sponsors",
  description: "Partner with NSBE University of Regina to support Black engineering students and connect with emerging talent.",
};

const partnerBenefits = [
  { title: "Positive brand association", body: "Show your support for diversity, inclusion, student development, and the University of Regina community." },
  { title: "Develop future leaders", body: "Help students build leadership skills, technical ability, confidence, and career readiness." },
  { title: "Support community impact", body: "Fund outreach, scholarships, student development, and events that benefit students and the wider community." },
  { title: "Build meaningful connections", body: "Engage directly with students, alumni, faculty, and professionals through panels, workshops, and networking." },
  { title: "Increase brand visibility", body: "Receive recognition through event materials, social media, and acknowledgements during sponsored programming." },
];

const eventSponsorships = [
  {
    name: "Info Mixer",
    attendance: "80+ engineering students per event",
    description: "A community-building networking event where STEM students meet peers, exchange experiences, and discover the resources and opportunities NSBE provides.",
    tiers: [
      { name: "Gold", amount: "$750", benefits: ["Large logo placement on event posters", "Recognition during event announcements", "Social media promotion", "Company banner or promotional material at the event"] },
      { name: "Silver", amount: "$500", benefits: ["Medium logo placement on promotional materials", "Social media recognition"] },
      { name: "Bronze", amount: "$350", benefits: ["Logo placement on event posters"] },
    ],
  },
  {
    name: "Resume & Interview Workshop",
    attendance: "40+ students",
    description: "A professional development workshop covering resumes, interviews, LinkedIn profiles, and networking confidence for internships and full-time opportunities.",
    tiers: [
      { name: "Platinum", amount: "$100", benefits: ["Logo on workshop materials", "Opportunity for a keynote speaker to present", "Social media recognition post"] },
    ],
  },
  {
    name: "Black History Fest",
    attendance: "50+ students and guests",
    description: "A celebration of Black achievement in engineering, technology, science, and leadership that connects students with professionals, role models, and community members.",
    tiers: [
      { name: "Gold", amount: "$300", benefits: ["Featured logo placement", "Event recognition", "Social media spotlight", "Keynote speaker opportunity"] },
      { name: "Silver", amount: "$150", benefits: ["Sponsor acknowledgement during the event", "Social media spotlight", "Logo on promotional materials"] },
    ],
  },
  {
    name: "Technical Workshops",
    attendance: "20+ students",
    description: "Hands-on Arduino 101 and introductory technology workshops that build practical technical knowledge, confidence, innovation, and problem-solving skills.",
    tiers: [
      { name: "Platinum", amount: "$200", benefits: ["Logo placement on workshop materials", "Recognition during the workshop", "Social media promotion", "Opportunity to present or teach the workshop"] },
    ],
  },
  {
    name: "Engineering & Technology Industry Panel",
    attendance: "40+ students",
    description: "An industry conversation about career pathways, leadership, innovation, and workplace experiences, with opportunities for guidance, mentoring, and recruiting connections.",
    tiers: [
      { name: "Platinum", amount: "$100 or provide a speaker", benefits: ["Opportunity to provide a speaker or panellist", "Premium logo placement", "Verbal appreciation during the event", "Social media recognition"] },
    ],
  },
];

export default function SponsorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title="Invest in the next generation."
        description="Partner with NSBE URegina to expand opportunities for Black students while building meaningful talent, community, and brand relationships."
        image="/media/gallery/interview-workshop/speaker-session.jpeg"
        imagePosition="center 38%"
        primary={{ label: "Explore sponsorship options", href: "#programs" }}
        secondary={{ label: "Why partner with us", href: "#why-partner" }}
      />

      <section id="why-partner" className="bg-white py-24 dark:bg-[#07110d]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why partner"
            title="Your support becomes opportunity."
            description="Sponsorship connects your organization with motivated students while directly supporting leadership, technical learning, professional development, and community impact."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {partnerBenefits.map((benefit, index) => (
              <article key={benefit.title} className="rounded-2xl border border-gray-200 p-8 transition-all hover:-translate-y-1 hover:border-[#006B3C]/35 hover:shadow-lg dark:border-white/10 dark:bg-[#122019]">
                <span className="text-xs font-black uppercase tracking-[0.22em] text-[#006B3C] dark:text-green-400">Benefit {index + 1}</span>
                <h2 className="mt-5 text-xl font-black text-gray-950 dark:text-white">{benefit.title}</h2>
                <p className="mt-3 leading-relaxed text-gray-500 dark:text-gray-300">{benefit.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="programs" className="bg-[#edf6f1] py-24 dark:bg-[#0b1712]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="2026–2027 sponsorship opportunities"
              title="Sponsor a program that matches your goals."
              description="Each option below comes directly from the approved chapter sponsorship package. We also welcome custom partnerships, scholarships, mentorship, donated resources, prizes, and recruiting support."
            />
            <a
              href="/documents/nsbe-uregina-sponsorship-package-2026-2027.pdf"
              target="_blank"
              rel="noreferrer"
              className="w-fit shrink-0 rounded-full border border-[#006B3C]/25 bg-white px-6 py-3 text-sm font-bold text-[#006B3C] transition hover:-translate-y-0.5 hover:border-[#006B3C] dark:bg-[#122019] dark:text-green-300"
            >
              Download sponsorship package ↗
            </a>
          </div>

          <div className="mt-12 space-y-8">
            {eventSponsorships.map((event, eventIndex) => (
              <article key={event.name} className="overflow-hidden rounded-3xl border border-[#006B3C]/10 bg-white shadow-sm dark:border-white/10 dark:bg-[#122019]">
                <div className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
                  <div>
                    <span className="text-xs font-black uppercase tracking-[0.22em] text-[#006B3C] dark:text-green-400">Program {String(eventIndex + 1).padStart(2, "0")}</span>
                    <h2 className="mt-4 text-3xl font-black text-gray-950 dark:text-white">{event.name}</h2>
                    <p className="mt-3 inline-flex rounded-full bg-green-50 px-3 py-1.5 text-sm font-bold text-[#006B3C] dark:bg-green-400/10 dark:text-green-300">Expected attendance: {event.attendance}</p>
                    <p className="mt-5 leading-relaxed text-gray-600 dark:text-gray-300">{event.description}</p>
                  </div>
                  <div className={`grid gap-4 ${event.tiers.length > 1 ? "md:grid-cols-2 xl:grid-cols-3" : ""}`}>
                    {event.tiers.map((tier) => (
                      <div key={`${event.name}-${tier.name}`} className="rounded-2xl bg-gray-50 p-6 dark:bg-[#0b1712]">
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-gray-400">{tier.name} tier</p>
                        <p className="mt-3 text-2xl font-black text-[#006B3C] dark:text-green-300">{tier.amount}</p>
                        <ul className="mt-5 space-y-3 border-t border-gray-200 pt-5 text-sm text-gray-600 dark:border-white/10 dark:text-gray-300">
                          {tier.benefits.map((benefit) => (
                            <li key={benefit} className="flex gap-3"><span className="font-black text-[#006B3C] dark:text-green-400">✓</span><span>{benefit}</span></li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-green-400">Custom sponsorships & partnerships</p>
            <h2 className="mt-5 text-4xl font-black">Let’s build a partnership around your goals.</h2>
            <p className="mt-5 max-w-2xl text-white/60">Sponsor an event, support a student initiative, provide mentorship, donate resources or prizes, offer a scholarship, or connect with emerging talent. We will work with you to create a useful partnership.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={chapterLinks.emailHref} className="inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#006B3C]">Email the sponsorship team →</a>
              <a href="/documents/nsbe-uregina-sponsorship-package-2026-2027.pdf" target="_blank" rel="noreferrer" className="inline-flex rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">View the full package ↗</a>
            </div>
            <p className="mt-5 text-sm text-white/45">{chapterLinks.email}</p>
          </div>
          <MediaPlaceholder label="Sponsor impact photo" detail="Employer and member interaction" className="aspect-[4/3] border-white/15 bg-white/5 dark:bg-white/5" />
        </div>
      </section>
    </>
  );
}
