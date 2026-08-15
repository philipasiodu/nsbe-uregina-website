import Link from "next/link";
import Image from "next/image";
import AnimatedStats, { type HomepageStat } from "@/components/AnimatedStats";
import FeaturedEventCarousel from "@/components/FeaturedEventCarousel";
import HomeEnhancements from "@/components/HomeEnhancements";

const STATS: HomepageStat[] = [
  { value: 16_000, suffix: "+", label: "Members Worldwide" },
  { value: 400, suffix: "+", label: "University Chapters" },
  { value: 1_971, label: "NSBE Roots" },
  {
    value: 1_000_000,
    prefix: "$",
    suffix: "+",
    compact: true,
    label: "Scholarships Awarded",
  },
];

const PILLARS = [
  {
    number: "01",
    title: "Academic Excellence",
    body: "Study resources, peer support, and scholarships to keep you performing at your best.",
  },
  {
    number: "02",
    title: "Professional Development",
    body: "Resume clinics, career fairs, and direct access to Black engineers already in industry.",
  },
  {
    number: "03",
    title: "Community & Advocacy",
    body: "A space built on belonging — pushing for equity in engineering, on campus and beyond.",
  },
];

const ENGAGEMENT_PATHS = [
  {
    eyebrow: "Belong",
    title: "Join the chapter",
    body: "Find mentorship, community, and opportunities built for your journey.",
    href: "/membership",
    accent: "bg-[#006B3C] text-white",
  },
  {
    eyebrow: "Grow",
    title: "Career resources",
    body: "Explore resume guidance, scholarships, internships, and workshops.",
    href: "/resources",
    accent: "bg-amber-300 text-gray-950",
  },
  {
    eyebrow: "Connect",
    title: "Meet us on Discord",
    body: "Join the conversation and hear about chapter updates as they happen.",
    href: "https://discord.gg/fSpF2wZqDc",
    accent: "bg-gray-950 text-white dark:bg-white dark:text-gray-950",
    external: true,
  },
  {
    eyebrow: "Invest",
    title: "Partner with NSBE",
    body: "Help expand access, programming, and career pathways for our members.",
    href: "/sponsors",
    accent: "bg-white text-gray-950 dark:bg-[#17251e] dark:text-white",
  },
];

