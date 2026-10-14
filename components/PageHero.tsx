import Image from "next/image";
import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imagePosition?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export default function PageHero({ eyebrow, title, description, image, imagePosition = "center", primary, secondary }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#063d2a] py-24 text-white sm:py-28">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: imagePosition }}
      />
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#052b1e]/95 via-[#06472f]/80 to-[#063d2a]/35" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-white/75">{eyebrow}</p>
        <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">{title}</h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/85">{description}</p>
        {(primary || secondary) && (
          <div className="mt-10 flex flex-wrap gap-4">
            {primary && <Link href={primary.href} className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#006B3C] transition-all hover:-translate-y-0.5 hover:shadow-xl">{primary.label} <span aria-hidden="true">→</span></Link>}
            {secondary && <Link href={secondary.href} className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10">{secondary.label}</Link>}
          </div>
        )}
      </div>
    </section>
  );
}
