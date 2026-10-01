import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export default function PageHero({ eyebrow, title, description, primary, secondary }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#006B3C] py-24 text-white sm:py-28">
      <div className="hero-grid absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)", backgroundSize: "72px 72px" }} />
      <span className="pointer-events-none absolute -bottom-10 right-0 select-none text-[18vw] font-black leading-none text-white/[0.035]" aria-hidden="true">NSBE</span>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-white/55">{eyebrow}</p>
        <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">{title}</h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">{description}</p>
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