const EVENTS = [
  {
    id: 1,
    month: "AUG",
    day: "12",
    title: "Fall Kickoff & Mixer",
    location: "EDC Atrium — University of Regina",
    type: "Social",
  },
  {
    id: 2,
    month: "SEP",
    day: "05",
    title: "Resume & Career Workshop",
    location: "RI 108 — University of Regina",
    type: "Professional Dev",
  },
  {
    id: 3,
    month: "SEP",
    day: "20",
    title: "Industry Night",
    location: "Conexus Arts Centre, Regina",
    type: "Networking",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-[#07110d] dark:text-gray-100">
      <HomeEnhancements />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-[#006B3C] overflow-hidden">

        {/* Hard grid overlay */}
        <div
          className="hero-grid absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Background watermark */}
        <span
          className="absolute right-0 bottom-0 font-black text-white select-none pointer-events-none leading-none"
          style={{
            fontSize: "22vw",
            opacity: 0.04,
            letterSpacing: "-0.05em",
          }}
          aria-hidden
        >
          NSBE
        </span>

        {/* Left rule */}
        <div className="absolute left-0 top-0 h-full w-1 bg-white opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 w-full">
          <div className="max-w-4xl">

            <p className="text-white/50 text-xs font-bold tracking-[0.3em] uppercase mb-8">
              Student-led &nbsp;·&nbsp; University of Regina Chapter
            </p>

            <h1
              className="font-black text-white leading-[0.95] tracking-tight mb-10"
              style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}
            >
              Building
              <br />
              <span className="text-white">Black Engineers</span>
              <br />
              for Canada.
            </h1>

            <p className="text-white/60 text-lg sm:text-xl max-w-lg leading-relaxed mb-12 font-light">
              We are the National Society of Black Engineers — a chapter of students
              committed to academic excellence, professional growth, and lasting community.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/membership"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold tracking-wide text-[#006B3C] transition-all hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-xl"
              >
                Join the Chapter
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold tracking-wide text-white transition-all hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/5"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Hard bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white opacity-10" />
        <a
          href="#impact"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-white/50 transition-colors hover:text-white sm:flex"
        >
          Explore our impact
          <span className="scroll-cue block h-8 w-px bg-white/50" aria-hidden="true" />
        </a>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <AnimatedStats stats={STATS} />

      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
      <section className="border-b border-gray-100 bg-white py-24 dark:border-white/10 dark:bg-[#07110d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>
              <p className="text-[#006B3C] text-xs font-bold tracking-[0.25em] uppercase mb-6">
                Who We Are
              </p>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-6 tracking-tight dark:text-white">
                A chapter built
                <br />on purpose.
              </h2>
              <div className="w-12 h-1 bg-[#006B3C] mb-8" />
              <p className="text-gray-500 text-lg leading-relaxed mb-6 dark:text-gray-300">
                NSBE UofR is part of one of the largest student-run technical organizations
                in the world. On campus, we close the gap between Black engineering students
                and the opportunities they deserve.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-10 dark:text-gray-300">
                First year finding your footing, or final year heading into industry —
                this chapter is your foundation.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-[#006B3C] font-bold text-sm tracking-wide group"
              >
                <span>Read our full story</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-xl">
                <Image
                  src="/media/homepage/chapter-group.jpg"
                  alt="The NSBE University of Regina executive team seated together in a lecture hall"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-6 pb-5 pt-16">
                  <p className="text-sm font-semibold text-white">NSBE URegina executive team</p>
                </div>
              </div>
              {/* Hard offset accent */}
              <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl border-2 border-[#006B3C] opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* ── PATHWAYS ─────────────────────────────────────────────────────── */}
      <section className="border-b border-gray-200 bg-[#edf6f1] py-20 dark:border-white/10 dark:bg-[#0b1712]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#006B3C] dark:text-green-400">
                Find your place
              </p>
              <h2 className="max-w-2xl text-3xl font-black tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Start wherever you are.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-gray-500 dark:text-gray-300">
              Whether you want community, career support, or a way to give back, there is
              a clear next step waiting for you.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ENGAGEMENT_PATHS.map((path, index) => (
              <Link
                key={path.title}
                href={path.href}
                target={path.external ? "_blank" : undefined}
                rel={path.external ? "noreferrer" : undefined}
                className={`group flex min-h-64 flex-col justify-between overflow-hidden rounded-2xl p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${path.accent}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs font-bold uppercase tracking-[0.22em] opacity-60">
                    {path.eyebrow}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-current/20 text-lg transition-transform duration-300 group-hover:translate-x-1">
                    {path.external ? "↗" : "→"}
                  </span>
                </div>
                <div>
                  <span className="mb-5 block text-5xl font-black opacity-10" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <h3 className="text-xl font-black tracking-tight">{path.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed opacity-65">{path.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PILLARS ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#006B3C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-white/40 text-xs font-bold tracking-[0.25em] uppercase mb-6">
              What We Do
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight">
              Three pillars.
              <br />One mission.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 divide-x divide-white/10 border border-white/10">
            {PILLARS.map(({ number, title, body }) => (
              <div
                key={number}
                className="p-10 hover:bg-white/5 transition-colors duration-200"
              >
                <span className="block font-black text-6xl text-white/10 mb-8 leading-none">
                  {number}
                </span>
                <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENTS ───────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-24 dark:bg-[#0b1712]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
            <div>
              <p className="text-[#006B3C] text-xs font-bold tracking-[0.25em] uppercase mb-6">
                Upcoming
              </p>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight tracking-tight dark:text-white">
                Events &
                <br />highlights.
              </h2>
            </div>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-[#006B3C] font-bold text-sm tracking-wide group"
            >
              <span>All events</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="mb-12 grid overflow-hidden rounded-3xl bg-gray-950 shadow-2xl lg:grid-cols-[1.35fr_0.85fr]">
            <FeaturedEventCarousel />
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-green-400">
                Featured event
              </p>
              <h3 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Fall Kickoff &amp; Mixer
              </h3>
              <p className="mt-5 leading-relaxed text-white/60">
                Meet the chapter, connect with engineering students, and learn what NSBE
                URegina has planned for the year ahead.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-6 border-y border-white/10 py-6">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-widest text-white/35">Date</dt>
                  <dd className="mt-2 font-bold text-white">August 12</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-widest text-white/35">Location</dt>
                  <dd className="mt-2 font-bold text-white">EDC Atrium</dd>
                </div>
              </dl>
              <Link
                href="/events"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#006B3C] transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                View event details <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            {EVENTS.map((event) => (
              <Link
                key={event.id}
                href="/events"
                className="group flex cursor-pointer flex-col gap-6 rounded-xl border border-gray-200 bg-white px-5 py-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#006B3C]/40 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006B3C] focus-visible:ring-offset-2 sm:flex-row sm:items-center sm:gap-10 sm:px-7 dark:border-white/10 dark:bg-[#122019] dark:focus-visible:ring-offset-[#0b1712]"
              >
                {/* Date block */}
                <div className="w-16 shrink-0 rounded-lg bg-[#006B3C] py-3 text-center transition-transform duration-300 group-hover:scale-105">
                  <div className="text-white/60 text-xs font-bold tracking-widest uppercase">
                    {event.month}
                  </div>
                  <div className="text-white font-black text-2xl leading-tight">{event.day}</div>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-[#006B3C] dark:text-white dark:group-hover:text-green-300">{event.title}</h3>
                    <span className="rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-bold text-[#006B3C] dark:border-green-400/20 dark:bg-green-400/10 dark:text-green-300">
                      {event.type}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm dark:text-gray-400">{event.location}</p>
                </div>

                <span className="hidden h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#006B3C] group-hover:text-white sm:flex dark:bg-white/10">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIP CTA ───────────────────────────────────────────────── */}
      <section className="bg-white py-24 dark:bg-[#07110d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#006B3C] p-10 sm:p-16 lg:p-20">

            {/* Background watermark */}
            <span
              className="absolute -right-4 -bottom-4 font-black text-white leading-none select-none pointer-events-none"
              style={{ fontSize: "14rem", opacity: 0.04 }}
              aria-hidden
            >
              JOIN
            </span>

            <div className="relative max-w-2xl">
              <p className="text-white/40 text-xs font-bold tracking-[0.25em] uppercase mb-6">
                Get Involved
              </p>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-6">
                Ready to join
                <br />the chapter?
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-10">
                Membership opens the door to events, mentorship, workshops, scholarships,
                and a network of Black engineers across Canada and beyond.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/membership"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold tracking-wide text-[#006B3C] transition-all hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-xl"
                >
                  Become a Member
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-white/30 px-8 py-4 text-sm font-semibold tracking-wide text-white transition-all hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/5"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPONSORS ─────────────────────────────────────────────────────── */}
      <section className="border-t border-gray-200 bg-gray-50 py-24 dark:border-white/10 dark:bg-[#0b1712]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-[#006B3C] text-xs font-bold tracking-[0.25em] uppercase mb-6">
                Partners & Sponsors
              </p>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-6 dark:text-white">
                Invest in the
                <br />next generation.
              </h2>
              <div className="w-12 h-1 bg-[#006B3C] mb-8" />
              <p className="text-gray-500 text-lg leading-relaxed mb-10 dark:text-gray-300">
                Partner with NSBE UofR to connect your organization with driven Black
                engineering students. Your support funds the events, travel, and programming
                that shape careers.
              </p>
              <Link
                href="/sponsors"
                className="inline-flex items-center gap-2 rounded-full bg-[#006B3C] px-8 py-4 text-sm font-bold tracking-wide text-white transition-all hover:-translate-y-0.5 hover:bg-[#005530] hover:shadow-lg"
              >
                Become a Sponsor
                <span aria-hidden>→</span>
              </Link>
            </div>

            <div>
              <p className="text-xs text-gray-400 font-bold tracking-[0.2em] uppercase mb-6">
                Current sponsors
              </p>
              <div className="grid grid-cols-3 gap-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex aspect-video items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-white transition-all hover:-translate-y-0.5 hover:border-[#006B3C]/30 hover:shadow-md dark:border-white/10 dark:bg-[#122019]"
                  >
                    <span className="text-gray-300 text-xs font-bold tracking-widest">LOGO</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
