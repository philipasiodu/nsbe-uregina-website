import Link from "next/link";
import AnimatedStats, { type HomepageStat } from "@/components/AnimatedStats";
import HomeEnhancements from "@/components/HomeEnhancements";

const STATS: HomepageStat[] = [
  { value: 16_000, suffix: "+", label: "Members Worldwide" },
  { value: 400, suffix: "+", label: "University Chapters" },
  { value: 1_971, label: "Year Founded" },
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
    <div className="min-h-screen bg-white text-gray-900">
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
              University of Regina Chapter &nbsp;·&nbsp; Est. 2018
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
                className="inline-flex items-center gap-2 bg-white px-8 py-4 text-sm font-bold tracking-wide text-[#006B3C] transition-all hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-xl"
              >
                Join the Chapter
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-white/30 px-8 py-4 text-sm font-semibold tracking-wide text-white transition-all hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/5"
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
      <section className="py-32 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>
              <p className="text-[#006B3C] text-xs font-bold tracking-[0.25em] uppercase mb-6">
                Who We Are
              </p>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-6 tracking-tight">
                A chapter built
                <br />on purpose.
              </h2>
              <div className="w-12 h-1 bg-[#006B3C] mb-8" />
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                NSBE UofR is part of one of the largest student-run technical organizations
                in the world. On campus, we close the gap between Black engineering students
                and the opportunities they deserve.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">
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

            {/* Photo placeholder */}
            <div className="relative">
              <div
                className="aspect-[4/3] bg-gray-50 border-2 border-dashed border-gray-200 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#006B3C] mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-black text-xl">N</span>
                  </div>
                  <p className="text-gray-400 text-sm font-medium">Chapter photo goes here</p>
                  <p className="text-gray-300 text-xs mt-1">Recommended: 800×600px</p>
                </div>
              </div>
              {/* Hard offset accent */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#006B3C] opacity-20 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── PILLARS ──────────────────────────────────────────────────────── */}
      <section className="py-32 bg-[#006B3C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
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
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
            <div>
              <p className="text-[#006B3C] text-xs font-bold tracking-[0.25em] uppercase mb-6">
                Upcoming
              </p>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight tracking-tight">
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

          <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {EVENTS.map((event) => (
              <Link
                key={event.id}
                href="/events"
                className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 py-8 hover:bg-white transition-colors group cursor-pointer px-2"
              >
                {/* Date block */}
                <div className="shrink-0 w-16 bg-[#006B3C] text-center py-3">
                  <div className="text-white/60 text-xs font-bold tracking-widest uppercase">
                    {event.month}
                  </div>
                  <div className="text-white font-black text-2xl leading-tight">{event.day}</div>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-gray-900">{event.title}</h3>
                    <span className="text-xs font-bold px-2 py-0.5 bg-green-50 text-[#006B3C] border border-green-200">
                      {event.type}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{event.location}</p>
                </div>

                <span className="text-gray-300 group-hover:text-[#006B3C] group-hover:translate-x-1 transition-all text-xl hidden sm:block">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIP CTA ───────────────────────────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#006B3C] p-16 sm:p-20 relative overflow-hidden">

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
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#006B3C] font-bold text-sm tracking-wide hover:bg-gray-100 transition-colors"
                >
                  Become a Member
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border border-white/30 text-white font-semibold text-sm tracking-wide hover:border-white/60 hover:bg-white/5 transition-all"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPONSORS ─────────────────────────────────────────────────────── */}
      <section className="py-32 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-[#006B3C] text-xs font-bold tracking-[0.25em] uppercase mb-6">
                Partners & Sponsors
              </p>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-6">
                Invest in the
                <br />next generation.
              </h2>
              <div className="w-12 h-1 bg-[#006B3C] mb-8" />
              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                Partner with NSBE UofR to connect your organization with driven Black
                engineering students. Your support funds the events, travel, and programming
                that shape careers.
              </p>
              <Link
                href="/sponsors"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#006B3C] text-white font-bold text-sm tracking-wide hover:bg-[#005530] transition-colors"
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
                    className="aspect-video bg-white border-2 border-dashed border-gray-200 flex items-center justify-center"
                  >
                    <span className="text-gray-300 text-xs font-bold tracking-widest">LOGO</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="bg-gray-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 pb-10 border-b border-white/10">
            <div>
              <span className="font-black text-white text-2xl tracking-tight">NSBE</span>
              <span className="text-white/30 ml-3 text-sm">University of Regina</span>
            </div>
            <div className="flex flex-wrap gap-8">
              {["About", "Events", "Membership", "Sponsors", "Contact"].map((l) => (
                <Link
                  key={l}
                  href={`/${l.toLowerCase()}`}
                  className="text-white/40 text-sm font-medium hover:text-white transition-colors tracking-wide"
                >
                  {l}
                </Link>
              ))}
            </div>
          </div>
          <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-white/20 text-xs tracking-wide">
              © {new Date().getFullYear()} NSBE University of Regina Chapter. All rights reserved.
            </p>
            <p className="text-white/20 text-xs">
              National Society of Black Engineers
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
