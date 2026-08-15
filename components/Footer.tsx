import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import { chapterLinks, socialLinks } from "@/data/site";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Executive Team", href: "/executive-team" },
  { label: "Events", href: "/events" },
  { label: "Membership", href: "/membership" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Resources", href: "/resources" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3"><BrandMark size={52} /><div><span className="block text-2xl font-black tracking-tight">NSBE</span><span className="text-sm text-white/35">University of Regina</span></div></div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/45">Building community, academic excellence, professional growth, and leadership for Black students in STEM.</p>
            <a href={chapterLinks.emailHref} className="mt-4 inline-block text-sm font-semibold text-white/65 transition-colors hover:text-white">{chapterLinks.email}</a>
          </div>
          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4">{footerLinks.map((link) => <Link key={link.href} href={link.href} className="text-sm font-medium text-white/50 transition-colors hover:text-white">{link.label}</Link>)}</nav>
        </div>
        <div className="flex flex-col gap-5 border-b border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm font-medium text-white/50">Connect with the chapter</p><div className="flex flex-wrap gap-3">{socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/70 transition-all hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 hover:text-white">{social.label} ↗</a>)}</div></div>
        <div className="flex flex-col gap-4 pt-8 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} NSBE University of Regina Chapter.</p><p>National Society of Black Engineers</p></div>
      </div>
    </footer>
  );
}
