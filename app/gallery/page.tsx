import type { Metadata } from "next";
import GalleryExplorer from "@/components/GalleryExplorer";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { galleryItems } from "@/data/site";

export const metadata: Metadata = { title: "Gallery", description: "Photos from NSBE University of Regina events, workshops, and community experiences." };

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Photo gallery" title="Community, captured." description="A growing record of the people, programs, and moments that shape NSBE University of Regina." primary={{ label: "View photos", href: "#photos" }} />
      <section id="photos" className="bg-white py-24 dark:bg-[#07110d]"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading eyebrow="Featured album" title="Fall Kickoff & Mixer." description="Select a photo to open the full-screen viewer. Additional albums can use the same gallery experience." /><div className="mt-12"><GalleryExplorer items={galleryItems} /></div></div></section>
      <section className="bg-[#edf6f1] py-24 dark:bg-[#0b1712]"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading eyebrow="More albums" title="Ready for the rest of the chapter story." description="These slots show the recommended mix of media still needed." /><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"><MediaPlaceholder label="Professional development" detail="4–8 workshop photos" /><MediaPlaceholder label="Community & outreach" detail="4–8 candid photos" /><MediaPlaceholder label="Industry & sponsors" detail="4–8 networking photos" /><MediaPlaceholder label="Academic support" detail="3–6 study-session photos" /><MediaPlaceholder label="Conference travel" detail="4–8 trip photos" /><MediaPlaceholder label="Awards & milestones" detail="3–6 celebration photos" /></div></div></section>
    </>
  );
}
