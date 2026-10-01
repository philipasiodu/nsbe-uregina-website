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
      <section id="photos" className="bg-white py-24 dark:bg-[#07110d]"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading eyebrow="Chapter moments" title="Community in action." description="Explore moments from chapter mixers, professional development workshops, and campus outreach. Select a photo to open the full-screen viewer." /><div className="mt-12"><GalleryExplorer items={galleryItems} /></div></div></section>
      <section className="bg-[#edf6f1] py-24 dark:bg-[#0b1712]"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading eyebrow="Future albums" title="More of the chapter story to come." description="These are the remaining media categories we would like to document as the chapter grows." /><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4"><MediaPlaceholder label="Industry & sponsors" detail="4–8 networking photos" /><MediaPlaceholder label="Academic support" detail="3–6 study-session photos" /><MediaPlaceholder label="Conference travel" detail="4–8 trip photos" /><MediaPlaceholder label="Awards & milestones" detail="3–6 celebration photos" /></div></div></section>
    </>
  );
}
